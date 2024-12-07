import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { ChangeEvent, useEffect } from 'react';

import styles from './Switch.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function Switch() {
  const [theme, setTheme] = useLocalStorage<'dark' | 'light'>('dark', 'theme');

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
