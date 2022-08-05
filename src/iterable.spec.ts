import * as iterable from "./iterable"
import * as laws from "fp-ts-laws"
import * as fc from "fast-check"
import { option, readonlyArray, string } from "fp-ts"
import { constVoid, flow, pipe, tuple } from "fp-ts/lib/function"

describe("Iterable", () => {
  describe("Pointed", () => {
    test("of", () => {
      const value = "a"
      const result = iterable.of(value)

      for (const element of result) {
        expect(element).toStrictEqual(value)
      }
    })

    test("Do", () => {
      const result = pipe(iterable.Do, iterable.ToReadonlyArray)
      expect(result).toStrictEqual([{}])
    })
  })

  describe("Functor", () => {
    test("bindTo", () => {
      const arbitraries = fc.tuple(
        fc.anything(),
        fc.string().filter((a) => a.length > 0)
      )
      fc.assert(
        fc.property(arbitraries, ([anything, property]) => {
          const result = pipe(
            iterable.of(anything),
            iterable.bindTo(property),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(
            readonlyArray.of({ [property]: anything })
          )
        })
      )
    })

    test("flap", () => {
      fc.assert(
        fc.property(fc.integer(), (integer) => {
          const f = (a: number) => a.toString()
          const expected = f(integer)
          const result = pipe(
            iterable.of(f),
            iterable.flap(integer),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(readonlyArray.of(expected))
        })
      )
    })
  })

  describe("FunctorWithIndex", () => {
    test("mapWithIndex", () => {
      fc.assert(
        fc.property(fc.integer(), (integer) => {
          const f = (i: number, a: number) => a.toString()
          const expected = f(0, integer)
          const result = pipe(
            iterable.of(integer),
            iterable.mapWithIndex(f),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(readonlyArray.of(expected))
        })
      )
    })
  })

  describe("Unfoldable", () => {
    test("unfold", () => {
      fc.assert(
        fc.property(fc.integer({ min: 0, max: 100 }), (integer) => {
          const result = pipe(
            iterable.unfold(
              integer,
              flow(
                option.fromPredicate((integer) => integer > 0),
                option.map((integer) => tuple(integer, integer - 1))
              )
            ),
            iterable.ToReadonlyArray
          )
          expect(result.length).toBe(integer)
        })
      )
    })
  })

  describe("Witherable", () => {
    test.todo("wilt")
    test.todo("witherable")
  })

  describe("Iteratable", () => {
    test.todo("iterate")
    test.todo("iterateWhile")

    test("iterateWhileMap", () => {
      const f = (i: number) =>
        pipe(
          i + 1,
          option.fromPredicate((i) => i <= 10)
        )

      const result = pipe(
        1,
        iterable.iterateWhileMap(f),
        iterable.ToReadonlyArray
      )

      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(result).toStrictEqual(expected)
    })
  })

  describe("IteratableWithIndex", () => {
    test.todo("iterateWithIndex")
    test.todo("iterateWhileWithIndex")
    test.todo("iterateWhileMapWithIndex")
  })

  describe("Apply", () => {
    test("apFirst", () => {
      fc.assert(
        fc.property(fc.integer(), fc.string(), (integer, string) => {
          const fa = iterable.of(integer)
          const fb = iterable.of(string)

          const expected = iterable.ToReadonlyArray(fa)

          const result = pipe(
            fa,
            iterable.apFirst(fb),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected)
        })
      )
    })

    test("apSecond", () => {
      fc.assert(
        fc.property(fc.integer(), fc.string(), (integer, string) => {
          const fa = iterable.of(integer)
          const fb = iterable.of(string)

          const expected = iterable.ToReadonlyArray(fb)

          const result = pipe(
            fa,
            iterable.apSecond(fb),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected)
        })
      )
    })

    test("apS", () => {
      fc.assert(
        fc.property(
          fc.integer(),
          fc.string().filter((a) => a.length > 0),
          (integer, property) => {
            const result = pipe(
              iterable.of({}),
              iterable.apS(property, iterable.of(integer)),
              iterable.ToReadonlyArray
            )

            expect(result).toStrictEqual(
              readonlyArray.of({ [property]: integer })
            )
          }
        )
      )
    })
  })

  describe("Applicative", () => {
    test.todo("getApplicativeMonoid")
  })

  describe("Chain", () => {
    test("bindTo", () => {
      fc.assert(
        fc.property(
          fc.integer(),
          fc
            .string()
            .filter((a) => a.length > 0)
            .chain((a) => fc.string().map((b) => ({ a, b }))),
          (integer, { a, b }) => {
            const f = (a: number) => a * 2
            const result = pipe(
              iterable.of({ integer }),
              iterable.bind(a, ({ integer }) => iterable.of(f(integer))),
              iterable.ToReadonlyArray
            )

            expect(result).toStrictEqual(
              readonlyArray.of({ integer, [a]: f(integer) })
            )
          }
        )
      )
    })

    test("chainFirst", () => {
      fc.assert(
        fc.property(fc.integer(), (integer) => {
          const fb = iterable.of(integer)
          const expected = iterable.ToReadonlyArray(fb)
          const result = pipe(
            fb,
            iterable.chainFirst((integer) => iterable.of(integer + 1)),
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(expected)
        })
      )
    })

    test("flatten", () => {
      fc.assert(
        fc.property(fc.integer(), (integer) => {
          const fb = iterable.of(integer)
          const expected = iterable.ToReadonlyArray(fb)
          const result = pipe(
            fb,
            iterable.of,
            iterable.flatten,
            iterable.ToReadonlyArray
          )
          expect(result).toStrictEqual(expected)
        })
      )
    })
  })

  describe("ChainRec", () => {
    test.todo("chainRecBreadthFirst")
    test.todo("chainRecDepthFirst")
  })

  describe("Extend", () => {
    test.todo("extend")
    test.todo("duplicate")
  })

  describe("Alt", () => {
    test.todo("altW")
    // F means flipped
    test.todo("altF")
    test.todo("altW")
    test.todo("altAll")
  })

  describe("Zero", () => {
    test.todo("zero")
    test.todo("guard")
    test.todo("fromZeroK")
  })

  describe("Magma", () => {
    test.todo("getDifferenceMagma")
  })

  describe("Eq", () => {
    test.todo("getEq")
  })

  describe("Semigroup", () => {
    test.todo("getDifferenceSemigroup")
    test.todo("getSemigroup")
    test.todo("getUnionSemigroup")
  })

  describe("refinements", () => {
    test.todo("isEmpty")
    test.todo("isNonEmpty")
  })

  describe("Monoid", () => {
    test.todo("getMonoid")
    test.todo("getUnionMonoid")
  })

  describe("Ord", () => {
    test.todo("getOrd")
  })

  describe("Alternative", () => {
    test.todo("empty")
  })

  describe("Compactable", () => {
    test.todo("compact")
    test.todo("seperate")
  })

  describe("Filterable", () => {
    test.todo("filter")
    test.todo("filterMap")
    test.todo("partition")
    test.todo("partitionMap")
  })

  describe("FilterableWithIndex", () => {
    test.todo("filterWithIndex")
    test.todo("filterMapWithIndex")
    test.todo("partitionWithIndex")
    test.todo("partitionMapWithIndex")
  })

  describe("Foldable", () => {
    test.todo("reduce")
    test.todo("foldMap")
    test.todo("reduceRight")
    test.todo("intercalculate")
  })

  describe("FoldableWithIndex", () => {
    test.todo("reduceWithIndex")
    test.todo("foldMapWithIndex")
    test.todo("reduceRightWithIndex")
    test.todo("intercalculate")
  })

  describe("Traversable", () => {
    test.todo("traverse")
    test.todo("sequence")
  })

  describe("TraversableWithIndex", () => {
    test.todo("traverseWithIndex")
    test.todo("sequenceWithIndex")
  })

  describe("NaturalTransformation", () => {
    it("ToReadonlyArray", () => {
      fc.assert(
        fc.property(fc.anything(), (anything) => {
          const inputs = iterable.of(anything)
          const result = iterable.ToReadonlyArray(inputs)
          expect(result).toStrictEqual(readonlyArray.of(anything))
        })
      )
    })

    it("FromReadonlyArray", () => {
      fc.assert(
        fc.property(fc.anything(), (anything) => {
          const inputs = readonlyArray.of(anything)
          const result = iterable.ToReadonlyArray(
            iterable.FromReadonlyArray(inputs)
          )
          expect(result).toStrictEqual(readonlyArray.of(anything))
        })
      )
    })

    test.todo("FromAsyncIterable")
  })

  describe("Droppable", () => {
    describe("dropLeft", () => {
      it("should return an empty iterable when we skip every element", () => {
        fc.assert(
          fc.property(fc.array(fc.integer()), (integers) => {
            const result = pipe(
              iterable.FromReadonlyArray(integers),
              iterable.dropLeft(integers.length),
              iterable.ToReadonlyArray
            )

            expect(result).toStrictEqual(readonlyArray.empty)
          })
        )
      })

      it("should return the same iterable when skipping zero elements", () => {
        fc.assert(
          fc.property(fc.array(fc.integer()), (integers) => {
            const result = pipe(
              iterable.FromReadonlyArray(integers),
              iterable.dropLeft(0),
              iterable.ToReadonlyArray
            )

            expect(result).toStrictEqual(integers)
          })
        )
      })
    })

    test("dropWhile", () => {
      const predicate = (a: number) => a > 0

      fc.assert(
        fc.property(fc.array(fc.integer()), (integers) => {
          const expected = pipe(
            integers,
            readonlyArray.fromArray,
            readonlyArray.spanLeft(predicate)
          )

          const result = pipe(
            iterable.FromReadonlyArray(integers),
            iterable.dropLeftWhile(predicate),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("dropLeftWhileMap", () => {
      const predicate = (a: number) => a > 0

      fc.assert(
        fc.property(fc.array(fc.integer()), (integers) => {
          const expected = pipe(
            integers,
            readonlyArray.fromArray,
            readonlyArray.spanLeft(predicate)
          )

          const result = pipe(
            iterable.FromReadonlyArray(integers),
            iterable.dropLeftWhileMap(option.fromPredicate(predicate)),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("dropRight", () => {
      const arbs = fc
        .integer({ min: 0, max: 10 })
        .chain((smaller) =>
          fc
            .integer({ min: smaller, max: 20 })
            .map((bigger) => ({ bigger, smaller }))
        )

      fc.assert(
        fc.property(arbs, ({ bigger, smaller }) => {
          const array = readonlyArray.makeBy(bigger, constVoid)

          const result = pipe(
            array,
            iterable.FromReadonlyArray,
            iterable.dropRight(smaller),
            iterable.ToReadonlyArray
          )

          expect(result).toHaveLength(bigger - smaller)
        })
      )
    })

    test.todo("dropRightWhile")

    describe("dropRightWhileMap", () => {
      it("should skip right elements only", () => {
        const arbs = fc
          .integer({ min: 0, max: 10 })
          .chain((smaller) =>
            fc
              .integer({ min: smaller, max: 20 })
              .map((bigger) => ({ bigger, smaller }))
          )

        fc.assert(
          fc.property(arbs, ({ bigger, smaller }) => {
            const predicate = (i: number) => option.guard(i >= smaller)

            const array = readonlyArray.makeBy(bigger, (i) => i)

            const result = pipe(
              array,
              iterable.FromReadonlyArray,
              iterable.dropRightWhileMap(predicate),
              iterable.ToReadonlyArray
            )

            expect(result).toHaveLength(smaller)
          })
        )
      })
    })
  })

  describe("DroppableWithIndex", () => {
    test("dropWhileWithIndex", () => {
      const predicate = (a: number) => a > 0

      fc.assert(
        fc.property(fc.array(fc.integer()), (integers) => {
          const expected = pipe(
            integers,
            readonlyArray.fromArray,
            readonlyArray.spanLeft(predicate)
          )

          const result = pipe(
            iterable.FromReadonlyArray(integers),
            iterable.dropLeftWhileWithIndex((i, a) => predicate(a)),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("dropLeftWhileMapWithIndex", () => {
      const predicate = (a: number) => a > 0

      fc.assert(
        fc.property(fc.array(fc.integer()), (integers) => {
          const expected = pipe(
            integers,
            readonlyArray.fromArray,
            readonlyArray.spanLeft(predicate)
          )

          const result = pipe(
            iterable.FromReadonlyArray(integers),
            iterable.dropLeftWhileMapWithIndex((i, a) =>
              option.fromPredicate(predicate)(a)
            ),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    describe("dropRightWhileWithIndex", () => {
      it("should always match an array's index and element", () => {
        fc.assert(
          fc.property(fc.array(fc.string()), (strings) => {
            const predicate = (i: number, a: string) => strings[i] !== a

            const result = pipe(
              strings,
              iterable.FromReadonlyArray,
              iterable.dropRightWhileWithIndex(predicate),
              iterable.ToReadonlyArray
            )
            expect(result).toStrictEqual(strings)
          })
        )
      })

      it("should skip right elements only", () => {
        const arbs = fc
          .integer({ min: 0, max: 10 })
          .chain((smaller) =>
            fc
              .integer({ min: smaller, max: 20 })
              .map((bigger) => ({ bigger, smaller }))
          )

        fc.assert(
          fc.property(arbs, ({ bigger, smaller }) => {
            const predicate = (i: number, a: unknown) => i >= smaller

            const array = readonlyArray.makeBy(bigger, constVoid)

            const result = pipe(
              array,
              iterable.FromReadonlyArray,
              iterable.dropRightWhileWithIndex(predicate),
              iterable.ToReadonlyArray
            )

            expect(result).toHaveLength(smaller)
          })
        )
      })
    })

    describe("dropRightWhileMapWithIndex", () => {
      it("should always match an array's index and element", () => {
        fc.assert(
          fc.property(fc.array(fc.string()), (strings) => {
            const predicate = (i: number, a: string) =>
              option.guard(strings[i] !== a)

            const result = pipe(
              strings,
              iterable.FromReadonlyArray,
              iterable.dropRightWhileMapWithIndex(predicate),
              iterable.ToReadonlyArray
            )
            expect(result).toStrictEqual(strings)
          })
        )
      })

      it("should skip right elements only", () => {
        const arbs = fc
          .integer({ min: 0, max: 10 })
          .chain((smaller) =>
            fc
              .integer({ min: smaller, max: 20 })
              .map((bigger) => ({ bigger, smaller }))
          )

        fc.assert(
          fc.property(arbs, ({ bigger, smaller }) => {
            const predicate = (i: number, a: unknown) =>
              option.guard(i >= smaller)

            const array = readonlyArray.makeBy(bigger, constVoid)

            const result = pipe(
              array,
              iterable.FromReadonlyArray,
              iterable.dropRightWhileMapWithIndex(predicate),
              iterable.ToReadonlyArray
            )

            expect(result).toHaveLength(smaller)
          })
        )
      })
    })
  })

  describe("TakeableWithIndex", () => {
    test.todo("takeWithIndex")
    test.todo("takeWhileWithIndex")
    test.todo("takeWhileMapWithIndex")

    test.todo("takeRightWithIndex")
    test.todo("takeRightWhileWithIndex")
    test.todo("takeRightWhileMapWithIndex")
  })

  describe("Takeable", () => {
    test.todo("take")
    test.todo("takeWhile")
    test.todo("takeWhileMap")

    test.todo("takeRight")
    test.todo("takeRightWhile")
    test.todo("takeRightWhileMap")
  })

  describe("FromEither", () => {})
  describe("FromOption", () => {})

  describe("Combinators", () => {
    test.todo("prepend")
    test.todo("prependW")
    test.todo("append")
    test.todo("appendW")
    test.todo("head")
    test.todo("tail")
    test.todo("chop")
    test.todo("chunksOf")
    test.todo("comprehension")
    test.todo("concat")
    test.todo("concatW")
    test.todo("difference")
    test.todo("intersection")
    test.todo("intersperse")
    test.todo("lefts")
    test.todo("rights")
    test.todo("rotate")
    test.todo("prependAll")
    test.todo("reverse")
    test.todo("scanLeft")
    test.todo("scanRight")
    test.todo("sort")
    test.todo("sortBy")
    test.todo("splitAt")
    test.todo("union")
    test.todo("uniq")
    test.todo("zip")
    test.todo("zipWith")
    test.todo("unzip")
    test.todo("makeBy")
    test.todo("replicate")
    test.todo("range")
    test.todo("match")
    test.todo("matchW")
    test.todo("matchLeft")
    test.todo("matchLeftW")
    test.todo("matchRight")
    test.todo("matchRightW")
    test.todo("deleteAt")
    test.todo("elem")
    test.todo("empty")
    test.todo("every")
    test.todo("some")
    test.todo("filterE") // own describe block?
    test.todo("findFirst")
    test.todo("findFirstMap")
    test.todo("findFirstIndex")
    test.todo("findLastIndex")
    test.todo("findLastMap")
    test.todo("init")
    test.todo("insertAt")
    test.todo("isOutOfBound")
    test.todo("last")
    test.todo("lookup")
    test.todo("modifyAt")
    test.todo("size")
    test.todo("spanLeft")
    test.todo("updateAt")
  })

  describe("laws", () => {
    it("Eq", () => {
      laws.eq(iterable.getEq(string.Eq), fc.string())
    })

    it("Functor", () => {
      laws.functor(iterable.Functor)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Apply", () => {
      laws.apply(iterable.Apply)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Applicative", () => {
      laws.applicative(iterable.Applicative)(
        (arbitrary) => arbitrary.map(iterable.of),
        iterable.getEq
      )
    })

    it("Chain", () => {
      laws.monad(iterable.Monad)(iterable.getEq)
    })
  })
})
