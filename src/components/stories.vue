<template>


      <div class="row">
    <div class="col-4">
      <div class="card-body">
    <img src="https://instagram.fzag1-1.fna.fbcdn.net/vp/f07607ad39331b09ba298df801cd0922/5E862117/t51.2885-19/s150x150/17125924_291966037887826_9014001971836747776_a.jpg?_nc_ht=instagram.fzag1-1.fna.fbcdn.net" width="60" class="avatar">
  </div>
  </div>
  <div class="col text-muted text-left">
<b>dbulic</b><br>Five minutes ago
    </div>
</div><!-- row -->
</template>

<script>
export default {
  name: 'stories',
  props: {
    msg: String
  }
}

</script>

<style lang="scss">

  .avatar {
    border-radius: 50%;
  }

  .col{
    padding: 10px;
  }
</style>