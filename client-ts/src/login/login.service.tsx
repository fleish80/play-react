import { IAccount } from 'src/account';

export default class LoginService {

    private url: string = '/api/account';

    public async create(data: IAccount) {
        console.log('data', data);
        const response = await fetch(this.url, {
            body: JSON.stringify({ data }),           
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        const json = await response.json();
        return json; 
    }
}