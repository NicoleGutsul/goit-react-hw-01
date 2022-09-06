import { Profile } from './components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import user from './database/user.json';
import data from './database/data.json';
import friends from './database/friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      <Statistics title="Upload stats" data={data}/>
      <FriendList friends={friends}/>
    </div>
  );
};
