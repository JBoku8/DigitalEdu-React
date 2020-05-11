import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navigation.module.css';

const Links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const protectedLinks = [
  {
    title: 'Logout',
    href: '/Logout',
  },
];

function Navigation(props) {
  const { isAuth } = props;
  return (
    <ul className={classes.Menu}>
      {Links.map((link) => {
        return <NavigationItem {...link} key={link.title} />;
      })}
      {isAuth &&
        protectedLinks.map((link) => {
          return <NavigationItem {...link} key={link.title} />;
        })}
    </ul>
  );
}

export default Navigation;
