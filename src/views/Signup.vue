<template>
<div>
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-5">Sign up for our instagram clone</h1>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="emailField">Email address</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="passwordField">Password</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="confirmPasswordField">Confirm Password</label>
          <input v-model="passwordAgain" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Submit</button>
      </form>
    </div>
    <div class="col"></div>
  </div>
</div>
</template>
<script>
export default {
  name:"signup",
  data(){
    return{
      email:'',
      password:'',
      passwordAgain:''
    }
  },
  methods:{
    signup(){
      if(this.password!==this.passwordAgain||this.passwordAgain!==this.password){
        alert("Lozinke se ne podudaraju!");
        console.log(error)
      }
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
    });
    }
  }
}
</script>