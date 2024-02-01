describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow();
        let hover=await $("//div[@class='YBLJE4']/descendant::span[@class='_1XjE3T']/descendant::span[text()='Electronics']");
        await hover.moveTo();
        await $("//a[text()='Bluetooth Headphones']").click();
        let scrl=await $("//a[text()='NOYMI Waterproof Wireless earphone Standby 200hrs Suppo...']/following-sibling::div[text()='Purple, In the Ear']/ancestor::div[@class='_4ddWXP']");
        await scrl.scrollIntoView({ block: 'center', inline: 'center' });
        scrl.waitForDisplayed();
        await browser.pause(5000);
    })
})