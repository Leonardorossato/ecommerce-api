import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './env/envoriment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Email Api')
    .setDescription('Tecnologias: Nestjs, Swagger, TypeOrm, Postgres e Docker')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(environment.APP_PORT|| 3000, () =>
    console.log(
      `App is Running\nDocumentation available on http://localhost:${environment.APP_PORT}/docs`,
    ),
  );
}
bootstrap();
