<template>
  <v-alert :color="color" shaped elevation="5" :type="type">
    {{ text }}
  </v-alert>
</template>
<script>
export default {
  props: {
    text: String,
    color: String,
    type: String,
  },
  data() {
    return {};
  },
};
</script>
