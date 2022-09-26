import classes from './Preparation.module.css';
const Preparation = ({ order, dublicate, blankFace }) => {
  return (
    <>
      {order && (
        <p className={`${classes['preparation-item']} ${classes.order}`}>
          <span>Order</span> {order}
        </p>
      )}
      {dublicate && (
        <p className={`${classes['preparation-item']} ${classes.dublicate}`}>
          <span>Dublicate</span> {dublicate}
        </p>
      )}
      {blankFace && (
        <p className={`${classes['preparation-item']} ${classes['blank-face']}`}>
          <span>Blank Face x {blankFace}</span>         
        </p>
      )}
    </>
  );
};

export default Preparation;
