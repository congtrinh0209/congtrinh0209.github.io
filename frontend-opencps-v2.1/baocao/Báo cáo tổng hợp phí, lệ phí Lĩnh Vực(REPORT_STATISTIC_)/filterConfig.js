
{
  api: "/o/rest/statistics/feesummary?paymentStatus=-1",
  exclusive: false,
  customize: true,
  groupIds: [
  ],
  groupBy: [
    {
       key: "domainCode",
       label: "Lĩnh vực",
       display: "domain",
       showGroup: false
    }
  ],
  sumKey: "domainCode",
  filters: [
    {
      label: "Từ ngày",
      key: "fromStatisticDate",
      value: new Intl.DateTimeFormat('vi-VN').format(new Date((new Date()).getFullYear(), (new Date()).getMonth())),
      type: "date",
      before: "toStatisticDate"  
    },
    {
      label: "Đến ngày",
      key: "toStatisticDate",
      value: new Intl.DateTimeFormat('vi-VN').format(new Date()),
      type: "date",
      after: "fromStatisticDate"  
    }
  ],
  reportConfig: [
    {
      "selected": true,
      "value": "domain",
      "align": "left",
      "text": "Lĩnh vực",
      "width": 300
    },
    {
      "selected": true,
      "value": "totalDossier",
      "align": "center",
      "text": "Số hồ sơ phải thu phí, lệ phí",
      "width": 100
    },
    {
      "selected": true,
      "value": "totalFeeAmount",
      "align": "center",
      "text": "Phí",
      "type": "currency",
      "width": 90
    },
    {
      "selected": true,
      "value": "totalPaymentAmount",
      "align": "center",
      "text": "Lệ phí",
      "type": "currency",
      "width": 90
    },
    {
      "selected": true,
      "value": "totalAmount",
      "align": "center",
      "text": "Tổng",
      "type": "currency",
      "width": 90
    }
  ]
}

