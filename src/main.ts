import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  configSwagger(app);

  // const config = new DocumentBuilder()
  //   .setTitle('Fake API')
  //   .setDescription('Returns fake data')
  //   .setVersion('1.0')
  //   .addTag('api')
  //   .addTag('Users', 'Employee Resource')
  //   .addTag('Applications', 'Application Resource')
  //   .addTag('Customers', 'Client Resource')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
