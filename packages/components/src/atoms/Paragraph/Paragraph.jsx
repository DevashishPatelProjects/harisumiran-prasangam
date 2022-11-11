import React from 'react'
import styles from "./Paragraph.module.scss"

export default function Button({text}) {
  return (
    <div className={styles.button}>{text}</div>
  )
}
