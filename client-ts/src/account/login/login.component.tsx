import * as React from 'react';
import { IAccount } from './../account';
import LoginService from './login.service';

class LoginComponent extends React.Component<{}, IAccount> {
  
private loginService: LoginService;

  constructor(props: any) {
    super(props);
    this.state = {
      password: '',
      username: ''
    }
    this.loginService = LoginService.Instance;
  }
 
  public render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={this.state.username} onChange={this.onUsernameChanged}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={this.onPasswordChanged}/>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }

  private submit = async (e: any) => {
    e.preventDefault();
    console.log('state in login.component', this.state);
    const ans = await this.loginService.create(this.state);
    const json = await ans.json();
    console.log(json, 'json');
  }

  private onUsernameChanged = (e: any) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  private onPasswordChanged= (e: any) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }
}

export default LoginComponent;
