/**
 * @fileoverview Exports module:IterativeObject.
 * @copyright Robert Gaines 2020
 * @license Apache-2.0
 * @author Robert Gaines <rob@communitywebservice.com>
 */
"use strict";

/**
 * Class providing an object with iteration support and array methods.
 * @module {Function} IterativeObject
 */

function IterativeObject() {

	var _this = {}; // Private scope.

	_this.iObjectNameArray = [];
	_this.iObjectValues = {};

	/**
	 * Get value at index.
	 * @method getByIndex
	 * @param {number} iObjectIndex Index of value.
	 * @returns {*} Value stored at index.
	 */

	this.getByIndex = function (iObjectIndex) {
		var iObjectName = this.getNameByIndex(iObjectIndex);
		var iObjectValue = this.getByName(iObjectName);

		return iObjectValue;
	};

	/**
	 * Get value by name.
	 * @method getByName
	 * @param {string} iObjectName Name of value.
	 * @returns {*} Value stored at index.
	 */

	this.getByName = function (iObjectName) {
		var iObjectValue = _this.iObjectValues[iObjectName];

		return iObjectValue;
	};

	/**
	 * Get index of named value.
	 * @method getIndexByName
	 * @param {string} iObjectName Name of value.
	 * @returns {number} Index of named value.
	 */

	this.getIndexByName = function (iObjectName) {
		var iObjectIndex = _this.iObjectNameArray.indexof(iObjectName);

		return iObjectIndex;
	};

	/**
	 * Get name of value at index.
	 * @method getNameByIndex
	 * @param {number} iObjectIndex Index of value.
	 * @returns {string} Name of value at index.
	 */

	this.getNameByIndex = function (iObjectIndex) {
		var iObjectName = _this.iObjectNameArray[iObjectIndex];

		return iObjectName;
	};

	/**
	 * Set value at index.
	 * @param {number} iObjectIndex Index of value.
	 * @method setByIndex
	 * @param {*} iObjectValue Value at index.
	 * @todo Handle situations where the index doesn't already exist.
	 */

	this.setByIndex = function (iObjectIndex, iObjectValue) {
		var iObjectName = _this.iObjectNameArray[iObjectIndex];

		this.setByName(iObjectName, iObjectValue)
	};

	/**
	 * Set value by name.
	 * @method setByName
	 * @param {string} iObjectName Name of value.
	 * @param {*} iObjectValue Named value.
	 * @todo Handle situations where the name doesn't already exist.
	 */

	this.setByName = function (iObjectName, iObjectValue) {
		_this.iObjectValues[iObjectName] = iObjectValue;
	};

	/**
	 * Get number of stored values.
	 * @method getLength
	 * @returns {number} Number of stored values.
	 */

	this.getLength = function () {
		var iObjectLength = _this.iObjectNameArray.length;

		return iObjectLength;
	};

	/**
	 * Get stored values as array
	 * @method getAsArray
	 * @returns {Array} Array of stored values.
	 */

	this.getAsArray = function () {
		var iObjectArrayLength = this.getLength();
		var iObjectArray = [];
		var iObjectValue;
		var i;

		for (i = 0; i < iObjectArrayLength; i++) {
			iObjectValue = this.getByIndex[i];
			iObjectArray.push(iObjectValue);
		}

		return iObjectArray;
	};

	/**
	 * Add a value to the end of the iteration sequence and return the number of stored values.
	 * @method push
	 * @param {string} iObjectName Name of value.
	 * @param {*} iObjectValue Named value.
	 * @returns {number} Number of stored values.
	 * @todo Mirror Array.push's ability to accept multiple values.
	 */

	this.push = function (iObjectName, iObjectValue) {
		var indexOfIObjectName = _this.iObjectNameArray.indexOf(iObjectName);
		var iObjectArrayLength;

		_this.iObjectValues[iObjectName] = iObjectValue;

		// @todo If the value exists, move it to the end of iteration.
		if (indexOfIObjectName === -1) {
			_this.iObjectNameArray.push(iObjectName);
		}

		iObjectArrayLength = this.getLength();

		return iObjectArrayLength;
	};

	/**
	 * Removes the last value from the iteration sequence and returns that value.
	 * @method pop
	 * @returns {*} Removed element or undefined if the array was empty.
	 */

	this.pop = function () {
		var iObjectArrayLength = this.getLength();
		var iObjectName;
		var iObjectValue;

		if (iObjectArrayLength === 0) {
			return undefined;
		}

		iObjectName = _this.iObjectNameArray.pop();

		iObjectValue = _this.iObjectValues[iObjectName];

		delete _this.iObjectValues[iObjectName];

		return iObjectValue;
	};

	/**
	 * Removes the first value from the iteration sequence and returns that value.
	 * @method shift
	 * @returns {*} Removed element or undefined if the array was empty.
	 */

	this.shift = function () {
		var iObjectName = _this.iObjectNameArray.shift();
		var iObjectValue;

		iObjectValue = _this.iObjectValues[iObjectName];

		delete _this.iObjectValues[iObjectName];

		return iObjectValue;
	};

	/**
	 * Add a value to the start of the iteration sequence and return the number of stored values.
	 * @method unshift
	 * @param {string} iObjectName Name of value.
	 * @param {*} iObjectValue Named value.
	 * @returns {number} Number of stored values.
	 * @todo Mirror Array.push's ability to accept multiple values.
	 */

	this.unshift = function (iObjectName, iObjectValue) {
		var indexOfIObjectName = _this.iObjectNameArray.indexOf(iObjectName);
		var iObjectArrayLength;

		_this.iObjectValues[iObjectName] = iObjectValue;

		// @todo If the value exists, move it to the end of iteration.
		if (indexOfIObjectName === -1) {
			_this.iObjectNameArray.unshift(iObjectName);
		}

		iObjectArrayLength = this.getLength();

		return iObjectArrayLength;
	};

	/**
	 * Returns the first index at which the given value can be found in the iteration sequence.
	 * @method indexOf
	 * @param {*} iObjectValue Value to locate.
	 * @returns {*} First index at which the given value can be found in the iteration sequence.
	 */

	this.indexOf = function (iObjectValue) {
		var iObjectIndex = _this.iObjectNameArray.indexOf(iObjectValue);

		return iObjectIndex;
	};

	/**
	 * Returns the name of the first value in the iteration sequence to match the given value.
	 * @method nameOf
	 * @param {*} iObjectValue Value to locate.
	 * @returns {*} Name of the first value in the iteration sequence to match the given value.
	 */

	this.nameOf = function (iObjectValue) {
		var iObjectIndex = this.indexOf(iObjectValue);
		var iObjectName = this.getNameByIndex(iObjectIndex);

		return iObjectName;
	};

	/**
	 * Returns an excerpt of the iteration sequence as values in an array.
	 * @method slice
	 * @param {number} [sliceBegin=0] Zero-based index at which to begin extraction.
	 * 		A negative index can be used, indicating an offset from the end of the sequence.
	 * @param {number} [sliceEnd] Zero-based index before which to end extraction.
	 * 		A negative index can be used, indicating an offset from the end of the sequence.
	 * 		Defaults to this.getLength();
	 * @returns {Array} Array containing the extracted values.
	 */

	this.slice = function (sliceBegin, sliceEnd) {
		var slicedIterativeObject = new this.constructor();
		var slicedNames = _this.iObjectNameArray.slice(sliceBegin, sliceEnd);
		var sliceLength = slicedNames.length;
		var iObjectName;
		var iObjectValue;
		var i;

		for (i = 0; i < sliceLength; i++) {
			iObjectName = this.getNameByIndex(i);
			iObjectValue = this.getByName(iObjectName);
			slicedIterativeObject.push(iObjectName, iObjectValue);
		}

		return slicedIterativeObject;
	};

	/**
	 * Callback for this.forEach.
	 * @callback forEachCb
	 * @param {number} currentValue Stored value provided from a cloned array.
	 * @param {number} index Index of current value.
	 * @param {number} array Array containing stored values.
	 * 		Changes to array iteration order will not impact iteration order of stored values.
	 */

	/**
	 * Perform function on each stored value according to iteration sequence.
	 * @method forEach
	 * @param {forEachCb} forEachCb Function to execute on each stored value.
	 * @param {object} [forEachThisArg] Zero-based index **before which** to end extraction.
	 * @returns {undefined} Undefined.
	 */

	this.forEach = function (forEachCb, forEachThisArg) {
		var iObjectArray = this.getAsArray();
		var returnValue;

		returnValue = iObjectArray.forEach(forEachCb, forEachThisArg);

		return returnValue;
	};

	// @todo Add getAsObject
	// @todo Add unset methods.
	// @todo Implement splice method.
	// @todo Implement map method.
	// @todo Construct from arguments. i.e. IterativeObject([1,2,3])
}

module.exports = IterativeObject;
