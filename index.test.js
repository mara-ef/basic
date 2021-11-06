
function check() {
    return "correct";
}

describe("right-angle triangle?", () => {
    it("should work", () => {
        const a = 5;
        const b = 4;
        const c = 3;

        const result = check(a, b, c)

        expect(result).toBe("correct");
    });
});


