describe('Google Home Page', ()=>{
    it('Should OPen the Google Home Page', async()=>{
        await browser.url('https://www.google.com');
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('Google');
        await browser.$('//textarea[@jsname="yZiJbe"]').setValue('mobile');
        await browser.keys('Enter');
    })
})