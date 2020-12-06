<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Template2Rows/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Template2Rows from '@/components/Template2Rows.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Template2Rows
  }
}
</script>
