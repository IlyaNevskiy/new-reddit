import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../icon';
import { Menuitemslist } from './Menuitemslist';
import { Text, EColor } from '../../../Text';
import styles from './menu.css';

interface IMenuProps{
  postId: string;
}

export function Menu({postId}: IMenuProps) {
  return (
    <div className={styles.menu}>
      
      <Dropdown button={
      <button className={styles.menuButton}>
        <MenuIcon />
      </button>}
      >
        <div className={styles.dropdown}>
          <Menuitemslist postId={postId} />
          <button className={styles.closeButton}> 
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
