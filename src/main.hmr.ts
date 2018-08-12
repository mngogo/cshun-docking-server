import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

declare const module: any;
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(3001);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();