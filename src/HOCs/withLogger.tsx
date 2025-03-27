import React, { ComponentType, useEffect } from "react";

export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string = WrappedComponent.displayName || WrappedComponent.name
) {
  return function WithLoggerComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`);
      return () => console.log(`${componentName} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}
