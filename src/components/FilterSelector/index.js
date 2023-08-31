import {useState,React} from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import {FaThumbsUp,FaBackward} from 'react-icons/fa';
import {Link}  from 'react-router-dom';
import "./index.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const FilterSelector = () => {
  const location = useLocation();
  const capturedImage = location.state?.capturedImage || null;
  const selectedFrame = location.state?.selectedFrame || null;

  const [selectedFilter, setSelectedFilter] = useState('none'); 

  const applyFilter = (filterName) => {
    setSelectedFilter(filterName);
  };


  return (
    <div className='captureContainer2'>
    <img src="/favicon.png" alt="logo" className='logo'/>
    <div className='bg3'>
     <div
            className='selectedFrame'
            style={{ backgroundImage: `url(${selectedFrame})` }}
          >
            <img src={capturedImage} alt='Takenphoto' className={`imageCaptured2 ${selectedFilter}`} />
            </div>
       <div>
       <h1 className='text'>Choose a Filter</h1>
       <div className='caroselContainer'>
        <Carousel
         
          showStatus={true}
          showIndicators={false}
          showThumbs={false}
         
          centerMode={true}
          centerSlidePercentage={33.33} 
          infiniteLoop={true}
        >
  <div onClick={() => applyFilter('sepia')} className='filterText'><img src="/th.jpeg" alt="filter" className='imageFilter'/>Sepia</div>
  <div onClick={() => applyFilter('grayscale')} className='filterText'><img src="/th (1).jpeg" alt="filter"  className='imageFilter'/>Grayscale</div>
  <div onClick={() => applyFilter('blur')} className='filterText'><img src="/th (3).jpeg" alt="filter"  className='imageFilter'/>Blur</div>
  <div onClick={() => applyFilter('brightness')} className='filterText'><img src="/High-Brightness-Signage-Does-More-Than-Advertise.jpg" alt="filter"  className='imageFilter'/>Brightness</div>
  <div onClick={() => applyFilter('contrast')} className='filterText'><img src="/th (4).jpeg" alt="filter"  className='imageFilter'/>Contrast</div>
  <div onClick={() => applyFilter('saturate')} className='filterText'><img src="/3b1a01a6d0a72b41f20afa779384086b.jpg" alt="filter"  className='imageFilter'/>Saturate</div>
  <div onClick={() => applyFilter('invert')} className='filterText'><img src="/Inverted-Image.jpg" alt="filter"  className='imageFilter'/>Invert</div>
  <div onClick={() => applyFilter('hue-rotate')} className='filterText'><img src="/th (5).jpeg" alt="filter"  className='imageFilter'/>Hue-rotate</div>
  <div onClick={() => applyFilter('shadow')} className='filterText'><img src="/th (6).jpeg" alt="filter"  className='imageFilter'/>Shadow</div>
  <div onClick={() => applyFilter('opacity')} className='filterText'><img src="/9394bf1959bf2cec4d706763e8368138--double-exposure-photo-double-exposure-hands.jpg" alt="filter"  className='imageFilter'/>Opacity</div>
     
        </Carousel>
      </div>
      </div>
      <div className='optionsContainer'>
    <div className='buttonContainer'>
    <Link to="/">
      <button className='optionButtonTry'>
      <FaBackward size={25}/>
      </button>
      </Link>
      <p className='optionText'>BACK</p>
      </div>
      <div className='buttonContainer'>
      <Link   to={{
    pathname: '/share',
    state: { capturedImage,selectedFrame,selectedFilter } 
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

export default FilterSelector;
