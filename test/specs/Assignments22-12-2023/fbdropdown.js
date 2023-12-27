describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.facebook.com/");
        await browser.$("//a[@data-testid='open-registration-form-button']").click();
        await $("//input[@name='firstname']").setValue("abc");
        await $("//input[@name='lastname']").setValue("xyz");
        await $("//input[@name='reg_email__']").setValue("abc@xyz.com");
        await $("//input[@autocomplete='new-password']").setValue("abc@123")
        let ele_day=await $$("//select[@title='Day']").map((ele)=>{return ele.getText()})
        let str=ele_day.toString();
        //console.log(str);
        let spt=str.split('\n');
        console.log(spt);
        let ele_mon=await $$("//select[@title='Month']").map((elemon)=>{return elemon.getText()})
        console.log(ele_mon);
        let s=ele_mon.toString();
        let spl=s.split('\n');
        console.log(spl[6]);
        let year=(await $$("//select[@title='Year']")).map((eleyr)=>{return eleyr.getText()})
        let s1=year.toString();
        console.log(s1);
        let sp=s1.split('\n')
        console.log(sp);
    })
})