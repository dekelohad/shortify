import React from 'react';
import { Button } from '../../../../components';
import './FormSection.css';

const FormUrlSection = ({
  title,
  onClick,
  buttonText,
  inputValue,
  onChange,
  isInputDisabled = false,
  isButtonDisabled,
}) => {
  return (
    <form className="form__section" onSubmit={(e) => e.preventDefault()}>
      <p>{title}</p>
      <input
        disabled={isInputDisabled}
        placeholder="Enter your url here"
        value={inputValue || ''}
        onChange={onChange}
        className="form__input"
        type="text"
      />
      <div className="form__button">
        <Button
          disabled={isButtonDisabled}
          onClick={onClick}
          text={buttonText}
        />
      </div>
    </form>
  );
};

export default FormUrlSection;
