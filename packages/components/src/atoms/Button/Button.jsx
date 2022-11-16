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
  onclick
}) {
  return (
    isButton?(

      <div className={cx('Button',`${theme}-theme`,size) }>{text}</div>
    ):
    (
      <a href={href} className={cx('Button',`${theme}-theme`,size) }>{text}</a>
    )
  )
}
