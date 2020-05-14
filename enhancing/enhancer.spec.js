const enhancer = require("./enhancer.js");

describe("enhancer unit tests", () => {
  beforeEach(() => {
    enhancer.itemList = [
      {
        name: "axe",
        durability: 70,
        enhancement: 19,
      },
      {
        name: "sword",
        durability: 50,
        enhancement: 3,
      },
      {
        name: "bow",
        durability: 80,
        enhancement: 15,
      },
    ];
  });

  describe("enhancer unit tests", () => {
    it("test repair function", () => {
      expect(enhancer.repair(enhancer.itemList[1]).durability).not.toBe(50);
      expect(enhancer.repair(enhancer.itemList[1]).durability).toBe(100);
      expect(enhancer.repair(enhancer.itemList[2]).durability).toBe(100);

      //ensures it will handle negative durability
      expect(enhancer.repair({ durability: -99 }).durability).toBe(100);
    });

    it("test succeed function", () => {
      expect(enhancer.succeed(enhancer.itemList[1]).enhancement).toBe(
        enhancer.itemList[1].enhancement++
      );
      expect(enhancer.succeed(enhancer.itemList[2]).enhancement).toBe(
        enhancer.itemList[2].enhancement++
      );
      //   expect(enhancer.succeed(testItem2).enhancement).toBe(0)
      expect(() => enhancer.succeed(testItem).enhancement).toThrow();
    });

    it("test failure function", () => {
      expect(enhancer.fail(enhancer.itemList[1]).durability).toBe(
        enhancer.itemList[1].durability - 5
      );
      expect(enhancer.fail(enhancer.itemList[2]).durability).toBe(
        enhancer.itemList[2].durability - 10
      );
      expect(enhancer.fail(enhancer.itemList[0])).toEqual({
        ...enhancer.itemList[0],
        enhancement: enhancer.itemList[0].enhancement--,
        durability:enhancer.itemList[0].durability -= 10
      });
    });
  });

  describe("stretch  function", () => {
    const bow = {
      name: "bow",
      durability: 80,
      enhancement: 15,
    };

    it("testing get function", () => {
      expect(enhancer.get(enhancer.itemList[1]).name).toBe(
        `[+${enhancer.itemList[1].enhancement}] ${enhancer.itemList[1].name}`
      );

      expect(enhancer.get(bow)).toEqual({
        ...bow,
        name: `[+${bow.enhancement}] ${bow.name}`,
      });
    });
  });
});
