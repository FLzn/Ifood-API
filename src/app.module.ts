import { LojasModule } from './lojas/lojas.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig
    }),
    LojasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
