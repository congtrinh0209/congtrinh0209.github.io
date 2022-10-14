<template>
  <div class="dashboard-page">
    <v-container
      class="px-0 pt-0"
      fluid
      tag="section"
    >
      <div class="wrap-dashboard" wrap>
        <div class="main-slider__desktop">
          <v-carousel hide-delimiters cycle >
            <v-carousel-item
              v-for="(item,i) in danhSachCuocThi_main"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <v-layout wrap style="margin: 0 auto; max-width: 1500px;">
          <v-col cols="12">
            <div class="title-contest">--- Các cuộc thi ---</div>
          </v-col>
          <v-col v-for="(item, index) in danhSachCuocThi_sub" :key="index" cols="12" md="4" class="py-0 mb-2">
            <v-card
              :loading="loading"
              class="mx-auto my-5 col-contest-sub"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                class="image-contest"
                height="250"
                :src="item.hinhAnh"
              ></v-img>
              <span class="event_post_date">
                <span class="post_start_date">
                  {{formatStartDate(item.ngayBatDau)}}
                </span>
              </span>
              <div class="status-contest mx-4" :style="item.tinhTrang == 1 ? 'color: green' : (item.tinhTrang == 2 ? 'color: blue' : 'color: red')">
                {{statusContest(item.tinhTrang)}}
              </div>
              <v-card-title>{{item.tenGoi}}</v-card-title>
              <v-card-text height="200">
                <div v-snip="{ lines: 7 }" class="my-0 text-subtitle-1">
                  {{item.thongTinMoTa}}
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-title class="des-contest">
                <v-flex>
                  <v-icon size="18" color="#2161B1">mdi-calendar-month</v-icon>&nbsp;
                  <span>{{item.ngayBatDau}} : {{item.ngayKetThuc}}</span>
                </v-flex>
                <v-flex style="width:100%">
                  <v-icon size="18" color="#2161B1">mdi-bank-outline</v-icon>&nbsp;
                  <span>{{item.donViToChuc}}</span>
                </v-flex>
                <v-flex >
                  <v-icon size="18" color="#2161B1">mdi-web</v-icon>&nbsp;
                  <a>{{item.website}}</a>
                </v-flex>
              </v-card-title>
            </v-card>
          </v-col>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
  import toastr from 'toastr'

  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'Dashboard',
    components: {
    },
    data: () => ({
      danhSachCuocThi_main: [
        {
          src: 'https://www.kaseya.com/wp-content/uploads/2021/12/IT-Infrastructure-Management.jpeg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      danhSachCuocThi_sub: [
        {
            "id": "adac1aec-41ac-4e92-be04-52dc99d9fd85",
            "tenGoi": "Olympic tin học sinh viên Việt Nam",
            "tiengAnh": null,
            "serieCuocThi": "OLP",
            "lanToChuc": 21,
            "donViToChuc": "Hội tin học Việt Nam",
            "toChucId": "02123",
            "ngayBatDau": "06-11-2021",
            "ngayKetThuc": "19-03-2022",
            "thongTinMoTa": "Olympic Tin học Sinh viên Việt Nam (OLP) là sáng kiến của Hội Tin học Việt Nam, Hội Sinh viên Việt Nam và Bộ giáo dục và Đào tạo nhằm động viên phong trào học tập tin học và khuyến khích các tài năng tin học trẻ. Bắt đầu từ năm 1992, Kỳ thi đã được tổ chức định kỳ hàng năm với sự tham gia của đông đảo sinh viên các trường Đại học và Cao đẳng trong cả nước. Từ năm 2005, sau những năm thử nghiệm với tiêu chuẩn thi lập trình quốc tế ACM/ICPC cho quy trình chấm thi và thi trực tuyến cho khối thi tập thể ”lều chõng”, từ năm 2006 Việt Nam chính thức được chấp thuận tổ chức Kỳ thi lập trình sinh viên quốc tế ACM/ICPC (ACM International Collegiate Programming Contest) Khu vực Châu Á. Từ năm 2007, Olympic Tin học sinh viên Việt Nam đã kết nối với Kỳ thi ACM/ICPC thành một Hội thi tin học cho sinh viên Việt Nam và Khu vực Châu Á. Từ năm 2018, ACM/ICPC đổi thành Kỳ thi lập trình sinh viên quốc tế ICPC (International Collegiate Programming Contest).",
            "website": "https://www.olp.vn/",
            "hinhAnh": 'https://lh4.googleusercontent.com/DRRQPAIWa_t4uGw6Tq_GoZdH-M-2FW9mYbB4rerIQfHVrCLcqaifunulLzQ42mdH24L8RazL8DEakJcLFtyPcyCRIc4b7w0zLN2KNDhesPqiS6CmeSk9p-Fvh8f4XQ5hOA=w1280',
            "tinhTrang": 1
        },
        {
            "id": "7820540d-1daf-48d3-9c4c-855bb5d16719",
            "tenGoi": "ICPC Asia - Việt Nam",
            "tiengAnh": null,
            "serieCuocThi": "ICPC",
            "lanToChuc": 21,
            "donViToChuc": "Hội tin học Việt Nam",
            "toChucId": "02123",
            "ngayBatDau": "06-11-2021",
            "ngayKetThuc": "19-03-2022",
            "thongTinMoTa": "Được sự bảo trợ của Hiệp hội máy tính (ACM), kỳ thi lập trình quốc tế ACM/ICPC (International Collegiate Programming Contest) được tổ chức lần đầu tiên tại Mỹ vào năm 1970, đến nay đã thu hút được hàng chục ngàn sinh viên xuất sắc nhất của các khoa trong lĩnh vực máy tính từ hệ thống Đại học toàn cầu. Cuộc thi có mục đích nhằm phát triển sự sáng tạo, làm việc nhóm và sự đổi mới trong cách xây dựng các chương trình phần mềm mới và cho phép sinh viên kiểm tra năng lực thực hiện của họ dưới một áp lực thời gian rất cao. Đây là kì thi lập trình lâu đời nhất, lớn nhất và có uy tín nhất trên thế giới. ",
            "website": "https://icpc.global",
            "hinhAnh": 'https://lh5.googleusercontent.com/9BnT7Gklv9hoB5Oewi7jfn5edpC4ZKcllmOE6TqTL0OeBz4xpkw0aHQtWWMs5xIsqUDN1TGI4vo9AM98KFFPByHUinJGT9d_N0qni6Ac3-pvA7JPVEKSQXyUEWZok5yQ3w=w1280',
            "tinhTrang": 3
        },
        {
            "id": "adac1aec-41ac-4e92-be04-52dc99d9fd85",
            "tenGoi": "Olympic tin học sinh viên Việt Nam",
            "tiengAnh": null,
            "serieCuocThi": "OLP",
            "lanToChuc": 21,
            "donViToChuc": "Hội tin học Việt Nam",
            "toChucId": "02123",
            "ngayBatDau": "06-11-2021",
            "ngayKetThuc": "19-03-2022",
            "thongTinMoTa": "Olympic Tin học Sinh viên Việt Nam (OLP) là sáng kiến của Hội Tin học Việt Nam, Hội Sinh viên Việt Nam và Bộ giáo dục và Đào tạo nhằm động viên phong trào học tập tin học và khuyến khích các tài năng tin học trẻ. Bắt đầu từ năm 1992, Kỳ thi đã được tổ chức định kỳ hàng năm với sự tham gia của đông đảo sinh viên các trường Đại học và Cao đẳng trong cả nước. Từ năm 2005, sau những năm thử nghiệm với tiêu chuẩn thi lập trình quốc tế ACM/ICPC cho quy trình chấm thi và thi trực tuyến cho khối thi tập thể ”lều chõng”, từ năm 2006 Việt Nam chính thức được chấp thuận tổ chức Kỳ thi lập trình sinh viên quốc tế ACM/ICPC (ACM International Collegiate Programming Contest) Khu vực Châu Á. Từ năm 2007, Olympic Tin học sinh viên Việt Nam đã kết nối với Kỳ thi ACM/ICPC thành một Hội thi tin học cho sinh viên Việt Nam và Khu vực Châu Á. Từ năm 2018, ACM/ICPC đổi thành Kỳ thi lập trình sinh viên quốc tế ICPC (International Collegiate Programming Contest).",
            "website": "https://www.olp.vn/",
            "hinhAnh": 'https://lh4.googleusercontent.com/DRRQPAIWa_t4uGw6Tq_GoZdH-M-2FW9mYbB4rerIQfHVrCLcqaifunulLzQ42mdH24L8RazL8DEakJcLFtyPcyCRIc4b7w0zLN2KNDhesPqiS6CmeSk9p-Fvh8f4XQ5hOA=w1280',
            "tinhTrang": 2
        },
        {
            "id": "7820540d-1daf-48d3-9c4c-855bb5d16719",
            "tenGoi": "ICPC Asia - Việt Nam",
            "tiengAnh": null,
            "serieCuocThi": "ICPC",
            "lanToChuc": 21,
            "donViToChuc": "Hội tin học Việt Nam",
            "toChucId": "02123",
            "ngayBatDau": "06-11-2021",
            "ngayKetThuc": "19-03-2022",
            "thongTinMoTa": "Được sự bảo trợ của Hiệp hội máy tính (ACM), kỳ thi lập trình quốc tế ACM/ICPC (International Collegiate Programming Contest) được tổ chức lần đầu tiên tại Mỹ vào năm 1970, đến nay đã thu hút được hàng chục ngàn sinh viên xuất sắc nhất của các khoa trong lĩnh vực máy tính từ hệ thống Đại học toàn cầu. Cuộc thi có mục đích nhằm phát triển sự sáng tạo, làm việc nhóm và sự đổi mới trong cách xây dựng các chương trình phần mềm mới và cho phép sinh viên kiểm tra năng lực thực hiện của họ dưới một áp lực thời gian rất cao. Đây là kì thi lập trình lâu đời nhất, lớn nhất và có uy tín nhất trên thế giới. ",
            "website": "https://icpc.global",
            "hinhAnh": 'https://lh5.googleusercontent.com/9BnT7Gklv9hoB5Oewi7jfn5edpC4ZKcllmOE6TqTL0OeBz4xpkw0aHQtWWMs5xIsqUDN1TGI4vo9AM98KFFPByHUinJGT9d_N0qni6Ac3-pvA7JPVEKSQXyUEWZok5yQ3w=w1280',
            "tinhTrang": 1
        }
    ],
      loading: false
    }),
    created () {
      let vm = this
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      },
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
      }
    },
    methods: {
      formatStartDate (date) {
        if (!date) return ''
        const [day, month, year] = date.split('-')
        let ddd = `${day.padStart(2, '0')}/${month.padStart(2, '0')}`
        return ddd
      },
      statusContest (status) {
        if (status == 1) {
          return 'Mở đăng kí'
        } else if (status == 2) {
          return 'Đóng đăng kí'
        } else {
          return 'Đã kết thúc'
        }
      }

    }
  }
</script>

<style lang="sass">
  $image-login: $public-path + '/images/bg-login.png?t=39123'
  .v-application--wrap
    min-height: 0 !important
  .wrap-dashboard
    width: 100%
    margin: 0 auto
    justify-content: space-around
    margin-top: -100px
  .main-slider__desktop .v-carousel__item, .main-slider__desktop .v-carousel
    height: 600px !important
  .text-title-dashboard
    font-weight: 600
    font-size: 14px
  .col-contest-sub
    box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%) !important
  .image-contest .v-image__image
    background-repeat: no-repeat
    background-size: contain
    border-radius: 10px
    border-bottom: 1px solid #dedede
  .event_post_date
    margin-right: 20px
    margin-top: -40px
    margin-left: auto
    position: relative
    z-index: 2
    background: #344962
    width: 60px
    min-width: fit-content
    height: 60px
    padding: 0 9px
    border-radius: 5px
    display: flex
    font-size: 12px
    text-transform: uppercase
    color: #fff
    text-align: center
    line-height: 1
    font-weight: 700
    box-shadow: 6px 5px 16px 0px rgb(0 0 0 / 15%)
    flex-direction: row !important
  .text-subtitle-1
    text-align: justify
  .des-contest
    font-size: 14px !important
    color: #2161B1
  .status-contest
    font-size: 14px
  .title-contest
    text-align: center
    text-transform: uppercase
    font-size: 24px
    font-weight: 500
    color: #2161b1
    margin-top: 20px
    font-family: 'Roboto Slab'
  .post_start_date
    font-size: 12px
    display: flex
    flex-direction: column
    text-align: center
    justify-content: center
  .event_post_date span
    font-size: 18px
    margin-bottom: 2px
  @media screen and (max-width: 768px) 
    #dashboard-page
      background-repeat-y: repeat
      background-size: contain
      height: auto
      padding: 8px 0
    .wrap-dashboard
      padding-top: 50px
  /* ---- reset ---- */
  
</style>
