import { Outlet, useParams } from 'react-router-dom';

import PageTitle from './components/UI/PageTitle';

import { getOneTrick } from './mockup/tricks';

import classes from './App.module.css';

function App() {
  const params = useParams();
  const isTrickPage = params.trickId;
  let title = 'Perfomance Helper';
  if (isTrickPage) {
    const currentTrick = getOneTrick(params.trickId);
    title = currentTrick.title;
  }
  return (
    <div className={classes.container}>
      <PageTitle>{title}</PageTitle>
      <Outlet />
    </div>
  );
}

export default App;
