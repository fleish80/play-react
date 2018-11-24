import * as React from 'react';
import { IAccount } from './../account';
import './login.scss';
import LoginService from './login.service';
import LoginView, { ILoginViewProps } from './login.view';

interface IState {
  account: IAccount,
  message: string
}

export default class LoginComponent extends React.Component<{}, IState> {

  private loginService: LoginService;

  constructor(props: any) {
    super(props);
    this.state = {
      message: '',
      account: {
        password: '',
        username: ''
      }
    }
    this.loginService = LoginService.Instance;
  }

  public render() {
    const loginViewProps: ILoginViewProps = {
      message: this.state.message,
      onPasswordChanged: this.onPasswordChanged,
      onUsernameChanged: this.onUsernameChanged,
      submit: this.submit
    }
    return (
      <LoginView {...loginViewProps} />
    );
  }

  private submit = async (e: React.SyntheticEvent) => {
    this.setState({ message: 'Loading...' });
    e.preventDefault();
    const ans = await this.loginService.create(this.state.account);
    const account: IAccount = await ans.json();
    this.setState({ message: `The accout user: ${account.username} was registred successfully` });
  }

  private onUsernameChanged = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({ account: { ...this.state.account, username: (e.target as HTMLInputElement).value } });
  }

  private onPasswordChanged = (e: any) => {
    e.preventDefault();
    this.setState({ account: { ...this.state.account, password: (e.target as HTMLInputElement).value } });
  }
}

