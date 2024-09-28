import {formatDistanceToNow} from 'date-fns'

import {
  TrendingItem,
  ThumbnailImageTrending,
  TrendingContentContainer,
  TrendingVideoTitle,
  PublishedAndViewsContainer,
  LinkItem,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {item} = props
  const {id, thumbnailUrl, title, channel, viewCount, publishedAt} = item
  const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
  const {name} = channel
  return (
    <TrendingItem>
      <LinkItem to={`/videos/${id}`}>
        <ThumbnailImageTrending src={thumbnailUrl} alt="video thumbnail" />
        <TrendingContentContainer>
          <TrendingVideoTitle>{title}</TrendingVideoTitle>
          <p>{name}</p>
          <PublishedAndViewsContainer>
            <p>{viewCount} views </p>
            <p> . {date}</p>
          </PublishedAndViewsContainer>
        </TrendingContentContainer>
      </LinkItem>
    </TrendingItem>
  )
}

export default TrendingVideoItem
