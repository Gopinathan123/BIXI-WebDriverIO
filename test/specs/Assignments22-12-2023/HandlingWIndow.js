import { expect } from "chai";
describe('Handling different window/tab',()=>{
    it('switch to other window',async()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com")
        await browser.maximizeWindow()
        await $("//a[text()='OrangeHRM, Inc']").click();
        await browser.pause(3000);
        await browser.switchWindow("https://www.orangehrm.com/");
        await $("//a[@class='nav-link-hed' and text()='Resources']").moveTo();
        await $("//a[text()='eBooks']/ancestor::li[@class='sub-menu-title menu-title-row pt-2 pb-2']").click();
        let exptxt="Workplace Flexibility: The Future of Work is Flexibl";
        let text=await $("//div[@class='ebook-details']/descendant::h3[text()='Workplace Flexibility: The Future of Work is Flexible']").getText();
        console.log(text);
        expect(exptxt).to.be.equals(text,"Not matching with exepected Text");
        await browser.closeWindow();
        await browser.pause(3000);
        await browser.switchWindow("https://opensource-demo.orangehrmlive.com");
        await browser.pause(3000);
    })
})