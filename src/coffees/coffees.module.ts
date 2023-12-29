import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';


@Module({ 
    imports: [TypeOrmModule.forFeature([Coffee])],//this helps typeorm register the coffee eneity
    controllers: [CoffeesController],
    providers: [CoffeesService]

})
export class CoffeesModule {}
