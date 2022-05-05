import { useDispatch } from 'react-redux';
import Greeting from './greeting';
import { fetchMessage } from '../../app/greeting';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Greeting />
      <button type="button" onClick={() => dispatch(fetchMessage())}>Get another greeting</button>
    </div>
  );
};

export default Home;
