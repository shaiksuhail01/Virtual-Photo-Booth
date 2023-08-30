import {useState,React} from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import {FaThumbsUp,FaBackward} from 'react-icons/fa';
import {Link}  from 'react-router-dom';
import "./index.css"; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const FrameSelector = () => {
  const location = useLocation();
  const capturedImage = location.state?.capturedImage || null;
  const frames = [
   '/37.jpg',
   '/1002.jpg',
   '/1003.jpg',
   '/1005.jpg',
   '/1048.jpg',
    '/scenes3.jpg',
    '/wooden5.jpg',
    '/3M.jpg',
    '/108.jpg',
    '/1000.jpg',
    '/1009.jpg',
    '/1013.jpg',
    '/1015.jpg',
  ];
 

  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleFrameClick = (frameUrl) => {
    setSelectedFrame(frameUrl);
  };

  const handleBackClick = () => {
    window.location.reload(); 
  };


  return (
    <div className='captureContainer2'>
    <img src="/favicon.png" alt="logo" className='logo'/>
    <div className='bg3'>
     <div
            className='selectedFrame'
            style={{ backgroundImage: `url(${selectedFrame})` }}
          >
            <img src={capturedImage} alt='Takenphoto' className='imageCaptured' />
            </div>
            <h1 className='para' style={{marginTop:'0px',marginBottom:'10px'}}>Choose a Frame</h1>
       <div className='caroselContainer'>
        <Carousel
        
          showStatus={true}
          showIndicators={false}
          showThumbs={false}
          onChange={(index) => handleFrameClick(frames[index])}
          centerMode={true}
          centerSlidePercentage={33.33} 
          infiniteLoop={true}
        >
          {frames.map((frameUrl, index) => (
            <img
              key={index}
              src={frameUrl}
              alt={`Frame ${index}`}
            />
          ))}
        </Carousel>
      </div>
    
      <div className='optionsContainer'>
    <div className='buttonContainer'>
      <button className='optionButtonTry' onClick={handleBackClick}>
      <FaBackward size={25}/>
      </button>
      <p className='optionText'>BACK</p>
      </div>
      <div className='buttonContainer'>
      <Link   to={{
    pathname: '/filters',
    state: { capturedImage,selectedFrame }
  }}>
                  <button className='optionButtonYes'>
                    <FaThumbsUp size={25} />
                  </button>
                </Link>
      <p className='optionText' style={{color:'green'}}>NEXT</p>
      </div>
    </div>
  </div>
  </div>
  );
};

export default FrameSelector;
