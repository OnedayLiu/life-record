import * as React from 'react';
export interface ICountDownProps {
  currYear: string;
};
export class CountDown extends React.Component<ICountDownProps, undefined> {
    public render() {
      const { currYear } = this.props;
      const lastDay = new Date(`${currYear}-12-31 23:59:59`).getTime();
      const currTime = new Date().getTime();
      const remainingDays = parseInt((lastDay - currTime) / 1000 / 60 / 60 / 24 + '', 10);
      return <h3>{ currYear }年还剩{ remainingDays }天</h3>;
    }
}