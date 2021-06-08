import Router from '@koa/router';
import MailController from '../controllers/MailController';

let mailRouter = new Router();
let mailController = new MailController();

/**
 * This router would be set inside another router, main one, and set as a Koa Middleware.
 */
mailRouter.post('/mail', mailController.post);

export default mailRouter;

