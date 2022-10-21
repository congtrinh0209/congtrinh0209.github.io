<template>
  <div class="dashboard-page">
    <v-container
      class="px-0 pt-0"
      fluid
      tag="section"
    >
      <div class="wrap-dashboard" wrap>
        <div class="main-slider__desktop">
          <v-carousel hide-delimiter-background cycle :show-arrows="false">
            <v-carousel-item
              v-for="(item,i) in danhSachCuocThi_main"
              :key="i"
              :src="item.src"
              @click="openWebSite(item.website)"
              style="cursor: pointer;"
            ></v-carousel-item>
          </v-carousel>
        </div>
        <!--  -->
        <v-layout wrap style="margin: 0 auto; max-width: 1500px;">
          <v-col cols="12">
            <div class="title-contest">--- ĐANG DIỄN RA ---</div>
          </v-col>
          <v-sheet
            class="mx-auto slide-contest-sub"
            max-width="1500"
          >
            <v-slide-group
              multiple
              show-arrows
              center-active
              cycle
            >
              <v-slide-item
                v-for="(item,i) in danhSachCuocThi_sub" :key="i"
              >
                <v-col style="width: 460px" class="py-0 mb-2">
                  <v-card
                    :loading="loading"
                    class="mx-auto my-5 col-contest-sub"
                    max-width="400"
                    @click="xemChiTietCuocThi(item)"
                    style="cursor: pointer;"
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
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-layout>
        <!--  -->
        <div style="margin: 0 auto; max-width: 1500px;padding-bottom: 30px;">
          <v-row justify="end" class="my-0 mt-2">
            <v-col cols="4">
              <div class="title-contest mt-0" style="text-align: left !important">TẤT CẢ CUỘC THI</div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4">
              <v-text-field
                  class="input-form mt-2"
                  v-model="keywordSearch"
                  solo
                  dense
                  placeholder="Tên cuộc thi ..."
                  hide-details="auto"
                  @keyup.enter="getDanhSachCuocThi('reset')"
              >
                <template v-slot:append>
                  <v-icon @click="getDanhSachCuocThi('reset')" size="18" color="#2161B1">mdi-magnify</v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-0 mb-3">
            <v-col cols="12" class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachTatCaCuocThi"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingDataTable"
                loading-text="Đang tải... "
              >
                  <template v-slot:item.index="{ item, index }">
                    <div @click.stop="xemChiTietCuocThi(item)">{{ (page+1) * itemsPerPage - itemsPerPage + index + 1 }}</div>
                  </template>
                  <template v-slot:item.tenGoi="{ item }">
                    <div @click.stop="xemChiTietCuocThi(item)">{{ item.tenGoi }}</div>
                  </template>
                  <template v-slot:item.donViToChuc="{ item }">
                    <div @click.stop="xemChiTietCuocThi(item)">{{ item.donViToChuc }}</div>
                  </template>
                  <template v-slot:item.ngayBatDau="{ item }">
                    <div class="py-1" @click.stop="xemChiTietCuocThi(item)">
                      <p class="mb-1">Từ ngày: {{ item.ngayBatDau }}</p>
                      <p class="mb-1"> Đến ngày: {{ item.ngayKetThuc }}</p>
                    </div>
                  </template>
                  <template v-slot:item.tinhTrang="{ item }">
                    <div @click.stop="xemChiTietCuocThi(item)">
                      <v-chip v-if="item.tinhTrang == 1"
                        class="ma-2 white--text"
                        color="green"
                      >
                        Mở đăng ký
                      </v-chip>
                      <v-chip v-if="item.tinhTrang == 2"
                        class="ma-2 white--text"
                        color="orange"
                      >
                        Đóng đăng ký
                      </v-chip>
                      <v-chip v-if="item.tinhTrang == 3"
                        class="ma-2 white--text"
                        color="red"
                      >
                        Đã kết thúc
                      </v-chip>
                    </div>
                    
                  </template>
                  <template v-slot:item.action="{ item }">                   
                    <v-btn
                      v-if="item.tinhTrang == 1"
                      text
                      color="primary"
                      @click="dangKyThi(item)"
                    >
                      Đăng ký
                    </v-btn>
                  </template>
              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :total="total" :pageCount="pageCount" @tiny:change-page="changePage"></pagination>
            </v-col>
          </v-row>
        </div>
        <!--  -->
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
          website: '',
          src: 'https://www.kaseya.com/wp-content/uploads/2021/12/IT-Infrastructure-Management.jpeg',
        },
        {
          website: 'https://tinhoctre.vn/',
          src: 'https://tinhoctre.vn/static/icons/banner_header.jpg'
        },
        {
          website: 'https://vnoi.info/',
          src: 'https://oj.vnoi.info/martor/16698f71-9463-4556-91f2-d9aa7acdfa96.png'
        },
        {
          website: 'https://vnoi.info/',
          src: 'https://oj.vnoi.info/martor/248d5326-886f-4353-b340-9038c5e03aec.jpg',
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
            "hinhAnh": 'https://oj.vnoi.info/martor/16698f71-9463-4556-91f2-d9aa7acdfa96.png',
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
            "hinhAnh": 'https://tinhoctre.vn/static/icons/banner_header.jpg',
            "tinhTrang": 3
        },
        {
            "id": "7820540d-1daf-48d3-9c4c-855bb5d16719",
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
            "hinhAnh": 'https://oj.vnoi.info/martor/248d5326-886f-4353-b340-9038c5e03aec.jpg',
            "tinhTrang": 2
        },
        {
            "id": "adac1aec-41ac-4e92-be04-52dc99d9fd85",
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
      danhSachTatCaCuocThi: [
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
            "id": "adac1aec-41ac-4e92-be04-52dc99d9fd85",
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
      loading: false,
      loadingDataTable: false,
      keywordSearch: '',
      headers: [
        {
            sortable: false,
            text: 'STT',
            align: 'center',
            value: 'index',
            width: 50
        },
        {
            sortable: false,
            text: 'Cuộc thi',
            align: 'left',
            value: 'tenGoi',
            class: 'th-center py-2'
        },
        {
            sortable: false,
            text: 'Đơn vị tổ chức',
            align: 'left',
            value: 'donViToChuc',
            class: 'th-center'
        },
        {
            sortable: false,
            text: 'Thời gian diễn ra',
            align: 'left',
            value: 'ngayBatDau',
            class: 'th-center py-2',
            width: 200
        },
        {
            sortable: false,
            text: 'Tình trạng',
            align: 'center',
            value: 'tinhTrang',
            class: 'th-center',
            width: 90
        },
        {
            sortable: false,
            text: '',
            align: 'center',
            value: 'action',
            class: 'th-center',
            width: 100
        },
      ],
      page: 0,
      itemsPerPage: 20,
      total: 0,
      pageCount: 0,
    }),
    created () {
      let vm = this
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      },
      isSigned () {
        return this.$cookies.get('Token') ? true : false
      },
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
      }
    },
    methods: {
      getDanhSachCuocThi (type) {
        let vm = this
        if (type === 'reset') {
          vm.total = 0
          vm.pageCount = 0
          vm.page = 0
        }
        if (vm.loadingData) {
          return
        }
        if (vm.loadingData) {
          return
        }
        vm.loadingData = true
        let filter = {
          collectionName: 'cuocthis',
          data: {
            page: vm.page,
            size: vm.itemsPerPage
          }
        }
        vm.$store.dispatch('collectionFilter', filter).then(function (response) {
          let data = response.content
          vm.total = response.totalElements
          vm.pageCount = response.totalPages
          console.log('data', data)
          vm.loadingData = false
        }).catch(function () {
          vm.loadingData = false
        })
      },
      xemChiTietCuocThi (item) {
        let vm = this
        vm.$router.push({ path: '/cuoc-thi/' + item.id})
      },
      dangKyThi (item) {
        let vm = this
        if (vm.isSigned) {
          vm.$router.push({ path: '/dang-ky/' + item.id})
        } else {
          let ref = '/dang-ky/' + item.id
          vm.$router.push({ path: '/dang-nhap?redirect=' + ref})
        }
      },
      changePage (config) {
        let vm = this
        vm.page = config.page
        vm.getDanhSachCuocThi()
      },
      openWebSite (web) {
        if (web) {
          window.open(web, "_blank")
        }
      },
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
    margin-top: 0px
  .main-slider__desktop
    border-bottom: 2px solid #dedede
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
  .slide-contest-sub .v-slide-group__next:not(.v-slide-group__next--disabled) .v-icon, .slide-contest-sub .v-slide-group__prev:not(.v-slide-group__prev--disabled) .v-icon
    width: 36px
    height: 36px
    background: #000000
    border-radius: 50%
    font-size: 24px
    color: #fff
    opacity: 0.4
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
