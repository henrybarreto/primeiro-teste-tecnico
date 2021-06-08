import axios from 'axios';
import dotenv from 'dotenv';
import {Repository} from '../types';
import MailService from "./MailService";

/**
 * Send a post request to the sendinblue API requesting to send a e-mail
 * mailModel cares about the main logic of application.
 * @param repo
 * @param emailToSend
 */
export default class SendinblueMailService extends MailService {
    public async send(repository: Repository, emailToSend: string) {
        dotenv.config();
        try {
            await axios.post('https://api.sendinblue.com/v3/smtp/email', {
                    'sender':{
                        'email': 'athenrybarreto@gmail.com'
                    },
                    'to':[
                        {
                            'email': emailToSend,
                        }
                    ],
                    'subject':'Repository',
                    'htmlContent': emailHtmlTemplate(repository)
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'api-key': process.env.SENDINBLUE_API,
                        'Content-Type': 'application/json',
                    }},
            );

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

}

function emailHtmlTemplate(repo: Repository) {
    return (
        '<html><head></head><body><h3>This is the repository which you have chosen:</h3><a href="' +
        repo.url
        +
        '">' +
        repo.name
        +
        '</a></body></html>'
    );
}
