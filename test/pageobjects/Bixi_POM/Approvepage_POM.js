class ApprovePage
{
    get app_Num_txtfld()
    {
        return $("//input[@name='application_no']");
    }
    get srch_btn()
    {
        return $("//input[@name='search_application']");
    }
    get apprv_btn()
    {
        return $("//input[@name='approve_cust']");
    }
    async apprv_appnumtxt_action(appnum)
    {
        await this.app_Num_txtfld.setValue(appnum);
    }
    async apprv_srchbtn_action()
    {
        await this.srch_btn.click();
    }
    async apprv_apprvbtn_action()
    {
        await this.apprv_btn.click()
    }
}
export default new ApprovePage();