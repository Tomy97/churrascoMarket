<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="dark lighten-2" dark v-bind="attrs" v-on="on">
          {{ title }}
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-capitalize">
          Informacion del producto Solicitado
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="4" sm="4">
                <span>Name: {{ name }}</span>
              </v-col>
              <v-col cols="12" md="4" sm="4">
                <span>Precio: {{ price }}</span>
              </v-col>
              <v-col cols="12" md="4" sm="4">
                <span>Divisa: {{ divisa }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    title: String,
    name: String,
    price: Number,
    divisa: String,
  },
  data: () => ({
    dialog: false,
  }),
}
</script>
