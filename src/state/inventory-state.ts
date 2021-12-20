export class Inventory {
  gold = 10;
  // the following properties are inaccessible and show up as undefined.
  potions: {
    potionOfHealth: {
      name: "potion of Health";
      qty: 3;
    };
    antidote: {
      name: "Antidote";
      qty: 1;
    };
  };
  weapons: {
    rustyIronDagger: {
      name: "Rusty Iron Dagger";
      baseAttack: 1;
      maxAttack: 10;
      qty: 1;
    };
  };
}
