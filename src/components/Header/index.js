import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

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
  LightModeIcon,
  PopupContainer,
  PopUpContentContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDark} = value
      const onClickingThemeIcon = () => {
        toggleTheme()
      }

      const onClickingConfirm = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer isDark={isDark}>
          <LinkItem to="/">
            <WebsiteLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LinkItem>
          <RightHeaderList>
            <DarkModeButton
              type="button"
              data-testid="theme"
              onClick={onClickingThemeIcon}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </DarkModeButton>
            <HeaderItem>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeaderItem>

            <HeaderItem>
              <PopupContainer>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDark={isDark}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <PopUpContentContainer isDark={isDark}>
                        <p>Are you sure, you want to logout</p>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={onClickingConfirm}
                        >
                          Confirm
                        </ConfirmButton>
                      </PopUpContentContainer>
                    </>
                  )}
                </Popup>
              </PopupContainer>
            </HeaderItem>
          </RightHeaderList>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
