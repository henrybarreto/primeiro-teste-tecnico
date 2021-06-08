import HttpResponse from './HttpResponse';

export default class InternalServerErrorHttpResponse extends HttpResponse {
    constructor() {
        super(500);
    }
}
