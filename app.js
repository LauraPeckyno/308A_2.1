class Character {
    static maxHealth = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


class Adventurer extends Character {
    static roles = ["fighter", "bard", "healer"];
    constructor(name, role) {
        if (!Adventurer.roles.includes(role)) {
          throw new Error(`Invalid role: ${role}. Must be one of: ${Adventurer.roles.join(", ")}`);
        }
        super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Adventurer {
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

const robin = new Adventurer("Robin", "fighter");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "bard");
leo.type = "Cat";
leo.inventory.push("kibble");

const frank = new Companion("Frank", "healer");
frank.type = "Flea";
frank.inventory.push("small hat", "sunglasses");

leo.companion = frank;
robin.companion = leo;

