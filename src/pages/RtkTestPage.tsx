import React, { useCallback, useRef } from 'react';
import tw, { TwStyle, css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { Icon } from '@iconify/react';
import {
  useDeleteBoardMutation, useEditBoardMutation, useGetBoardsQuery, usePostBoardMutation
} from '../apis/example.api';
import { Nihil } from '../utils/nihil';

interface Props {
  styles?: TwStyle | SerializedStyles;
}

export function RtkTestPage({ styles, }: Props) {
  // 쿼리는 객체가 들어있음.
  const boards = useGetBoardsQuery(null, {
    pollingInterval: 10000,
  });
  // 뮤테이션은 배열이 들어있고 첫번째가 요청을 보냄, 두번째가 그 결과에 대한 상태가 들어있음
  const [ addBoard, addBoardState, ] = usePostBoardMutation();
  const [ editBoard, editBoardState, ] = useEditBoardMutation();
  const [ deleteBoard, deleteBoardState, ] = useDeleteBoardMutation();

  const numberRef = useRef<number>(11);

  const onClickPost = useCallback(
    () => {
      addBoard({
        id: numberRef.current++,
        userId: 1,
        title: ``,
        content: ``,
      });
    },
    [ numberRef.current, ]
  );

  const onClickDelete = useCallback((index: number) => {
    deleteBoard({
      index,
    });
  }, []);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <div css={style.default}>
        {(boards.isLoading || boards.isFetching) && (
          <Icon icon='uil:spinner-alt' tw='animate-spin' />
        )}
        {boards.isSuccess && (
          <>
            <button onClick={onClickPost}>추가</button>
            {boards.data.map((item) => (
              <div key={Nihil.uuid(item.id)}>
                <h2>
                  <span>{item.title}</span>
                  <button
                    onClick={() => onClickDelete(item.id)}
                    className='inline-block py-1 px-2 bg-red-500 text-white ml-2'
                  >
                    삭제
                  </button>
                </h2>
                <p>{item.content}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
