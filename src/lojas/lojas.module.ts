import { LojasController } from './lojas.controller';
import { Module } from '@nestjs/common';
import { LojasService } from './lojas.services';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Loja } from './lojas.entity'

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [LojasController,],
    providers: [LojasService],
})
export class LojasModule { }
