import React from 'react';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/layouts';

export function HomePage() {
  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='홈'>
        <div css={style.default}>
          <h1>메인 페이지</h1>
          <br />
          <Link to='/test'>테스트</Link>
        </div>
      </AppLayout>
    </>
  );
}
