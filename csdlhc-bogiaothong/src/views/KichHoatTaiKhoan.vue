<template>
  <div class=content>
    <div class="wrapper-1">
      <div class="wrapper-2">
        <h3>KÍCH HOẠT TÀI KHOẢN</h3>
        <p>BẠN ĐÃ ĐĂNG KÝ TÀI KHOẢN</p>
        <p>VUI LÒNG THỰC HIỆN KÍCH HOẠT TÀI KHOẢN</p>
        <button id="go-active">
          KÍCH HOẠT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KichHoatTaiKhoan',
    components: {
    },
    data: () => ({
    }),
    created () {
      let vm = this
    },
    computed: {
    },
    watch: {
    },
    methods: {
      active () {
        return
        let settings = {
          "url": '',
          "method": "GET",
          "headers": {
            'Secret': 'GCguqEMazevwOxEYPkhDH/ybLg/TuAWJ',
            'Content-Type': 'application/json'
          },
        };
        
        $.ajax(settings).done(function (response) {
          
        }).fail(function (response) {
          
        })
      }
    }
  }
</script>

<style lang="css">
  #navigation, .btn-login {
    display: none !important
  }
  body{
    background: #ffffff;
    background: linear-gradient(to bottom, #ffffff 0%,#fbe4e2b8 100%);
  }
  h3 {
    color:#2161B1;
    margin-bottom: 30px;
  }
  .wrapper-1{
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
  }
  .wrapper-2{
    padding :30px;
    text-align:center;
  }
  .wrapper-2 p{
    margin:0;
    font-size: 16px;
    color:#2161B1;
    letter-spacing:1px;
  }
  #go-active{
    color:#fff;
    background:#2161B1;
    border:none;
    padding:10px 50px;
    margin:30px 0;
    border-radius:20px;
    text-transform:capitalize;
    box-shadow: 0 10px 16px 1px #94040447;
  }

  .wrapper-1{
    height: initial;
    max-width:620px;
    margin:0 auto;
    margin-top:50px;
    box-shadow: 4px 8px 40px 8px #fbe4e2b8;
  }
    
</style>
