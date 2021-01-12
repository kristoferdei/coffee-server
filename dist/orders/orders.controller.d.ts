import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<any>;
    getOne(orderId: number): Promise<any>;
    createOne(createOrderDto: CreateOrderDto): Promise<any>;
}
