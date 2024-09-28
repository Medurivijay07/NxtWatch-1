import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  HeaderContainer,
  RightHeaderList,
  HeaderItem,
  LogoutButton,
  ProfileImage,
  WebsiteLogo,
  LinkItem,
  DarkModeIcon,
  DarkModeButton,
} from './styledComponents'

const Header = props => {
  const onClickingLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderContainer>
      <LinkItem to="/">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </LinkItem>
      <RightHeaderList>
        <DarkModeButton type="button" data-testid="theme">
          <DarkModeIcon />
        </DarkModeButton>
        <HeaderItem>
          <ProfileImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </HeaderItem>

        <HeaderItem>
          <LogoutButton type="button" onClick={onClickingLogout}>
            Logout
          </LogoutButton>
        </HeaderItem>
      </RightHeaderList>
    </HeaderContainer>
  )
}

export default withRouter(Header)
