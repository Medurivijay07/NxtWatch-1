import {Component} from 'react'
import Cookies from 'js-cookie'

import SideBar from '../SideBar'
import Header from '../Header'
import GamingVideoItem from '../GamingVideoItem'
import {
  GamingRouteContainer,
  GamingRightContainer,
  GamingBanner,
  GamingIcon,
  GamingItemsList,
} from './styledComponents'

class Gaming extends Component {
  state = {gameDetails: {}}

  componentDidMount() {
    this.getGameDetails()
  }

  getGameDetails = async () => {
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
      this.setState({gameDetails: updatedData})
    }
  }

  renderGamingBanner = () => (
    <GamingBanner>
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

  renderGamingRightContainer = () => (
    <GamingRightContainer>
      {this.renderGamingBanner()}
      {this.renderGamingItems()}
    </GamingRightContainer>
  )

  render() {
    return (
      <div>
        <Header />
        <GamingRouteContainer>
          <SideBar />
          {this.renderGamingRightContainer()}
        </GamingRouteContainer>
      </div>
    )
  }
}

export default Gaming
