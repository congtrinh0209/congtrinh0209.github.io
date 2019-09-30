<template>
  <v-app>
    <v-content>
      <qlt-navigation :filter_options="filter_options_1"></qlt-navigation>
    </v-content>
  </v-app>
</template>

<script>
import QltNavigation from './components/Index';

export default {
  name: 'App',
  components: {
    "qlt-navigation": QltNavigation,
  },
  data: () => ({
    filter_options_1: [
      {
        keyName: 'Mã tuyến',
        keyCode: 'laneCode',
        typeName: 'Bằng',
        typeCode: 'equals',
        fields: 'input'
      },
      {
        keyName: 'Tên tuyến',
        keyCode: 'laneName',
        typeName: 'Khác',
        typeCode: 'notequals',
        fields: 'input'
      },
      {
        keyName: 'Trạng thái',
        keyCode: 'laneStatus',
        typeName: 'Chứa',
        typeCode: 'contains',
        fields: 'select',
        resourceApi: '',
        itemText: '',
        itemValue: ''
      },
      {
        keyName: 'Ngày tạo',
        keyCode: 'createDate',
        typeName: 'Bằng',
        typeCode: 'equals',
        fields: 'date'
      }
    ]
  }),
};
</script>
