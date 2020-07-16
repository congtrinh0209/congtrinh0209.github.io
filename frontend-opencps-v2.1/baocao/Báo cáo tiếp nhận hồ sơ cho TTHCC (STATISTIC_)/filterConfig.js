{
  api: "/o/rest/statistics",
  proxyApi: "/statistics",
  exclusive: false,
  customize: false,
  groupIds: [
    {
      selected: true,
      value: '',
      text: "Tất cả đơn vị"
    },
    {
      value: 45022,
      text: "Sở Tài nguyên và Môi trường"
    },
    {
      value: 45027,
      text: "Sở Xây dựng"
    }, 
    {
      value: 45032,
      text: "Sở Công thương"
    }, 
    {
      value: 45037,
      text: "Sở Giáo dục và Đào tạo"
    }, 
    {
      value: 45042,
      text: "Sở Giao thông Vận tải"
    }, 
    {
      value: 35730,
      text: "Sở Kế hoạch và Đầu tư"
    }, 
    {
      value: 45047,
      text: "Sở Khoa học và Công nghệ"
    }, 
    {
      value: 45052,
      text: "Sở Lao động thương binh và Xã hội"
    },
    {
      value: 45087,
      text: "Sở Nội vụ"
    }, 
    {
      value: 45082,
      text: "Sở Nông nghiệp và Phát triển nông thôn"
    }, 
    {
      value: 45057,
      text: "Sở Tài chính"
    }, 
    {
      value: 45062,
      text: "Sở Thông tin và Truyền thông"
    }, 
    {
      value: 45067,
      text: "Sở Tư pháp"
    }, 
    {
      value: 45072,
      text: "Sở Văn hoá Thể thao và Du lịch"
    }, 
    {
      value: 45077,
      text: "Sở Y tế"
    }, 
    {
      value: 47439,
      text: "Ban Quản lý khu công nghiệp"
    }, 
    {
      value: 44898,
      text: "Ban Quản lý khu Nông nghiệp ứng dụng công nghệ cao"
    },
    {
      value: 96351,
      text: "UBND thành phố Vị Thanh"
    },
    {
          value: 96701,
          text: "UBND Thành phố Ngã Bảy"
    },
    {
          value: 96980,
          text: "UBND Thị xã Long Mỹ"
    },
    {
          value: 97260,
          text: "UBND huyện Vị Thủy"
    },
    {
          value: 97565,
          text: "UBND huyện Long Mỹ"
    },
    {
          value: 100349,
          text: "UBND huyện Phụng Hiệp "
    },
    {
          value: 100907,
          text: "UBND huyện Châu Thành "
    },
    {
          value: 101465,
          text: "UBND huyện Châu Thành A "
    },
	{
      value: 97901,
      text: "Cấp xã thành phố Vị Thanh"
    },
    {
          value: 98180,
          text: "Cấp xã thành phố Ngã Bảy"
    },
    {
          value: 98501,
          text: "Cấp xã thị xã Long Mỹ"
    },
    {
          value: 98801,
          text: "Cấp xã huyện Vị Thủy"
    },
    {
          value: 99203,
          text: "Cấp xã huyện Long Mỹ"
    },
    {
          value: 100628,
          text: "Cấp xã huyện Phụng Hiệp"
    },
    {
          value: 101186,
          text: "Cấp xã huyện Châu Thành"
    },
    {
          value: 101744,
          text: "Cấp xã huyện Châu Thành A "
    } 
  ],
  groupIdList: [
    {
        group: 1,
        label: "Chọn cấp Sở",
        key: 'SBN',
        value: [
            {
              selected: true,
              value: '0',
              text: "Tất cả đơn vị cấp sở"
            },
            {
              value: 45022,
              text: "Sở Tài nguyên và Môi trường"
            },
            {
              value: 45027,
              text: "Sở Xây dựng"
            }, 
            {
              value: 45032,
              text: "Sở Công thương"
            }, 
            {
              value: 45037,
              text: "Sở Giáo dục và Đào tạo"
            }, 
            {
              value: 45042,
              text: "Sở Giao thông Vận tải"
            }, 
            {
              value: 35730,
              text: "Sở Kế hoạch và Đầu tư"
            }, 
            {
              value: 45047,
              text: "Sở Khoa học và Công nghệ"
            }, 
            {
              value: 45052,
              text: "Sở Lao động thương binh và Xã hội"
            },
            {
              value: 45087,
              text: "Sở Nội vụ"
            }, 
            {
              value: 45082,
              text: "Sở Nông nghiệp và Phát triển nông thôn"
            }, 
            {
              value: 45057,
              text: "Sở Tài chính"
            }, 
            {
              value: 45062,
              text: "Sở Thông tin và Truyền thông"
            }, 
            {
              value: 45067,
              text: "Sở Tư pháp"
            }, 
            {
              value: 45072,
              text: "Sở Văn hoá Thể thao và Du lịch"
            }, 
            {
              value: 45077,
              text: "Sở Y tế"
            }, 
            {
              value: 47439,
              text: "Ban Quản lý khu công nghiệp"
            }, 
            {
              value: 44898,
              text: "Ban Quản lý khu Nông nghiệp ứng dụng công nghệ cao"
            }
        ]
    },
    {
        group: 2,
        label: "Chọn cấp Huyện",
        key: 'QUAN_HUYEN',
        value: [
            {
                selected: true,
                value: '0',
                text: "Tất cả đơn vị cấp huyện"
            },
            {
              value: 96351,
              text: "UBND thành phố Vị Thanh"
            },
            {
                  value: 96701,
                  text: "UBND Thành phố Ngã Bảy"
            },
            {
                  value: 96980,
                  text: "UBND Thị xã Long Mỹ"
            },
            {
                  value: 97260,
                  text: "UBND huyện Vị Thủy"
            },
            {
                  value: 97565,
                  text: "UBND huyện Long Mỹ"
            },
            {
                  value: 100349,
                  text: "UBND huyện Phụng Hiệp "
            },
            {
                  value: 100907,
                  text: "UBND huyện Châu Thành "
            },
            {
                  value: 101465,
                  text: "UBND huyện Châu Thành A "
            }
        ]
    },
    {
      group: 3,
      label: "Chọn cấp Xã",
      key: 'XA_PHUONG',
      value: [
        {
          selected: true,
          value: '0',
          text: "Tất cả đơn vị cấp xã"
        },
        {
          value: 97901,
          text: "Cấp xã thành phố Vị Thanh"
        },
        {
              value: 98180,
              text: "Cấp xã thành phố Ngã Bảy"
        },
        {
              value: 98501,
              text: "Cấp xã thị xã Long Mỹ"
        },
        {
              value: 98801,
              text: "Cấp xã huyện Vị Thủy"
        },
        {
              value: 99203,
              text: "Cấp xã huyện Long Mỹ"
        },
        {
              value: 100628,
              text: "Cấp xã huyện Phụng Hiệp"
        },
        {
              value: 101186,
              text: "Cấp xã huyện Châu Thành"
        },
        {
              value: 101744,
              text: "Cấp xã huyện Châu Thành A "
        }
      ]
    }
  ],
  sumKey: "govAgencyCode",
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
    },
  ],
  reportConfig: [
    {
      "selected": true,
      "value": "govAgencyName",
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
      "value": "onegateCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onlineCount",
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
      "value": "releaseCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onegateBetimesCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onegateOntimeCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onegateOvertimeCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onlineBetimesCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onlineOntimeCount",
      "text": "",
      "align": "center"
    },
    {
      "selected": true,
      "value": "onlineOvertimeCount",
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
      "value": "note",
      "text": "",
      "align": "center"
    }
  ],
  selection: [
    {
        "key": "domainCode",
        "value": "",
        "compare": "="
    }
  ],
  merge: ["govAgencyCode", "domainCode"],
  sort: "govAgencyName",
  statistics: true,
  mappingData: []
}