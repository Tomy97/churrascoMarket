<template>
  <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
  ></v-text-field>
</template>
<script>
export default {

data: () => ({
  email: '',
  emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid',
  ],
}),
}
</script>
