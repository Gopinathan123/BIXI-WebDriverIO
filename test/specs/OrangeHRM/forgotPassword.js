describe("Forgot Password page", ()=>
{
    it("should display the forgot password page",async ()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/");
        await browser.maximizeWindow();
        // await browser.$("//input[@name='username']").setValue("Admin");
        // await browser.$("//input[@name='password']").setValue("admin123");
        // await browser.$("//button[@type='submit']").click();
        await browser.$("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click();
        await browser.pause(3000);
        await browser.$("//input[@name='username']").setValue("Admin");
        await browser.$("//button[@type='submit']").click();
        let ele = await browser.$$("//p[@class='oxd-text oxd-text--p']")
        await ele.isDisplayed()
        //.map((ele)=>{ele.getText()})
        //let alltext=await txt.map(async(ele)=> {return await ele.getText()})
        
        // console.log(alltext);
        // console.log(txt[0].getText());
        await browser.pause(3000);


    })
})