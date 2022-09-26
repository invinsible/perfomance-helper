import { useState } from "react";

import FormElement from "../components/Admin/FormElement";
import FormPreparation from "../components/Admin/FormPreparation";

const Admin = () => {
  const [isPreparation, setPreparation] = useState(false);
  const preparationHandler = () => {
    setPreparation(prev => !prev);
  };
  return (
    <form className="admin-form">
      <div className="admin-form__block">
        <FormElement
          isInput
          labelId="title"
          title="Title"
        />
        <FormElement
          isText
          labelId="flow"
          title="Flow"
        />
      </div>

      <div className="admin-form__block">
        <div className="admin-form__element">
          <label htmlFor="preparationCheck">Preparation</label>
          <input
            type="checkbox"
            name="preparationCheck"
            id="preparationCheck"
            onChange={preparationHandler}
          />
        </div>
        {isPreparation && <FormPreparation />}
        
      </div>
    </form>
  );
};

export default Admin;
