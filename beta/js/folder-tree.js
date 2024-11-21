// Description:
// Your task is to implement a function that simulates the "tree" command in Linux. The "tree" command displays the folder structure of a given path in a tree-like format. We don't need all the functionality, just the tree itself. If you have never seen result of this command, here is example:

// my_folder
// ├── documents
// │   ├── doc1.txt
// │   ├── doc2.txt
// │   └── new_docs
// │       └── new_doc1.txt
// └── scan.pdf
// Input
// You will receive an object that represents the folder structure. Each key in the object is either a folder or a file. If the value of a key is an object then it represents a subfolder. If the value is null, it represents a file. Subfolder can be empty. Second argument that you receive is a string representing the name of the root folder. Root folder itself can be empty (in this case there is no any tree). All folders/files names will be in lowercase. Here is example input:

// const folderObject = {
//   documents: {
//     "doc1.txt": null,
//     "doc2.txt": null,
//     new_docs: { "new_doc1.txt": null },
//   },
//   "scan.pdf": null,
// };
// Output
// Your function should return a string that shows folder structure. As a line separator use \n. All folders/files on each level should be sorted alphabetically. You can use preloaded "blocks" to build up a tree: T_SHAPE = "├── ", PIPE = "│   ", EMPTY = "    ", CORNER = "└── ".

// Happy coding!
// Topics: Strings, Algorithms, Trees, Recursion

// you can make use of preloaded strings:
const T_SHAPE = "├── ";
const PIPE = "│   ";
const EMPTY = "    ";
const CORNER = "└── ";

const tree = (folderObject, root) => {  
    if (Object.keys(folderObject).length === 0) return root;
    const buildTree = (folder, prefix, isLast) => {
      let tree = '';
      const keys = Object.keys(folder).sort();
      keys.forEach((key, index) => {
        const isLastTerm = index === keys.length - 1, connector = isLastTerm ? CORNER : T_SHAPE;
        tree += `${prefix}${connector}${key}\n`;
        if (folder[key] !== null) {
          const newPrefix = prefix + (isLastTerm ? EMPTY : PIPE);
          tree += buildTree(folder[key], newPrefix, isLastTerm);
        }
      });
      return tree;
    };
    return root + '\n' + buildTree(folderObject, '', true).trim();
};