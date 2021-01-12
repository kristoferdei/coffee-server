import { Coffee } from './entity/coffee.entity';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CoffeeService {
    private coffeeRepository;
    constructor(coffeeRepository: Repository<Coffee>);
    getOne(taskId: number): Promise<any>;
    createOne(createCoffeeRequest: CreateCoffeeDto): Promise<any>;
    private static entityToDTO;
    getAll(): Promise<any>;
    updateOne(coffeeId: number, updateCoffeeRequest: UpdateCoffeeDto): Promise<any>;
    deleteOne(coffeeId: number): Promise<any>;
}
