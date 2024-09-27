import {formatDistanceToNow} from 'date-fns'

import {
  TrendingItem,
  ThumbnailImageTrending,
  TrendingContentContainer,
  TrendingVideoTitle,
  PublishedAndViewsContainer,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {item} = props
  const {thumbnailUrl, title, channel, viewCount, publishedAt} = item
  const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
  const {name} = channel
  return (
    <TrendingItem>
      <ThumbnailImageTrending src={thumbnailUrl} />
      <TrendingContentContainer>
        <TrendingVideoTitle>{title}</TrendingVideoTitle>
        <p>{name}</p>
        <PublishedAndViewsContainer>
          <p>{viewCount} views </p>
          <p> . {date}</p>
        </PublishedAndViewsContainer>
      </TrendingContentContainer>
    </TrendingItem>
  )
}

export default TrendingVideoItem
