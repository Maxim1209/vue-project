<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/product">Product</router-link>

    <div>
      <router-link to="/product">Product</router-link>
      {{ count }}
    </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  setup () {
    // если не получиться решить проблему, когда у нас в сессии ничего нет
    // if (localStorage.getItem('cart') === null) {
    //   localStorage.setItem('cart', JSON.stringify([{
    //     productId: 1,
    //     quantity: 1
    //   }]))
    // }

    const count = 0
    // получить из сессии данные корзины
    // распарсить из строки в массив
    // получить длину массива

    return { count }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
