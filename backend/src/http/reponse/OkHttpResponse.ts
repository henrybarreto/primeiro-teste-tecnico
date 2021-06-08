import HttpResponse from './HttpResponse';

export default class OkHttpResponse extends HttpResponse {
    constructor() {
        super(200);
    }
}