const makeSets = arr => {
    const sets = [[]];
    for (const el of arr) {
        const prevSets = sets.slice();
        for (const set of prevSets) {
            sets.push([...set, el])
        }
    }
    return sets;
}

// console.log(makeSets([1, 2, 3, 4, 5]));
console.log(makeSets(Array(25).fill(0).map((_, i) => i)).length);
