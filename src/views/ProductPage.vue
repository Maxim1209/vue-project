<template>
  <div class="d-flex">
    <!--    <div v-for="(product, index) in productList" :key="index">-->
    <template v-for="(product, index) in productList" :key="index">
      <div>
        <div class="image"></div>
        <router-link :to="{ name: 'product' , params: {id: product.id}}">
          Name:{{ product.name }}
        </router-link>
        <div>
          Price:{{ product.price }}
        </div>
        <button :disabled="!product.isOnSale">
          Купить
        </button>
      </div>
    </template>
    <!--    </div>-->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ProductPage',
  setup () {
    const productList = ref([
      {
        id: 1,
        price: 312,
        name: 'product-name-1',
        description: 'товар для собак',
        isOnSale: true
      },
      {
        id: 2,
        price: 228.48,
        name: 'product-name-2',
        description: 'товар для котов',
        isOnSale: false
      },
      {
        id: 3,
        price: 111,
        name: 'product-name-3',
        description: 'товар для брундуков',
        isOnSale: true
      }
    ])

    return {
      productList
    }
  }
}
</script>

<style scoped>
.image {
  width: 300px;
  height: 300px;
  background-color: gray;
}

.d-flex {
  display: flex;
  justify-content: space-around;
}
</style>
