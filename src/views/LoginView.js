import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Container from '../components/Container';
import { Button } from '@material-ui/core';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};


export default function LoginView() {
  const dispatch = useDispatch();

  const [ user, setUser ] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ currentTarget: { name, value } }) =>
    setUser(prev => ({ ...prev, [name]: value }));
  
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn(user));
  
    setUser({
      email: '',
      password: ''
    });
  };
    
  return (
    <Container>
      <h1 className="Title">Login</h1>
     <form className="Login"
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
       <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
       <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
};