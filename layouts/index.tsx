// components/Layout.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../blocks/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: '#fff' }} edges={['top']}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});
