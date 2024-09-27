import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  width: 30%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const EachRouteItem = styled.div`
  display: flex;
  align-items: center;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaIcon = styled.img`
  width: 10%;
  margin: 5px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
