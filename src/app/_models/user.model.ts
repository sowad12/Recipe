export class User{
    public email: string;
    public id: string;
    public _token: string;
    public _tokenExpirationDate: Date;
    constructor(email:string,id:string,token:string,expireTokenDate:Date){
     this.email=email;
     this.id=id;
     this._token=token;
     this._tokenExpirationDate=expireTokenDate
    }
    // get Token(){
    //     if(!this._tokenExpirationDate || new Date()>this._tokenExpirationDate){
    //         return null;
    //     }
    //     return this._token;
    // }
}