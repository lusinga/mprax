import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';

import Logo from '@/components/Logo';

export default function Home() {
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>二代计算器</Text>
      <Text className={styles.homeInfo}>Calc Plus++</Text>
      <Text className={styles.homeInfo}>lusing.cn</Text>
    </View>
  );
}
