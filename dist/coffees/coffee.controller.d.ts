import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeeController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeService);
    getAll(): Promise<any>;
    getOne(coffeeId: number): Promise<any>;
    createOne(createCoffeeDto: CreateCoffeeDto): Promise<any>;
    updateOne(coffeeId: number, updateTaskRequest: UpdateCoffeeDto): Promise<any>;
    deleteOne(coffeeId: number): Promise<void>;
}
