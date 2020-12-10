<template>
  <div>
<!-- Page conent -->
    <TemplateGames/>
  </div>
</template>

<script>
// <!--Import component -->
import TemplateGames from '@/components/TemplateGames.vue'

export default {

// <!-- Function responsible for giving access to the users -->
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
