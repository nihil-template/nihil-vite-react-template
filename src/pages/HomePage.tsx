'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { DefaultPage } from '@/src/widgets';

interface Props {
  styles?: ClassNameValue;
}

export function HomePage({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <DefaultPage>
        <div className={css.default}>content</div>
      </DefaultPage>
    </>
  );
}
