
function check(a, b, c) {
    if (a * a === b * b + c * c) {
        return "correct";
    }
    else { return "incorrect"; }
}

describe("right-angle triangle?", () => {
    it("should work", () => {
        const a = 5;
        const b = 4;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("correct");
    });

    it("should work", () => {
        const a = 4;
        const b = 4;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("incorrect");
    });
});


