"use client"
import { useState } from 'react';
import Input from './atoms/input'
import styles from './page.module.css'

export default function Home() {

  const [value, setValue] = useState('');

  return (
    <main className={styles.main}>
      <Input value={value} changeValue={setValue}/>
    </main>
  )
}
