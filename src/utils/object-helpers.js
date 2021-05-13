export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i;
    });
}

export const createListFromArray = (items, Component, callBack) => {
    return items.map(i => <Component pathway={i.pathway}
        icon={i.icon} undertext={i.undertext} key={i.id}
        name={i.name} id={i.id} avatar={i.avatar}
        target={i.target} notation={i.notation} friend={i}
        onClick={() => callBack(i.id)} />);
}

export const createReverseListFromArray = (items, Component, photos) => {
    return items.reverse().map(i => <Component id={i.id} post={i.post}
        likes={i.likes} key={i.id} photos={photos}
        message={i.message} />);
}

export const addPropsInObject = function(object, addedIcons) {
    object.icons = addedIcons;
    let result, obj, arr = [];
    for (let prop in object) {
        for (let i = 0; i < addedIcons.length; i++) {
            if (prop === object.icons[i]['name']) {
                obj = {[prop] : object[prop], icon: object.icons[i].icon};
            }
        }
        arr.push(obj);
    }
    arr.splice(8, 1);
    result = arr.map((o, i) => {
        o = {id: i, contact: {...o}};
        return o;
    })
    return result;
}
