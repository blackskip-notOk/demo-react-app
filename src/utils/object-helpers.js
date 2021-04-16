export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i;
    });
}

export const createListFromArray = (items, Component) => {
    return items.map(i => <Component pathway={i.pathway}
        icon={i.icon} undertext={i.undertext} key={i.id}
        name={i.name} id={i.id} avatar={i.avatar}
        target={i.target} notation={i.notation} friend={i} />);
}

export const createReverseListFromArray = (items, Component, photos) => {
    return items.reserve().map(i => <Component id={i.id} post={i.post}
        likes={i.likes} key={i.id} photos={photos}
        message={i.message} />);
}

