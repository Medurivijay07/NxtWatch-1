import ThemeContext from '../../context/ThemeContext'

import {
  GamingItem,
  GamingThumbnail,
  GameItemTitle,
  LinkItem,
} from './styledComponents'

const GamingVideoItem = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {item} = props
      const {id, thumbnailUrl, viewCount, title} = item
      return (
        <GamingItem>
          <LinkItem to={`/videos/${id}`} isDark={isDark}>
            <GamingThumbnail src={thumbnailUrl} alt="video thumbnail" />
            <GameItemTitle>{title}</GameItemTitle>
            <p>{viewCount} Watching Worldwide</p>
          </LinkItem>
        </GamingItem>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoItem
