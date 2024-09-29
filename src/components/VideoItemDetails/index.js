import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  RightVideoDetailsContainer,
  RightContainer,
  ReactPlayerStyle,
  ViewsReactionsContainer,
  LikesDislikesContainer,
  LikeButton,
  ProfileSubscribersContainer,
  ProfileDescriptionContainer,
  ProfileImage,
  ChannelName,
  LoaderDetailedItemsContainer,
  FailureViewContainer,
  FailureImage,
  RetryButton,
  DisLikeButton,
  SaveButton,
  AiOutlineLikeIcon,
  AiOutlineDislikeIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videosDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videosDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickingRetry = () => {
    this.getVideoItemDetails()
  }

  onClickingLike = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onClickingDislike = () => {
    this.setState({isDisliked: true, isLiked: false})
  }

  renderRightContainer = addToSavedVideos => {
    const {videosDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      channel = {},
    } = videosDetails

    const {profileImageUrl, name, subscriberCount} = channel

    const onClickingSaved = () => {
      addToSavedVideos(videosDetails)
      console.log(videosDetails)
      this.setState(prevState => ({isSaved: !prevState.isSaved}))
    }

    return (
      <RightContainer>
        <ReactPlayerStyle url={videoUrl} width="90%" height="80vh" controls />
        <p>{title}</p>

        <ViewsReactionsContainer>
          <p>{viewCount} views .</p>
          <LikesDislikesContainer>
            <AiOutlineLikeIcon isLiked={isLiked} />
            <LikeButton
              type="button"
              onClick={this.onClickingLike}
              isLiked={isLiked}
            >
              Like
            </LikeButton>
            <AiOutlineDislikeIcon isDisliked={isDisliked} />
            <DisLikeButton
              type="button"
              onClick={this.onClickingDislike}
              isDisliked={isDisliked}
            >
              Dislike
            </DisLikeButton>

            <SaveButton
              type="button"
              onClick={onClickingSaved}
              isSaved={isSaved}
            >
              <BiListPlus />
              <p>{isSaved ? 'Saved' : 'Save'}</p>
            </SaveButton>
          </LikesDislikesContainer>
        </ViewsReactionsContainer>
        <hr />
        <ProfileSubscribersContainer>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <ProfileDescriptionContainer>
            <ChannelName>{name}</ChannelName>
            <p>{subscriberCount}</p>
            <p>{description}</p>
          </ProfileDescriptionContainer>
        </ProfileSubscribersContainer>
      </RightContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderDetailedItemsContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </LoaderDetailedItemsContainer>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble to complete your request.</p>
      <p>Please try again.</p>
      <RetryButton type="button" onClick={this.onClickingRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderUsingSwitch = addToSavedVideos => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRightContainer(addToSavedVideos)
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
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {addToSavedVideos, isDark} = value
            return (
              <RightVideoDetailsContainer isDark={isDark}>
                <SideBar />
                {this.renderUsingSwitch(addToSavedVideos)}
              </RightVideoDetailsContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
