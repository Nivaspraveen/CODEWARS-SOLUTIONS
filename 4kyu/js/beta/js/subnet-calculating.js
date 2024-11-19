// Description:
// Hey, Ladies and Gents,

// in this Kata you have to calculate subnets based on 3 inputs:

// the NetID (or a IP in the network) which identifies the network.
// the Subnetmask which devides the IP in to network- and host-portion.
// a number of hosts I want you to address/subnet.

// Example:

// var subnets = calculateSubnets("192.168.0.0", "255.255.255.0", 254);
// this returns an array which holds an array for every subnet with the number of the subnet starting at 0 and then followed by the NetID, first usable IP, last usable IP, BroadcastID and finally the Subnetmask.

// Example:

// //#,NetID        ,first IP     ,last IP        ,BroadcastID    ,Subnetmask
// [[0,"192.168.0.0","192.168.0.1","192.168.0.254","192.168.0.255","255.255.255.0"]]
// You have to check if the NetID is a NetID or an IP, the Subnetmask will be a valid Class B or Class C Subnetmask, the Number of Hosts will not always valid! If it is not possible to calculate subnets you should return an empty array.


// If you are new to Subnetting:
// and if you are able to, use the "CCNA Exploration 1: Network Fundamentals 4.0" Chapter 6
// if not, Google is you friend =P
// or use some of this links:
// http://en.wikipedia.org/wiki/Subnetwork
// http://www.techopedia.com/6/28587/internet/8-steps-to-understanding-ip-subnetting
// http://www.9tut.com/subnetting-tutorial

// Ok, i hope thats it, btw if there any mistakes in the text or anywhere else i'm not nativ English so please tell me, and this is my first Kata if you have suggestions or you found some errors tell me!

// TOPICS: Algorithms, Arrays, Binary, Bits, Fundamentals, Mathematics, Parsing, Strings

var calculateSubnets = function (netid, subnetmask, hosts) {
    const IPtoBinary = ip => ip.split('.').map(octet => parseInt(octet, 10).toString(2).padStart(8, '0')).join('');
    const binarytoIP = binary => binary.match(/.{8}/g).map(bin => parseInt(bin, 2)).join('.');
    const calculateHostBits = hostCount => {
      let bits = 0;
      while ((1 << bits) - 2 < hostCount) bits++;
      return bits;
    };
    const netBinary = IPtoBinary(netid), 
          maskBinary = IPtoBinary(subnetmask), 
          maskPrefix = maskBinary.split('1').length - 1, 
          hostBits = calculateHostBits(hosts);
    if (hostBits > 32 - maskPrefix) return [];
    const newMaskPrefix = 32 - hostBits, totalSubnets = 1 << (newMaskPrefix - maskPrefix), subnets = []; 
    let currNetBinary = netBinary.slice(0, maskPrefix).padEnd(32, '0');
    for (let i = 0; i < totalSubnets; i++) {
      const subnetNetID = binarytoIP(currNetBinary),
            firstIP = binarytoIP(currNetBinary.slice(0, 31) + '1'),
            lastIP = binarytoIP(currNetBinary.slice(0, newMaskPrefix).padEnd(31, '1') + '0'),
            broadcast = binarytoIP(currNetBinary.slice(0, newMaskPrefix).padEnd(32, '1')),
            subnetMask = binarytoIP('1'.repeat(newMaskPrefix).padEnd(32, '0'));
      subnets.push([i, subnetNetID, firstIP, lastIP, broadcast, subnetMask]);
      currNetBinary = (parseInt(currNetBinary, 2) + (1 << (32 - newMaskPrefix))).toString(2).padStart(32, '0');
    }
    return subnets;
};
  
console.log(calculateSubnets("192.168.0.0", "255.255.255.0", 254));