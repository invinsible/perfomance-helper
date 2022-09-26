import { Link } from 'react-router-dom';

import classes from './BackArrow.module.css';
const BackArrow = () => {
  return <Link to="/" className={classes['back-arrow']} />;
};

export default BackArrow;
