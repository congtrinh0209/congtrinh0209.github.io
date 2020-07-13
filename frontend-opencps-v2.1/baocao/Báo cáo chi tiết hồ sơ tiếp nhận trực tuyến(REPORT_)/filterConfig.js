
{
  api: "/o/rest/v2/dossiers?top=statistic&online=true",
  proxyApi: "/dossiers",
  exclusive: false,
  customize: true,
  
  groupIds: [
    {
      selected: true,
      value: '',
      text: "Tất cả"
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
              text: "Tất cả"
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
                text: "Tất cả"
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
          text: "Tất cả"
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
      "value": "dossierNo",
      "text": "Mã hồ sơ"
    },
    {
      "value": "serviceCode",
      "text": "Mã thủ tục"
    },
    {
      "selected": true,
      "value": "dossierName",
      "align": "left",
      "text": "Nội dung"
    },
    {
      "value": "govAgencyName",
      "text": "Cơ quan thụ lý"
    },
    {
      "value": "registerBookName",
      "text": "Sổ theo dõi"
    },
    {
      "selected": true,
      "value": "applicantName",
      "align": "left",
      "text": "Chủ hồ sơ"
    },
    {
      "value": "address",
      "text": "Địa chỉ"
    },
    {
      "value": "contactTelNo",
      "text": "Số điện thoại"
    },
    {
      "value": "contactEmail",
      "text": "Thư điện tử"
    },
    {
      "value": "delegateName",
      "text": "Người nộp hồ sơ"
    },
    {
      "value": "delegateTelNo",
      "text": "Điện thoại liên lạc"
    },
    {
      "value": "submitDate",
      "text": "Ngày gửi"
    },
    {
      "selected": true,
      "value": "receiveDate",
      "text": "Ngày tiếp nhận"
    },
    {
      "selected": true,
      "value": "dueDate",
      "text": "Ngày hẹn trả"
    },
    {
      "value": "extendDate",
      "text": "Ngày gia hạn"
    },
    {
      "value": "releaseDate",
      "text": "Ngày hoàn thành"
    },
    {
      "value": "finishDate",
      "text": "Ngày trả"
    },
    {
      "selected": true,
      "value": "dossierStatusText",
      "text": "Trạng thái"
    },
    {
      "value": "online",
      "text": "Trực tuyến"
    },
    {
      "value": "originDossierNo",
      "text": "Mã hồ sơ gốc"
    },   
    {
      "value": "dossierNote",
      "align": "left",
      "text": "Ghi chú xử lý"
    },
    {
      "value": "applicantNote",
      "align": "left",
      "text": "Ghi chú nộp."
    },
    {
      "value": "briefNote",
      "align": "left",
      "text": "Chi tiết nội dung"
    },
    {
      "selected": true,
      "value": "dossierOverdue",
      "text": "Hạn xử lý"
    }
  ]
}
