import Koa from 'koa';
import KoaLogger from 'koa-logger';
import KoaBodyParser from 'koa-bodyparser';
import KoaJson from 'koa-json';
import KoaCors from '@koa/cors'
import dotenv from 'dotenv';
import MailRouter from './api/mail';

function init(env: any) {
    dotenv.config();
    let koa = new Koa();

    koa.use(KoaCors());
    koa.use(KoaLogger());
    koa.use(KoaJson());
    koa.use(KoaBodyParser());
    koa.use(MailRouter.routes());
    koa.listen(3001, () => {
        console.info(`Server online in the port ${env.PORT}`)
    });
}

init(process.env);