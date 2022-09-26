import { useParams } from 'react-router-dom';

import Card from '../components/UI/Card';
import BackArrow from '../components/UI/BackArrow';

import { getOneTrick } from '../mockup/tricks';

const TrickDetail = () => {
  const params = useParams();
  const trick = getOneTrick(params.trickId);
  return (
  <>
    <BackArrow/>
    {trick.preparation && <Card preparation={trick.preparation}/>}
    {trick.flow && <Card flow={trick.flow}/>}
  </>
  );
};

export default TrickDetail;
