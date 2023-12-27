describe("Single Calender Popup",()=>{
    it("should handle single calender Popup", async()=>{
        await browser.url("https://www.abhibus.com/");
        await browser.maximizeWindow();
        await browser.pause(3000)
        await browser.$("//input[@placeholder='From Station']").click();
        let from_place='Chennai';
        await browser.$("//div[text()='"+from_place+"']").click();
        await browser.$("//input[@placeholder='To Station']").click();
        let to_place='Bangalore';
        await browser.$("//div[text()='"+to_place+"']").click();
        // let date=28;
        // let month=12
        // let year=2023;
        let book_date=27;
        await browser.$("//input[@placeholder='Onward Journey Date']").click()
        //await browser.$("//input[@value='"+date+"/"+month+"/"+year+"']").click();
        await browser.$("//div[@class='container month ']/following-sibling::div[@class='container date ']/descendant::span[@data-date='"+book_date+"']").click();
        await browser.$("//div[@id='search-button']").click();
        await browser.pause(5000);

    })
})