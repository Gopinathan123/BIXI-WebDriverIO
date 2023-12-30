import excel from "exceljs";

describe("", ()=>{
    it("",async()=>{
        //let map=new Map();
        const book=new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/OpenAcc.xlsx")
        const sht = book.getWorksheet('Openacc_data')
        let data=sht.getRow(1).getCell(2).toString();
        console.log(data);
        let count=sht.rowCount;
        console.log(count);
        // for (let i = 1; i <= count; i++) {
        //     for (let j = 0; j <=count ; j++) {
        //         let key=sht.getRow(i).getCell(j).toString();
        //         let val=sht.getRow(i).getCell(j).toString();
        //         map.get([key,val]);
        //     }
            
        // }
    })
})
