import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  margin-right: 10px;
  margin-bottom: 30px;
  width: 30%;
`
export const ThumbnailImage = styled.img`
  width: 90%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const VideoProfileImage = styled.img`
  width: 10%;
  margin-right: 10px;
  margin-top: 10px;
`
export const VideoDetailsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  color: #1e293b;
  font-size: 14px;
`
export const ViewsPostedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000000;
`
