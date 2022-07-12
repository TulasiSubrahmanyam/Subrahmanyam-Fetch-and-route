import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import Appointments from './components/Appointments'
import ProtectedRoute from './components/ProtectedRoute'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/Appointments" component={Appointments} />
    <ProtectedRoute exact path="/ContactUs" component={ContactUs} />
    <Route component={NotFound} />
  </Switch>
)

export default App
