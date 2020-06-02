import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from '../components/Login/index';
import Horarios from '../components/Horarios/index';
import FazerReserva from '../components/FazerReserva/index';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={true} />
      <Scene
        key="horarios"
        component={Horarios}
        title="Horarios"
        hideNavBar={true}
        initial={false}
      />
      <Scene
        key="reserva"
        component={FazerReserva}
        title="Fazer Reserva"
        hideNavBar={true}
        initial={false}
      />
    </Scene>
  </Router>
);
export default Routes;
