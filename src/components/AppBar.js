import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';
import { AppBar } from '@material-ui/core';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function Appbar() {
  const isLogedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <AppBar position="static">
    <header style={styles.header}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
    </AppBar>
  );
};