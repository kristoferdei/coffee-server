import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://192.168.1.71:3000', 'http://localhost:3000']
  })
  await app.listen(process.env.PORT || 4000)
}
bootstrap().then(() => {
  console.log('coffee-server started successfully')
})
