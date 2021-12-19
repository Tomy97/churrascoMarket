<template>
  <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      required
      :label="label"
      @click:append="show1 = !show1"
  ></v-text-field>
</template>
<script>
export default {
  data: () => ({
    show1: false,
    label: 'Password',
    password: '',
    rules: {
      required: value => !!value || 'Este campo es requerido',
      min: v => v.length >= 8 || 'Este campo tiene que tener un minimo de 8 caracteres',
    }
  })
}
</script>
