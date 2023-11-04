import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';
import { AppLayout } from '@/src/layouts';
import { useAppDispatch, useAppSelector } from '../hooks/rtk';
import { setWord } from '../reducers/example.reducer';

export function TestPage() {
  const word = useAppSelector(
    (state) => state.example.word
  );
  const dispatch = useAppDispatch();

  const onClickWord = useCallback(() => {
    const newWord = word === 'JavaScript'
      ? 'TypeScript'
      : 'JavaScript';

    dispatch(setWord(newWord));
  }, [ word, ]);

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
