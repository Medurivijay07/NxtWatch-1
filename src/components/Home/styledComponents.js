import styled from 'styled-components'
import {IoMdClose, IoMdSearch} from 'react-icons/io'

export const RightHomeContainer = styled.div`
  min-height: 90vh;
  width: 75%;
`
export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-top: 10px;
  align-items: flex-start;
  padding: 30px;
`
export const HomeMainContainer = styled.div`
  display: flex;
  min-height: 85vh;
  margin: 0px;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`
export const HomeBannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  align-items: flex-start;
`
export const HomeBannerLogo = styled.img`
  width: 50%;
`
export const GetItNowButton = styled.button`
  border: 1px solid #1e293b;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: #1e293b;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`
export const SearchContainer = styled.div`
  width: 60%;
  display: flex;
  border: 1px solid #475569;
  border-radiud: 7px;
  align-items: center;
  margin-top: 10px;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`
export const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${props => (props.isDark ? '#000000' : '')};
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
export const SearchIcon = styled.button`
  width: 10%;
  cursor: pointer;
  outline: none;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#000000' : '')};
`
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoResultsContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoResultsImage = styled.img`
  width: 40%;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
`
export const FailureViewContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const LoaderContainer = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  color: #00306e;
`
export const IoMdSearchIcon = styled(IoMdSearch)`
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
