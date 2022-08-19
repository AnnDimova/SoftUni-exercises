function inventoryList(){
    let items = [];
    return {
        add: (name) => {
            items.push(name);
        },
        remove: (name) => {
            const index = items.findIndex((items) => items === name);
            if(index > -1) {
                items.splice(index, 1);
            }
        },
        getList: () => {
            return items;
        }
    };
}

const list = inventoryList();
list.add('Shirt');
list.add('Shirt');
list.add('Trouser');
list.add('Trouser');
list.add('Trouser');
list.remove('Shirt');
list.remove('Trouser');

console.log(list.getList())