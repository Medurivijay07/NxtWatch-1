import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingRouteContainer = styled.div`
  min-height: 90vh;
  display: flex;
`
export const GamingRightContainer = styled.div`
  width: 70%;
  min-height: 90vh;
`
export const GamingBanner = styled.div`
  height: 20vh;
  background-color: #cccccc;
  width: 100%;
  display: flex;
  align-items: center;
`
export const GamingIcon = styled(SiYoutubegaming)`
  color: #ff0000;
  background-color: #cbd5e1;
  font-size: 50px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
`
export const GamingItemsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
