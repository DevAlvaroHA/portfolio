import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Security: Helmet headers (XSS, clickjacking, etc.)
  app.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
    crossOriginEmbedderPolicy: false, // Para que Swagger funcione
  }));
  
  // Enable validation globally with whitelist and transform
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Strip properties that don't have decorators
    forbidNonWhitelisted: true, // Throw error if non-whitelisted properties
    transform: true, // Transform payloads to DTO instances
  }));
  
  // Set up Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Professional Portfolio RESTful API')
    .setVersion('1.0')
    .addTag('profile', 'Endpoints for managing personal information')
    .addTag('projects', 'Endpoints for managing projects')
    .addTag('experience', 'Endpoints for managing work experience')
    .addTag('education', 'Endpoints for managing education')
    .addTag('contact', 'Endpoints for contact messages')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors({
    origin: process.env.NODE_ENV === 'production' 
      ? [
          'https://aha-portfolio.vercel.app',
          process.env.FRONTEND_URL || '',
        ].filter(url => url !== '')
      : [
          'http://localhost:3000',
          'http://localhost:3003',
          'http://frontend:3003',
        ],
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400, // Cache preflight 24 hours
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();