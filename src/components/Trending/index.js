import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import {
  TrendingRouteContainer,
  RightTrendingContainer,
  TrendingBannerBackground,
  TrendingIcon,
  TrendingVideosList,
  TrendingFailureView,
  TrendingFailureImage,
  TrendingRetryButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Trending extends Component {
  state = {videoDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
          channel: {
            name: Item.channel.name,
            profileImageUrl: Item.channel.profile_image_url,
          },
          viewCount: Item.view_count,
          publishedAt: Item.published_at,
        })),
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickingRetry = () => {
    this.getTrendingVideos()
  }

  renderTrendingBanner = isDark => (
    <TrendingBannerBackground isDark={isDark}>
      <TrendingIcon />
      <h1>Trending</h1>
    </TrendingBannerBackground>
  )

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {videos = []} = videoDetails
    return (
      <TrendingVideosList>
        {videos.map(Item => (
          <TrendingVideoItem key={Item.id} item={Item} />
        ))}
      </TrendingVideosList>
    )
  }

  renderRightTrendingRouteContainer = isDark => (
    <RightTrendingContainer>
      {this.renderTrendingBanner(isDark)}
      {this.renderUsingSwitch()}
    </RightTrendingContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <TrendingFailureView>
      <TrendingFailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are haing some trouble to complete your request.</p>
      <p>Please try again.</p>
      <TrendingRetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </TrendingRetryButton>
    </TrendingFailureView>
  )

  renderUsingSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
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
              <TrendingRouteContainer isDark={isDark}>
                <SideBar />
                {this.renderRightTrendingRouteContainer(isDark)}
              </TrendingRouteContainer>
            )
          }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default Trending
