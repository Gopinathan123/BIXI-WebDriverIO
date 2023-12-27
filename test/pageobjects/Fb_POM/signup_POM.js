class signup{
    get frstnm_txt(){
        return $("//input[@name='firstname']")
    }
    get lastnm_txt(){
        return $("//input[@name='lastname']")
    }
    get email_txt(){
        return $("//input[@name='reg_email__']")
    }
    get nwpwd_txt(){
        return $("//input[@autocomplete='new-password']")
    }
    get day_lst(){
        return $("//select[@title='Day']")
    }
    get mnth_lst(){
        return $("//select[@title='Month']")
    }
    get yr_lst(){
        return $("//select[@title='Year']")
    }
    get fmle_rdbtn(){
        return $("//label[text()='Female']")
    }
    get mle_rdbtn(){
        return $("//label[text()='Male']")
    }
    get cutm_rdbtn(){
        return $("//label[text()='Custom']")
    }
    get signup_btn(){
       return $("//button[@name='websubmit']")
       
    }
    async txtbx_action(frstnm, lstnm, mobnumormail, nwpwd)
    {
        await this.frstnm_txt.setValue(frstnm);
        await this.lastnm_txt.setValue(lstnm);
        await this.email_txt.setValue(mobnumormail);
        await this.nwpwd_txt.setValue(nwpwd);
    }
    async daylst_action(val){
        await this.day_lst.selectByVisibleText(val)
    }
    async mnthlst_action(val){
        await this.mnth_lst.selectByVisibleText(val)
    }
    async yrlst_action(val){
        await this.yr_lst.selectByVisibleText(val)
    }
    async fmlerdbtn_action(){
        await this.fmle_rdbtn.click()
    }
    async mlerdbtn_action(){
        await this.mle_rdbtn.click()
    }
    async cutmrdbtn_action(){
        await this.cutm_rdbtn.click()
    }
    async signupbtn_action(){

        await this.signup_btn.click()
    }
}
export default new signup()