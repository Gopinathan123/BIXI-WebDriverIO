class ApplyDebit
{
    get acholder_txt()
    {
        return $("//input[@name='holder_name']");
    }
    get dob_txt(){
        return $("//input[@name='dob']")
    }
    get pan_txt(){
        return $("//input[@name='pan']")
    }
    get mobile_txt(){
        return $("//input[@name='mob']")
    }
    get accno_txt(){
        return $("//input[@name='acc_no']")
    }
    get subt_btn()
    {
        return $("//input[@name='dbt_crd_submit']")
    }
    async applydebit_action(accHldnm, dob, pan, mob, accno){
        await this.acholder_txt.setValue(accHldnm);
        await this.dob_txt.setValue(dob);
        await this.pan_txt.setValue(pan);
        await this.mobile_txt.setValue(mob);
        await this.accno_txt.setValue(accno);
        await this.subt_btn.click();
    }
}
export default new ApplyDebit();