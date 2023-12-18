import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Latte",
            brand: "Starbucks",
            flavors: ["creamy", "cappuchino"],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findTypes(id: string) {
        const coffee_type =  this.coffees.find(item => item.id === +id);
        if(!coffee_type){
            throw new NotFoundException(`Coffee with ${id} is not available`);
        }
        return coffee_type;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findTypes(id);
        if (existingCoffee) {
            this.coffees.push()
        }
    }

    delete(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
