//import { Key } from 'webdriverio'

describe("It will perform right click on the element",()=>{
    it("should perform the right click", async()=>{
        await browser.url("https://www.google.com");
        await browser.maximizeWindow();
        const elegmail=await $("//a[@aria-label='Gmail (opens a new tab)']");
        await elegmail.click({button:'right', x:10, y:10, skipRelease:true});
        //await browser.keys([Key.Ctrl, 'w']);
        await browser.pause(5000);
    })
})