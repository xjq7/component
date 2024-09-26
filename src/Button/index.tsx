import React, { PropsWithChildren } from 'react';

export interface ButtonProps {}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { children } = props;
  return (
    <button className="x-button">
      <span>{children}</span>
    </button>
  );
}
