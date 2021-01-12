import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    getOne(taskId: number): Promise<any>;
    createOne(createOrderRequest: CreateOrderDto): Promise<any>;
    private static entityToDTO;
    getAll(): Promise<any>;
}
