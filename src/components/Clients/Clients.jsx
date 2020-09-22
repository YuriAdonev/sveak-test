import React from 'react';
import { useHistory } from 'react-router-dom';

const Clients = ({ clientsList }) => {
  const history = useHistory();

  const showClient = (item) => {
    history.push(`/client/${item.id}`);
  };

  return (
    <table className="table clients-table">
      <thead>
      <tr>
        <th>#</th>
        <th>Имя и фамилия</th>
        <th>E-mail</th>
        <th>Телефон</th>
        <th/>
      </tr>
      </thead>
      <tbody>
      {clientsList.map((item) => {
        const { id, firstName, lastName, email, phone } = item;

        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <button
                type="button"
                onClick={() => showClient(item)}
              >Подробнее</button>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
};

export default Clients;
