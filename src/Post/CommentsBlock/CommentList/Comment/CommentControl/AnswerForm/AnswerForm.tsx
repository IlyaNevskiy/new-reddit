import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import styles from './answerform.css';

interface IAnswerForm{
  onCLose?: () => void;
  name: string;
}

export function AnswerForm(props: IAnswerForm) {
  const [value, setValue] = useState(props.name+', ');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
   setValue(event.target.value);
  }

  function handeSubmit(event: FormEvent){
   event.preventDefault();
   props.onCLose?.();
  }

  return (
    <form className={styles.formAnswer} onSubmit={handeSubmit}> 
    <textarea className={styles.input} value={value} onChange={handleChange}></textarea>
    <button type='submit' className={styles.button}>Ответить</button>
  </form>
  );
}
