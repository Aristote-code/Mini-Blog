import React, { useEffect } from 'react';

export const withLogger = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoggerComponent(props: P) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}; 