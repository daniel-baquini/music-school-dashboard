const ALLOWED_CHARACTERS: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function removeAllNonNumericChars(value: any): string {
    let valueStr: string = `${value}`.trim();
    
    let result: string = "";
    valueStr.split("").forEach(x => {
        if(ALLOWED_CHARACTERS.includes(x)) {
            result += x;
        }
    });

    return result;
}

export default removeAllNonNumericChars