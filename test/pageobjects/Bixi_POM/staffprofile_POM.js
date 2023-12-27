class StaffProfilePage{
    get homebtn()
    {
        return $("//input[@type='button' and @name='home']")
    }
    get logoutbtn()
    {
        return $("//input[@type='button' and @name='logout_btn']")
    }
    get vw_actv_cus_btn()
    {
        return $("//input[@value='View Active Customer']")
    }
    get vw_cusacno_btn()
    {
        return $("//input[@value='View Customer by A/c No']")
    }
    get approve_btn()
    {
        return $("//input[@value='Approve Pending Account']")
    }
    get dlt_cus_btn()
    {
        return $("//input[@value='Delete Customer A/c']")
    }
    get credit_cus_btn()
    {
        return $("//input[@value='Credit Customer']")
    }
    async stf_homebtn_action()
    {
        await this.homebtn.click();

    }
    async stf_logoutbtn_action()
    {
        await this.logoutbtn.click();
        
    }
    async stf_vwactcus_action()
    {
        await this.vw_actv_cus_btn.click();
        
    }
    async stf_vwcusacno_action()
    {
        await this.vw_cusacno_btn.click();
        
    }
    async stf_approve_action()
    {
        await this.approve_btn.click();
        
    }
    async stf_delcus_action()
    {
        await this.dlt_cus_btn.click();
        
    }
    async stf_creditcus_action()
    {
        await this.credit_cus_btn.click();
        
    }
}
export default new StaffProfilePage();