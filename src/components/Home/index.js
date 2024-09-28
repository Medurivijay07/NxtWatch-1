import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  RightHomeContainer,
  HomeBannerContainer,
  HomeMainContainer,
  HomeBannerLeftContainer,
  HomeBannerLogo,
  GetItNowButton,
  SearchContainer,
  SearchInput,
  SearchIcon,
  VideosList,
  NoResultsContainer,
  NoResultsImage,
  RetryButton,
  FailureViewContainer,
  FailureImage,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickingSearchIcon = () => {
    this.getVideosData()
  }

  onClickingRetry = () => {
    this.getVideosData()
  }

  renderHomeBanner = () => (
    <HomeBannerContainer data-testid="banner">
      <HomeBannerLeftContainer>
        <HomeBannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </HomeBannerLeftContainer>
      <button type="button" data-testid="close">
        <IoMdClose />
      </button>
    </HomeBannerContainer>
  )

  renderVideos = () => {
    const {searchInput} = this.state
    return (
      <RightHomeContainer>
        {this.renderHomeBanner()}
        <SearchContainer>
          <SearchInput
            type="search"
            placeholder="Search"
            onChange={this.onChangeInput}
            value={searchInput}
          />
          <SearchIcon
            data-testid="searchButton"
            type="button"
            onClick={this.onClickingSearchIcon}
          >
            <IoMdSearch />
          </SearchIcon>
        </SearchContainer>
        {this.renderUsingSwitch()}
      </RightHomeContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are haing some trouble to complete your request.</p>
      <p>Please try again</p>
      <RetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderNoResultsView = () => (
    <NoResultsContainer>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <RetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </RetryButton>
    </NoResultsContainer>
  )

  renderVideoItems = () => {
    const {videosData} = this.state
    const {videos = []} = videosData
    if (videos.length === 0) {
      return this.renderNoResultsView()
    }
    return (
      <>
        <VideosList>
          {videos.map(Item => (
            <VideoItem key={Item.id} item={Item} />
          ))}
        </VideosList>
      </>
    )
  }

  renderUsingSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItems()
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
      <div data-testid="home">
        <Header />
        <HomeMainContainer>
          <SideBar />
          {this.renderVideos()}
        </HomeMainContainer>
      </div>
    )
  }
}

export default Home
