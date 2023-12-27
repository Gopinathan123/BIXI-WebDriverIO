import stfLogin from "../../pageobjects/Bixi_POM/stfLogin_POM.js";
import homePage from "../../pageobjects/Bixi_POM/Homepage_POM.js";
import stafprofile from "../../pageobjects/Bixi_POM/staffprofile_POM.js";
import Approvepg from "../../pageobjects/Bixi_POM/Approvepage_POM.js";
import { expect } from "chai";
//import { waitForDisplayed } from "webdriverio/build/commands/element";

describe("validate approve pending Data with active customer Data",()=>{
    var splt;
    it("should validate Customer Data in Pending customer",async()=>{
        
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/index.php");
        await browser.maximizeWindow();
        await homePage.home_stflog_action();
        await stfLogin.stfloginaction(210001,"password");
        await stafprofile.stf_approve_action();
        await Approvepg.apprv_appnumtxt_action("132691097")
        await Approvepg.apprv_srchbtn_action();
        let details=await browser.$$("//div[@class='pending_customers_container']/descendant::tr[2]").map((ele)=>{return ele.getText()});
        console.log(details);
        let s=details.toString();
        splt=s.split(" ");
        console.log(splt[5]);
    })
    it("should validate Customer Data in approve customer",async()=>{
        // await browser.url("http://rmgtestingserver/domain/Online_Banking_System/index.php");
        // await browser.maximizeWindow();
        // await homePage.home_stflog_action();
        // await stfLogin.stfloginaction(210001,"password");
        await stafprofile.stf_homebtn_action();
        await stafprofile.stf_vwactcus_action()
        let actvdet=await $$("//div[@class='active_customers_container']").map((ele1)=>{return ele1.getText()});
        console.log(actvdet);
        // actvdet.forEach(element => {
            
        //     expect(splt).to.be.contains(element,"Not Matched")
        //     //return element;//console.log(element);
        // });
        for (let i = 0; i< actvdet.length; i++) {
            console.log(actvdet[i]); 
            expect(splt[5]).not.to.be.contains(actvdet[i],"Value is Matching")
        }
        
    })
})