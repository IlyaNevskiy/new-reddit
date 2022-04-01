import React from 'react';
import { Text, EColor } from '../../../../Text';
import { Icon, EIcon } from '../../../../Icons';
import styles from './menuitemslist.css';
import classNames from 'classnames';

interface IMenuitemslistProps{
postId: string;
}

export function Menuitemslist( {postId}: IMenuitemslistProps) {
  return (
<ul className={styles.menuItemsList}>

  <li className={classNames(styles.menuItem, styles.menuItemVisible)}>
    <Icon name={EIcon.comment} size={14} desktopTabletSize={16} />
    <Text size={12} desktopSize={14} tabletSize={14} color={EColor.grey99}>Комментарии</Text>
  </li>

  <div className={classNames(styles.divider, styles.dividerNotVisible)} />

  <li className={classNames(styles.menuItem, styles.menuItemVisible)}>
    <Icon name={EIcon.shared} size={14} desktopTabletSize={16} />
    <Text size={12} desktopSize={14} tabletSize={14} color={EColor.grey99}>Поделиться</Text>
  </li>

  <div className={classNames(styles.divider, styles.dividerNotVisible)} />

  <li className={styles.menuItem}>
    <Icon name={EIcon.block} size={14} desktopTabletSize={16} />
    <Text size={12} desktopSize={14} tabletSize={14} color={EColor.grey99}>Скрыть</Text>
  </li>

  <div className={styles.divider} />

  <li className={classNames(styles.menuItem, styles.menuItemVisible)}>
    <Icon name={EIcon.save} size={14} desktopTabletSize={16} />
    <Text size={12} desktopSize={14} tabletSize={14} color={EColor.grey99}>Сохранить</Text>
  </li>

  <div className={classNames(styles.divider, styles.dividerNotVisible)} />

  <li className={styles.menuItem}>
    <Icon name={EIcon.warning} size={14} desktopTabletSize={16} />
    <Text size={12} desktopSize={14} tabletSize={14} color={EColor.grey99}>Пожаловаться</Text>
  </li>
</ul>
  );
}
