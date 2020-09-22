import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.scss';
import { clients } from '../../data/clients'
import Home from '../../pages/Home';
import Client from '../../pages/Client';
import Header from '../Header/Header';
import CreateClient from '../../pages/CreateClient';

const App = () => {
  const [clientsList, setClientsList] = useState(clients);
  const history = useHistory();

  const addClient = (evt, client) => {
    evt.preventDefault();
    client.id = clientsList[clientsList.length - 1].id + 1;
    setClientsList([...clientsList, client]);
    history.push("/");
  };

  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home
            clientsList={clientsList}
          />
        </Route>
        <Route path="/registration">
          <CreateClient
            addClient={addClient}
          />
        </Route>
        <Route path="/client/:id">
          <Client
            clientsList={clientsList}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
