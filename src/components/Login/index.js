import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  LoginAppContainer,
  LoginBoxContainer,
  LogoImage,
  UsernameContainer,
  LabelElement,
  Input,
  FormContainer,
  CheckBoxContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <UsernameContainer>
        <LabelElement htmlFor="username">USERNAME</LabelElement>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
        />
      </UsernameContainer>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state

    return (
      <UsernameContainer>
        <LabelElement htmlFor="password">PASSWORD</LabelElement>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
        />
      </UsernameContainer>
    )
  }

  render() {
    const {showErrMsg, errorMsg, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginAppContainer>
        <LoginBoxContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onSubmitForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            <CheckBoxContainer>
              <input
                id="showpassword"
                type="checkbox"
                checked={showPassword}
                onChange={this.onToggleCheckbox}
              />
              <label htmlFor="showpassword">Show Password</label>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginBoxContainer>
      </LoginAppContainer>
    )
  }
}

export default Login
