<template>
  <div>
    <TemplateGames/>
  </div>
</template>

<script>
import TemplateGames from '@/components/TemplateGames.vue'


export default {

  mounted() {
    if (!this.$store.getters.user.loggedIn) {
      this.$router.replace({ name: 'Home' });
    }
  },
   components: {
     TemplateGames
  },
};
</script>