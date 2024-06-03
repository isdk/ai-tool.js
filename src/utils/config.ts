import {readdirSync, type Dirent} from 'fs'
import path from 'path'
import { Config as ConfigFile } from 'load-config-file'
import { parse } from 'yaml'
import { regexp } from 'yaml-types'

export { stringify as stringifyYaml } from 'yaml'

const YamlTags = [regexp]

export function registerYamlTag(tags: any) {
  if (!Array.isArray(tags)) {
    tags = [tags]
  }
  for (const tag of tags) {
    const result = YamlTags.indexOf(tag) === -1
    if (result) { YamlTags.push(tag) }
  }
}

export function parseYaml(content: string) {
  return parse(content, {customTags: YamlTags})
}

function parseJson(content: string) {
  return JSON.parse(content)
}

ConfigFile.register(['.yml', '.yaml'], parseYaml)
ConfigFile.register(['.json'], parseJson)

export { ConfigFile }

function traverseFolderSync(directoryPath: string, fileHandler: (filePath: string, entry: Dirent) => void) {
  const files = readdirSync(directoryPath, { withFileTypes: true, recursive: true });

  for (const entry of files) {
    const filePath = path.join(directoryPath, entry.name);

    if (entry.isFile()) {
      fileHandler(filePath, entry);
    }
  }
}

export function getConfigFileNames(directoryPath: string) {
  const configFiles: string[] = [];

  traverseFolderSync(directoryPath, (filePath) => {
    const extname = path.extname(filePath);
    if (extname === '.yml' || extname === '.yaml' || extname === '.json') {
      configFiles.push(filePath);
    }
  });

  return configFiles;
}

export function getConfigs(directoryPath: string) {
  const files = getConfigFileNames(directoryPath);
  return files.map(file => ConfigFile.loadSync(file)).filter(config => config !== undefined)
}