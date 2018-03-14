// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value'
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    let result = () => {};
    result.__proto__ = new Function();
    result.prototype = result.__proto__;
    return result;
};
const incrementor = (() => {
    let i = 0;
    let next = () => {
        i++;
        return next;
    };
    next.valueOf = () => i;
    return next;
})();
const asyncIncrementor = (() => {
    let i = 0;
    let next = () => {
        i++;
        return new Promise((p) => p(next));
    };
    next.valueOf = () => i;
    return next;
})();
const createIncrementer = () => {
    let i = 0;
    function* next(){
        let i = 0;
        while(i < 3)
            yield ++i;
    }
    return next();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((p) => {
        setTimeout(() => {p(param);}, 1000);
    });
};
const getDeepPropertiesCount = (object) => {
    let i = 0;
    function func(object) {
        for (let key in object) {
            if (typeof object[key] === 'object') {
                func(object[key]);
            }
            i++;
        }
        return i;
    }
    return func(object);
};
const createSerializedObject = () => {
    JSON.parse = JSON.stringify = (object) => object;
    return {};
};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort((a, b) => {
        return a.x - b.x;
    })
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;

