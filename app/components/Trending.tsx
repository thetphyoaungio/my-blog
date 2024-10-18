// components/Trending.tsx
import React from 'react';
import styles from './Trending.module.css';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

const trendingPosts: Post[] = [
  { id: 1, title: 'Post 1', excerpt: 'This is a short description of post 1.', image: '/images/post1.jpg' },
  { id: 2, title: 'Post 2', excerpt: 'This is a short description of post 2.', image: '/images/post2.jpg' },
  { id: 3, title: 'Post 3', excerpt: 'This is a short description of post 3.', image: '/images/post3.jpg' },
  //{ id: 4, title: 'Post 4', excerpt: 'This is a short description of post 4.', image: '/images/post4.jpg' },
];

const Trending: React.FC = () => {

  return (
    <>
    <div className='flex justify-center items-center flex-wrap'>
    
      {trendingPosts.map(post => (
            <div key={post.id} className={`${styles.card} md:flex-1 m-2 hover:opacity-70 cursor-pointer`}>
              <Image src={post.image} alt={post.title} className={`${styles.cardImage} rounded-t-md`} width={200} height={200} />
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default Trending;