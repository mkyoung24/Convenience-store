<template>
    <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">회원 가입</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12"><strong>아이디  </strong></div>
              <div class="col-md-12">
                <input v-model.trim="member.id" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>비밀번호  </strong></div>
              <div class="col-md-12">
                  <input type="password" v-model.trim="member.pw" class="form-control" >
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>비밀번호 확인  </strong></div>
              <div class="col-md-12">
                  <input type="password" v-model.trim="member.pw2" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>이름  </strong></div>
              <div class="col-md-12">
                  <input v-model.trim="member.Name" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12"><strong>닉네임  </strong></div>
              <div class="col-md-12">
                  <input v-model.trim="member.nickName" class="form-control">
              </div>
            </div>
            <button type="submit" class="btn btn-primary submit" v-on:click="register">회원가입</button>
        </div>
    </div>
    </div>
    </template>
    
    <script>
        import MyHeader from './Header.vue';
    export default {
        name: 'Register',
        data() {
            return {           
                member: {
                    Name: '',
                    id: '',
                    pw: '',
                    pw2: '',
                    nickName: '',
                },
            }
        },
        components: {MyHeader},
        methods: {
            register() {
                        if (this.member.Name==''||this.member.id==''||this.member.pw==''||this.member.nickName=='') {
                            alert('비어있는 칸이 있습니다.');
                            this.$router.push({ name: 'register'})
                        } else if(this.member.pw != this.member.pw2) {
                            alert("비밀번호가 틀립니다.");
                            this.$router.push({ name: 'register'})
                        } else {
                            alert('회원가입 완료');
                            this.$router.push({ name: 'iMain', params: {nickName: this.member.nickName}})
                        }
            },              
        }
    }
    </script>