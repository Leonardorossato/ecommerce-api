import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // swagger
  const options = new DocumentBuilder()
    .setTitle('Pin Places Announcer API')
    .setDescription('The Pin Places Announcer API documentation')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.APP_PORT || 3000, () =>
    console.log(
      `App is Running\nDocumentation available on http://localhost:${process.env.APP_PORT}/docs`,
    ),
  );
}
void bootstrap();
