import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';
import {FiRotateCcw } from 'react-icons/fi';
import {FaThumbsUp} from 'react-icons/fa';
import {AiOutlineCamera} from 'react-icons/ai';
import {Link}  from 'react-router-dom';
import './App.css';
const App = () => {
  const camera = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleSnapClick = () => {
    setShowCamera(true);
  };

  const handleTryAgainClick = () => {
    setShowCamera(true); 
    setCapturedImage(null); 
  };
  const handleTakePhoto = () => {
    const takenImage = camera.current.takePhoto();
    setCapturedImage(takenImage);
    setShowCamera(false); 
  };

  return (
        <div className='backgroundContainer'>
      <img src="/favicon.png" alt="logo" className='logo'/>
      <div className='imageLogoContainer'>
        {showCamera ? (
          <div className='bg'>
          <div className='cameraContainer'>
            <Camera ref={camera} aspectRatio={16 / 9} />
            <button onClick={handleTakePhoto} className='snapButton red'>  <div style={{ display: 'flex', alignItems: 'center' }}>
             <div style={{ marginRight: '5px' }}>Take Snap</div>
             <AiOutlineCamera size={21} style={{ width: '21px', height: '21px' }} />
            </div></button>
          </div>
          </div>
        ) : (
          capturedImage ? null : (
            <div className='imageLogoContainer'>
              <img src="/photo-camera_9016995.png" alt="imageLogo" className='image'/>
              <h1 className='heading'>Virtual Photo Booth</h1>
              <p className='para'>Explore a world of creativity with Virtual Photo Booth! Start your journey by capturing stunning photos with our built-in camera. Just click, Snap, and let the magic begin.</p>
              <button className='buttonEnter blue' onClick={handleSnapClick}>Snap</button>
            </div>
          )
        )}
      </div>
      {capturedImage && (
  <div className='bg extra'> 
  <div className='captureContainer'>
    <img src={capturedImage} alt='Takenphoto' className='imageCaptured' />
    <div className='optionsContainer'>
    <div className='buttonContainer'>
    
      <button className='optionButtonTry' onClick={handleTryAgainClick}>
      <FiRotateCcw size={25}/>
      </button>
    
      <p className='optionText'>TRY AGAIN</p>
      </div>
      <div className='buttonContainer'>
      <Link   to={{
    pathname: '/frame',
    state: { capturedImage } 
  }}>      
   <button className='optionButtonYes'>
    <FaThumbsUp size={25} />
  </button>
   </Link>
      <p className='optionText'>NEXT</p>
      </div>
    </div>
    </div>
    </div>

)}
</div>

  );
}

export default App;
