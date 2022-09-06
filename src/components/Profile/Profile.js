import propTypes from 'prop-types';
import { Wrapper, UserStats, ProfileDetail, ProfileStats } from './Profile.styled';

const Stats = ({stats, text}) => {
    return (
        <UserStats>{stats}<p>{text}</p></UserStats>
    )
}

export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return ( 
     <Wrapper key={username}>
        <ProfileDetail>
            <img
                src={avatar}
                alt="User avatar"
                width={100}
                height={100}
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </ProfileDetail>
        <ProfileStats>
            <Stats stats="Followers" text={`${followers}`}/>
            <Stats stats="Views" text={`${views}`}/>
            <Stats stats="Likes" text={`${likes}`}/>
        </ProfileStats>
   
    </Wrapper>
 )
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
  
}.isRequired