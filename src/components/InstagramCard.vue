<template>

      <div class="card">
        <div class="card-header text-left">
          <img src="https://instagram.fzag1-1.fna.fbcdn.net/vp/f07607ad39331b09ba298df801cd0922/5E862117/t51.2885-19/s150x150/17125924_291966037887826_9014001971836747776_a.jpg?_nc_ht=instagram.fzag1-1.fna.fbcdn.net" width="30" class="avatar">
          Featured
        </div>
        <div class="card-body p-0">
          <img class="card-img-top" src="/gold-tooth.jpg" alt="Covjek sa zlatnim zubima" height="700">
        </div>
        <div class="card-footer text-muted text-left">
          <img src="https://making-the-web.com/sites/default/files/clipart/175762/instagram-heart-png-transparent-images-175762-474393.png" width="30">
          <img src="https://toppng.com/public/uploads/thumbnail//instagram-comment-bubble-icon-11549922757l6du8u9ng4.png" width="30">
        <br>
          2 days ago
          
        </div>
      </div>

</template>

<script>
export default {
  name: 'InstagramCard',
  props: {
    msg: String
  }
}

</script>

<style lang="scss">

  .avatar {
    border-radius: 50%;
  }
</style>