import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoProfileImage,
  VideoDetailsRightContainer,
  VideoTitle,
  ViewsPostedContainer,
} from './styledComponents'

const VideoItem = props => {
  const {item} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = item
  const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
  const {name, profileImageUrl} = channel
  return (
    <VideoItemContainer>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetailsContainer>
        <VideoProfileImage src={profileImageUrl} alt="channel logo" />
        <VideoDetailsRightContainer>
          <VideoTitle>{title}</VideoTitle>
          <p>{name}</p>
          <ViewsPostedContainer>
            <p>{viewCount} views </p>
            <p>. {date}</p>
          </ViewsPostedContainer>
        </VideoDetailsRightContainer>
      </VideoDetailsContainer>
    </VideoItemContainer>
  )
}

export default VideoItem
