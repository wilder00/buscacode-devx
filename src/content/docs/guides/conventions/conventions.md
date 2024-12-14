---
title: Conventions
---

## Typescript

A brief resume of typescript conventions when naming variables from [this page](https://ts.dev/style/#syntax).

| Style          | Category                                                           |
| -------------- | ------------------------------------------------------------------ |
| UpperCamelCase | class / interface / type / enum / decorator / type / parameters    |
| lowerCamelCase | variable / parameter / function / method / property / module alias |
| CONSTANT_CASE  | global constant values, including enum values                      |
| #ident         | private identifiers are never used.                                |

---

### Typescript Examples

Another more detailed conventions from [this page](https://aykhanhuseyn.medium.com/typescript-naming-conventions-crafting-maintainable-code-7d872234fe17).

#### Interfaces

```ts title='Interfaces'
interface User {
  id: number
  name: string
  surname: string
}
```

#### Types

```ts title='Types'
type Developer = {
  name: string
  languages: Language[]
}

type DeveloperOrDesigner = Developer | Designer

type Employee = Developer | Designer

// function type
type UserGenerator = (username: string, email?: string) => User

// function type overloading
type UserGenerator = {
  (username: string): User
  (username: string, email?: string): User
}
```

#### Enum

```tsx title='Enum'
enum Role {
  ADMIN,
  MODERATOR,
  USER,
}
// or
enum Month {
  January,
  February,
  ...
}

```

#### Generics

```ts title='Generics'
interface Response<S, T, U> {
  status: S
  data: T
  error: U
}

interface Response<TStatus, TResult, TError> {
  status: TStatus
  data: TResult
  error: TError
}
```
