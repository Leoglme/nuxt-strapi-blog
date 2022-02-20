<template>
  <div>
    <div v-if="images"
         v-for="(image, index) in images"
         :key="index"
         id="banner"
         class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
         :data-src="api_url + image.attributes.url" uk-img>
      <h1>{{ title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div v-if="content" id="editor" v-html="$md.render(content)"></div>
        <p v-if="published_at">{{ moment(published_at).format("Do MMMM YYYY") }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article'

const moment = require('moment');
moment.locale('fr')

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    articleData(){
      return this.article?.data?.attributes
    },
    images(){
      return this.articleData?.image?.data;
    },
    title(){
      return this.articleData?.title;
    },
    published_at(){
      return this.articleData?.publishedAt;
    },
    content(){
      return this.articleData?.content;
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
