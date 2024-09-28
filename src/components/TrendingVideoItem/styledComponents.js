import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingItem = styled.li`
  margin-bottom: 50px;
  display: flex;
  margin-right: 20px;
`
export const ThumbnailImageTrending = styled.img`
  width: 50%;
  margin-right: 10px;
`
export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingVideoTitle = styled.p`
  font-size: 18px;
`
export const PublishedAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #000000;
`
