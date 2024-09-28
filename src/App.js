import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
    <ProtectedRoute exact path="/gaming" component={Gaming} />
    <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
    <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
