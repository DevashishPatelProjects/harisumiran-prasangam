import React from 'react'
import classNames from 'classnames/bind';
import styles from "./Button.module.scss"
import {Icon} from "../index"

const cx = classNames.bind(styles);


export default function Button({
  text,
  size='default',
  theme='primary',
  variant='primary',
  isButton,
  href,
  onClick,
  icon
}) {
  const classname=(cx('Button',`${theme}-theme`,size,variant) )
  const children = (
    <>
    {icon&&(<><Icon className={cx('icon',`${variant}-variant`,`${theme}-icon-theme`)} icon= {icon} /></>)}<span className={cx('button-text')}>{text}</span>
    </>
  )
  return (
    isButton?(
      <div tabIndex="1" onClick={onClick} className={classname}>{children}</div>
    ):
    (
      <a tabIndex="1" href={href} className={classname }>{children}</a>
    )
  )
}
