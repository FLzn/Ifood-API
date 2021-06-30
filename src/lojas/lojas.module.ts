import { LojasController } from './lojas.controller';
import { Module } from '@nestjs/common';
// import { LojasService } from './lojas.services';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Loja } from './loja.entity'

@Module({
    imports: [TypeOrmModule.forFeature([])],
    controllers: [LojasController,],
    providers: [],
})
export class LojasModule { }
