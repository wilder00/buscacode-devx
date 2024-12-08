import { describe, expect, test } from 'vitest'
import { defaultConfig } from './index'

describe('Tailwind plugins', () => {
  test('should import', () => {
    expect(defaultConfig).toBeTruthy()
  })
})
