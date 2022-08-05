import removeAllNonNumericChars from "../utils/remove-all-non-numeric-chars.function";

// While user types, format the value
export function maskHourMinute(value: number): string {
    let valueStr: string = removeAllNonNumericChars(value).substring(0, 4);

    let stream: string = "";
    let i = 0;
    
    for(let x of valueStr.split("")) {
        if(i === 0) {
            if(!(["0", "1", "2"].includes(x))) {
                break;
            }
        }

        if(i === 1) {
            const numericValue = parseFloat(valueStr.substring(0, 2));
            if(numericValue > 23) {
                break;
            }
        }

        if(i === 2) {
            if(parseFloat(valueStr[i]) > 5) {
                break;
            }

            stream += ":"
        }

        if(i === 3) {
            if(parseFloat(valueStr[i]) > 9) {
                break;
            }
        }

        stream += x;
        i++
    }

    return stream;
}

// Get formated value (secured by the mask function) and turn into another value
export function unMaskHourMinute(value: string): number | string {
    if(value.length === 0) {
        return "";
    }

    const splitedTime = value.split(":");
    if(splitedTime.length === 1) {
        return parseFloat(splitedTime[0])
    }

    return (parseInt(splitedTime[0]) + (parseInt(splitedTime[1])/(value.length === 4 ? 6 : 60)));

}