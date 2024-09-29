import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '')};
`
export const LoginBoxContainer = styled.div`
  width: 40%;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px #bfbfbf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#000000' : '')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
export const LogoImage = styled.img`
  width: 50%;
  margin-bottom: 20px;
`
export const UsernameContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const LabelElement = styled.label`
  color: #475569;
  margin-bottom: 10px;
`
export const Input = styled.input`
  padding: 7px;
  outline: none;
  border: 1px solid #475569;
  width: 80%;
  margin-bottom: 10px;
  border-radius: 5px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const CheckBoxContainer = styled.div`
  display: flex;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
