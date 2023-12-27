//import { waitForStable } from "webdriverio/build/commands/element.js";
import signuppg from "../../pageobjects/Fb_POM/signup_POM.js";
import { expect } from "chai";

describe("Signup Page",()=>{
    it("Signup as a new customer",async()=>{
        await browser.url("https://www.facebook.com/")
        await browser.maximizeWindow();
        await $("//a[text()='Create new account']").click();
        await signuppg.txtbx_action("abc","xyz",9787654521, "abc@123*");
        await signuppg.daylst_action(5)
        await signuppg.mnthlst_action("Jul")
        await signuppg.yrlst_action(1987)
        await signuppg.mlerdbtn_action();
        await signuppg.signupbtn_action();
        await browser.pause(10000);
        let exptxt="We require everyone to use the name that they use in everyday life – what their friends call them – on Facebook. Learn more about our name policies.";
        let acttxt=await $("//div[@id='reg_error_inner']").getText();
        console.log(exptxt);
        expect(exptxt).to.be.equals(acttxt,"Not matched with the Expexpected text");
    })
})