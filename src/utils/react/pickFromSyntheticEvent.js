export function pickFromSyntheticEvent() {
    return (key) => (fn) => (e) => fn(e.currentTarget[key]);
}
//# sourceMappingURL=pickFromSyntheticEvent.js.map