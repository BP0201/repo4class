const choice = (items) => {
    const res = Math.floor(Math.random() * items.length);
    return items[res];
}

const remove = (items, item) => {
    const index = items.indexOf(item)
    if (index > -1) {
        items.splice(index, 1)
        return item;
    }
}


export {choice, remove}