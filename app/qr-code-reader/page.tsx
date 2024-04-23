'use client';

// reference
// react-qr-reader
// https://github.com/JodusNodus/react-qr-reader

import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

import styles from '../page.module.css';

export default function QRCodeReader() {
  const [data, setData] = useState('No result');

  // Hydration failed エラーを回避するために、
  // useEffect が一度実行された(レンダリングが行われた)ことを確認して、
  // 画面を表示するようにしている。
  // Error: Hydration failed because the initial UI does not match what was rendered on the server.
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, [])
  if (!hasMounted) return null;


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className=''>
          <QrReader
            onResult={(result, error) => {
              if (result) {
                setData(result.getText());
              }
              if (error) {
                console.info(error);
              }
            }}
            constraints={{ facingMode: 'environment' }}
          />
          <div>{data}</div>
        </div>
      </div>
    </main>
  );
}
