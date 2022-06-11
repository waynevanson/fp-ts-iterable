# fp-ts-iterable

fp-ts bindings for `Iterable` types.

## Installation

```sh
# npm
npm install fp-ts-iterable

# yarn
yarn add fp-ts-iterable

# pnpm
pnpm add fp-ts-iterable
```

## Documentation

Please visit the [documentation](https://waynevanson.github.io/fp-ts-iterable/) for the API surface.

## Recommendations

### Coersion from types that are `Iterable`

If coersing from something like a `ReadonlyArray`, it's recommended to coerce it to an `Iterable` using `FromReadonlyArray`.

There is no performance benefit, but it could alleviate bugs before they happen.

### `\*Right*` functions

All functions using the word `Right` in their names require buffering all values so it knows where the end is.

If the `Iterable` is large or infinite, it may cause an out of memory error.
Ensure infinite iterables end by using a skip combinator that does not contain the word `Right`.

### `AsyncIterable` (Upcoming)

`AsyncIterable<A>` is `Iterable<Promise<A>>`, but should be coerced to `Iterable<Task<A>>` via `FromAsyncIterable`
