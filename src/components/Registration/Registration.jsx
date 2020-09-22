import React, { useState } from 'react';
import InputText from '../inputs/InputText/InputText';
import Select from "../inputs/Select/Select";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  county: '',
  city: '',
  address: '',
  postIndex: '',
  subscription: {
    email: true,
    sms: true
  }
};

const countyList = ['Уезд 1', 'Уезд 2', 'Уезд 3', 'Уезд 4'];

const Registration = ({ addClient }) => {
  const [client, setClient] = useState(initialState);

  const inputHandler = (name, value, validate = null) => {
    setClient({ ...client, [name]: value});
  };

  console.log('client', client);

  return (
    <form
      className="form registration-form"
      onSubmit={(evt) => addClient(evt, client)}
    >
      <div className="form__wrap">
        <div className="form__col">
          <InputText
            name="firstName"
            label="Имя"
            handler={inputHandler}
            value={client.firstName}
            error={true}
          />
          <InputText
            name="lastName"
            label="Фамилия"
            handler={inputHandler}
            value={client.lastName}
            error={null}
          />
          <InputText
            name="email"
            label="Email"
            handler={inputHandler}
            value={client.email}
            error={null}
          />
          <InputText
            name="phone"
            label="Телефон"
            handler={inputHandler}
            value={client.phone}
            error={null}
          />
        </div>
        <div className="form__col">
          <Select
            name="county"
            label="Уезд"
            handler={inputHandler}
            value={client.county}
            optionsList={countyList}
          />
          <InputText
            name="city"
            label="Город/Волость"
            handler={inputHandler}
            value={client.city}
            error={null}
          />
          <InputText
            name="address"
            label="Адрес"
            handler={inputHandler}
            value={client.address}
            error={null}
          />
          <InputText
            name="postIndex"
            label="Индекс"
            handler={inputHandler}
            value={client.postIndex}
            error={null}
          />
        </div>
      </div>


      <button type="submit">Зарегистрировать</button>
    </form>
  )
};

export default Registration;
