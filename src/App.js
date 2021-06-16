import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import Appbar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';


const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));


export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  
  
  return (
    <Container>
      <Appbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/"><HomeView /></PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/"><RegisterView /></PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/"><LoginView /></PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login"><PhonebookView /></PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  )
};