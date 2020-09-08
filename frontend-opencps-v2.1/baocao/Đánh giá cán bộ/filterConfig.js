{
    api: "/o/rest/statistics/persons",
    exclusive: false,
    customize: false,
    groupIds: [
      {
        selected: true,
        value: 272435,
        text: "Cổng DVC"
      }
    ],
   	sumKey: "employeeId",
    
    filters: [
      {
        label: "Từ ngày",
        key: "fromStatisticDate",
        value: new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1).toLocaleDateString('vi-VN'),
        type: "date" 
      },
      {
        label: "Đến ngày",
        key: "toStatisticDate",
        value: new Date().toLocaleDateString('vi-VN'),
        type: "date" 
      }
    ],
    reportConfig: [
      {
        "selected": true,
        "value": "employeeName",
        "text": "",
        "align": "left"
      },
      {
        "selected": true,
        "value": "totalVoted",
        "text": "",
        "align": "center"
      },
      {
        "selected": true,
        "value": "veryGoodCount",
        "text": "",
        "align": "center"
      },
      {
        "selected": true,
        "value": "goodCount",
        "text": "",
        "align": "center"
      },
      {
        "selected": true,
        "value": "badCount",
        "text": "",
        "align": "center"
      }
    ],
    selection: [
    ],
      sort: "employeeName",
    merge: ["employeeId","govAgencyCode"],
    statistics: true,
    autoHeader: false
  }