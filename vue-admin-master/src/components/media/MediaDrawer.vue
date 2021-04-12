<template>
  <div class="media_drawer">
    <v-navigation-drawer app>
      <v-toolbar color="primary darken-1" dark>
        <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
        <v-toolbar-title>
          <span class="hidden-sm-and-down">Admin System</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list class="media-list pa-0">
        <template v-for="item in items">
          <template v-if="item.heading">
            <v-subheader :key="item.heading">
              {{ item.heading }}
            </v-subheader>
            <v-divider :key="'d' + item.heading" />
          </template>
          <template v-else>
            <v-list-item :key="item.text" link exact :to="item.to">
              <v-list-item-icon v-if="item.icon">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="getIconByExt(item.icon)"></use>
                </svg>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          title: 'Video',
          icon: 'video',
          to: { path: '/media/video' },
        },

        {
          title: 'Image',
          icon: 'jpg',
          to: { path: '/media/image' },
        },
        {
          title: 'Document',
          icon: 'doc',
          to: { path: '/media/image' },
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getIconByExt']),
    computeLogo() {
      return '/static/m.png'
    },
  },
}
</script>

<style lang="sass" scoped>
.center-align
    position: absolute
    left: 50%
    top: 50%
    transform: translateY(-50%) translateX(-50%)
.icon
  width: 42px
  height: 42px
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
</style>
