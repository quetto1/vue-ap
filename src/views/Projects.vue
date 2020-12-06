<template>
  <div>
<!-- WEBSITE CONENT -->
    <TemplateGames/>
  </div>
</template>

<script>
// <!--Import from diffrent file component -->
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

