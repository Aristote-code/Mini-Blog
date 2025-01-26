import React, { useEffect } from 'react';
import { WithLoggingProps } from '../types';

export function withLogging<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function WithLoggingComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`);
      return () => {
        console.log(`${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}