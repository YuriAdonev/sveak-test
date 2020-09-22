import React from 'react';
import './Layout.scss';

const Layout = ({ title, buttons = [], children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        <p className="layout__title">{title}</p>
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              type="button"
              className="btn layout__btn"
              onClick={button.action}
            >{button.icon}{button.text}</button>
          )
        })}
      </div>
      <div className="layout__wrap">
        {children}
      </div>
    </div>
  )
};

export default Layout;
