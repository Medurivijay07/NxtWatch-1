import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import SavedVideoItems from '../SavedVideoItems'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  SavedVideosContainer,
  SavedVideosRightContainer,
  SavedVideosBanner,
  TrendingIcon,
  NoSavedVideosViewContainer,
  NoSavedVideosImage,
  SavedVideosList,
} from './styledComponents'

class SavedVideos extends Component {
  state = {savedVideos: []}

  renderSavedVideosBanner = isDark => (
    <SavedVideosBanner isDark={isDark}>
      <TrendingIcon />
      <h1>Saved Videos</h1>
    </SavedVideosBanner>
  )

  renderNoSavedVideosView = () => (
    <NoSavedVideosViewContainer>
      <NoSavedVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No saved videos found</h1>
      <p>You can save your videos while watching them</p>
    </NoSavedVideosViewContainer>
  )

  renderSavedVideoItems = (saveVideos, isDark) => (
    <>
      {this.renderSavedVideosBanner(isDark)}
      <SavedVideosList>
        {saveVideos.map(Item => (
          <SavedVideoItems key={Item.id} item={Item} />
        ))}
      </SavedVideosList>
    </>
  )

  renderRightContainer = (saveVideos, isDark) => (
    <SavedVideosRightContainer>
      {saveVideos.length === 0
        ? this.renderNoSavedVideosView()
        : this.renderSavedVideoItems(saveVideos, isDark)}
    </SavedVideosRightContainer>
  )

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {saveVideos, isDark} = value
            return (
              <SavedVideosContainer isDark={isDark}>
                <SideBar />
                {this.renderRightContainer(saveVideos, isDark)}
              </SavedVideosContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default SavedVideos
