import React from 'react';

const Select = ({ name, label, handler, value, optionsList }) => {
  return (
    <label className="form-item">
      <span className="form-item__label">{label}</span>
      <select
        className="form-item__select"
        onChange={(evt) => handler(name, evt.target.value)}
        value={value}
      >
        <option value="">---</option>
        {optionsList.map(option => {
          return (
            <option value={option}>{option}</option>
          )
        })}
      </select>
    </label>
  )
};

export default Select;
