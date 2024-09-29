import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoProfileImage,
  VideoDetailsRightContainer,
  VideoTitle,
  ViewsPostedContainer,
  LinkItem,
  Name,
} from './styledComponents'

const VideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {item} = props
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
      const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
      const {name, profileImageUrl} = channel
      return (
        <VideoItemContainer isDark={isDark}>
          <LinkItem to={`/videos/${id}`} isDark={isDark}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoDetailsRightContainer>
                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                <Name isDark={isDark}>{name}</Name>
                <ViewsPostedContainer>
                  <p>{viewCount} views </p>
                  <p>. {date}</p>
                </ViewsPostedContainer>
              </VideoDetailsRightContainer>
            </VideoDetailsContainer>
          </LinkItem>
        </VideoItemContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoItem
