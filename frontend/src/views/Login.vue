<template>
  <div class="card-center">
    <v-card class="mx-auto my-12" max-width="500">
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="12" md="12">
              <FormEmail v-model="email" />
            </v-col>
            <v-col cols="12" md="12">
              <FormPassword v-model="password" />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col col="7" md="6" class="d-flex justify-start">
            <CheckBox v-model="check" />
          </v-col>
          <v-col col="5" md="6" class="d-flex justify-end align-center">
            <v-btn color="primary" block @click="onSubmit">
              Log in
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import FormEmail from '@/components/Form/FormEmail.vue'
import FormPassword from '@/components/Form/FormPassword.vue'
import CheckBox from '@/components/Form/CheckBox.vue'
import router from '../router/index'
export default {
  components: {
    FormEmail,
    FormPassword,
    CheckBox,
  },
  data: () => ({
    email: '',
    password: '',
    check: false,
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) router.push({ name: 'Home' })
    },
  },
}
</script>
<style scoped>
.card-center {
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
