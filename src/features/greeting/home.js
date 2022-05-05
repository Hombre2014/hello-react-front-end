import { useDispatch } from 'react-redux';
import Greeting from './greeting';
import { fetchMessage } from '../../app/greeting';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Rails on the back, React on the front App</h1>
      <Greeting />
      <button type="button" className="link" onClick={() => dispatch(fetchMessage())}>Get another greeting</button>
    </div>
  );
};

export default Home;
