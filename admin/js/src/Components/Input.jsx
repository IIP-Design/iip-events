import React, { Fragment } from 'react';
import { func, int, string } from 'prop-types';

const Input = ( {
  callback, classes, id, index, label, name, value
} ) => (
  <Fragment>
    { label ? (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <input
          autoComplete="off"
          className={ classes }
          data-index={ index }
          id={ id }
          name={ name }
          onChange={ callback }
          type="text"
          value={ value }
        />
      </label>
    ) : (
      <input
        autoComplete="off"
        className={ classes }
        data-index={ index }
        id={ id }
        name={ name }
        onChange={ callback }
        type="text"
        value={ value }
      />
    ) }
  </Fragment>
);

Input.propTypes = {
  callback: func,
  classes: string,
  id: string,
  index: int,
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
