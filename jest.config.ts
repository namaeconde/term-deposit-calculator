import { createDefaultPreset, pathsToModuleNameMapper } from "ts-jest";
import tsconfig from './tsconfig.json';


const config: import('jest').Config = {
  ...createDefaultPreset(),
  roots: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' })
}

export default config;