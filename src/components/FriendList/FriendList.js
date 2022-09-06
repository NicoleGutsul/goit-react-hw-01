import propTypes from 'prop-types';
import { LiItem, OnlineStatus } from './FriendList.styled';

const Friends = ({friends: {avatar, name, isOnline, id} }) => {
    return (
        <LiItem key={id}>
            <OnlineStatus isOnline={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48"/>
            <p className="name">{name}</p>
        </LiItem>
    )
}
export const FriendList = ({friends}) => {
    return(
        <ul className="friend-list">
            {friends.map((friends) => {
                return(
                    <Friends key={friends.id} friends={friends} />
                )
            })}
        </ul>
    )

}

FriendList.propTypes = {
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
}.isRequired