[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ConfigFile

# Class: ConfigFile

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:30

Represents a configuration file utility class that provides methods to load and save configuration files.
It supports multiple file formats such as YAML, JSON, etc., by registering corresponding parsers and stringifiers.

## Example

```typescript
// Register a custom file type handler
ConfigFile.register('.custom', (content) => {
  return { data: content.toUpperCase() }; // Example parser
}, (obj) => {
  return obj.data.toLowerCase(); // Example stringifier
});

// Save a configuration file
ConfigFile.saveSync('config.custom', { key: 'value' });

// Load a configuration file
const config = ConfigFile.loadSync('config.custom');
console.log(config); // Output: { key: 'value' }
```

## Constructors

### new ConfigFile()

> **new ConfigFile**(): [`ConfigFile`](ConfigFile.md)

#### Returns

[`ConfigFile`](ConfigFile.md)

## Properties

### stringifys

> `static` **stringifys**: `Record`\<`string`, `StringifyFunc`\>

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:34

A record of registered stringify functions for different file extensions.

## Methods

### loadSync()

> `static` **loadSync**(`filename`, `options`?): `any`

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:61

Loads a configuration file based on the provided filename and options.

#### Parameters

##### filename

`string`

The path to the configuration file.

##### options?

`LoadConfigFileOptions`

Additional options for loading the configuration file.

#### Returns

`any`

The parsed configuration object.

#### Example

```typescript
const config = ConfigFile.loadSync('config.yaml');
console.log(config); // Output: { key: 'value' }
```

***

### register()

> `static` **register**(`extname`, `parser`, `stringify`): `void`

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:47

Registers a parser and stringifier for specific file extensions.

#### Parameters

##### extname

The file extension(s) to register the parser and stringifier for.

`string` | `string`[]

##### parser

(`content`) => `any`

A function that parses the file content into an object.

##### stringify

`StringifyFunc`

A function that converts an object back into file content.

#### Returns

`void`

#### Example

```typescript
ConfigFile.register(['.json'], JSON.parse, (obj) => JSON.stringify(obj, null, 2));
```

***

### saveSync()

> `static` **saveSync**(`filename`, `config`, `options`?): `string`

Defined in: node\_modules/.pnpm/@isdk+util@0.3.0/node\_modules/@isdk/util/dist/index.d.ts:75

Saves a configuration object to a file with the specified filename and options.

#### Parameters

##### filename

`string`

The path where the configuration file should be saved.

##### config

`any`

The configuration object to save.

##### options?

`LoadConfigFileOptions`

Additional options for saving the configuration file.

#### Returns

`string`

The final filename where the configuration was saved.

#### Example

```typescript
ConfigFile.saveSync('config.json', { key: 'value' });
```
