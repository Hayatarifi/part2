/* eslint-disable react/prop-types */
import { HashLoader } from 'react-spinners';
import './Loader.css'

const Loader = ({ size = 20, color = '#99004c' }) => {
  return (
    <div className='loading'>
      <HashLoader size={size} color={color} />

    </div>
  );
};

export default Loader;
