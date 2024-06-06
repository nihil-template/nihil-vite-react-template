'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { Link } from 'react-router-dom';

interface Props {
  styles?: ClassNameValue
}

export function Nav({ styles, }: Props) {
  const style = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <nav className={style.default}>
        <div>
          <Link to='/'>홈</Link>
        </div>
      </nav>
    </>
  );
}
