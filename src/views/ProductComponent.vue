<template>
  {{ product.price }}
  test
</template>

<script>

import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductComponent',
  setup () {
    const route = useRoute()
    // с помощью route.params.id получаем айдишник продукта из url
    console.log('route', route.params.id)

    // TODO нужно реализовать получение продукта из бэка на основе параметры, который мы берем из url адреса, затем сохранение его в ref product

    const product = ref({
      id: 1,
      price: 312,
      name: 'product-name-1',
      description: 'товар для собак',
      isOnSale: true
    })

    console.log('product', product)

    return { product }
  }
}

</script>
