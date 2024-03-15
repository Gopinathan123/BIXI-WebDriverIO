describe("handle the popup", ()=>{
    it("should handle the notication popup", async()=>{
        // await browser.url("https://www.uber.com/in/en/");//uber
        await browser.url("https://www.bennish.net/web-notifications.html")
        await browser.maximizeWindow();
        // const ele1=await browser.$("//div[@class='css-RvwPE']//*[name()='svg']//*[name()='title' and .='Navigate right up']"); // uber
        await $("//button[@onclick='notify.authorize()']").click();
        await browser.pause(3000);
        await browser.refresh();
        // await ele1.waitForClickable({reverse:true, timeout:5000});
        // await ele1.click();
        // await browser.$("//ul[@aria-label='Menu']/li/div[contains(.,'Bengaluru')]").click();
        await $("//button[@onclick='notify.authorize()']").click();
        await browser.pause(5000);
    })
})