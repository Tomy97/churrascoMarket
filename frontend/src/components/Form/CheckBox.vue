<template>
  <v-checkbox
      v-model="checkbox"
      :label="label"
  ></v-checkbox>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Remember Me'
      }
    },
    data () {
      return {
        checkbox: false
      }
    }
  }
</script>
