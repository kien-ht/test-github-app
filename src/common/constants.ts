import { UserConfig } from './types.js'

export const DEFAULT_CONFIG_PATH = 'cypress-image-diff-html-report.config.js'

export const DEFAULT_CONFIG: UserConfig = {
  reportJsonDir: 'cypress-image-diff-html-report',
  reportJsonFilePath: undefined,
  outputDir: 'cypress-image-diff-html-report',
  baseDir: '',
  inlineAssets: false,
  autoOpen: false,
  serverPort: 6868
}
