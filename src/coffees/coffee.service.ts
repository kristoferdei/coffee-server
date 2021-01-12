import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Coffee } from './entity/coffee.entity'
import { Repository } from 'typeorm'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { CoffeeDto } from './dto/coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Injectable()
export class CoffeeService {
  constructor(@InjectRepository(Coffee) private coffeeRepository: Repository<Coffee>) {}

  public async getOne(taskId: number): Promise<any> {
    const coffee: Coffee = await this.coffeeRepository.findOne(taskId)

    if (!coffee) throw new NotFoundException(`Coffee with the id ${taskId} was not found`)

    return CoffeeService.entityToDTO(coffee)
  }

  public async createOne(createCoffeeRequest: CreateCoffeeDto): Promise<any> {
    const coffee: Coffee = new Coffee()
    coffee.name = createCoffeeRequest.name
    coffee.price = createCoffeeRequest.price
    coffee.description = createCoffeeRequest.description
    coffee.size = createCoffeeRequest.size
    coffee.image = createCoffeeRequest.image
    coffee.order = createCoffeeRequest.order

    await this.coffeeRepository.save(coffee)

    return CoffeeService.entityToDTO(coffee)
  }

  private static entityToDTO(coffee: Coffee): CoffeeDto {
    const coffeeDto = new CoffeeDto()
    coffeeDto.id = coffee.id
    coffeeDto.name = coffee.name
    coffeeDto.price = coffee.price
    coffeeDto.description = coffee.description
    coffeeDto.size = coffee.size
    coffeeDto.image = coffee.image
    coffeeDto.order = coffee.order

    return coffeeDto
  }

  public async getAll(): Promise<any> {
    const coffees: Coffee[] = await this.coffeeRepository.find()

    return coffees.map(x => CoffeeService.entityToDTO(x))
  }

  public async updateOne(coffeeId: number, updateCoffeeRequest: UpdateCoffeeDto): Promise<any> {
    const coffee: Coffee = await this.getOne(coffeeId)

    coffee.name = updateCoffeeRequest.name || coffee.name
    coffee.price = updateCoffeeRequest.price || coffee.price
    coffee.description = updateCoffeeRequest.description || coffee.description
    coffee.size = updateCoffeeRequest.size || coffee.size
    coffee.image = updateCoffeeRequest.image || coffee.image
    coffee.order = updateCoffeeRequest.order || coffee.order

    await this.coffeeRepository.save(coffee)

    return CoffeeService.entityToDTO(coffee)
  }

  public async deleteOne(coffeeId: number): Promise<any> {
    const coffee: Coffee = await this.getOne(coffeeId)

    await this.coffeeRepository.remove(coffee)
  }
}
