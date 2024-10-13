# Test

You should be aware that there may be multiple UTF-8 representations of a given string:

```js
'\u00fc' // encodes the ü character
'u\u0308' // also encodes the ü character

'\u00fc' === 'u\u0308' // false
'ü' === 'ü' // false
```

All algorithms defined in this library depend on the binary representation of the input string. Thus, it's highly recommended to normalize your strings before passing it to hash-wasm. You can use the normalize() built-in String function to archive this:

```js
'\u00fc'.normalize() === 'u\u0308'.normalize() // true

const te = new TextEncoder();
te.encode('u\u0308'); // Uint8Array(3) [117, 204, 136]
te.encode('\u00fc'); // Uint8Array(2) [195, 188]

te.encode('u\u0308'.normalize('NFKC')); // Uint8Array(2) [195, 188]
te.encode('\u00fc'.normalize('NFKC')); // Uint8Array(2) [195, 188]
```

这是测试文件的内容。这是第二句。这是第三句。这是第四句。这是第五句。
