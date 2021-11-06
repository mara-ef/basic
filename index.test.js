
function check(a, b, c) {
    return (a * a === b * b + c * c)
        || (b * b === a * a + c * c)
        || (c * c === a * a + b * b) ?
        "correct" : "incorrect"
};

describe("right-angle triangle?", () => {
    it("should work", () => {
        const a = 5;
        const b = 4;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("correct");
    });

    it("should not work", () => {
        const a = 4;
        const b = 4;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("incorrect");
    });

    it("should work", () => {
        const a = 4;
        const b = 5;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("correct");
    });

    it("should work", () => {
        const a = 3;
        const b = 4;
        const c = 5;

        const result = check(a, b, c)

        expect(result).toBe("correct");
    });
});


