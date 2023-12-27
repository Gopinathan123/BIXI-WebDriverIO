import excel from "exceljs";

describe('excel',()=>{
    it('Read Data',async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/dynamicdata.xlsx")
        const sheet=book.getWorksheet('Sheet1')
        let data=sheet.getRow(2).getCell(1).toString();
        console.log(`9895twihgkig*(*#(@)) ${data}`);
    })
})