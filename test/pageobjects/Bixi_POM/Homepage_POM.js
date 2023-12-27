class HomePage
{
    get stflog_lnk()
    {
        return $("//a[text()='Staff Login']");
    }
    get home_lnk()
    {
        return $("//a[text()='Home']")
    }
    get open_acc_btn()
    {
        return $("//li[text()='Open Account']")
    }
    get appl_debit_card()
    {
        return $("//li[text()='Apply Debit Card']")
    }
    get cus_login()
    {
        return $("//li[text()='Login ']")
    }
    get cus_regis()
    {
        return $("//li[text()='Register']")
    }
    get interbanking()
    {
        return $("//a[@id='ebanking' and contains(text(),'Internet Banking')]")
    }
    get fund_trans()
    {
        return $("//li[text()='Fund Transfer']")
    }
    async home_stflog_action()
    {
        await this.stflog_lnk.click();
    }
    async home_homlnk_action(){
        await this.home_lnk.click();
    }
    async home_openacc_action(){
        await this.open_acc_btn.click();
        
    }
    async home_app_db_crd_action(){
        await this.appl_debit_card.click();
        
    }
    async home_cuslog_action(){
        await this.cus_login.click();
        
    }
    async home_cusres_action(){
        await this.cus_regis.click();
       
    }
    async home_ib_action(){
        await this.interbanking.click();
        
    }
    async home_ft_action(){
        await this.fund_trans.click();
    }
        
}
export default new HomePage();