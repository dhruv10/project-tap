import { useRouter } from 'next/router';

// Components
import Articles from '../components/articles';
import Article1 from '../components/article1';

// Data
import { exploreArticlesContent } from '../assets/articles/exploreArticlesContent';

export default function Arts() {
    const router = useRouter();
    return <div>
        <section className='my-16 flex flex-wrap text-align-center '>
            {exploreArticlesContent.filter(article => article.category === 'Arts & Entertainment').map((article, index) => {
                if (index === 0)
                    return <section className='px-32 py-12 text-center'><Article1 topic={article.topic} description={article.description} author={article.author} issueDate={article.issueDate} timeToRead={article.timeToRead} img={article.img} /></section>;
                return <Articles topic={article.topic} description={article.description} author={article.author} issueDate={article.issueDate} timeToRead={article.timeToRead} img={article.img} />;
            })}
        </section>
    </div>
}
