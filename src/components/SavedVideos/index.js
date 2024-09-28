import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  SavedVideosContainer,
  SavedVideosRightContainer,
  SavedVideosBanner,
  TrendingIcon,
  NoSavedVideosViewContainer,
  NoSavedVideosImage,
} from './styledComponents'

class SavedVideos extends Component {
  state = {savedVideos: []}

  renderSavedVideosBanner = () => (
    <SavedVideosBanner>
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

  renderRightContainer = () => {
    const {savedVideos} = this.state
    return (
      <SavedVideosRightContainer>
        {savedVideos.length === 0
          ? this.renderNoSavedVideosView()
          : this.renderSavedVideosBanner()}
      </SavedVideosRightContainer>
    )
  }

  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <SideBar />
          {this.renderRightContainer()}
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
