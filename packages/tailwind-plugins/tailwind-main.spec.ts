import {sum } from './index'
import {describe, expect, test} from 'vitest'

describe('Tailwind plugins', () => {
  test('Should sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
