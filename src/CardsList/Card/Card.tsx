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
  postId: string
}

export function Card({ title, score, author, created_utc, src, postId } : Props) {
  return (
    <li className={styles.card}>
      <TextContent title={title} author= {author} created_utc={created_utc} postId={postId}  />
      <Preview src={src}/> 
      <Menu postId={postId}/>
      <Controls scoreprops={score} postId= {postId} />
    </li>
  );
}
