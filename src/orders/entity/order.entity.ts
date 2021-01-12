import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcryptjs'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  street: string

  @Column()
  city: string

  @Column()
  country: string

  @Column()
  zip: string

  @Column()
  card: string

  @Column()
  date: string

  @Column()
  cvc: string

  @CreateDateColumn() createdOn?: Date

  @BeforeInsert()
  async hashCard(): Promise<any> {
    this.card = await bcrypt.hash(this.card, 10)
  }

  @BeforeInsert()
  async hashDate(): Promise<any> {
    this.date = await bcrypt.hash(this.date, 10)
  }

  @BeforeInsert()
  async hashCVC(): Promise<any> {
    this.cvc = await bcrypt.hash(this.cvc, 10)
  }
}
