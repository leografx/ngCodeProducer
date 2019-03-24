const codeType = function(fieldType) {
    let type = (fieldType.includes('int')) ? 'int' : 'string';
    return type;
}

export default codeType;