import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe());
  
  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Professional Portfolio RESTful API with authentication')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('profile', 'Endpoints para gestionar información personal')
    .addTag('projects', 'Endpoints para gestionar proyectos')
    .addTag('experience', 'Endpoints para gestionar experiencia laboral')
    .addTag('education', 'Endpoints para gestionar formación académica')
    .addTag('contact', 'Endpoints para mensajes de contacto')
    .addTag('auth', 'Endpoints de autenticación')
    .addTag('users', 'Endpoints de gestión de usuarios admin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3003',
      'http://frontend:3003',
      process.env.FRONTEND_URL || '',
    ].filter(url => url !== ''),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(3000);
}
bootstrap();