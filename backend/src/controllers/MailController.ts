import {Context} from 'koa';
import InternalServerErrorHttpResponse from '../http/reponse/InternalServerErrorHttpResponse';
import OkHttpResponse from '../http/reponse/OkHttpResponse';
import {Repository} from '../types';
import Controller from "./Controller";
import MailModel from "../models/MailModel";
import SendinblueMailService from "../services/SendinblueMailService";

/**
 * Request model to send the e-mail and return a http code.
 * Controller care about http request details.
 * @param context
 */
export default class MailController extends Controller {
    public async post(context: Context): Promise<any> {
        try {
            let repo: Repository = {
                name: context.request.body.repo.name,
                url: context.request.body.repo.url
            };
            let emailToSend: string = context.request.body.to;
            let mailModel = new MailModel(new SendinblueMailService());
            let resultFromMailModel = await mailModel.sendEmailWithRepo(repo, emailToSend);
            if(!resultFromMailModel) {
                context.response = new InternalServerErrorHttpResponse().build(context,
                    'Could not request to the server send the e-mail to you')
            }
            context.response = new OkHttpResponse().build(context,
                'All right! The e-mail will be send to you!'
            );
        } catch (e) {
            console.error(e);
            context.response = new InternalServerErrorHttpResponse().build(context,
                'Invalid params');
        }

    }
}