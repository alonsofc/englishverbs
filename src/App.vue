<template>
  <div class="container text-center">
    <Header></Header>
    <router-view class="mt-5" />
    <Footer class="mt-5"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>