import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingItem = styled.div`
  width: 30%;
  margin: 10px;
`
export const GamingThumbnail = styled.img`
  width: 90%;
`
export const GameItemTitle = styled.p`
  font-size: 18px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
