<template>
<div>
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-5">This is a password page</h1>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
      <div class="col">
      </div>
      <div class="col">
        <form @submit.prevent="promjena">
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mt-5">Submit</button>
        </form>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        password:''
    }
},
methods:{
    promjena(){
        var user = firebase.auth().currentUser;
user.updatePassword(this.password).then(function() {
}).catch(function(error) {
  // An error happened.
});
console.log("Lozinka promjenjena!")
firebase.auth().signOut()
this.$router.replace({name: "home"  });
    }
}}
</script>