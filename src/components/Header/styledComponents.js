import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'

export const HeaderContainer = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
`

export const LogoutButton = styled.button`
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 7px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  background-color: #ffffff;
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
