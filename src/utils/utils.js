const addIfNotExist = (array, string) => {
    return array.find(s => s === string) ? array : [...array, { task: string, isCompleted: false }];
}
export {
    addIfNotExist
}