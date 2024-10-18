'use client';

// app/page.tsx
import Layout from './components/Layout';
import Trending from './components/Trending';
import styles from './components/Trending.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const trendingPosts = [
    { id: 1, title: 'Post 1', excerpt: 'This is a short description of post 1.', image: '/images/post1.jpg' },
    { id: 2, title: 'Post 2', excerpt: 'This is a short description of post 2.', image: '/images/post2.jpg' },
    { id: 3, title: 'Post 3', excerpt: 'This is a short description of post 3.', image: '/images/post3.jpg' }
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push('/blog-detail');
  }

  return (
    <Layout>
      <div className='flex content-between items-center flex-wrap'>
        <div className='flex-auto md:w-[60%] bg-[url("/images/post5.jpg")] bg-scroll bg-center bg-no-repeat bg-cover min-h-[500px] flex items-center justify-center p-3'>
          
          <div className='flex-none'>
            <h1 className='font-bold'>WORLD NEWS</h1>
            <hr />
            <h2 className='font-bold'>Amazing Places in America to visit.</h2>
            <p className='truncate  max-w-[320px] sm:max-w-[500px]'>Lorem - ipsum dolor sit amet consectetur adipisicing elit. Sunt - dolorem aspernatur quia odio fugiat! Repellendus vero quas tempora! Neque amet itaque et doloremque illum impedit exercitationem at quisquam? Itaque, alias?</p>

            <button 
            className='mt-2 bg-rose-500 px-6 py-2.5 text-center text-white rounded hover:opacity-70'
            onClick={handleClick}
            >Learn More</button>
          </div>
        </div>
        <div className='flex-1 md:w-[40%] md:pl-[7%] p-2'>
          <h3 className='font-bold py-4'>MORE NEWS</h3>
          <hr />
          <div className='p-3'>
            <h4 className='font-bold text-red-400'>TRAVEL</h4>
            <h5 className='font-bold'>Article Title</h5>
            <p className='truncate  max-w-[320px] sm:max-w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem aspernatur quia odio fugiat! Repellendus vero quas tempora! Neque amet itaque et doloremque illum impedit exercitationem at quisquam? Itaque, alias?</p>
            <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>2m ago</span>
                  </div>
          </div>

          <div className='mt-7 p-3'>
            <h4 className='font-bold text-red-400'>TECHNOLOGY</h4>
            <h5 className='font-bold'>Article Title</h5>
            <p className='truncate  max-w-[320px] sm:max-w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem aspernatur quia odio fugiat! Repellendus vero quas tempora! Neque amet itaque et doloremque illum impedit exercitationem at quisquam? Itaque, alias?</p>
            <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>2m ago</span>
                  </div>
          </div>
        </div>
      </div>

      <div className='bg-slate-100'>
        <div className='container mx-auto p-3'>
          <h2 className='font-bold'>TRENDING</h2>
          <Trending />
        </div>

        <div className='container mx-auto p-3 mb-[4%]'>
          <h2 className='font-bold'>HAPPENING NOW</h2>
          
          <div className='flex justify-center items-center flex-wrap'>
            <div className='flex-auto md:w-[55%]'>
              <div className='rounded bg-[url("/images/post1.jpg")] bg-scroll bg-center bg-no-repeat bg-cover min-h-[550px] flex items-end p-3 text-white mb-5 mx-2 hover:opacity-70 cursor-pointer'>
                <div className='flex-1'>
                  <h5 className='text-xl font-bold text-red-600'>Article Title</h5>
                  <p className='truncate  max-w-[320px] sm:max-w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem aspernatur quia odio fugiat! Repellendus vero quas tempora! Neque amet itaque et doloremque illum impedit exercitationem at quisquam? Itaque, alias?</p>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>2m ago</span>
                  </div>
                </div>
              </div>

              <div className='rounded bg-[url("/images/post4.jpg")] bg-scroll bg-center bg-no-repeat bg-cover min-h-[400px] flex items-end p-3 text-[#121212] mx-2 hover:opacity-70 cursor-pointer'>
                <div className='flex-1'>
                  <h5 className='text-xl font-bold'>Article Title</h5>
                  <p className='truncate  max-w-[320px] sm:max-w-[500px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorem aspernatur quia odio fugiat! Repellendus vero quas tempora! Neque amet itaque et doloremque illum impedit exercitationem at quisquam? Itaque, alias?</p>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>2m ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-1 md:w-[45%]'>
              <div className='flex items-center justify-end'>
                <div className='flex-1' style={{width:"100%"}}>
                {trendingPosts.map(post => (
                  <div key={post.id} className={`${styles.card} mx-2 hover:opacity-70 cursor-pointer`} style={{width:'95%', height:'305px', margin: post.id===2 ? '30px 8px':''}}>
                    <Image src={post.image} alt={post.title} className={`${styles.cardImage} rounded-t-md`} width={100} height={400} />
                    <div className={styles.cardContent}>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                ))
              }
                </div>
              </div>
              
            </div>
          </div>
        </div>  

      </div>
      
    </Layout>
  );
}
