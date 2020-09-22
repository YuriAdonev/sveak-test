import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments/Comments';
import ClientDetail from '../components/ClientDetail/ClientDetail';

const Client = ({ clientsList }) => {
  const { id } = useParams();
  const currentClient = clientsList.find(it => it.id === Number(id));
  console.log('id', id);
  console.log('currentClient', currentClient);

  return currentClient ? (
    <Fragment>
      <ClientDetail
        currentClient={currentClient}
      />
      <Comments
        currentClient={currentClient}
      />
    </Fragment>
  ) : (
    <p className="client-error">Клиент с id={id} не найден</p>
  )
};

export default Client;
