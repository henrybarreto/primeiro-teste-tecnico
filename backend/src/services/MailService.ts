import {Repository} from "../types";

export default abstract class MailService {
    abstract send(repository: Repository, emailToSend: string): Promise<boolean>;
}
