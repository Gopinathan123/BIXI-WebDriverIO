describe('OrangeHRM Login Page',()=>{
    it('Should Open the login page',async()=>
    {
        await browser.url("https://opensource-demo.orangehrmlive.com")
        await browser.maximizeWindow();
        await browser.$("//input[@name='username']").setValue("Admin");
        await browser.$("//input[@name='password']").setValue("admin123");
        await browser.$("//button[@type='submit']").click();
        await browser.pause(5000);
        await browser.$("//button[@type='button']/descendant::i[@class='oxd-icon bi-chevron-left']").click();
        await browser.$("//button[@type='button']/descendant::i[@class='oxd-icon bi-chevron-right']").click();
        await browser.$("//img[@class='oxd-userdropdown-img']").click();
        await browser.$("//a[@href='/web/index.php/auth/logout']").click();
        await browser.pause(3000);
    })
})