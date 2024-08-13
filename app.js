class Character {
    static maxHealth = 100;  // from the assignment
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;  // also from the assignment
        console.log(`${this.name} rolled a ${result}.`)
    }
}

class Adventurer extends Character {  /// from the assignment
    static roles = ["fighter", "bard", "healer"];
    constructor(name, role) {
        if (!Adventurer.roles.includes(role)) {   // if the assigned role isn't in the roles, then... 
          throw new Error(`${role} must be one of the established options: ${Adventurer.roles.join(", ")}`);   // throw an error that the role has to be one of the predetermined options   (this seems to be working )
        }
        super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);  // 
      super.roll();
    }
  }

  class Companion extends Adventurer {  // my take on repeating the Adventurer pattern for a companion
    constructor(name, role) {
        super(name, role); 
        // Companions have specialized roles.
        this.role = role;
        // Every companion starts with kibble.
        this.inventory.push("kibble");
    }
    // Companions have the ability to soothe the adventurer and heal them.
    soothe() {
        console.log(`${this.name} is soothing the adventurer, healing them...`);
        super.roll();
    }
}


// I think this is right now. I had been getting an error with the role check, but I think it's because I didn't have the role set for the companions.
const robin = new Adventurer("Robin", "fighter");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "bard");
leo.type = "Cat";
leo.inventory.push("kibble");

const frank = new Companion("Frank", "healer");
frank.type = "Flea";
frank.inventory.push("small hat", "sunglasses");

// then I had an error becuase these were up above the constants, which obviously can't happen.

leo.companion = frank;
robin.companion = leo;

// testing with leo.soothe() and frank.soothe() seems to work. However, leo is also able to scout. I'm sure that's right. How does one restrict scounting to the adventurer only?
