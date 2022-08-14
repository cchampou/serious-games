import './styles.css';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

function Button(
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
