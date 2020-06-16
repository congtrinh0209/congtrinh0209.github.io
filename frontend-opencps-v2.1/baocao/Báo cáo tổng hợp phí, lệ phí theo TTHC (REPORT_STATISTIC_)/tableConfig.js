
{
  docDefinition: {
     pageOrientation: 'landscape',
     content: [
       {
             columns: [
                 {
                     width: 300,
                     style: "title",
                     text: [
                        {text: "[$groupIdsHeader$]\n"},
                       {text: "--------------------------------\n"}
                     ]
                 },
                 {
                     width: 100,
                      style: "title",
                     text: ''
                   },
                 {
                     width: 300,
                     style: "title",
                     text: [
                         {text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n"},
                         {text: "Độc lập - Tự do - Hạnh phúc\n"},
                         {text: "----------------------------\n"},
                         {text: "Hậu Giang, ngày " + new Date().getDate() + " tháng " + (new Date().getMonth() + 1) +" năm " + new Date().getFullYear(), style: "ngayThangNam"}
                     ]
                 }
             ]
       },
       {
         text: [
           {text: 'BÁO CÁO TỔNG HỢP PHÍ, LỆ PHÍ THEO THỦ TỤC HÀNH CHÍNH\n'},
           {text: "Đơn vị: [$groupIds$]\n", fontSize: 11},
           {text: "Từ ngày [$fromReceiveDate$] đến ngày [$toReceiveDate$]\n", fontSize: 11}
         ], 
         margin: [0, 20],
         style: 'headerTitle'
       },
       {
         style: 'tableExample',
         table: {
           widths: "[$tableWidth$]",
           body: ["[$report$]"]
         },
         margin: [0, 0, 0, 20]
       },
       {
         columns: [
           {
             width: '*',
             text: ''
           },
           {
             width: 150,
             style: 'title',
             text: 'NGƯỜI TIẾP NHẬN HỒ SƠ'
           }
         ]
       },
       {
         columns: [
           {
             width: '*',
             text: ''
           },
           {
             width: 150,
             style: 'titleSub',
             text: '(Ký và ghi rõ họ tên)'
           }
         ]
       }
     ],
     styles: {
       ngayThangNam: {
         fontSize: 10,
         italics: true,
         bold: false,
         alignment: 'center'
       },
       headerTitle: {
           alignment: 'center',
           bold: true,
           fontSize: 13
       },
       borderHeader: {
           alignment: 'left'
       },
       title: {
         bold: true,
         alignment: 'center',
         textTransform: 'uppercase'
       },
       titleSub: {
           fontSize: 10,
           italics: true,
           alignment: 'center'
       },
       tdStyle: {
         fontSize: 10
       },
       tableExample: {
          width: "100%" 
       }
     },
     defaultStyle: {
       columnGap: 20,
       fontSize: 11
     }
   } 
}
