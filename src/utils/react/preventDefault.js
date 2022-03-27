export function preventDefault(fn) {
    return (e) => {
        e.preventDefault();
        fn(e);
    };
}
//# sourceMappingURL=preventDefault.js.map