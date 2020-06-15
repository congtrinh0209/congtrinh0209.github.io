
{
  api: "/o/rest/statistics/feedetail?paymentStatus=-1&type=service",
  exclusive: false,
  customize: true,
  groupIds: [
    {
      value: 45022,
      text: "Sở Tài nguyên và Môi trường Hậu Giang"
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
  groupBy: [
    {
       key: "domainCode",
       label: "Lĩnh vực",
       display: "domainName"
    },
    {
       key: "serviceCode",
       label: "Thủ tục",
       display: "serviceName"
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
      "selected": true,
      "value": "applicantName",
      "align": "left",
      "text": "Người đăng ký"
    },
    {
      "selected": true,
      "value": "address",
      "align": "left",
      "text": "Địa chỉ người nộp"
    },
    {
      "selected": true,
      "value": "paymentDate",
      "text": "Ngày thu"
    },
    {
      "selected": true,
      "value": "paymentFee",
      "text": "Lệ phí"
    },
    {
      "selected": true,
      "value": "paymentAmount",
      "text": "Phí"
    },
    {
      "selected": true,
      "value": "totalAmount",
      "text": "Tổng"
    },
    {
      "selected": true,
      "value": "note",
      "text": "Diễn giải"
    }
  ]
}

