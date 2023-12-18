import { Body, Controller, Get, Res, HttpCode, HttpStatus, Param, Post, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';


@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery) {
        //const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findTypes(@Param('id') id: number) {
        console.log(typeof id);
        return this.coffeesService.findTypes("" + id);// this is a validation implementation that transforms incomming payload to fit our DTO
    }

    
    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param("id") id: string, updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.coffeesService.delete(id);
    }


}
