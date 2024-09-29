import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingItem,
  ThumbnailImageTrending,
  TrendingContentContainer,
  TrendingVideoTitle,
  PublishedAndViewsContainer,
  LinkItem,
} from './styledComponents'

const TrendingVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {item} = props
      const {id, thumbnailUrl, title, channel, viewCount, publishedAt} = item
      const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
      const {name} = channel
      return (
        <TrendingItem>
          <LinkItem to={`/videos/${id}`} isDark={isDark}>
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
    }}
  </ThemeContext.Consumer>
)

export default TrendingVideoItem
