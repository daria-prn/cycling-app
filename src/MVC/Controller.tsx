class Controller{
    public model : any

    constructor(model: any) {
        this.model = model
    }

    public getAllRides() {
        return this.model.getAllRides()
    }
    public addHistoryRide(startTime:any, finishTime:any, startLocation:any, finishLocation:any, distance:any){
        this.model.addRide(new Date(startTime), new Date(finishTime), startLocation, finishLocation, distance)
    }
	 public addCompletedRide(startTime : Date, finishTime: Date, startLocation: string, finishLocation: string, distance: number){
        this.model.addRide(startTime, finishTime, startLocation, finishLocation, distance)
    }
	
    public removeRide(targetRideId:any){
        this.model.removeRide(targetRideId)
    }
    public sort(event:number) {
        switch (event){
            case 1: {return this.model.sortByTitle("asc")}
            case 2: {return this.model.sortByTitle("desc")}
            case 3: {return this.model.sortByDuration("asc")}
            case 4: {return this.model.sortByDuration("desc")}
            case 5: {return this.model.sortBySpeed("asc")}
            case 6: {return this.model.sortBySpeed("desc")}
            case 7: {return this.model.sortByDistance("asc")}
            case 8: {return this.model.sortByDistance("desc")}
    }
}
    public getTotalDistance(array : Array <any>) {
        return this.model.getTotalDistance(array)
    }

    public getTotalDuration(array : Array <any>) {
        return this.formatDuration(this.model.getTotalDuration(array))
    }
    public getTotalRides(array : Array <any>) {
        return this.model.getTotalRidesCount(array)
    }

    public formatDuration  = function (seconds : number){
        let result: string = ''
        let hours: number = (seconds / 3600)
        let rhours: number = Math.floor(hours)
        let minutes: number = (hours - rhours) * 60
        let rminutes: number = Math.round(minutes)
        let rseconds : number = Math.round(seconds % 60);
        if (seconds > 3600) {
            result += `${rhours} h ${rminutes} min ${rseconds} s`
        } else if (3600 > seconds && seconds > 60) {
            result += `${rminutes} min ${rseconds} s`
        } else {
            result += `${rseconds} s`
        }
        return result
      } 
	  
	public load(){
        this.model.load()
    }    
    public save(){
        this.model.save()
    }

}
interface SetTime {
    timeStamp: Date;
}

export class CreateRideController{
    // public startTime: Date | undefined
    // public finishTime: Date | undefined
    // public startLocation: string | undefined
    // public finishLocation: string | undefined
    // public distance: number | undefined
    public model : any

    constructor(model: any){
        this.model = model
        this.model.startTime = undefined
        this.model.finishTime = undefined
        this.model.startLocation= undefined
        this.model.finishLocation= undefined
        this.model.distance = this.getRandomDistance(6)
    }
    public getRandomDistance(max: number ) {
        return Math.floor(Math.random() * Math.floor(max));
    } 
    public setStartTime(time: SetTime){
        this.model.startTime = time

    }
    public getRide(){
        return this.model
    }
    public setArrivalTime(){
        this.model.setArrivalTime()
    }
    public setTitle(){
        this.model.getTitle() 
    }
    public setStartLocation(location: string){
        this.model.startLocation = location
    }
    public setFinishLocation(location: string){
        this.model.finishLocation = location
    }
}
      
export default Controller