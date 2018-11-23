import * as React from 'react';
import { IAccount } from 'src/account';

class LoginComponent extends React.Component<{}, IAccount> {
  
  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.state = {
      password: '',
      username: ''
    }
    
  }
 
  // private loginService = new LoginService();

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

  private submit = (e: any) => {
    e.preventDefault();
    console.log('account', this.state);
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
