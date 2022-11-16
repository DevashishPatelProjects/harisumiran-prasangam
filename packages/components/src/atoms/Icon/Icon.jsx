import React from 'react'
import styles from "./Icon.module.scss"
import ICONS from './icons.json'

export default function Icon({className,icon,fill,size,...rest}) {
  return (
    <div 
    data-testid="icon"
    
    style={{
      height: `${size}px`,
      width: `${size}px`,
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <svg 
      className={`${className}`}
        data-testid="icon"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        {...rest}
        >
          <path fill={fill} d={ICONS[icon]} /> 
      </svg>
    </div>
  )
}
