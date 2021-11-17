interface inventoryState {
  potions: {
    potionOfHealth: {
      name: string;
      qty: number;
    };
    antidote: {
      name: string;
      qty: number;
    };
  };
  weapons: {
    rustyIronDagger: {
      name: string;
      baseAttack: number;
      maxAttack: number;
      qty: number;
    };
  };
}

export class Inventory {
  inventory: inventoryState = {
    potions: {
      potionOfHealth: {
        name: "potion of Health",
        qty: 3,
      },
      antidote: {
        name: "Antidote",
        qty: 1,
      },
    },
    weapons: {
      rustyIronDagger: {
        name: "Rusty Iron Dagger",
        baseAttack: 1,
        maxAttack: 10,
        qty: 1,
      },
    },
  };
}
