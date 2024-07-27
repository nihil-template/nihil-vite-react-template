'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ISiteMeta } from '@/src/entities';
import { configData } from '@/src/data';

interface Props {
  meta: ISiteMeta;
}

export function Meta({ meta, }: Props) {
  const {
    title, description, url, author, keywords, image, type, tags, section, created, updated,
  } = meta;

  const siteTitle = title
    ? `${title} - ${configData.title}`
    : configData.title;
  const sitDesc = description || configData.description;
  const siteKeywords = keywords || configData.keywords;
  const generator = 'Jetbrains Webstorm';
  const currentUrl = `${configData.url}${url}`;

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name='description' content={sitDesc} />
        <meta name='keywords' content={siteKeywords} />
        <meta name='generator' content={generator} />
        <meta name='author' content={author} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={sitDesc} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:site_name' content={configData.title} />
        <meta property='og:locale' content='ko_KR' />
        <meta property='og:type' content={type} />

        {type === 'article' && (
          <>
            <meta property='article:tag' content={tags} />
            <meta property='article:section' content={section} />
            <meta property='article:author' content={author} />
            <meta property='article:published_time' content={created} />
            <meta property='article:modified_time' content={updated} />
          </>
        )}

        <meta name='canonical' content={currentUrl} />
      </Helmet>
    </>
  );
}
