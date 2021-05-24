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
          class=" mb-sm-0"
          cols="auto"
        >
          <div>
            <p class="mb-2 font-weight-bold">CÔNG TY CP SẢN XUẤT SƠN HÀ NỘI</p>
            <p class="mb-2"><v-icon color="#fff" class="mr-1">mdi-map-marker-star</v-icon> CCN Đắc Sở, Hoài Đức, Hà Nội</p>
            <p class="mb-2"><v-icon color="#fff" class="mr-1">mdi-map-marker-star</v-icon> ACM Building, 96 Cao Thắng P.4, Q.3, Tp.HCM</p>
            <p><v-icon color="#fff" class="mr-1">mdi-map-marker-star</v-icon> A3-30 - Khu đô thị Minh Khang - TP.Vinh, Nghệ An</p>
          </div>
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          cols="12"
          md="auto"
        >
          <div class="text-body-1 pt-md-0">
            <div>
              <p class="mb-2"><v-icon color="#fff" class="mr-1">mdi-home-city-outline</v-icon> Địa chỉ: CCN Đắc Sở, Hoài Đức, Hà Nội</p>
              <p class="mb-2"><v-icon color="#fff" class="mr-1">mdi-phone-in-talk</v-icon> Điện thoại: 0369648868</p>
              <p><v-icon color="#fff" class="mr-1">mdi-email</v-icon> Email: valenta@hanoipaint.com.vn</p>
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
    background-color: #1f9c7a;
    color: #fff;
  }
</style>
