import React, { useState } from 'react';
import styles from './controls.css';

interface Props{
  scoreprops:number;
  idForBtn: string
}

export function Controls({ scoreprops, idForBtn }: Props) {
idForBtn+='--karma';
const [score, setScore]= useState(scoreprops);
const [up, setUp]= useState(false);
const [down, setDown]= useState(false);
const karmaValue=document.getElementById(idForBtn);

  return (
    <div className={styles.controls}>
    <div className={styles.karmaCounter}>
      <button className={styles.up} onClick={()=>{
        
        if(up===false && down===false){
         setScore(score+1);
         setUp(true);
         if(karmaValue) karmaValue.style.color = 'var(--green)'
        }
        else if(up===false && down===true){
          setScore(score+2);
          setUp(true);
          setDown(false);
          if(karmaValue) karmaValue.style.color = 'var(--green)'
        }
        }}>
        <svg width="19" height="10" viewBox='0 0 19 10' fill='none' >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
      <span id={idForBtn} className={styles.karmaValue}>{score}</span>
      <button className={styles.down} onClick={()=>{
        if(up===false && down===false){
          setScore(score-1);
          setDown(true);
          if(karmaValue) karmaValue.style.color = 'var(--orange)'
         }
         else if(down===false && up===true){
           setScore(score-2);
           setUp(false);
           setDown(true);
           if(karmaValue) karmaValue.style.color = 'var(--orange)'
         }
      }}>
        <svg className={styles.down} width="19" height="10" viewBox='0 0 19 10' fill='none' xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
    </div>

    <button className={styles.commentsButton}>
      <svg width="15" height="15"  xmlns="http://www.w3.org/2000/svg" fill='#C4C4C4' fill-rule="evenodd" clip-rule="evenodd">
        <path d="M 13.242188 0 L 1.757812 0 C 0.785156 0 0 0.785156 0 1.757812 L 0 9.324219 C 0 10.296875 0.785156 11.082031 1.757812 11.082031 L 4.484375 11.082031 C 4.550781 11.082031 4.601562 11.136719 4.601562 11.199219 L 4.601562 14.179688 C 4.601562 14.511719 4.804688 14.8125 5.109375 14.9375 C 5.417969 15.066406 5.769531 14.996094 6.003906 14.761719 L 9.644531 11.117188 C 9.667969 11.09375 9.699219 11.082031 9.730469 11.082031 L 13.246094 11.082031 C 14.214844 11.082031 15.003906 10.296875 15.003906 9.324219 L 15.003906 1.757812 C 15.003906 1.292969 14.816406 0.84375 14.488281 0.515625 C 14.15625 0.183594 13.707031 0 13.242188 0 Z M 14.296875 9.324219 C 14.296875 9.90625 13.824219 10.378906 13.242188 10.378906 L 9.726562 10.378906 C 9.511719 10.378906 9.300781 10.460938 9.148438 10.613281 L 5.507812 14.261719 C 5.472656 14.296875 5.421875 14.304688 5.378906 14.289062 C 5.335938 14.269531 5.308594 14.226562 5.308594 14.179688 L 5.308594 11.199219 C 5.308594 10.746094 4.941406 10.378906 4.488281 10.378906 L 1.757812 10.378906 C 1.175781 10.378906 0.703125 9.90625 0.703125 9.324219 L 0.703125 1.757812 C 0.703125 1.175781 1.175781 0.703125 1.757812 0.703125 L 13.242188 0.703125 C 13.824219 0.703125 14.296875 1.175781 14.296875 1.757812 Z M 14.296875 9.324219 "/>          
      </svg>
      <span className={styles.commentsNumber}>13</span>
    </button>

    <div className={styles.actions}>
      <button className={styles.shareButton}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="20px" height="20px"><path fill="#C4C4C4" d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"/><path fill="#FFF" d="M154.4 203.09999999999997A53.8 53.8 0 1 0 154.4 310.7 53.8 53.8 0 1 0 154.4 203.09999999999997zM318.7 107.39999999999999A53.8 53.8 0 1 0 318.7 215 53.8 53.8 0 1 0 318.7 107.39999999999999zM318.7 297A53.8 53.8 0 1 0 318.7 404.6 53.8 53.8 0 1 0 318.7 297z"/><g><path fill="#FFF" d="M222.1 112.2H251V302.3H222.1z" transform="rotate(59.786 236.552 207.272)"/></g><g><path fill="#FFF" d="M141.5 288.5H331.6V317.4H141.5z" transform="rotate(30.214 236.576 302.965)"/></g></svg>
      </button> 

      <button className={styles.saveButton}>
      <svg fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg" width="19.5px" height="19.5px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path xmlns="http://www.w3.org/2000/svg"  d="M 11.875 7.917969 L 15.042969 7.917969 L 9.5 14.25 L 3.957031 7.917969 L 7.125 7.917969 L 7.125 0 L 11.875 0 Z M 14.417969 1.386719 L 13.457031 2.65625 C 15.820312 4.027344 17.417969 6.578125 17.417969 9.5 C 17.417969 13.867188 13.867188 17.417969 9.5 17.417969 C 5.132812 17.417969 1.582031 13.867188 1.582031 9.5 C 1.582031 6.578125 3.179688 4.027344 5.542969 2.65625 L 4.582031 1.386719 C 1.839844 3.054688 0 6.058594 0 9.5 C 0 14.746094 4.253906 19 9.5 19 C 14.746094 19 19 14.746094 19 9.5 C 19 6.058594 17.160156 3.054688 14.417969 1.386719 Z M 14.417969 1.386719 "/>              </g></svg>
      </button>
    </div>
  </div>  
  );
}
