class Staffloginpage
{
    get stfId()
    {
        return $("//input[@name='staff_id']")
    }
    get stfpwd()
    {
        return $("//input[@name='password']")
    }
    get stfloginbtn(){
        return $("//input[@type='submit']")
    }
    async stfloginaction(staffid, staffpassword){
        await this.stfId.setValue(staffid);
        await this.stfpwd.setValue(staffpassword)
        await this.stfloginbtn.click();
    }
}
export default new Staffloginpage();