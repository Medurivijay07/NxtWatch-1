import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingRouteContainer = styled.div`
  min-height: 90vh;
  display: flex;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`
export const GamingRightContainer = styled.div`
  width: 75%;
  min-height: 90vh;
`
export const GamingBanner = styled.div`
  height: 20vh;
  background-color: ${props => (props.isDark ? '#181818' : '#cccccc')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
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
export const GamingLoaderContainer = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingFailureViewContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const GamingRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
`
