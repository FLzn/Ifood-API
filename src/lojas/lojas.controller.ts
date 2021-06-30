import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('lojas')

export class LojasController {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){}

    @Get()
    findAll(): string {
        return "Rota para all"
    }

    @Post()
    createLojas(@Body() loja) {
        console.log(loja)
    }

    @Put(':id')
    updateLoja(@Body() loja, @Param() params) : string {
        return `Loja: ${loja} do id ${params.id}`
    }
    
    @Put('delete/:id')
    deleteLoja(@Param() params) : string {
        return `Loja ${params.id} deletada`
    }
}
