import { Heading } from "@chakra-ui/react";
import React from "react";
import "./Studentprofile.css";
import profile from "../assest/profile.jpg";
const Studentprofile = () => {
  return (
    <>
      {/* <div>
        <p className="title">Profile</p>
      </div> */}

      <div className="wrapper">
        <div className="user-card">
          <div className="user-card-img">
            <img src={profile} alt="userimage" />
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
