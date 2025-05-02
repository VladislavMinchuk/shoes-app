// components/Layout.tsx
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../blocks/Header';

type Props = {
  isHome?: boolean;
  children: ReactNode;
};

const Layout = ({ children, isHome }: Props) => {
  
  return (
      <View style={ styles.container }>
        <Header />
        <View style={{...styles.content, marginTop: isHome ? 0 : 60}}>
          {children}
        </View>
      </View>
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
