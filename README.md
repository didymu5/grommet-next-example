# Grommet NextJS example

This project implements [Grommet](https://v2.grommet.io/) for NextJS.

Project is scaffoled with `create-next-app`

To get this running you can clone then install the dependencies. 

Running and building the project: 
```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
```

## Motivation

I started this project to figure out why I was getting a Flash-of-unstyled content in my NextJS app. After asking questions through various channels, I cam across the nextjs's support for [built-in-css](https://nextjs.org/docs#built-in-css-support). This project impelments the solution based on that documentation.