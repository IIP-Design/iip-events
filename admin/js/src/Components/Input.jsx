import React, { Fragment } from 'react';
import { func, int, string } from 'prop-types';

const Input = ( {
  callback, classes, group, id, index, label, name, placeholder, value
} ) => (
  <Fragment>
    { label ? (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <input
          autoComplete="off"
          className={ classes }
          data-group={ group }
          data-index={ index }
          id={ id }
          name={ name }
          onChange={ callback }
          placeholder={ placeholder }
          type="text"
          value={ value }
        />
      </label>
    ) : (
      <input
        autoComplete="off"
        className={ classes }
        data-group={ group }
        data-index={ index }
        id={ id }
        name={ name }
        onChange={ callback }
        placeholder={ placeholder }
        type="text"
        value={ value }
      />
    ) }
  </Fragment>
);

Input.propTypes = {
  callback: func,
  classes: string,
  group: string,
  id: string,
  index: int,
  label: string,
  name: string,
  placeholder: string,
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
