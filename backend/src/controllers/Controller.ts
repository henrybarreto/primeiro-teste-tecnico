import {Context} from "koa";

export default abstract class Controller {
    post(context: Context): Promise<any> {
        return Promise.resolve(undefined);
    }
    get(context: Context): Promise<any> {
        return Promise.resolve(undefined);
    }
    put(context: Context): Promise<any> {
        return Promise.resolve(undefined);
    }
    delete(context: Context): Promise<any> {
        return Promise.resolve(undefined);
    }
}
