import { calculateCost } from "../src/util/cost";

test("Lowest tier", () => {
    const storage = 10;

    const cost = 1000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
    const storage = 100;

    const cost = 5000;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
    const storage = 101;

    const cost = 2525;
    const expectedCost = calculateCost(storage);

    expect(cost).toEqual(expectedCost);
});