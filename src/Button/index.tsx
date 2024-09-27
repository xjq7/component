import React, { PropsWithChildren } from 'react';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  type?: 'primary';
  size?: 'small' | 'medium' | ' large';
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const { type = 'primary', size = 'medium', onClick, children } = props;

  return (
    <button className="x-button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
