import OpenAcc from "../../pageobjects/Bixi_POM/OpenAcc_POM.js";
import homepage from "../../pageobjects/Bixi_POM/Homepage_POM.js";
import excel from "exceljs";

describe("Opening the account",()=>{
    it("Should be a New Account ",async()=>{
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/index.php")
        await browser.maximizeWindow();
        await homepage.home_openacc_action();
        //let map=new Map();
        const book=new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/OpenAcc.xlsx")
        let sht=book.getWorksheet("Openacc_data")
        //let data=sht.getRow(1).getCell(2).toString();
        let count=sht.rowCount;
        let col=sht.columnCount;
        for (let i = 1; i <= count; i++) {
            let key=sht.getRow(i).getCell(1).toString();
                let val=sht.getRow(i).getCell(2).toString();
                //map.get(key);
                console.log(key+"     "+val);
                //console.log(val);
            // for (let j = 1; j <=col ; j++) {
            //     let key=sht.getRow(i).getCell(1).toString();
            //     //let val=sht.getRow(i).getCell(2).toString();
            //     //map.get(key);
            //     console.log(key);
            //     //console.log(val);
            // }
            
        }
        //await OpenAcc.logic_action();
        await browser.pause(3000);

    })
})