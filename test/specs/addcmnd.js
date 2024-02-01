browser.addCommand('getURL Title',(customVar)=>{
    return{
        url:this.getUrl(),
        customVar:customVar
    }
})