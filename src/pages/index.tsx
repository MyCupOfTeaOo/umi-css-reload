import React from 'react';
import styles from './index.less';
import Test from './index2';

export default () => {
  console.log('reload index1');
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Test></Test>
    </div>
  );
};
