import React from 'react'
import classNames from 'classnames/bind';
import styles from "./Button.module.scss"

const cx = classNames.bind(styles);


export default function Button({
  text,
  size='default',
  theme='primary',
  variant='primary',
  isButton,
  href,
  onClick
}) {
  const classname=(cx('Button',`${theme}-theme`,size,variant) )
  return (
    isButton?(

      <div tabIndex="1" onClick={onClick} className={classname}>{text}</div>
    ):
    (
      <a tabIndex="1" href={href} className={classname }>{text}</a>
    )
  )
}
