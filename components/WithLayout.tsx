// hoc/withLayout.tsx
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Layout from '../layouts';

export function withLayout<P extends object>(Component: React.ComponentType<P>) {
  return function WrappedComponent(props: P) {
    const route = useRoute();
    const isHome = route.name === 'Home';

    return (
      <Layout isHome={isHome}>
        <Component {...props} />
      </Layout>
    );
  };
}
