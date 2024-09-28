import {
  GamingItem,
  GamingThumbnail,
  GameItemTitle,
  LinkItem,
} from './styledComponents'

const GamingVideoItem = props => {
  const {item} = props
  const {id, thumbnailUrl, viewCount, title} = item
  return (
    <GamingItem>
      <LinkItem to={`/videos/${id}`}>
        <GamingThumbnail src={thumbnailUrl} alt="video thumbnail" />
        <GameItemTitle>{title}</GameItemTitle>
        <p>{viewCount} Watching Worldwide</p>
      </LinkItem>
    </GamingItem>
  )
}

export default GamingVideoItem
