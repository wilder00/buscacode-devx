import { describe, expect, test } from 'vitest'
import {
  getValueIfNotNullish,
  getValueIfTruthy,
  isNullish,
  isTruthy
} from './index'

describe('utils common', () => {
  describe('isTruthy', () => {
    test('should be falsy', () => {
      expect(isTruthy('')).toBeFalsy()
      expect(isTruthy(0)).toBeFalsy()
      expect(isTruthy(false)).toBeFalsy()
      expect(isTruthy(null)).toBeFalsy()
      expect(isTruthy(undefined)).toBeFalsy()
      expect(isTruthy(NaN)).toBeFalsy()
      expect(isTruthy(1 - 1)).toBeFalsy()
      expect(isTruthy([], { ignoreEmptyArray: true })).toBeFalsy()
      expect(isTruthy({}, { ignoreEmptyObject: true })).toBeFalsy()
      expect(
        isTruthy(
          { a: undefined },
          { ignoreEmptyObject: true, ignoreUndefinedObjectValues: true }
        )
      ).toBeFalsy()
    })

    test('should be truthy', () => {
      expect(isTruthy('value')).toBeTruthy()
      expect(isTruthy(true)).toBeTruthy()
      expect(isTruthy(123)).toBeTruthy()
      expect(isTruthy({ obj: true })).toBeTruthy()
      expect(isTruthy(1 - 10)).toBeTruthy()
      expect(isTruthy([], { ignoreEmptyArray: false })).toBeTruthy()
      expect(isTruthy({}, { ignoreEmptyObject: false })).toBeTruthy()
      expect(isTruthy([], { ignoreEmptyObject: true })).toBeTruthy()
      expect(
        isTruthy({ a: undefined }, { ignoreUndefinedObjectValues: true })
      ).toBeTruthy()
      expect(isTruthy([])).toBeTruthy()
      expect(isTruthy({})).toBeTruthy()
    })
  })
  describe('getValueIfTruthy', () => {
    test('should return default value when input is not truthy', () => {
      expect(getValueIfTruthy('', 'default')).toBe('default')
      expect(getValueIfTruthy(0, 123)).toBe(123)
      expect(getValueIfTruthy(false, true)).toBe(true)
      expect(getValueIfTruthy(null, 'default')).toBe('default')
      expect(getValueIfTruthy(undefined, 'default')).toBe('default')
      expect(getValueIfTruthy(NaN, 123)).toBe(123)
      expect(getValueIfTruthy(undefined, 123)).toBe(123)
      expect(getValueIfTruthy(null, true)).toBe(true)
      expect(getValueIfTruthy(undefined, true)).toBe(true)
      expect(getValueIfTruthy(null, 123)).toBe(123)
      expect(getValueIfTruthy(undefined, 123)).toBe(123)
      expect(getValueIfTruthy(undefined, true)).toBe(true)
      expect(getValueIfTruthy(NaN, 123)).toBe(123)
      expect(getValueIfTruthy(undefined, 123)).toBe(123)
      expect(getValueIfTruthy(null, { obj: false })).toStrictEqual({
        obj: false
      })
    })

    test('should return input value when input is truthy', () => {
      expect(getValueIfTruthy('value', 'default')).toStrictEqual('value')
      expect(getValueIfTruthy(true, false)).toStrictEqual(true)
      expect(getValueIfTruthy(123, 456)).toStrictEqual(123)
      expect(getValueIfTruthy({ obj: true }, { obj: false })).toStrictEqual({
        obj: true
      })
    })
  })
  describe('isNullish', () => {
    test('should return true when input is null or undefined', () => {
      expect(isNullish('')).toBeFalsy()
      expect(isNullish(0)).toBeFalsy()
      expect(isNullish(false)).toBeFalsy()
      expect(isNullish(NaN)).toBeFalsy()
      expect(isNullish(null)).toBeTruthy()
      expect(isNullish(undefined)).toBeTruthy()
    })

    test('should return input value when input is not null or undefined', () => {
      expect(getValueIfNotNullish('value', 'default')).toStrictEqual('value')
      expect(getValueIfNotNullish(true, false)).toStrictEqual(true)
      expect(getValueIfNotNullish(123, 456)).toStrictEqual(123)
      expect(getValueIfNotNullish({ obj: true }, { obj: false })).toStrictEqual(
        {
          obj: true
        }
      )
      expect(getValueIfNotNullish(null, { obj: false })).toStrictEqual({
        obj: false
      })
      expect(getValueIfNotNullish(null, 'default')).toBe('default')
      expect(getValueIfNotNullish(undefined, 'default')).toBe('default')
      expect(getValueIfNotNullish(NaN, 123)).toBe(NaN)
      expect(getValueIfNotNullish(undefined, true)).toBe(true)
    })
  })
})
