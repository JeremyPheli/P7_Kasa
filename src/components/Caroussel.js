import React from "react";
import { useState, useEffect } from "react";
import "../styles/caroussel.css";

const Caroussel = ({ images }) => {
  const [picNumber, setPicNumber] = useState(1);
  const [picData, setPicData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    setPicData(images);
    setDataLength(images.length);
  }, [images]);

  const prevPic = () => {
    if (picNumber !== 1) {
      setPicNumber(picNumber - 1);
    } else if (picNumber === 1) {
      setPicNumber(dataLength);
    }
  };

  const nextPic = () => {
    if (picNumber < dataLength) {
      setPicNumber(picNumber + 1);
    } else {
      setPicNumber(1);
    }
  };

  return (
    <div className="caroussel">
      <div className="caroussel-left" onClick={() => prevPic()}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="caroussel-right" onClick={() => nextPic()}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <img src={`${picData[picNumber - 1]}`} alt="" className="caroussel-img" />
      <div className="caroussel-count">
        <span>
          {picNumber}/{dataLength}
        </span>
      </div>
    </div>
  );
};

export default Caroussel;
