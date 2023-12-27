import homePage from "../../pageobjects/Bixi_POM/Homepage_POM.js";
import applydebitcard from "../../pageobjects/Bixi_POM/ApplyDebit_POM.js";
import stafprofile from "../../pageobjects/Bixi_POM/staffprofile_POM.js";
import stfLogin from "../../pageobjects/Bixi_POM/stfLogin_POM.js";
import { expect } from "chai";

describe ("applying debit card", ()=>{
    it("should apply for the Debit card", async()=>{
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/index.php")
        await browser.maximizeWindow();
        await homePage.home_stflog_action();
        await stfLogin.stfloginaction(210001,"password");
        await stafprofile.stf_vwactcus_action();
        let arr=await $$("//div[@class='active_customers_container']/descendant::tr[39]").map((ele)=>{return ele.getText()});
        
        let s = arr.toString()
        let s1=s.split(" ");

        console.log(s1);
    
        expect(s1).to.be.an('array').length(12);
        expect(s1).to.be.contains("1987-12-12")

        await stafprofile.stf_logoutbtn_action();
        await homePage.home_homlnk_action();
        await homePage.home_app_db_crd_action();
        await applydebitcard.applydebit_action("Gopinatha", '12-12-1987', "gpas1234qwa",7898456512, 101234598721)
        expect(s1[6]).to.be.equal('1987-12-12', "DOB not Matching");
        await browser.pause(3000);
        let msg=await browser.getAlertText();
        console.log(msg);
        await browser.acceptAlert();
        await browser.pause(3000);
    })

})