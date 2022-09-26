import { useState } from 'react';

const FormElement = (props) => {
  const [value, setValue] = useState('');

  const valueHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="admin-form__element">
      <label htmlFor={props.labelId}>
        {props.title}: {value}
      </label>
      {props.isInput && (
        <input
          type="text"          
          id={props.labelId}
          value={value}
          onChange={valueHandler}
        />
      )}
      {props.isText && (
        <textarea          
          rows="5"
          cols="50"
          id={props.labelId}
          onChange={valueHandler}
          defaultValue={`This is text for ${props.title}`}
        ></textarea>
      )}
    </div>
  );
};

export default FormElement;
