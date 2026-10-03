const dif = [17, -25, 0.5, true, false, "Hello", "World"];
const countsType ={
    number: 0,
    boolean: 0,
    string: 0
};
for ( const el of dif) {
    const typeel = typeof el;
    countsType[typeel]++;
}
console.dir(countsType);


const DynamicTypesCount = {};
for (const el of dif) {
    const typeel = typeof el;
    if (DynamicTypesCount[typeel] === undefined) {
        DynamicTypesCount[typeel] = 0;

    }
    {
        DynamicTypesCount[typeel]++;
    }
}
console.dir(DynamicTypesCount);