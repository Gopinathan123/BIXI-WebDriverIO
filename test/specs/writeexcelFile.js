import excel from "exceljs";

describe('excel',()=>{
    it('Write Data',async()=>{
        const book=new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/dynamicdata.xlsx")
        const sheet=book.addWorksheet('Sheet3')
        sheet.addRow(1).getCell(1).value='abc';
        sheet.addRow(2).getCell(1).value='xyz';
        sheet.addRow(1).getCell(2).value='abc1';
        sheet.addRow(2).getCell(2).value='xyz1';
        await book.xlsx.writeFile("./test/testdata/dynamicdata.xlsx")


        
    })
})