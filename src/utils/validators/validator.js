export const required = value => {
    if (value) return undefined;

    return `Field is required`;
}

export const maxLengthCreator = (max) => (value) => {
    if (value.length > max) return `Max Length is ${max} symbols`;

    return undefined;
}