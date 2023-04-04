import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from '@/layouts';
import { AppDispatch, RootState } from '@/store';
import { changeWord } from '@/reducers/TestReducer';

export function TestPage() {
  const word = useSelector((state: RootState) => state.test.word);
  const dispatch = useDispatch<AppDispatch>();

  const onClickWord = useCallback(() => {
    dispatch(changeWord());
  }, []);

  const style = {
    default: css([
      tw`  `,
    ]),
  };

  return (
    <>
      <AppLayout title='테스트 페이지'>
        <div css={style.default}>
          <h1>테스트 페이지 {word}</h1>
          <button onClick={onClickWord}>변경</button>
          <br />
          <Link to='/'>홈</Link>
        </div>
      </AppLayout>
    </>
  );
}
