function differenceInYears(d1: Date, d2: Date) {
    if(d1.getTime() === d2.getTime()) {
        return 0;
    }

    const futureDate = d1.getTime() > d2.getTime() ? d1 : d2;
    const pastDate = d1 === futureDate ? d2: d1;
    let difference = 0;

    if(futureDate.getFullYear() === pastDate.getFullYear()) {
        return (futureDate.getTime() - pastDate.getTime())/(new Date(`${futureDate.getFullYear()}-12-31`).getTime() - new Date(`${futureDate.getFullYear()}-01-01`).getTime());
    }

    for(let year = pastDate.getFullYear(); year <= futureDate.getFullYear(); year++) {
        if(year === pastDate.getFullYear()) {
            difference += (new Date(`${year}-12-31`).getTime() - pastDate.getTime())/(new Date(`${year}-12-31`).getTime() - new Date(`${year}-01-01`).getTime());
        }
        else if(year === futureDate.getFullYear()) {
            difference += (futureDate.getTime() - new Date(`${year}-01-01`).getTime())/(new Date(`${year}-12-31`).getTime() - new Date(`${year}-01-01`).getTime());
        }
        else {
            difference++;
        }
    }

    return difference;
}

export default differenceInYears