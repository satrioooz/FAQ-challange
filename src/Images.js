import React, {useState} from 'react';
import img1 from './image/img1.jpg';
import img2 from './image/img2.jpg';

const Galery = () =>{

    let Images = [
        {
            images: img1
        },
        {
            images: img2
        }
    ]

    const [selectedImg, setSelectedImg] = useState(Images[0]);

    return (
        <div>
            <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="imgContainer">
          {Images.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? "4px solid purple" : "" }}
              key={index}
              src={img}
              alt="dog"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
        </div>
    )
}

export default Galery;