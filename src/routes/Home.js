import TrickList from '../components/Tricks/TrickList';

import { getTricks } from '../mockup/tricks';

const Home = () => {
  const data = getTricks();
  return <TrickList tricks={data} />;
};

export default Home;
