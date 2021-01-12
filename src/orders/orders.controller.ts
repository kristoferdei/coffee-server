import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  public async getAll(): Promise<any> {
    return await this.ordersService.getAll()
  }

  @Get('/:id')
  public async getOne(@Param('id') orderId: number): Promise<any> {
    return await this.ordersService.getOne(orderId)
  }

  @Post()
  public async createOne(@Body() createOrderDto: CreateOrderDto): Promise<any> {
    return await this.ordersService.createOne(createOrderDto)
  }
}
