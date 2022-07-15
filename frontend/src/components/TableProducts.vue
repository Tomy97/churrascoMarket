<template>
  <v-container>
    <template v-if="alert">
      <AlertComponent
        text="El producto se elimino correctamente"
        color="green"
        type="success"
      />
    </template>
    <v-row>
      <v-col cols="12" md="12">
        <v-simple-table class="tableWidth">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Precios</th>
                <th class="text-center">Divisa</th>
                <th class="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in datos" :key="i.id">
                <td class="text-center">{{ i.name }}</td>
                <td class="text-center">{{ i.precios }}</td>
                <td class="text-center">{{ i.divisa }}</td>
                <td class="text-center">
                  <ModalComponent
                    title="Ver productos"
                    :name="i.name"
                    :divisa="i.divisa"
                    :price="i.precios"
                  />
                </td>
                <td>
                  <template v-if="loading">
                    <SpinnerComponent />
                  </template>
                  <template v-else>
                    <v-btn color="error" @click="handleDeleteProduct(i.id)">
                      Eliminar Producto
                    </v-btn>
                  </template>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ModalComponent from "./ModalComponent.vue";
import AlertComponent from "../components/AlertComponent.vue";
import SpinnerComponent from "./SpinnerComponent.vue";
export default {
  data: () => ({
    datos: [
      {
        id: 1,
        name: "Jamon",
        precios: 123,
        divisa: "Dolar",
      },
      {
        id: 2,
        name: "Queso",
        precios: 12,
        divisa: "Pesos",
      },
      {
        id: 3,
        name: "Aceituna",
        precios: 54,
        divisa: "Dolar",
      },
      {
        id: 4,
        name: "Valde",
        precios: 64,
        divisa: "Pesos",
      },
    ],
    alert: false,
    loading: false,
  }),
  methods: {
    handleClick(i) {
      console.log(i);
    },
    async handleDeleteProduct(id) {
      this.alert = true;
      this.loading = true;
      this.datos = await this.datos.filter((item) => item.id !== id);
      setTimeout(() => {
        this.alert = false;
        this.loading = false;
      }, 2000);
    },
  },
  components: { ModalComponent, AlertComponent, SpinnerComponent },
};
</script>
<style>
.tableWidth {
  width: 150rem;
  height: 20rem;
  border: thin solid rgba(0, 0, 0, 0.12);
}
</style>
