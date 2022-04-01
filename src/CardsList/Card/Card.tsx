import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface Props{
  title:string;
  score: number;
  author: string;
  created_utc: number;
  src: string[];
  idForBtn: string
}

export function Card({ title, score, author, created_utc, src, idForBtn } : Props) {
  return (
    <li className={styles.card}>
      <TextContent title={title} author= {author} created_utc={created_utc} id={idForBtn}  />
      <Preview src={src}/> 
      <Menu />
      <Controls scoreprops={score} idForBtn= {idForBtn} />
    </li>
  );
}
