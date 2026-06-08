import { describe, it, expect } from 'vitest'
import { usePosterStore } from '../posterStore'

describe('posterStore', () => {
  it('should have initial posters', () => {
    const state = usePosterStore.getState()
    expect(state.posters.length).toBeGreaterThan(0)
  })

  it('should have correct poster structure', () => {
    const state = usePosterStore.getState()
    const poster = state.posters[0]
    expect(poster.id).toBeDefined()
    expect(poster.texturePath).toMatch(/^\/assets\/posters\//)
    expect(poster.position).toHaveLength(3)
  })
})