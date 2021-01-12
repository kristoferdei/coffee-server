import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common'
import { CoffeeService } from './coffee.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Controller('coffees')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  public async getAll(): Promise<any> {
    return await this.coffeeService.getAll()
  }

  @Get('/:id')
  public async getOne(@Param('id') coffeeId: number): Promise<any> {
    return await this.coffeeService.getOne(coffeeId)
  }

  @Post()
  public async createOne(@Body() createCoffeeDto: CreateCoffeeDto): Promise<any> {
    return await this.coffeeService.createOne(createCoffeeDto)
  }

  @Put('/:id')
  public async updateOne(@Param('id') coffeeId: number, @Body() updateTaskRequest: UpdateCoffeeDto): Promise<any> {
    return await this.coffeeService.updateOne(coffeeId, updateTaskRequest)
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteOne(@Param('id') coffeeId: number): Promise<void> {
    await this.coffeeService.deleteOne(coffeeId)
  }
}
