import {GamingItem, GamingThumbnail, GameItemTitle} from './styledComponents'

const GamingVideoItem = props => {
  const {item} = props
  const {thumbnailUrl, viewCount, title} = item
  return (
    <GamingItem>
      <GamingThumbnail src={thumbnailUrl} />
      <GameItemTitle>{title}</GameItemTitle>
      <p>{viewCount} Watching Worldwide</p>
    </GamingItem>
  )
}

export default GamingVideoItem
