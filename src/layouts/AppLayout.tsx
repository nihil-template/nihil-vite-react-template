import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import tw, { css } from 'twin.macro';
import { Global } from '@emotion/react';
import { useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import {
  Footer, Header, Main, Meta, Nav
} from '@/components/Layout';
import { IAppLayoutProps, IMetaData } from '@/types/site.types';
import { getCookie } from '@/utils/cookie';
import { useRefresh } from '@/hooks/queries';

export function AppLayout({
  children, title, description, keywords, author, image, created, updated, tags, type, section,
}: IAppLayoutProps) {
  const qc = useQueryClient();
  const tokenExp = getCookie<number>('tokenExp');

  const { refetch, } = useRefresh(tokenExp);

  useEffect(() => {
    const isExpired = () => {
      const tokenExp = getCookie<number>('tokenExp');
      return tokenExp ? Date.now() > tokenExp * 1000 : false;
    };

    if (!isExpired()) {
      return;
    }

    console.log('토큰의 유효성을 검사합니다.');

    if (isExpired()) {
      console.log('토큰이 만료되어 재발급합니다.');
      refetch();
      qc.invalidateQueries();
      console.log('재발급 완료');
    }
  }, [ tokenExp, ]);

  const { pathname, search, } = useLocation();

  const meta: IMetaData = {
    title,
    url: pathname + search,
    description,
    keywords,
    author,
    image,
    tags,
    type,
    section,
    created,
    updated,
  };

  const style = {
    global: css([
      '@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css)',
      tw` [*]:( box-border m-0 p-0 font-sans ) `,
    ]),
  };

  return (
    <>
      <Global styles={style.global} />
      <Meta meta={meta} />

      <Header />
      <Nav />
      <Main>{children}</Main>
      <Footer />
      <ToastContainer
        position='top-right'
        theme='colored'
        autoClose={7000}
      />
    </>
  );
}
