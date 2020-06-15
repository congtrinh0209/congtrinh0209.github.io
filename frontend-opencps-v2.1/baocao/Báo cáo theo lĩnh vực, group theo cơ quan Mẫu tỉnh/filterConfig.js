{
  api: "/o/rest/statistics/feesummary?paymentStatus=-1&&type=service",
  exclusive: false,
  customize: false,
  groupIds: [
  ],
  sumKey: "domainCode",
    groupBy: [
    {
       key: "govAgencyCode",
       label: "Cơ quan",
       display: "govAgencyName"
    }
  ],
  filters: [
    {
      label: "Từ ngày",
      key: "fromStatisticDate",
      value: new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1).toLocaleDateString('vi-VN'),
      type: "date",
      before: "toStatisticDate"
    },
    {
      label: "Đến ngày",
      key: "toStatisticDate",
      value: new Date().toLocaleDateString('vi-VN'),
      type: "date", 
      after: "fromStatisticDate" 
    }
  ],
  reportConfig: [
    {
      "selected": true,
      "value": "domainName",
      "text": "",
      "align": "left"
    },
    {
      "selected": true,
      "value": "processCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "remainingCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "receivedCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "releaseCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "betimesCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "ontimeCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "overtimeCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "processingCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "undueCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "overdueCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "dossierOnline3Count",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "dossierOnline4Count",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "viaPostalCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "viaPostalCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "viaPostalCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "receiveDossierSatCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "releaseDossierSatCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "deniedCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "note",
      "text": "",
      "align": "center"
    },
  ],
  selection: [
    {
        "key": "govAgencyCode",
        "value": ""
    }
  ],
  merge: ["domainCode","govAgencyCode"],
  sort: "domainName",
  statistics: true,
  autoHeader: false
}