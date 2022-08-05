import removeAllNonNumericChars from "../utils/remove-all-non-numeric-chars.function";

const DAY_QUANTITY_PER_MONTH = [
    31, 28, 31, 30,
    31, 30, 31, 31,
    30, 31, 30, 31
]

// While user types, format the value
export function maskYearMonthDay(value: number): string {
    let valueStr: string = removeAllNonNumericChars(value).substring(0, 8);

    if(valueStr.length >= 5) {
        const splitedDate = valueStr.split('')
        splitedDate.splice(4, 0, "/");
        valueStr = splitedDate.join("");
    }

    const month: number = parseFloat(valueStr.substring(5, 7));
    if(month > 12) {
        return valueStr.substring(0, 6);
    }

    if(valueStr.length >= 8) {
        const splitedDate = valueStr.split('')
        splitedDate.splice(7, 0, "/");
        valueStr = splitedDate.join("");
    }

    if(valueStr.length <= 9) {
        return valueStr;
    }

    const day: number = parseFloat(valueStr.substring(8, 10));
    const year: number = parseFloat(valueStr.substring(0, 4));
    if((year % 4) === 0 && month === 2 && day <= 29) {
        return valueStr;
    }
    
    if(day > DAY_QUANTITY_PER_MONTH[month - 1]) {
        return valueStr.substring(0, 9);
    }

    return valueStr;
}

// Get formated value (secured by the mask function) and turn into another value
export function unMaskYearMonthDay(value: string): Date {
    const [year, month, day] = [...value.split("/")];
    const timeOffset: number = new Date().getTimezoneOffset();

    return new Date(
        `${year}` + "-" +
        `${month}`.padStart(2, "0") + "-" +
        `${day}`.padStart(2, "0") + "T" +
        `${timeOffset > 0 ? "" : "-"}${Math.floor(timeOffset/60)}`.padStart(2, "0") + ":" +
        `${Math.abs(timeOffset) % 60}`.padStart(2, "0") + ":00.000Z"
    );

}