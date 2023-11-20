import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import { username } from './mocks/credentials';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriends';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';







function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends Database</h1>
        <Link to='login'>Login</Link>
        <Link to='friends'>Friends</Link>
        <Link to='friends/add'>Add Friend</Link>
        <Link to='/logout'>Logout</Link>
        
      </header>
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/friends' element={<FriendsList/>} />
        <Route path='/friends/add' element={<AddFriend/>} />
        <Route path='logout' element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;
