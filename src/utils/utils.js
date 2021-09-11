const addIfNotExist = (array, string) => {
    return array.find(s => s.task === string) ? array : [...array, { task: string, isCompleted: false }];
}

const removeByIndex = (array, index) => {
    let newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
}

export {
    addIfNotExist,
    removeByIndex
}
