import React from 'react';
import Beets from 'components/Beets';
import Studios from 'components/Studios';
import Login from 'components/Login';
import cookie from 'react-cookie';
import LoggedIn from 'components/LoggedIn';

const Main = React.createClass({
  render() {
    return <div className="component-main">
      <Beets />
      {cookie.load('mc_loggedIn') ? <LoggedIn username={cookie.load('mc_username')} /> : <Login />}
      {cookie.load('mc_loggedIn') ? <Studios /> : null}
    </div>
  }
});

export default Main;
