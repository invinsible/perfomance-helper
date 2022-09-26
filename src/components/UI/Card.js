import Preparation from '../Tricks/Preparation';

import classes from './Card.module.css';

const Card = (props) => {
  const isPreparation = props.preparation; 
  const cardClasses = `${classes.card} ${isPreparation ? classes['card--preparation'] : classes['card--flow']}`;

  return (
    <>
      <p className={classes.title}>{isPreparation ? 'Preparation' : 'Flow'}</p>
      <div className={cardClasses}>{isPreparation ? <Preparation {... props.preparation} /> : props.flow}</div>
    </>
  );
};

export default Card;
