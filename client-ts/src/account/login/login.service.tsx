import { IAccount } from 'src/account/account';

export default class LoginService {

    private static instance: LoginService;

    public static get Instance()
    {
        // Do you need arguments? Make it a regular method instead.
        return this.instance || (this.instance = new this());
    }

    private url: string = '/api/account';

    public create(data: IAccount) {
        return fetch(this.url, {
            body: JSON.stringify(data),           
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        }); 
    }
}