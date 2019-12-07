<template>
 <div class="card text-center">
 <div class="card-header text-left">
 {{ info.title }}
 </div>
 <div class="card-body">
 <img class="card-img-top" :src="info.url" alt="neka slika...">
 </div>
 
 <div class="card-footer text-left">
   <div class="row">
   <div class="col-sm">
 {{ info.time }}
</div>
<div class="col-mr-right">
  <b>{{ info.user }}</b>
  </div>
 </div></div>
 
 </div>
</template>

<script>
export default {
 props: ["info"]
}
</script>