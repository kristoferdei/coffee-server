import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  description: string

  @Column()
  size: number

  @Column()
  image: string

  @Column()
  order: boolean
}
