import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const SavedVideosContainer = styled.div`
  min-height: 90vh;
  display: flex;
  background-color: ${props => (props.isDark ? '#000000' : '')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
export const SavedVideosRightContainer = styled.div`
  min-height: 90vh;
  width: 75%;
`
export const SavedVideosBanner = styled.div`
  height: 20vh;
  background-color: ${props => (props.isDark ? '#181818' : '#cccccc')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
  width: 100%;
  display: flex;
  align-items: center;
`
export const TrendingIcon = styled(FaFire)`
  color: #ff0000;
  font-size: 50px;
  margin-right: 20px;
  margin-left: 30px;
  background-color: #cbd5e1;
  padding: 10px;
  border-radius: 50%;
`
export const NoSavedVideosViewContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideosImage = styled.img`
  width: 50%;
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
