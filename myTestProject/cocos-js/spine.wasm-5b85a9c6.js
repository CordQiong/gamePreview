System.register(['./_virtual_cc-a6591821.js'], (function (exports) {
  'use strict';
  var _createForOfIteratorHelperLoose;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module._;
    }],
    execute: (function () {

      var spineWasm = exports('default', function () {
        var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
        return function (spineWasm) {
          if (spineWasm === void 0) {
            spineWasm = {};
          }
          var Module = typeof spineWasm != "undefined" ? spineWasm : {};
          var readyPromiseResolve, readyPromiseReject;
          Module["ready"] = new Promise(function (resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
          var moduleOverrides = Object.assign({}, Module);
          var ENVIRONMENT_IS_WEB = true;
          var scriptDirectory = "";
          function locateFile(path) {
            if (Module["locateFile"]) {
              return Module["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
          }
          var readBinary;
          {
            if (typeof document != "undefined" && document.currentScript) {
              scriptDirectory = document.currentScript.src;
            }
            if (_scriptDir) {
              scriptDirectory = _scriptDir;
            }
            if (scriptDirectory.indexOf("blob:") !== 0) {
              scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            } else {
              scriptDirectory = "";
            }
          }
          var out = Module["print"] || console.log.bind(console);
          var err = Module["printErr"] || console.error.bind(console);
          Object.assign(Module, moduleOverrides);
          moduleOverrides = null;
          if (Module["arguments"]) Module["arguments"];
          if (Module["thisProgram"]) Module["thisProgram"];
          if (Module["quit"]) Module["quit"];
          var wasmBinary;
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          Module["noExitRuntime"] || true;
          if (typeof WebAssembly != "object") {
            abort("no native wasm support detected");
          }
          var wasmMemory;
          var ABORT = false;
          function assert(condition, text) {
            if (!condition) {
              abort(text);
            }
          }
          var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
          function updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module["HEAP8"] = HEAP8 = new Int8Array(b);
            Module["HEAP16"] = HEAP16 = new Int16Array(b);
            Module["HEAP32"] = HEAP32 = new Int32Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
          }
          var wasmTable;
          var __ATPRERUN__ = [];
          var __ATINIT__ = [];
          var __ATPOSTRUN__ = [];
          function preRun() {
            if (Module["preRun"]) {
              if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
              while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPRERUN__);
          }
          function initRuntime() {
            callRuntimeCallbacks(__ATINIT__);
          }
          function postRun() {
            if (Module["postRun"]) {
              if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
              while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
          }
          function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
          }
          function addOnInit(cb) {
            __ATINIT__.unshift(cb);
          }
          function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
          }
          var runDependencies = 0;
          var dependenciesFulfilled = null;
          function addRunDependency(id) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
          }
          function removeRunDependency(id) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
            if (runDependencies == 0) {
              if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
              }
            }
          }
          function abort(what) {
            if (Module["onAbort"]) {
              Module["onAbort"](what);
            }
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            what += ". Build with -sASSERTIONS for more info.";
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
          }
          var dataURIPrefix = "data:application/octet-stream;base64,";
          function isDataURI(filename) {
            return filename.startsWith(dataURIPrefix);
          }
          var wasmBinaryFile;
          wasmBinaryFile = "spine.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
          function getBinary(file) {
            try {
              if (file == wasmBinaryFile && wasmBinary) {
                return new Uint8Array(wasmBinary);
              }
              if (readBinary) ;
              throw "both async and sync fetching of the wasm failed";
            } catch (err) {
              abort(err);
            }
          }
          function getBinaryPromise(binaryFile) {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB )) {
              if (typeof fetch == "function") {
                return fetch(binaryFile, {
                  credentials: "same-origin"
                }).then(function (response) {
                  if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + binaryFile + "'";
                  }
                  return response["arrayBuffer"]();
                })["catch"](function () {
                  return getBinary(binaryFile);
                });
              }
            }
            return Promise.resolve().then(function () {
              return getBinary(binaryFile);
            });
          }
          function instantiateArrayBuffer(binaryFile, imports, receiver) {
            return getBinaryPromise(binaryFile).then(function (binary) {
              return WebAssembly.instantiate(binary, imports);
            }).then(function (instance) {
              return instance;
            }).then(receiver, function (reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync(binary, binaryFile, imports, callback) {
            if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
              return fetch(binaryFile, {
                credentials: "same-origin"
              }).then(function (response) {
                var result = WebAssembly.instantiateStreaming(response, imports);
                return result.then(callback, function (reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              });
            } else {
              return instantiateArrayBuffer(binaryFile, imports, callback);
            }
          }
          function createWasm() {
            var info = {
              "a": wasmImports
            };
            function receiveInstance(instance, module) {
              var exports = instance.exports;
              Module["asm"] = exports;
              wasmMemory = Module["asm"]["I"];
              updateMemoryViews();
              wasmTable = Module["asm"]["K"];
              addOnInit(Module["asm"]["J"]);
              removeRunDependency();
              return exports;
            }
            addRunDependency();
            function receiveInstantiationResult(result) {
              receiveInstance(result["instance"]);
            }
            if (Module["instantiateWasm"]) {
              try {
                return Module["instantiateWasm"](info, receiveInstance);
              } catch (e) {
                err("Module.instantiateWasm callback failed with error: " + e);
                readyPromiseReject(e);
              }
            }
            instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult)["catch"](readyPromiseReject);
            return {};
          }
          function callRuntimeCallbacks(callbacks) {
            while (callbacks.length > 0) {
              callbacks.shift()(Module);
            }
          }
          var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
          function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
              return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          }
          function UTF8ToString(ptr, maxBytesToRead) {
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          }
          function ___syscall_fcntl64(fd, cmd, varargs) {
            return 0;
          }
          function ___syscall_ioctl(fd, op, varargs) {
            return 0;
          }
          function ___syscall_openat(dirfd, path, flags, varargs) {
          }
          function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
          function getShiftFromSize(size) {
            switch (size) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError("Unknown type size: " + size);
            }
          }
          function embind_init_charCodes() {
            var codes = new Array(256);
            for (var i = 0; i < 256; ++i) {
              codes[i] = String.fromCharCode(i);
            }
            embind_charCodes = codes;
          }
          var embind_charCodes = undefined;
          function readLatin1String(ptr) {
            var ret = "";
            var c = ptr;
            while (HEAPU8[c]) {
              ret += embind_charCodes[HEAPU8[c++]];
            }
            return ret;
          }
          var awaitingDependencies = {};
          var registeredTypes = {};
          var typeDependencies = {};
          var char_0 = 48;
          var char_9 = 57;
          function makeLegalFunctionName(name) {
            if (undefined === name) {
              return "_unknown";
            }
            name = name.replace(/[^a-zA-Z0-9_]/g, "$");
            var f = name.charCodeAt(0);
            if (f >= char_0 && f <= char_9) {
              return "_" + name;
            }
            return name;
          }
          function createNamedFunction(name, body) {
            var _name$name;
            name = makeLegalFunctionName(name);
            return (_name$name = {}, _name$name[name] = function () {
              return body.apply(this, arguments);
            }, _name$name)[name];
          }
          function extendError(baseErrorType, errorName) {
            var errorClass = createNamedFunction(errorName, function (message) {
              this.name = errorName;
              this.message = message;
              var stack = new Error(message).stack;
              if (stack !== undefined) {
                this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
              }
            });
            errorClass.prototype = Object.create(baseErrorType.prototype);
            errorClass.prototype.constructor = errorClass;
            errorClass.prototype.toString = function () {
              if (this.message === undefined) {
                return this.name;
              } else {
                return this.name + ": " + this.message;
              }
            };
            return errorClass;
          }
          var BindingError = undefined;
          function throwBindingError(message) {
            throw new BindingError(message);
          }
          var InternalError = undefined;
          function throwInternalError(message) {
            throw new InternalError(message);
          }
          function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
            myTypes.forEach(function (type) {
              typeDependencies[type] = dependentTypes;
            });
            function onComplete(typeConverters) {
              var myTypeConverters = getTypeConverters(typeConverters);
              if (myTypeConverters.length !== myTypes.length) {
                throwInternalError("Mismatched type converter count");
              }
              for (var i = 0; i < myTypes.length; ++i) {
                registerType(myTypes[i], myTypeConverters[i]);
              }
            }
            var typeConverters = new Array(dependentTypes.length);
            var unregisteredTypes = [];
            var registered = 0;
            dependentTypes.forEach(function (dt, i) {
              if (registeredTypes.hasOwnProperty(dt)) {
                typeConverters[i] = registeredTypes[dt];
              } else {
                unregisteredTypes.push(dt);
                if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
                }
                awaitingDependencies[dt].push(function () {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                    onComplete(typeConverters);
                  }
                });
              }
            });
            if (0 === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          }
          function registerType(rawType, registeredInstance, options) {
            if (options === void 0) {
              options = {};
            }
            if (!("argPackAdvance" in registeredInstance)) {
              throw new TypeError("registerType registeredInstance requires argPackAdvance");
            }
            var name = registeredInstance.name;
            if (!rawType) {
              throwBindingError("type \"" + name + "\" must have a positive integer typeid pointer");
            }
            if (registeredTypes.hasOwnProperty(rawType)) {
              if (options.ignoreDuplicateRegistrations) {
                return;
              } else {
                throwBindingError("Cannot register type '" + name + "' twice");
              }
            }
            registeredTypes[rawType] = registeredInstance;
            delete typeDependencies[rawType];
            if (awaitingDependencies.hasOwnProperty(rawType)) {
              var callbacks = awaitingDependencies[rawType];
              delete awaitingDependencies[rawType];
              callbacks.forEach(function (cb) {
                return cb();
              });
            }
          }
          function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function fromWireType(wt) {
                return !!wt;
              },
              "toWireType": function toWireType(destructors, o) {
                return o ? trueValue : falseValue;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": function readValueFromPointer(pointer) {
                var heap;
                if (size === 1) {
                  heap = HEAP8;
                } else if (size === 2) {
                  heap = HEAP16;
                } else if (size === 4) {
                  heap = HEAP32;
                } else {
                  throw new TypeError("Unknown boolean type size: " + name);
                }
                return this["fromWireType"](heap[pointer >> shift]);
              },
              destructorFunction: null
            });
          }
          function ClassHandle_isAliasOf(other) {
            if (!(this instanceof ClassHandle)) {
              return false;
            }
            if (!(other instanceof ClassHandle)) {
              return false;
            }
            var leftClass = this.$$.ptrType.registeredClass;
            var left = this.$$.ptr;
            var rightClass = other.$$.ptrType.registeredClass;
            var right = other.$$.ptr;
            while (leftClass.baseClass) {
              left = leftClass.upcast(left);
              leftClass = leftClass.baseClass;
            }
            while (rightClass.baseClass) {
              right = rightClass.upcast(right);
              rightClass = rightClass.baseClass;
            }
            return leftClass === rightClass && left === right;
          }
          function shallowCopyInternalPointer(o) {
            return {
              count: o.count,
              deleteScheduled: o.deleteScheduled,
              preservePointerOnDelete: o.preservePointerOnDelete,
              ptr: o.ptr,
              ptrType: o.ptrType,
              smartPtr: o.smartPtr,
              smartPtrType: o.smartPtrType
            };
          }
          function throwInstanceAlreadyDeleted(obj) {
            function getInstanceTypeName(handle) {
              return handle.$$.ptrType.registeredClass.name;
            }
            throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
          }
          var finalizationRegistry = false;
          function detachFinalizer(handle) {}
          function runDestructor($$) {
            if ($$.smartPtr) {
              $$.smartPtrType.rawDestructor($$.smartPtr);
            } else {
              $$.ptrType.registeredClass.rawDestructor($$.ptr);
            }
          }
          function releaseClassHandle($$) {
            $$.count.value -= 1;
            var toDelete = 0 === $$.count.value;
            if (toDelete) {
              runDestructor($$);
            }
          }
          function downcastPointer(ptr, ptrClass, desiredClass) {
            if (ptrClass === desiredClass) {
              return ptr;
            }
            if (undefined === desiredClass.baseClass) {
              return null;
            }
            var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
            if (rv === null) {
              return null;
            }
            return desiredClass.downcast(rv);
          }
          var registeredPointers = {};
          function getInheritedInstanceCount() {
            return Object.keys(registeredInstances).length;
          }
          function getLiveInheritedInstances() {
            var rv = [];
            for (var k in registeredInstances) {
              if (registeredInstances.hasOwnProperty(k)) {
                rv.push(registeredInstances[k]);
              }
            }
            return rv;
          }
          var deletionQueue = [];
          function flushPendingDeletes() {
            while (deletionQueue.length) {
              var obj = deletionQueue.pop();
              obj.$$.deleteScheduled = false;
              obj["delete"]();
            }
          }
          var delayFunction = undefined;
          function setDelayFunction(fn) {
            delayFunction = fn;
            if (deletionQueue.length && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
          }
          function init_embind() {
            Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
            Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
            Module["flushPendingDeletes"] = flushPendingDeletes;
            Module["setDelayFunction"] = setDelayFunction;
          }
          var registeredInstances = {};
          function getBasestPointer(class_, ptr) {
            if (ptr === undefined) {
              throwBindingError("ptr should not be undefined");
            }
            while (class_.baseClass) {
              ptr = class_.upcast(ptr);
              class_ = class_.baseClass;
            }
            return ptr;
          }
          function getInheritedInstance(class_, ptr) {
            ptr = getBasestPointer(class_, ptr);
            return registeredInstances[ptr];
          }
          function makeClassHandle(prototype, record) {
            if (!record.ptrType || !record.ptr) {
              throwInternalError("makeClassHandle requires ptr and ptrType");
            }
            var hasSmartPtrType = !!record.smartPtrType;
            var hasSmartPtr = !!record.smartPtr;
            if (hasSmartPtrType !== hasSmartPtr) {
              throwInternalError("Both smartPtrType and smartPtr must be specified");
            }
            record.count = {
              value: 1
            };
            return attachFinalizer(Object.create(prototype, {
              $$: {
                value: record
              }
            }));
          }
          function RegisteredPointer_fromWireType(ptr) {
            var rawPointer = this.getPointee(ptr);
            if (!rawPointer) {
              this.destructor(ptr);
              return null;
            }
            var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
            if (undefined !== registeredInstance) {
              if (0 === registeredInstance.$$.count.value) {
                registeredInstance.$$.ptr = rawPointer;
                registeredInstance.$$.smartPtr = ptr;
                return registeredInstance["clone"]();
              } else {
                var rv = registeredInstance["clone"]();
                this.destructor(ptr);
                return rv;
              }
            }
            function makeDefaultHandle() {
              if (this.isSmartPointer) {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: rawPointer,
                  smartPtrType: this,
                  smartPtr: ptr
                });
              } else {
                return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: ptr
                });
              }
            }
            var actualType = this.registeredClass.getActualType(rawPointer);
            var registeredPointerRecord = registeredPointers[actualType];
            if (!registeredPointerRecord) {
              return makeDefaultHandle.call(this);
            }
            var toType;
            if (this.isConst) {
              toType = registeredPointerRecord.constPointerType;
            } else {
              toType = registeredPointerRecord.pointerType;
            }
            var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
            if (dp === null) {
              return makeDefaultHandle.call(this);
            }
            if (this.isSmartPointer) {
              return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp,
                smartPtrType: this,
                smartPtr: ptr
              });
            } else {
              return makeClassHandle(toType.registeredClass.instancePrototype, {
                ptrType: toType,
                ptr: dp
              });
            }
          }
          function attachFinalizer(handle) {
            if ("undefined" === typeof FinalizationRegistry) {
              attachFinalizer = function attachFinalizer(handle) {
                return handle;
              };
              return handle;
            }
            finalizationRegistry = new FinalizationRegistry(function (info) {
              releaseClassHandle(info.$$);
            });
            attachFinalizer = function attachFinalizer(handle) {
              var $$ = handle.$$;
              var hasSmartPtr = !!$$.smartPtr;
              if (hasSmartPtr) {
                var info = {
                  $$: $$
                };
                finalizationRegistry.register(handle, info, handle);
              }
              return handle;
            };
            detachFinalizer = function detachFinalizer(handle) {
              return finalizationRegistry.unregister(handle);
            };
            return attachFinalizer(handle);
          }
          function ClassHandle_clone() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.preservePointerOnDelete) {
              this.$$.count.value += 1;
              return this;
            } else {
              var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
                $$: {
                  value: shallowCopyInternalPointer(this.$$)
                }
              }));
              clone.$$.count.value += 1;
              clone.$$.deleteScheduled = false;
              return clone;
            }
          }
          function ClassHandle_delete() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            detachFinalizer(this);
            releaseClassHandle(this.$$);
            if (!this.$$.preservePointerOnDelete) {
              this.$$.smartPtr = undefined;
              this.$$.ptr = undefined;
            }
          }
          function ClassHandle_isDeleted() {
            return !this.$$.ptr;
          }
          function ClassHandle_deleteLater() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            deletionQueue.push(this);
            if (deletionQueue.length === 1 && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
            this.$$.deleteScheduled = true;
            return this;
          }
          function init_ClassHandle() {
            ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
            ClassHandle.prototype["clone"] = ClassHandle_clone;
            ClassHandle.prototype["delete"] = ClassHandle_delete;
            ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
            ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
          }
          function ClassHandle() {}
          function ensureOverloadTable(proto, methodName, humanName) {
            if (undefined === proto[methodName].overloadTable) {
              var prevFunc = proto[methodName];
              proto[methodName] = function () {
                if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
                }
                return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
              };
              proto[methodName].overloadTable = [];
              proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
            }
          }
          function exposePublicSymbol(name, value, numArguments) {
            if (Module.hasOwnProperty(name)) {
              if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
                throwBindingError("Cannot register public name '" + name + "' twice");
              }
              ensureOverloadTable(Module, name, name);
              if (Module.hasOwnProperty(numArguments)) {
                throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
              }
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              if (undefined !== numArguments) {
                Module[name].numArguments = numArguments;
              }
            }
          }
          function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
            this.name = name;
            this.constructor = constructor;
            this.instancePrototype = instancePrototype;
            this.rawDestructor = rawDestructor;
            this.baseClass = baseClass;
            this.getActualType = getActualType;
            this.upcast = upcast;
            this.downcast = downcast;
            this.pureVirtualFunctions = [];
          }
          function upcastPointer(ptr, ptrClass, desiredClass) {
            while (ptrClass !== desiredClass) {
              if (!ptrClass.upcast) {
                throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
              }
              ptr = ptrClass.upcast(ptr);
              ptrClass = ptrClass.baseClass;
            }
            return ptr;
          }
          function constNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError("Cannot pass \"" + embindRepr(handle) + "\" as a " + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function genericPointerToWireType(destructors, handle) {
            var ptr;
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              if (this.isSmartPointer) {
                ptr = this.rawConstructor();
                if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
                }
                return ptr;
              } else {
                return 0;
              }
            }
            if (!handle.$$) {
              throwBindingError("Cannot pass \"" + embindRepr(handle) + "\" as a " + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            if (!this.isConst && handle.$$.ptrType.isConst) {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            if (this.isSmartPointer) {
              if (undefined === handle.$$.smartPtr) {
                throwBindingError("Passing raw pointer to smart pointer is illegal");
              }
              switch (this.sharingPolicy) {
                case 0:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                  }
                  break;
                case 1:
                  ptr = handle.$$.smartPtr;
                  break;
                case 2:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    var clonedHandle = handle["clone"]();
                    ptr = this.rawShare(ptr, Emval.toHandle(function () {
                      clonedHandle["delete"]();
                    }));
                    if (destructors !== null) {
                      destructors.push(this.rawDestructor, ptr);
                    }
                  }
                  break;
                default:
                  throwBindingError("Unsupporting sharing policy");
              }
            }
            return ptr;
          }
          function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError("Cannot pass \"" + embindRepr(handle) + "\" as a " + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            if (handle.$$.ptrType.isConst) {
              throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function simpleReadValueFromPointer(pointer) {
            return this["fromWireType"](HEAP32[pointer >> 2]);
          }
          function RegisteredPointer_getPointee(ptr) {
            if (this.rawGetPointee) {
              ptr = this.rawGetPointee(ptr);
            }
            return ptr;
          }
          function RegisteredPointer_destructor(ptr) {
            if (this.rawDestructor) {
              this.rawDestructor(ptr);
            }
          }
          function RegisteredPointer_deleteObject(handle) {
            if (handle !== null) {
              handle["delete"]();
            }
          }
          function init_RegisteredPointer() {
            RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
            RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
            RegisteredPointer.prototype["argPackAdvance"] = 8;
            RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
            RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
            RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
          }
          function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
            this.name = name;
            this.registeredClass = registeredClass;
            this.isReference = isReference;
            this.isConst = isConst;
            this.isSmartPointer = isSmartPointer;
            this.pointeeType = pointeeType;
            this.sharingPolicy = sharingPolicy;
            this.rawGetPointee = rawGetPointee;
            this.rawConstructor = rawConstructor;
            this.rawShare = rawShare;
            this.rawDestructor = rawDestructor;
            if (!isSmartPointer && registeredClass.baseClass === undefined) {
              if (isConst) {
                this["toWireType"] = constNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              } else {
                this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              }
            } else {
              this["toWireType"] = genericPointerToWireType;
            }
          }
          function replacePublicSymbol(name, value, numArguments) {
            if (!Module.hasOwnProperty(name)) {
              throwInternalError("Replacing nonexistant public symbol");
            }
            if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              Module[name].argCount = numArguments;
            }
          }
          function dynCallLegacy(sig, ptr, args) {
            var f = Module["dynCall_" + sig];
            return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
          }
          var wasmTableMirror = [];
          function getWasmTableEntry(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
              if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
              wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            return func;
          }
          function dynCall(sig, ptr, args) {
            if (sig.includes("j")) {
              return dynCallLegacy(sig, ptr, args);
            }
            var rtn = getWasmTableEntry(ptr).apply(null, args);
            return rtn;
          }
          function getDynCaller(sig, ptr) {
            var argCache = [];
            return function () {
              argCache.length = 0;
              Object.assign(argCache, arguments);
              return dynCall(sig, ptr, argCache);
            };
          }
          function embind__requireFunction(signature, rawFunction) {
            signature = readLatin1String(signature);
            function makeDynCaller() {
              if (signature.includes("j")) {
                return getDynCaller(signature, rawFunction);
              }
              return getWasmTableEntry(rawFunction);
            }
            var fp = makeDynCaller();
            if (typeof fp != "function") {
              throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
            }
            return fp;
          }
          var UnboundTypeError = undefined;
          function getTypeName(type) {
            var ptr = _getTypeName(type);
            var rv = readLatin1String(ptr);
            _free2(ptr);
            return rv;
          }
          function throwUnboundTypeError(message, types) {
            var unboundTypes = [];
            var seen = {};
            function visit(type) {
              if (seen[type]) {
                return;
              }
              if (registeredTypes[type]) {
                return;
              }
              if (typeDependencies[type]) {
                typeDependencies[type].forEach(visit);
                return;
              }
              unboundTypes.push(type);
              seen[type] = true;
            }
            types.forEach(visit);
            throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
          }
          function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
            name = readLatin1String(name);
            getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
            if (upcast) {
              upcast = embind__requireFunction(upcastSignature, upcast);
            }
            if (downcast) {
              downcast = embind__requireFunction(downcastSignature, downcast);
            }
            rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
            var legalFunctionName = makeLegalFunctionName(name);
            exposePublicSymbol(legalFunctionName, function () {
              throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
            });
            whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
              base = base[0];
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                baseClass = base.registeredClass;
                basePrototype = baseClass.instancePrototype;
              } else {
                basePrototype = ClassHandle.prototype;
              }
              var constructor = createNamedFunction(legalFunctionName, function () {
                if (Object.getPrototypeOf(this) !== instancePrototype) {
                  throw new BindingError("Use 'new' to construct " + name);
                }
                if (undefined === registeredClass.constructor_body) {
                  throw new BindingError(name + " has no accessible constructor");
                }
                var body = registeredClass.constructor_body[arguments.length];
                if (undefined === body) {
                  throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                }
                return body.apply(this, arguments);
              });
              var instancePrototype = Object.create(basePrototype, {
                constructor: {
                  value: constructor
                }
              });
              constructor.prototype = instancePrototype;
              var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
              if (registeredClass.baseClass) {
                if (registeredClass.baseClass.__derivedClasses === undefined) {
                  registeredClass.baseClass.__derivedClasses = [];
                }
                registeredClass.baseClass.__derivedClasses.push(registeredClass);
              }
              var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
              var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
              var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
              registeredPointers[rawType] = {
                pointerType: pointerConverter,
                constPointerType: constPointerConverter
              };
              replacePublicSymbol(legalFunctionName, constructor);
              return [referenceConverter, pointerConverter, constPointerConverter];
            });
          }
          function runDestructors(destructors) {
            while (destructors.length) {
              var ptr = destructors.pop();
              var del = destructors.pop();
              del(ptr);
            }
          }
          function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) {
            var argCount = argTypes.length;
            if (argCount < 2) {
              throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
            }
            var isClassMethodFunc = argTypes[1] !== null && classType !== null;
            var needsDestructorStack = false;
            for (var i = 1; i < argTypes.length; ++i) {
              if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
                needsDestructorStack = true;
                break;
              }
            }
            var returns = argTypes[0].name !== "void";
            var expectedArgCount = argCount - 2;
            var argsWired = new Array(expectedArgCount);
            var invokerFuncArgs = [];
            var destructors = [];
            return function () {
              if (arguments.length !== expectedArgCount) {
                throwBindingError("function " + humanName + " called with " + arguments.length + " arguments, expected " + expectedArgCount + " args!");
              }
              destructors.length = 0;
              var thisWired;
              invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
              invokerFuncArgs[0] = cppTargetFunc;
              if (isClassMethodFunc) {
                thisWired = argTypes[1]["toWireType"](destructors, this);
                invokerFuncArgs[1] = thisWired;
              }
              for (var i = 0; i < expectedArgCount; ++i) {
                argsWired[i] = argTypes[i + 2]["toWireType"](destructors, arguments[i]);
                invokerFuncArgs.push(argsWired[i]);
              }
              var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
              function onDone(rv) {
                if (needsDestructorStack) {
                  runDestructors(destructors);
                } else {
                  for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; i++) {
                    var param = i === 1 ? thisWired : argsWired[i - 2];
                    if (argTypes[i].destructorFunction !== null) {
                      argTypes[i].destructorFunction(param);
                    }
                  }
                }
                if (returns) {
                  return argTypes[0]["fromWireType"](rv);
                }
              }
              return onDone(rv);
            };
          }
          function heap32VectorToArray(count, firstElement) {
            var array = [];
            for (var i = 0; i < count; i++) {
              array.push(HEAPU32[firstElement + i * 4 >> 2]);
            }
            return array;
          }
          function __embind_register_class_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, fn, isAsync) {
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            methodName = readLatin1String(methodName);
            rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = classType.name + "." + methodName;
              function unboundTypesHandler() {
                throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
              }
              if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
              }
              var proto = classType.registeredClass.constructor;
              if (undefined === proto[methodName]) {
                unboundTypesHandler.argCount = argCount - 1;
                proto[methodName] = unboundTypesHandler;
              } else {
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
              }
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
                var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
                if (undefined === proto[methodName].overloadTable) {
                  func.argCount = argCount - 1;
                  proto[methodName] = func;
                } else {
                  proto[methodName].overloadTable[argCount - 1] = func;
                }
                if (classType.registeredClass.__derivedClasses) {
                  for (var _iterator = _createForOfIteratorHelperLoose(classType.registeredClass.__derivedClasses), _step; !(_step = _iterator()).done;) {
                    var derivedClass = _step.value;
                    if (!derivedClass.constructor.hasOwnProperty(methodName)) {
                      derivedClass.constructor[methodName] = func;
                    }
                  }
                }
                return [];
              });
              return [];
            });
          }
          function validateThis(this_, classType, humanName) {
            if (!(this_ instanceof Object)) {
              throwBindingError(humanName + " with invalid \"this\": " + this_);
            }
            if (!(this_ instanceof classType.registeredClass.constructor)) {
              throwBindingError(humanName + " incompatible with \"this\" of type " + this_.constructor.name);
            }
            if (!this_.$$.ptr) {
              throwBindingError("cannot call emscripten binding method " + humanName + " on deleted object");
            }
            return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass);
          }
          function __embind_register_class_class_property(rawClassType, fieldName, rawFieldType, rawFieldPtr, getterSignature, getter, setterSignature, setter) {
            fieldName = readLatin1String(fieldName);
            getter = embind__requireFunction(getterSignature, getter);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = classType.name + "." + fieldName;
              var desc = {
                get: function get() {
                  throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [rawFieldType]);
                },
                enumerable: true,
                configurable: true
              };
              if (setter) {
                desc.set = function () {
                  throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [rawFieldType]);
                };
              } else {
                desc.set = function (v) {
                  throwBindingError(humanName + " is a read-only property");
                };
              }
              Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
              whenDependentTypesAreResolved([], [rawFieldType], function (fieldType) {
                fieldType = fieldType[0];
                var desc = {
                  get: function get() {
                    return fieldType["fromWireType"](getter(rawFieldPtr));
                  },
                  enumerable: true
                };
                if (setter) {
                  setter = embind__requireFunction(setterSignature, setter);
                  desc.set = function (v) {
                    var destructors = [];
                    setter(rawFieldPtr, fieldType["toWireType"](destructors, v));
                    runDestructors(destructors);
                  };
                }
                Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
            assert(argCount > 0);
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            invoker = embind__requireFunction(invokerSignature, invoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = "constructor " + classType.name;
              if (undefined === classType.registeredClass.constructor_body) {
                classType.registeredClass.constructor_body = [];
              }
              if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
                throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
              }
              classType.registeredClass.constructor_body[argCount - 1] = function () {
                throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
              };
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                argTypes.splice(1, 0, null);
                classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync) {
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            methodName = readLatin1String(methodName);
            rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
            whenDependentTypesAreResolved([], [rawClassType], function (classType) {
              classType = classType[0];
              var humanName = classType.name + "." + methodName;
              if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
              }
              if (isPureVirtual) {
                classType.registeredClass.pureVirtualFunctions.push(methodName);
              }
              function unboundTypesHandler() {
                throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
              }
              var proto = classType.registeredClass.instancePrototype;
              var method = proto[methodName];
              if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
                unboundTypesHandler.argCount = argCount - 2;
                unboundTypesHandler.className = classType.name;
                proto[methodName] = unboundTypesHandler;
              } else {
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
              }
              whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
                var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
                if (undefined === proto[methodName].overloadTable) {
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
                } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
                }
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_property(classType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) {
            fieldName = readLatin1String(fieldName);
            getter = embind__requireFunction(getterSignature, getter);
            whenDependentTypesAreResolved([], [classType], function (classType) {
              classType = classType[0];
              var humanName = classType.name + "." + fieldName;
              var desc = {
                get: function get() {
                  throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [getterReturnType, setterArgumentType]);
                },
                enumerable: true,
                configurable: true
              };
              if (setter) {
                desc.set = function () {
                  throwUnboundTypeError("Cannot access " + humanName + " due to unbound types", [getterReturnType, setterArgumentType]);
                };
              } else {
                desc.set = function (v) {
                  throwBindingError(humanName + " is a read-only property");
                };
              }
              Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
              whenDependentTypesAreResolved([], setter ? [getterReturnType, setterArgumentType] : [getterReturnType], function (types) {
                var getterReturnType = types[0];
                var desc = {
                  get: function get() {
                    var ptr = validateThis(this, classType, humanName + " getter");
                    return getterReturnType["fromWireType"](getter(getterContext, ptr));
                  },
                  enumerable: true
                };
                if (setter) {
                  setter = embind__requireFunction(setterSignature, setter);
                  var setterArgumentType = types[1];
                  desc.set = function (v) {
                    var ptr = validateThis(this, classType, humanName + " setter");
                    var destructors = [];
                    setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, v));
                    runDestructors(destructors);
                  };
                }
                Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
                return [];
              });
              return [];
            });
          }
          function HandleAllocator() {
            this.allocated = [undefined];
            this.freelist = [];
            this.get = function (id) {
              return this.allocated[id];
            };
            this.has = function (id) {
              return this.allocated[id] !== undefined;
            };
            this.allocate = function (handle) {
              var id = this.freelist.pop() || this.allocated.length;
              this.allocated[id] = handle;
              return id;
            };
            this.free = function (id) {
              this.allocated[id] = undefined;
              this.freelist.push(id);
            };
          }
          var emval_handles = new HandleAllocator();
          function __emval_decref(handle) {
            if (handle >= emval_handles.reserved && 0 === --emval_handles.get(handle).refcount) {
              emval_handles.free(handle);
            }
          }
          function count_emval_handles() {
            var count = 0;
            for (var i = emval_handles.reserved; i < emval_handles.allocated.length; ++i) {
              if (emval_handles.allocated[i] !== undefined) {
                ++count;
              }
            }
            return count;
          }
          function init_emval() {
            emval_handles.allocated.push({
              value: undefined
            }, {
              value: null
            }, {
              value: true
            }, {
              value: false
            });
            emval_handles.reserved = emval_handles.allocated.length;
            Module["count_emval_handles"] = count_emval_handles;
          }
          var Emval = {
            toValue: function toValue(handle) {
              if (!handle) {
                throwBindingError("Cannot use deleted val. handle = " + handle);
              }
              return emval_handles.get(handle).value;
            },
            toHandle: function toHandle(value) {
              switch (value) {
                case undefined:
                  return 1;
                case null:
                  return 2;
                case true:
                  return 3;
                case false:
                  return 4;
                default:
                  {
                    return emval_handles.allocate({
                      refcount: 1,
                      value: value
                    });
                  }
              }
            }
          };
          function __embind_register_emval(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function fromWireType(handle) {
                var rv = Emval.toValue(handle);
                __emval_decref(handle);
                return rv;
              },
              "toWireType": function toWireType(destructors, value) {
                return Emval.toHandle(value);
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: null
            });
          }
          function enumReadValueFromPointer(name, shift, signed) {
            switch (shift) {
              case 0:
                return function (pointer) {
                  var heap = signed ? HEAP8 : HEAPU8;
                  return this["fromWireType"](heap[pointer]);
                };
              case 1:
                return function (pointer) {
                  var heap = signed ? HEAP16 : HEAPU16;
                  return this["fromWireType"](heap[pointer >> 1]);
                };
              case 2:
                return function (pointer) {
                  var heap = signed ? HEAP32 : HEAPU32;
                  return this["fromWireType"](heap[pointer >> 2]);
                };
              default:
                throw new TypeError("Unknown integer type: " + name);
            }
          }
          function __embind_register_enum(rawType, name, size, isSigned) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            function ctor() {}
            ctor.values = {};
            registerType(rawType, {
              name: name,
              constructor: ctor,
              "fromWireType": function fromWireType(c) {
                return this.constructor.values[c];
              },
              "toWireType": function toWireType(destructors, c) {
                return c.value;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": enumReadValueFromPointer(name, shift, isSigned),
              destructorFunction: null
            });
            exposePublicSymbol(name, ctor);
          }
          function requireRegisteredType(rawType, humanName) {
            var impl = registeredTypes[rawType];
            if (undefined === impl) {
              throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
            }
            return impl;
          }
          function __embind_register_enum_value(rawEnumType, name, enumValue) {
            var enumType = requireRegisteredType(rawEnumType, "enum");
            name = readLatin1String(name);
            var Enum = enumType.constructor;
            var Value = Object.create(enumType.constructor.prototype, {
              value: {
                value: enumValue
              },
              constructor: {
                value: createNamedFunction(enumType.name + "_" + name, function () {})
              }
            });
            Enum.values[enumValue] = Value;
            Enum[name] = Value;
          }
          function embindRepr(v) {
            if (v === null) {
              return "null";
            }
            var t = typeof v;
            if (t === "object" || t === "array" || t === "function") {
              return v.toString();
            } else {
              return "" + v;
            }
          }
          function floatReadValueFromPointer(name, shift) {
            switch (shift) {
              case 2:
                return function (pointer) {
                  return this["fromWireType"](HEAPF32[pointer >> 2]);
                };
              case 3:
                return function (pointer) {
                  return this["fromWireType"](HEAPF64[pointer >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + name);
            }
          }
          function __embind_register_float(rawType, name, size) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": function fromWireType(value) {
                return value;
              },
              "toWireType": function toWireType(destructors, value) {
                return value;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": floatReadValueFromPointer(name, shift),
              destructorFunction: null
            });
          }
          function integerReadValueFromPointer(name, shift, signed) {
            switch (shift) {
              case 0:
                return signed ? function readS8FromPointer(pointer) {
                  return HEAP8[pointer];
                } : function readU8FromPointer(pointer) {
                  return HEAPU8[pointer];
                };
              case 1:
                return signed ? function readS16FromPointer(pointer) {
                  return HEAP16[pointer >> 1];
                } : function readU16FromPointer(pointer) {
                  return HEAPU16[pointer >> 1];
                };
              case 2:
                return signed ? function readS32FromPointer(pointer) {
                  return HEAP32[pointer >> 2];
                } : function readU32FromPointer(pointer) {
                  return HEAPU32[pointer >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + name);
            }
          }
          function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
            name = readLatin1String(name);
            var shift = getShiftFromSize(size);
            var fromWireType = function fromWireType(value) {
              return value;
            };
            if (minRange === 0) {
              var bitshift = 32 - 8 * size;
              fromWireType = function fromWireType(value) {
                return value << bitshift >>> bitshift;
              };
            }
            var isUnsignedType = name.includes("unsigned");
            var checkAssertions = function checkAssertions(value, toTypeName) {};
            var toWireType;
            if (isUnsignedType) {
              toWireType = function toWireType(destructors, value) {
                checkAssertions(value, this.name);
                return value >>> 0;
              };
            } else {
              toWireType = function toWireType(destructors, value) {
                checkAssertions(value, this.name);
                return value;
              };
            }
            registerType(primitiveType, {
              name: name,
              "fromWireType": fromWireType,
              "toWireType": toWireType,
              "argPackAdvance": 8,
              "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
              destructorFunction: null
            });
          }
          function __embind_register_memory_view(rawType, dataTypeIndex, name) {
            var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
            var TA = typeMapping[dataTypeIndex];
            function decodeMemoryView(handle) {
              handle = handle >> 2;
              var heap = HEAPU32;
              var size = heap[handle];
              var data = heap[handle + 1];
              return new TA(heap.buffer, data, size);
            }
            name = readLatin1String(name);
            registerType(rawType, {
              name: name,
              "fromWireType": decodeMemoryView,
              "argPackAdvance": 8,
              "readValueFromPointer": decodeMemoryView
            }, {
              ignoreDuplicateRegistrations: true
            });
          }
          function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          }
          function stringToUTF8(str, outPtr, maxBytesToWrite) {
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          }
          function lengthBytesUTF8(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) {
                len++;
              } else if (c <= 2047) {
                len += 2;
              } else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else {
                len += 3;
              }
            }
            return len;
          }
          function __embind_register_std_string(rawType, name) {
            name = readLatin1String(name);
            var stdStringIsUTF8 = name === "std::string";
            registerType(rawType, {
              name: name,
              "fromWireType": function fromWireType(value) {
                var length = HEAPU32[value >> 2];
                var payload = value + 4;
                var str;
                if (stdStringIsUTF8) {
                  var decodeStartPtr = payload;
                  for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = payload + i;
                    if (i == length || HEAPU8[currentBytePtr] == 0) {
                      var maxRead = currentBytePtr - decodeStartPtr;
                      var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                      if (str === undefined) {
                        str = stringSegment;
                      } else {
                        str += String.fromCharCode(0);
                        str += stringSegment;
                      }
                      decodeStartPtr = currentBytePtr + 1;
                    }
                  }
                } else {
                  var a = new Array(length);
                  for (var i = 0; i < length; ++i) {
                    a[i] = String.fromCharCode(HEAPU8[payload + i]);
                  }
                  str = a.join("");
                }
                _free2(value);
                return str;
              },
              "toWireType": function toWireType(destructors, value) {
                if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
                }
                var length;
                var valueIsOfTypeString = typeof value == "string";
                if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                  throwBindingError("Cannot pass non-string to std::string");
                }
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                  length = lengthBytesUTF8(value);
                } else {
                  length = value.length;
                }
                var base = _malloc2(4 + length + 1);
                var ptr = base + 4;
                HEAPU32[base >> 2] = length;
                if (stdStringIsUTF8 && valueIsOfTypeString) {
                  stringToUTF8(value, ptr, length + 1);
                } else {
                  if (valueIsOfTypeString) {
                    for (var i = 0; i < length; ++i) {
                      var charCode = value.charCodeAt(i);
                      if (charCode > 255) {
                        _free2(ptr);
                        throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                      }
                      HEAPU8[ptr + i] = charCode;
                    }
                  } else {
                    for (var i = 0; i < length; ++i) {
                      HEAPU8[ptr + i] = value[i];
                    }
                  }
                }
                if (destructors !== null) {
                  destructors.push(_free2, base);
                }
                return base;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: function destructorFunction(ptr) {
                _free2(ptr);
              }
            });
          }
          var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
          function UTF16ToString(ptr, maxBytesToRead) {
            var endPtr = ptr;
            var idx = endPtr >> 1;
            var maxIdx = idx + maxBytesToRead / 2;
            while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
            endPtr = idx << 1;
            if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
            var str = "";
            for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
              var codeUnit = HEAP16[ptr + i * 2 >> 1];
              if (codeUnit == 0) break;
              str += String.fromCharCode(codeUnit);
            }
            return str;
          }
          function stringToUTF16(str, outPtr, maxBytesToWrite) {
            if (maxBytesToWrite === undefined) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 2) return 0;
            maxBytesToWrite -= 2;
            var startPtr = outPtr;
            var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
            for (var i = 0; i < numCharsToWrite; ++i) {
              var codeUnit = str.charCodeAt(i);
              HEAP16[outPtr >> 1] = codeUnit;
              outPtr += 2;
            }
            HEAP16[outPtr >> 1] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF16(str) {
            return str.length * 2;
          }
          function UTF32ToString(ptr, maxBytesToRead) {
            var i = 0;
            var str = "";
            while (!(i >= maxBytesToRead / 4)) {
              var utf32 = HEAP32[ptr + i * 4 >> 2];
              if (utf32 == 0) break;
              ++i;
              if (utf32 >= 65536) {
                var ch = utf32 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              } else {
                str += String.fromCharCode(utf32);
              }
            }
            return str;
          }
          function stringToUTF32(str, outPtr, maxBytesToWrite) {
            if (maxBytesToWrite === undefined) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 4) return 0;
            var startPtr = outPtr;
            var endPtr = startPtr + maxBytesToWrite - 4;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) {
                var trailSurrogate = str.charCodeAt(++i);
                codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
              }
              HEAP32[outPtr >> 2] = codeUnit;
              outPtr += 4;
              if (outPtr + 4 > endPtr) break;
            }
            HEAP32[outPtr >> 2] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF32(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
              len += 4;
            }
            return len;
          }
          function __embind_register_std_wstring(rawType, charSize, name) {
            name = readLatin1String(name);
            var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
            if (charSize === 2) {
              decodeString = UTF16ToString;
              encodeString = stringToUTF16;
              lengthBytesUTF = lengthBytesUTF16;
              getHeap = function getHeap() {
                return HEAPU16;
              };
              shift = 1;
            } else if (charSize === 4) {
              decodeString = UTF32ToString;
              encodeString = stringToUTF32;
              lengthBytesUTF = lengthBytesUTF32;
              getHeap = function getHeap() {
                return HEAPU32;
              };
              shift = 2;
            }
            registerType(rawType, {
              name: name,
              "fromWireType": function fromWireType(value) {
                var length = HEAPU32[value >> 2];
                var HEAP = getHeap();
                var str;
                var decodeStartPtr = value + 4;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = value + 4 + i * charSize;
                  if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                    if (str === undefined) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + charSize;
                  }
                }
                _free2(value);
                return str;
              },
              "toWireType": function toWireType(destructors, value) {
                if (!(typeof value == "string")) {
                  throwBindingError("Cannot pass non-string to C++ string type " + name);
                }
                var length = lengthBytesUTF(value);
                var ptr = _malloc2(4 + length + charSize);
                HEAPU32[ptr >> 2] = length >> shift;
                encodeString(value, ptr + 4, length + charSize);
                if (destructors !== null) {
                  destructors.push(_free2, ptr);
                }
                return ptr;
              },
              "argPackAdvance": 8,
              "readValueFromPointer": simpleReadValueFromPointer,
              destructorFunction: function destructorFunction(ptr) {
                _free2(ptr);
              }
            });
          }
          function __embind_register_void(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, {
              isVoid: true,
              name: name,
              "argPackAdvance": 0,
              "fromWireType": function fromWireType() {
                return undefined;
              },
              "toWireType": function toWireType(destructors, o) {
                return undefined;
              }
            });
          }
          function __emval_as(handle, returnType, destructorsRef) {
            handle = Emval.toValue(handle);
            returnType = requireRegisteredType(returnType, "emval::as");
            var destructors = [];
            var rd = Emval.toHandle(destructors);
            HEAPU32[destructorsRef >> 2] = rd;
            return returnType["toWireType"](destructors, handle);
          }
          function __emval_incref(handle) {
            if (handle > 4) {
              emval_handles.get(handle).refcount += 1;
            }
          }
          function __emval_run_destructors(handle) {
            var destructors = Emval.toValue(handle);
            runDestructors(destructors);
            __emval_decref(handle);
          }
          function __emval_take_value(type, arg) {
            type = requireRegisteredType(type, "_emval_take_value");
            var v = type["readValueFromPointer"](arg);
            return Emval.toHandle(v);
          }
          function _abort() {
            abort("");
          }
          function _emscripten_memcpy_big(dest, src, num) {
            HEAPU8.copyWithin(dest, src, src + num);
          }
          function getHeapMax() {
            return 2147483648;
          }
          function emscripten_realloc_buffer(size) {
            var b = wasmMemory.buffer;
            var pages = size - b.byteLength + 65535 >>> 16;
            try {
              wasmMemory.grow(pages);
              updateMemoryViews();
              return 1;
            } catch (e) {}
          }
          function _emscripten_resize_heap(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize = requestedSize >>> 0;
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
              return false;
            }
            var alignUp = function alignUp(x, multiple) {
              return x + (multiple - x % multiple) % multiple;
            };
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
              var replacement = emscripten_realloc_buffer(newSize);
              if (replacement) {
                return true;
              }
            }
            return false;
          }
          function _fd_close(fd) {
            return 52;
          }
          function _fd_read(fd, iov, iovcnt, pnum) {
            return 52;
          }
          function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            return 70;
          }
          var printCharBuffers = [null, [], []];
          function printChar(stream, curr) {
            var buffer = printCharBuffers[stream];
            if (curr === 0 || curr === 10) {
              (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
              buffer.length = 0;
            } else {
              buffer.push(curr);
            }
          }
          function _fd_write(fd, iov, iovcnt, pnum) {
            var num = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >> 2];
              var len = HEAPU32[iov + 4 >> 2];
              iov += 8;
              for (var j = 0; j < len; j++) {
                printChar(fd, HEAPU8[ptr + j]);
              }
              num += len;
            }
            HEAPU32[pnum >> 2] = num;
            return 0;
          }
          function _spineListenerCallBackFromJS() {
            var wasmUtil = Module["SpineWasmUtil"];
            var listenerID = wasmUtil.getCurrentListenerID();
            var trackEntry = wasmUtil.getCurrentTrackEntry();
            var event = wasmUtil.getCurrentEvent();
            var eventType = wasmUtil.getCurrentEventType();
            globalThis.TrackEntryListeners.emitListener(listenerID, trackEntry, event, eventType.value);
          }
          function _spineTrackListenerCallback() {
            var wasmUtil = Module["SpineWasmUtil"];
            var listenerID = wasmUtil.getCurrentListenerID();
            var eventType = wasmUtil.getCurrentEventType();
            var trackEntry = wasmUtil.getCurrentTrackEntry();
            var event = wasmUtil.getCurrentEvent();
            globalThis.TrackEntryListeners.emitTrackEntryListener(listenerID, trackEntry, event, eventType.value);
          }
          embind_init_charCodes();
          BindingError = Module["BindingError"] = extendError(Error, "BindingError");
          InternalError = Module["InternalError"] = extendError(Error, "InternalError");
          init_ClassHandle();
          init_embind();
          init_RegisteredPointer();
          UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
          init_emval();
          var wasmImports = {
            "o": ___syscall_fcntl64,
            "x": ___syscall_ioctl,
            "y": ___syscall_openat,
            "t": __embind_register_bigint,
            "C": __embind_register_bool,
            "b": __embind_register_class,
            "f": __embind_register_class_class_function,
            "j": __embind_register_class_class_property,
            "c": __embind_register_class_constructor,
            "a": __embind_register_class_function,
            "e": __embind_register_class_property,
            "A": __embind_register_emval,
            "k": __embind_register_enum,
            "d": __embind_register_enum_value,
            "p": __embind_register_float,
            "l": __embind_register_integer,
            "i": __embind_register_memory_view,
            "q": __embind_register_std_string,
            "m": __embind_register_std_wstring,
            "D": __embind_register_void,
            "F": __emval_as,
            "r": __emval_decref,
            "G": __emval_incref,
            "E": __emval_run_destructors,
            "h": __emval_take_value,
            "g": _abort,
            "z": _emscripten_memcpy_big,
            "u": _emscripten_resize_heap,
            "n": _fd_close,
            "w": _fd_read,
            "s": _fd_seek,
            "v": _fd_write,
            "H": _spineListenerCallBackFromJS,
            "B": _spineTrackListenerCallback
          };
          createWasm();
          var _malloc2 = function _malloc() {
            return (_malloc2 = Module["asm"]["L"]).apply(null, arguments);
          };
          var _free2 = function _free() {
            return (_free2 = Module["asm"]["M"]).apply(null, arguments);
          };
          var _getTypeName = function ___getTypeName() {
            return (_getTypeName = Module["asm"]["N"]).apply(null, arguments);
          };
          Module["__embind_initialize_bindings"] = function () {
            return (Module["__embind_initialize_bindings"] = Module["asm"]["O"]).apply(null, arguments);
          };
          Module["dynCall_jiji"] = function () {
            return (Module["dynCall_jiji"] = Module["asm"]["P"]).apply(null, arguments);
          };
          var calledRun;
          dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
          };
          function run() {
            if (runDependencies > 0) {
              return;
            }
            preRun();
            if (runDependencies > 0) {
              return;
            }
            function doRun() {
              if (calledRun) return;
              calledRun = true;
              Module["calledRun"] = true;
              if (ABORT) return;
              initRuntime();
              readyPromiseResolve(Module);
              if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
              postRun();
            }
            if (Module["setStatus"]) {
              Module["setStatus"]("Running...");
              setTimeout(function () {
                setTimeout(function () {
                  Module["setStatus"]("");
                }, 1);
                doRun();
              }, 1);
            } else {
              doRun();
            }
          }
          if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
              Module["preInit"].pop()();
            }
          }
          run();
          return spineWasm.ready;
        };
      }());

    })
  };
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BpbmUud2FzbS01Yjg1YTljNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbURhdGEvY29jb3MvZWRpdG9ycy9DcmVhdG9yLzMuOC40L2V4dGVybmFsOmVtc2NyaXB0ZW4vc3BpbmUvc3BpbmUud2FzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBzcGluZVdhc20gPSAoKCkgPT4ge1xuICB2YXIgX3NjcmlwdERpciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCA/IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjIDogdW5kZWZpbmVkO1xuICBcbiAgcmV0dXJuIChcbmZ1bmN0aW9uKHNwaW5lV2FzbSA9IHt9KSAge1xuXG52YXIgTW9kdWxlPXR5cGVvZiBzcGluZVdhc20hPVwidW5kZWZpbmVkXCI/c3BpbmVXYXNtOnt9O3ZhciByZWFkeVByb21pc2VSZXNvbHZlLHJlYWR5UHJvbWlzZVJlamVjdDtNb2R1bGVbXCJyZWFkeVwiXT1uZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57cmVhZHlQcm9taXNlUmVzb2x2ZT1yZXNvbHZlO3JlYWR5UHJvbWlzZVJlamVjdD1yZWplY3R9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgYXJndW1lbnRzXz1bXTt2YXIgdGhpc1Byb2dyYW09XCIuL3RoaXMucHJvZ3JhbVwiO3ZhciBxdWl0Xz0oc3RhdHVzLHRvVGhyb3cpPT57dGhyb3cgdG9UaHJvd307dmFyIEVOVklST05NRU5UX0lTX1dFQj10cnVlO3ZhciBFTlZJUk9OTUVOVF9JU19XT1JLRVI9ZmFsc2U7dmFyIHNjcmlwdERpcmVjdG9yeT1cIlwiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlW1wibG9jYXRlRmlsZVwiXSl7cmV0dXJuIE1vZHVsZVtcImxvY2F0ZUZpbGVcIl0ocGF0aCxzY3JpcHREaXJlY3RvcnkpfXJldHVybiBzY3JpcHREaXJlY3RvcnkrcGF0aH12YXIgcmVhZF8scmVhZEFzeW5jLHJlYWRCaW5hcnksc2V0V2luZG93VGl0bGU7aWYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpe2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZn1lbHNlIGlmKHR5cGVvZiBkb2N1bWVudCE9XCJ1bmRlZmluZWRcIiYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCl7c2NyaXB0RGlyZWN0b3J5PWRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjfWlmKF9zY3JpcHREaXIpe3NjcmlwdERpcmVjdG9yeT1fc2NyaXB0RGlyfWlmKHNjcmlwdERpcmVjdG9yeS5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXtzY3JpcHREaXJlY3Rvcnk9c2NyaXB0RGlyZWN0b3J5LnN1YnN0cigwLHNjcmlwdERpcmVjdG9yeS5yZXBsYWNlKC9bPyNdLiovLFwiXCIpLmxhc3RJbmRleE9mKFwiL1wiKSsxKX1lbHNle3NjcmlwdERpcmVjdG9yeT1cIlwifXtyZWFkXz11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnNlbmQobnVsbCk7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9O2lmKEVOVklST05NRU5UX0lTX1dPUktFUil7cmVhZEJpbmFyeT11cmw9Pnt2YXIgeGhyPW5ldyBYTUxIdHRwUmVxdWVzdDt4aHIub3BlbihcIkdFVFwiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCI7eGhyLnNlbmQobnVsbCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSl9fXJlYWRBc3luYz0odXJsLG9ubG9hZCxvbmVycm9yKT0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKFwiR0VUXCIsdXJsLHRydWUpO3hoci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiO3hoci5vbmxvYWQ9KCk9PntpZih4aHIuc3RhdHVzPT0yMDB8fHhoci5zdGF0dXM9PTAmJnhoci5yZXNwb25zZSl7b25sb2FkKHhoci5yZXNwb25zZSk7cmV0dXJufW9uZXJyb3IoKX07eGhyLm9uZXJyb3I9b25lcnJvcjt4aHIuc2VuZChudWxsKX19c2V0V2luZG93VGl0bGU9dGl0bGU9PmRvY3VtZW50LnRpdGxlPXRpdGxlfWVsc2V7fXZhciBvdXQ9TW9kdWxlW1wicHJpbnRcIl18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbXCJwcmludEVyclwiXXx8Y29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpO09iamVjdC5hc3NpZ24oTW9kdWxlLG1vZHVsZU92ZXJyaWRlcyk7bW9kdWxlT3ZlcnJpZGVzPW51bGw7aWYoTW9kdWxlW1wiYXJndW1lbnRzXCJdKWFyZ3VtZW50c189TW9kdWxlW1wiYXJndW1lbnRzXCJdO2lmKE1vZHVsZVtcInRoaXNQcm9ncmFtXCJdKXRoaXNQcm9ncmFtPU1vZHVsZVtcInRoaXNQcm9ncmFtXCJdO2lmKE1vZHVsZVtcInF1aXRcIl0pcXVpdF89TW9kdWxlW1wicXVpdFwiXTt2YXIgd2FzbUJpbmFyeTtpZihNb2R1bGVbXCJ3YXNtQmluYXJ5XCJdKXdhc21CaW5hcnk9TW9kdWxlW1wid2FzbUJpbmFyeVwiXTt2YXIgbm9FeGl0UnVudGltZT1Nb2R1bGVbXCJub0V4aXRSdW50aW1lXCJdfHx0cnVlO2lmKHR5cGVvZiBXZWJBc3NlbWJseSE9XCJvYmplY3RcIil7YWJvcnQoXCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkXCIpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgRVhJVFNUQVRVUztmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLHRleHQpe2lmKCFjb25kaXRpb24pe2Fib3J0KHRleHQpfX12YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVtcIkhFQVA4XCJdPUhFQVA4PW5ldyBJbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUDE2XCJdPUhFQVAxNj1uZXcgSW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQMzJcIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBVOFwiXT1IRUFQVTg9bmV3IFVpbnQ4QXJyYXkoYik7TW9kdWxlW1wiSEVBUFUxNlwiXT1IRUFQVTE2PW5ldyBVaW50MTZBcnJheShiKTtNb2R1bGVbXCJIRUFQVTMyXCJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGMzJcIl09SEVBUEYzMj1uZXcgRmxvYXQzMkFycmF5KGIpO01vZHVsZVtcIkhFQVBGNjRcIl09SEVBUEY2ND1uZXcgRmxvYXQ2NEFycmF5KGIpfXZhciB3YXNtVGFibGU7dmFyIF9fQVRQUkVSVU5fXz1bXTt2YXIgX19BVElOSVRfXz1bXTt2YXIgX19BVFBPU1RSVU5fXz1bXTt2YXIgcnVudGltZUluaXRpYWxpemVkPWZhbHNlO2Z1bmN0aW9uIHByZVJ1bigpe2lmKE1vZHVsZVtcInByZVJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZVJ1blwiXT09XCJmdW5jdGlvblwiKU1vZHVsZVtcInByZVJ1blwiXT1bTW9kdWxlW1wicHJlUnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwcmVSdW5cIl0ubGVuZ3RoKXthZGRPblByZVJ1bihNb2R1bGVbXCJwcmVSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQUkVSVU5fXyl9ZnVuY3Rpb24gaW5pdFJ1bnRpbWUoKXtydW50aW1lSW5pdGlhbGl6ZWQ9dHJ1ZTtjYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUSU5JVF9fKX1mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlW1wicG9zdFJ1blwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInBvc3RSdW5cIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwb3N0UnVuXCJdPVtNb2R1bGVbXCJwb3N0UnVuXCJdXTt3aGlsZShNb2R1bGVbXCJwb3N0UnVuXCJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVtcInBvc3RSdW5cIl0uc2hpZnQoKSl9fWNhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRQT1NUUlVOX18pfWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYil9ZnVuY3Rpb24gYWRkT25Jbml0KGNiKXtfX0FUSU5JVF9fLnVuc2hpZnQoY2IpfWZ1bmN0aW9uIGFkZE9uUG9zdFJ1bihjYil7X19BVFBPU1RSVU5fXy51bnNoaWZ0KGNiKX12YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIHJ1bkRlcGVuZGVuY3lXYXRjaGVyPW51bGw7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO2lmKE1vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0pe01vZHVsZVtcIm1vbml0b3JSdW5EZXBlbmRlbmNpZXNcIl0ocnVuRGVwZW5kZW5jaWVzKX19ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07aWYoTW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXSl7TW9kdWxlW1wibW9uaXRvclJ1bkRlcGVuZGVuY2llc1wiXShydW5EZXBlbmRlbmNpZXMpfWlmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYocnVuRGVwZW5kZW5jeVdhdGNoZXIhPT1udWxsKXtjbGVhckludGVydmFsKHJ1bkRlcGVuZGVuY3lXYXRjaGVyKTtydW5EZXBlbmRlbmN5V2F0Y2hlcj1udWxsfWlmKGRlcGVuZGVuY2llc0Z1bGZpbGxlZCl7dmFyIGNhbGxiYWNrPWRlcGVuZGVuY2llc0Z1bGZpbGxlZDtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9bnVsbDtjYWxsYmFjaygpfX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7aWYoTW9kdWxlW1wib25BYm9ydFwiXSl7TW9kdWxlW1wib25BYm9ydFwiXSh3aGF0KX13aGF0PVwiQWJvcnRlZChcIit3aGF0K1wiKVwiO2Vycih3aGF0KTtBQk9SVD10cnVlO0VYSVRTVEFUVVM9MTt3aGF0Kz1cIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIjt2YXIgZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKHdoYXQpO3JlYWR5UHJvbWlzZVJlamVjdChlKTt0aHJvdyBlfXZhciBkYXRhVVJJUHJlZml4PVwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiO2Z1bmN0aW9uIGlzRGF0YVVSSShmaWxlbmFtZSl7cmV0dXJuIGZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCl9dmFyIHdhc21CaW5hcnlGaWxlO3dhc21CaW5hcnlGaWxlPVwic3BpbmUud2FzbVwiO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKX1mdW5jdGlvbiBnZXRCaW5hcnkoZmlsZSl7dHJ5e2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCJ9Y2F0Y2goZXJyKXthYm9ydChlcnIpfX1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKGJpbmFyeUZpbGUpe2lmKCF3YXNtQmluYXJ5JiYoRU5WSVJPTk1FTlRfSVNfV0VCfHxFTlZJUk9OTUVOVF9JU19XT1JLRVIpKXtpZih0eXBlb2YgZmV0Y2g9PVwiZnVuY3Rpb25cIil7cmV0dXJuIGZldGNoKGJpbmFyeUZpbGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pLnRoZW4ocmVzcG9uc2U9PntpZighcmVzcG9uc2VbXCJva1wiXSl7dGhyb3dcImZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJ1wiK2JpbmFyeUZpbGUrXCInXCJ9cmV0dXJuIHJlc3BvbnNlW1wiYXJyYXlCdWZmZXJcIl0oKX0pLmNhdGNoKCgpPT5nZXRCaW5hcnkoYmluYXJ5RmlsZSkpfX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+Z2V0QmluYXJ5KGJpbmFyeUZpbGUpKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxyZWNlaXZlcil7cmV0dXJuIGdldEJpbmFyeVByb21pc2UoYmluYXJ5RmlsZSkudGhlbihiaW5hcnk9PntyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYmluYXJ5LGltcG9ydHMpfSkudGhlbihpbnN0YW5jZT0+e3JldHVybiBpbnN0YW5jZX0pLnRoZW4ocmVjZWl2ZXIscmVhc29uPT57ZXJyKFwiZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogXCIrcmVhc29uKTthYm9ydChyZWFzb24pfSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYyhiaW5hcnksYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKXtpZighYmluYXJ5JiZ0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmc9PVwiZnVuY3Rpb25cIiYmIWlzRGF0YVVSSShiaW5hcnlGaWxlKSYmdHlwZW9mIGZldGNoPT1cImZ1bmN0aW9uXCIpe3JldHVybiBmZXRjaChiaW5hcnlGaWxlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KS50aGVuKHJlc3BvbnNlPT57dmFyIHJlc3VsdD1XZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXNwb25zZSxpbXBvcnRzKTtyZXR1cm4gcmVzdWx0LnRoZW4oY2FsbGJhY2ssZnVuY3Rpb24ocmVhc29uKXtlcnIoXCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogXCIrcmVhc29uKTtlcnIoXCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvblwiKTtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spfSl9KX1lbHNle3JldHVybiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl9fWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17XCJhXCI6d2FzbUltcG9ydHN9O2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW5jZShpbnN0YW5jZSxtb2R1bGUpe3ZhciBleHBvcnRzPWluc3RhbmNlLmV4cG9ydHM7TW9kdWxlW1wiYXNtXCJdPWV4cG9ydHM7d2FzbU1lbW9yeT1Nb2R1bGVbXCJhc21cIl1bXCJJXCJdO3VwZGF0ZU1lbW9yeVZpZXdzKCk7d2FzbVRhYmxlPU1vZHVsZVtcImFzbVwiXVtcIktcIl07YWRkT25Jbml0KE1vZHVsZVtcImFzbVwiXVtcIkpcIl0pO3JlbW92ZVJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO3JldHVybiBleHBvcnRzfWFkZFJ1bkRlcGVuZGVuY3koXCJ3YXNtLWluc3RhbnRpYXRlXCIpO2Z1bmN0aW9uIHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KHJlc3VsdCl7cmVjZWl2ZUluc3RhbmNlKHJlc3VsdFtcImluc3RhbmNlXCJdKX1pZihNb2R1bGVbXCJpbnN0YW50aWF0ZVdhc21cIl0pe3RyeXtyZXR1cm4gTW9kdWxlW1wiaW5zdGFudGlhdGVXYXNtXCJdKGluZm8scmVjZWl2ZUluc3RhbmNlKX1jYXRjaChlKXtlcnIoXCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiBcIitlKTtyZWFkeVByb21pc2VSZWplY3QoZSl9fWluc3RhbnRpYXRlQXN5bmMod2FzbUJpbmFyeSx3YXNtQmluYXJ5RmlsZSxpbmZvLHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybnt9fWZ1bmN0aW9uIGNhbGxSdW50aW1lQ2FsbGJhY2tzKGNhbGxiYWNrcyl7d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpfX12YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0ZjhcIik6dW5kZWZpbmVkO2Z1bmN0aW9uIFVURjhBcnJheVRvU3RyaW5nKGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj1cIlwiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTJ9ZWxzZXt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjN9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCl9ZWxzZXt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKX19cmV0dXJuIHN0cn1mdW5jdGlvbiBVVEY4VG9TdHJpbmcocHRyLG1heEJ5dGVzVG9SZWFkKXtyZXR1cm4gcHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOlwiXCJ9dmFyIFNZU0NBTExTPXt2YXJhcmdzOnVuZGVmaW5lZCxnZXQ6ZnVuY3Rpb24oKXtTWVNDQUxMUy52YXJhcmdzKz00O3ZhciByZXQ9SEVBUDMyW1NZU0NBTExTLnZhcmFyZ3MtND4+Ml07cmV0dXJuIHJldH0sZ2V0U3RyOmZ1bmN0aW9uKHB0cil7dmFyIHJldD1VVEY4VG9TdHJpbmcocHRyKTtyZXR1cm4gcmV0fX07ZnVuY3Rpb24gX19fc3lzY2FsbF9mY250bDY0KGZkLGNtZCx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3M7cmV0dXJuIDB9ZnVuY3Rpb24gX19fc3lzY2FsbF9pb2N0bChmZCxvcCx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3M7cmV0dXJuIDB9ZnVuY3Rpb24gX19fc3lzY2FsbF9vcGVuYXQoZGlyZmQscGF0aCxmbGFncyx2YXJhcmdzKXtTWVNDQUxMUy52YXJhcmdzPXZhcmFyZ3N9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50KHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKXt9ZnVuY3Rpb24gZ2V0U2hpZnRGcm9tU2l6ZShzaXplKXtzd2l0Y2goc2l6ZSl7Y2FzZSAxOnJldHVybiAwO2Nhc2UgMjpyZXR1cm4gMTtjYXNlIDQ6cmV0dXJuIDI7Y2FzZSA4OnJldHVybiAzO2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihgVW5rbm93biB0eXBlIHNpemU6ICR7c2l6ZX1gKX19ZnVuY3Rpb24gZW1iaW5kX2luaXRfY2hhckNvZGVzKCl7dmFyIGNvZGVzPW5ldyBBcnJheSgyNTYpO2Zvcih2YXIgaT0wO2k8MjU2OysraSl7Y29kZXNbaV09U3RyaW5nLmZyb21DaGFyQ29kZShpKX1lbWJpbmRfY2hhckNvZGVzPWNvZGVzfXZhciBlbWJpbmRfY2hhckNvZGVzPXVuZGVmaW5lZDtmdW5jdGlvbiByZWFkTGF0aW4xU3RyaW5nKHB0cil7dmFyIHJldD1cIlwiO3ZhciBjPXB0cjt3aGlsZShIRUFQVThbY10pe3JldCs9ZW1iaW5kX2NoYXJDb2Rlc1tIRUFQVThbYysrXV19cmV0dXJuIHJldH12YXIgYXdhaXRpbmdEZXBlbmRlbmNpZXM9e307dmFyIHJlZ2lzdGVyZWRUeXBlcz17fTt2YXIgdHlwZURlcGVuZGVuY2llcz17fTt2YXIgY2hhcl8wPTQ4O3ZhciBjaGFyXzk9NTc7ZnVuY3Rpb24gbWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpe2lmKHVuZGVmaW5lZD09PW5hbWUpe3JldHVyblwiX3Vua25vd25cIn1uYW1lPW5hbWUucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLFwiJFwiKTt2YXIgZj1uYW1lLmNoYXJDb2RlQXQoMCk7aWYoZj49Y2hhcl8wJiZmPD1jaGFyXzkpe3JldHVybmBfJHtuYW1lfWB9cmV0dXJuIG5hbWV9ZnVuY3Rpb24gY3JlYXRlTmFtZWRGdW5jdGlvbihuYW1lLGJvZHkpe25hbWU9bWFrZUxlZ2FsRnVuY3Rpb25OYW1lKG5hbWUpO3JldHVybntbbmFtZV06ZnVuY3Rpb24oKXtyZXR1cm4gYm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fVtuYW1lXX1mdW5jdGlvbiBleHRlbmRFcnJvcihiYXNlRXJyb3JUeXBlLGVycm9yTmFtZSl7dmFyIGVycm9yQ2xhc3M9Y3JlYXRlTmFtZWRGdW5jdGlvbihlcnJvck5hbWUsZnVuY3Rpb24obWVzc2FnZSl7dGhpcy5uYW1lPWVycm9yTmFtZTt0aGlzLm1lc3NhZ2U9bWVzc2FnZTt2YXIgc3RhY2s9bmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO2lmKHN0YWNrIT09dW5kZWZpbmVkKXt0aGlzLnN0YWNrPXRoaXMudG9TdHJpbmcoKStcIlxcblwiK3N0YWNrLnJlcGxhY2UoL15FcnJvcig6W15cXG5dKik/XFxuLyxcIlwiKX19KTtlcnJvckNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGJhc2VFcnJvclR5cGUucHJvdG90eXBlKTtlcnJvckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1lcnJvckNsYXNzO2Vycm9yQ2xhc3MucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7aWYodGhpcy5tZXNzYWdlPT09dW5kZWZpbmVkKXtyZXR1cm4gdGhpcy5uYW1lfWVsc2V7cmV0dXJuYCR7dGhpcy5uYW1lfTogJHt0aGlzLm1lc3NhZ2V9YH19O3JldHVybiBlcnJvckNsYXNzfXZhciBCaW5kaW5nRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93QmluZGluZ0Vycm9yKG1lc3NhZ2Upe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IobWVzc2FnZSl9dmFyIEludGVybmFsRXJyb3I9dW5kZWZpbmVkO2Z1bmN0aW9uIHRocm93SW50ZXJuYWxFcnJvcihtZXNzYWdlKXt0aHJvdyBuZXcgSW50ZXJuYWxFcnJvcihtZXNzYWdlKX1mdW5jdGlvbiB3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChteVR5cGVzLGRlcGVuZGVudFR5cGVzLGdldFR5cGVDb252ZXJ0ZXJzKXtteVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSl7dHlwZURlcGVuZGVuY2llc1t0eXBlXT1kZXBlbmRlbnRUeXBlc30pO2Z1bmN0aW9uIG9uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpe3ZhciBteVR5cGVDb252ZXJ0ZXJzPWdldFR5cGVDb252ZXJ0ZXJzKHR5cGVDb252ZXJ0ZXJzKTtpZihteVR5cGVDb252ZXJ0ZXJzLmxlbmd0aCE9PW15VHlwZXMubGVuZ3RoKXt0aHJvd0ludGVybmFsRXJyb3IoXCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50XCIpfWZvcih2YXIgaT0wO2k8bXlUeXBlcy5sZW5ndGg7KytpKXtyZWdpc3RlclR5cGUobXlUeXBlc1tpXSxteVR5cGVDb252ZXJ0ZXJzW2ldKX19dmFyIHR5cGVDb252ZXJ0ZXJzPW5ldyBBcnJheShkZXBlbmRlbnRUeXBlcy5sZW5ndGgpO3ZhciB1bnJlZ2lzdGVyZWRUeXBlcz1bXTt2YXIgcmVnaXN0ZXJlZD0wO2RlcGVuZGVudFR5cGVzLmZvckVhY2goKGR0LGkpPT57aWYocmVnaXN0ZXJlZFR5cGVzLmhhc093blByb3BlcnR5KGR0KSl7dHlwZUNvbnZlcnRlcnNbaV09cmVnaXN0ZXJlZFR5cGVzW2R0XX1lbHNle3VucmVnaXN0ZXJlZFR5cGVzLnB1c2goZHQpO2lmKCFhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShkdCkpe2F3YWl0aW5nRGVwZW5kZW5jaWVzW2R0XT1bXX1hd2FpdGluZ0RlcGVuZGVuY2llc1tkdF0ucHVzaCgoKT0+e3R5cGVDb252ZXJ0ZXJzW2ldPXJlZ2lzdGVyZWRUeXBlc1tkdF07KytyZWdpc3RlcmVkO2lmKHJlZ2lzdGVyZWQ9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX0pfX0pO2lmKDA9PT11bnJlZ2lzdGVyZWRUeXBlcy5sZW5ndGgpe29uQ29tcGxldGUodHlwZUNvbnZlcnRlcnMpfX1mdW5jdGlvbiByZWdpc3RlclR5cGUocmF3VHlwZSxyZWdpc3RlcmVkSW5zdGFuY2Usb3B0aW9ucz17fSl7aWYoIShcImFyZ1BhY2tBZHZhbmNlXCJpbiByZWdpc3RlcmVkSW5zdGFuY2UpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVnaXN0ZXJUeXBlIHJlZ2lzdGVyZWRJbnN0YW5jZSByZXF1aXJlcyBhcmdQYWNrQWR2YW5jZVwiKX12YXIgbmFtZT1yZWdpc3RlcmVkSW5zdGFuY2UubmFtZTtpZighcmF3VHlwZSl7dGhyb3dCaW5kaW5nRXJyb3IoYHR5cGUgXCIke25hbWV9XCIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcmApfWlmKHJlZ2lzdGVyZWRUeXBlcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7aWYob3B0aW9ucy5pZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zKXtyZXR1cm59ZWxzZXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyR7bmFtZX0nIHR3aWNlYCl9fXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXT1yZWdpc3RlcmVkSW5zdGFuY2U7ZGVsZXRlIHR5cGVEZXBlbmRlbmNpZXNbcmF3VHlwZV07aWYoYXdhaXRpbmdEZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkocmF3VHlwZSkpe3ZhciBjYWxsYmFja3M9YXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07ZGVsZXRlIGF3YWl0aW5nRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2NhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfYm9vbChyYXdUeXBlLG5hbWUsc2l6ZSx0cnVlVmFsdWUsZmFsc2VWYWx1ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih3dCl7cmV0dXJuISF3dH0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIG8/dHJ1ZVZhbHVlOmZhbHNlVmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcDtpZihzaXplPT09MSl7aGVhcD1IRUFQOH1lbHNlIGlmKHNpemU9PT0yKXtoZWFwPUhFQVAxNn1lbHNlIGlmKHNpemU9PT00KXtoZWFwPUhFQVAzMn1lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGJvb2xlYW4gdHlwZSBzaXplOiBcIituYW1lKX1yZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXI+PnNoaWZ0XSl9LGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfaXNBbGlhc09mKG90aGVyKXtpZighKHRoaXMgaW5zdGFuY2VvZiBDbGFzc0hhbmRsZSkpe3JldHVybiBmYWxzZX1pZighKG90aGVyIGluc3RhbmNlb2YgQ2xhc3NIYW5kbGUpKXtyZXR1cm4gZmFsc2V9dmFyIGxlZnRDbGFzcz10aGlzLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciBsZWZ0PXRoaXMuJCQucHRyO3ZhciByaWdodENsYXNzPW90aGVyLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzO3ZhciByaWdodD1vdGhlci4kJC5wdHI7d2hpbGUobGVmdENsYXNzLmJhc2VDbGFzcyl7bGVmdD1sZWZ0Q2xhc3MudXBjYXN0KGxlZnQpO2xlZnRDbGFzcz1sZWZ0Q2xhc3MuYmFzZUNsYXNzfXdoaWxlKHJpZ2h0Q2xhc3MuYmFzZUNsYXNzKXtyaWdodD1yaWdodENsYXNzLnVwY2FzdChyaWdodCk7cmlnaHRDbGFzcz1yaWdodENsYXNzLmJhc2VDbGFzc31yZXR1cm4gbGVmdENsYXNzPT09cmlnaHRDbGFzcyYmbGVmdD09PXJpZ2h0fWZ1bmN0aW9uIHNoYWxsb3dDb3B5SW50ZXJuYWxQb2ludGVyKG8pe3JldHVybntjb3VudDpvLmNvdW50LGRlbGV0ZVNjaGVkdWxlZDpvLmRlbGV0ZVNjaGVkdWxlZCxwcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZTpvLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlLHB0cjpvLnB0cixwdHJUeXBlOm8ucHRyVHlwZSxzbWFydFB0cjpvLnNtYXJ0UHRyLHNtYXJ0UHRyVHlwZTpvLnNtYXJ0UHRyVHlwZX19ZnVuY3Rpb24gdGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKG9iail7ZnVuY3Rpb24gZ2V0SW5zdGFuY2VUeXBlTmFtZShoYW5kbGUpe3JldHVybiBoYW5kbGUuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MubmFtZX10aHJvd0JpbmRpbmdFcnJvcihnZXRJbnN0YW5jZVR5cGVOYW1lKG9iaikrXCIgaW5zdGFuY2UgYWxyZWFkeSBkZWxldGVkXCIpfXZhciBmaW5hbGl6YXRpb25SZWdpc3RyeT1mYWxzZTtmdW5jdGlvbiBkZXRhY2hGaW5hbGl6ZXIoaGFuZGxlKXt9ZnVuY3Rpb24gcnVuRGVzdHJ1Y3RvcigkJCl7aWYoJCQuc21hcnRQdHIpeyQkLnNtYXJ0UHRyVHlwZS5yYXdEZXN0cnVjdG9yKCQkLnNtYXJ0UHRyKX1lbHNleyQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzLnJhd0Rlc3RydWN0b3IoJCQucHRyKX19ZnVuY3Rpb24gcmVsZWFzZUNsYXNzSGFuZGxlKCQkKXskJC5jb3VudC52YWx1ZS09MTt2YXIgdG9EZWxldGU9MD09PSQkLmNvdW50LnZhbHVlO2lmKHRvRGVsZXRlKXtydW5EZXN0cnVjdG9yKCQkKX19ZnVuY3Rpb24gZG93bmNhc3RQb2ludGVyKHB0cixwdHJDbGFzcyxkZXNpcmVkQ2xhc3Mpe2lmKHB0ckNsYXNzPT09ZGVzaXJlZENsYXNzKXtyZXR1cm4gcHRyfWlmKHVuZGVmaW5lZD09PWRlc2lyZWRDbGFzcy5iYXNlQ2xhc3Mpe3JldHVybiBudWxsfXZhciBydj1kb3duY2FzdFBvaW50ZXIocHRyLHB0ckNsYXNzLGRlc2lyZWRDbGFzcy5iYXNlQ2xhc3MpO2lmKHJ2PT09bnVsbCl7cmV0dXJuIG51bGx9cmV0dXJuIGRlc2lyZWRDbGFzcy5kb3duY2FzdChydil9dmFyIHJlZ2lzdGVyZWRQb2ludGVycz17fTtmdW5jdGlvbiBnZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50KCl7cmV0dXJuIE9iamVjdC5rZXlzKHJlZ2lzdGVyZWRJbnN0YW5jZXMpLmxlbmd0aH1mdW5jdGlvbiBnZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzKCl7dmFyIHJ2PVtdO2Zvcih2YXIgayBpbiByZWdpc3RlcmVkSW5zdGFuY2VzKXtpZihyZWdpc3RlcmVkSW5zdGFuY2VzLmhhc093blByb3BlcnR5KGspKXtydi5wdXNoKHJlZ2lzdGVyZWRJbnN0YW5jZXNba10pfX1yZXR1cm4gcnZ9dmFyIGRlbGV0aW9uUXVldWU9W107ZnVuY3Rpb24gZmx1c2hQZW5kaW5nRGVsZXRlcygpe3doaWxlKGRlbGV0aW9uUXVldWUubGVuZ3RoKXt2YXIgb2JqPWRlbGV0aW9uUXVldWUucG9wKCk7b2JqLiQkLmRlbGV0ZVNjaGVkdWxlZD1mYWxzZTtvYmpbXCJkZWxldGVcIl0oKX19dmFyIGRlbGF5RnVuY3Rpb249dW5kZWZpbmVkO2Z1bmN0aW9uIHNldERlbGF5RnVuY3Rpb24oZm4pe2RlbGF5RnVuY3Rpb249Zm47aWYoZGVsZXRpb25RdWV1ZS5sZW5ndGgmJmRlbGF5RnVuY3Rpb24pe2RlbGF5RnVuY3Rpb24oZmx1c2hQZW5kaW5nRGVsZXRlcyl9fWZ1bmN0aW9uIGluaXRfZW1iaW5kKCl7TW9kdWxlW1wiZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudFwiXT1nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50O01vZHVsZVtcImdldExpdmVJbmhlcml0ZWRJbnN0YW5jZXNcIl09Z2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcztNb2R1bGVbXCJmbHVzaFBlbmRpbmdEZWxldGVzXCJdPWZsdXNoUGVuZGluZ0RlbGV0ZXM7TW9kdWxlW1wic2V0RGVsYXlGdW5jdGlvblwiXT1zZXREZWxheUZ1bmN0aW9ufXZhciByZWdpc3RlcmVkSW5zdGFuY2VzPXt9O2Z1bmN0aW9uIGdldEJhc2VzdFBvaW50ZXIoY2xhc3NfLHB0cil7aWYocHRyPT09dW5kZWZpbmVkKXt0aHJvd0JpbmRpbmdFcnJvcihcInB0ciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZFwiKX13aGlsZShjbGFzc18uYmFzZUNsYXNzKXtwdHI9Y2xhc3NfLnVwY2FzdChwdHIpO2NsYXNzXz1jbGFzc18uYmFzZUNsYXNzfXJldHVybiBwdHJ9ZnVuY3Rpb24gZ2V0SW5oZXJpdGVkSW5zdGFuY2UoY2xhc3NfLHB0cil7cHRyPWdldEJhc2VzdFBvaW50ZXIoY2xhc3NfLHB0cik7cmV0dXJuIHJlZ2lzdGVyZWRJbnN0YW5jZXNbcHRyXX1mdW5jdGlvbiBtYWtlQ2xhc3NIYW5kbGUocHJvdG90eXBlLHJlY29yZCl7aWYoIXJlY29yZC5wdHJUeXBlfHwhcmVjb3JkLnB0cil7dGhyb3dJbnRlcm5hbEVycm9yKFwibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZVwiKX12YXIgaGFzU21hcnRQdHJUeXBlPSEhcmVjb3JkLnNtYXJ0UHRyVHlwZTt2YXIgaGFzU21hcnRQdHI9ISFyZWNvcmQuc21hcnRQdHI7aWYoaGFzU21hcnRQdHJUeXBlIT09aGFzU21hcnRQdHIpe3Rocm93SW50ZXJuYWxFcnJvcihcIkJvdGggc21hcnRQdHJUeXBlIGFuZCBzbWFydFB0ciBtdXN0IGJlIHNwZWNpZmllZFwiKX1yZWNvcmQuY291bnQ9e3ZhbHVlOjF9O3JldHVybiBhdHRhY2hGaW5hbGl6ZXIoT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUseyQkOnt2YWx1ZTpyZWNvcmR9fSkpfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2Zyb21XaXJlVHlwZShwdHIpe3ZhciByYXdQb2ludGVyPXRoaXMuZ2V0UG9pbnRlZShwdHIpO2lmKCFyYXdQb2ludGVyKXt0aGlzLmRlc3RydWN0b3IocHRyKTtyZXR1cm4gbnVsbH12YXIgcmVnaXN0ZXJlZEluc3RhbmNlPWdldEluaGVyaXRlZEluc3RhbmNlKHRoaXMucmVnaXN0ZXJlZENsYXNzLHJhd1BvaW50ZXIpO2lmKHVuZGVmaW5lZCE9PXJlZ2lzdGVyZWRJbnN0YW5jZSl7aWYoMD09PXJlZ2lzdGVyZWRJbnN0YW5jZS4kJC5jb3VudC52YWx1ZSl7cmVnaXN0ZXJlZEluc3RhbmNlLiQkLnB0cj1yYXdQb2ludGVyO3JlZ2lzdGVyZWRJbnN0YW5jZS4kJC5zbWFydFB0cj1wdHI7cmV0dXJuIHJlZ2lzdGVyZWRJbnN0YW5jZVtcImNsb25lXCJdKCl9ZWxzZXt2YXIgcnY9cmVnaXN0ZXJlZEluc3RhbmNlW1wiY2xvbmVcIl0oKTt0aGlzLmRlc3RydWN0b3IocHRyKTtyZXR1cm4gcnZ9fWZ1bmN0aW9uIG1ha2VEZWZhdWx0SGFuZGxlKCl7aWYodGhpcy5pc1NtYXJ0UG9pbnRlcil7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0aGlzLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0aGlzLnBvaW50ZWVUeXBlLHB0cjpyYXdQb2ludGVyLHNtYXJ0UHRyVHlwZTp0aGlzLHNtYXJ0UHRyOnB0cn0pfWVsc2V7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0aGlzLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0aGlzLHB0cjpwdHJ9KX19dmFyIGFjdHVhbFR5cGU9dGhpcy5yZWdpc3RlcmVkQ2xhc3MuZ2V0QWN0dWFsVHlwZShyYXdQb2ludGVyKTt2YXIgcmVnaXN0ZXJlZFBvaW50ZXJSZWNvcmQ9cmVnaXN0ZXJlZFBvaW50ZXJzW2FjdHVhbFR5cGVdO2lmKCFyZWdpc3RlcmVkUG9pbnRlclJlY29yZCl7cmV0dXJuIG1ha2VEZWZhdWx0SGFuZGxlLmNhbGwodGhpcyl9dmFyIHRvVHlwZTtpZih0aGlzLmlzQ29uc3Qpe3RvVHlwZT1yZWdpc3RlcmVkUG9pbnRlclJlY29yZC5jb25zdFBvaW50ZXJUeXBlfWVsc2V7dG9UeXBlPXJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkLnBvaW50ZXJUeXBlfXZhciBkcD1kb3duY2FzdFBvaW50ZXIocmF3UG9pbnRlcix0aGlzLnJlZ2lzdGVyZWRDbGFzcyx0b1R5cGUucmVnaXN0ZXJlZENsYXNzKTtpZihkcD09PW51bGwpe3JldHVybiBtYWtlRGVmYXVsdEhhbmRsZS5jYWxsKHRoaXMpfWlmKHRoaXMuaXNTbWFydFBvaW50ZXIpe3JldHVybiBtYWtlQ2xhc3NIYW5kbGUodG9UeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSx7cHRyVHlwZTp0b1R5cGUscHRyOmRwLHNtYXJ0UHRyVHlwZTp0aGlzLHNtYXJ0UHRyOnB0cn0pfWVsc2V7cmV0dXJuIG1ha2VDbGFzc0hhbmRsZSh0b1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLHtwdHJUeXBlOnRvVHlwZSxwdHI6ZHB9KX19ZnVuY3Rpb24gYXR0YWNoRmluYWxpemVyKGhhbmRsZSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSl7YXR0YWNoRmluYWxpemVyPWhhbmRsZT0+aGFuZGxlO3JldHVybiBoYW5kbGV9ZmluYWxpemF0aW9uUmVnaXN0cnk9bmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGluZm89PntyZWxlYXNlQ2xhc3NIYW5kbGUoaW5mby4kJCl9KTthdHRhY2hGaW5hbGl6ZXI9aGFuZGxlPT57dmFyICQkPWhhbmRsZS4kJDt2YXIgaGFzU21hcnRQdHI9ISEkJC5zbWFydFB0cjtpZihoYXNTbWFydFB0cil7dmFyIGluZm89eyQkOiQkfTtmaW5hbGl6YXRpb25SZWdpc3RyeS5yZWdpc3RlcihoYW5kbGUsaW5mbyxoYW5kbGUpfXJldHVybiBoYW5kbGV9O2RldGFjaEZpbmFsaXplcj1oYW5kbGU9PmZpbmFsaXphdGlvblJlZ2lzdHJ5LnVucmVnaXN0ZXIoaGFuZGxlKTtyZXR1cm4gYXR0YWNoRmluYWxpemVyKGhhbmRsZSl9ZnVuY3Rpb24gQ2xhc3NIYW5kbGVfY2xvbmUoKXtpZighdGhpcy4kJC5wdHIpe3Rocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCh0aGlzKX1pZih0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aGlzLiQkLmNvdW50LnZhbHVlKz0xO3JldHVybiB0aGlzfWVsc2V7dmFyIGNsb25lPWF0dGFjaEZpbmFsaXplcihPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSx7JCQ6e3ZhbHVlOnNoYWxsb3dDb3B5SW50ZXJuYWxQb2ludGVyKHRoaXMuJCQpfX0pKTtjbG9uZS4kJC5jb3VudC52YWx1ZSs9MTtjbG9uZS4kJC5kZWxldGVTY2hlZHVsZWQ9ZmFsc2U7cmV0dXJuIGNsb25lfX1mdW5jdGlvbiBDbGFzc0hhbmRsZV9kZWxldGUoKXtpZighdGhpcy4kJC5wdHIpe3Rocm93SW5zdGFuY2VBbHJlYWR5RGVsZXRlZCh0aGlzKX1pZih0aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZCYmIXRoaXMuJCQucHJlc2VydmVQb2ludGVyT25EZWxldGUpe3Rocm93QmluZGluZ0Vycm9yKFwiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvblwiKX1kZXRhY2hGaW5hbGl6ZXIodGhpcyk7cmVsZWFzZUNsYXNzSGFuZGxlKHRoaXMuJCQpO2lmKCF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlKXt0aGlzLiQkLnNtYXJ0UHRyPXVuZGVmaW5lZDt0aGlzLiQkLnB0cj11bmRlZmluZWR9fWZ1bmN0aW9uIENsYXNzSGFuZGxlX2lzRGVsZXRlZCgpe3JldHVybiF0aGlzLiQkLnB0cn1mdW5jdGlvbiBDbGFzc0hhbmRsZV9kZWxldGVMYXRlcigpe2lmKCF0aGlzLiQkLnB0cil7dGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkKHRoaXMpfWlmKHRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkJiYhdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSl7dGhyb3dCaW5kaW5nRXJyb3IoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpfWRlbGV0aW9uUXVldWUucHVzaCh0aGlzKTtpZihkZWxldGlvblF1ZXVlLmxlbmd0aD09PTEmJmRlbGF5RnVuY3Rpb24pe2RlbGF5RnVuY3Rpb24oZmx1c2hQZW5kaW5nRGVsZXRlcyl9dGhpcy4kJC5kZWxldGVTY2hlZHVsZWQ9dHJ1ZTtyZXR1cm4gdGhpc31mdW5jdGlvbiBpbml0X0NsYXNzSGFuZGxlKCl7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiaXNBbGlhc09mXCJdPUNsYXNzSGFuZGxlX2lzQWxpYXNPZjtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJjbG9uZVwiXT1DbGFzc0hhbmRsZV9jbG9uZTtDbGFzc0hhbmRsZS5wcm90b3R5cGVbXCJkZWxldGVcIl09Q2xhc3NIYW5kbGVfZGVsZXRlO0NsYXNzSGFuZGxlLnByb3RvdHlwZVtcImlzRGVsZXRlZFwiXT1DbGFzc0hhbmRsZV9pc0RlbGV0ZWQ7Q2xhc3NIYW5kbGUucHJvdG90eXBlW1wiZGVsZXRlTGF0ZXJcIl09Q2xhc3NIYW5kbGVfZGVsZXRlTGF0ZXJ9ZnVuY3Rpb24gQ2xhc3NIYW5kbGUoKXt9ZnVuY3Rpb24gZW5zdXJlT3ZlcmxvYWRUYWJsZShwcm90byxtZXRob2ROYW1lLGh1bWFuTmFtZSl7aWYodW5kZWZpbmVkPT09cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZSl7dmFyIHByZXZGdW5jPXByb3RvW21ldGhvZE5hbWVdO3Byb3RvW21ldGhvZE5hbWVdPWZ1bmN0aW9uKCl7aWYoIXByb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGUuaGFzT3duUHJvcGVydHkoYXJndW1lbnRzLmxlbmd0aCkpe3Rocm93QmluZGluZ0Vycm9yKGBGdW5jdGlvbiAnJHtodW1hbk5hbWV9JyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCR7YXJndW1lbnRzLmxlbmd0aH0pIC0gZXhwZWN0cyBvbmUgb2YgKCR7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZX0pIWApfXJldHVybiBwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZT1bXTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW3ByZXZGdW5jLmFyZ0NvdW50XT1wcmV2RnVuY319ZnVuY3Rpb24gZXhwb3NlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZihNb2R1bGUuaGFzT3duUHJvcGVydHkobmFtZSkpe2lmKHVuZGVmaW5lZD09PW51bUFyZ3VtZW50c3x8dW5kZWZpbmVkIT09TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGUmJnVuZGVmaW5lZCE9PU1vZHVsZVtuYW1lXS5vdmVybG9hZFRhYmxlW251bUFyZ3VtZW50c10pe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyR7bmFtZX0nIHR3aWNlYCl9ZW5zdXJlT3ZlcmxvYWRUYWJsZShNb2R1bGUsbmFtZSxuYW1lKTtpZihNb2R1bGUuaGFzT3duUHJvcGVydHkobnVtQXJndW1lbnRzKSl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCR7bnVtQXJndW1lbnRzfSkhYCl9TW9kdWxlW25hbWVdLm92ZXJsb2FkVGFibGVbbnVtQXJndW1lbnRzXT12YWx1ZX1lbHNle01vZHVsZVtuYW1lXT12YWx1ZTtpZih1bmRlZmluZWQhPT1udW1Bcmd1bWVudHMpe01vZHVsZVtuYW1lXS5udW1Bcmd1bWVudHM9bnVtQXJndW1lbnRzfX19ZnVuY3Rpb24gUmVnaXN0ZXJlZENsYXNzKG5hbWUsY29uc3RydWN0b3IsaW5zdGFuY2VQcm90b3R5cGUscmF3RGVzdHJ1Y3RvcixiYXNlQ2xhc3MsZ2V0QWN0dWFsVHlwZSx1cGNhc3QsZG93bmNhc3Qpe3RoaXMubmFtZT1uYW1lO3RoaXMuY29uc3RydWN0b3I9Y29uc3RydWN0b3I7dGhpcy5pbnN0YW5jZVByb3RvdHlwZT1pbnN0YW5jZVByb3RvdHlwZTt0aGlzLnJhd0Rlc3RydWN0b3I9cmF3RGVzdHJ1Y3Rvcjt0aGlzLmJhc2VDbGFzcz1iYXNlQ2xhc3M7dGhpcy5nZXRBY3R1YWxUeXBlPWdldEFjdHVhbFR5cGU7dGhpcy51cGNhc3Q9dXBjYXN0O3RoaXMuZG93bmNhc3Q9ZG93bmNhc3Q7dGhpcy5wdXJlVmlydHVhbEZ1bmN0aW9ucz1bXX1mdW5jdGlvbiB1cGNhc3RQb2ludGVyKHB0cixwdHJDbGFzcyxkZXNpcmVkQ2xhc3Mpe3doaWxlKHB0ckNsYXNzIT09ZGVzaXJlZENsYXNzKXtpZighcHRyQ2xhc3MudXBjYXN0KXt0aHJvd0JpbmRpbmdFcnJvcihgRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAke2Rlc2lyZWRDbGFzcy5uYW1lfSwgZ290IGFuIGluc3RhbmNlIG9mICR7cHRyQ2xhc3MubmFtZX1gKX1wdHI9cHRyQ2xhc3MudXBjYXN0KHB0cik7cHRyQ2xhc3M9cHRyQ2xhc3MuYmFzZUNsYXNzfXJldHVybiBwdHJ9ZnVuY3Rpb24gY29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXtpZihoYW5kbGU9PT1udWxsKXtpZih0aGlzLmlzUmVmZXJlbmNlKXt0aHJvd0JpbmRpbmdFcnJvcihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKX1yZXR1cm4gMH1pZighaGFuZGxlLiQkKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgXCIke2VtYmluZFJlcHIoaGFuZGxlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApfWlmKCFoYW5kbGUuJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgcHRyPXVwY2FzdFBvaW50ZXIoaGFuZGxlLiQkLnB0cixoYW5kbGVDbGFzcyx0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7cmV0dXJuIHB0cn1mdW5jdGlvbiBnZW5lcmljUG9pbnRlclRvV2lyZVR5cGUoZGVzdHJ1Y3RvcnMsaGFuZGxlKXt2YXIgcHRyO2lmKGhhbmRsZT09PW51bGwpe2lmKHRoaXMuaXNSZWZlcmVuY2Upe3Rocm93QmluZGluZ0Vycm9yKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApfWlmKHRoaXMuaXNTbWFydFBvaW50ZXIpe3B0cj10aGlzLnJhd0NvbnN0cnVjdG9yKCk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKHRoaXMucmF3RGVzdHJ1Y3RvcixwdHIpfXJldHVybiBwdHJ9ZWxzZXtyZXR1cm4gMH19aWYoIWhhbmRsZS4kJCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIFwiJHtlbWJpbmRSZXByKGhhbmRsZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKX1pZighaGFuZGxlLiQkLnB0cil7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApfWlmKCF0aGlzLmlzQ29uc3QmJmhhbmRsZS4kJC5wdHJUeXBlLmlzQ29uc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7aGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT9oYW5kbGUuJCQuc21hcnRQdHJUeXBlLm5hbWU6aGFuZGxlLiQkLnB0clR5cGUubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcztwdHI9dXBjYXN0UG9pbnRlcihoYW5kbGUuJCQucHRyLGhhbmRsZUNsYXNzLHRoaXMucmVnaXN0ZXJlZENsYXNzKTtpZih0aGlzLmlzU21hcnRQb2ludGVyKXtpZih1bmRlZmluZWQ9PT1oYW5kbGUuJCQuc21hcnRQdHIpe3Rocm93QmluZGluZ0Vycm9yKFwiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWxcIil9c3dpdGNoKHRoaXMuc2hhcmluZ1BvbGljeSl7Y2FzZSAwOmlmKGhhbmRsZS4kJC5zbWFydFB0clR5cGU9PT10aGlzKXtwdHI9aGFuZGxlLiQkLnNtYXJ0UHRyfWVsc2V7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtoYW5kbGUuJCQuc21hcnRQdHJUeXBlP2hhbmRsZS4kJC5zbWFydFB0clR5cGUubmFtZTpoYW5kbGUuJCQucHRyVHlwZS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gKX1icmVhaztjYXNlIDE6cHRyPWhhbmRsZS4kJC5zbWFydFB0cjticmVhaztjYXNlIDI6aWYoaGFuZGxlLiQkLnNtYXJ0UHRyVHlwZT09PXRoaXMpe3B0cj1oYW5kbGUuJCQuc21hcnRQdHJ9ZWxzZXt2YXIgY2xvbmVkSGFuZGxlPWhhbmRsZVtcImNsb25lXCJdKCk7cHRyPXRoaXMucmF3U2hhcmUocHRyLEVtdmFsLnRvSGFuZGxlKGZ1bmN0aW9uKCl7Y2xvbmVkSGFuZGxlW1wiZGVsZXRlXCJdKCl9KSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKHRoaXMucmF3RGVzdHJ1Y3RvcixwdHIpfX1icmVhaztkZWZhdWx0OnRocm93QmluZGluZ0Vycm9yKFwiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5XCIpfX1yZXR1cm4gcHRyfWZ1bmN0aW9uIG5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlKGRlc3RydWN0b3JzLGhhbmRsZSl7aWYoaGFuZGxlPT09bnVsbCl7aWYodGhpcy5pc1JlZmVyZW5jZSl7dGhyb3dCaW5kaW5nRXJyb3IoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCl9cmV0dXJuIDB9aWYoIWhhbmRsZS4kJCl7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIFwiJHtlbWJpbmRSZXByKGhhbmRsZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKX1pZighaGFuZGxlLiQkLnB0cil7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApfWlmKGhhbmRsZS4kJC5wdHJUeXBlLmlzQ29uc3Qpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7aGFuZGxlLiQkLnB0clR5cGUubmFtZX0gdG8gcGFyYW1ldGVyIHR5cGUgJHt0aGlzLm5hbWV9YCl9dmFyIGhhbmRsZUNsYXNzPWhhbmRsZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzczt2YXIgcHRyPXVwY2FzdFBvaW50ZXIoaGFuZGxlLiQkLnB0cixoYW5kbGVDbGFzcyx0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7cmV0dXJuIHB0cn1mdW5jdGlvbiBzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShIRUFQMzJbcG9pbnRlcj4+Ml0pfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2dldFBvaW50ZWUocHRyKXtpZih0aGlzLnJhd0dldFBvaW50ZWUpe3B0cj10aGlzLnJhd0dldFBvaW50ZWUocHRyKX1yZXR1cm4gcHRyfWZ1bmN0aW9uIFJlZ2lzdGVyZWRQb2ludGVyX2Rlc3RydWN0b3IocHRyKXtpZih0aGlzLnJhd0Rlc3RydWN0b3Ipe3RoaXMucmF3RGVzdHJ1Y3RvcihwdHIpfX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcl9kZWxldGVPYmplY3QoaGFuZGxlKXtpZihoYW5kbGUhPT1udWxsKXtoYW5kbGVbXCJkZWxldGVcIl0oKX19ZnVuY3Rpb24gaW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpe1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZS5nZXRQb2ludGVlPVJlZ2lzdGVyZWRQb2ludGVyX2dldFBvaW50ZWU7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlLmRlc3RydWN0b3I9UmVnaXN0ZXJlZFBvaW50ZXJfZGVzdHJ1Y3RvcjtSZWdpc3RlcmVkUG9pbnRlci5wcm90b3R5cGVbXCJhcmdQYWNrQWR2YW5jZVwiXT04O1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdPXNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyO1JlZ2lzdGVyZWRQb2ludGVyLnByb3RvdHlwZVtcImRlbGV0ZU9iamVjdFwiXT1SZWdpc3RlcmVkUG9pbnRlcl9kZWxldGVPYmplY3Q7UmVnaXN0ZXJlZFBvaW50ZXIucHJvdG90eXBlW1wiZnJvbVdpcmVUeXBlXCJdPVJlZ2lzdGVyZWRQb2ludGVyX2Zyb21XaXJlVHlwZX1mdW5jdGlvbiBSZWdpc3RlcmVkUG9pbnRlcihuYW1lLHJlZ2lzdGVyZWRDbGFzcyxpc1JlZmVyZW5jZSxpc0NvbnN0LGlzU21hcnRQb2ludGVyLHBvaW50ZWVUeXBlLHNoYXJpbmdQb2xpY3kscmF3R2V0UG9pbnRlZSxyYXdDb25zdHJ1Y3RvcixyYXdTaGFyZSxyYXdEZXN0cnVjdG9yKXt0aGlzLm5hbWU9bmFtZTt0aGlzLnJlZ2lzdGVyZWRDbGFzcz1yZWdpc3RlcmVkQ2xhc3M7dGhpcy5pc1JlZmVyZW5jZT1pc1JlZmVyZW5jZTt0aGlzLmlzQ29uc3Q9aXNDb25zdDt0aGlzLmlzU21hcnRQb2ludGVyPWlzU21hcnRQb2ludGVyO3RoaXMucG9pbnRlZVR5cGU9cG9pbnRlZVR5cGU7dGhpcy5zaGFyaW5nUG9saWN5PXNoYXJpbmdQb2xpY3k7dGhpcy5yYXdHZXRQb2ludGVlPXJhd0dldFBvaW50ZWU7dGhpcy5yYXdDb25zdHJ1Y3Rvcj1yYXdDb25zdHJ1Y3Rvcjt0aGlzLnJhd1NoYXJlPXJhd1NoYXJlO3RoaXMucmF3RGVzdHJ1Y3Rvcj1yYXdEZXN0cnVjdG9yO2lmKCFpc1NtYXJ0UG9pbnRlciYmcmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcz09PXVuZGVmaW5lZCl7aWYoaXNDb25zdCl7dGhpc1tcInRvV2lyZVR5cGVcIl09Y29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGU7dGhpcy5kZXN0cnVjdG9yRnVuY3Rpb249bnVsbH1lbHNle3RoaXNbXCJ0b1dpcmVUeXBlXCJdPW5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlO3RoaXMuZGVzdHJ1Y3RvckZ1bmN0aW9uPW51bGx9fWVsc2V7dGhpc1tcInRvV2lyZVR5cGVcIl09Z2VuZXJpY1BvaW50ZXJUb1dpcmVUeXBlfX1mdW5jdGlvbiByZXBsYWNlUHVibGljU3ltYm9sKG5hbWUsdmFsdWUsbnVtQXJndW1lbnRzKXtpZighTW9kdWxlLmhhc093blByb3BlcnR5KG5hbWUpKXt0aHJvd0ludGVybmFsRXJyb3IoXCJSZXBsYWNpbmcgbm9uZXhpc3RhbnQgcHVibGljIHN5bWJvbFwiKX1pZih1bmRlZmluZWQhPT1Nb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZSYmdW5kZWZpbmVkIT09bnVtQXJndW1lbnRzKXtNb2R1bGVbbmFtZV0ub3ZlcmxvYWRUYWJsZVtudW1Bcmd1bWVudHNdPXZhbHVlfWVsc2V7TW9kdWxlW25hbWVdPXZhbHVlO01vZHVsZVtuYW1lXS5hcmdDb3VudD1udW1Bcmd1bWVudHN9fWZ1bmN0aW9uIGR5bkNhbGxMZWdhY3koc2lnLHB0cixhcmdzKXt2YXIgZj1Nb2R1bGVbXCJkeW5DYWxsX1wiK3NpZ107cmV0dXJuIGFyZ3MmJmFyZ3MubGVuZ3RoP2YuYXBwbHkobnVsbCxbcHRyXS5jb25jYXQoYXJncykpOmYuY2FsbChudWxsLHB0cil9dmFyIHdhc21UYWJsZU1pcnJvcj1bXTtmdW5jdGlvbiBnZXRXYXNtVGFibGVFbnRyeShmdW5jUHRyKXt2YXIgZnVuYz13YXNtVGFibGVNaXJyb3JbZnVuY1B0cl07aWYoIWZ1bmMpe2lmKGZ1bmNQdHI+PXdhc21UYWJsZU1pcnJvci5sZW5ndGgpd2FzbVRhYmxlTWlycm9yLmxlbmd0aD1mdW5jUHRyKzE7d2FzbVRhYmxlTWlycm9yW2Z1bmNQdHJdPWZ1bmM9d2FzbVRhYmxlLmdldChmdW5jUHRyKX1yZXR1cm4gZnVuY31mdW5jdGlvbiBkeW5DYWxsKHNpZyxwdHIsYXJncyl7aWYoc2lnLmluY2x1ZGVzKFwialwiKSl7cmV0dXJuIGR5bkNhbGxMZWdhY3koc2lnLHB0cixhcmdzKX12YXIgcnRuPWdldFdhc21UYWJsZUVudHJ5KHB0cikuYXBwbHkobnVsbCxhcmdzKTtyZXR1cm4gcnRufWZ1bmN0aW9uIGdldER5bkNhbGxlcihzaWcscHRyKXt2YXIgYXJnQ2FjaGU9W107cmV0dXJuIGZ1bmN0aW9uKCl7YXJnQ2FjaGUubGVuZ3RoPTA7T2JqZWN0LmFzc2lnbihhcmdDYWNoZSxhcmd1bWVudHMpO3JldHVybiBkeW5DYWxsKHNpZyxwdHIsYXJnQ2FjaGUpfX1mdW5jdGlvbiBlbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzaWduYXR1cmUscmF3RnVuY3Rpb24pe3NpZ25hdHVyZT1yZWFkTGF0aW4xU3RyaW5nKHNpZ25hdHVyZSk7ZnVuY3Rpb24gbWFrZUR5bkNhbGxlcigpe2lmKHNpZ25hdHVyZS5pbmNsdWRlcyhcImpcIikpe3JldHVybiBnZXREeW5DYWxsZXIoc2lnbmF0dXJlLHJhd0Z1bmN0aW9uKX1yZXR1cm4gZ2V0V2FzbVRhYmxlRW50cnkocmF3RnVuY3Rpb24pfXZhciBmcD1tYWtlRHluQ2FsbGVyKCk7aWYodHlwZW9mIGZwIT1cImZ1bmN0aW9uXCIpe3Rocm93QmluZGluZ0Vycm9yKGB1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgJHtzaWduYXR1cmV9OiAke3Jhd0Z1bmN0aW9ufWApfXJldHVybiBmcH12YXIgVW5ib3VuZFR5cGVFcnJvcj11bmRlZmluZWQ7ZnVuY3Rpb24gZ2V0VHlwZU5hbWUodHlwZSl7dmFyIHB0cj1fX19nZXRUeXBlTmFtZSh0eXBlKTt2YXIgcnY9cmVhZExhdGluMVN0cmluZyhwdHIpO19mcmVlKHB0cik7cmV0dXJuIHJ2fWZ1bmN0aW9uIHRocm93VW5ib3VuZFR5cGVFcnJvcihtZXNzYWdlLHR5cGVzKXt2YXIgdW5ib3VuZFR5cGVzPVtdO3ZhciBzZWVuPXt9O2Z1bmN0aW9uIHZpc2l0KHR5cGUpe2lmKHNlZW5bdHlwZV0pe3JldHVybn1pZihyZWdpc3RlcmVkVHlwZXNbdHlwZV0pe3JldHVybn1pZih0eXBlRGVwZW5kZW5jaWVzW3R5cGVdKXt0eXBlRGVwZW5kZW5jaWVzW3R5cGVdLmZvckVhY2godmlzaXQpO3JldHVybn11bmJvdW5kVHlwZXMucHVzaCh0eXBlKTtzZWVuW3R5cGVdPXRydWV9dHlwZXMuZm9yRWFjaCh2aXNpdCk7dGhyb3cgbmV3IFVuYm91bmRUeXBlRXJyb3IoYCR7bWVzc2FnZX06IGArdW5ib3VuZFR5cGVzLm1hcChnZXRUeXBlTmFtZSkuam9pbihbXCIsIFwiXSkpfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzKHJhd1R5cGUscmF3UG9pbnRlclR5cGUscmF3Q29uc3RQb2ludGVyVHlwZSxiYXNlQ2xhc3NSYXdUeXBlLGdldEFjdHVhbFR5cGVTaWduYXR1cmUsZ2V0QWN0dWFsVHlwZSx1cGNhc3RTaWduYXR1cmUsdXBjYXN0LGRvd25jYXN0U2lnbmF0dXJlLGRvd25jYXN0LG5hbWUsZGVzdHJ1Y3RvclNpZ25hdHVyZSxyYXdEZXN0cnVjdG9yKXtuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7Z2V0QWN0dWFsVHlwZT1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihnZXRBY3R1YWxUeXBlU2lnbmF0dXJlLGdldEFjdHVhbFR5cGUpO2lmKHVwY2FzdCl7dXBjYXN0PWVtYmluZF9fcmVxdWlyZUZ1bmN0aW9uKHVwY2FzdFNpZ25hdHVyZSx1cGNhc3QpfWlmKGRvd25jYXN0KXtkb3duY2FzdD1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihkb3duY2FzdFNpZ25hdHVyZSxkb3duY2FzdCl9cmF3RGVzdHJ1Y3Rvcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihkZXN0cnVjdG9yU2lnbmF0dXJlLHJhd0Rlc3RydWN0b3IpO3ZhciBsZWdhbEZ1bmN0aW9uTmFtZT1tYWtlTGVnYWxGdW5jdGlvbk5hbWUobmFtZSk7ZXhwb3NlUHVibGljU3ltYm9sKGxlZ2FsRnVuY3Rpb25OYW1lLGZ1bmN0aW9uKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgY29uc3RydWN0ICR7bmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFtiYXNlQ2xhc3NSYXdUeXBlXSl9KTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbcmF3VHlwZSxyYXdQb2ludGVyVHlwZSxyYXdDb25zdFBvaW50ZXJUeXBlXSxiYXNlQ2xhc3NSYXdUeXBlP1tiYXNlQ2xhc3NSYXdUeXBlXTpbXSxmdW5jdGlvbihiYXNlKXtiYXNlPWJhc2VbMF07dmFyIGJhc2VDbGFzczt2YXIgYmFzZVByb3RvdHlwZTtpZihiYXNlQ2xhc3NSYXdUeXBlKXtiYXNlQ2xhc3M9YmFzZS5yZWdpc3RlcmVkQ2xhc3M7YmFzZVByb3RvdHlwZT1iYXNlQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGV9ZWxzZXtiYXNlUHJvdG90eXBlPUNsYXNzSGFuZGxlLnByb3RvdHlwZX12YXIgY29uc3RydWN0b3I9Y3JlYXRlTmFtZWRGdW5jdGlvbihsZWdhbEZ1bmN0aW9uTmFtZSxmdW5jdGlvbigpe2lmKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSE9PWluc3RhbmNlUHJvdG90eXBlKXt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKFwiVXNlICduZXcnIHRvIGNvbnN0cnVjdCBcIituYW1lKX1pZih1bmRlZmluZWQ9PT1yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihuYW1lK1wiIGhhcyBubyBhY2Nlc3NpYmxlIGNvbnN0cnVjdG9yXCIpfXZhciBib2R5PXJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2FyZ3VtZW50cy5sZW5ndGhdO2lmKHVuZGVmaW5lZD09PWJvZHkpe3Rocm93IG5ldyBCaW5kaW5nRXJyb3IoYFRyaWVkIHRvIGludm9rZSBjdG9yIG9mICR7bmFtZX0gd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2FyZ3VtZW50cy5sZW5ndGh9KSAtIGV4cGVjdGVkICgke09iamVjdC5rZXlzKHJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5KS50b1N0cmluZygpfSkgcGFyYW1ldGVycyBpbnN0ZWFkIWApfXJldHVybiBib2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3ZhciBpbnN0YW5jZVByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGJhc2VQcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpjb25zdHJ1Y3Rvcn19KTtjb25zdHJ1Y3Rvci5wcm90b3R5cGU9aW5zdGFuY2VQcm90b3R5cGU7dmFyIHJlZ2lzdGVyZWRDbGFzcz1uZXcgUmVnaXN0ZXJlZENsYXNzKG5hbWUsY29uc3RydWN0b3IsaW5zdGFuY2VQcm90b3R5cGUscmF3RGVzdHJ1Y3RvcixiYXNlQ2xhc3MsZ2V0QWN0dWFsVHlwZSx1cGNhc3QsZG93bmNhc3QpO2lmKHJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3Mpe2lmKHJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3MuX19kZXJpdmVkQ2xhc3Nlcz09PXVuZGVmaW5lZCl7cmVnaXN0ZXJlZENsYXNzLmJhc2VDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzPVtdfXJlZ2lzdGVyZWRDbGFzcy5iYXNlQ2xhc3MuX19kZXJpdmVkQ2xhc3Nlcy5wdXNoKHJlZ2lzdGVyZWRDbGFzcyl9dmFyIHJlZmVyZW5jZUNvbnZlcnRlcj1uZXcgUmVnaXN0ZXJlZFBvaW50ZXIobmFtZSxyZWdpc3RlcmVkQ2xhc3MsdHJ1ZSxmYWxzZSxmYWxzZSk7dmFyIHBvaW50ZXJDb252ZXJ0ZXI9bmV3IFJlZ2lzdGVyZWRQb2ludGVyKG5hbWUrXCIqXCIscmVnaXN0ZXJlZENsYXNzLGZhbHNlLGZhbHNlLGZhbHNlKTt2YXIgY29uc3RQb2ludGVyQ29udmVydGVyPW5ldyBSZWdpc3RlcmVkUG9pbnRlcihuYW1lK1wiIGNvbnN0KlwiLHJlZ2lzdGVyZWRDbGFzcyxmYWxzZSx0cnVlLGZhbHNlKTtyZWdpc3RlcmVkUG9pbnRlcnNbcmF3VHlwZV09e3BvaW50ZXJUeXBlOnBvaW50ZXJDb252ZXJ0ZXIsY29uc3RQb2ludGVyVHlwZTpjb25zdFBvaW50ZXJDb252ZXJ0ZXJ9O3JlcGxhY2VQdWJsaWNTeW1ib2wobGVnYWxGdW5jdGlvbk5hbWUsY29uc3RydWN0b3IpO3JldHVybltyZWZlcmVuY2VDb252ZXJ0ZXIscG9pbnRlckNvbnZlcnRlcixjb25zdFBvaW50ZXJDb252ZXJ0ZXJdfSl9ZnVuY3Rpb24gcnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpe3doaWxlKGRlc3RydWN0b3JzLmxlbmd0aCl7dmFyIHB0cj1kZXN0cnVjdG9ycy5wb3AoKTt2YXIgZGVsPWRlc3RydWN0b3JzLnBvcCgpO2RlbChwdHIpfX1mdW5jdGlvbiBjcmFmdEludm9rZXJGdW5jdGlvbihodW1hbk5hbWUsYXJnVHlwZXMsY2xhc3NUeXBlLGNwcEludm9rZXJGdW5jLGNwcFRhcmdldEZ1bmMsaXNBc3luYyl7dmFyIGFyZ0NvdW50PWFyZ1R5cGVzLmxlbmd0aDtpZihhcmdDb3VudDwyKXt0aHJvd0JpbmRpbmdFcnJvcihcImFyZ1R5cGVzIGFycmF5IHNpemUgbWlzbWF0Y2ghIE11c3QgYXQgbGVhc3QgZ2V0IHJldHVybiB2YWx1ZSBhbmQgJ3RoaXMnIHR5cGVzIVwiKX12YXIgaXNDbGFzc01ldGhvZEZ1bmM9YXJnVHlwZXNbMV0hPT1udWxsJiZjbGFzc1R5cGUhPT1udWxsO3ZhciBuZWVkc0Rlc3RydWN0b3JTdGFjaz1mYWxzZTtmb3IodmFyIGk9MTtpPGFyZ1R5cGVzLmxlbmd0aDsrK2kpe2lmKGFyZ1R5cGVzW2ldIT09bnVsbCYmYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uPT09dW5kZWZpbmVkKXtuZWVkc0Rlc3RydWN0b3JTdGFjaz10cnVlO2JyZWFrfX12YXIgcmV0dXJucz1hcmdUeXBlc1swXS5uYW1lIT09XCJ2b2lkXCI7dmFyIGV4cGVjdGVkQXJnQ291bnQ9YXJnQ291bnQtMjt2YXIgYXJnc1dpcmVkPW5ldyBBcnJheShleHBlY3RlZEFyZ0NvdW50KTt2YXIgaW52b2tlckZ1bmNBcmdzPVtdO3ZhciBkZXN0cnVjdG9ycz1bXTtyZXR1cm4gZnVuY3Rpb24oKXtpZihhcmd1bWVudHMubGVuZ3RoIT09ZXhwZWN0ZWRBcmdDb3VudCl7dGhyb3dCaW5kaW5nRXJyb3IoYGZ1bmN0aW9uICR7aHVtYW5OYW1lfSBjYWxsZWQgd2l0aCAke2FyZ3VtZW50cy5sZW5ndGh9IGFyZ3VtZW50cywgZXhwZWN0ZWQgJHtleHBlY3RlZEFyZ0NvdW50fSBhcmdzIWApfWRlc3RydWN0b3JzLmxlbmd0aD0wO3ZhciB0aGlzV2lyZWQ7aW52b2tlckZ1bmNBcmdzLmxlbmd0aD1pc0NsYXNzTWV0aG9kRnVuYz8yOjE7aW52b2tlckZ1bmNBcmdzWzBdPWNwcFRhcmdldEZ1bmM7aWYoaXNDbGFzc01ldGhvZEZ1bmMpe3RoaXNXaXJlZD1hcmdUeXBlc1sxXVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsdGhpcyk7aW52b2tlckZ1bmNBcmdzWzFdPXRoaXNXaXJlZH1mb3IodmFyIGk9MDtpPGV4cGVjdGVkQXJnQ291bnQ7KytpKXthcmdzV2lyZWRbaV09YXJnVHlwZXNbaSsyXVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsYXJndW1lbnRzW2ldKTtpbnZva2VyRnVuY0FyZ3MucHVzaChhcmdzV2lyZWRbaV0pfXZhciBydj1jcHBJbnZva2VyRnVuYy5hcHBseShudWxsLGludm9rZXJGdW5jQXJncyk7ZnVuY3Rpb24gb25Eb25lKHJ2KXtpZihuZWVkc0Rlc3RydWN0b3JTdGFjayl7cnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpfWVsc2V7Zm9yKHZhciBpPWlzQ2xhc3NNZXRob2RGdW5jPzE6MjtpPGFyZ1R5cGVzLmxlbmd0aDtpKyspe3ZhciBwYXJhbT1pPT09MT90aGlzV2lyZWQ6YXJnc1dpcmVkW2ktMl07aWYoYXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uIT09bnVsbCl7YXJnVHlwZXNbaV0uZGVzdHJ1Y3RvckZ1bmN0aW9uKHBhcmFtKX19fWlmKHJldHVybnMpe3JldHVybiBhcmdUeXBlc1swXVtcImZyb21XaXJlVHlwZVwiXShydil9fXJldHVybiBvbkRvbmUocnYpfX1mdW5jdGlvbiBoZWFwMzJWZWN0b3JUb0FycmF5KGNvdW50LGZpcnN0RWxlbWVudCl7dmFyIGFycmF5PVtdO2Zvcih2YXIgaT0wO2k8Y291bnQ7aSsrKXthcnJheS5wdXNoKEhFQVBVMzJbZmlyc3RFbGVtZW50K2kqND4+Ml0pfXJldHVybiBhcnJheX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9jbGFzc19jbGFzc19mdW5jdGlvbihyYXdDbGFzc1R5cGUsbWV0aG9kTmFtZSxhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIsaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyLGZuLGlzQXN5bmMpe3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7bWV0aG9kTmFtZT1yZWFkTGF0aW4xU3RyaW5nKG1ldGhvZE5hbWUpO3Jhd0ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHttZXRob2ROYW1lfWA7ZnVuY3Rpb24gdW5ib3VuZFR5cGVzSGFuZGxlcigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNhbGwgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9aWYobWV0aG9kTmFtZS5zdGFydHNXaXRoKFwiQEBcIikpe21ldGhvZE5hbWU9U3ltYm9sW21ldGhvZE5hbWUuc3Vic3RyaW5nKDIpXX12YXIgcHJvdG89Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3RvcjtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXSl7dW5ib3VuZFR5cGVzSGFuZGxlci5hcmdDb3VudD1hcmdDb3VudC0xO3Byb3RvW21ldGhvZE5hbWVdPXVuYm91bmRUeXBlc0hhbmRsZXJ9ZWxzZXtlbnN1cmVPdmVybG9hZFRhYmxlKHByb3RvLG1ldGhvZE5hbWUsaHVtYW5OYW1lKTtwcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlW2FyZ0NvdW50LTFdPXVuYm91bmRUeXBlc0hhbmRsZXJ9d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10scmF3QXJnVHlwZXMsZnVuY3Rpb24oYXJnVHlwZXMpe3ZhciBpbnZva2VyQXJnc0FycmF5PVthcmdUeXBlc1swXSxudWxsXS5jb25jYXQoYXJnVHlwZXMuc2xpY2UoMSkpO3ZhciBmdW5jPWNyYWZ0SW52b2tlckZ1bmN0aW9uKGh1bWFuTmFtZSxpbnZva2VyQXJnc0FycmF5LG51bGwscmF3SW52b2tlcixmbixpc0FzeW5jKTtpZih1bmRlZmluZWQ9PT1wcm90b1ttZXRob2ROYW1lXS5vdmVybG9hZFRhYmxlKXtmdW5jLmFyZ0NvdW50PWFyZ0NvdW50LTE7cHJvdG9bbWV0aG9kTmFtZV09ZnVuY31lbHNle3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJnQ291bnQtMV09ZnVuY31pZihjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLl9fZGVyaXZlZENsYXNzZXMpe2Zvcihjb25zdCBkZXJpdmVkQ2xhc3Mgb2YgY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5fX2Rlcml2ZWRDbGFzc2VzKXtpZighZGVyaXZlZENsYXNzLmNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KG1ldGhvZE5hbWUpKXtkZXJpdmVkQ2xhc3MuY29uc3RydWN0b3JbbWV0aG9kTmFtZV09ZnVuY319fXJldHVybltdfSk7cmV0dXJuW119KX1mdW5jdGlvbiB2YWxpZGF0ZVRoaXModGhpc18sY2xhc3NUeXBlLGh1bWFuTmFtZSl7aWYoISh0aGlzXyBpbnN0YW5jZW9mIE9iamVjdCkpe3Rocm93QmluZGluZ0Vycm9yKGAke2h1bWFuTmFtZX0gd2l0aCBpbnZhbGlkIFwidGhpc1wiOiAke3RoaXNffWApfWlmKCEodGhpc18gaW5zdGFuY2VvZiBjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yKSl7dGhyb3dCaW5kaW5nRXJyb3IoYCR7aHVtYW5OYW1lfSBpbmNvbXBhdGlibGUgd2l0aCBcInRoaXNcIiBvZiB0eXBlICR7dGhpc18uY29uc3RydWN0b3IubmFtZX1gKX1pZighdGhpc18uJCQucHRyKXt0aHJvd0JpbmRpbmdFcnJvcihgY2Fubm90IGNhbGwgZW1zY3JpcHRlbiBiaW5kaW5nIG1ldGhvZCAke2h1bWFuTmFtZX0gb24gZGVsZXRlZCBvYmplY3RgKX1yZXR1cm4gdXBjYXN0UG9pbnRlcih0aGlzXy4kJC5wdHIsdGhpc18uJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MsY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcyl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfcHJvcGVydHkocmF3Q2xhc3NUeXBlLGZpZWxkTmFtZSxyYXdGaWVsZFR5cGUscmF3RmllbGRQdHIsZ2V0dGVyU2lnbmF0dXJlLGdldHRlcixzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKXtmaWVsZE5hbWU9cmVhZExhdGluMVN0cmluZyhmaWVsZE5hbWUpO2dldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHtmaWVsZE5hbWV9YDt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7dGhyb3dVbmJvdW5kVHlwZUVycm9yKGBDYW5ub3QgYWNjZXNzICR7aHVtYW5OYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsW3Jhd0ZpZWxkVHlwZV0pfSxlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9O2lmKHNldHRlcil7ZGVzYy5zZXQ9KCk9Pnt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxbcmF3RmllbGRUeXBlXSl9fWVsc2V7ZGVzYy5zZXQ9dj0+e3Rocm93QmluZGluZ0Vycm9yKGAke2h1bWFuTmFtZX0gaXMgYSByZWFkLW9ubHkgcHJvcGVydHlgKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3IsZmllbGROYW1lLGRlc2MpO3doZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLFtyYXdGaWVsZFR5cGVdLGZ1bmN0aW9uKGZpZWxkVHlwZSl7ZmllbGRUeXBlPWZpZWxkVHlwZVswXTt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGZpZWxkVHlwZVtcImZyb21XaXJlVHlwZVwiXShnZXR0ZXIocmF3RmllbGRQdHIpKX0sZW51bWVyYWJsZTp0cnVlfTtpZihzZXR0ZXIpe3NldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKTtkZXNjLnNldD12PT57dmFyIGRlc3RydWN0b3JzPVtdO3NldHRlcihyYXdGaWVsZFB0cixmaWVsZFR5cGVbXCJ0b1dpcmVUeXBlXCJdKGRlc3RydWN0b3JzLHYpKTtydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yLGZpZWxkTmFtZSxkZXNjKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IocmF3Q2xhc3NUeXBlLGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcixpbnZva2VyU2lnbmF0dXJlLGludm9rZXIscmF3Q29uc3RydWN0b3Ipe2Fzc2VydChhcmdDb3VudD4wKTt2YXIgcmF3QXJnVHlwZXM9aGVhcDMyVmVjdG9yVG9BcnJheShhcmdDb3VudCxyYXdBcmdUeXBlc0FkZHIpO2ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxpbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gY29uc3RydWN0b3IgJHtjbGFzc1R5cGUubmFtZX1gO2lmKHVuZGVmaW5lZD09PWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keSl7Y2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5PVtdfWlmKHVuZGVmaW5lZCE9PWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXSl7dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoJHthcmdDb3VudC0xfSkgZm9yIGNsYXNzICcke2NsYXNzVHlwZS5uYW1lfSchIE92ZXJsb2FkIHJlc29sdXRpb24gaXMgY3VycmVudGx5IG9ubHkgcGVyZm9ybWVkIHVzaW5nIHRoZSBwYXJhbWV0ZXIgY291bnQsIG5vdCBhY3R1YWwgdHlwZSBpbmZvIWApfWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuY29uc3RydWN0b3JfYm9keVthcmdDb3VudC0xXT0oKT0+e3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNvbnN0cnVjdCAke2NsYXNzVHlwZS5uYW1lfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AscmF3QXJnVHlwZXMpfTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxyYXdBcmdUeXBlcyxmdW5jdGlvbihhcmdUeXBlcyl7YXJnVHlwZXMuc3BsaWNlKDEsMCxudWxsKTtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbYXJnQ291bnQtMV09Y3JhZnRJbnZva2VyRnVuY3Rpb24oaHVtYW5OYW1lLGFyZ1R5cGVzLG51bGwsaW52b2tlcixyYXdDb25zdHJ1Y3Rvcik7cmV0dXJuW119KTtyZXR1cm5bXX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uKHJhd0NsYXNzVHlwZSxtZXRob2ROYW1lLGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcixpbnZva2VyU2lnbmF0dXJlLHJhd0ludm9rZXIsY29udGV4dCxpc1B1cmVWaXJ0dWFsLGlzQXN5bmMpe3ZhciByYXdBcmdUeXBlcz1oZWFwMzJWZWN0b3JUb0FycmF5KGFyZ0NvdW50LHJhd0FyZ1R5cGVzQWRkcik7bWV0aG9kTmFtZT1yZWFkTGF0aW4xU3RyaW5nKG1ldGhvZE5hbWUpO3Jhd0ludm9rZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oaW52b2tlclNpZ25hdHVyZSxyYXdJbnZva2VyKTt3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZChbXSxbcmF3Q2xhc3NUeXBlXSxmdW5jdGlvbihjbGFzc1R5cGUpe2NsYXNzVHlwZT1jbGFzc1R5cGVbMF07dmFyIGh1bWFuTmFtZT1gJHtjbGFzc1R5cGUubmFtZX0uJHttZXRob2ROYW1lfWA7aWYobWV0aG9kTmFtZS5zdGFydHNXaXRoKFwiQEBcIikpe21ldGhvZE5hbWU9U3ltYm9sW21ldGhvZE5hbWUuc3Vic3RyaW5nKDIpXX1pZihpc1B1cmVWaXJ0dWFsKXtjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLnB1cmVWaXJ0dWFsRnVuY3Rpb25zLnB1c2gobWV0aG9kTmFtZSl9ZnVuY3Rpb24gdW5ib3VuZFR5cGVzSGFuZGxlcigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGNhbGwgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxyYXdBcmdUeXBlcyl9dmFyIHByb3RvPWNsYXNzVHlwZS5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGU7dmFyIG1ldGhvZD1wcm90b1ttZXRob2ROYW1lXTtpZih1bmRlZmluZWQ9PT1tZXRob2R8fHVuZGVmaW5lZD09PW1ldGhvZC5vdmVybG9hZFRhYmxlJiZtZXRob2QuY2xhc3NOYW1lIT09Y2xhc3NUeXBlLm5hbWUmJm1ldGhvZC5hcmdDb3VudD09PWFyZ0NvdW50LTIpe3VuYm91bmRUeXBlc0hhbmRsZXIuYXJnQ291bnQ9YXJnQ291bnQtMjt1bmJvdW5kVHlwZXNIYW5kbGVyLmNsYXNzTmFtZT1jbGFzc1R5cGUubmFtZTtwcm90b1ttZXRob2ROYW1lXT11bmJvdW5kVHlwZXNIYW5kbGVyfWVsc2V7ZW5zdXJlT3ZlcmxvYWRUYWJsZShwcm90byxtZXRob2ROYW1lLGh1bWFuTmFtZSk7cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZVthcmdDb3VudC0yXT11bmJvdW5kVHlwZXNIYW5kbGVyfXdoZW5EZXBlbmRlbnRUeXBlc0FyZVJlc29sdmVkKFtdLHJhd0FyZ1R5cGVzLGZ1bmN0aW9uKGFyZ1R5cGVzKXt2YXIgbWVtYmVyRnVuY3Rpb249Y3JhZnRJbnZva2VyRnVuY3Rpb24oaHVtYW5OYW1lLGFyZ1R5cGVzLGNsYXNzVHlwZSxyYXdJbnZva2VyLGNvbnRleHQsaXNBc3luYyk7aWYodW5kZWZpbmVkPT09cHJvdG9bbWV0aG9kTmFtZV0ub3ZlcmxvYWRUYWJsZSl7bWVtYmVyRnVuY3Rpb24uYXJnQ291bnQ9YXJnQ291bnQtMjtwcm90b1ttZXRob2ROYW1lXT1tZW1iZXJGdW5jdGlvbn1lbHNle3Byb3RvW21ldGhvZE5hbWVdLm92ZXJsb2FkVGFibGVbYXJnQ291bnQtMl09bWVtYmVyRnVuY3Rpb259cmV0dXJuW119KTtyZXR1cm5bXX0pfWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX3Byb3BlcnR5KGNsYXNzVHlwZSxmaWVsZE5hbWUsZ2V0dGVyUmV0dXJuVHlwZSxnZXR0ZXJTaWduYXR1cmUsZ2V0dGVyLGdldHRlckNvbnRleHQsc2V0dGVyQXJndW1lbnRUeXBlLHNldHRlclNpZ25hdHVyZSxzZXR0ZXIsc2V0dGVyQ29udGV4dCl7ZmllbGROYW1lPXJlYWRMYXRpbjFTdHJpbmcoZmllbGROYW1lKTtnZXR0ZXI9ZW1iaW5kX19yZXF1aXJlRnVuY3Rpb24oZ2V0dGVyU2lnbmF0dXJlLGdldHRlcik7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sW2NsYXNzVHlwZV0sZnVuY3Rpb24oY2xhc3NUeXBlKXtjbGFzc1R5cGU9Y2xhc3NUeXBlWzBdO3ZhciBodW1hbk5hbWU9YCR7Y2xhc3NUeXBlLm5hbWV9LiR7ZmllbGROYW1lfWA7dmFyIGRlc2M9e2dldDpmdW5jdGlvbigpe3Rocm93VW5ib3VuZFR5cGVFcnJvcihgQ2Fubm90IGFjY2VzcyAke2h1bWFuTmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLFtnZXR0ZXJSZXR1cm5UeXBlLHNldHRlckFyZ3VtZW50VHlwZV0pfSxlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWV9O2lmKHNldHRlcil7ZGVzYy5zZXQ9KCk9Pnt0aHJvd1VuYm91bmRUeXBlRXJyb3IoYENhbm5vdCBhY2Nlc3MgJHtodW1hbk5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCxbZ2V0dGVyUmV0dXJuVHlwZSxzZXR0ZXJBcmd1bWVudFR5cGVdKX19ZWxzZXtkZXNjLnNldD12PT57dGhyb3dCaW5kaW5nRXJyb3IoaHVtYW5OYW1lK1wiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5XCIpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NUeXBlLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSxmaWVsZE5hbWUsZGVzYyk7d2hlbkRlcGVuZGVudFR5cGVzQXJlUmVzb2x2ZWQoW10sc2V0dGVyP1tnZXR0ZXJSZXR1cm5UeXBlLHNldHRlckFyZ3VtZW50VHlwZV06W2dldHRlclJldHVyblR5cGVdLGZ1bmN0aW9uKHR5cGVzKXt2YXIgZ2V0dGVyUmV0dXJuVHlwZT10eXBlc1swXTt2YXIgZGVzYz17Z2V0OmZ1bmN0aW9uKCl7dmFyIHB0cj12YWxpZGF0ZVRoaXModGhpcyxjbGFzc1R5cGUsaHVtYW5OYW1lK1wiIGdldHRlclwiKTtyZXR1cm4gZ2V0dGVyUmV0dXJuVHlwZVtcImZyb21XaXJlVHlwZVwiXShnZXR0ZXIoZ2V0dGVyQ29udGV4dCxwdHIpKX0sZW51bWVyYWJsZTp0cnVlfTtpZihzZXR0ZXIpe3NldHRlcj1lbWJpbmRfX3JlcXVpcmVGdW5jdGlvbihzZXR0ZXJTaWduYXR1cmUsc2V0dGVyKTt2YXIgc2V0dGVyQXJndW1lbnRUeXBlPXR5cGVzWzFdO2Rlc2Muc2V0PWZ1bmN0aW9uKHYpe3ZhciBwdHI9dmFsaWRhdGVUaGlzKHRoaXMsY2xhc3NUeXBlLGh1bWFuTmFtZStcIiBzZXR0ZXJcIik7dmFyIGRlc3RydWN0b3JzPVtdO3NldHRlcihzZXR0ZXJDb250ZXh0LHB0cixzZXR0ZXJBcmd1bWVudFR5cGVbXCJ0b1dpcmVUeXBlXCJdKGRlc3RydWN0b3JzLHYpKTtydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc1R5cGUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLGZpZWxkTmFtZSxkZXNjKTtyZXR1cm5bXX0pO3JldHVybltdfSl9ZnVuY3Rpb24gSGFuZGxlQWxsb2NhdG9yKCl7dGhpcy5hbGxvY2F0ZWQ9W3VuZGVmaW5lZF07dGhpcy5mcmVlbGlzdD1bXTt0aGlzLmdldD1mdW5jdGlvbihpZCl7cmV0dXJuIHRoaXMuYWxsb2NhdGVkW2lkXX07dGhpcy5oYXM9ZnVuY3Rpb24oaWQpe3JldHVybiB0aGlzLmFsbG9jYXRlZFtpZF0hPT11bmRlZmluZWR9O3RoaXMuYWxsb2NhdGU9ZnVuY3Rpb24oaGFuZGxlKXt2YXIgaWQ9dGhpcy5mcmVlbGlzdC5wb3AoKXx8dGhpcy5hbGxvY2F0ZWQubGVuZ3RoO3RoaXMuYWxsb2NhdGVkW2lkXT1oYW5kbGU7cmV0dXJuIGlkfTt0aGlzLmZyZWU9ZnVuY3Rpb24oaWQpe3RoaXMuYWxsb2NhdGVkW2lkXT11bmRlZmluZWQ7dGhpcy5mcmVlbGlzdC5wdXNoKGlkKX19dmFyIGVtdmFsX2hhbmRsZXM9bmV3IEhhbmRsZUFsbG9jYXRvcjtmdW5jdGlvbiBfX2VtdmFsX2RlY3JlZihoYW5kbGUpe2lmKGhhbmRsZT49ZW12YWxfaGFuZGxlcy5yZXNlcnZlZCYmMD09PS0tZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS5yZWZjb3VudCl7ZW12YWxfaGFuZGxlcy5mcmVlKGhhbmRsZSl9fWZ1bmN0aW9uIGNvdW50X2VtdmFsX2hhbmRsZXMoKXt2YXIgY291bnQ9MDtmb3IodmFyIGk9ZW12YWxfaGFuZGxlcy5yZXNlcnZlZDtpPGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDsrK2kpe2lmKGVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkW2ldIT09dW5kZWZpbmVkKXsrK2NvdW50fX1yZXR1cm4gY291bnR9ZnVuY3Rpb24gaW5pdF9lbXZhbCgpe2VtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLnB1c2goe3ZhbHVlOnVuZGVmaW5lZH0se3ZhbHVlOm51bGx9LHt2YWx1ZTp0cnVlfSx7dmFsdWU6ZmFsc2V9KTtlbXZhbF9oYW5kbGVzLnJlc2VydmVkPWVtdmFsX2hhbmRsZXMuYWxsb2NhdGVkLmxlbmd0aDtNb2R1bGVbXCJjb3VudF9lbXZhbF9oYW5kbGVzXCJdPWNvdW50X2VtdmFsX2hhbmRsZXN9dmFyIEVtdmFsPXt0b1ZhbHVlOmhhbmRsZT0+e2lmKCFoYW5kbGUpe3Rocm93QmluZGluZ0Vycm9yKFwiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gXCIraGFuZGxlKX1yZXR1cm4gZW12YWxfaGFuZGxlcy5nZXQoaGFuZGxlKS52YWx1ZX0sdG9IYW5kbGU6dmFsdWU9Pntzd2l0Y2godmFsdWUpe2Nhc2UgdW5kZWZpbmVkOnJldHVybiAxO2Nhc2UgbnVsbDpyZXR1cm4gMjtjYXNlIHRydWU6cmV0dXJuIDM7Y2FzZSBmYWxzZTpyZXR1cm4gNDtkZWZhdWx0OntyZXR1cm4gZW12YWxfaGFuZGxlcy5hbGxvY2F0ZSh7cmVmY291bnQ6MSx2YWx1ZTp2YWx1ZX0pfX19fTtmdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oaGFuZGxlKXt2YXIgcnY9RW12YWwudG9WYWx1ZShoYW5kbGUpO19fZW12YWxfZGVjcmVmKGhhbmRsZSk7cmV0dXJuIHJ2fSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHZhbHVlKX0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSl9ZnVuY3Rpb24gZW51bVJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2hpZnQsc2lnbmVkKXtzd2l0Y2goc2hpZnQpe2Nhc2UgMDpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVA4OkhFQVBVODtyZXR1cm4gdGhpc1tcImZyb21XaXJlVHlwZVwiXShoZWFwW3BvaW50ZXJdKX07Y2FzZSAxOnJldHVybiBmdW5jdGlvbihwb2ludGVyKXt2YXIgaGVhcD1zaWduZWQ/SEVBUDE2OkhFQVBVMTY7cmV0dXJuIHRoaXNbXCJmcm9tV2lyZVR5cGVcIl0oaGVhcFtwb2ludGVyPj4xXSl9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7dmFyIGhlYXA9c2lnbmVkP0hFQVAzMjpIRUFQVTMyO3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKGhlYXBbcG9pbnRlcj4+Ml0pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGludGVnZXIgdHlwZTogXCIrbmFtZSl9fWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX2VudW0ocmF3VHlwZSxuYW1lLHNpemUsaXNTaWduZWQpe3ZhciBzaGlmdD1nZXRTaGlmdEZyb21TaXplKHNpemUpO25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtmdW5jdGlvbiBjdG9yKCl7fWN0b3IudmFsdWVzPXt9O3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsY29uc3RydWN0b3I6Y3RvcixcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKGMpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yLnZhbHVlc1tjXX0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsYyl7cmV0dXJuIGMudmFsdWV9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjplbnVtUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCxpc1NpZ25lZCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KTtleHBvc2VQdWJsaWNTeW1ib2wobmFtZSxjdG9yKX1mdW5jdGlvbiByZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmF3VHlwZSxodW1hbk5hbWUpe3ZhciBpbXBsPXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXTtpZih1bmRlZmluZWQ9PT1pbXBsKXt0aHJvd0JpbmRpbmdFcnJvcihodW1hbk5hbWUrXCIgaGFzIHVua25vd24gdHlwZSBcIitnZXRUeXBlTmFtZShyYXdUeXBlKSl9cmV0dXJuIGltcGx9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfZW51bV92YWx1ZShyYXdFbnVtVHlwZSxuYW1lLGVudW1WYWx1ZSl7dmFyIGVudW1UeXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZShyYXdFbnVtVHlwZSxcImVudW1cIik7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBFbnVtPWVudW1UeXBlLmNvbnN0cnVjdG9yO3ZhciBWYWx1ZT1PYmplY3QuY3JlYXRlKGVudW1UeXBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSx7dmFsdWU6e3ZhbHVlOmVudW1WYWx1ZX0sY29uc3RydWN0b3I6e3ZhbHVlOmNyZWF0ZU5hbWVkRnVuY3Rpb24oYCR7ZW51bVR5cGUubmFtZX1fJHtuYW1lfWAsZnVuY3Rpb24oKXt9KX19KTtFbnVtLnZhbHVlc1tlbnVtVmFsdWVdPVZhbHVlO0VudW1bbmFtZV09VmFsdWV9ZnVuY3Rpb24gZW1iaW5kUmVwcih2KXtpZih2PT09bnVsbCl7cmV0dXJuXCJudWxsXCJ9dmFyIHQ9dHlwZW9mIHY7aWYodD09PVwib2JqZWN0XCJ8fHQ9PT1cImFycmF5XCJ8fHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiB2LnRvU3RyaW5nKCl9ZWxzZXtyZXR1cm5cIlwiK3Z9fWZ1bmN0aW9uIGZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaGlmdCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGMzJbcG9pbnRlcj4+Ml0pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzW1wiZnJvbVdpcmVUeXBlXCJdKEhFQVBGNjRbcG9pbnRlcj4+M10pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGZsb2F0IHR5cGU6IFwiK25hbWUpfX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdChyYXdUeXBlLG5hbWUsc2l6ZSl7dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsXCJmcm9tV2lyZVR5cGVcIjpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7cmV0dXJuIHZhbHVlfSxcImFyZ1BhY2tBZHZhbmNlXCI6OCxcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCI6ZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0KSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pfWZ1bmN0aW9uIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LHNpZ25lZCl7c3dpdGNoKHNoaWZ0KXtjYXNlIDA6cmV0dXJuIHNpZ25lZD9mdW5jdGlvbiByZWFkUzhGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDhbcG9pbnRlcl19OmZ1bmN0aW9uIHJlYWRVOEZyb21Qb2ludGVyKHBvaW50ZXIpe3JldHVybiBIRUFQVThbcG9pbnRlcl19O2Nhc2UgMTpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMTZGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDE2W3BvaW50ZXI+PjFdfTpmdW5jdGlvbiByZWFkVTE2RnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMTZbcG9pbnRlcj4+MV19O2Nhc2UgMjpyZXR1cm4gc2lnbmVkP2Z1bmN0aW9uIHJlYWRTMzJGcm9tUG9pbnRlcihwb2ludGVyKXtyZXR1cm4gSEVBUDMyW3BvaW50ZXI+PjJdfTpmdW5jdGlvbiByZWFkVTMyRnJvbVBvaW50ZXIocG9pbnRlcil7cmV0dXJuIEhFQVBVMzJbcG9pbnRlcj4+Ml19O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gaW50ZWdlciB0eXBlOiBcIituYW1lKX19ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcihwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO2lmKG1heFJhbmdlPT09LTEpe21heFJhbmdlPTQyOTQ5NjcyOTV9dmFyIHNoaWZ0PWdldFNoaWZ0RnJvbVNpemUoc2l6ZSk7dmFyIGZyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU7aWYobWluUmFuZ2U9PT0wKXt2YXIgYml0c2hpZnQ9MzItOCpzaXplO2Zyb21XaXJlVHlwZT12YWx1ZT0+dmFsdWU8PGJpdHNoaWZ0Pj4+Yml0c2hpZnR9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoXCJ1bnNpZ25lZFwiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9fWVsc2V7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfX1yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnJvbVdpcmVUeXBlLFwidG9XaXJlVHlwZVwiOnRvV2lyZVR5cGUsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNoaWZ0LG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KX1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyhyYXdUeXBlLGRhdGFUeXBlSW5kZXgsbmFtZSl7dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXtoYW5kbGU9aGFuZGxlPj4yO3ZhciBoZWFwPUhFQVBVMzI7dmFyIHNpemU9aGVhcFtoYW5kbGVdO3ZhciBkYXRhPWhlYXBbaGFuZGxlKzFdO3JldHVybiBuZXcgVEEoaGVhcC5idWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmRlY29kZU1lbW9yeVZpZXcsXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KX1mdW5jdGlvbiBzdHJpbmdUb1VURjhBcnJheShzdHIsaGVhcCxvdXRJZHgsbWF4Qnl0ZXNUb1dyaXRlKXtpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzfWlmKHU8PTEyNyl7aWYob3V0SWR4Pj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109dX1lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9ZWxzZXtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjN9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9ZnVuY3Rpb24gc3RyaW5nVG9VVEY4KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtyZXR1cm4gc3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKX1mdW5jdGlvbiBsZW5ndGhCeXRlc1VURjgoc3RyKXt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGM9c3RyLmNoYXJDb2RlQXQoaSk7aWYoYzw9MTI3KXtsZW4rK31lbHNlIGlmKGM8PTIwNDcpe2xlbis9Mn1lbHNlIGlmKGM+PTU1Mjk2JiZjPD01NzM0Myl7bGVuKz00OysraX1lbHNle2xlbis9M319cmV0dXJuIGxlbn1mdW5jdGlvbiBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nKHJhd1R5cGUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzdGRTdHJpbmdJc1VURjg9bmFtZT09PVwic3RkOjpzdHJpbmdcIjtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24odmFsdWUpe3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHBheWxvYWQ9dmFsdWUrNDt2YXIgc3RyO2lmKHN0ZFN0cmluZ0lzVVRGOCl7dmFyIGRlY29kZVN0YXJ0UHRyPXBheWxvYWQ7Zm9yKHZhciBpPTA7aTw9bGVuZ3RoOysraSl7dmFyIGN1cnJlbnRCeXRlUHRyPXBheWxvYWQraTtpZihpPT1sZW5ndGh8fEhFQVBVOFtjdXJyZW50Qnl0ZVB0cl09PTApe3ZhciBtYXhSZWFkPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PVVURjhUb1N0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50fWVsc2V7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDApO3N0cis9c3RyaW5nU2VnbWVudH1kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0cisxfX19ZWxzZXt2YXIgYT1uZXcgQXJyYXkobGVuZ3RoKTtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe2FbaV09U3RyaW5nLmZyb21DaGFyQ29kZShIRUFQVThbcGF5bG9hZCtpXSl9c3RyPWEuam9pbihcIlwiKX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sXCJ0b1dpcmVUeXBlXCI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe3ZhbHVlPW5ldyBVaW50OEFycmF5KHZhbHVlKX12YXIgbGVuZ3RoO3ZhciB2YWx1ZUlzT2ZUeXBlU3RyaW5nPXR5cGVvZiB2YWx1ZT09XCJzdHJpbmdcIjtpZighKHZhbHVlSXNPZlR5cGVTdHJpbmd8fHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheXx8dmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpKXt0aHJvd0JpbmRpbmdFcnJvcihcIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmdcIil9aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtsZW5ndGg9bGVuZ3RoQnl0ZXNVVEY4KHZhbHVlKX1lbHNle2xlbmd0aD12YWx1ZS5sZW5ndGh9dmFyIGJhc2U9X21hbGxvYyg0K2xlbmd0aCsxKTt2YXIgcHRyPWJhc2UrNDtIRUFQVTMyW2Jhc2U+PjJdPWxlbmd0aDtpZihzdGRTdHJpbmdJc1VURjgmJnZhbHVlSXNPZlR5cGVTdHJpbmcpe3N0cmluZ1RvVVRGOCh2YWx1ZSxwdHIsbGVuZ3RoKzEpfWVsc2V7aWYodmFsdWVJc09mVHlwZVN0cmluZyl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXt2YXIgY2hhckNvZGU9dmFsdWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT4yNTUpe19mcmVlKHB0cik7dGhyb3dCaW5kaW5nRXJyb3IoXCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHNcIil9SEVBUFU4W3B0citpXT1jaGFyQ29kZX19ZWxzZXtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe0hFQVBVOFtwdHIraV09dmFsdWVbaV19fX1pZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2goX2ZyZWUsYmFzZSl9cmV0dXJuIGJhc2V9LFwiYXJnUGFja0FkdmFuY2VcIjo4LFwicmVhZFZhbHVlRnJvbVBvaW50ZXJcIjpzaW1wbGVSZWFkVmFsdWVGcm9tUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246ZnVuY3Rpb24ocHRyKXtfZnJlZShwdHIpfX0pfXZhciBVVEYxNkRlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT1cInVuZGVmaW5lZFwiP25ldyBUZXh0RGVjb2RlcihcInV0Zi0xNmxlXCIpOnVuZGVmaW5lZDtmdW5jdGlvbiBVVEYxNlRvU3RyaW5nKHB0cixtYXhCeXRlc1RvUmVhZCl7dmFyIGVuZFB0cj1wdHI7dmFyIGlkeD1lbmRQdHI+PjE7dmFyIG1heElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQvMjt3aGlsZSghKGlkeD49bWF4SWR4KSYmSEVBUFUxNltpZHhdKSsraWR4O2VuZFB0cj1pZHg8PDE7aWYoZW5kUHRyLXB0cj4zMiYmVVRGMTZEZWNvZGVyKXJldHVybiBVVEYxNkRlY29kZXIuZGVjb2RlKEhFQVBVOC5zdWJhcnJheShwdHIsZW5kUHRyKSk7dmFyIHN0cj1cIlwiO2Zvcih2YXIgaT0wOyEoaT49bWF4Qnl0ZXNUb1JlYWQvMik7KytpKXt2YXIgY29kZVVuaXQ9SEVBUDE2W3B0citpKjI+PjFdO2lmKGNvZGVVbml0PT0wKWJyZWFrO3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCl9cmV0dXJuIHN0cn1mdW5jdGlvbiBzdHJpbmdUb1VURjE2KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKXtpZihtYXhCeXRlc1RvV3JpdGU9PT11bmRlZmluZWQpe21heEJ5dGVzVG9Xcml0ZT0yMTQ3NDgzNjQ3fWlmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mn1IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYxNihzdHIpe3JldHVybiBzdHIubGVuZ3RoKjJ9ZnVuY3Rpb24gVVRGMzJUb1N0cmluZyhwdHIsbWF4Qnl0ZXNUb1JlYWQpe3ZhciBpPTA7dmFyIHN0cj1cIlwiO3doaWxlKCEoaT49bWF4Qnl0ZXNUb1JlYWQvNCkpe3ZhciB1dGYzMj1IRUFQMzJbcHRyK2kqND4+Ml07aWYodXRmMzI9PTApYnJlYWs7KytpO2lmKHV0ZjMyPj02NTUzNil7dmFyIGNoPXV0ZjMyLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyl9ZWxzZXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodXRmMzIpfX1yZXR1cm4gc3RyfWZ1bmN0aW9uIHN0cmluZ1RvVVRGMzIoc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpe2lmKG1heEJ5dGVzVG9Xcml0ZT09PXVuZGVmaW5lZCl7bWF4Qnl0ZXNUb1dyaXRlPTIxNDc0ODM2NDd9aWYobWF4Qnl0ZXNUb1dyaXRlPDQpcmV0dXJuIDA7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgZW5kUHRyPXN0YXJ0UHRyK21heEJ5dGVzVG9Xcml0ZS00O2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtpZihjb2RlVW5pdD49NTUyOTYmJmNvZGVVbml0PD01NzM0Myl7dmFyIHRyYWlsU3Vycm9nYXRlPXN0ci5jaGFyQ29kZUF0KCsraSk7Y29kZVVuaXQ9NjU1MzYrKChjb2RlVW5pdCYxMDIzKTw8MTApfHRyYWlsU3Vycm9nYXRlJjEwMjN9SEVBUDMyW291dFB0cj4+Ml09Y29kZVVuaXQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9ZnVuY3Rpb24gbGVuZ3RoQnl0ZXNVVEYzMihzdHIpe3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpKytpO2xlbis9NH1yZXR1cm4gbGVufWZ1bmN0aW9uIF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nKHJhd1R5cGUsY2hhclNpemUsbmFtZSl7bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBkZWNvZGVTdHJpbmcsZW5jb2RlU3RyaW5nLGdldEhlYXAsbGVuZ3RoQnl0ZXNVVEYsc2hpZnQ7aWYoY2hhclNpemU9PT0yKXtkZWNvZGVTdHJpbmc9VVRGMTZUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYxNjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjE2O2dldEhlYXA9KCk9PkhFQVBVMTY7c2hpZnQ9MX1lbHNlIGlmKGNoYXJTaXplPT09NCl7ZGVjb2RlU3RyaW5nPVVURjMyVG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMzI7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYzMjtnZXRIZWFwPSgpPT5IRUFQVTMyO3NoaWZ0PTJ9cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSxcImZyb21XaXJlVHlwZVwiOmZ1bmN0aW9uKHZhbHVlKXt2YXIgbGVuZ3RoPUhFQVBVMzJbdmFsdWU+PjJdO3ZhciBIRUFQPWdldEhlYXAoKTt2YXIgc3RyO3ZhciBkZWNvZGVTdGFydFB0cj12YWx1ZSs0O2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj12YWx1ZSs0K2kqY2hhclNpemU7aWYoaT09bGVuZ3RofHxIRUFQW2N1cnJlbnRCeXRlUHRyPj5zaGlmdF09PTApe3ZhciBtYXhSZWFkQnl0ZXM9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9ZGVjb2RlU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWRCeXRlcyk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudH1lbHNle3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnR9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrY2hhclNpemV9fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYoISh0eXBlb2YgdmFsdWU9PVwic3RyaW5nXCIpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgJHtuYW1lfWApfXZhciBsZW5ndGg9bGVuZ3RoQnl0ZXNVVEYodmFsdWUpO3ZhciBwdHI9X21hbGxvYyg0K2xlbmd0aCtjaGFyU2l6ZSk7SEVBUFUzMltwdHI+PjJdPWxlbmd0aD4+c2hpZnQ7ZW5jb2RlU3RyaW5nKHZhbHVlLHB0cis0LGxlbmd0aCtjaGFyU2l6ZSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLHB0cil9cmV0dXJuIHB0cn0sXCJhcmdQYWNrQWR2YW5jZVwiOjgsXCJyZWFkVmFsdWVGcm9tUG9pbnRlclwiOnNpbXBsZVJlYWRWYWx1ZUZyb21Qb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbjpmdW5jdGlvbihwdHIpe19mcmVlKHB0cil9fSl9ZnVuY3Rpb24gX19lbWJpbmRfcmVnaXN0ZXJfdm9pZChyYXdUeXBlLG5hbWUpe25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7aXNWb2lkOnRydWUsbmFtZTpuYW1lLFwiYXJnUGFja0FkdmFuY2VcIjowLFwiZnJvbVdpcmVUeXBlXCI6ZnVuY3Rpb24oKXtyZXR1cm4gdW5kZWZpbmVkfSxcInRvV2lyZVR5cGVcIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gdW5kZWZpbmVkfX0pfWZ1bmN0aW9uIF9fZW12YWxfYXMoaGFuZGxlLHJldHVyblR5cGUsZGVzdHJ1Y3RvcnNSZWYpe2hhbmRsZT1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7cmV0dXJuVHlwZT1yZXF1aXJlUmVnaXN0ZXJlZFR5cGUocmV0dXJuVHlwZSxcImVtdmFsOjphc1wiKTt2YXIgZGVzdHJ1Y3RvcnM9W107dmFyIHJkPUVtdmFsLnRvSGFuZGxlKGRlc3RydWN0b3JzKTtIRUFQVTMyW2Rlc3RydWN0b3JzUmVmPj4yXT1yZDtyZXR1cm4gcmV0dXJuVHlwZVtcInRvV2lyZVR5cGVcIl0oZGVzdHJ1Y3RvcnMsaGFuZGxlKX1mdW5jdGlvbiBfX2VtdmFsX2luY3JlZihoYW5kbGUpe2lmKGhhbmRsZT40KXtlbXZhbF9oYW5kbGVzLmdldChoYW5kbGUpLnJlZmNvdW50Kz0xfX1mdW5jdGlvbiBfX2VtdmFsX3J1bl9kZXN0cnVjdG9ycyhoYW5kbGUpe3ZhciBkZXN0cnVjdG9ycz1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7cnVuRGVzdHJ1Y3RvcnMoZGVzdHJ1Y3RvcnMpO19fZW12YWxfZGVjcmVmKGhhbmRsZSl9ZnVuY3Rpb24gX19lbXZhbF90YWtlX3ZhbHVlKHR5cGUsYXJnKXt0eXBlPXJlcXVpcmVSZWdpc3RlcmVkVHlwZSh0eXBlLFwiX2VtdmFsX3Rha2VfdmFsdWVcIik7dmFyIHY9dHlwZVtcInJlYWRWYWx1ZUZyb21Qb2ludGVyXCJdKGFyZyk7cmV0dXJuIEVtdmFsLnRvSGFuZGxlKHYpfWZ1bmN0aW9uIF9hYm9ydCgpe2Fib3J0KFwiXCIpfWZ1bmN0aW9uIF9lbXNjcmlwdGVuX21lbWNweV9iaWcoZGVzdCxzcmMsbnVtKXtIRUFQVTguY29weVdpdGhpbihkZXN0LHNyYyxzcmMrbnVtKX1mdW5jdGlvbiBnZXRIZWFwTWF4KCl7cmV0dXJuIDIxNDc0ODM2NDh9ZnVuY3Rpb24gZW1zY3JpcHRlbl9yZWFsbG9jX2J1ZmZlcihzaXplKXt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjt2YXIgcGFnZXM9c2l6ZS1iLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNjt0cnl7d2FzbU1lbW9yeS5ncm93KHBhZ2VzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiAxfWNhdGNoKGUpe319ZnVuY3Rpb24gX2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAocmVxdWVzdGVkU2l6ZSl7dmFyIG9sZFNpemU9SEVBUFU4Lmxlbmd0aDtyZXF1ZXN0ZWRTaXplPXJlcXVlc3RlZFNpemU+Pj4wO3ZhciBtYXhIZWFwU2l6ZT1nZXRIZWFwTWF4KCk7aWYocmVxdWVzdGVkU2l6ZT5tYXhIZWFwU2l6ZSl7cmV0dXJuIGZhbHNlfXZhciBhbGlnblVwPSh4LG11bHRpcGxlKT0+eCsobXVsdGlwbGUteCVtdWx0aXBsZSklbXVsdGlwbGU7Zm9yKHZhciBjdXREb3duPTE7Y3V0RG93bjw9NDtjdXREb3duKj0yKXt2YXIgb3Zlckdyb3duSGVhcFNpemU9b2xkU2l6ZSooMSsuMi9jdXREb3duKTtvdmVyR3Jvd25IZWFwU2l6ZT1NYXRoLm1pbihvdmVyR3Jvd25IZWFwU2l6ZSxyZXF1ZXN0ZWRTaXplKzEwMDY2MzI5Nik7dmFyIG5ld1NpemU9TWF0aC5taW4obWF4SGVhcFNpemUsYWxpZ25VcChNYXRoLm1heChyZXF1ZXN0ZWRTaXplLG92ZXJHcm93bkhlYXBTaXplKSw2NTUzNikpO3ZhciByZXBsYWNlbWVudD1lbXNjcmlwdGVuX3JlYWxsb2NfYnVmZmVyKG5ld1NpemUpO2lmKHJlcGxhY2VtZW50KXtyZXR1cm4gdHJ1ZX19cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIF9mZF9jbG9zZShmZCl7cmV0dXJuIDUyfWZ1bmN0aW9uIF9mZF9yZWFkKGZkLGlvdixpb3ZjbnQscG51bSl7cmV0dXJuIDUyfWZ1bmN0aW9uIF9mZF9zZWVrKGZkLG9mZnNldF9sb3csb2Zmc2V0X2hpZ2gsd2hlbmNlLG5ld09mZnNldCl7cmV0dXJuIDcwfXZhciBwcmludENoYXJCdWZmZXJzPVtudWxsLFtdLFtdXTtmdW5jdGlvbiBwcmludENoYXIoc3RyZWFtLGN1cnIpe3ZhciBidWZmZXI9cHJpbnRDaGFyQnVmZmVyc1tzdHJlYW1dO2lmKGN1cnI9PT0wfHxjdXJyPT09MTApeyhzdHJlYW09PT0xP291dDplcnIpKFVURjhBcnJheVRvU3RyaW5nKGJ1ZmZlciwwKSk7YnVmZmVyLmxlbmd0aD0wfWVsc2V7YnVmZmVyLnB1c2goY3Vycil9fWZ1bmN0aW9uIF9mZF93cml0ZShmZCxpb3YsaW92Y250LHBudW0pe3ZhciBudW09MDtmb3IodmFyIGk9MDtpPGlvdmNudDtpKyspe3ZhciBwdHI9SEVBUFUzMltpb3Y+PjJdO3ZhciBsZW49SEVBUFUzMltpb3YrND4+Ml07aW92Kz04O2Zvcih2YXIgaj0wO2o8bGVuO2orKyl7cHJpbnRDaGFyKGZkLEhFQVBVOFtwdHIral0pfW51bSs9bGVufUhFQVBVMzJbcG51bT4+Ml09bnVtO3JldHVybiAwfWZ1bmN0aW9uIF9zcGluZUxpc3RlbmVyQ2FsbEJhY2tGcm9tSlMoKXt2YXIgd2FzbVV0aWw9TW9kdWxlW1wiU3BpbmVXYXNtVXRpbFwiXTt2YXIgbGlzdGVuZXJJRD13YXNtVXRpbC5nZXRDdXJyZW50TGlzdGVuZXJJRCgpO3ZhciB0cmFja0VudHJ5PXdhc21VdGlsLmdldEN1cnJlbnRUcmFja0VudHJ5KCk7dmFyIGV2ZW50PXdhc21VdGlsLmdldEN1cnJlbnRFdmVudCgpO3ZhciBldmVudFR5cGU9d2FzbVV0aWwuZ2V0Q3VycmVudEV2ZW50VHlwZSgpO2dsb2JhbFRoaXMuVHJhY2tFbnRyeUxpc3RlbmVycy5lbWl0TGlzdGVuZXIobGlzdGVuZXJJRCx0cmFja0VudHJ5LGV2ZW50LGV2ZW50VHlwZS52YWx1ZSl9ZnVuY3Rpb24gX3NwaW5lVHJhY2tMaXN0ZW5lckNhbGxiYWNrKCl7dmFyIHdhc21VdGlsPU1vZHVsZVtcIlNwaW5lV2FzbVV0aWxcIl07dmFyIGxpc3RlbmVySUQ9d2FzbVV0aWwuZ2V0Q3VycmVudExpc3RlbmVySUQoKTt2YXIgZXZlbnRUeXBlPXdhc21VdGlsLmdldEN1cnJlbnRFdmVudFR5cGUoKTt2YXIgdHJhY2tFbnRyeT13YXNtVXRpbC5nZXRDdXJyZW50VHJhY2tFbnRyeSgpO3ZhciBldmVudD13YXNtVXRpbC5nZXRDdXJyZW50RXZlbnQoKTtnbG9iYWxUaGlzLlRyYWNrRW50cnlMaXN0ZW5lcnMuZW1pdFRyYWNrRW50cnlMaXN0ZW5lcihsaXN0ZW5lcklELHRyYWNrRW50cnksZXZlbnQsZXZlbnRUeXBlLnZhbHVlKX1lbWJpbmRfaW5pdF9jaGFyQ29kZXMoKTtCaW5kaW5nRXJyb3I9TW9kdWxlW1wiQmluZGluZ0Vycm9yXCJdPWV4dGVuZEVycm9yKEVycm9yLFwiQmluZGluZ0Vycm9yXCIpO0ludGVybmFsRXJyb3I9TW9kdWxlW1wiSW50ZXJuYWxFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIkludGVybmFsRXJyb3JcIik7aW5pdF9DbGFzc0hhbmRsZSgpO2luaXRfZW1iaW5kKCk7aW5pdF9SZWdpc3RlcmVkUG9pbnRlcigpO1VuYm91bmRUeXBlRXJyb3I9TW9kdWxlW1wiVW5ib3VuZFR5cGVFcnJvclwiXT1leHRlbmRFcnJvcihFcnJvcixcIlVuYm91bmRUeXBlRXJyb3JcIik7aW5pdF9lbXZhbCgpO3ZhciB3YXNtSW1wb3J0cz17XCJvXCI6X19fc3lzY2FsbF9mY250bDY0LFwieFwiOl9fX3N5c2NhbGxfaW9jdGwsXCJ5XCI6X19fc3lzY2FsbF9vcGVuYXQsXCJ0XCI6X19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50LFwiQ1wiOl9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wsXCJiXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3MsXCJmXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfZnVuY3Rpb24sXCJqXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfcHJvcGVydHksXCJjXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY29uc3RydWN0b3IsXCJhXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfZnVuY3Rpb24sXCJlXCI6X19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfcHJvcGVydHksXCJBXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW12YWwsXCJrXCI6X19lbWJpbmRfcmVnaXN0ZXJfZW51bSxcImRcIjpfX2VtYmluZF9yZWdpc3Rlcl9lbnVtX3ZhbHVlLFwicFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0LFwibFwiOl9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXIsXCJpXCI6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsXCJxXCI6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxcIm1cIjpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyxcIkRcIjpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLFwiRlwiOl9fZW12YWxfYXMsXCJyXCI6X19lbXZhbF9kZWNyZWYsXCJHXCI6X19lbXZhbF9pbmNyZWYsXCJFXCI6X19lbXZhbF9ydW5fZGVzdHJ1Y3RvcnMsXCJoXCI6X19lbXZhbF90YWtlX3ZhbHVlLFwiZ1wiOl9hYm9ydCxcInpcIjpfZW1zY3JpcHRlbl9tZW1jcHlfYmlnLFwidVwiOl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwLFwiblwiOl9mZF9jbG9zZSxcIndcIjpfZmRfcmVhZCxcInNcIjpfZmRfc2VlayxcInZcIjpfZmRfd3JpdGUsXCJIXCI6X3NwaW5lTGlzdGVuZXJDYWxsQmFja0Zyb21KUyxcIkJcIjpfc3BpbmVUcmFja0xpc3RlbmVyQ2FsbGJhY2t9O3ZhciBhc209Y3JlYXRlV2FzbSgpO3ZhciBfX193YXNtX2NhbGxfY3RvcnM9ZnVuY3Rpb24oKXtyZXR1cm4oX19fd2FzbV9jYWxsX2N0b3JzPU1vZHVsZVtcImFzbVwiXVtcIkpcIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9tYWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oX21hbGxvYz1Nb2R1bGVbXCJhc21cIl1bXCJMXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfZnJlZT1mdW5jdGlvbigpe3JldHVybihfZnJlZT1Nb2R1bGVbXCJhc21cIl1bXCJNXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX19nZXRUeXBlTmFtZT1mdW5jdGlvbigpe3JldHVybihfX19nZXRUeXBlTmFtZT1Nb2R1bGVbXCJhc21cIl1bXCJOXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzPU1vZHVsZVtcIl9fZW1iaW5kX2luaXRpYWxpemVfYmluZGluZ3NcIl09ZnVuY3Rpb24oKXtyZXR1cm4oX19lbWJpbmRfaW5pdGlhbGl6ZV9iaW5kaW5ncz1Nb2R1bGVbXCJfX2VtYmluZF9pbml0aWFsaXplX2JpbmRpbmdzXCJdPU1vZHVsZVtcImFzbVwiXVtcIk9cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIF9fX2Vycm5vX2xvY2F0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuKF9fX2Vycm5vX2xvY2F0aW9uPU1vZHVsZVtcImFzbVwiXVtcIl9fZXJybm9fbG9jYXRpb25cIl0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX07dmFyIGR5bkNhbGxfamlqaT1Nb2R1bGVbXCJkeW5DYWxsX2ppamlcIl09ZnVuY3Rpb24oKXtyZXR1cm4oZHluQ2FsbF9qaWppPU1vZHVsZVtcImR5bkNhbGxfamlqaVwiXT1Nb2R1bGVbXCJhc21cIl1bXCJQXCJdKS5hcHBseShudWxsLGFyZ3VtZW50cyl9O3ZhciBjYWxsZWRSdW47ZGVwZW5kZW5jaWVzRnVsZmlsbGVkPWZ1bmN0aW9uIHJ1bkNhbGxlcigpe2lmKCFjYWxsZWRSdW4pcnVuKCk7aWYoIWNhbGxlZFJ1bilkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9cnVuQ2FsbGVyfTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVtcImNhbGxlZFJ1blwiXT10cnVlO2lmKEFCT1JUKXJldHVybjtpbml0UnVudGltZSgpO3JlYWR5UHJvbWlzZVJlc29sdmUoTW9kdWxlKTtpZihNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSlNb2R1bGVbXCJvblJ1bnRpbWVJbml0aWFsaXplZFwiXSgpO3Bvc3RSdW4oKX1pZihNb2R1bGVbXCJzZXRTdGF0dXNcIl0pe01vZHVsZVtcInNldFN0YXR1c1wiXShcIlJ1bm5pbmcuLi5cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtNb2R1bGVbXCJzZXRTdGF0dXNcIl0oXCJcIil9LDEpO2RvUnVuKCl9LDEpfWVsc2V7ZG9SdW4oKX19aWYoTW9kdWxlW1wicHJlSW5pdFwiXSl7aWYodHlwZW9mIE1vZHVsZVtcInByZUluaXRcIl09PVwiZnVuY3Rpb25cIilNb2R1bGVbXCJwcmVJbml0XCJdPVtNb2R1bGVbXCJwcmVJbml0XCJdXTt3aGlsZShNb2R1bGVbXCJwcmVJbml0XCJdLmxlbmd0aD4wKXtNb2R1bGVbXCJwcmVJbml0XCJdLnBvcCgpKCl9fXJ1bigpO1xuXG5cbiAgcmV0dXJuIHNwaW5lV2FzbS5yZWFkeVxufVxuXG4pO1xufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHNwaW5lV2FzbTsiXSwibmFtZXMiOlsic3BpbmVXYXNtIiwiX3NjcmlwdERpciIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInVuZGVmaW5lZCIsIk1vZHVsZSIsInJlYWR5UHJvbWlzZVJlc29sdmUiLCJyZWFkeVByb21pc2VSZWplY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1vZHVsZU92ZXJyaWRlcyIsIk9iamVjdCIsImFzc2lnbiIsIkVOVklST05NRU5UX0lTX1dFQiIsInNjcmlwdERpcmVjdG9yeSIsImxvY2F0ZUZpbGUiLCJwYXRoIiwicmVhZEJpbmFyeSIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibGFzdEluZGV4T2YiLCJvdXQiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsImVyciIsImVycm9yIiwid2FzbUJpbmFyeSIsIldlYkFzc2VtYmx5IiwiYWJvcnQiLCJ3YXNtTWVtb3J5IiwiQUJPUlQiLCJhc3NlcnQiLCJjb25kaXRpb24iLCJ0ZXh0IiwiSEVBUDgiLCJIRUFQVTgiLCJIRUFQMTYiLCJIRUFQVTE2IiwiSEVBUDMyIiwiSEVBUFUzMiIsIkhFQVBGMzIiLCJIRUFQRjY0IiwidXBkYXRlTWVtb3J5Vmlld3MiLCJiIiwiYnVmZmVyIiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIndhc21UYWJsZSIsIl9fQVRQUkVSVU5fXyIsIl9fQVRJTklUX18iLCJfX0FUUE9TVFJVTl9fIiwicHJlUnVuIiwibGVuZ3RoIiwiYWRkT25QcmVSdW4iLCJzaGlmdCIsImNhbGxSdW50aW1lQ2FsbGJhY2tzIiwiaW5pdFJ1bnRpbWUiLCJwb3N0UnVuIiwiYWRkT25Qb3N0UnVuIiwiY2IiLCJ1bnNoaWZ0IiwiYWRkT25Jbml0IiwicnVuRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwiYWRkUnVuRGVwZW5kZW5jeSIsImlkIiwicmVtb3ZlUnVuRGVwZW5kZW5jeSIsImNhbGxiYWNrIiwid2hhdCIsImUiLCJSdW50aW1lRXJyb3IiLCJkYXRhVVJJUHJlZml4IiwiaXNEYXRhVVJJIiwiZmlsZW5hbWUiLCJzdGFydHNXaXRoIiwid2FzbUJpbmFyeUZpbGUiLCJnZXRCaW5hcnkiLCJmaWxlIiwiZ2V0QmluYXJ5UHJvbWlzZSIsImJpbmFyeUZpbGUiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwiaW5zdGFudGlhdGVBcnJheUJ1ZmZlciIsImltcG9ydHMiLCJyZWNlaXZlciIsImJpbmFyeSIsImluc3RhbnRpYXRlIiwiaW5zdGFuY2UiLCJyZWFzb24iLCJpbnN0YW50aWF0ZUFzeW5jIiwiaW5zdGFudGlhdGVTdHJlYW1pbmciLCJyZXN1bHQiLCJjcmVhdGVXYXNtIiwiaW5mbyIsIndhc21JbXBvcnRzIiwicmVjZWl2ZUluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0IiwiY2FsbGJhY2tzIiwiVVRGOERlY29kZXIiLCJUZXh0RGVjb2RlciIsIlVURjhBcnJheVRvU3RyaW5nIiwiaGVhcE9yQXJyYXkiLCJpZHgiLCJtYXhCeXRlc1RvUmVhZCIsImVuZElkeCIsImVuZFB0ciIsImRlY29kZSIsInN1YmFycmF5Iiwic3RyIiwidTAiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1MSIsInUyIiwiY2giLCJVVEY4VG9TdHJpbmciLCJwdHIiLCJfX19zeXNjYWxsX2ZjbnRsNjQiLCJmZCIsImNtZCIsInZhcmFyZ3MiLCJfX19zeXNjYWxsX2lvY3RsIiwib3AiLCJfX19zeXNjYWxsX29wZW5hdCIsImRpcmZkIiwiZmxhZ3MiLCJfX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnQiLCJwcmltaXRpdmVUeXBlIiwibmFtZSIsInNpemUiLCJtaW5SYW5nZSIsIm1heFJhbmdlIiwiZ2V0U2hpZnRGcm9tU2l6ZSIsIlR5cGVFcnJvciIsImVtYmluZF9pbml0X2NoYXJDb2RlcyIsImNvZGVzIiwiQXJyYXkiLCJpIiwiZW1iaW5kX2NoYXJDb2RlcyIsInJlYWRMYXRpbjFTdHJpbmciLCJyZXQiLCJjIiwiYXdhaXRpbmdEZXBlbmRlbmNpZXMiLCJyZWdpc3RlcmVkVHlwZXMiLCJ0eXBlRGVwZW5kZW5jaWVzIiwiY2hhcl8wIiwiY2hhcl85IiwibWFrZUxlZ2FsRnVuY3Rpb25OYW1lIiwiZiIsImNoYXJDb2RlQXQiLCJjcmVhdGVOYW1lZEZ1bmN0aW9uIiwiYm9keSIsIl9uYW1lJG5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsImV4dGVuZEVycm9yIiwiYmFzZUVycm9yVHlwZSIsImVycm9yTmFtZSIsImVycm9yQ2xhc3MiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInRvU3RyaW5nIiwicHJvdG90eXBlIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJCaW5kaW5nRXJyb3IiLCJ0aHJvd0JpbmRpbmdFcnJvciIsIkludGVybmFsRXJyb3IiLCJ0aHJvd0ludGVybmFsRXJyb3IiLCJ3aGVuRGVwZW5kZW50VHlwZXNBcmVSZXNvbHZlZCIsIm15VHlwZXMiLCJkZXBlbmRlbnRUeXBlcyIsImdldFR5cGVDb252ZXJ0ZXJzIiwiZm9yRWFjaCIsInR5cGUiLCJvbkNvbXBsZXRlIiwidHlwZUNvbnZlcnRlcnMiLCJteVR5cGVDb252ZXJ0ZXJzIiwicmVnaXN0ZXJUeXBlIiwidW5yZWdpc3RlcmVkVHlwZXMiLCJyZWdpc3RlcmVkIiwiZHQiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJyYXdUeXBlIiwicmVnaXN0ZXJlZEluc3RhbmNlIiwib3B0aW9ucyIsImlnbm9yZUR1cGxpY2F0ZVJlZ2lzdHJhdGlvbnMiLCJfX2VtYmluZF9yZWdpc3Rlcl9ib29sIiwidHJ1ZVZhbHVlIiwiZmFsc2VWYWx1ZSIsImZyb21XaXJlVHlwZSIsInd0IiwidG9XaXJlVHlwZSIsImRlc3RydWN0b3JzIiwibyIsInJlYWRWYWx1ZUZyb21Qb2ludGVyIiwicG9pbnRlciIsImhlYXAiLCJkZXN0cnVjdG9yRnVuY3Rpb24iLCJDbGFzc0hhbmRsZV9pc0FsaWFzT2YiLCJvdGhlciIsIkNsYXNzSGFuZGxlIiwibGVmdENsYXNzIiwiJCQiLCJwdHJUeXBlIiwicmVnaXN0ZXJlZENsYXNzIiwibGVmdCIsInJpZ2h0Q2xhc3MiLCJyaWdodCIsImJhc2VDbGFzcyIsInVwY2FzdCIsInNoYWxsb3dDb3B5SW50ZXJuYWxQb2ludGVyIiwiY291bnQiLCJkZWxldGVTY2hlZHVsZWQiLCJwcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSIsInNtYXJ0UHRyIiwic21hcnRQdHJUeXBlIiwidGhyb3dJbnN0YW5jZUFscmVhZHlEZWxldGVkIiwib2JqIiwiZ2V0SW5zdGFuY2VUeXBlTmFtZSIsImhhbmRsZSIsImZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiZGV0YWNoRmluYWxpemVyIiwicnVuRGVzdHJ1Y3RvciIsInJhd0Rlc3RydWN0b3IiLCJyZWxlYXNlQ2xhc3NIYW5kbGUiLCJ2YWx1ZSIsInRvRGVsZXRlIiwiZG93bmNhc3RQb2ludGVyIiwicHRyQ2xhc3MiLCJkZXNpcmVkQ2xhc3MiLCJydiIsImRvd25jYXN0IiwicmVnaXN0ZXJlZFBvaW50ZXJzIiwiZ2V0SW5oZXJpdGVkSW5zdGFuY2VDb3VudCIsImtleXMiLCJyZWdpc3RlcmVkSW5zdGFuY2VzIiwiZ2V0TGl2ZUluaGVyaXRlZEluc3RhbmNlcyIsImsiLCJkZWxldGlvblF1ZXVlIiwiZmx1c2hQZW5kaW5nRGVsZXRlcyIsInBvcCIsImRlbGF5RnVuY3Rpb24iLCJzZXREZWxheUZ1bmN0aW9uIiwiZm4iLCJpbml0X2VtYmluZCIsImdldEJhc2VzdFBvaW50ZXIiLCJjbGFzc18iLCJnZXRJbmhlcml0ZWRJbnN0YW5jZSIsIm1ha2VDbGFzc0hhbmRsZSIsInJlY29yZCIsImhhc1NtYXJ0UHRyVHlwZSIsImhhc1NtYXJ0UHRyIiwiYXR0YWNoRmluYWxpemVyIiwiUmVnaXN0ZXJlZFBvaW50ZXJfZnJvbVdpcmVUeXBlIiwicmF3UG9pbnRlciIsImdldFBvaW50ZWUiLCJkZXN0cnVjdG9yIiwibWFrZURlZmF1bHRIYW5kbGUiLCJpc1NtYXJ0UG9pbnRlciIsImluc3RhbmNlUHJvdG90eXBlIiwicG9pbnRlZVR5cGUiLCJhY3R1YWxUeXBlIiwiZ2V0QWN0dWFsVHlwZSIsInJlZ2lzdGVyZWRQb2ludGVyUmVjb3JkIiwiY2FsbCIsInRvVHlwZSIsImlzQ29uc3QiLCJjb25zdFBvaW50ZXJUeXBlIiwicG9pbnRlclR5cGUiLCJkcCIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwiQ2xhc3NIYW5kbGVfY2xvbmUiLCJjbG9uZSIsImdldFByb3RvdHlwZU9mIiwiQ2xhc3NIYW5kbGVfZGVsZXRlIiwiQ2xhc3NIYW5kbGVfaXNEZWxldGVkIiwiQ2xhc3NIYW5kbGVfZGVsZXRlTGF0ZXIiLCJpbml0X0NsYXNzSGFuZGxlIiwiZW5zdXJlT3ZlcmxvYWRUYWJsZSIsInByb3RvIiwibWV0aG9kTmFtZSIsImh1bWFuTmFtZSIsIm92ZXJsb2FkVGFibGUiLCJwcmV2RnVuYyIsImFyZ0NvdW50IiwiZXhwb3NlUHVibGljU3ltYm9sIiwibnVtQXJndW1lbnRzIiwiUmVnaXN0ZXJlZENsYXNzIiwicHVyZVZpcnR1YWxGdW5jdGlvbnMiLCJ1cGNhc3RQb2ludGVyIiwiY29uc3ROb1NtYXJ0UHRyUmF3UG9pbnRlclRvV2lyZVR5cGUiLCJpc1JlZmVyZW5jZSIsImVtYmluZFJlcHIiLCJoYW5kbGVDbGFzcyIsImdlbmVyaWNQb2ludGVyVG9XaXJlVHlwZSIsInJhd0NvbnN0cnVjdG9yIiwic2hhcmluZ1BvbGljeSIsImNsb25lZEhhbmRsZSIsInJhd1NoYXJlIiwiRW12YWwiLCJ0b0hhbmRsZSIsIm5vbkNvbnN0Tm9TbWFydFB0clJhd1BvaW50ZXJUb1dpcmVUeXBlIiwic2ltcGxlUmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJSZWdpc3RlcmVkUG9pbnRlcl9nZXRQb2ludGVlIiwicmF3R2V0UG9pbnRlZSIsIlJlZ2lzdGVyZWRQb2ludGVyX2Rlc3RydWN0b3IiLCJSZWdpc3RlcmVkUG9pbnRlcl9kZWxldGVPYmplY3QiLCJpbml0X1JlZ2lzdGVyZWRQb2ludGVyIiwiUmVnaXN0ZXJlZFBvaW50ZXIiLCJyZXBsYWNlUHVibGljU3ltYm9sIiwiZHluQ2FsbExlZ2FjeSIsInNpZyIsImFyZ3MiLCJjb25jYXQiLCJ3YXNtVGFibGVNaXJyb3IiLCJnZXRXYXNtVGFibGVFbnRyeSIsImZ1bmNQdHIiLCJmdW5jIiwiZ2V0IiwiZHluQ2FsbCIsImluY2x1ZGVzIiwicnRuIiwiZ2V0RHluQ2FsbGVyIiwiYXJnQ2FjaGUiLCJlbWJpbmRfX3JlcXVpcmVGdW5jdGlvbiIsInNpZ25hdHVyZSIsInJhd0Z1bmN0aW9uIiwibWFrZUR5bkNhbGxlciIsImZwIiwiVW5ib3VuZFR5cGVFcnJvciIsImdldFR5cGVOYW1lIiwiX19fZ2V0VHlwZU5hbWUiLCJfZnJlZSIsInRocm93VW5ib3VuZFR5cGVFcnJvciIsInR5cGVzIiwidW5ib3VuZFR5cGVzIiwic2VlbiIsInZpc2l0IiwibWFwIiwiam9pbiIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzIiwicmF3UG9pbnRlclR5cGUiLCJyYXdDb25zdFBvaW50ZXJUeXBlIiwiYmFzZUNsYXNzUmF3VHlwZSIsImdldEFjdHVhbFR5cGVTaWduYXR1cmUiLCJ1cGNhc3RTaWduYXR1cmUiLCJkb3duY2FzdFNpZ25hdHVyZSIsImRlc3RydWN0b3JTaWduYXR1cmUiLCJsZWdhbEZ1bmN0aW9uTmFtZSIsImJhc2UiLCJiYXNlUHJvdG90eXBlIiwiY29uc3RydWN0b3JfYm9keSIsIl9fZGVyaXZlZENsYXNzZXMiLCJyZWZlcmVuY2VDb252ZXJ0ZXIiLCJwb2ludGVyQ29udmVydGVyIiwiY29uc3RQb2ludGVyQ29udmVydGVyIiwicnVuRGVzdHJ1Y3RvcnMiLCJkZWwiLCJjcmFmdEludm9rZXJGdW5jdGlvbiIsImFyZ1R5cGVzIiwiY2xhc3NUeXBlIiwiY3BwSW52b2tlckZ1bmMiLCJjcHBUYXJnZXRGdW5jIiwiaXNBc3luYyIsImlzQ2xhc3NNZXRob2RGdW5jIiwibmVlZHNEZXN0cnVjdG9yU3RhY2siLCJyZXR1cm5zIiwiZXhwZWN0ZWRBcmdDb3VudCIsImFyZ3NXaXJlZCIsImludm9rZXJGdW5jQXJncyIsInRoaXNXaXJlZCIsIm9uRG9uZSIsInBhcmFtIiwiaGVhcDMyVmVjdG9yVG9BcnJheSIsImZpcnN0RWxlbWVudCIsImFycmF5IiwiX19lbWJpbmRfcmVnaXN0ZXJfY2xhc3NfY2xhc3NfZnVuY3Rpb24iLCJyYXdDbGFzc1R5cGUiLCJyYXdBcmdUeXBlc0FkZHIiLCJpbnZva2VyU2lnbmF0dXJlIiwicmF3SW52b2tlciIsInJhd0FyZ1R5cGVzIiwidW5ib3VuZFR5cGVzSGFuZGxlciIsIlN5bWJvbCIsInN1YnN0cmluZyIsImludm9rZXJBcmdzQXJyYXkiLCJzbGljZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJkZXJpdmVkQ2xhc3MiLCJ2YWxpZGF0ZVRoaXMiLCJ0aGlzXyIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NsYXNzX3Byb3BlcnR5IiwiZmllbGROYW1lIiwicmF3RmllbGRUeXBlIiwicmF3RmllbGRQdHIiLCJnZXR0ZXJTaWduYXR1cmUiLCJnZXR0ZXIiLCJzZXR0ZXJTaWduYXR1cmUiLCJzZXR0ZXIiLCJkZXNjIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInNldCIsInYiLCJkZWZpbmVQcm9wZXJ0eSIsImZpZWxkVHlwZSIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2NvbnN0cnVjdG9yIiwiaW52b2tlciIsInNwbGljZSIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX2Z1bmN0aW9uIiwiY29udGV4dCIsImlzUHVyZVZpcnR1YWwiLCJtZXRob2QiLCJjbGFzc05hbWUiLCJtZW1iZXJGdW5jdGlvbiIsIl9fZW1iaW5kX3JlZ2lzdGVyX2NsYXNzX3Byb3BlcnR5IiwiZ2V0dGVyUmV0dXJuVHlwZSIsImdldHRlckNvbnRleHQiLCJzZXR0ZXJBcmd1bWVudFR5cGUiLCJzZXR0ZXJDb250ZXh0IiwiSGFuZGxlQWxsb2NhdG9yIiwiYWxsb2NhdGVkIiwiZnJlZWxpc3QiLCJoYXMiLCJhbGxvY2F0ZSIsImZyZWUiLCJlbXZhbF9oYW5kbGVzIiwiX19lbXZhbF9kZWNyZWYiLCJyZXNlcnZlZCIsInJlZmNvdW50IiwiY291bnRfZW12YWxfaGFuZGxlcyIsImluaXRfZW12YWwiLCJ0b1ZhbHVlIiwiX19lbWJpbmRfcmVnaXN0ZXJfZW12YWwiLCJlbnVtUmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJzaWduZWQiLCJfX2VtYmluZF9yZWdpc3Rlcl9lbnVtIiwiaXNTaWduZWQiLCJjdG9yIiwidmFsdWVzIiwicmVxdWlyZVJlZ2lzdGVyZWRUeXBlIiwiaW1wbCIsIl9fZW1iaW5kX3JlZ2lzdGVyX2VudW1fdmFsdWUiLCJyYXdFbnVtVHlwZSIsImVudW1WYWx1ZSIsImVudW1UeXBlIiwiRW51bSIsIlZhbHVlIiwidCIsImZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIiLCJfX2VtYmluZF9yZWdpc3Rlcl9mbG9hdCIsImludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlciIsInJlYWRTOEZyb21Qb2ludGVyIiwicmVhZFU4RnJvbVBvaW50ZXIiLCJyZWFkUzE2RnJvbVBvaW50ZXIiLCJyZWFkVTE2RnJvbVBvaW50ZXIiLCJyZWFkUzMyRnJvbVBvaW50ZXIiLCJyZWFkVTMyRnJvbVBvaW50ZXIiLCJfX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyIiwiYml0c2hpZnQiLCJpc1Vuc2lnbmVkVHlwZSIsImNoZWNrQXNzZXJ0aW9ucyIsInRvVHlwZU5hbWUiLCJfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldyIsImRhdGFUeXBlSW5kZXgiLCJ0eXBlTWFwcGluZyIsIlRBIiwiZGVjb2RlTWVtb3J5VmlldyIsImRhdGEiLCJzdHJpbmdUb1VURjhBcnJheSIsIm91dElkeCIsIm1heEJ5dGVzVG9Xcml0ZSIsInN0YXJ0SWR4IiwidSIsInN0cmluZ1RvVVRGOCIsIm91dFB0ciIsImxlbmd0aEJ5dGVzVVRGOCIsImxlbiIsIl9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF9zdHJpbmciLCJzdGRTdHJpbmdJc1VURjgiLCJwYXlsb2FkIiwiZGVjb2RlU3RhcnRQdHIiLCJjdXJyZW50Qnl0ZVB0ciIsIm1heFJlYWQiLCJzdHJpbmdTZWdtZW50IiwiYSIsIkFycmF5QnVmZmVyIiwidmFsdWVJc09mVHlwZVN0cmluZyIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiX21hbGxvYyIsImNoYXJDb2RlIiwiVVRGMTZEZWNvZGVyIiwiVVRGMTZUb1N0cmluZyIsIm1heElkeCIsImNvZGVVbml0Iiwic3RyaW5nVG9VVEYxNiIsInN0YXJ0UHRyIiwibnVtQ2hhcnNUb1dyaXRlIiwibGVuZ3RoQnl0ZXNVVEYxNiIsIlVURjMyVG9TdHJpbmciLCJ1dGYzMiIsInN0cmluZ1RvVVRGMzIiLCJ0cmFpbFN1cnJvZ2F0ZSIsImxlbmd0aEJ5dGVzVVRGMzIiLCJfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZyIsImNoYXJTaXplIiwiZGVjb2RlU3RyaW5nIiwiZW5jb2RlU3RyaW5nIiwiZ2V0SGVhcCIsImxlbmd0aEJ5dGVzVVRGIiwiSEVBUCIsIm1heFJlYWRCeXRlcyIsIl9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQiLCJpc1ZvaWQiLCJfX2VtdmFsX2FzIiwicmV0dXJuVHlwZSIsImRlc3RydWN0b3JzUmVmIiwicmQiLCJfX2VtdmFsX2luY3JlZiIsIl9fZW12YWxfcnVuX2Rlc3RydWN0b3JzIiwiX19lbXZhbF90YWtlX3ZhbHVlIiwiYXJnIiwiX2Fib3J0IiwiX2Vtc2NyaXB0ZW5fbWVtY3B5X2JpZyIsImRlc3QiLCJudW0iLCJjb3B5V2l0aGluIiwiZ2V0SGVhcE1heCIsImVtc2NyaXB0ZW5fcmVhbGxvY19idWZmZXIiLCJwYWdlcyIsImJ5dGVMZW5ndGgiLCJncm93IiwiX2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXAiLCJyZXF1ZXN0ZWRTaXplIiwib2xkU2l6ZSIsIm1heEhlYXBTaXplIiwiYWxpZ25VcCIsIngiLCJtdWx0aXBsZSIsImN1dERvd24iLCJvdmVyR3Jvd25IZWFwU2l6ZSIsIk1hdGgiLCJtaW4iLCJuZXdTaXplIiwibWF4IiwicmVwbGFjZW1lbnQiLCJfZmRfY2xvc2UiLCJfZmRfcmVhZCIsImlvdiIsImlvdmNudCIsInBudW0iLCJfZmRfc2VlayIsIm9mZnNldF9sb3ciLCJvZmZzZXRfaGlnaCIsIndoZW5jZSIsIm5ld09mZnNldCIsInByaW50Q2hhckJ1ZmZlcnMiLCJwcmludENoYXIiLCJzdHJlYW0iLCJjdXJyIiwiX2ZkX3dyaXRlIiwiaiIsIl9zcGluZUxpc3RlbmVyQ2FsbEJhY2tGcm9tSlMiLCJ3YXNtVXRpbCIsImxpc3RlbmVySUQiLCJnZXRDdXJyZW50TGlzdGVuZXJJRCIsInRyYWNrRW50cnkiLCJnZXRDdXJyZW50VHJhY2tFbnRyeSIsImV2ZW50IiwiZ2V0Q3VycmVudEV2ZW50IiwiZXZlbnRUeXBlIiwiZ2V0Q3VycmVudEV2ZW50VHlwZSIsImdsb2JhbFRoaXMiLCJUcmFja0VudHJ5TGlzdGVuZXJzIiwiZW1pdExpc3RlbmVyIiwiX3NwaW5lVHJhY2tMaXN0ZW5lckNhbGxiYWNrIiwiZW1pdFRyYWNrRW50cnlMaXN0ZW5lciIsImNhbGxlZFJ1biIsInJ1bkNhbGxlciIsInJ1biIsImRvUnVuIiwic2V0VGltZW91dCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSUEsVUFBQUEsU0FBUyxzQkFBSSxZQUFNO01BQ3JCLEVBQUEsSUFBSUMsVUFBVSxHQUFHLE9BQU9DLFFBQVEsS0FBSyxXQUFXLElBQUlBLFFBQVEsQ0FBQ0MsYUFBYSxHQUFHRCxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsR0FBRyxHQUFHQyxTQUFTLENBQUE7UUFFbkgsT0FDRixVQUFTTCxTQUFTLEVBQVE7TUFBQSxJQUFBLElBQWpCQSxTQUFTLEtBQUEsS0FBQSxDQUFBLEVBQUE7WUFBVEEsU0FBUyxHQUFHLEVBQUUsQ0FBQTtNQUFBLEtBQUE7VUFFdkIsSUFBSU0sTUFBTSxHQUFDLE9BQU9OLFNBQVMsSUFBRSxXQUFXLEdBQUNBLFNBQVMsR0FBQyxFQUFFLENBQUE7VUFBQyxJQUFJTyxtQkFBbUIsRUFBQ0Msa0JBQWtCLENBQUE7VUFBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFDLElBQUlHLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUNDLE1BQU0sRUFBRztNQUFDSixNQUFBQSxtQkFBbUIsR0FBQ0csT0FBTyxDQUFBO01BQUNGLE1BQUFBLGtCQUFrQixHQUFDRyxNQUFNLENBQUE7TUFBQSxLQUFDLENBQUMsQ0FBQTtVQUFDLElBQUlDLGVBQWUsR0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFDUixNQUFNLENBQUMsQ0FBQTtVQUFnRyxJQUFJUyxrQkFBa0IsR0FBQyxJQUFJLENBQUE7VUFBaUMsSUFBSUMsZUFB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Q0MsR0FBRyxFQUFFLENBQUMsR0FBQyxFQUFFLENBQUE7TUFBQyxRQUFBLElBQUcsQ0FBQ08sRUFBRSxHQUFDLEdBQUcsS0FBRyxHQUFHLEVBQUM7TUFBQ0QsVUFBQUEsR0FBRyxJQUFFRSxNQUFNLENBQUNDLFlBQVksQ0FBQyxDQUFDRixFQUFFLEdBQUMsRUFBRSxLQUFHLENBQUMsR0FBQ0csRUFBRSxDQUFDLENBQUE7TUFBQyxVQUFBLFNBQUE7TUFBUSxTQUFBO2NBQUMsSUFBSUMsRUFBRSxHQUFDWixXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDLEdBQUMsRUFBRSxDQUFBO01BQUMsUUFBQSxJQUFHLENBQUNPLEVBQUUsR0FBQyxHQUFHLEtBQUcsR0FBRyxFQUFDO01BQUNBLFVBQUFBLEVBQUUsR0FBQyxDQUFDQSxFQUFFLEdBQUMsRUFBRSxLQUFHLEVBQUUsR0FBQ0csRUFBRSxJQUFFLENBQUMsR0FBQ0MsRUFBRSxDQUFBO01BQUEsU0FBQyxNQUFJO2dCQUFDSixFQUFFLEdBQUMsQ0FBQ0EsRUFBRSxHQUFDLENBQUMsS0FBRyxFQUFFLEdBQUNHLEVBQUUsSUFBRSxFQUFFLEdBQUNDLEVBQUUsSUFBRSxDQUFDLEdBQUNaLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLENBQUMsR0FBQyxFQUFFLENBQUE7TUFBQSxTQUFBO2NBQUMsSUFBR08sRUFBRSxHQUFDLEtBQUssRUFBQztNQUFDRCxVQUFBQSxHQUFHLElBQUVFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDRixFQUFFLENBQUMsQ0FBQTtNQUFBLFNBQUMsTUFBSTtNQUFDLFVBQUEsSUFBSUssRUFBRSxHQUFDTCxFQUFFLEdBQUMsS0FBSyxDQUFBO01BQUNELFVBQUFBLEdBQUcsSUFBRUUsTUFBTSxDQUFDQyxZQUFZLENBQUMsS0FBSyxHQUFDRyxFQUFFLElBQUUsRUFBRSxFQUFDLEtBQUssR0FBQ0EsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFBO01BQUEsU0FBQTtNQUFDLE9BQUE7TUFBQyxNQUFBLE9BQU9OLEdBQUcsQ0FBQTtNQUFBLEtBQUE7TUFBQyxJQUFB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
