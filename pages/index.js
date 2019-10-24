import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Grid, Box } from 'grommet'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />
    <Grid rows={['small']} align='center' alignCenter='between' gap='small'>
      <Box align='center'>
        <h1 className='title'>Welcome to Next.js!</h1>
        <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </Box>
    </Grid>
    <Grid
      rows={['small']}
      columns={['auto', 'auto', 'auto']}
      justifyContent='space'
      gap='medium'
      fill='horizontal'
    >
      <Box border='all' pad='small' margin='small'>
        <a href='https://nextjs.org/docs' className='card'>
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
      </Box>
      <Box border='all' pad='small' margin='small'>
        <a href='https://nextjs.org/learn' className='card'>
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
      </Box>
      <Box border='all' pad='small' margin='small'>
        <a
          href='https://github.com/zeit/next.js/tree/master/examples'
          className='card'
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </Box>
    </Grid>
  </div>
)

export default Home
