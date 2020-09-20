import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import { getAllArticleIds, getArticleData } from '../../lib/articles';

// Components
import Footer from '../../components/footer';
import { Layout } from 'react-feather';

// Data
// import { homePageArticles } from '../assets/articles/homePageArticles';

// Images
// const MainLogoURL = '/images/tap_logo.svg';

const Article = ({ articleData }) => (
  <Layout>
    <div className='bg-dark-primary'>
      <Head>
        <title>Hello</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      <Footer />
    </div>
  </Layout>
);

export async function getStaticPaths() {
  // const paths = getAllArticleIds();
  // console.log(paths);

  const paths = [
    {
      params: {
        id: 'ssr',
      },
    },
    {
      params: {
        id: 'csr',
      },
    },
  ];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}

export default Article;
