import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
    constructor() {
        super({
            datasources: {
                db: {
                    url: 'postgresql://postgres:132435@localhost:5432/nestjs-access-tokens?schema=public',
                },
            },
        });
    }

    onModuleInit() {
        this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
