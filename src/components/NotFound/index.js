import Header from '../Header'
import SideBar from '../SideBar'

import {
  RightNotFoundContainer,
  NotFoundContainer,
  NotFoundImage,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <RightNotFoundContainer>
      <SideBar />
      <NotFoundContainer>
        <NotFoundImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found.</p>
      </NotFoundContainer>
    </RightNotFoundContainer>
  </>
)

export default NotFound
