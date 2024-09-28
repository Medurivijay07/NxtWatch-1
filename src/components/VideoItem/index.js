import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  VideoProfileImage,
  VideoDetailsRightContainer,
  VideoTitle,
  ViewsPostedContainer,
  LinkItem,
} from './styledComponents'

const VideoItem = props => {
  const {item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  const date = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
  const {name, profileImageUrl} = channel
  return (
    <VideoItemContainer>
      <LinkItem to={`/videos/${id}`}>
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
      </LinkItem>
    </VideoItemContainer>
  )
}

export default VideoItem
