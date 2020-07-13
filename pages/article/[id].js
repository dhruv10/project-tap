import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  getAllArticleTitles,
  getArticleData,
} from '../../assets/articles/articles';

// Components
import Footer from '../../components/footer';

// Data
// import { homePageArticles } from '../assets/articles/homePageArticles';

// Images
// const MainLogoURL = '/images/tap_logo.svg';

export async function getStaticPaths() {
  const paths = getAllArticleTitles();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}

const Post = ({ articleData }) => (
  <div className='bg-dark-primary'>
    <Head>
      <title>Post</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {articleData.title}
    <Footer />
  </div>
);

export default Post;
