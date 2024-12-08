import { describe, expect, test } from 'vitest'
import { tailwindHeight } from './index'

describe('Tailwind plugins', () => {
  test('should import tailwind height', () => {
    expect(tailwindHeight).toBeTruthy()
  })
})
