import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  btn: {
    marginRight: 20,
  },
  name: {
    fontWeight: 700,
    marginRight: 50,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="55" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button type="button" onClick={onLogout} style={styles.btn} variant="contained" color="secondary">Logout</Button>
    </div>
  );
};