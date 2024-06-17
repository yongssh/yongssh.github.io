"use client";
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from '../styles/Gallery.module.css';

const images = [
  '/aquarium.JPG',
  '/uwcherryblossoms.JPG',
  '/geesefamily.JPG',
  '/gumwall.JPG',
  '/kellogg.JPG',
  '/soccerdance.JPG',

 '/northerntrust.JPG',
  '/motelbreakfast.JPG',
  '/chicagoriver.JPG',
  '/deeringgarden.JPG',
  '/ntu.jpg',
  '/pikeplacejapanesestore.JPG',
  '/eclipse.JPG',
  '/soccer.JPG',
  '/greengoose.JPG',
  '/gtownchambers.jpeg',
  '/strokes.JPG',
  '/hike.JPG',


];

const PhotoGallery = () => {

    
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`${styles.myMasonryGrid} p-8`}
        columnClassName={styles.myMasonryGridColumn}>
        
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={image}
              alt={`${image}`}
              className={styles.image}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PhotoGallery;


