export function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));
}
//# sourceMappingURL=assoc.js.map