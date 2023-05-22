import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
    
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  

  const config = new DocumentBuilder()
  .setTitle('Api RCT')
  .setDescription('API acceso RCT')
  .setVersion('1.0')
  .addBearerAuth(undefined, 'defaultBearerAuth')
  .build();
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api', app, document);
const port = process.env.PORT || 3000;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

}
bootstrap();

