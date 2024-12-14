import { describe, expect, test } from 'vitest'
import { variables } from './index'

describe('Tailwind plugins', () => {
  test('should import tailwind height', () => {
    expect(variables).toBeTruthy()
  })
})
