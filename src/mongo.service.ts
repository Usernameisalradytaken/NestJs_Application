import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoService implements MongooseOptionsFactory {
    constructor( private configService: ConfigService ) {}

    createMongooseOptions(): MongooseModuleOptions {

        const user     = this.configService.get('db_username');
        const password = this.configService.get('db_password');
        const server   = this.configService.get('db_clustername');
        const database = this.configService.get('db_name');

        return {
            uri: `mongodb://${user}:${password}@${server}/${database}?retryWrites=true&w=majority`,
        };
    }
}