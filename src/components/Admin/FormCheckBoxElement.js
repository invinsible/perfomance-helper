import { useState } from 'react';

const FormCheckBoxElement = (props) => {
  const [isShow, setShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="admin-form__element">
      <label htmlFor={props.labelId}>{props.title}</label>
      <input
        type="checkbox"       
        id={props.labelId}
        onChange={showHandler}
      />
      {isShow && (
        <textarea          
          rows="5"
          cols="50"
          defaultValue="Type here something..."
        ></textarea>
      )}
    </div>
  );
};

export default FormCheckBoxElement;
