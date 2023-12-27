describe("Login",()=>
{
    it("should display home page", async()=>{
        await browser.url("https://demo.opensourcebilling.org/")
        await browser.maximizeWindow();
        await browser.$("//button[@name='btn_login']").click();
        await browser.$("//a[@class='introjs-button introjs-skipbutton']").click();
        let text=await browser.$$("//div[@class='first-three-invoices set-positions']");
        //await text.isDisplayed();
        // for (const iterator of object) {
            
        // }
        let alltxt=await text.map( async(ele)=>{return await ele.getText()})
        console.log((alltxt));

    })
})