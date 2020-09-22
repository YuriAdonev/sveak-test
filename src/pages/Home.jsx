import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Clients from '../components/Clients/Clients';
import Pagination from '../components/Pagination/Pagination';
import IconPlus from '../components/Icons/IconPlus';

const CLIENTS_ON_PAGE = 20;

const Home = ({ clientsList }) => {
  const [clientsToShow, setClientsToShow] = useState([]);
  const history = useHistory();

  return (
    <Layout
      title="Клиенты"
      buttons={[{text: 'Добавить', icon: <IconPlus size="12"/>, action: () => history.push("/registration")}]}
    >
      <Clients
        clientsList={clientsToShow}
      />
      <Pagination
        itemsOnPage={CLIENTS_ON_PAGE}
        itemsList={clientsList}
        setItemsToShow={setClientsToShow}
      />
    </Layout>
  )
};

export default Home;
