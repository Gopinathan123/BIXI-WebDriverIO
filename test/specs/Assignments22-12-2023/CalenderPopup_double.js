describe("Double Calender popup",()=>{
    it("should validate the double calender Popup", async()=>{
        await browser.url("https://www.in.cheapflights.com/")
        await browser.maximizeWindow();
        
        await browser.$("//input[@aria-controls='flight-origin-smarty-input-list']").setValue("Chennai");
        await browser.$("//span[text()='Chennai, Tamil Nadu, India']").click();
        await browser.$("//input[@aria-controls='flight-destination-smarty-input-list']").setValue("Bengaluru");
        await browser.$("//span[text()='Bengaluru, Karnataka, India']").click();
        // let strtday='Sat'; 
        // let strtmonth=12
        // let strtdate=30;
        await browser.$("//span[@aria-label='Start date calendar input']").click();
        //await browser.$("//span[text()='"+strtday+" "+strtdate+"/"+strtmonth+"']").click();
        await browser.$("//div[@aria-label='Monday 15 January, 2024']").click();
        await browser.$("//span[@aria-label='End date calendar input' ]").click();
        await browser.$("//div[@aria-label='Friday 26 January, 2024']").click();
        await browser.$("//button[@type='submit']").click();
        await browser.pause(8000);
    })
})