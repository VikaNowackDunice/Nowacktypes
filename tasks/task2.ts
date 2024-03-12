interface IPizza{
    hasPepperoni:boolean;
    hasSauce:boolean;
    hasCheese:boolean;
    bakeTime:number;
    bake():void;
}

class Pizza implements IPizza{
  hasPepperoni;
  hasSauce;
  hasCheese;
  bakeTime = 30;

  constructor(hasPepperoni:boolean, hasSauce:boolean, hasCheese:boolean) {
    this.hasPepperoni = hasPepperoni;
    this.hasSauce = hasSauce;
    this.hasCheese = hasCheese;
  }

  bake():void {
    setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}
interface IPasta{
    pastaType:string;
    hasSauce:boolean;
    hasCheese:boolean;
    cookTime:number;
    cook():void;
}

class Pasta{
  pastaType;
  hasSauce;
  hasCheese;
  cookTime = 30;

  constructor(pastaType:string, hasSauce:boolean, hasCheese:Boolean) {
    this.pastaType = pastaType;
    this.hasCheese = hasCheese;
    this.hasSauce = hasSauce;
  }

  cook():void {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}

type KitchenType = Pizza|Pasta

class Kitchen {
  makeDish(dish:KitchenType):KitchenType {
      // эту часть надо переделать
      if ('bake' in dish) {
        dish.bake();
        return dish;
      } else if ('cook' in dish) {
        dish.cook();
        return dish;
      }
      throw new Error('Unknown dish');
  }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spagetti', true, true);

kitchen.makeDish(pizza);
kitchen.makeDish(pasta);