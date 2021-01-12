import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Order } from './entity/order.entity'
import { OrderDto } from './dto/order.dto'
import { CreateOrderDto } from './dto/create-order.dto'

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

  public async getOne(taskId: number): Promise<any> {
    const order: Order = await this.orderRepository.findOne(taskId)

    if (!order) throw new NotFoundException(`Order with the id ${taskId} was not found`)

    return OrdersService.entityToDTO(order)
  }

  public async createOne(createOrderRequest: CreateOrderDto): Promise<any> {
    const order: Order = new Order()
    order.name = createOrderRequest.name
    order.email = createOrderRequest.email
    order.street = createOrderRequest.street
    order.city = createOrderRequest.city
    order.country = createOrderRequest.country
    order.zip = createOrderRequest.zip
    order.card = createOrderRequest.card
    order.date = createOrderRequest.date
    order.cvc = createOrderRequest.cvc

    await this.orderRepository.save(order)

    return OrdersService.entityToDTO(order)
  }

  private static entityToDTO(order: Order): OrderDto {
    const orderDto = new OrderDto()
    orderDto.id = order.id
    orderDto.name = order.name
    orderDto.email = order.email
    orderDto.email = order.email
    orderDto.street = order.street
    orderDto.city = order.city
    orderDto.country = order.country
    orderDto.zip = order.zip
    orderDto.card = order.card
    orderDto.date = order.date
    orderDto.cvc = order.cvc

    return orderDto
  }

  public async getAll(): Promise<any> {
    const orders: Order[] = await this.orderRepository.find()

    return orders.map(x => OrdersService.entityToDTO(x))
  }
}
