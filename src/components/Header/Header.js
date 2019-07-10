import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import logo from './logo.svg';
import styles from './Header.module.scss';

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         menu: false,
      };
      this.toggleDrawer = this.toggleDrawer.bind(this);
      this.closeDrawer = this.closeDrawer.bind(this);
   }

   toggleDrawer() {
      const { menu } = this.state;
      this.setState({
         menu: !menu,
      });
   }

   closeDrawer() {
      this.setState({
         menu: false,
      });
   }

   render() {
      const { menu } = this.state;
      return (
         <header className={styles.header}>
            <NavLink to="/">
               <div className={styles.brand}>
                  <div className={styles.logo}>
                     <img src={logo} width="60px" alt="Site Logo" />
                  </div>
                  <div className={styles.title}>
                     <h1>Debugger</h1>
                     <p className={styles.subheading}>Can you solve the puzzle?</p>
                  </div>
               </div>
            </NavLink>
            <div className={styles.desktopNav}>
               <nav>
                  <ul>
                     <li>
                        <NavLink exact to="/">Home</NavLink>
                     </li>
                     <li>
                        <NavLink to="/api">API</NavLink>
                     </li>
                     <li>
                        <NavLink to="/documentation">Documentation</NavLink>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className={styles.mobileNav}>
               <div className={styles.menuButton}>
                  <IconButton onClick={this.toggleDrawer}>
                     <Icon>menu</Icon>
                  </IconButton>
               </div>
               <Drawer anchor="right" open={menu} onClose={this.closeDrawer}>
                  <nav className="mobileDrawerNav">
                     <ul>
                        <li>
                           <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/api">API</NavLink>
                        </li>
                        <li>
                           <NavLink to="/documentation">Documentation</NavLink>
                        </li>
                     </ul>
                  </nav>
               </Drawer>
            </div>
         </header>
      );
   }
}
/*
Header.propTypes = {

};
*/
export default Header;
