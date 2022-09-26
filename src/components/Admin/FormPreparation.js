import FormCheckBoxElement from './FormCheckBoxElement';

const FormPreparation = () => {
  return (
    <div className="admin-preparation">
      <FormCheckBoxElement title="Order" labelId="orderCheck" />
      <FormCheckBoxElement title="Dublicate" labelId="dublicateCheck" />
    </div>
  );
};

export default FormPreparation;
