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


export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };  


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }))

    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <Container>
      <h1 className="Title">Create Account</h1>
      <form
        className="Register"
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">Sign up</Button>
      </form>
    </Container>
  );
};