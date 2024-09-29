import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import SideBar from '../SideBar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import {
  GamingRouteContainer,
  GamingRightContainer,
  GamingBanner,
  GamingIcon,
  GamingItemsList,
  GamingLoaderContainer,
  GamingFailureViewContainer,
  FailureImage,
  GamingRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {gameDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGameDetails()
  }

  getGameDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        total: data.total,
        videos: data.videos.map(Item => ({
          id: Item.id,
          title: Item.title,
          thumbnailUrl: Item.thumbnail_url,
          viewCount: Item.view_count,
        })),
      }
      this.setState({
        gameDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickingRetry = () => {
    this.getGameDetails()
  }

  renderGamingBanner = isDark => (
    <GamingBanner isDark={isDark}>
      <GamingIcon />
      <h1>Gaming</h1>
    </GamingBanner>
  )

  renderGamingItems = () => {
    const {gameDetails} = this.state
    const {videos = []} = gameDetails
    return (
      <GamingItemsList>
        {videos.map(Item => (
          <GamingVideoItem key={Item.id} item={Item} />
        ))}
      </GamingItemsList>
    )
  }

  renderLoadingView = () => (
    <GamingLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </GamingLoaderContainer>
  )

  renderFailureView = () => (
    <GamingFailureViewContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are haing some trouble to complete your request.</p>
      <p>Please try again.</p>
      <GamingRetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </GamingRetryButton>
    </GamingFailureViewContainer>
  )

  renderGamingRightContainer = isDark => (
    <GamingRightContainer>
      {this.renderGamingBanner(isDark)}
      {this.renderUsingSwitch()}
    </GamingRightContainer>
  )

  renderUsingSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingItems()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inprogress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <GamingRouteContainer isDark={isDark}>
                <SideBar />
                {this.renderGamingRightContainer(isDark)}
              </GamingRouteContainer>
            )
          }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default Gaming
