<template>
  <v-footer
    id="dashboard-core-footer" class="py-0"
  >
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          class=" mb-sm-0 font-weight-bold"
          cols="auto"
        >
          <div>
            <p class="mb-2 text-bold">CÔNG TY CP SẢN XUẤT SƠN HÀ NỘI</p>
            <p class="mb-2"><v-icon>mdi-map-marker-star</v-icon> CCN Đắc Sở, Hoài Đức, Hà Nội</p>
            <p class="mb-2"><v-icon>mdi-map-marker-star</v-icon> ACM building, 96 cao thắng P.4, Q.3, Tp.HCM</p>
            <p><v-icon>mdi-map-marker-star</v-icon> A3-30 - khu đô thị minh khang - TP.Vinh, Nghệ An</p>
          </div>
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          cols="12"
          md="auto"
        >
          <div class="text-body-1 font-weight-bold pt-md-0">
            <div>
              <p class="mb-2"><v-icon>mdi-map-marker-star</v-icon> Địa chỉ: CCN Đắc Sở, Hoài Đức, Hà Nội</p>
              <p class="mb-2"><v-icon>mdi-phone-in-talk</v-icon> Điện thoại: 0369648868</p>
              <p><v-icon>mdi-email</v-icon> Email: valenta@hanoipaint.com.vn</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardCoreFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'Creative Tim',
        },
        {
          href: '#',
          text: 'About Us',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Licenses',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
<style lang="css" scoped>
  #dashboard-core-footer{
    /* height: 100vh; */
    background-image: url(http://hanoi.fds.vn:8077/documents/20126/519071/bg-footer.jpg);
    background-position: top;
    background-size: auto
  }
</style>
