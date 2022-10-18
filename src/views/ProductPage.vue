<template>
  <div class="d-flex">
    <!--    <div v-for="(product, index) in productList" :key="index">-->
    <template v-for="(product, index) in productList" :key="index">
      <div>
        <div class="goods-image"></div>
        <router-link class="goods-title" :to="{ name: 'product' , params: {id: product.id}}">
          Name: {{ product.name }}
        </router-link>
        <div class="goods-price">
          Price: {{ product.price }} ₴
        </div>

        <button @click=addProductToCart(product.id)
                class="goods-buy"
                :disabled="!product.isOnSale">
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

    const addProductToCart = (productId) => {
      const session = sessionStorage.getItem('cart')

      // проверяем, если в сесси по текущему ключу ничего нету, то мы должны создать коризну
      if (session === null) {
        // инициализация корзины
        const cart = []

        // добавление первого товара в коризну
        cart.push({
          productId: productId,
          quantity: 1
        })

        // преобразовываем массив в строку и записываем в сессию
        sessionStorage.setItem('cart', JSON.stringify(cart))
        return
      }

      // если мы сюда зашли, то это гооврит от том, что у нас есть сессия по ключу cart и с помощью метода json.parse мы преобразовываем из строки в массив нашу корзину
      const cart = JSON.parse(session)

      // есть ли в корзине товар по текущему айдишнику
      const isExistProductInCart = cart.find(item => item.productId === productId)

      // если есть, то мы выходим из функции
      if (isExistProductInCart) {
        console.log('продукт уже добавлен')
        return
      }

      // если мы дошли сюда, то это гооврит о том, что в корзине нет продукта по айдишнику, который мы ходим добавить. Затем добавляем продукт в корзину
      cart.push({
        productId: productId,
        quantity: 1
      })

      // перезаписываем обновленную корзину в сессию, преобразовывая массив в строку
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }

    return {
      productList,
      addProductToCart
    }
  }
}
</script>

<style scoped>
.goods-image {
  width: 300px;
  height: 300px;
  background-color: gray;
  margin-bottom: 15px;
}

.d-flex {
  display: flex;
  justify-content: space-around;
  font-family: sans-serif;
  font-size: 16px;
}

.goods-title {
  text-decoration: none;
  text-align: center;
  color: aliceblue;
}

.goods-price {
  color: coral;
  margin: 10px 0px 10px 0px;
  text-align: center;
  font-size: 20px;
}

.goods-buy {
  background: coral;
  color: beige;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  border: black;
  transition-duration: 0.4s;
}

.goods-buy:hover {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: darkgreen;
  transition-duration: 0.4s;
  border: black;
  font-size: 20px;
}

.goods-buy:disabled:hover {
  cursor: not-allowed;
  background: dimgrey;
  color: beige;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  border: black;
  transition-duration: 0.4s;
}

</style>
