import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const RightVideoDetailsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  padding: 20px;
  padding-bottom: 50px;
`
export const RightContainer = styled.div`
  min-height: 90vh;
  width: 95%;
  padding-right: 40px;
`

export const ReactPlayerStyle = styled(ReactPlayer)`
  width: 100%;
`
export const ViewsReactionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`
export const LikesDislikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 7px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const DisLikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 7px;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 7px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const ProfileSubscribersContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileImage = styled.img`
  width: 7%;
  margin-right: 10px;
`
export const ChannelName = styled.p`
  font-size: 18px;
`
export const LoaderDetailedItemsContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 50%;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px;
  padding-left: 20px;
  border-radius: 7px;
`
