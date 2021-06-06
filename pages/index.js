import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-wrap p-12'>
        <h1 className='w-full text-6xl text-center text-blue-400'>NextJS-TailwindCSS</h1>
        <h3 className='w-full text-4xl text-center text-blue-800'>Starter Kit</h3>
      </div>
    </Layout>
  )
}
