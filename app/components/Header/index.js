import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className="topHeader bgImage">
        <div className="logo">
          <a href=" ">NXD2</a>
        </div>
        <NavBar class="leftMenu">
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
        </NavBar>
        <NavBar class="Menuright">
          <HeaderLink to="/signup">
            <FormattedMessage {...messages.signup} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
          <HeaderLink to="/contactus">
            <FormattedMessage {...messages.contactus} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
