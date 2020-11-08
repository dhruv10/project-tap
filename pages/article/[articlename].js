import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// Components
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function BlogPost({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <section className='bg-dark-primary'>
      <div className='px-32'>
        <Head>
          <title>{frontmatter.title}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header />

        {frontmatter && frontmatter.hero ? null : (
          <section className='py-6'>
            <div className='flex content-center justify-center bg-blue-600'>
              <div className='py-8 text-white text-4xl font-bold'>
                {frontmatter.title}
              </div>
            </div>
          </section>
        )}

        <section className='py-4'>
          {frontmatter && frontmatter.heading ? (
            <div className='text-white text-3xl font-bold'>
              {frontmatter.heading}
            </div>
          ) : null}
          {frontmatter && frontmatter.subheading ? (
            <div className='text-gray-300 text-2xl font-semibold'>
              {frontmatter.subheading}
            </div>
          ) : null}
        </section>

        <section className='py-12'>
          <div className='flex h-20 justify-between'>
            <div className=''>
              <div className='flex flex-col'>
                <div className='flex flex-row'>
                  <div className='rounded border-2 bg-yellow-500 border-yellow-500'>
                    <div className='text-black font-bold text-center'>#tap</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='grid content-end grid-rows-2 grid-flow-col'>
                <p className='row-span-1 col-span-10 text-2xl text-white font-semibold'>
                  {frontmatter.author || 'TAP thoughts'}
                </p>
                <p className='row-span-1 col-span-10 text-xl text-gray-300 pr-4 font-semibold'>
                  {frontmatter.date || '01 September 2020'} .{' '}
                  {frontmatter.readtime || 5} min read
                </p>
                {frontmatter && frontmatter.authorImage ? (
                  <img
                    src={frontmatter.authorImage}
                    className='h-auto w-20 row-span-2 w-10 rounded-full'
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className='pt-8 text-gray-300 text-xl'>
          <ReactMarkdown source={markdownBody} />
        </section>
      </div>

      <Footer />
    </section>
  );
}

export async function getStaticProps({ ...ctx }) {
  console.clear();
  const { articlename } = ctx.params;
  console.log(articlename);

  const content = await import(`../../articles/${articlename}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../articles', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/article/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
