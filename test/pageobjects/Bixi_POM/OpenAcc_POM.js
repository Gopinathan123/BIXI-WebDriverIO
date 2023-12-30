class OpenAcc{
    get name_txt(){
        return $("//input[@name='name']")
    }
    get gender_dd(){
        return $("//select[@name='gender']")
    }
    get mob_txt(){
        return $("//input[@name='mobile']")
    }
    get mail_txt(){
        return $("//input[@name='email']")
    }
    get lanlin_txt(){
        return $("//input[@name='landline']")
    }
    get dob_txt(){
        return $("//input[@name='dob']")
    }
    get pan_txt(){
        return $("//input[@name='pan_no']")
    }
    get citinum_txt(){
        return $("//input[@name='citizenship']")
    }
    get hmaddr_txt(){
        return $("//input[@name='homeaddrs']")
    }
    get offaddr_txt(){
        return $("//input[@name='officeaddrs']")
    }
    get country_dd(){
        return $("//input[@name='country']")
    }
    get state_dd(){
        return $("//select[@name='state']")
    }
    get city_dd(){
        return $("//select[@name='city']")
    }
    get pin_txt(){
        return $("//input[@name='pin']")
    }
    get arealoc_txt(){
        return $("//input[@name='arealoc']")
    }
    get nomineename_txt(){
        return $("//input[@name='nominee_name']")
    }
    get nomineeaccno_txt(){
        return $("//input[@name='nominee_ac_no']")
    }
    get acctyp_dd(){
        return $("//input[@name='acctype']")
    }
    get sbmt_btn(){
        return $("//input[@name='submit']")
    }
    async logic_action(nme, gndr,mob,mail,dob,pan,citnum,hmadrs,offadrs,state,city,pin,araloc,nomninm,nomniacno,acctyp){
        await this.name_txt.setValue(nme);
        await this.gender_dd.selectByVisibleText(gndr);
        await this.mob_txt.setValue(mob);
        await this.mail_txt.setValue(mail);
        //await this.lanlin_txt.setValue(lnlin);
        await this.dob_txt.setValue(dob);
        await this.pan_txt.setValue(pan);
        await this.citinum_txt.setValue(citnum);
        await this.hmaddr_txt.setValue(hmadrs);
        await this.offaddr_txt.setValue(offadrs);
        await this.state_dd.selectByVisibleText(state);
        await this.city_dd.selectByVisibleText(city);
        await this.pin_txt.setValue(pin);
        await this.arealoc_txt.setValue(araloc);
        await this.nomineename_txt.setValue(nomninm);
        await this.nomineeaccno_txt.setValue(nomniacno);
        await this.acctyp_dd.setValue(acctyp);
        await this.sbmt_btn.click();
    }

}
export default new OpenAcc();