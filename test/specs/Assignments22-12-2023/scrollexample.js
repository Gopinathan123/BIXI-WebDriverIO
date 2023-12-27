describe("Scroll",()=>{
    it("shold scroll to the perticular element",async()=>{
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
        await $("//a[text()='Mobiles']").click();
        
    })
})