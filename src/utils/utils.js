const addIfNotExist = (array, string) => {
    return array.find(s => s.task === string) ? array : [...array, { task: string, isCompleted: false }];
}

const removeTask = (array, task) => {
    let newArray = [...array];
    const index = newArray.findIndex(t => t.task === task);
    newArray.splice(index, 1);
    return newArray;
}

const toggleCompleted = (array, task) => {
    let newArray = [...array];
    const index = newArray.findIndex(t => t.task === task);
    newArray[index].isCompleted = !newArray[index].isCompleted;
    return newArray;
}

export {
    addIfNotExist,
    removeTask,
    toggleCompleted
}
