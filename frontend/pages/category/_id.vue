<template>
 <client-only>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>{{ name }}</h1>

          <Articles :articles="articles"></Articles>

        </div>
      </div>
    </client-only>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles-categories'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      category: []
    }
  },
  computed: {
    categoryValue(){
      return this.category?.data?.attributes;
    },
    articles(){
      return this.categoryValue?.articles.data || [];
    },
    name(){
      return this.categoryValue?.name;
    }
  },
  components: {
    Articles
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
