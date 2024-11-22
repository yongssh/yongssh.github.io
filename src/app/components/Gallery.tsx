"use client";
import React, { useState } from 'react';
import Footer from './footer';
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { src: '/aquarium.JPG', width: 1080, height: 1920}, 
  { src: '/uwcherryblossoms.JPG', width: 1920, height: 1080 },
  { src: '/geesefamily.JPG', width: 3996, height: 5994 },
  { src: '/gumwall.JPG', width: 5910, height: 3940},
  { src: '/kellogg.JPG', width: 1080, height: 1920 },
  { src: '/soccerdance.JPG', width: 3000, height: 2000},
  { src: '/northerntrust.JPG',width: 1080, height: 1920},
  { src: '/motelbreakfast.JPG',width: 1920, height: 1080},

  { src: '/chicagoriver.JPG',  width: 1017, height: 1811 },
  { src: '/deeringgarden.JPG', width: 3000, height: 2000 },
  { src: '/ntu.jpg',  width: 1080, height: 1920},
  { src: '/pikeplacejapanesestore.JPG',  width: 1080, height: 1620 },
  { src: '/eclipse.JPG', width: 1400, height: 900  },
  { src: '/soccer.JPG',  width: 1080, height: 1920},

  { src: '/greengoose.JPG', width: 3000, height: 2000 },
  { src: '/gtownchambers.jpeg',  width: 2827, height: 4242},
  { src: '/beach.JPG', width: 4000, height: 6000},
  { src: '/hike.JPG', width: 3648, height: 2432 },

  { src: '/strokes.JPG', width: 1920, height: 1080 },


];


export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  return (
    <section>
    <>
      <MasonryPhotoAlbum photos={photos} columns={3} onClick={({ index }) => setIndex(index)}/>
      
      <Lightbox
      slides={photos}
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} />
    </>
    </section>

    );
  
}
