import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
config();

const configService = new ConfigService();

export const dataSourceOptions = {
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true, // Be cautious about using synchronize in production
    migrations: ['src/database/migrations/*-migration.ts'],
    migrationsRun: false,
    logging: true,
} as DataSourceOptions;

export const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;