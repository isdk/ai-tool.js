import {statSync, type Dirent} from 'fs'
import path from 'path'
import { ConfigFile, registerYamlTag, traverseFolderSync } from '@isdk/util'
import { regexp } from 'yaml-types'

export {mimeType} from 'mime-type/with-db'
export { ConfigFile, registerYamlTag, parseYaml, stringifyYaml} from '@isdk/util'

registerYamlTag(regexp);

interface ConfigFilesFilter {
  after?: {[filepath: string]: number},
  extensions?: string[]|string,
  exclude?: string[]|string,
}

export function getConfigFileNames(directoryPath: string, filter?: ConfigFilesFilter) {
  const configFiles: string[] = [];
  const after = filter?.after
  const exclude = filter?.exclude ?
    (typeof filter.exclude === 'string' ? [filter.exclude] : filter.exclude) : undefined
  const extensions = filter?.extensions ?
    (typeof filter.extensions === 'string' ? [filter.extensions] : filter.extensions.map(ext => ext.startsWith('.') ? ext : '.' + ext)):
    ['.yml', '.yaml', '.json']

  traverseFolderSync(directoryPath, (filePath, entry: Dirent) => {
    if (exclude?.includes(filePath) || !entry.isFile()) { return }
    const extname = path.extname(filePath)
    const stat = statSync(filePath);
    if (extensions.includes(extname)) {
      if (after?.hasOwnProperty(filePath)) {
        if (stat.mtimeMs <= after[filePath]) { return }
      }
      configFiles.push(filePath)
    }
  });

  return configFiles;
}

export function getConfigs(directoryPath: string, filter?: ConfigFilesFilter) {
  const files = getConfigFileNames(directoryPath, filter);
  return files.map(file => ConfigFile.loadSync(file)).filter(config => config !== undefined)
}

export function saveConfigFile(filename: string, config: any, extLevel = 1) {
  return ConfigFile.saveSync(filename, config, {extLevel})
}
