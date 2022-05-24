export class User {
    localId: string
    email: string;
    displayname?: string;
    photoUrl?: string

    constructor(localId:string, email: string, displayname?: string, photoUrl?: string) {
        this.localId = localId
        this.email = email;
        this.displayname = displayname;
        this.photoUrl = photoUrl;
    }
}