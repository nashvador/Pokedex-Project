import mew from './mew.gif';
import mewtwo from './mewtwo.gif';
import pikachu from './pikachu.gif';

const Home = () => {
  const DivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  // Making elements larger
  const ImageStyle = {
    // width: '200px',
    // height: '100px',
  };

  return (
    <div style={DivStyle}>
      <img src={mew} alt="mew" style={ImageStyle} />
      <img src={mewtwo} alt="mew" style={ImageStyle} />
      <img src={pikachu} alt="mew" style={ImageStyle} />
    </div>
  );
};

export default Home;
