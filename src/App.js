import { Profile } from './components/Profile/Profile';
import user from './database/user.json';
export const App = () => {
  return (
    <div>
      <Profile user={user}/>
    </div>
  );
};
