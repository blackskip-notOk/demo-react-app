export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(i => {
        if (i[objPropName] === itemId) {
            return {...i, ...newObjProps}
        }
        return i;
    });
}

export const createListFromArray = (items, Component, callBack, authUserId,
    getProfileData, props) => {
    return items.map(i => <Component pathway={i.pathway}
        icon={i.icon} undertext={i.undertext} key={i.id}
        name={i.name} id={i.id} avatar={i.avatar}
        target={i.target} notation={i.notation} friend={i}
        onClick={() => callBack(i.id)} authUserId={authUserId}
        getProfileData={getProfileData} props={props} />);
}

export const createReverseListFromArray = (items, Component, photos) => {
    return items.reverse().map(i => <Component id={i.id} post={i.post}
        likes={i.likes} key={i.id} photos={photos}
        message={i.message} />);
}

