import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loja } from './loja.entity'

@Injectable()
export class LojasService {
    constructor(
        @InjectRepository(Loja)
        private lojasService: Repository<Loja>
        // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {}

    // readAll(){

    // }
    
}