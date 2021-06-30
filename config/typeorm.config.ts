import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'teste',
    synchronize: true,
    autoLoadEntities: true,
}