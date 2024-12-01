import { describe, expect, test } from 'vitest'
import { sum } from './index'

describe('Tailwind plugins', () => {
  test('Should sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
