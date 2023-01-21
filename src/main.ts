import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ConfigService } from '@nestjs/config/dist';
import {  logger } from './logger.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // enable ValidationPipe`
  // app.use(
  //   session({
  //     secret: process.env.session_secret,
  //     resave: false,
  //     cookie: { maxAge: 24*3600*1000 },
  //     saveUninitialized: false,
  //   }),
  // );
  
  app.use(logger)
  await app.listen(process.env.port || 3000);
}
bootstrap();
