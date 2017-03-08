import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    public render() {
      const { compiler, framework } = this.props;
      return <h1>Hello from {compiler} and {framework}!</h1>;
    }
}