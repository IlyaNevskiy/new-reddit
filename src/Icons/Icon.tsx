import classNames from 'classnames';
import React from 'react';
import { BlockIcon, CloseIcon, CommentIcon, SaveIcon, SharedIcon, WarningIcon } from '../icon';
import styles from './icon.css';

export enum EIcon {
  block = 0,
  comment,
  save,
  shared,
  warning,
  close,
}

const icons: React.ReactNode[] = [<BlockIcon />, <CommentIcon />, <SaveIcon />, <SharedIcon />, <WarningIcon />, <CloseIcon />]

type ISizes = 16 | 14 | 20 | 30 ;

interface IIconsProps {
name: EIcon;
size: ISizes;
desktopTabletSize?: ISizes;
} 

export function Icon(props : IIconsProps) {
  const { name, size, desktopTabletSize } = props;

  const classes= classNames(
    styles[`s${size}`],
    { [styles[`dt${desktopTabletSize}`]]: desktopTabletSize },
  );

  return (
    <span className={classes}>
      {icons[name]}
    </span>
  );
}
