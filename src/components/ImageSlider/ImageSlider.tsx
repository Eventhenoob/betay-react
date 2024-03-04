"use client";
import React, { useState } from "react";
import style from "./style.module.css";

const images = [
  "https://images.pexels.com/photos/1710352/pexels-photo-1710352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/309384/pexels-photo-309384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1610995/pexels-photo-1610995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1726775/pexels-photo-1726775.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/9574383/pexels-photo-9574383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(-1);
  return (
    <>
      <div className={style["container"]}>
        {images.map((img, i) => (
          <img
            className={
              style["img"] + " " + (i == current ? style["active"] : "")
            }
            onClick={() => {
              i == current && setCurrent(-1);
              i != current && setCurrent(i);
            }}
            src={img}
            key={i}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
