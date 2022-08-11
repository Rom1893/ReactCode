// const choice = (items) => {
//     const num = Math.floor(Math.random() * items.length);
//     return (items[num]);
// };

//React does not like arrow key functions

function remove(items, item){
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
        return items;
    }
    else {
        return undefined
    }
}

function choice(items) {
    const num = Math.floor(Math.random() * items.length);
    return (items[num]);
}

export { choice, remove }