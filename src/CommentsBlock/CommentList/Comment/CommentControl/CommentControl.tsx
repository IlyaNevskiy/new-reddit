import React, { useState } from 'react';
import styles from './commentcontrol.css';
import { AnswerForm } from './AnswerForm';
import { CommentMetaData } from '../CommentMetaData';

interface ICommentControlProps{
  name: string
}

export function CommentControl(props: ICommentControlProps) {
  const [isAnswerOpened, setIsAnswerOpened] = useState(false);

  return (
    <div>
      <div className={styles.control}>
        <button className={styles.controlItem} onClick = {() => setIsAnswerOpened(true)}>
          Ответить
        </button>
        <button className={styles.controlItem}>
          Поделиться
        </button>
        <button className={styles.controlItem}>
          Пожаловаться
        </button>
      </div>
      {isAnswerOpened && (
      <AnswerForm 
        name={props.name}
        onCLose={()=> {setIsAnswerOpened(false); }}
      /> 
      )}
    </div>
    
  );


}
