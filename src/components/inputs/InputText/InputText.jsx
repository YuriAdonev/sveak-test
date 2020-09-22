import React from 'react';

import './InputText.scss';

const InputText = ({ name, label, handler, value, error = null }) => {
  return (
    <label className="form-item">
      <span className="form-item__label">{label}</span>
      <div className="form-item__validate">
        <input
          type="text"
          className="form-item__input"
          onChange={(evt) => handler(name, evt.target.value)}
          value={value}
        />
        {error && <span className="form-item__error">jjjj</span>}
      </div>
    </label>
  )
};

export default InputText;
