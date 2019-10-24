import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Grid, Box, Heading, Paragraph } from 'grommet'
const About = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Grid
      rows={['auto', 'xsmall']}
      columns={['auto', 'auto']}
      gap='small'
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] }
      ]}
      fill='horizontal'
    >
      <Box gridArea='header' background='light-1'>
        <Nav />
      </Box>
      <Box gridArea='nav' background='light-5' />
      <Box gridArea='main'>
        <Heading margin='none'>About</Heading>
        <Paragraph>
          This is a demo of Gromment working with next. The main reference for
          this impelmentation include:
          https://github.com/zeit/next.js/tree/master/examples/with-styled-components
        </Paragraph>
      </Box>
    </Grid>
  </div>
)

export default About
