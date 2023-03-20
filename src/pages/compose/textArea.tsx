import { Input } from 'antd'
import React from 'react';
import styles from './buttonStyle.module.css';

interface MyComponentProps {
    placeholder: string; 
   
    
  }
const TextArea = ({ placeholder}:MyComponentProps) => {
  return (
    <Input className={styles.customTextArea}
      placeholder={placeholder}
      
     
    />
  )
}

export default TextArea