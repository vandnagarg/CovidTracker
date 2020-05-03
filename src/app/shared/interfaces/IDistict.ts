export interface IDistrict{
    districtName: string ,
    active : number,
    confirmed : number,
    deaths : number,
    recovered : number,
}

export class District{
    districtName : string
    active : number
    confirmed : number
    deaths : number
    recovered : number

    constructor(name?:string,district?){
        this.districtName = name,
        this.active = district.active
        this.confirmed = district.active
        this.recovered= district.active
        this.deaths = district.active
    }
}

