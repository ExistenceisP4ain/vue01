<template>
  <div class="row">
    <div class="col-8">

      <InstagramCard v-for="card in filteredCards" :info="card" />
      

    </div>
    <div class="col-4">
      Mi smo sidebar
    </div>
  </div>
</template>

<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from '@/store.js'
export default {
 name: 'home',
 data() {
 return {
 cards: [
 { title: 'jedan', time: 'an hour ago', url:
'https://picsum.photos/id/1/400/400', user: 'Elon Musk' },
 { title: 'dva', time: '2 days ago', url:
'https://picsum.photos/id/2/400/400', user: 'Admin' },
 ]
 }
 },
 computed: {
 filteredCards() {
 return this.cards.filter(card => card.title.includes(store.searchTerm) || card.user.includes(store.searchTerm))
 }
 },
 components: {
 InstagramCard
 }
}




</script>

<style lang="scss">

.card-body {
  padding: 0px;
}

</style>