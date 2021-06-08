import {Context, Response} from 'koa';

/**
 * This class build a custom http response through the code and a message
 */
export default abstract class HttpResponse {
    protected httpStatusCode: number;

    /**
     * Create a new instance of HttpResponse based in a http code
     * @param httpStatusCode
     * @protected
     */
    protected constructor(httpStatusCode: number) {
        this.httpStatusCode = httpStatusCode;
    }

    /**
     * Build a custom Koa's response
     * @param context
     * @param message
     * @return Response
     */
    build(context: Context, message: string): Response {
        let response = context.response;
        response.status = this.httpStatusCode;
        response.body = {
            'message': message
        }
        return response;
    }
}