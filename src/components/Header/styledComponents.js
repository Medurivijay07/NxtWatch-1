import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

export const HeaderContainer = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`
export const RightHeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const HeaderItem = styled.li`
  margin-right: 10px;
`
export const DarkModeButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`
export const DarkModeIcon = styled(FaMoon)`
  font-size: 35px;
  margin-right: 30px;
  color: black;
`
export const LightModeIcon = styled(FiSun)`
  font-size: 35px;
  color: white;
  margin-right: 30px;
`

export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border: ${props =>
    props.isDark ? `1px solid #ffffff` : `1px solid #3b82f6`};
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  font-weight: bold;
`
export const ProfileImage = styled.img`
  width: 30%;
`
export const WebsiteLogo = styled.img`
  width: 100%;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 10%;
`
export const PopupContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopUpContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
  border-radius: 7px;
  padding: 40px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  color: #475569;
  border: 1px solid #475569;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`
export const ConfirmButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: 1px solid #4f46e5;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
  outline: none;
`
