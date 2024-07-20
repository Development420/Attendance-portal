// import { Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import "./Studentprofile.css";
import profile from "../assest/profile.png";
const Studentprofile = () => {
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
  return (
    <>
      {/* <div>
        <p className="title">Profile</p>
      </div> */}

      <div className="wrapper">
        <div className="user-card">
          <div className="user-card-img" onClick={handleImageclick}>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
            ) : (
              <img src={profile} alt="userimage" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImagechange}
              style={{ display: "none" }}
            />
          </div>
          <div className="user-card-info">
            <h2>monika</h2>
            <p>
              <span>email:</span> monika saini@gmail.com
            </p>
            <p>
              <span>location:</span> moradabad
            </p>
            <p>
              <span>occuption</span> student
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

export default Studentprofile;
