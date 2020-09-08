{
        docDefinition: {
        pageOrientation: "portrait",
        content: [
            {
                columns: [
                    {
                        width: 200,
                        style: "title",
                        text: [
                          {text: "BỘ QUỐC PHÒNG\n"},
                          {text: "BỘ PHẬN TIỆP NHẬN VÀ TRẢ KẾT QUẢ\n"},
                          {text: "--------------------------\n"}
                        ]
                    },
                    {
                        width: 250,
                        style: "title",
                        text: [
                            {text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\n"},
                            {text: "Độc lập - Tự do - Hạnh phúc\n"},
                            {text: "---------------------------\n"},
                            {text: "Hà Nội, ngày " + new Date().getDate() + " tháng " + (new Date().getMonth() + 1) +" năm " + new Date().getFullYear(), style: "ngayThangNam"}
                        ]
                    }
                ]
            },
            {
                text: [
                    {text: "TỔNG HỢP KẾT QUẢ ĐÁNH GIÁ CÁN BỘ\n"},
                    {text: "Từ ngày [$fromStatisticDate$] đến ngày [$toStatisticDate$]" + "\n", fontSize: 11}
                ], 
                margin: [0, 20],
                style: "headerTitle"
            },
            {
                style: "tableExample",
                table: {
                    widths: [20, "*", 35, 35, 35, 35],
                    headerRows: 1,
                    body: [
                        [
                            {
                                text: "STT",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle" 
                            },
                            {
                                text: "Cán bộ",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Số bình chọn",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Số rất hài lòng",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Số hài lòng",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Số không hài lòng",
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            }
                        ],
                        [
                            {
                                text: "(1)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(2)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(3)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(4)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(5)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(6)",
                                alignment: "center",
                                fontSize: 8
                            }
                        ],
                        "[$report$]"
                    ]
                },
                margin: [0, 0, 0, 20]
            },
            {
                columns: [
                    {
                        width: "*",
                        text: [
                          {text: "Nơi nhận:", bold: true }
                        ]
                    },
                    {
                        width: 150,
                        style: "title",
                        text: "THỦ TRƯỞNG ĐƠN VỊ"
                    }
                ]
            },
            {
                columns: [
                    {
                        width: "*",
                        text: ""
                    },
                    {
                        width: 150,
                        style: "titleSub",
                        text: "(Ký và ghi rõ họ tên)"
                    }
                ]
            }
        ],
        styles: {
            ngayThangNam: {
                fontSize: 10,
                italics: true,
                bold: false,
                alignment: "right"
            },
            headerTitle: {
                alignment: "center",
                bold: true,
                fontSize: 13
            },
            borderHeader: {
                alignment: "left"
            },
            title: {
                bold: true,
                alignment: "center"
            },
            titleSub: {
                fontSize: 10,
                italics: true,
                alignment: "center"
            },
            tdStyle: {
                fontSize: 10,
                margin: [0, 2]
            }
        },
        defaultStyle: {
            columnGap: 20,
            fontSize: 11
        }
    }
  }