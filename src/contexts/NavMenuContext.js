import React, { Component, createContext } from 'react';

export const NavMenuContext = createContext();

class NavMenuContextProvider extends Component {
  state = {
    navMenuActive: false
  }

  toggleScroll = () => {
    if(!this.state.navMenuActive) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }
  }

  toggleNavMenu = () => {
    this.setState({ navMenuActive: !this.state.navMenuActive });
    this.toggleScroll();
  }

  render() {
    return (
      <NavMenuContext.Provider value={{ ...this.state, toggleNavMenu: this.toggleNavMenu }}>
        {this.props.children}
      </NavMenuContext.Provider>
    )
  }
}

export default NavMenuContextProvider;