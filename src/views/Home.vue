<template>
  <div class="row">
    <div class="col-8">
      <div v-if="searchTerm !== ''">
        Searching for {{ searchTerm }}. {{ filteredCards.length }} of {{ cards.length }}
      </div>
      <div v-if="authenticated">
      <InstagramCard v-bind:key="card.title" v-bind:info="card" v-for="card in filteredCards" />
      </div>
    </div>
    <div class="col-4">
      Ovo je sidebar
    </div>
  </div>
</template>
<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from "@/store.js"
export default {
  data () {
    return store;
  },
  computed: {
    filteredCards () {
      return this.cards.filter(card => card.title.includes(this.searchTerm))
    }
  },
  name: 'home',
  components: {
    InstagramCard
  }
}
</script>
<style lang="scss">

.card {
  margin-bottom: 20px;

  .card-body {
    padding: 0px;
  }
}
</style>