import React, { useState,useRef } from "react";
import {Link}  from 'react-router-dom';
import {BsWhatsapp,BsFacebook,BsInstagram} from "react-icons/bs"
import html2canvas from "html2canvas"; 
import { useLocation } from 'react-router-dom';
import {IoMdShareAlt} from "react-icons/io"
import {FiDownload} from "react-icons/fi"
import {AiOutlineHome} from "react-icons/ai"
import "./index.css"

const ShareOptions = () => {
  const location = useLocation();
  const capturedImage = location.state?.capturedImage || null;
  const selectedFrames = location.state?.selectedFrame || null;
  const selectedFilters = location.state?.selectedFilter || null;

  const [showShareIcons, setShowShareIcons] = useState(false);

  const handleShareClick = () => {
    setShowShareIcons(true);
  };

  const handleBackClick = () => {
    setShowShareIcons(false); // Reset to show default buttons
  };

  const containerRef = useRef(null);

  const downloadImage = async () => {
    if (containerRef.current) {
      const canvas = await html2canvas(containerRef.current);

      // Generate download link
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.download = "photo_booth.png";
      downloadLink.click();
    }
  };



  return (
    <div className='captureContainer2'>
    <img src="/favicon.png" alt="logo" className='logo'/>
      <div className="bg">
        <div className="selectedFrame"  ref={containerRef} style={{ backgroundImage: `url(${selectedFrames})`,}}>
          <img src={capturedImage} alt='Takenphoto' className={`imageCaptured2 ${selectedFilters}`}/>
        </div>
        <h1 className="shareText">Share your snap via your favorite social media channels using</h1>
        <p className="shareParaText">#GoKaptureVirtualPhotoBooth</p>
        <div className="buttonContainer">
          {!showShareIcons && (
            <button className='shareButton' onClick={handleShareClick}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '5px' }}>Share</div>
                <IoMdShareAlt size={21} style={{ width: '21px', height: '21px' }} />
              </div>
            </button>
          )}
          {showShareIcons ? (
            <>
            <div className="shareIcons">
              <a href="whatsapp://send" className="shareIconWrapper">
                <BsWhatsapp size={27} className="shareIcon whatsapp" />
              </a>
              <a href="https://www.facebook.com" className="shareIconWrapper">
                <BsFacebook size={27} className="shareIcon facebook" />
              </a>
              <a href="https://www.instagram.com" className="shareIconWrapper">
                <BsInstagram size={27} className="shareIcon instagram" />
              </a>
            </div>
            <button className='shareButton' style={{marginTop:'15px'}} onClick={handleBackClick}>
               
                  Back
              </button>
              </>
          ) : (
            <div className="buttons2">
              <button className='shareButton' onClick={downloadImage}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '5px' }}>Download</div>
                  <FiDownload size={21} style={{ width: '21px', height: '21px' }} />
                </div>
              </button>
              <Link to="/">
              <button className='shareButton'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '5px' }}>Home</div>
                  <AiOutlineHome size={21} style={{ width: '21px', height: '21px' }} />
                </div>
              </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShareOptions;
