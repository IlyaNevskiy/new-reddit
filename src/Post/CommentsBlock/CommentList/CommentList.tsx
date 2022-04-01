import React from 'react';
import styles from './commentlist.css';
import { Comment } from './Comment';

export function CommentList() {
  return (
<ul className={styles.commentsList}>
    <Comment name='Максим Рогов' />
</ul>
  );
}
