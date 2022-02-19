# Strapi Nuxt Js Blog

A simple blog made with nuxt strapi

[![@nuxtjs/strapi](https://strapi.nuxtjs.org/preview.png)](https://strapi.nuxtjs.org)

This starter uses the [Strapi blog template](https://github.com/strapi/strapi-template-blog)

Check out all of our starters [here](https://strapi.io/starters)


## Features
- Content types: Articles, Categories
- Created articles
- Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

Pages:

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category


## Install

```sh
$ git clone https://github.com/Leoglme/nuxt-strapi-blog
$ cd nuxt-strapi-blog
$ cd backend && yarn install && yarn dev
$ cd frontend && yarn install && yarn dev
```

The Nuxt frontend server will run here => [http://localhost:3000](http://localhost:3000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Nuxt](https://nuxtjs.org/docs/2.x/deployment/deploying-to-21yunbox)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required:
- `BACKEND_URL`: URL of your Strapi backend, without trailing slash
