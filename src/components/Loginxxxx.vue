<template lang="html">
  <div class="login_contain">
    <div class="top">

    </div>
    <div class="bottom">
sdfsfsdf
 <input type="text" name="" value="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        us: '',
        ps: ''
      }
    }
  },
  verify: {
    loginInfo: {
      mail: ['mobile', 'required'],
      pass: 'required'
    }
  },
  methods: {
    login: function() {
      if (this.$verify.check()) {
        let that = this
        // 数据请求http://192.168.8.22:8083/index.php?s=Api/Login/index
        var params = new URLSearchParams()
        var url=this.global.api+'login'
        // params.append('language', '1')
        params.append('mobile', that.loginInfo.mail)
        params.append('pass', that.loginInfo.pass)
        this.$http.post(url, params).then((res) => {
          console.log(res)
          if (res.data.err === 0) {
            // alert('登陆成功，敬请期待后续功能')
            // that.$store.state.userInfo.uId = that.loginInfo.mail
            // console.log(that.$store.state.userInfo.uId);
            // console.log(111);
            // this.$store.state.userInfo.uId = res.data.userid
            // this.$store.state.userInfo.token = res.data.token
            localStorage.name=that.loginInfo.mail;
            localStorage.id=res.data.
            alert("登录成功！")
            this.$router.push('main')
          }else if(res.data.err === -300){
             alert("用户名密码错误")
          }
        }, (res) => {
          console.log(res)
        })
        // this.$router.push('main')
      } else {
        alert('手机格式错误,请重新输入')
      }
    }
  }
}
</script>

<style lang="less">
@import '../common/less/variable.less';
html, body {
  height: 100%;
  width: 100%;
  /* overflow-x: hidden; */
  background:@bg-body;

}
.login_contain{
    /* display:flex;
    flex-direction: column; */
    /* position: relative; */
    background: pink;
    position: relative;
height: 100%;
    /* border: 1px solid red; */
  /*   background:url('../common/image/bg_login.png') no-repeat ;
  background-size: 100%;
  border-top: 1px solid rgb(54,62,82);
  border-bottom: 1px solid rgb(54,62,82); */
  .top{
    /* .border(red); */
    background: red;
    .h(250);
    }
  .bottom{
  background: green;
/*   overflow: scroll; */
/*   flex-grow: 1; */
  /*  .h(10); */
   position: absolute;
   .top(250);
   .bottom(1);

    /* height: 100%; */
  }

}
</style>
