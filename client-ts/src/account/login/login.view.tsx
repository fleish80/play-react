import * as React from 'react';

export interface ILoginViewProps 
{
    submit: (e: React.SyntheticEvent) => void;
    onUsernameChanged: (e: React.SyntheticEvent) => void;
    onPasswordChanged: (e: React.SyntheticEvent) => void;
    message: string;
}

const LoginView: React.FunctionComponent<ILoginViewProps> = (props: ILoginViewProps) =>
    <form onSubmit={props.submit}>
        {props.message && <p className="message">{props.message}</p>}
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={props.onUsernameChanged} />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={props.onPasswordChanged} />
        </div>
        <div>
            <button type="submit">Create</button>
        </div>
    </form>

export default LoginView;
