<template>
    <div class="col-md-10 col-md-offset-1">
      <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'iMain', params: {nickName: $route.params.nickName}}">
            Main
        </router-link>
          <div class="panel panel-info">
            <div class="panel-heading" style="text-align: center;">구매 목록</div>
            <div class="panel-body">
              <div class="form-group">
                <mycomponent></mycomponent>              
              </div>
              <div class="form-group">
                <div class="col-md-4">
                  <strong>상품 이름 : {{$route.params.title}}</strong>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-4">
                  <strong>상품 가격 : {{$route.params.price}}</strong>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-4">
                  <strong>상품 수량 : </strong>
                  <button v-on:click="order.counter += 1">+</button>
                  {{order.counter}}
                  <button v-on:click="minusCount">-</button>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12"><strong>주소 </strong></div>
                <div class="col-md-12">
                  <input v-model.trim="order.address" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12"><strong>연락처 </strong></div>
                <div class="col-md-12">
                    <input v-model.trim="order.phone" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12"><strong>요청사항 </strong></div>
                <div class="col-md-12">
                    <input v-model.trim="order.please" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-6 boxes">
                    <strong>결제유형 : </strong>
                    <input type="radio" id="cash" :value="order.cash" v-model="order.method">
                    <label for="">계좌이체</label>
                    <input type="radio" id="card" :value="order.card" v-model="order.method">
                    <label for="">카드</label>
                    <input type="radio" id="point" :value="order.point" v-model="order.method">
                    <label for="">휴대폰 결제</label>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-6">
                  <h2>상품 총 가격 : {{($route.params.price * order.counter)}} </h2>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">주문하기</button>
                </div>
              </div>
          </div>
    </div>
    <div v-if="purchase === false" class="col-md-12 verify">
        <div class="col-md-6 col-md-offset-3">        
          <div class="panel panel-info">
          <div class="panel-body">
            <div class="form-group">
                <mall-Component :order="order">
                  <h2 slot="header">{{header}}</h2>
                  <h3 slot="order.Name">상품명 : {{$route.params.title}}</h3>
                  <h3 slot="order.counter">수량 : {{order.counter}}</h3>
                  <h3 slot="order.address">주소 : {{order.address}}</h3>
                  <h3 slot="order.phone">전화번호 : {{order.phone}}</h3>
                  <h3 slot="order.method">결제 수단 : {{order.method}}</h3>
                  <h3 slot="order.method">총 결제 금액 : {{($route.params.price * order.counter)}}</h3>
                </mall-Component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './Header.vue';
export default {
    name: 'Form',
    data() {
        return {
            purchase: true,
            states: {
                육개장: '육개장',
                젤리: '젤리',
                캔커피: '캔커피',
                토레타: '토레타',
                홈런볼: '홈런볼'
            },
            order: {
                Name: '',
                counter: 1,
                address: '',
                phone: '',
                method: '',
                cash: '계좌이체',
                card: '카드',
                point: '휴대폰 결제',
                please: '',
            },
            header: '구매내역',
        }
    },
    components: {MyHeader},
    methods: {
        submitForm() {
        let check = /^(01[016789])(-{0,1})([0-9]{3,4})(-{0,1})([0-9]{4})$/;
                    if (this.order.phone==''||this.order.address=='') {
                        alert('비어있는 칸이 있습니다.');
                    } else if(!check.test(this.order.phone)) {
                        alert("올바르지 않은 전화번호입니다.");
                    } else if(this.order.method=='') {
                        alert("결제수단을 체크해 주세요")
                    } else {
                        alert('구입완료');
                        this.purchase = false;
                    }
      },
      minusCount() {
        if(this.order.counter > 1) {
          this.order.counter -= 1;
        } else {
          this.order.counter = 1;
        }
        return this.order.counter;
      }     
    }
}
</script>