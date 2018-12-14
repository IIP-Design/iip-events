import React from 'react';
import { func, string } from 'prop-types';

const Input = ( {
  callback, classes, id, label, name, value
} ) => (
  <div>
    { label ? (
      <label htmlFor={ id }>
        { label }
        <input
          className={ classes }
          id={ id }
          name={ name }
          onChange={ callback }
          type="text"
          value={ value }
        />
      </label>
    ) : (
      <input
        className={ classes }
        id={ id }
        name={ name }
        onChange={ callback }
        type="text"
        value={ value }
      />
    ) }
  </div>
);

Input.propTypes = {
  callback: func,
  classes: string,
  id: string,
  label: string,
  name: string,
  value: string
};

Input.defaultProps = {
  callback: () => {},
  classes: '',
  id: '',
  name: '',
  value: ''
};

export default Input;
