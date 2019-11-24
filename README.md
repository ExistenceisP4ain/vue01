## VUE-02

# kloniramo repo lokalno
git clone https://github.com/dbulic/instaclone.git
cd instaclone

# sad smo na branchu master i zelimo na branch wk1

git checkout wk1

# iz wk1 cemo kreirati branch wk2 i prijeci na njega

git branch wk2
git checkout wk2

yarn    // npm install
yarn serve  // npm run serve

// browser developer console: F12
// kad smo u dev console, Ctrl+Shift+C nam je spy za elemente stranice

# radimo header slican instagramovom
body {
  background-color: rgba(var(--b3f,250,250,250),1);
}

#nav {
  padding: 30px;
  background-color: white;
  border-bottom: #ccc 1px solid;
}

# grid layout 12 columns, col-9 i col-3
# iskopiramo card sa Bootstrap sitea i text align lijevo

<template>
  <div class="row">
    <div class="col-9">
      <div class="card">
        <div class="card-header text-left">
          Featured
        </div>
        <div class="card-body">
            
        </div>
        <div class="card-footer text-muted text-left">
          2 days ago
        </div>
      </div>
    </div>
    <div class="col-3">
      Ovdje ide sidebar
    </div>
  </div>
</template>

# ubacimo sliku
- https://unsplash.com/

# promijenimo malo css da maknemo padding za sliku

        <div class="card-body p-0">
          <img class="card-img-top" src="/gold-tooth.jpg" alt="Covjek sa zlatnim zubima">
        </div>

# izvuci cemo card u posebnu komponentu

