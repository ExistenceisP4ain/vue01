<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-7">

      <InstagramCard />
      <InstagramCard />
      <InstagramCard />

    </div>
    <div class="col-3">
<div class="card">
  <div class="card-header">
    Stories
  </div>
      <stories />
 <stories />
 <!-- stories -->
</div>
<div class="card">
  <h6>Suggestions</h6>
  <div class="card-body">
    <suggestions />
    <!-- suggs -->
  </div>
</div>

      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'
import stories from '@/components/stories.vue'
import suggestions from '@/components/suggestions.vue'

export default {
  name: 'home',
  components: {
    InstagramCard,
    stories,
    suggestions
  }
}

</script>

<style lang="scss">

  .card {
    margin-bottom: 20px;
  }

  .card-body{
    padding: 7px;
  }
</style>