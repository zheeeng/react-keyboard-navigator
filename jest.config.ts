import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.{ts,tsx}'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
}

export default config