import React from 'react';
import { IconAnon } from '../../../icon';
import styles from './userblock.css';
import {EColor, Text} from '../../../Text'

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}


export function UserBlock({avatarSrc, username, loading} : IUserBlockProps) {
  return (
    <a className={styles.userBox} 
    href="https://www.reddit.com/api/v1/authorize?client_id=XE_GLFl_L9x_upfkoTcP8Q&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth/&scope=read submit identity"
    onClick={()=>{localStorage.removeItem('token'); }}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
        <Text size={20} color={username ? EColor.black : EColor.grey99} >Загрузка...</Text>
        ):
        (
        <Text size={20} color={username ? EColor.black : EColor.grey99} >{username || 'Aноним'}</Text>
        )}
      </div>
    </a>
  );
}
