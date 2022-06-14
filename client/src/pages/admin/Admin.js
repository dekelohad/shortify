import React from 'react';
import { title, subTitle, content } from './data';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin__container">
      <h1 className="container__title">{title}</h1>
      <div className="container__content">
        <h2 className="container__sub__title">{subTitle}</h2>
        {content.map((contentItem) => (
          <div className="content__item" key={contentItem.id}>
            <p className="content__item__icon">{contentItem.icon}</p>
            <p>{contentItem.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
