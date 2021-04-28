<template>
  <v-list-item :to="item.path" class="px-3">
    <v-list-item-icon class="my-3">
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" v-text="item.icon" />
        </template>
        <span v-text="item.title" />
      </v-tooltip>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.title" />
    </v-list-item-content>
    <!-- <v-list-item-action v-if="item.isNew">
      <v-icon color="green">mdi-new-box </v-icon>
    </v-list-item-action> -->
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {},
}
</script>
<style lang="css" scoped>
  .v-list .v-list-item--active {
    color: #1e88e5;
  }
</style>
