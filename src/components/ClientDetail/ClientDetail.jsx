import React from 'react';
import Layout from "../Layout/Layout";

const ClientDetail = ({ currentClient }) => {
  return (
    <Layout
      title="Данные клиента"
      buttons={[{text: 'Редактировать', action: () => console.log('Edit client click')}]}
    >
      данные
    </Layout>
  )
};

export default ClientDetail;
