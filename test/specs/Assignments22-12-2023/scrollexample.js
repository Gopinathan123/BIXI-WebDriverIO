describe("Scroll",()=>{
    it("shold scroll to the perticular element",async()=>{
        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow();
        await $("//a[text()='Mobiles']").click();
        await $("//div[@cel_widget_id='acsux-widgets_content-grid_merchandised-search-11_row5-col3']").click();
    })
})