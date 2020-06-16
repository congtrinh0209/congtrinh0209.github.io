{
    docDefinition: {
        pageOrientation: "landscape",
        content: [
            {
            text: [
                {text: "DANH SÁCH CÁC THỦ TỤC HÀNH CHÍNH THỰC HIỆN TIẾP NHẬN HỒ SƠ \n"},
                {text: "VÀ TRẢ KẾT QUẢ GIẢI QUYẾT QUA DỊCH VỤ BƯU CHÍNH CÔNG ÍCH NĂM 2019 \n"}
            ], 
                margin: [0, 10],
                style: "headerTitle"
            },
            {
            text: [
                {text: "Từ ngày [$fromStatisticDate$] đến ngày [$toStatisticDate$]" + "\n", fontSize: 11, style: "ngayThangNam"}
            ], 
                margin: [0, 0],
                style: "titleSub"
            },
            {
                style: "tableExample",
                table: {
                    widths: [20, "*", 35, 35, 35, 35, 35, 35],
                    headerRows: 2,
                    body: [
                        [
                            {
                                text: "\n\nSTT",
                                rowSpan: 3,
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "\n\nTên thủ tục hành chính",
                                rowSpan: 2,
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Tổng số hồ sơ tiếp nhận",
                                colSpan: 3,
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            "",
                            "",
                            {
                                text: "Tổng số hồ sơ trả kết quả",
                                colSpan: 3,
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            "",
                            ""
                        ],
                        [
                            "",
                            "",
                            {
                                text: "Nộp trực tiếp",         
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Nộp trực tuyến",        
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Qua bưu chính",      
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Trả trực tiếp",        
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Qua bưu chính",      
                                alignment: "center",
                                bold: true,
                                style: "tdStyle"
                            },
                            {
                                text: "Ghi chú",      
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
                            },
                            {
                                text: "(7)",
                                alignment: "center",
                                fontSize: 8
                            },
                            {
                                text: "(8)",
                                alignment: "center",
                                fontSize: 8
                            }
                        ],
                        "[$report$]"
                    ]
                },
                margin: [0, 0, 0, 5]
            },
            {
                margin: [0, 0, 0, 20],
            }
        ],
        styles: {
            ngayThangNam: {
                fontSize: 10,
                italics: true,
                alignment: "center"
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