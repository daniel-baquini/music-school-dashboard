function hourStrToNumber(hourStr: string): number {
    const splitedTime = hourStr.split(":");
    return parseInt(splitedTime[0]) + (parseInt(splitedTime[1])/60);
}

export default hourStrToNumber