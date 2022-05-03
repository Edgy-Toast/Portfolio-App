export function calculateCost(storage) {
    const rate = storage <= 10 ? 1 : storage <= 100 ? 0.5 : 0.25;
    return rate * storage * 100;
}