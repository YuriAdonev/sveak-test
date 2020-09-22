import React from 'react';
import Layout from "../components/Layout/Layout";
import Registration from "../components/Registration/Registration";

const CreateClient = ({ addClient }) => {
  return (
    <Layout
      title="Регистрация клиента"
    >
      <Registration
        addClient={addClient}
      />
    </Layout>
  )
};

export default CreateClient;
