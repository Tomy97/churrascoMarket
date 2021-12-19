<template>
  <div class="card-center">
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
    >
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
              <FormEmail v-model="email" />
            </v-col>
            <v-col
              cols="12"
              md="12"
            >
              <FormPassword v-model="password" />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
         <v-row>
           <v-col col="12" class="d-flex justify-end" >
             <v-btn
                 :disabled="!valid"
                 color="error"
                 depressed
                 elevation="13"
                 block
                 @click="onSubmit"
             >
               Log in
             </v-btn>
           </v-col>
         </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import FormEmail from '@/components/Form/FormEmail.vue';
import FormPassword from '@/components/Form/FormPassword.vue';
export default {
  components: {
    FormEmail,
    FormPassword
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
}),
  methods: {
    onSubmit() {
      this.$refs.form.validate()
    },
  },

}
</script>
<style scoped>
.card-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>