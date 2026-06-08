import { describe, it, expect, beforeEach } from 'vitest'
import { usePlayerStore } from '../stores/playerStore'

describe('playerStore', () => {
  beforeEach(() => {
    usePlayerStore.setState({
      position: [0, 1.6, 0],
      rotation: [0, 0, 0],
      mode: 'first-person',
      isMoving: false
    })
  })

  it('should have correct default state', () => {
    const state = usePlayerStore.getState()
    expect(state.position).toEqual([0, 1.6, 0])
    expect(state.mode).toBe('first-person')
  })

  it('should update position', () => {
    usePlayerStore.getState().setPosition([10, 5, 3])
    expect(usePlayerStore.getState().position).toEqual([10, 5, 3])
  })

  it('should switch mode', () => {
    usePlayerStore.getState().setMode('orbit')
    expect(usePlayerStore.getState().mode).toBe('orbit')
  })
})