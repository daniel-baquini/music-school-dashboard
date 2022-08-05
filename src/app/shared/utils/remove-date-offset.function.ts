function removeDateOffset(date: Date): Date {
    date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
    return date;
}

export default removeDateOffset