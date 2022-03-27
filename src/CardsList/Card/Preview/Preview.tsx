import React, { useEffect, useState } from 'react';
import styles from './preview.css';

interface Props{
  src:string[];
}

export function Preview({ src }:Props) {
  const [ link, setLink ] = useState('');

  useEffect(()=>{
    if(src[0].indexOf('jpg')>0 || src[0].indexOf('png')>0) setLink(src[0]);
    else if(src[1].indexOf('jpg')>0 || src[1].indexOf('png')>0) setLink(src[1]);
    else setLink('https://commons.bmstu.wiki/images/d/d5/Reddit-combo-1920-800x450.png');
  },[])

  return (
    <div className={styles.preview}>
    <img src={link} className={styles.previewImg} />
    </div> 
  );
}
