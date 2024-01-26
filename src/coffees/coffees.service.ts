import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
    ){}

    findAll() {
        return this.coffeeRepository.find();
    }

    async findTypes(id: string) {
        const coffee_type = await this.coffeeRepository.findOne({where: {id: +id}});
        if(!coffee_type){
            throw new NotFoundException(`Coffee with ${id} is not available`);
        }
        return coffee_type;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto
        });
        //this is very important since the preload method will return undefined if the specified coffee is found.
        if (!existingCoffee) {
            throw new NotFoundException(`This coffee with ${id} does not exist.`);
        }
        return this.coffeeRepository.save(existingCoffee);
    }

    async delete(id: string) {
        const coffee = await this.findTypes(id);
        return this.coffeeRepository.remove(coffee);
    }
}
