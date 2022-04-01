import React from 'react';
import styles from './commentmetadata.css';
import { EColor, Text } from '../../../../../Text';

interface ICommentMetaDataProps{
name: string;
}

export function CommentMetaData({ name } : ICommentMetaDataProps) {
  return (
    <div className={styles.metaData}>
        <a href="#userurl" className={styles.userLink}>{name}</a>
        <Text size={12} color={EColor.grey99}>1 час назад</Text>
        <div className={styles.userLigue}>Лига юристов</div>
    </div>
  );
}
