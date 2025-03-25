import { defaultsDeep, omit } from "lodash-es"
import path from 'path'
import { ConfigFile, expandObjEnv} from ".";

export const DEFAULT_CONFIG_NAME = '.ai'

// in @oclif/core
type Config = any // eslint-disable-line @typescript-eslint/no-explicit-any
export function loadConfigFile(filename: string, searchPaths: string[] = ['.']) {
  if (path.isAbsolute(filename)) {return ConfigFile.loadSync(filename)}

  const configs = searchPaths.map(p => {
    return ConfigFile.loadSync(path.resolve(p, filename))
  }).filter(Boolean);
  return defaultsDeep({}, ...configs.reverse())
}

export function expandConfig(config: any, defaultConfig?: any) {
  const processEnv = { ...process.env, ...defaultConfig }

  return expandObjEnv(config, {
    processEnv,
    parsed: processEnv
  })
}

export function loadConfig(filename: string, config: Config) {
  let defaultConfig = ConfigFile.loadSync(path.resolve(config.configDir, filename))
  if (!defaultConfig) {
    defaultConfig = {
      configDirs: ['$XDG_BIN_HOME', config.configDir, '$HOME'],
      brainDir: [path.join(config.dataDir, 'brain')],
      agentDirs: [path.join(config.dataDir, 'agent')],
      promptDirs: [path.join(config.dataDir, 'prompt')],
      chatsDir: path.join(config.dataDir, 'log', 'chats'),
      inputsDir: path.join(config.dataDir, 'log', 'inputs'),
    }
  }
  const XDGConfigs = getXDGConfigs(config)
  for (const [key, value] of Object.entries(XDGConfigs)) {
    defaultConfig[key] = value
  }

  expandConfig(defaultConfig, defaultConfig)
  const searchPaths = defaultConfig.configDirs
  if (defaultConfig.AI_CONFIG_BASENAME) {
    filename = defaultConfig.AI_CONFIG_BASENAME
  }
  const result = expandConfig(loadConfigFile(filename, searchPaths), defaultConfig)
  return defaultsDeep(result, omit(defaultConfig, Object.keys(XDGConfigs)))
}

export function loadAIConfig(config: Config) {
  return loadConfig(DEFAULT_CONFIG_NAME, config)
}

export function getXDGConfigs(config: Config) {
  const result = {
    XDG_CONFIG_HOME: config.configDir,
    XDG_DATA_HOME: config.dataDir,
    XDG_CACHE_HOME: config.cacheDir,
    XDG_BIN_HOME: path.dirname(config.options.root),
  }
  return result
}

export function expandPath(path: string, config?: any) {
  if (path.startsWith('~')) {
    path = '$HOME' + path.slice(1)
  }
  const result = expandConfig(path, config)
  return result
}
