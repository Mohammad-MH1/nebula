import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { ChangeEvent, useEffect, useState } from 'react';

import styles from './Switch.module.css';

function Switch() {
  const [theme, setTheme] = useState('dark');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTheme(e.target.checked ? 'light' : 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.switchContainer}>
      <input
        className={styles.switch}
        type='checkbox'
        id='switch'
        name='mode'
        onChange={handleChange}
        checked={theme === 'light'}
      />
      <label className={styles.label} htmlFor='switch'>
        Toggle
      </label>
      {theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}
    </div>
  );
}

export default Switch;
