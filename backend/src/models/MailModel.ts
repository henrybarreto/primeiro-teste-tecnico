import SendinblueMailService from "../services/SendinblueMailService";
import {Repository} from "../types";
import MailService from "../services/MailService";

export default class MailModel {
    private mailService: MailService;
    constructor(mailService: MailService) {
        this.mailService = mailService;
    }
    public async sendEmailWithRepo(repository: Repository, emailToSend: string) {
        try {
            let mailService: MailService = new SendinblueMailService();
            await mailService.send(repository, emailToSend);
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}