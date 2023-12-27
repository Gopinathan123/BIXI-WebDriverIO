import stfLogin from "../../pageobjects/Bixi_POM/stfLogin_POM.js";
import homePage from "../../pageobjects/Bixi_POM/Homepage_POM.js";
import stafprofile from "../../pageobjects/Bixi_POM/staffprofile_POM.js";
import Approvepg from "../../pageobjects/Bixi_POM/Approvepage_POM.js";
import { expect } from "chai";

describe("stfloginimp", ()=>{
    it("should login to staff page", async()=>{
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/index.php")
        await browser.maximizeWindow();
        //await $("//a[text()='Staff Login']").click();
        await homePage.home_stflog_action();
        await stfLogin.stfloginaction(210001, "password");
        //let exp_title=""
        let title=await browser.getTitle();
        expect(title).to.be.equal("Staff Home", `${title} is same as expexted`);
        await stafprofile.stf_approve_action();
        await Approvepg.apprv_appnumtxt_action("472051585");
        await Approvepg.apprv_srchbtn_action();
        await Approvepg.apprv_apprvbtn_action();
        let str=await browser.getAlertText();
        console.log(str);
        let match=str.replace(/[^0-9]/g, "");
        if(match)
        {
            console.log("/n/n"+match);
        }
        await browser.acceptAlert();
        await browser.pause(5000);
        await stafprofile.stf_logoutbtn_action()
        await browser.pause(4000);

    })
})
