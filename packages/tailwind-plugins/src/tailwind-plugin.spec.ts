import { describe, expect, test } from 'vitest'
import { basePluginConfig } from './index'

describe('Tailwind plugins', () => {
  test('should import tailwind height', () => {
    expect(basePluginConfig).toBeTruthy()
  })
})
