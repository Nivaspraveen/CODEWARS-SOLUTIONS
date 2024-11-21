// Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:

// var myDependentFunc = inject(function (secondDepency, firstDependency) {
//   firstDependency();
//   secondDepency();
// });

// myDependentFunc();
// As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:

// var deps = {
//   'firstDependency': function () {return 'this is firstDependency';},
//   'secondDepency': function () {return 'this is secondDepency';},
// };
// Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:

// var DI = function (dependency) {
//   this.dependency = dependency;
// };
// Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.

// Topics: Regular Expressions, Design Patterns, Object-oriented Programming, Angular

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */

class DI {
    constructor(dependency) {
        this.dependency = dependency;
    }
    // Should return new function with resolved dependencies
    inject(func) {
        const dependency = this.dependency;
        const paramNames = func.toString().match(/^[^\(]*\(\s*([^\)]*)\)/)[1].split(/\s*,\s*/).filter(p => p);
        return function () {
            const args = paramNames.map(name => dependency[name]);
            return func.apply(this, args);
        };
    }
}
  
