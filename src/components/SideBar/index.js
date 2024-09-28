import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  SideBarContainer,
  TopContainer,
  EachRouteItem,
  BottomContainer,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  LinkItem,
} from './styledComponents'

const SideBar = () => (
  <SideBarContainer>
    <TopContainer>
      <LinkItem to="/">
        <EachRouteItem>
          <IoMdHome />
          <p>Home</p>
        </EachRouteItem>
      </LinkItem>
      <LinkItem to="/trending">
        <EachRouteItem>
          <FaFire />
          <p>Trending</p>
        </EachRouteItem>
      </LinkItem>
      <LinkItem to="/gaming">
        <EachRouteItem>
          <SiYoutubegaming />
          <p>Gaming</p>
        </EachRouteItem>
      </LinkItem>
      <LinkItem to="/saved-videos">
        <EachRouteItem>
          <BiListPlus />
          <p>Saved videos</p>
        </EachRouteItem>
      </LinkItem>
    </TopContainer>
    <BottomContainer>
      <p>CONTACT US</p>
      <SocialMediaIconsContainer>
        <SocialMediaIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </SocialMediaIconsContainer>
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </BottomContainer>
  </SideBarContainer>
)

export default SideBar
