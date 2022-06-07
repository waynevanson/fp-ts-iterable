import * as iterable from "./index"
import * as laws from "fp-ts-laws"
import * as fc from "fast-check"
import { option, readonlyArray, string } from "fp-ts"
import { pipe } from "fp-ts/lib/function"

describe("Iterable", () => {
  describe("Pointed", () => {
    test("of", () => {
      const value = "a"
      const result = iterable.of(value)

      for (const element of result) {
        expect(element).toStrictEqual(value)
      }
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
  })

  describe("FoldableWithIndex", () => {
    test.todo("reduceWithIndex")
    test.todo("foldMapWithIndex")
    test.todo("reduceRightWithIndex")
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
  })

  describe("Skippable", () => {
    test.todo("skip")
    test.todo("skipWithIndex")

    test("skipWhile", () => {
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
            iterable.skipWhile(predicate),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("skipWhileWithIndex", () => {
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
            iterable.skipWhileWithIndex((i, a) => predicate(a)),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("skipWhileMap", () => {
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
            iterable.skipWhileMap(option.fromPredicate(predicate)),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test("skipWhileMapWithIndex", () => {
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
            iterable.skipWhileMapWithIndex((i, a) =>
              option.fromPredicate(predicate)(a)
            ),
            iterable.ToReadonlyArray
          )

          expect(result).toStrictEqual(expected.rest)
        })
      )
    })

    test.todo("skipRight")
    test.todo("skipRightWithIndex")
    test.todo("skipWhileRight")
    test.todo("skipWhileRightWithIndex")
    test.todo("skipWhileMapRight")
    test.todo("skipWhileMapWithIndexRight")
  })

  describe("Takeable", () => {
    test.todo("take")
    test.todo("takeWithIndex")
    test.todo("takeWhile")
    test.todo("takeWhileWithIndex")
    test.todo("takeWhileMap")
    test.todo("takeWhileMapWithIndex")

    test.todo("takeRight")
    test.todo("takeRightWithIndex")
    test.todo("takeWhileRight")
    test.todo("takeWhileRightWithIndex")
    test.todo("takeWhileMapRight")
    test.todo("takeWhileMapRightWithIndex")
    test.todo("takeWhileMapWithIndexRight")
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
