import { Input } from 'antd'
import React from 'react';
import styles from './textArea.module.css';

interface MyComponentProps {
    placeholder: string; 
   
    
  }
const TextArea = ({ placeholder}:MyComponentProps) => {
  return (
    <Input 
      placeholder={placeholder}
      className={styles.customTextArea}
     
    />
  )
}

export default TextArea