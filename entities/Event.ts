export class Event {
    constructor(public name: string, public organizator:string,
        public time: ITime, public location: ILocation, public id?: string) { }
}

interface ITime {
    day:string,
    date:string,
    month: string,
    from: string,
    to: string
}

interface ILocation {
    street:string,
    postCode:string,
    city: string,
}
