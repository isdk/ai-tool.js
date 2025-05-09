# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.6.0](https://github.com/isdk/ai-tool.js/compare/v0.5.8...v0.6.0) (2025-04-04)


### ⚠ BREAKING CHANGES

* uses @isdk/util
* extract PrmoptTemplates as @isdk/template-engines

### Features

* add resolveSymlinks option ([b0ee949](https://github.com/isdk/ai-tool.js/commit/b0ee9498dddfa5222989cf00502bb34c601df743))


### Refactor

* extract filename related functions to @isdk/util ([7903c21](https://github.com/isdk/ai-tool.js/commit/7903c21621167d0a92bb8854ffc6de7d95f0793f))
* extract getMultiLevelExtname to @isdk/util ([801f271](https://github.com/isdk/ai-tool.js/commit/801f27101d518c0d4986d82d0d05d139ff6df581))
* extract PrmoptTemplates as @isdk/template-engines ([1d95234](https://github.com/isdk/ai-tool.js/commit/1d952348af2f60b02e401e62a7110ef7c7a7e8e2))
* uses @isdk/util ([4676dee](https://github.com/isdk/ai-tool.js/commit/4676deeb8aa340b0797ead9fcb2dc6a7ce59b73a))

## [0.5.8](https://github.com/isdk/ai-tool.js/compare/v0.5.7...v0.5.8) (2025-03-22)

## [0.5.7](https://github.com/isdk/ai-tool.js/compare/v0.5.6...v0.5.7) (2025-03-17)


### Features

* add alias option to ToolFunc ([c79b660](https://github.com/isdk/ai-tool.js/commit/c79b66002564cdad79b668b6133dd66d3560ca83))


### Bug Fixes

* should unregister alias too ([24a1aa8](https://github.com/isdk/ai-tool.js/commit/24a1aa8225b69a9f5700574863e517736665a39a))

## [0.5.6](https://github.com/isdk/ai-tool.js/compare/v0.5.5...v0.5.6) (2025-03-17)


### Bug Fixes

* config files merge order error ([7603499](https://github.com/isdk/ai-tool.js/commit/760349925bceb5de6b4188926a13bfb3f0ce4ced))

## [0.5.5](https://github.com/isdk/ai-tool.js/compare/v0.5.4...v0.5.5) (2025-03-16)

## [0.5.4](https://github.com/isdk/ai-tool.js/compare/v0.5.3...v0.5.4) (2025-03-16)

## [0.5.3](https://github.com/isdk/ai-tool.js/compare/v0.5.2...v0.5.3) (2025-03-16)

## [0.5.2](https://github.com/isdk/ai-tool.js/compare/v0.5.1...v0.5.2) (2025-03-16)

## [0.5.1](https://github.com/isdk/ai-tool.js/compare/v0.5.0...v0.5.1) (2025-03-16)

## [0.5.0](https://github.com/isdk/ai-tool.js/compare/v0.4.0...v0.5.0) (2025-03-16)


### ⚠ BREAKING CHANGES

* change pendingCount() function to pendingCount property
* upgrade the eventsource and eventsource-parser

### Features

* add activeCount to BinarySemaphore ([0114ae3](https://github.com/isdk/ai-tool.js/commit/0114ae31533cb7ebbdf418a059c901c7ea9c3f5a))
* add assignDirs func ([7c06ea1](https://github.com/isdk/ai-tool.js/commit/7c06ea1e4ffca820070dfb389c37dc5e1e047f90))
* add async hash func ([e83274d](https://github.com/isdk/ai-tool.js/commit/e83274dfb0f1021caae1ab7efe33e25b31c44bd7))
* add deque class ([dcc9abe](https://github.com/isdk/ai-tool.js/commit/dcc9abe7e2619ced6a9b0de843398696bb56af5f))
* add env(js) prompt templatet ([1541fbe](https://github.com/isdk/ai-tool.js/commit/1541fbecd730b5dc0abb51378c8ee20a79740907))
* add getEnvVairables ([85a1d9f](https://github.com/isdk/ai-tool.js/commit/85a1d9f798587e76d1542e56dbb3df43b5018124))
* add isReadyFn feature to Semaphore ([defc460](https://github.com/isdk/ai-tool.js/commit/defc460f95285dacda996546c2ffbd7bdf2d93bb))
* add isReadyFn option ([8919508](https://github.com/isdk/ai-tool.js/commit/8919508968faecd834b4d8a9708ddcc39fc43d07))
* add isSameString func ([22296b5](https://github.com/isdk/ai-tool.js/commit/22296b556553722cd432ec900c3cb4ed0281ca0b))
* add load-config ([1768a07](https://github.com/isdk/ai-tool.js/commit/1768a0716c5d6b03cdf5c3f21c8f6005bbee70ed))
* add node/before-shutdown ([ec7b07d](https://github.com/isdk/ai-tool.js/commit/ec7b07df184e3f698f1500af9ea7ef17b7cacacd))
* add NullLiteral and split following the python function ([df32d95](https://github.com/isdk/ai-tool.js/commit/df32d950ab0ad76651ca50bc6d998f04bf8614af))
* add ObjectArgsToArgsInfo func ([f2595f3](https://github.com/isdk/ai-tool.js/commit/f2595f3c6d2f1a242a1db9f3b7a4547bebe23e89))
* add semaphore ability(not ready yet) ([9a25719](https://github.com/isdk/ai-tool.js/commit/9a257196415139c7123dab347f277b34de990393))
* add signaled readonly property ([9c7f338](https://github.com/isdk/ai-tool.js/commit/9c7f338c75ce38c29fd119cc6426faeac0290137))
* add SignalGate class ([e5a3b12](https://github.com/isdk/ai-tool.js/commit/e5a3b128d1fd66ea3f483fce132b7347da98041c))
* add thinking field to AIChatMessageParamBase ([efb1006](https://github.com/isdk/ai-tool.js/commit/efb10067890fc014ce0d100feed17b0130a20f0a))
* add tools option to AIChatMessageParamBase ([bed7c27](https://github.com/isdk/ai-tool.js/commit/bed7c276d7ffdbff2e03c75c585c74430fa5b718))
* CancelableAbility can supports any class now ([07fcce4](https://github.com/isdk/ai-tool.js/commit/07fcce48db5ef72fdf9ad57c468e5f6a3969bbde))
* export events ([b5e0186](https://github.com/isdk/ai-tool.js/commit/b5e0186e167d2f769a7834e5234b8a856001c6cd))
* export SecondaryCache, LRUCache direrctly ([d5afd6e](https://github.com/isdk/ai-tool.js/commit/d5afd6e4ea188495b59feb0c5c3abf0076c80d22))
* export wrapEventEmitter ([7e389e0](https://github.com/isdk/ai-tool.js/commit/7e389e04a038937a39b7e5619d4aedc266d4cf2b))
* **jinja2:** add split method to string ([ba460f6](https://github.com/isdk/ai-tool.js/commit/ba460f6f9c08aef24e89caf463ab685ff6c3de6d))
* **jinja:** add join filter for array ([46d8c2c](https://github.com/isdk/ai-tool.js/commit/46d8c2c0b13c325451dafb05afe8dc0c8f1c1c75))
* the boolean true/false value is casse insensitive now ([b6eca75](https://github.com/isdk/ai-tool.js/commit/b6eca7569b904e336ec0ca9fbbfe9ea71c6d78bf))
* **ts:** add AIChatTool types ([310cfd0](https://github.com/isdk/ai-tool.js/commit/310cfd04a7a0584aecac46149eb459f14d8cfd31))


### Bug Fixes

* env(js) template should getEnvVairables correctly ([99c5ec9](https://github.com/isdk/ai-tool.js/commit/99c5ec921ffcf49a77e58ac3d2fe26d213e61fb6))
* getKeysPath should supports self-referential object ([876c3bb](https://github.com/isdk/ai-tool.js/commit/876c3bb37654a45b1899d3b60141d76ca902d4f8))
* Semaphore isReadyFn should work on maxConcurrency = 0 ([f7a39d9](https://github.com/isdk/ai-tool.js/commit/f7a39d9cb28079f92b7ba5c7c0fab2eca3b74956))
* should allow . char ([f6e5efb](https://github.com/isdk/ai-tool.js/commit/f6e5efb51b3fcd2f07ec6aea1a80a45e8a9d57d9))
* should bind this to isReadyFn ([1d6a0d8](https://github.com/isdk/ai-tool.js/commit/1d6a0d8234d20370ee443ede5323c192d21936fd))
* **ts:** dynamic role name ([da8ee11](https://github.com/isdk/ai-tool.js/commit/da8ee11d565a72f62b17b8ce4809952ec2273ce7))
* upgrade the eventsource-parser to v3 ([0acb41c](https://github.com/isdk/ai-tool.js/commit/0acb41cb4b22ba466213368f3400604c73e7e176))


### Refactor

* add options argument for yaml ([b70ea66](https://github.com/isdk/ai-tool.js/commit/b70ea66727ce8c04b631a392d320db02c389548a))
* change pendingCount() function to pendingCount property ([83cd20d](https://github.com/isdk/ai-tool.js/commit/83cd20d8c95caae7a74cc915e49feba3bb453b8d))
* export isQuoted, isStrWrapped funcs ([60de89c](https://github.com/isdk/ai-tool.js/commit/60de89c049ed3fcb4d4d87ce8bf366f47956d2d6))
* extract BinarySemaphore from Semaphore ([338ca93](https://github.com/isdk/ai-tool.js/commit/338ca93c9ce901dda702a24d71472221cf02607a))
* isReadyFn ([5a29b9a](https://github.com/isdk/ai-tool.js/commit/5a29b9ae4ccb1540d120e263cd15fba79632e81f))
* rollback AIChatMessageToolCall arguments to string ([4544bee](https://github.com/isdk/ai-tool.js/commit/4544bee5cc11064b5efe9a33de62f68e6f0a0998))
* upgrade the eventsource and eventsource-parser ([49b5334](https://github.com/isdk/ai-tool.js/commit/49b5334e00bce82a1057af944215a826de1124f3))

## [0.4.0](https://github.com/isdk/ai-tool.js/compare/v0.3.0...v0.4.0) (2024-12-17)


### ⚠ BREAKING CHANGES

* add raiseError option and defaults to not raise error

### Features

* add raiseError option and defaults to not raise error ([b081317](https://github.com/isdk/ai-tool.js/commit/b0813174e9b350ae47231f8e5f885150313123b0))

## [0.3.0](https://github.com/isdk/ai-tool.js/compare/v0.2.3...v0.3.0) (2024-12-15)


### ⚠ BREAKING CHANGES

* add readTextFileChunksEx func and readTextFileChunks no completeSentence supports
* following the newline paragraph for pure text now
* use qwen2.5 as default llm token estimate count
* add truncLastSection option
* parseJsJson from sync to async
* add corrected option
* seperate a new line if next line is a list section
* add best, completeSentence options to truncateToTokenLimit

### Features

* add assigner and ignoreIndexNamed options ([a555ff7](https://github.com/isdk/ai-tool.js/commit/a555ff7cf6f3cf318c01d91be2bbd4c9d1521d20))
* add assigner option ([a8c9ef8](https://github.com/isdk/ai-tool.js/commit/a8c9ef87ed0776a3a016ceafdbd2138e6e3157b1))
* add best, completeSentence options to truncateToTokenLimit ([3f8f800](https://github.com/isdk/ai-tool.js/commit/3f8f800f7da169dc12843d6956be4f7f98a27c24))
* add bySentence option(NOT FINED) ([be3f0f1](https://github.com/isdk/ai-tool.js/commit/be3f0f1292d554c78b46789b3d7512719b37f5a2))
* add completeSentence option ([0f97bb5](https://github.com/isdk/ai-tool.js/commit/0f97bb50a7b0a584a9aba0f7d5574307e18eb882))
* add corrected option ([8943253](https://github.com/isdk/ai-tool.js/commit/89432533c82294c355ee979c0d33a12698d5ae52))
* add countLLMTokens callback option ([3c8417f](https://github.com/isdk/ai-tool.js/commit/3c8417f32d5a25709a48a9f7f6502578d4c090c3))
* add createYamlObjectTag ([471f8c2](https://github.com/isdk/ai-tool.js/commit/471f8c2e170112e7c19d5ffb6a180aac2ec5af7c))
* add decodeCharset ([5be90be](https://github.com/isdk/ai-tool.js/commit/5be90beb229b8b70a64745cdd0c6f7b7fd902315))
* add detect the language whether base on the space sperated ([1dcb85f](https://github.com/isdk/ai-tool.js/commit/1dcb85f9d0b77ed666b07444f46560c450f72dd8))
* add detectCharset func ([5427def](https://github.com/isdk/ai-tool.js/commit/5427defd413ef88c46aca078c48664c0e78c5d97))
* add EMPHASIS_INLINE_BLOCK process ([ac9c2dc](https://github.com/isdk/ai-tool.js/commit/ac9c2dce13ca50e191cb0cd9c973536ec274f4af))
* add file argument to isFileMatched callback for readFilenamesRecursiveSync ([e78113a](https://github.com/isdk/ai-tool.js/commit/e78113ac610961a2c1c0e35dbeabf585ae4f74b3))
* add formatTextWithSpace ([87107d9](https://github.com/isdk/ai-tool.js/commit/87107d9267ee1163f057bbe9b98596efe671b2b4))
* add getFileMetaInfo and hashFile ([b82de24](https://github.com/isdk/ai-tool.js/commit/b82de24be2ab9136d9ee02a920caf69807eb8faf))
* add hashStream ([f61ec08](https://github.com/isdk/ai-tool.js/commit/f61ec08dbc868888ad6ad17596d83d42112e3922))
* add IFileMetaInfo ([e14a2f1](https://github.com/isdk/ai-tool.js/commit/e14a2f1acf28f969503fce0c3c607bdd41b44e70))
* add ignoreEmptyLine option to splitSentence and add removeMarkdownBold, removeMarkdownItalic, removeMarkdownBoldAndItalic funcs ([2449990](https://github.com/isdk/ai-tool.js/commit/2449990ba65c6f8e74417e77633308632086c26c))
* add isMarkdown option ([ec0d1ee](https://github.com/isdk/ai-tool.js/commit/ec0d1ee86f829b47900390b00bc0ce1aa4cca675))
* add isTitleString, isListItemString funcs ([a08b936](https://github.com/isdk/ai-tool.js/commit/a08b9362e1d4195c4e4105d0e6d82735a1f5ddf1))
* add line end long words hyphen supports ([1910ac2](https://github.com/isdk/ai-tool.js/commit/1910ac235d82c1fdfb775a8b0178b2115991186a))
* add llm-tokenizer ([cf0517b](https://github.com/isdk/ai-tool.js/commit/cf0517b68abd2958afe090b1b8c2481ac7de80e6))
* add more hash algorithm ([655d91b](https://github.com/isdk/ai-tool.js/commit/655d91bf19861d8fdc4dfcb661e27a72eefb63e3))
* add more markdown format to completeSentences ([11a28da](https://github.com/isdk/ai-tool.js/commit/11a28da6b88be3c860b95b0a2df498cd31a6f9b2))
* add placehoders option ([46b1b7a](https://github.com/isdk/ai-tool.js/commit/46b1b7ae52cf46cf682745def34b49fcc46a095a))
* add preserveUnresolvedName option ([1c07ba5](https://github.com/isdk/ai-tool.js/commit/1c07ba5bc31d4514a9c06433fb0f2a1dc7ad0264))
* add readTextFileChunks ([c81b475](https://github.com/isdk/ai-tool.js/commit/c81b4757e845e0a07c0b8da48e644a4e69a739f7))
* add readTextFileChunksEx func and readTextFileChunks no completeSentence supports ([5e84f78](https://github.com/isdk/ai-tool.js/commit/5e84f78cdb07ebd01978fa55fc826352dc00b1a0))
* add replaceWithPlaceholder,restoreFromPlacehoders funcs ([3085a32](https://github.com/isdk/ai-tool.js/commit/3085a324aa9e39eaa1b76337aebbbc1275c92c0b))
* add sep line supports ([7cb40b9](https://github.com/isdk/ai-tool.js/commit/7cb40b9bfe782b2008b879a07a6182f08c5d20ee))
* add skipExpression option ([3ae1712](https://github.com/isdk/ai-tool.js/commit/3ae17121a9ec4f5c7116775b658233bd7d9093ed))
* add splitChunks ([ed484f9](https://github.com/isdk/ai-tool.js/commit/ed484f961c84ee426b3363a28dc725f1eb5b0944))
* add splitParagraph func ([35c6b0a](https://github.com/isdk/ai-tool.js/commit/35c6b0a6b04ec22c71bdff406c8331c2a048217c))
* add stripConsoleColor func ([e010be5](https://github.com/isdk/ai-tool.js/commit/e010be584cb6c92de962c933eba5232c7c2f3fcb))
* add toRole, reply, private properties ([8a83be9](https://github.com/isdk/ai-tool.js/commit/8a83be9e51413fc15a67643d77731cc313fd5da8))
* add truncateToTokenLimit ([83a4b68](https://github.com/isdk/ai-tool.js/commit/83a4b6877ff9cc20cc21e902a4c098fe21ab7984))
* add truncateToTokenLimitEx ([81195dc](https://github.com/isdk/ai-tool.js/commit/81195dc927a6392f3d442d6ca3c6761de84ddc74))
* add truncLastSection option ([b0a6404](https://github.com/isdk/ai-tool.js/commit/b0a6404bc0602fc7fe33ae32d51356bf9c555b96))
* loads a text file with detected encoding automatically(loadTextFromPaths) ([b8a75c9](https://github.com/isdk/ai-tool.js/commit/b8a75c9621db109493b31b68788a075021814fa9))
* pass options to splitSentences ([5067abc](https://github.com/isdk/ai-tool.js/commit/5067abca3cba4a119b7baf69ab245c929ebeec5d))
* split code block as a sentence ([2ff46f6](https://github.com/isdk/ai-tool.js/commit/2ff46f6cefc197841d06ad954d978e35a9f0755a))
* the directory should check isFileMatched now ([ecb654c](https://github.com/isdk/ai-tool.js/commit/ecb654c348ca8f1456fcf57369f23632fd55350d))
* ts declration ([138ceeb](https://github.com/isdk/ai-tool.js/commit/138ceeb2a5576b6e9f41673a1fad11c8366a9463))


### Bug Fixes

* cache dir should be package root always ([a418211](https://github.com/isdk/ai-tool.js/commit/a4182118d870b411a3fc2881d83f646e88ddeb94))
* can not template data if no scope ([1065a9c](https://github.com/isdk/ai-tool.js/commit/1065a9c670e7fb2bcdcc83fbaaf251cc5c0b02ae))
* can pass undefined property name as undefined value now ([7517f89](https://github.com/isdk/ai-tool.js/commit/7517f89f5e505fe014927a3fe1fe61d289f5076c))
* can pass undefined property name as undefined value now ([79a05fe](https://github.com/isdk/ai-tool.js/commit/79a05fe5f70510a40751de997adefdb09605ea5b))
* correct the last sentence ([1530801](https://github.com/isdk/ai-tool.js/commit/15308016adb27906e6f6395cbe79b460cff9a496))
* follow the corrected option ([eed5b15](https://github.com/isdk/ai-tool.js/commit/eed5b154157a047cd533b5448ca71338e01f4b01))
* following the newline paragraph for pure text now ([87ee2e8](https://github.com/isdk/ai-tool.js/commit/87ee2e89314612043b3477dae18fab3ec9917f04))
* forget calc "\n" ([9d782d3](https://github.com/isdk/ai-tool.js/commit/9d782d31044427c725c39371abbe3e04a89fa0e4))
* isTitleString check markdown title ([36919e2](https://github.com/isdk/ai-tool.js/commit/36919e258b7d1bbf4ecd81d4034ba229d1133798))
* keep markdown paragraph ([7a0a170](https://github.com/isdk/ai-tool.js/commit/7a0a1703fa0b87826d3f0fcef186ed5960fc08e3))
* level algorithm error ([8e52e24](https://github.com/isdk/ai-tool.js/commit/8e52e24871cb41105fc3f194af18e30f17bc87ff))
* level algorithm error and symlink supports ([db570ab](https://github.com/isdk/ai-tool.js/commit/db570ab0a172b60bc42a3bb626a6c732bb5743ed))
* markdown heading text with mutli sentences should not be split ([238a6b4](https://github.com/isdk/ai-tool.js/commit/238a6b4ed3d242c6118bd9d73eb81ec8c66a7071))
* omit the funtions from scope for template format ([a622ea6](https://github.com/isdk/ai-tool.js/commit/a622ea67b679b80b512c84c63390c29d16cb1174))
* seperate a new line if next line is a list section ([77e514b](https://github.com/isdk/ai-tool.js/commit/77e514b9c61d5bb19e1b210081aa8d75922f77c5))
* should be one sentence even if new line exists ([a328399](https://github.com/isdk/ai-tool.js/commit/a3283991d7065e3d6279aea9ba18a554520cfea1))
* should split by sentence even if no trunc ([079734a](https://github.com/isdk/ai-tool.js/commit/079734a6532852d4e2c7d326200c8cf2da54bce4))
* should throw error if all content removed ([edebbfd](https://github.com/isdk/ai-tool.js/commit/edebbfdf0a72d2f77b9330b4abb79fbca5a27660))
* should throw error if single sentence can not fit the size ([bce590a](https://github.com/isdk/ai-tool.js/commit/bce590aa6e4458dc60bb4065d2ecc8a04fb37ec1))
* store markdown heading text first to avoid split heading ([54b0b50](https://github.com/isdk/ai-tool.js/commit/54b0b503a643b6dbda0d4d6c99ad0c9787262485))
* treat "1." without spaces as numberic list ([cc32898](https://github.com/isdk/ai-tool.js/commit/cc328982d864a1206db81bd7784788093f148916))


### Refactor

* add optional sentences option ([40ac530](https://github.com/isdk/ai-tool.js/commit/40ac530952ff0ae737ff717796e69bfc7fd5a80d))
* extract getArgValue ([29aed88](https://github.com/isdk/ai-tool.js/commit/29aed88667fc3cebb57fc4fe495b531001e7203a))
* parseJsJson from sync to async ([6147d86](https://github.com/isdk/ai-tool.js/commit/6147d86632b41807e636df61054178e9702bee2b))
* toRole, replies ([e324043](https://github.com/isdk/ai-tool.js/commit/e324043799402aa2caa41711a9168487ab85c166))
* use object instead of array ([9ce8e06](https://github.com/isdk/ai-tool.js/commit/9ce8e06d506c676b52f7c6ebd7a999893c638040))
* use qwen2.5 as default llm token estimate count ([a6dbfae](https://github.com/isdk/ai-tool.js/commit/a6dbfae32469558fa5f925f1bb3227f8e12d4867))

## [0.2.3](https://github.com/isdk/ai-tool.js/compare/v0.2.2...v0.2.3) (2024-09-30)


### Features

* **util:** add hasDirectoryIn and isSubdirectory funcs ([718997b](https://github.com/isdk/ai-tool.js/commit/718997b3ef3551f7a22ffe2052ccd10e877f951b))
* **util:** add RegExp func ([799d5bb](https://github.com/isdk/ai-tool.js/commit/799d5bb25ef79908243c5f22ad764b8ebed36395))


### Bug Fixes

* stringifyYaml should use customTags too ([fe6b47f](https://github.com/isdk/ai-tool.js/commit/fe6b47f429fb128627d2210e367fa914b891d314))

## [0.2.2](https://github.com/isdk/ai-tool.js/compare/v0.2.1...v0.2.2) (2024-09-25)


### Refactor

* easy extends any props for AIResult ([37ada54](https://github.com/isdk/ai-tool.js/commit/37ada542a786fbbc770f2d61beb564f6e603941d))
* to keep openai compatibility ([e480d37](https://github.com/isdk/ai-tool.js/commit/e480d372a978acf9553c7e753dd34f2c3f65318f))
* to keep openai compatibility ([e0a73f9](https://github.com/isdk/ai-tool.js/commit/e0a73f964b47e1648a79a6c60d60d5dae97ff738))

## [0.2.1](https://github.com/isdk/ai-tool.js/compare/v0.2.0...v0.2.1) (2024-09-17)


### Bug Fixes

* TS1536: Octal escape sequences and backreferences are not allowed in a character class. ([5f9f008](https://github.com/isdk/ai-tool.js/commit/5f9f0083c734722103ff5468e424b48c212a55f0))

## [0.2.0](https://github.com/isdk/ai-tool.js/compare/v0.1.5...v0.2.0) (2024-09-16)


### ⚠ BREAKING CHANGES

* extract common-error to @isdk/common-error
* move find-port to src/utils

### Features

* add getPackageDir func ([c5e6203](https://github.com/isdk/ai-tool.js/commit/c5e620338f3b80d6ef09148577c5087098896d8b))


### Bug Fixes

* can not export ([f8dde4e](https://github.com/isdk/ai-tool.js/commit/f8dde4efbe84551b2511dd543bdad2f1208b7353))
* do not expand the null object ([7ea2b27](https://github.com/isdk/ai-tool.js/commit/7ea2b276165074c4450f8fc3995ad5182f8edfdb))
* **utils:** ts declaration ([f0ef0ef](https://github.com/isdk/ai-tool.js/commit/f0ef0efd8143e391cdf4d69558e6a55b76e4b63b))


### Refactor

* extract common-error to @isdk/common-error ([a577ff3](https://github.com/isdk/ai-tool.js/commit/a577ff321deef5a85a8bef1b3b2db65b3d3c4b9d))
* move find-port to src/utils ([78a211d](https://github.com/isdk/ai-tool.js/commit/78a211dd392b39e166244aeb3635fd7752bc4d3a))

## [0.1.5](https://github.com/isdk/ai-tool.js/compare/v0.1.4...v0.1.5) (2024-09-02)

## [0.1.4](https://github.com/isdk/ai-tool.js/compare/v0.1.3...v0.1.4) (2024-09-02)


### Bug Fixes

* **parse-command:** template string escape error ([c88a9f1](https://github.com/isdk/ai-tool.js/commit/c88a9f179b129c3f6d28b6a0f9e682e41997bc83))

## [0.1.3](https://github.com/isdk/ai-tool.js/compare/v0.1.2...v0.1.3) (2024-09-01)


### Features

* **parse-command:** extract simplifyObjectArguments ([727ad33](https://github.com/isdk/ai-tool.js/commit/727ad337acba85b160efbc4d039daefcc8371127))

## [0.1.2](https://github.com/isdk/ai-tool.js/compare/v0.1.1...v0.1.2) (2024-08-31)


### Features

* add level option to readFilenamesRecursiveSync ([e0a5d5e](https://github.com/isdk/ai-tool.js/commit/e0a5d5e09c6700f03e2ada2e5057c18bbb7f1a74))
* **parse-command:** add templateData, templateFormat option ([f128632](https://github.com/isdk/ai-tool.js/commit/f1286325d66bad2db7ff2023670f58a7a7fd5c90))
* **parse-commnad:** add ParseObjectArgumentOptions ([2760271](https://github.com/isdk/ai-tool.js/commit/276027198dfb94a78fa69e419e4bf5f5fe326cbb))
* **util:** add memoize ([a78684a](https://github.com/isdk/ai-tool.js/commit/a78684a08e213a2fb9a94720914e98ab0c8b5233))


### Bug Fixes

* add normalizer option ([66a1bcb](https://github.com/isdk/ai-tool.js/commit/66a1bcb6aaf66798085b80fdcbc5cb3485dbd1a8))
* do not treat arraw function as expression result ([d053ee3](https://github.com/isdk/ai-tool.js/commit/d053ee3be226e0797c8a40e4180608b9fd9c5037))
* normalizer not work ([0f7647b](https://github.com/isdk/ai-tool.js/commit/0f7647bc7b7ae36d3343e4e2d5a6cde920301ef7))
* **parse-command:** minor bug fixed ([c9793a9](https://github.com/isdk/ai-tool.js/commit/c9793a9c9d1885b538d72ef813b308ed087a668a))
* **parse-command:** returnArrayOnly glitch ([3cf8f4c](https://github.com/isdk/ai-tool.js/commit/3cf8f4c296765d9711118e94f3d0fa4ac75428a7))
* **parse-command:** the named arg should verify value too ([efa9d3b](https://github.com/isdk/ai-tool.js/commit/efa9d3b163f911ac081818897e8d57c382793fc7))
* should visit canonicalize ([86fab90](https://github.com/isdk/ai-tool.js/commit/86fab902ff37a68621e94392b2613c9d9d8cc438))

## [0.1.1](https://github.com/isdk/ai-tool.js/compare/v0.1.0...v0.1.1) (2024-08-28)


### Features

* add parse command ([67c1c08](https://github.com/isdk/ai-tool.js/commit/67c1c08e37a7fbac19e94edcee033953f6cee353))
* **load-file-from-paths:** add fileIsExists ([e79b5a0](https://github.com/isdk/ai-tool.js/commit/e79b5a0dea6c72a3c469fa89c78cc698fe14775b))
* **parse-command:** add expression arg supports ([87bcc39](https://github.com/isdk/ai-tool.js/commit/87bcc39e9840213ab34ac26f65c01ed38201b944))
* **parse-command:** add parseObjectArgumentInfos func ([3df5dc0](https://github.com/isdk/ai-tool.js/commit/3df5dc0271fa045569b36182bd61c9223595a731))
* **parse-command:** add returnArrayOnly option ([8a3868f](https://github.com/isdk/ai-tool.js/commit/8a3868f1f1961a33972820a784c6998cd4d59eb2))


### Bug Fixes

* **filterValidFnScope:** should allow scope is optional ([e2bebb1](https://github.com/isdk/ai-tool.js/commit/e2bebb1952f8ddfbbed88256bde31522d792b51d))
* **parse-command:** add filterValidFnScope ([bc1a97d](https://github.com/isdk/ai-tool.js/commit/bc1a97dabcb6599e292a0944fe49213fed45d128))
* **parse-js-json:** filter only Valid Scope by filterValidFnScope ([29b98b1](https://github.com/isdk/ai-tool.js/commit/29b98b1d7fb159b9fdc363b6ea97807f567548bb))


### Refactor

* **parse-js-json:** optimize perform ([497b1d6](https://github.com/isdk/ai-tool.js/commit/497b1d6ab755da2640caf05a15ab6035fe61b60c))

## [0.1.0](https://github.com/isdk/ai-tool.js/compare/v0.0.10...v0.1.0) (2024-08-23)


### ⚠ BREAKING CHANGES

* ToolFunc can be used as Server Tool now: set isApi to true

### Features

* ToolFunc can be used as Server Tool now: set isApi to true ([4e03b8d](https://github.com/isdk/ai-tool.js/commit/4e03b8d2ea1ebd1da2cc9417e43f47aa4f143f5e))
* **util:** add countRegexMatches func ([068b46a](https://github.com/isdk/ai-tool.js/commit/068b46a0518befb5502ade881694461123a9d3e5))


### Bug Fixes

* **ts:** ignore error TS6133 "_match is declared but its value is never read" ([262bec6](https://github.com/isdk/ai-tool.js/commit/262bec683a365fd77a8c1ea7cbf9a636e19c4ce2))


### Refactor

* extract rpc-methods-server-tool from res-server-tools ([f83adda](https://github.com/isdk/ai-tool.js/commit/f83adda93027ec6847b7e4df00c9383518d996b0))

## [0.0.10](https://github.com/isdk/ai-tool.js/compare/v0.0.9...v0.0.10) (2024-08-18)


### Features

* **jinja:** add macro support from hf ([934ec0f](https://github.com/isdk/ai-tool.js/commit/934ec0ffcdd58c19f9e638c420c11d9eb4a4ea57))


### Refactor

* **jinja:** use user-defined filter instead of builtin tojson ([1b97d67](https://github.com/isdk/ai-tool.js/commit/1b97d67ae56215b08af37f13f053f96101df2cb0))

## [0.0.9](https://github.com/isdk/ai-tool.js/compare/v0.0.8...v0.0.9) (2024-08-16)


### Features

* **jinja:** tojson filter with indent argument support ([267cd5c](https://github.com/isdk/ai-tool.js/commit/267cd5c437c220f88cacad2819acaf151baea9a0))
* **load-file-from-paths:** add signal option ([2e6a034](https://github.com/isdk/ai-tool.js/commit/2e6a034b999f9d3daab3b0c258977198a54971d4))
* **saveConfigFile:** return saved filename ([c2cbe60](https://github.com/isdk/ai-tool.js/commit/c2cbe6039817535b740ff3ca5f97829770039649))


### Bug Fixes

* **jinja:** the filter expression can support object arguments now ([b37b0a0](https://github.com/isdk/ai-tool.js/commit/b37b0a0611729c23535aacc11783b0257877204f))

## [0.0.8](https://github.com/isdk/ai-tool.js/compare/v0.0.7...v0.0.8) (2024-08-11)


### Features

* add async-semaphore class ([554d3d3](https://github.com/isdk/ai-tool.js/commit/554d3d34a71cea6d8b2e1d583cb0e9c5ac4ebb7f))
* add cancelable-ability ([1b59eed](https://github.com/isdk/ai-tool.js/commit/1b59eed2da6d997dac71e108ac7e4e0593a87886))
* add convert-params-size func ([f40be61](https://github.com/isdk/ai-tool.js/commit/f40be61104264410162141fc4be92bb3eb158adf))
* add datetime helper functions ([a690b78](https://github.com/isdk/ai-tool.js/commit/a690b786bdf64c40ef1f942a69da8731f9ece9e1))
* add exclude option to load-file-from-paths ([584a625](https://github.com/isdk/ai-tool.js/commit/584a62514ca79e5d768c2785b9039b615dea090d))
* add IntSet class ([3891766](https://github.com/isdk/ai-tool.js/commit/3891766d2619d1ce7eb92f6f5060889c1580d968))
* add isWebStream func ([c97c2f9](https://github.com/isdk/ai-tool.js/commit/c97c2f9b9f7697614aa2469b18e88644dca502ff))
* add jsonToMarkdownStr func ([f426592](https://github.com/isdk/ai-tool.js/commit/f4265928fccdf23a1dcd127f570dcb96baa78258))
* add messagesToText func ([60f82c0](https://github.com/isdk/ai-tool.js/commit/60f82c0789d9352733b3bd28086a62e54b7cd568))
* add readFilenamesRecursiveSync func ([a1c321a](https://github.com/isdk/ai-tool.js/commit/a1c321ae99b4006af655290fe94a3f7adb6c4683))
* add ToolFuncPackage type ([d2bbd91](https://github.com/isdk/ai-tool.js/commit/d2bbd9139125886ac4255cd21a8e21100e003c16))
* **AITextGenerationFinishReasons:** add taskId for stream chunk ([b688b47](https://github.com/isdk/ai-tool.js/commit/b688b47b74947cb3d1e62600acb12b265aa767cb))
* **CancelableAbility:** add optional generateAsyncTaskId, cleanMultiTaskAborter methods and apply chunk.taskId for object stream ([a4d87fe](https://github.com/isdk/ai-tool.js/commit/a4d87feff6134715360cae7ba0788ff2c4b92c57))
* **CancelableAbility:** add ReadableStream and multi-tasks with maxTaskConcurrency supports ([9399647](https://github.com/isdk/ai-tool.js/commit/9399647891160f05af00393ed149c460965ed9c2))
* **CancelableAbility:** add throwRejected method to TaskAbortController ([5d1c366](https://github.com/isdk/ai-tool.js/commit/5d1c366055e9dc911b4b47930ff81514d0b01899))
* **CancelableAbility:** can pass an AbortController into task now ([76b3398](https://github.com/isdk/ai-tool.js/commit/76b3398e9401da343859540848c6c618c211a1e1))
* export formatISO func ([5deb35c](https://github.com/isdk/ai-tool.js/commit/5deb35c638f581b466f466f509d5167caca31f9a))
* export parseDateFormat, toDate ([4719167](https://github.com/isdk/ai-tool.js/commit/47191673fb125b2e4d442ffee08698d7bff770e5))
* export parseISO from date-fns ([ce9e4de](https://github.com/isdk/ai-tool.js/commit/ce9e4defcd704da842cd9727db8e8e23424d04cb))
* **IntSet:** add static methods ([bac2f14](https://github.com/isdk/ai-tool.js/commit/bac2f1486667f93b0b53f031ef3c95f37bada31f))
* **IntSet:** add valueOf, toJSON, toString ([5ade81c](https://github.com/isdk/ai-tool.js/commit/5ade81c976c07e6a6a84b4f81db0c8d65d2425c6))
* more http status code added ([8065169](https://github.com/isdk/ai-tool.js/commit/80651690ec9786577251fe384ee90aa3f16ca335))
* **Semaphore:** add .alreadyRejected flag to signal ([5d3aea3](https://github.com/isdk/ai-tool.js/commit/5d3aea339581bde5214c61ba61367ce49a651b14))
* **Semaphore:** add AbortSignal supports ([25f2e35](https://github.com/isdk/ai-tool.js/commit/25f2e35f7da322a5e7d6e7b457a803a293ae498c))
* **Semaphore:** add DefaultAsyncSemaphoreCapacity constant ([0ec9d3f](https://github.com/isdk/ai-tool.js/commit/0ec9d3f74abcf96d62ee57601f9350418c5b1ac4))
* **tool-func:** add asyncFeatures option ([b4ce16c](https://github.com/isdk/ai-tool.js/commit/b4ce16c0ac1ab6018ee7f0c0e4b6db430a77c04b))
* **ToolFunc:** add _asyncFeatures for ability injection ([2d60803](https://github.com/isdk/ai-tool.js/commit/2d60803198ce47491a5d5e03ab5a4d5c1ee3a075))
* **ToolFunc:** add static hasAsyncFeature ([4715821](https://github.com/isdk/ai-tool.js/commit/47158212772f3428d3bde99063279a3195f0ef6c))
* **util:** add paramsSizeToScaleStr,scaleStrToParamsSize funcs ([89230c7](https://github.com/isdk/ai-tool.js/commit/89230c7187521bfa50718ff53496c26841432a7a))


### Bug Fixes

* **base-error:** add default AbortError name for AbortError ([635ea51](https://github.com/isdk/ai-tool.js/commit/635ea510c476f83de57e8e1a969d68ba3c7f9675))
* **CancelableAbility:** abort should assign data to reason if reason is an object ([4d20bec](https://github.com/isdk/ai-tool.js/commit/4d20becfbbfcd5327d5b6a83731a50886e59bd56))
* **CancelableAbility:** Because cannot standardize the internal variable format of terser, we have switched to managing it ourselves. ([787e914](https://github.com/isdk/ai-tool.js/commit/787e914a1f5dab2d24312399a6f123f0e8360403))
* **CancelableAbility:** should abort waiting task immediately ([82777c4](https://github.com/isdk/ai-tool.js/commit/82777c4e1f9265fc057e271b75596e7b1c8b734c))
* **CancelableAbility:** should clean task if task raise error ([4a4ae0b](https://github.com/isdk/ai-tool.js/commit/4a4ae0b1e2c9283b4e12644ccfacf5df70271015))
* **CancelableAbility:** should hide parent, streamController props of TaskAbortController ([bf79f04](https://github.com/isdk/ai-tool.js/commit/bf79f04d30731d5d1fa16ee3a6c8c2faed70487d))
* **CancelableAbility:** verify passed aborter type ([30a068d](https://github.com/isdk/ai-tool.js/commit/30a068d287c4f3f79cb08c72e8b1200a897c2f30))
* **jinja2:** throw SyntaxError(`Unknown statement type: ${tokens[current].type} ${tokens[current].value} with value ([fa7e86d](https://github.com/isdk/ai-tool.js/commit/fa7e86d764b5497ac5b363fc04ba8b14fbc349bc))
* **jinja:** Pass undefined value as null value, do not throw error ([7f1a703](https://github.com/isdk/ai-tool.js/commit/7f1a7038bf02da3b5f1264c27e2c530c5689e041))
* **readFilenamesRecursiveSync:** should use absoluteDir to check whether visitedDirs ([bf5c7a6](https://github.com/isdk/ai-tool.js/commit/bf5c7a6c4ed72e5054a76eaa981759ecde669ea2))
* **Semaphore:** public maxConcurrency readonly ([b2ddb88](https://github.com/isdk/ai-tool.js/commit/b2ddb883fa1d1137a88b432daec26ad0b8244598))
* **ToolFunc:** const ToolAsyncMultiTas should be ToolAsyncMultiTaskBit ([f195536](https://github.com/isdk/ai-tool.js/commit/f195536c6d1a9e29a467d122e3d6d485668e6a2b))
* typo ([59bba56](https://github.com/isdk/ai-tool.js/commit/59bba56c86ae20519db29c036a9d2540cd260816))
* **util:** jsonFilterToWhere should convert date to UTC ISO Date string ([b995268](https://github.com/isdk/ai-tool.js/commit/b995268606eb89a591b10b337cd692145b298272))
* **utils:** filter duplicaion punctuations in split-sentence ([7dc9f99](https://github.com/isdk/ai-tool.js/commit/7dc9f99a7400194b4f7105ab900b72ec93a6831b))


### Refactor

* **CancelableAbility:** keep abort compatibility ([1365815](https://github.com/isdk/ai-tool.js/commit/1365815ffd2ecd27fd31835a9e8c1c9a27149fda))
* **CancelableAbility:** make abort more stable ([b035b8f](https://github.com/isdk/ai-tool.js/commit/b035b8f14a74463a564e70a2fa8e365dd2940134))
* **CancelableAbility:** new TaskAbortController Class with parent, streamController and abort ([9be5ab4](https://github.com/isdk/ai-tool.js/commit/9be5ab46be689be89ace5adc39d4cfcac73dd542))
* **CancelableAbility:** the default cleanMultiTaskAborter ([48ac131](https://github.com/isdk/ai-tool.js/commit/48ac1317ffb2ef4b4c623e899718e797edc5918c))
* createCallbacksTransformer more general ([2f76138](https://github.com/isdk/ai-tool.js/commit/2f761385cd8243bc7b18266ac959017d75c5fea3))
* end-with-repeated-sequence return matched now ([0a94b7b](https://github.com/isdk/ai-tool.js/commit/0a94b7b0fd5af1c4f86973b9f9a57f9875635dec))
* export createAbilityInjector ([a5ceeb6](https://github.com/isdk/ai-tool.js/commit/a5ceeb6142d3fefa8301d1010188772dfeb2ff86))
* **ToolFunc:** remove async keyword to avoid more Promise wrapped ([199ae62](https://github.com/isdk/ai-tool.js/commit/199ae62163bbd8875633c3416ed61fc6eb0bec35))

## 0.0.7 (2024-07-08)


### Features

* add ActionNames ([26df515](https://github.com/isdk/ai-tool.js/commit/26df515ec38c1626fb67afa9fe6cbfc4b8a94987))
* add AIModelNameRule ([cae24d7](https://github.com/isdk/ai-tool.js/commit/cae24d7e7c87918eb77111083800d1c99e5b3f40))
* add depends option to ToolFunc ([bc33b72](https://github.com/isdk/ai-tool.js/commit/bc33b7253151f5875f4905669750b5aa60979ec7))
* add event server/client via SSE ([2926592](https://github.com/isdk/ai-tool.js/commit/29265924cc52c8f9fbf1da4387301922cf29fdd5))
* add event toolfunc ([4b57a10](https://github.com/isdk/ai-tool.js/commit/4b57a1025c9e874b59a67064056bf0dcfe3a3432))
* add EventName const ([47283fb](https://github.com/isdk/ai-tool.js/commit/47283fb610001ea081e29487930d69df42b83268))
* add eventServer, eventClient constants ([13e7af5](https://github.com/isdk/ai-tool.js/commit/13e7af580ebdbc6bf595e055e156576ffe244bc0))
* add extNameLevel func ([5a1e9ab](https://github.com/isdk/ai-tool.js/commit/5a1e9ab874cd017d28d161645024ef634c32b44b))
* add filename util functions ([e065643](https://github.com/isdk/ai-tool.js/commit/e0656430ea98865673f99f78d8228ab1916c735a))
* add filterNullOrUndefined func ([d333c32](https://github.com/isdk/ai-tool.js/commit/d333c3223e96e182d15d5a3aef6db1d8f70d7f07))
* add FStringPromptTemplate class ([25609d1](https://github.com/isdk/ai-tool.js/commit/25609d116323a11d22710c9cc130accc7e02852d))
* add get yaml/json config/data files ([569e559](https://github.com/isdk/ai-tool.js/commit/569e559a9ce8a94923f4a1639df3c68ad9ba14fa))
* add getAllEnumKeys func ([7b47521](https://github.com/isdk/ai-tool.js/commit/7b47521603ef5e2f96582e6f1cc03e37a8756662))
* add getAllEnumKeys func ([039fb25](https://github.com/isdk/ai-tool.js/commit/039fb25d0c53fdb65d633441b0d9c753e33fec51))
* add getKeysPath func ([c9da157](https://github.com/isdk/ai-tool.js/commit/c9da157962efac14bd3dbc8fde34a0a5b2e46ebe))
* add getMultiLevelExtname func ([264514e](https://github.com/isdk/ai-tool.js/commit/264514e378c2216a1482862a5f318c995a27b0cd))
* add golang prompt template ([51bbbce](https://github.com/isdk/ai-tool.js/commit/51bbbce06b7fcc023c4051d15bb44ebfeaa0aac5))
* add hash util ([f767017](https://github.com/isdk/ai-tool.js/commit/f767017e93a3f59a282f9fc29c05c010645ea6c0))
* add isModelNameMatched func ([fb719ee](https://github.com/isdk/ai-tool.js/commit/fb719ee305714215d09309d91228a91fd281a5c5))
* add iteratorWrap func from vadzim ([4d4d070](https://github.com/isdk/ai-tool.js/commit/4d4d070b0c805fac55d309f3e29a17a109e1f1e4))
* add jinja template from huggingface.js ([e61b3d0](https://github.com/isdk/ai-tool.js/commit/e61b3d01a0588c833dcdd88ce6a831f7674cef81))
* add more funcs ([13976e3](https://github.com/isdk/ai-tool.js/commit/13976e3894c578f35368b3547009f19912e7a304))
* add obj params and pos params supports both, and defaults to obj params now ([d2675a1](https://github.com/isdk/ai-tool.js/commit/d2675a14496f5391ef2ca1ab4207b214235aaf8b))
* add parseJsJson func ([73cb3f5](https://github.com/isdk/ai-tool.js/commit/73cb3f5347c8072a6cb8c5e59e608ca4912ecf81))
* add partial method and toJSON ([ecc2403](https://github.com/isdk/ai-tool.js/commit/ecc24035f14083dfb16bbb098d8b8420ead8cdc2))
* add PromptExampleSelector class ([ebe44ae](https://github.com/isdk/ai-tool.js/commit/ebe44ae1e70f5068e0efd45a9b286984844b31a8))
* add PromptTemplate ([c83f306](https://github.com/isdk/ai-tool.js/commit/c83f306711225f79ac7001448cd1e1f07a34f1c3))
* add ResServerTools/ResClientTools for RESTful API ([9fb6b43](https://github.com/isdk/ai-tool.js/commit/9fb6b4364cc16e079a8f3d021cdbbdfe28f8769a))
* add ServerTools and ClientTools ([df49839](https://github.com/isdk/ai-tool.js/commit/df49839f6534c28ef7675455763ee74e108a3003))
* add stream option to RemoteFunc ([af60550](https://github.com/isdk/ai-tool.js/commit/af60550b353fb5dcb97f08a24160662d83cfe081))
* add tags option to ToolFunc and add getByTag, getAllByTag methods ([9d507b2](https://github.com/isdk/ai-tool.js/commit/9d507b236386d431f7e5e14e7913e764e6fe38d4))
* add templateFormat option to AIChatMessageParam ([4e3d361](https://github.com/isdk/ai-tool.js/commit/4e3d361b1ef3445c3e44fac9673509d36510c44f))
* **base-error:** add AbortError ([365721e](https://github.com/isdk/ai-tool.js/commit/365721e2a7d2a011976855f0411ae14e39fcf094))
* **chat:** add abort to AITextGenerationFinishReasons ([6a4e813](https://github.com/isdk/ai-tool.js/commit/6a4e813467241c73849b3276c2d909796fd1f35b))
* **chat:** add AIChatMessageParamBase ([d7ca654](https://github.com/isdk/ai-tool.js/commit/d7ca6546487070a933e66c4224675545c011eb9c))
* **chat:** add stop option to AIResult for stream mode ([8857259](https://github.com/isdk/ai-tool.js/commit/8857259819c9d2bd0f06811fd64d2130c88223ad))
* **ClientTools:** add stream supports and getUrlParams check empty params now ([04c5adb](https://github.com/isdk/ai-tool.js/commit/04c5adb80d40caaec4cbba39ccdc9f116ac04c78))
* **ClientTools:** can raise Error from server ([a788d58](https://github.com/isdk/ai-tool.js/commit/a788d58fe46cef69819621d1e43e11f9f552beb0))
* event toolfunc ([b9c2b15](https://github.com/isdk/ai-tool.js/commit/b9c2b154b74d0eef546ec18325660b1bda473b88))
* export SSEChannel ([1f6475d](https://github.com/isdk/ai-tool.js/commit/1f6475ddeeae48c7fc870b9a6794124fd91f3369))
* export the EventClient and EventSever ([3cec56b](https://github.com/isdk/ai-tool.js/commit/3cec56ba48e137a5aa1d372588cbdfeb02dcb34f))
* export utils functions ([4288df6](https://github.com/isdk/ai-tool.js/commit/4288df65bde36ad53e558ab4a7553f4dd96ac416))
* **hf-prompt:** add createHfValueFunc func ([35b2d6f](https://github.com/isdk/ai-tool.js/commit/35b2d6f2cfeaf38cbbea9488d1fc827a6783a37c))
* **hf-prompt:** createHfValueFunc support ObjectValue now ([39d6890](https://github.com/isdk/ai-tool.js/commit/39d68900403e5365c61acf48ff998b9a629fec0d))
* **is-model-name-matched:** support regexp string match ([8c0b0f2](https://github.com/isdk/ai-tool.js/commit/8c0b0f2fd0ee2b6e358d4d9433d6ff1fa2d09727))
* **jinja:** add builtin functions to jinja ([31ce6f8](https://github.com/isdk/ai-tool.js/commit/31ce6f8cb93e0dafa85f4570a572b342cd9b557c))
* **jinja:** add filter:string/tojson/trimStart/trimEnd, object toString/toJson support ([9888cef](https://github.com/isdk/ai-tool.js/commit/9888cef72ab9de6106e896e67ec2f910b704bf55))
* **jinja:** add isStatement in Statement to help check whether isTemplate ([e423ef8](https://github.com/isdk/ai-tool.js/commit/e423ef8462532a4132fb7a34e04035f54bdba9ed))
* **jinja:** add options to Template class ([6ceb7cd](https://github.com/isdk/ai-tool.js/commit/6ceb7cda6a9cdd85276144ecdc0b1efe5932477e))
* **jinjia:** Add global Environment to `Template` class ([a784a4b](https://github.com/isdk/ai-tool.js/commit/a784a4b31e7ee880aa8d908272e7836681aec784))
* **jinjia:** the arguments of the user defined function is javascript value now ([817cb9c](https://github.com/isdk/ai-tool.js/commit/817cb9c85672ecbc81f4827c3170c1d955967e69))
* **jinjia:** user defined function can be filter now ([a953383](https://github.com/isdk/ai-tool.js/commit/a95338381f87718e705d299eceb29239cfd55885))
* json-filter func ([5dbec46](https://github.com/isdk/ai-tool.js/commit/5dbec4608b9c25dd68a988008dcf9a1c40e11fac))
* **PromptExampleSelector:** add threshold option to the threshold probability (0-1) at which a sample is selected. ([932679f](https://github.com/isdk/ai-tool.js/commit/932679f612751649d6f4411bb1cc9b7df5592f23))
* **PromptTemplate:** add default template format supports to register PromptTemplate alias with "default" ([81ddf6c](https://github.com/isdk/ai-tool.js/commit/81ddf6c586cd4412cb6cba026daaa32cc9076d98))
* **PromptTemplate:** add FewShotPromptTemplate class ([79e42dd](https://github.com/isdk/ai-tool.js/commit/79e42ddc49fcb9f71351ce041497259ffc6ab253))
* **PromptTemplate:** add ignoreInitialize option ([e1d7e93](https://github.com/isdk/ai-tool.js/commit/e1d7e93c5f811f40bcdae46d34c439726df4b035))
* **PromptTemplate:** add static isTemplate and formatIf methods ([b7286bc](https://github.com/isdk/ai-tool.js/commit/b7286bc19a3d337c0049643eec52b13cfa4fc1d0))
* **PromptTemplate:** add static method format ([12eeca4](https://github.com/isdk/ai-tool.js/commit/12eeca41f15fbc53d503051f340ebae9a7017ca6))
* **PromptTemplate:** add templateFormat option to PromptTemplate ([26847c5](https://github.com/isdk/ai-tool.js/commit/26847c58153a609f7a1e228b274537ffeb1a0e4b))
* **ResClientTools:** add ResClientFuncParams ([6af7d94](https://github.com/isdk/ai-tool.js/commit/6af7d94181be4d4df523763804cc0910b27632c0))
* **ResourceAPI:** add custom methods supports ([5cb067d](https://github.com/isdk/ai-tool.js/commit/5cb067dced8e270767765bd0c18af9d73e3e52f5))
* **ResServerTools:** add the same custom method without prefix "$" to the instance ([dfefd17](https://github.com/isdk/ai-tool.js/commit/dfefd17bc8b6941ede289b80c8ebd2d9c7bb8b8f))
* **ServerTools:** add isStream() method ([b3a15a5](https://github.com/isdk/ai-tool.js/commit/b3a15a57b735494e4338e96349ef65312e2f42b9))
* **ServerTools:** always pass _req, _res by convention ([8f2db5e](https://github.com/isdk/ai-tool.js/commit/8f2db5ec17a0efc0735b3ea1f576036fd032b3b1))
* **template:** add env variables expand template ([6845b83](https://github.com/isdk/ai-tool.js/commit/6845b83a3c5d7b8a475d3c726facaaafd568bdeb))
* **test:** add test util to export ([ecdc149](https://github.com/isdk/ai-tool.js/commit/ecdc14987eb6d380288d3b5407b98042e3c3cc05))
* **ToolFunc:** add dataPath static member ([71e3d7c](https://github.com/isdk/ai-tool.js/commit/71e3d7cef171bb76435f9a59527786a83714aa06))
* use CommonError ([81babef](https://github.com/isdk/ai-tool.js/commit/81babef38d1afe0621da109551c800af4b821f82))
* **util:** add filter argument to getConfigs ([186b46a](https://github.com/isdk/ai-tool.js/commit/186b46a945a2456c9bac80b977f7a932c3797747))
* **util:** add matchUrlProtocol func ([91427f7](https://github.com/isdk/ai-tool.js/commit/91427f77e81643397370fb4a6a12b858dccc6415))
* **util:** add optional scope argument to parseJsJson ([3e12f16](https://github.com/isdk/ai-tool.js/commit/3e12f168ac351076a600903d769cc49b1ee05dd1))
* **util:** add saveConfigFile func ([e820c1f](https://github.com/isdk/ai-tool.js/commit/e820c1f9b9c7f0897aec95da18c223dde2173285))
* **utils:** add createEndWithRepetitionDetector func ([ba3be00](https://github.com/isdk/ai-tool.js/commit/ba3be006dcb2fd7aba732a88c1db25906e87d2ff))
* **utils:** add loadFileFromPaths/loadTextFromPaths functions ([24d4526](https://github.com/isdk/ai-tool.js/commit/24d4526f9ba09d6ca56147a678a873931995a3eb))
* **utils:** loadFileFromPaths pass the filepath back through options ([d0d21fa](https://github.com/isdk/ai-tool.js/commit/d0d21fa50723464a486f21b961986f7327e13671))


### Bug Fixes

* add exports to package.json for module need ([47b64a3](https://github.com/isdk/ai-tool.js/commit/47b64a3379d9b2316d2b54d6d6230c00c75f7c80))
* add items to ClientTools ([0ebea4c](https://github.com/isdk/ai-tool.js/commit/0ebea4c8f3ea8f364e8cd70f83f36cbffe7be93a))
* **AIModelNameRules:** function test could be in the rule array ([650dc2c](https://github.com/isdk/ai-tool.js/commit/650dc2c3f7bd90d1d5f7e6aae927165bb8fb07b7))
* **build:** entries error ([c5e6d13](https://github.com/isdk/ai-tool.js/commit/c5e6d133f9e91a1f508cce771161fce14786c254))
* **build:** entries error ([36da8ef](https://github.com/isdk/ai-tool.js/commit/36da8ef7b0dd51ba84a8297065270ab730d88180))
* can not register the depends when calling from ToolFunc.register ([89f92f0](https://github.com/isdk/ai-tool.js/commit/89f92f0d3dd32ae08db0173e7122185d02014425))
* **ClientTools:** add message to error ([595fe20](https://github.com/isdk/ai-tool.js/commit/595fe20478b497b747dadeb73d07484354b63967))
* **ClientTools:** allow json object as id ([94a2038](https://github.com/isdk/ai-tool.js/commit/94a2038cf31a6cd8162de6eb9667ce808e3dbae1))
* **ClientTools:** loadFromSync should assign properties for exists item ([6069cfe](https://github.com/isdk/ai-tool.js/commit/6069cfe3e8e11c0dd7368bb67ac95b270ef0c08b))
* **ClientTools:** only setApiRoot on ClientTools ([158145e](https://github.com/isdk/ai-tool.js/commit/158145ebfa33d2afac16db3ecfda0301bb43a3b9))
* create SSEChannel on-demand ([7bd7ed5](https://github.com/isdk/ai-tool.js/commit/7bd7ed5d428b6cb3d2a85e383966b2c15ea9bd69))
* do not escape object id ([13a3fa5](https://github.com/isdk/ai-tool.js/commit/13a3fa5e8b2c8f8230a8eb6191c59d8033a1e3e0))
* do not recreate cache if LRUCache exists ([c76caa0](https://github.com/isdk/ai-tool.js/commit/c76caa07302bb054c7053d6bd400f96f2efd8e32))
* **EventToolFunc:** use full EventEmitter ([d357402](https://github.com/isdk/ai-tool.js/commit/d3574027fd5602430185ea913328f3d52ae2b74f))
* **f-string:** should format string when missing value ([81d135c](https://github.com/isdk/ai-tool.js/commit/81d135ccebb6adb2d9ee1a202abb48568c7e5f93))
* **hf-prompt:** isTemplate should not treat string as template ([b5fbd18](https://github.com/isdk/ai-tool.js/commit/b5fbd18629a93f01053e336e776dbb6da669d77a))
* **hf-prompt:** should test isTemplate without variable ([aa700f2](https://github.com/isdk/ai-tool.js/commit/aa700f2c6e50acf4a4116dcbd9920bbe6300039f))
* import commjs module xxhashjs error ([e5e605c](https://github.com/isdk/ai-tool.js/commit/e5e605c48d15444a5994b53bd821bca534e541a3))
* **json-filter:** add missing null and boolean supports ([7b725c7](https://github.com/isdk/ai-tool.js/commit/7b725c787d4aae23b98eaabf6a805db87d2ae286))
* **load-file-from-paths:** should search the file with difference extname  even it's the absoluted path ([1741104](https://github.com/isdk/ai-tool.js/commit/17411044aa9290116d9ce80e31835c1160e3c3df))
* **lrucache:** can pass object options now ([efb6adb](https://github.com/isdk/ai-tool.js/commit/efb6adb16456dd0e24706be04e8e226c60ef1f4b))
* only setInternal when pingTimer > 0 ([adf2b2a](https://github.com/isdk/ai-tool.js/commit/adf2b2a21027781c0eefca47ddc66ea51f5b9cf5))
* **prompt:** forget to export the FStringPromptTemplate ([b0b5935](https://github.com/isdk/ai-tool.js/commit/b0b5935c079fd9046a364a3d98c65895643df20b))
* **PromptTemplate:** _format method should be async or sync ([61537cc](https://github.com/isdk/ai-tool.js/commit/61537cccc95a70219e4ec38d94538dd62fbde9a3))
* **PromptTemplate:** get default template format ([6aa0abc](https://github.com/isdk/ai-tool.js/commit/6aa0abc22fa0eaca29874594486e82e1d10d2108))
* **PromptTemplate:** it should assign the data etc on initialize ([eb10c70](https://github.com/isdk/ai-tool.js/commit/eb10c7097332aca77fddf958f62bda0b4b649a37))
* **PromptTemplate:** static from method should apply PromptTemplateOptions only too ([6653c1c](https://github.com/isdk/ai-tool.js/commit/6653c1c60c120c00503c1a72f36cf17ef3b44af7))
* **PromptTemplate:** templateFormat should be point to others, usage see FewShotPromptTemplate ([9ea70ae](https://github.com/isdk/ai-tool.js/commit/9ea70aed8e1d2c76a94834a3ae825de47ea43749))
* remove unused entries ([1405114](https://github.com/isdk/ai-tool.js/commit/1405114273189ff4eafb9796edfd13d84be101e1))
* **ResClientTools:** should escape the id ([35ee703](https://github.com/isdk/ai-tool.js/commit/35ee703eb7c41891d757bb1a7189155a73f4f1b8))
* **ResServerTools:** list should no options ([996bd96](https://github.com/isdk/ai-tool.js/commit/996bd96d042409f94d73a6f6a28ff678c396a00c))
* **RESTful:** ResClientTools/ResServerTools can work now ([bb8f7b0](https://github.com/isdk/ai-tool.js/commit/bb8f7b06ffc80baa3bc274e410edc9bea14cfe7d))
* **ServerTools:** can not visit func which registered on ToolFunc ([2b63ed4](https://github.com/isdk/ai-tool.js/commit/2b63ed456226ff4f3b2b12c5370906d69c951004))
* **ServerTools:** ClientTools&ServerTools register items into ToolFunc now, So test it together carefully, seperate them see tests ([5820ce6](https://github.com/isdk/ai-tool.js/commit/5820ce6c8aa870dabebeadd44576c6f08655a99e))
* **ServerTools:** item could be ToolFunc or  ServerTools ([d91acc5](https://github.com/isdk/ai-tool.js/commit/d91acc53805fcaf829bd07c3dc2de9b831938640))
* **ServerTools:** only setApiRoot on ServerTools ([9da7dff](https://github.com/isdk/ai-tool.js/commit/9da7dff2d8e2dad49ad3a4c5273fbc653518e0af))
* the error name should be the function name ([8d43286](https://github.com/isdk/ai-tool.js/commit/8d432863bed0b27df185429b2db6781fb8092cf4))
* **ToolFunc:** do not export depends now ([3c054e2](https://github.com/isdk/ai-tool.js/commit/3c054e2bd765a9f0838133a43e31f80e24f6e978))
* **ToolFunc:** name as optional in FuncParam ([bb8d56c](https://github.com/isdk/ai-tool.js/commit/bb8d56c51a1b59d3c6eee7523e998887914a50c2))
* ts declarations ([2554431](https://github.com/isdk/ai-tool.js/commit/2554431d01b2bcfe101de8612762e90d3f22fa4d))
* **ts:** AIModelNameRuleFn should return string|RegExpExecArray|undefined instead of boolean ([6da2108](https://github.com/isdk/ai-tool.js/commit/6da2108920c044f8a72b08480c23f1d77b641870))
* **ts:** id in res-server allow number ([dd7a382](https://github.com/isdk/ai-tool.js/commit/dd7a382b666eddbf1e37334cc8d98c90c1f481fb))
* **ts:** minor change ([0a10c09](https://github.com/isdk/ai-tool.js/commit/0a10c09b299ffa172d6ab7cf6f85e7811edea751))
* **ts:** minor change ([b27d633](https://github.com/isdk/ai-tool.js/commit/b27d63399786ad40a42193dfb378b465cf6fb2ee))
* **ts:** what AlreadyExistsError allow number ([34d9041](https://github.com/isdk/ai-tool.js/commit/34d90415f41a72681783f623c17eb3c5ae8797e8))

## [0.0.6](https://github.com/isdk/ai-tool.js/compare/v0.0.5...v0.0.6) (2024-06-11)


### Features

* **utils:** loadFileFromPaths pass the filepath back through options ([c377a14](https://github.com/isdk/ai-tool.js/commit/c377a1408daee78a2484142b6d99ef7fbbec7c7c))

## [0.0.5](https://github.com/isdk/ai-tool.js/compare/v0.0.4...v0.0.5) (2024-06-09)


### Bug Fixes

* **load-file-from-paths:** should search the file with difference extname  even it's the absoluted path ([27dc5aa](https://github.com/isdk/ai-tool.js/commit/27dc5aaa2a3190672b273a0e1b748bdc4388476a))

## [0.0.4](https://github.com/isdk/ai-tool.js/compare/v0.0.3...v0.0.4) (2024-06-08)

## [0.0.3](https://github.com/isdk/ai-tool.js/compare/v0.0.2...v0.0.3) (2024-06-07)


### Features

* **util:** add matchUrlProtocol func ([9baa772](https://github.com/isdk/ai-tool.js/commit/9baa7720800796548a72fd26ac4d885bbfafb5de))

## 0.0.2 (2024-06-07)


### Features

* add ActionNames ([076c31c](https://github.com/isdk/ai-tool.js/commit/076c31ca6a36cab7fa2a1721ee25cffee0b31743))
* add AIModelNameRule ([e6ae2fc](https://github.com/isdk/ai-tool.js/commit/e6ae2fc574bc9f087ae3df1fcc1e18f9539a8f98))
* add depends option to ToolFunc ([36c1dbd](https://github.com/isdk/ai-tool.js/commit/36c1dbd428b054b720be9483a9cdfa3583f7cbc6))
* add event server/client via SSE ([1f05de6](https://github.com/isdk/ai-tool.js/commit/1f05de654bce8ba1fa3885652c27dfd90afee6eb))
* add event toolfunc ([ab02e46](https://github.com/isdk/ai-tool.js/commit/ab02e46f46d64f11e51510ff0a86a20244a6a1f3))
* add EventName const ([b46a7e8](https://github.com/isdk/ai-tool.js/commit/b46a7e8fef198ab08b26e8a5754b7c86c218c7e3))
* add eventServer, eventClient constants ([c38fa82](https://github.com/isdk/ai-tool.js/commit/c38fa82bacc6c71be9f40d41e73e482d84c56c31))
* add extNameLevel func ([c00021e](https://github.com/isdk/ai-tool.js/commit/c00021e6eb65b8535fbe7d2c22f9b6d35564043f))
* add filename util functions ([0a6a794](https://github.com/isdk/ai-tool.js/commit/0a6a794766559b7c899db30d8c8be104e3b837ba))
* add filterNullOrUndefined func ([cd6e09e](https://github.com/isdk/ai-tool.js/commit/cd6e09ec4635b00397ad8de26945cef76f3d1fe5))
* add FStringPromptTemplate class ([143fa58](https://github.com/isdk/ai-tool.js/commit/143fa58b175b5d34a3a0bfa004cec4eb96987873))
* add get yaml/json config/data files ([ef98583](https://github.com/isdk/ai-tool.js/commit/ef9858391f846abeac298f3e52ff9cb159ec9879))
* add getAllEnumKeys func ([ab0c103](https://github.com/isdk/ai-tool.js/commit/ab0c1037e415b4764624290298f592369066ac3a))
* add getAllEnumKeys func ([9c57c7a](https://github.com/isdk/ai-tool.js/commit/9c57c7aceedbb3d0233dfaf7a30250404cae05c2))
* add getKeysPath func ([19c2709](https://github.com/isdk/ai-tool.js/commit/19c2709f432966c70a89fe3d5bcff7ad11770c1f))
* add getMultiLevelExtname func ([c79ad35](https://github.com/isdk/ai-tool.js/commit/c79ad35f89239dc76505f4b2dc7a38faa1c7d261))
* add golang prompt template ([9dda6d5](https://github.com/isdk/ai-tool.js/commit/9dda6d53a040a9a18017fe7977f304349148075c))
* add hash util ([c0bad40](https://github.com/isdk/ai-tool.js/commit/c0bad40da4f871796b7819b72d2acef5a5412d7b))
* add isModelNameMatched func ([288355f](https://github.com/isdk/ai-tool.js/commit/288355ff53a0235b2877dfa1f23c61add4b675fe))
* add iteratorWrap func from vadzim ([e37afec](https://github.com/isdk/ai-tool.js/commit/e37afec3d72c61d8313eb2bec35e13cfa228c54e))
* add jinja template from huggingface.js ([e3e292d](https://github.com/isdk/ai-tool.js/commit/e3e292db697bf474cd0d4817b558f5a6e7891a8b))
* add more funcs ([1cf700d](https://github.com/isdk/ai-tool.js/commit/1cf700d0b0b4153184e01442a198cf2c9a8ff1f4))
* add obj params and pos params supports both, and defaults to obj params now ([0873e44](https://github.com/isdk/ai-tool.js/commit/0873e44895815507537530e0c607dccc12db3613))
* add parseJsJson func ([8e51239](https://github.com/isdk/ai-tool.js/commit/8e512392294f9e8ae706881b87aef22836e4af27))
* add partial method and toJSON ([fdd36e3](https://github.com/isdk/ai-tool.js/commit/fdd36e39d58abf934179698570eb0a1996b91d86))
* add PromptExampleSelector class ([b60821a](https://github.com/isdk/ai-tool.js/commit/b60821a9bd057244a47a20a4797aab4654114e3a))
* add PromptTemplate ([882f2e1](https://github.com/isdk/ai-tool.js/commit/882f2e15dc4546c8b216408b8643d9eb460c710e))
* add ResServerTools/ResClientTools for RESTful API ([cc6a529](https://github.com/isdk/ai-tool.js/commit/cc6a529f7ae18ffa43353405f3280d2e7f6d7bfc))
* add ServerTools and ClientTools ([a1c4533](https://github.com/isdk/ai-tool.js/commit/a1c4533442611887e41a4904144a4ee86c1ff16c))
* add stream option to RemoteFunc ([a1f8172](https://github.com/isdk/ai-tool.js/commit/a1f81727359f216f7f6e3ed84c36e6a5e47c7e48))
* add tags option to ToolFunc and add getByTag, getAllByTag methods ([cd99642](https://github.com/isdk/ai-tool.js/commit/cd99642e473802ac4fb76a0e194b5162f1d4c4c9))
* add templateFormat option to AIChatMessageParam ([e51f4c6](https://github.com/isdk/ai-tool.js/commit/e51f4c662830cdf1aff95718d02d9e52589aa142))
* **base-error:** add AbortError ([e50292b](https://github.com/isdk/ai-tool.js/commit/e50292bdc3e9a1ef1ba168f21f936bd5a64f3f1e))
* **chat:** add abort to AITextGenerationFinishReasons ([05b93c7](https://github.com/isdk/ai-tool.js/commit/05b93c73e1923cea19b45d3b9d6bdd7c4804850f))
* **chat:** add AIChatMessageParamBase ([a26448d](https://github.com/isdk/ai-tool.js/commit/a26448d22b2f137c9f274885ef9e1158e0dd1a63))
* **chat:** add stop option to AIResult for stream mode ([94d0b7a](https://github.com/isdk/ai-tool.js/commit/94d0b7a75df451de3816c1d942d6f0db0e864ada))
* **ClientTools:** add stream supports and getUrlParams check empty params now ([8fdd7df](https://github.com/isdk/ai-tool.js/commit/8fdd7dfd0d8d9227a5d76c771c8f0456eb44067a))
* **ClientTools:** can raise Error from server ([111b145](https://github.com/isdk/ai-tool.js/commit/111b145e2d4f70202c915f772cb520577b3f4ccd))
* event toolfunc ([1bb3b94](https://github.com/isdk/ai-tool.js/commit/1bb3b94fc91acace7f7b3c2a25a190f657ff3daa))
* export SSEChannel ([2a2d9a0](https://github.com/isdk/ai-tool.js/commit/2a2d9a0234608b133c87c06dd8adc3ba6f85f3ee))
* export the EventClient and EventSever ([aaeb27e](https://github.com/isdk/ai-tool.js/commit/aaeb27ef7bdff63ab8aab5c2f3fcc8f878ffad63))
* export utils functions ([40a7de3](https://github.com/isdk/ai-tool.js/commit/40a7de30ef03a43e228c7d85a7c9c6987a0b9ee4))
* **hf-prompt:** add createHfValueFunc func ([761e786](https://github.com/isdk/ai-tool.js/commit/761e786c0d724fc9375bfd42bf4ee72e28e74417))
* **hf-prompt:** createHfValueFunc support ObjectValue now ([0160128](https://github.com/isdk/ai-tool.js/commit/0160128280ea357494cb9ba3cdb254bcac0af02f))
* **is-model-name-matched:** support regexp string match ([91ae490](https://github.com/isdk/ai-tool.js/commit/91ae490da7d5212e427eaf0a19d9437a6fdd0cad))
* **jinja:** add builtin functions to jinja ([efa56f7](https://github.com/isdk/ai-tool.js/commit/efa56f78bb27fe47a6b44869e53d8c8944347b0e))
* **jinja:** add filter:string/tojson/trimStart/trimEnd, object toString/toJson support ([bfe30e3](https://github.com/isdk/ai-tool.js/commit/bfe30e31d3d3ec3fb60a49175f5d5bf91026469d))
* **jinja:** add isStatement in Statement to help check whether isTemplate ([d89c459](https://github.com/isdk/ai-tool.js/commit/d89c4591826e5027c5bf7499d511f94574b0e1c5))
* **jinja:** add options to Template class ([b626db1](https://github.com/isdk/ai-tool.js/commit/b626db12c634a3ef31baa4fac002c9cd695231f5))
* **jinjia:** Add global Environment to `Template` class ([b97c569](https://github.com/isdk/ai-tool.js/commit/b97c56981b46cbf29333679915d33058e2571319))
* **jinjia:** the arguments of the user defined function is javascript value now ([ad79534](https://github.com/isdk/ai-tool.js/commit/ad79534de5d8d00e388fe6691ef7e65fb42027cf))
* **jinjia:** user defined function can be filter now ([4928730](https://github.com/isdk/ai-tool.js/commit/49287300a3d45342f8029f87e89cbb8e5a922cf0))
* json-filter func ([f8f3648](https://github.com/isdk/ai-tool.js/commit/f8f3648c79a106dce8212e87fef121edf5e18d06))
* **PromptExampleSelector:** add threshold option to the threshold probability (0-1) at which a sample is selected. ([c16a6e4](https://github.com/isdk/ai-tool.js/commit/c16a6e4639727a08de41bd9063e06a1f4c8155d3))
* **PromptTemplate:** add default template format supports to register PromptTemplate alias with "default" ([0b9303b](https://github.com/isdk/ai-tool.js/commit/0b9303b653ebf2726d3fc8e5e22a5f42ee28798f))
* **PromptTemplate:** add FewShotPromptTemplate class ([4b8c78e](https://github.com/isdk/ai-tool.js/commit/4b8c78ebb1896afb2df6f52f21223bf3ea0ead28))
* **PromptTemplate:** add ignoreInitialize option ([5749a2e](https://github.com/isdk/ai-tool.js/commit/5749a2ebe451c974096ef620cbf54742072ff026))
* **PromptTemplate:** add static isTemplate and formatIf methods ([820c3ca](https://github.com/isdk/ai-tool.js/commit/820c3ca199ec11e865ea7c767c37d5becf83c1c1))
* **PromptTemplate:** add static method format ([8e45648](https://github.com/isdk/ai-tool.js/commit/8e45648a4014a09c25edbe97da3e3358b49823ea))
* **PromptTemplate:** add templateFormat option to PromptTemplate ([cb97cc5](https://github.com/isdk/ai-tool.js/commit/cb97cc5f33d4ee73cd5a97e1e3b2a15f6735cde3))
* **ResClientTools:** add ResClientFuncParams ([58d360d](https://github.com/isdk/ai-tool.js/commit/58d360d7f02d0f7ab779112c970fc62ad8834397))
* **ResourceAPI:** add custom methods supports ([c5c67ba](https://github.com/isdk/ai-tool.js/commit/c5c67bafd6c01fb83cd2236324b93b3691a1bbbb))
* **ResServerTools:** add the same custom method without prefix "$" to the instance ([9ed5410](https://github.com/isdk/ai-tool.js/commit/9ed5410e48b06e7b7b1940b60a42a4ddaf0f8648))
* **ServerTools:** add isStream() method ([02f6b85](https://github.com/isdk/ai-tool.js/commit/02f6b854fabdb551a641d66cfe568778dc9249d5))
* **ServerTools:** always pass _req, _res by convention ([5830a56](https://github.com/isdk/ai-tool.js/commit/5830a56a4f9c81b3c22004efd06ace0f7559d417))
* **template:** add env variables expand template ([befcda8](https://github.com/isdk/ai-tool.js/commit/befcda865a621b99ebe81fbca6ff0e8592a04928))
* **test:** add test util to export ([66fa5dd](https://github.com/isdk/ai-tool.js/commit/66fa5dde6009092d4b2fb0270123c49a07b24ac4))
* **ToolFunc:** add dataPath static member ([30e7e10](https://github.com/isdk/ai-tool.js/commit/30e7e101053785ef205d70fbdfbb80b858b9712e))
* use CommonError ([2baf463](https://github.com/isdk/ai-tool.js/commit/2baf4636881907c67bad482fe21bfb2eb7457809))
* **util:** add saveConfigFile func ([abaf2ed](https://github.com/isdk/ai-tool.js/commit/abaf2ed0b9018fd4f262796135ccb8ab0dddc5dd))
* **utils:** add createEndWithRepetitionDetector func ([48f1b68](https://github.com/isdk/ai-tool.js/commit/48f1b680a3f7c1248720cb6611bff43e592fd81a))
* **utils:** add loadFileFromPaths/loadTextFromPaths functions ([04ed009](https://github.com/isdk/ai-tool.js/commit/04ed009a059d6bf2473da24ebbe1d7a6ce172acd))


### Bug Fixes

* add exports to package.json for module need ([0a4d402](https://github.com/isdk/ai-tool.js/commit/0a4d402a7a0fe04cbccd20ae33dfa464a56feeee))
* add items to ClientTools ([3cf2fcd](https://github.com/isdk/ai-tool.js/commit/3cf2fcd1fc0020cc35fcc3e4f1eecfff481ef1f4))
* **AIModelNameRules:** function test could be in the rule array ([689ef5b](https://github.com/isdk/ai-tool.js/commit/689ef5be16c343f6723368cc6d4adc1f81592cda))
* **build:** entries error ([e323825](https://github.com/isdk/ai-tool.js/commit/e3238252da09c0dd3919501c2bec2e8d81b530a6))
* **build:** entries error ([9702d4c](https://github.com/isdk/ai-tool.js/commit/9702d4c78a701f5338e91acb0ccbe18993b71268))
* can not register the depends when calling from ToolFunc.register ([fdba963](https://github.com/isdk/ai-tool.js/commit/fdba963390b28dc415ef48950efad12550aecc6a))
* **ClientTools:** add message to error ([e7b111f](https://github.com/isdk/ai-tool.js/commit/e7b111fcf41875f59e1da867c67a2e078bfbf70f))
* **ClientTools:** allow json object as id ([211a0a9](https://github.com/isdk/ai-tool.js/commit/211a0a9d0ac2e9e041639750e7d1fcebac464a1a))
* **ClientTools:** loadFromSync should assign properties for exists item ([f384eee](https://github.com/isdk/ai-tool.js/commit/f384eee1a5ee03d9cc99bd844d44a4679dc3bcf5))
* **ClientTools:** only setApiRoot on ClientTools ([07b0c64](https://github.com/isdk/ai-tool.js/commit/07b0c648ab6e68cb107f4fcdce51b5c18a28c2a5))
* create SSEChannel on-demand ([170bede](https://github.com/isdk/ai-tool.js/commit/170bede95f205ae1f5b2e40bcd84809c176ba5aa))
* do not escape object id ([7579640](https://github.com/isdk/ai-tool.js/commit/75796403490a40c21b30e4362905399201563ce4))
* do not recreate cache if LRUCache exists ([21b169d](https://github.com/isdk/ai-tool.js/commit/21b169d44e45f446200e53d1410e65eb9baf4bfa))
* **EventToolFunc:** use full EventEmitter ([e3f0474](https://github.com/isdk/ai-tool.js/commit/e3f047432ca92d692e91ae278b6d1baa406cab15))
* **f-string:** should format string when missing value ([f5baa09](https://github.com/isdk/ai-tool.js/commit/f5baa09a9cdf5c893a7799cec103030d7f44549a))
* **hf-prompt:** isTemplate should not treat string as template ([108a0c4](https://github.com/isdk/ai-tool.js/commit/108a0c45f5b1376418573a9ae61923edc6f729ca))
* **hf-prompt:** should test isTemplate without variable ([df4e0d7](https://github.com/isdk/ai-tool.js/commit/df4e0d7ea4293220d058da0927f081f122f82aef))
* import commjs module xxhashjs error ([1c7ac56](https://github.com/isdk/ai-tool.js/commit/1c7ac56996e54b0635ef9ab9beb07ad5d7dab29f))
* **json-filter:** add missing null and boolean supports ([7648ba5](https://github.com/isdk/ai-tool.js/commit/7648ba5bfbbfd9b9aa8f8c135c55c1143a7da0e9))
* **lrucache:** can pass object options now ([751ed81](https://github.com/isdk/ai-tool.js/commit/751ed811a0e7b82f102bd52ca0ef358c0c7e9976))
* only setInternal when pingTimer > 0 ([9ecd1e4](https://github.com/isdk/ai-tool.js/commit/9ecd1e4e4d2940e1d34418ec491bc107c085c004))
* **prompt:** forget to export the FStringPromptTemplate ([491d370](https://github.com/isdk/ai-tool.js/commit/491d3707a38db0a22c4571610d88cbb95a1fc642))
* **PromptTemplate:** _format method should be async or sync ([7ede5f4](https://github.com/isdk/ai-tool.js/commit/7ede5f4bec72f574666bec791ebab9419c6e1ac3))
* **PromptTemplate:** get default template format ([2e821ee](https://github.com/isdk/ai-tool.js/commit/2e821ee0d71677231982c3e1f43d470767f6473b))
* **PromptTemplate:** it should assign the data etc on initialize ([32d1a48](https://github.com/isdk/ai-tool.js/commit/32d1a48d0744fa70341a4c39c28b50af8e4129e4))
* **PromptTemplate:** static from method should apply PromptTemplateOptions only too ([b2a4203](https://github.com/isdk/ai-tool.js/commit/b2a4203f4263d4eff627816c5cb5ff3e2a7664e5))
* **PromptTemplate:** templateFormat should be point to others, usage see FewShotPromptTemplate ([b81b2db](https://github.com/isdk/ai-tool.js/commit/b81b2db827ed31cb04ea1a524b2ab53e3912ae96))
* remove unused entries ([e683c7b](https://github.com/isdk/ai-tool.js/commit/e683c7b782fe633ba4b74620571031b7a7b144f7))
* **ResClientTools:** should escape the id ([f7a0004](https://github.com/isdk/ai-tool.js/commit/f7a00046ec36d05ae56a6571348ed97d88baea6b))
* **ResServerTools:** list should no options ([051e59f](https://github.com/isdk/ai-tool.js/commit/051e59f39499b420ca0317e8dd1b7344c367c550))
* **RESTful:** ResClientTools/ResServerTools can work now ([5bb046c](https://github.com/isdk/ai-tool.js/commit/5bb046ce39b6b6127a26a0b74258b69a5d7832ac))
* **ServerTools:** can not visit func which registered on ToolFunc ([9e4b4b4](https://github.com/isdk/ai-tool.js/commit/9e4b4b40350359c363d439e0a93dd8bd1e5e06da))
* **ServerTools:** ClientTools&ServerTools register items into ToolFunc now, So test it together carefully, seperate them see tests ([4866dbb](https://github.com/isdk/ai-tool.js/commit/4866dbb8324bc1006727b497f8b1b6565076b857))
* **ServerTools:** item could be ToolFunc or  ServerTools ([5989582](https://github.com/isdk/ai-tool.js/commit/5989582d4c02235b0d2b79d55f4d22a7eb5b9e18))
* **ServerTools:** only setApiRoot on ServerTools ([be30938](https://github.com/isdk/ai-tool.js/commit/be3093889ab0332aafe4ef31d86e2675f453c3ae))
* the error name should be the function name ([340aeac](https://github.com/isdk/ai-tool.js/commit/340aeac669d24ff829c137a4e8ddf5426c61fce1))
* **ToolFunc:** do not export depends now ([c777bb6](https://github.com/isdk/ai-tool.js/commit/c777bb6e645add677a17acc3640bc0e72fc6c7d3))
* **ToolFunc:** name as optional in FuncParam ([f5588d5](https://github.com/isdk/ai-tool.js/commit/f5588d5cce11ca96b86fd6927e1602bbc87a3cb4))
* ts declarations ([006bfb8](https://github.com/isdk/ai-tool.js/commit/006bfb84c0bb90096b5a2279de50af4202db9b0a))
* **ts:** AIModelNameRuleFn should return string|RegExpExecArray|undefined instead of boolean ([afc2507](https://github.com/isdk/ai-tool.js/commit/afc2507d5612fb3603dd2e96c8daee3663132251))
* **ts:** id in res-server allow number ([57fd229](https://github.com/isdk/ai-tool.js/commit/57fd22957034e93e8b05617606cb420567734fab))
* **ts:** minor change ([d6313e1](https://github.com/isdk/ai-tool.js/commit/d6313e12e13adbbfb9828593f5fa7b8b49c86c0d))
* **ts:** minor change ([7b740dd](https://github.com/isdk/ai-tool.js/commit/7b740ddf45b0455033154a30359f2d3a41a45905))
* **ts:** minor changes ([af509bc](https://github.com/isdk/ai-tool.js/commit/af509bc7856e311da623c558cc8cd8b85e11ac8b))
* **ts:** what AlreadyExistsError allow number ([7139eb0](https://github.com/isdk/ai-tool.js/commit/7139eb094cd3c437df9329d459d8366e09c90bab))
