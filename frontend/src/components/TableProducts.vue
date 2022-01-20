<template>
  <v-container>
    <v-simple-table class="tableWidth">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              Name
            </th>
            <th class="text-center">
              Precios
            </th>
            <th class="text-center">
              Divisa
            </th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in datos" :key="i.id">
            <td class="text-center">{{ i.name }}</td>
            <td class="text-center">{{ i.precios }}</td>
            <td class="text-center">{{ i.divisa }}</td>
            <td class="text-center">
              <v-btn color="secondary" @click="onClick(i.id)">
                Ver Producto
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    datos: [
      {
        id: 1,
        name: 'Jamon',
        precios: 123,
        divisa: 'Dolar',
      },
      {
        id: 2,
        name: 'Queso',
        precios: 12,
        divisa: 'Pesos',
      },
      {
        id: 3,
        name: 'Aceituna',
        precios: 54,
        divisa: 'Dolar',
      },
      {
        id: 4,
        name: 'Valde',
        precios: 64,
        divisa: 'Pesos',
      },
    ],
  }),
  methods: {
    onClick(id) {
      console.log(id)
    },
  },
}
</script>
<style>
.tableWidth {
  width: 150rem;
  height: 20rem;
  border: thin solid rgba(0, 0, 0, 0.12);
}
</style>
