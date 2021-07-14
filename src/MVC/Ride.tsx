//2.    Add a part
class Ride {
    public id: number
    public startTime: Date
    public finishTime: Date
    public startLocation: string
    public finishLocation: string
    public distance: number
    public title: string
    public duration: number
    public speed: number
    private completed: boolean

    public constructor(newId: number, newStatus: boolean, newStart: Date, newFinish: Date, newFrom: string, newTo: string, newDistance: number) {
        this.id = newId
        this.completed = newStatus
        this.startTime = newStart
        this.finishTime = newFinish
        this.startLocation = newFrom
        this.finishLocation = newTo
        this.distance = newDistance
        this.title = this.getTitle()
        this.duration = this.calcDuration(newStart, newFinish)
        this.speed = this.calcSpeed()
    }
    //lets use this for displaying in the user view
    public getLocaleDate(date: Date) : string {
        return date.toLocaleDateString()
    }

    //instead of crating two different functions, I just pass the needed dates as arguments and it returns time -- nice
    public getLocaleTime (date: Date) : string {
        return date.toLocaleTimeString()
    }

    public getTitle() : string {
        return `${this.startLocation} - ${this.finishLocation}`
    }
    //will hook this up later for the start ride button
   /*  private setStartTime(setTime: SetTime) {
        const newValue = new Date()
        this.startTime = newValue
    }
    //will hook this up later with the stop ride button to capture arrival time
    private setArrivalTime(setTime: SetTime) {
        const newValue = new Date()
        this.finishTime = newValue
    } */
    //in seconds
    public calcDuration(start: Date, finish: Date) : number {
        let result: number = 0
        let duration: number = (finish.getTime() - start.getTime()) / 1000
        return result += duration
    }

    //need to test it to see if 3600 is correct for hours
    public calcSpeed(): number {
        let result: number = 0
        let speed: number = this.distance / (this.duration / 3600)
        speed = parseFloat(speed.toFixed(2))
        return result += speed
    }
    //test
  /*   public toString() {
        return `${this.getLocaleDate(this.startTime)} from ${this.getLocaleTime(this.startTime)} until ${this.getLocaleTime(this.finishTime)}: ${this.title}, ${this.distance} km for ${this.formatDuration()} at ${this.speed} km/h`
    } */
}

export default Ride