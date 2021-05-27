<template>
  <div>
    <v-container
      id="createWarranty"
      fluid
      tag="section"
    >
      <base-material-card
        style="margin-top: 90px"
        icon="mdi-clipboard-text"
        :title="uid == '0' ? 'Tạo phiếu bảo hành sản phẩm' : 'Cập nhật thông tin bảo hành sản phẩm'"
        class="px-5 py-3"
      >
        <v-card-text>

        </v-card-text>
      </base-material-card>
    </v-container>
    
  </div>
  
</template>

<script>
  export default {
    name: 'CreateEWarranty',
    props: ['uid'],
    data () {
      return {
        loading: false,
        validFormAdd: true,
        userName: '',
        nameRules: [
          v => !!v || 'Tên thành viên là bắt buộc',
          v => (v && v.length <= 100) || 'Tên không quá 100 ký tự',
        ],
        account: '',
        accountRules: [
          v => !!v || 'Tên đăng nhập là bắt buộc',
          v => /^[a-zA-Z0-9]+$/.test(v) || 'Tên đăng nhập gồm chữ hoặc số',
          v => (v && v.length <= 75) || 'Tên đăng nhập không quá 75 ký tự',
        ],
        passWord: '',
        passwordRules: [
          v => !!v || 'Mật khẩu đăng nhập là bắt buộc',
          v => (v && v.length >= 6 && v.length <= 20) || 'Mật khẩu ít nhất 6 ký tự',
        ],
        telNo: '',
        telNoRules: [
          v => !!v || 'Số điện thoại là bắt buộc',
          v => /^0([1-9]{1}\d{8})$/.test(v) || 'Số điện thoại gồm 10 chữ số',
        ],
        address: '',
        addressRules: [
          v => (v && v.length <= 200) || 'Địa chỉ không quá 200 ký tự',
        ],
      }
    },
    created () {
      let vm = this
      
    },
    methods: {
      addMember () {
        let vm = this
        vm.dialogAddMember = true
        setTimeout(function () {
          vm.account = ''
          vm.passWord = ''
          vm.userName = ''
          vm.telNo = ''
          vm.address = ''
          vm.$refs.formAddMember.resetValidation()
        }, 200)
      },
      submitAddMember () {
        let vm = this
        if (vm.$refs.formAddMember.validate()) {
          let dataUserAuthen = {
            account: String(vm.account).trim() + '@gmail.com',
            passWord: String(vm.passWord).trim(),
            userName: String(vm.userName).trim(),
            telNo: String(vm.telNo).trim(),
            address: String(vm.address).trim()
          }
          vm.loading = true
          firebase.auth().createUserWithEmailAndPassword(dataUserAuthen.account, dataUserAuthen.passWord)
          .then(userCredential => {
            vm.loading = false
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: 'Thêm thành viên thành công',
              color: 'success',
            })
            // Signed in 
            let user = userCredential.user;
            db.collection("users").doc(user.uid).set({
              account: String(vm.account).trim(),
              userName: dataUserAuthen.userName,
              telNo: dataUserAuthen.telNo,
              address: dataUserAuthen.address,
              role: "Member"
            })
            .then(() => {
            })
            .catch((error) => {
            });
            // ...
          })
          .catch((error) => {
            vm.loading = false
            let errorCode = error.code;
            let errorMessage = error.message;
            let mess = ''
            if (errorCode == 'auth/email-already-in-use') {
              mess = 'Tên đăng nhập đã được sử dụng. Vui lòng sử dụng tên đăng nhập khác.'
            } else if (errorCode == 'auth/weak-password') {
              mess = 'Mật khẩu quá yếu'
            } else if (errorCode == 'auth/invalid-email') {
              mess = 'Tên đăng nhập không hợp lệ'
            } else {
              mess = errorMessage
            }
            vm.$store.commit('SHOW_SNACKBAR', {
              show: true,
              text: mess,
              color: 'error',
            })
            // ..
          });
        }
      },
      cancelAddMember () {
        let vm = this
        vm.dialogAddMember = false
      },
    },
  }
</script>

