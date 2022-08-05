function generateIndexableArray(value: string): string[] {
    const set = new Set<string>();

    for(let i = 0; i < value.length; i++) {
        set.add(
            value.substring(0, value.length - i).trim().toLowerCase()
        );
    }

    const splits = value.split(" ");
    if(splits.length > 1) {
        splits.shift();
        generateIndexableArray(splits.join(" ")).forEach(x => {
            set.add(x);
        });
    }

    return [...set];
}

export default generateIndexableArray