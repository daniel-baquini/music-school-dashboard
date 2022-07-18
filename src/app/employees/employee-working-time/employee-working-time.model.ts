class EmployeeWorkingTime {

    private _intervals: number[][] = [];

    constructor(private strWorkingTime: string) {
        const strIntervals: string[] = strWorkingTime.split(";");
        strIntervals.forEach(x => {
            this._intervals.push(this.parseInterval(x));
        });

        this._intervals.sort((a, b) => a[0]-b[0]);
    }

    get strIntervals(): string {
        let strBuilder: string = "";
        this._intervals.forEach(x => {
            strBuilder += `${this.parseTimeToStr(x[0])} - ${this.parseTimeToStr(x[1])}; `;
        })

        return strBuilder.endsWith(";") ? strBuilder.substring(0, strBuilder.length - 1) : strBuilder;
    }

    private parseTimeToStr(time: number): string {
        const hours = Math.floor(time)
        return hours + ":" + `${Math.floor((time - hours)*60)}`.padStart(2, "0");
    }

    private parseInterval(strInterval: string): number[] {
        const strTimes = strInterval.split("-");
        if(strTimes.length !== 2) {
            throw new Error("Cada intervalo deve possuir, exatamente, dois horários.");
        }

        const interval: number[] = [];
        strTimes.forEach(x => {
            const times = x.split(":");
            if(times.length !== 2) {
                throw new Error("Os horários devem estar no formato \"HH:mm\".");
            }

            interval.push(
                parseInt(times[0] ?? 0) + ((parseInt(times[1]) ?? 0)/60)
            )
        });

        return interval[0] > interval[1] ? [interval[1], interval[0]] : interval;
    }

}

export default EmployeeWorkingTime