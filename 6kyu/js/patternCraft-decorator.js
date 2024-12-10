// Decscription: 
// The Decorator Design Pattern can be used, for example, in the StarCraft game to manage upgrades.

// The pattern consists in "incrementing" your base class with extra functionality.

// A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".

// Your Task
// Complete the code so that when a Marine gets a WeaponUpgrade it increases the damage by 1, and if it is a ArmorUpgrade then increase the armor by 1.

// You have 3 classes:

// Marine: has a damage and an armor properties
// MarineWeaponUpgrade and MarineArmorUpgrade: upgrades to apply on marine. Accepts a Marine in the constructor and has the same properties as the Marine

// Design Patterns Fundamentals

class Marine {
    constructor(damage = 1, armor = 1) {
      this._damage = damage;
      this._armor = armor;
    }
    
    get damage() {
      return this._damage;
    }
    set damage(value) { 
      this._damage = value;
    }
    
    get armor() { 
      return this._armor;
    }
    set armor(value) { 
      this._armor = value;
    }
}
  
class MarineWeaponUpgrade {
    constructor(marine) {
      this.marine = marine;
    }
    
    get damage() { 
      return this.marine.damage + 1;
    }
    set damage(value) {
      this.marine.damage = value;
    }
    
    get armor() { 
      return this.marine.armor; 
    }
    set armor(value) { 
      this.marine.armor = value;
    }
}
  
class MarineArmorUpgrade {
    constructor(marine) {
      this.marine = marine;
    }
    
    get damage() { 
      return this.marine.damage;
    }
    set damage(value) { 
      this.marine.damage = value;
    }
    
    get armor() { 
      return this.marine.armor + 1;
    }
    set armor(value) {  
      this.marine.armor = value;
    }
}