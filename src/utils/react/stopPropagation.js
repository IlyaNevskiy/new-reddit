export function stopPropagation(fn) {
    return (e) => {
        e.stopPropagation();
        fn(e);
    };
}
//# sourceMappingURL=stopPropagation.js.map