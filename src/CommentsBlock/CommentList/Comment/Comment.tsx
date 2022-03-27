import React from 'react';
import styles from './comment.css';
import { CommentMetaData } from './CommentMetaData';
import { CommentContent } from './CommentContent';
import { CommentControl } from './CommentControl';

interface ICommentProps{
  name: string
}

export function Comment(props : ICommentProps) {
  return (
    <li className={styles.commentItem}>
      <CommentMetaData name={props.name}/>
      <CommentContent />
      <CommentControl name={props.name}/>
    </li>
  );
}
