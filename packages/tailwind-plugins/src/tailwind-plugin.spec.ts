import { describe, expect, test } from 'vitest'
import { defaultConfig, tailwindHeight } from './index'

describe('Tailwind plugins', () => {
  test('should import', () => {
    expect(defaultConfig).toBeTruthy()
  })
  test('should import tailwind height', () => {
    expect(tailwindHeight).toBeTruthy()
  })
})
