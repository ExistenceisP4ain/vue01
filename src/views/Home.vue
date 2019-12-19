<template>
  <div class="row">
    <div class="col-8">

      <div v-if="authenticated">


<div class="row">
  <div class="col-sm"> 
        <!-- oof -->
      <p>Upload an image to Firebase:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    
      
        <img class="preview" :src="picture">
        <br>
      <button @click="onUpload" class="btn btn-primary ml-2">Upload</button>
<br><br></div>
<div class="col-sm">
        <!-- nova forma za post -->
 <form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <input v-model="newImageUrl" type="text" class="form-control ml-2"
id="imageUrl" placeholder="Enter the image URL">
 </div><br><br><br>
 <button type="submit" class="btn btn-primary ml-2">Post image</button>
 </form>
</div>
</div>

<!-- vue uploader 
<uploader :options="options" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>Drop files here to upload or</p>
      <uploader-btn>select files</uploader-btn>
      <uploader-btn :attrs="attrs">select images</uploader-btn>
      <uploader-btn :directory="true">select folder</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
-->

  


 <!-- listanje postova -->
 <InstagramCard :key="card.id" :info="card" v-for="card in filteredCards"
/>
      </div>

    </div>
    <div class="col-4">
      Trazimo sljedece: {{ searchTerm }}
    </div>
  </div>
</template>

<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from '@/store.js'
import firebase from 'firebase';

export default {
  name: 'upload',
  data () {
    return store;
    return{
      imageData: null,
      picture: null,
      uploadValue: 0
	}
  },
  computed: {
    filteredCards () {
      // let filtered = []
      // for(let card of this.cards) {
      //   if (card.title.includes(this.searchTerm)) {
      //     filtered.push(card)
      //   }
      // }
      // return filtered;
      return this.cards.filter(card => card.title.includes(this.searchTerm));
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }
      );
    },
      postNewImage(){
        //console.log("dodajemo novu sliku: ", this.newImageUrl);
        db.collection("posts").add({
          url: this.newImageUrl,
          email: this.userEmail,
          posted_at: Date.now()
        })
      }
  },
  name: 'home',
  components: {
    InstagramCard
  }
}
</script>

<style lang="scss">

.card-body {
  padding: 0px;
}

img:hover {
  cursor: pointer;
}
.uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }

  img.preview {
    width: 200px;
}
</style>