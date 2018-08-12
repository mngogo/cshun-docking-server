import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(3001);
}
bootstrap();