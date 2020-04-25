<a name="module_IterativeObject"></a>

## IterativeObject : <code>function</code>
Class providing an object with iteration support and array methods.


* [IterativeObject](#module_IterativeObject) : <code>function</code>
    * [~getByIndex(iObjectIndex)](#module_IterativeObject..getByIndex) ⇒ <code>\*</code>
    * [~getByName(iObjectName)](#module_IterativeObject..getByName) ⇒ <code>\*</code>
    * [~getIndexByName(iObjectName)](#module_IterativeObject..getIndexByName) ⇒ <code>number</code>
    * [~getNameByIndex(iObjectIndex)](#module_IterativeObject..getNameByIndex) ⇒ <code>string</code>
    * [~setByIndex(iObjectIndex, iObjectValue)](#module_IterativeObject..setByIndex)
    * [~setByName(iObjectName, iObjectValue)](#module_IterativeObject..setByName)
    * [~getLength()](#module_IterativeObject..getLength) ⇒ <code>number</code>
    * [~getAsArray()](#module_IterativeObject..getAsArray) ⇒ <code>Array</code>
    * [~push(iObjectName, iObjectValue)](#module_IterativeObject..push) ⇒ <code>number</code>
    * [~pop()](#module_IterativeObject..pop) ⇒ <code>\*</code>
    * [~shift()](#module_IterativeObject..shift) ⇒ <code>\*</code>
    * [~unshift(iObjectName, iObjectValue)](#module_IterativeObject..unshift) ⇒ <code>number</code>
    * [~indexOf(iObjectValue)](#module_IterativeObject..indexOf) ⇒ <code>\*</code>
    * [~nameOf(iObjectValue)](#module_IterativeObject..nameOf) ⇒ <code>\*</code>
    * [~slice([sliceBegin], [sliceEnd])](#module_IterativeObject..slice) ⇒ <code>Array</code>
    * [~forEach(forEachCb, [forEachThisArg])](#module_IterativeObject..forEach) ⇒ <code>undefined</code>
    * [~forEachCb](#module_IterativeObject..forEachCb) : <code>function</code>

<a name="module_IterativeObject..getByIndex"></a>

### IterativeObject~getByIndex(iObjectIndex) ⇒ <code>\*</code>
Get value at index.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - Value stored at index.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectIndex | <code>number</code> | Index of value. |

<a name="module_IterativeObject..getByName"></a>

### IterativeObject~getByName(iObjectName) ⇒ <code>\*</code>
Get value by name.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - Value stored at index.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectName | <code>string</code> | Name of value. |

<a name="module_IterativeObject..getIndexByName"></a>

### IterativeObject~getIndexByName(iObjectName) ⇒ <code>number</code>
Get index of named value.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>number</code> - Index of named value.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectName | <code>string</code> | Name of value. |

<a name="module_IterativeObject..getNameByIndex"></a>

### IterativeObject~getNameByIndex(iObjectIndex) ⇒ <code>string</code>
Get name of value at index.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>string</code> - Name of value at index.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectIndex | <code>number</code> | Index of value. |

<a name="module_IterativeObject..setByIndex"></a>

### IterativeObject~setByIndex(iObjectIndex, iObjectValue)
Set value at index.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Todo**

- [ ] Handle situations where the index doesn't already exist.


| Param | Type | Description |
| --- | --- | --- |
| iObjectIndex | <code>number</code> | Index of value. |
| iObjectValue | <code>\*</code> | Value at index. |

<a name="module_IterativeObject..setByName"></a>

### IterativeObject~setByName(iObjectName, iObjectValue)
Set value by name.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Todo**

- [ ] Handle situations where the name doesn't already exist.


| Param | Type | Description |
| --- | --- | --- |
| iObjectName | <code>string</code> | Name of value. |
| iObjectValue | <code>\*</code> | Named value. |

<a name="module_IterativeObject..getLength"></a>

### IterativeObject~getLength() ⇒ <code>number</code>
Get number of stored values.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>number</code> - Number of stored values.  
<a name="module_IterativeObject..getAsArray"></a>

### IterativeObject~getAsArray() ⇒ <code>Array</code>
Get stored values as array

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>Array</code> - Array of stored values.  
<a name="module_IterativeObject..push"></a>

### IterativeObject~push(iObjectName, iObjectValue) ⇒ <code>number</code>
Add a value to the end of the iteration sequence and return the number of stored values.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>number</code> - Number of stored values.  
**Todo**

- [ ] Mirror Array.push's ability to accept multiple values.


| Param | Type | Description |
| --- | --- | --- |
| iObjectName | <code>string</code> | Name of value. |
| iObjectValue | <code>\*</code> | Named value. |

<a name="module_IterativeObject..pop"></a>

### IterativeObject~pop() ⇒ <code>\*</code>
Removes the last value from the iteration sequence and returns that value.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - Removed element or undefined if the array was empty.  
<a name="module_IterativeObject..shift"></a>

### IterativeObject~shift() ⇒ <code>\*</code>
Removes the first value from the iteration sequence and returns that value.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - Removed element or undefined if the array was empty.  
<a name="module_IterativeObject..unshift"></a>

### IterativeObject~unshift(iObjectName, iObjectValue) ⇒ <code>number</code>
Add a value to the start of the iteration sequence and return the number of stored values.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>number</code> - Number of stored values.  
**Todo**

- [ ] Mirror Array.push's ability to accept multiple values.


| Param | Type | Description |
| --- | --- | --- |
| iObjectName | <code>string</code> | Name of value. |
| iObjectValue | <code>\*</code> | Named value. |

<a name="module_IterativeObject..indexOf"></a>

### IterativeObject~indexOf(iObjectValue) ⇒ <code>\*</code>
Returns the first index at which the given value can be found in the iteration sequence.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - First index at which the given value can be found in the iteration sequence.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectValue | <code>\*</code> | Value to locate. |

<a name="module_IterativeObject..nameOf"></a>

### IterativeObject~nameOf(iObjectValue) ⇒ <code>\*</code>
Returns the name of the first value in the iteration sequence to match the given value.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>\*</code> - Name of the first value in the iteration sequence to match the given value.  

| Param | Type | Description |
| --- | --- | --- |
| iObjectValue | <code>\*</code> | Value to locate. |

<a name="module_IterativeObject..slice"></a>

### IterativeObject~slice([sliceBegin], [sliceEnd]) ⇒ <code>Array</code>
Returns an excerpt of the iteration sequence as values in an array.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>Array</code> - Array containing the extracted values.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [sliceBegin] | <code>number</code> | <code>0</code> | Zero-based index at which to begin extraction. 		A negative index can be used, indicating an offset from the end of the sequence. |
| [sliceEnd] | <code>number</code> |  | Zero-based index before which to end extraction. 		A negative index can be used, indicating an offset from the end of the sequence. 		Defaults to this.getLength(); |

<a name="module_IterativeObject..forEach"></a>

### IterativeObject~forEach(forEachCb, [forEachThisArg]) ⇒ <code>undefined</code>
Perform function on each stored value according to iteration sequence.

**Kind**: inner method of [<code>IterativeObject</code>](#module_IterativeObject)  
**Returns**: <code>undefined</code> - Undefined.  

| Param | Type | Description |
| --- | --- | --- |
| forEachCb | <code>forEachCb</code> | Function to execute on each stored value. |
| [forEachThisArg] | <code>object</code> | Zero-based index **before which** to end extraction. |

<a name="module_IterativeObject..forEachCb"></a>

### IterativeObject~forEachCb : <code>function</code>
Callback for this.forEach.

**Kind**: inner typedef of [<code>IterativeObject</code>](#module_IterativeObject)  

| Param | Type | Description |
| --- | --- | --- |
| currentValue | <code>number</code> | Stored value provided from a cloned array. |
| index | <code>number</code> | Index of current value. |
| array | <code>number</code> | Array containing stored values. 		Changes to array iteration order will not impact iteration order of stored values. |

