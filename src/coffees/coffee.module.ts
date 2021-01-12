import { Module } from '@nestjs/common'
import { CoffeeController } from './coffee.controller'
import { CoffeeService } from './coffee.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Coffee } from './entity/coffee.entity'

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
  imports: [TypeOrmModule.forFeature([Coffee])]
})
export class CoffeeModule {}
