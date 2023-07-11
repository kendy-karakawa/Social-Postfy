
export class User {
    constructor(
        private _name: string,
        private _email: string,
        private _password: string,
        private _avatar: string,
        private readonly _createdAt: Date = new Date()
    ){}

    // public set name(name: string){
    //     this._name = name
    // }

    // public set email(email: string){
    //     this._email = email
    // }

    // public set password(password: string){
    //     this._password = password
    // }

    // public set avatar(avatar: string){
    //     this._avatar = avatar
    // }

}