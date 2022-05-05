import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);

  return (
    <>
      <h2 className="text">{message}</h2>
    </>
  );
};

export default Greeting;
