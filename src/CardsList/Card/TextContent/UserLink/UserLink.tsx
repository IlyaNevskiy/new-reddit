import React, { useEffect, useState } from 'react';
import styles from './userlink.css';

interface Props{
  author:string;
  created_utc: number
}

export function UserLink({ author, created_utc }: Props) {
  const [ date, setDate ]= useState('');

  function dateDetection(){
    const now= new Date().getTime()/1000;
    const differ:number = Math.round((now-created_utc)/3600);
    
    if(differ>24){
      setDate('1 день назад');
    }
    else{   
       switch(differ){
        case 0:
          setDate('только что');
          break;
        case 1:
        case 21:
          setDate(String(differ)+' час назад');
          break;
        case 2 :
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
          setDate(String(differ)+' часa назад');
          break;
        default:
          setDate(String(differ)+' часов назад');

        
       }
     }

  }
  
useEffect(()=>{
  dateDetection();
},[])

return (
<div className={styles.metaData}>
            <div className={styles.userLink}>
              <img
               className={styles.avatar}
               src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" 
               alt="avatar" 
               />
              <a href="#user-url" className={styles.username}>{author}</a>
            </div>
            <span className={styles.createdAt}>
              <span className={styles.publishedLabel}>опубликовано</span>
              {date}
            </span>
          </div>
  );
}
