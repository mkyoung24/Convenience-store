<template>
    <div>
        <my-header></my-header>
    <main>
    <div class="row">
        <div>
            <h2>{{$route.params.nickName}}님 로그인중</h2>
        </div>
        <div v-for="product in sortedProducts">
          <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" v-bind:src="product.image">
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <router-link tag="h1" :to="{name: 'Id', parmas: {id: product.id}}">{{product.title}}</router-link>
            <p v-html="product.description"></p>
            <p class="price">
              {{product.price}}원             
            </p>
            <p>
              <span class="inventory-message">
                  지금 바로 구매하세요!!!
              </span>
            </p>
            <router-link active-class="active" tag="button" class="btn btn-primary btn-lg" :to="{name: 'Form', params: {nickName: $route.params.nickName, title: product.title, price: product.price}}">
                구매하기
            </router-link>
            <div class="rating">
              <span v-for="n in 5" v-bind:class="{'rating-active':checkRating(n, product)}">☆</span> 
            </div>
          </div>
        </div>
        <hr>
        </div>
    </div>
    </main>
    </div>
</template>

<script>
import MyHeader from './Header.vue';
export default {
    name: 'imain',
    data() {
        return {
            products: [],
        };
    },
    components: {MyHeader},
    methods: {
        checkRating(n, product) {
            return n <= product.rating;
        },
    },
    computed: {
        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this.products.slice(0);
                function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase())
                        return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase())
                        return 1;
                    return 0;
                }
                return productsArray.sort(compare);
            }
        }
    },
    created: function() {
        axios.get('/static/products.json').then(response => {
            this.products = response.data.products;
            console.log(this.products);
        });
    }
}
</script>