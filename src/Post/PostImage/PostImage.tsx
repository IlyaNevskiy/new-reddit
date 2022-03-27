import React, { useEffect, useState } from 'react';
import styles from './postimage.css';

interface Props{
  url:string;
}

export function PostImage({url}: Props) {
  const [img, setImg] = useState(false);
  const [video, setVideo] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const [imageLink, setImageLink] = useState('');

    if(url!=undefined && img===false && video===false){
    if(url.indexOf('.jpg')>0 || url.indexOf('.png')>0 || url.indexOf('.gif')>0) {
      setImg(true)
      if(url.indexOf('.gifv')>0) setImageLink(url.substring(0,url.length-1))
      else setImageLink(url);
    }
    else if(url.indexOf('youtu')>0) {
      setVideo(true);
      setVideoLink('https://www.youtube.com/embed/'+url.substring(url.indexOf('.be/')+4));
    }
    else if(url.indexOf('gfycat')>0){
      setVideo(true);
      if(url.indexOf('-video-')>0)   setVideoLink('https://gfycat.com/ifr/'+url.substring(url.indexOf('gfycat.com/')+11, url.indexOf('-video-')));
      else setVideoLink('https://gfycat.com/ifr/'+url.substring(url.indexOf('gfycat.com/')+11));

    }
  }
  return (
   <div>
     {img===true && (
         <img className={styles.postImg} src={imageLink} />
       )}

       {video===true && (
         <div className={styles.videoContainer}>
            <iframe src={videoLink} scrolling='no' width='100%' height='100%'></iframe>
         </div>
        )}
   </div>
  );
}
