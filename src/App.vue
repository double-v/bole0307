<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="0307 bolé nastyvibes cover" class="logo" src="./assets/front.jpg" width="400" height="400"/>

    <div class="wrapper">
      <HelloWorld/>
    </div>
  </header>

  <main>
    <TheWelcome/>

    <div class="share">
      <ShareNetwork network="facebook" url="https://bole0307.vercel.app/"
                    title="Bolë - 0307"
                    description="Le vétéran du rap neversois revient avec son nouvel album 0307. En écoute sur toute les plateformes de straming">
        Partager sur Facebook
      </ShareNetwork>
      <ShareNetwork network="twitter" url="https://bole0307.vercel.app/"
                    title="Bolë - 0307"
                    description="Le vétéran du rap neversois revient avec son nouvel album 0307. En écoute sur toute les plateformes de straming">
        Partager sur Twitter
      </ShareNetwork>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';
.share{
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: center;
  align-items: center;
}
#app {
  max-width   : 1280px;
  margin      : 0 auto;
  padding     : 2rem;

  font-weight : normal;
}

header {
  line-height : 1.5;
}

.logo {
  display : block;
  margin  : 0 auto 2rem;
}

a,
.green {
  text-decoration : none;
  color           : hsla(160, 100%, 37%, 1);
  transition      : 0.4s;
}

@media (hover : hover) {
  a:hover {
    background-color : hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width : 1024px) {
  body {
    display     : flex;
    place-items : center;
  }

  #app {
    display         : flex;
    /* grid-template-columns: 1fr 1fr; */
    padding         : 0 2rem;
    align-content   : center;
    align-items     : center;
    flex-direction  : row;
    justify-content : center;
    padding         : 0 2rem;
  }

  header {
    display       : flex;
    place-items   : center;
    padding-right : calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display     : flex;
    place-items : flex-start;
    flex-wrap   : wrap;
  }

  .logo {
    margin : 0 2rem 0 0;
  }
}
</style>
