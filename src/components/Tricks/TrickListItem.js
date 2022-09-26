import { Link } from 'react-router-dom';

import classes from './TrickListItem.module.css';

const TrickListItem = (props) => {
  return (
    <div className={classes['trick-item']}>
      <span className={classes.order}>{props.index}</span>
      <Link to={`/${props.slug}`} className={classes['trick-button']}>
        {props.title}
      </Link>
    </div>
  );
};

export default TrickListItem;
