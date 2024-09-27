import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const TrendingRouteContainer = styled.div`
  min-height: 90vh;
  display: flex;
`
export const RightTrendingContainer = styled.div`
  min-height: 90vh;
  width: 70%;
`
export const TrendingBannerBackground = styled.div`
  background-color: #cccccc;
  height: 20vh;
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
export const TrendingVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const TrendingFailureView = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TrendingFailureImage = styled.img`
  width: 50%;
`
export const TrendingRetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
`
export const LoaderContainer = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
