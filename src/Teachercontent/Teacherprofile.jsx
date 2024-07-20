import React, { useRef, useState } from "react";
import "./Teacherprofile.css";
import Profile from "../assest/profile.png";
const Teacherprofile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageclick = () => {
    inputRef.current.click();
  };
  const handleImagechange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  //   const handleUploadButtonClick = () => {
  //     var myHeaders = new Headers();
  //     const token = "";
  //   };

  return (
    <>
      <div className="wrapper">
        <div className="user-card">
          <div className="user-card-img" onClick={handleImageclick}>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
            ) : (
              <img src={Profile} alt="userimage" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImagechange}
              style={{ display: "none" }}
            />
          </div>
          {/* <div></div> */}
          {/* <button>upload</button> */}
          <div className="user-card-info">
            <h2>Teacher's name</h2>
            <p>
              <span>email:</span> teacher's email@gmail.com
            </p>
            <p>
              <span>location:</span> xyz
            </p>
            <p>
              <span>Specialist:</span> xyz
            </p>
            <p>
              <span>about</span> Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Accusantium vel nemo voluptatum tempora maiores
              veritatis provident aperiam animi recusandae vero eos illum
              dolorem totam reiciendis nihil culpa, fuga distinctio laudantium.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacherprofile;
