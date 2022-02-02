/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 784:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const oracledb = __nccwpck_require__(598);

const main = async(inputs, auths, context) => {
  
  const query =  inputs.query
  const parameters =  inputs.parameters
  const { connectionString, port, username, password, database } = inputs
  
  let connection = await oracledb.getConnection({
    user: username,
    password,
    connectString: connectionString
  })
  let res = null
  if(parameters && parameters.length >0){
    res = await connection.execute(query, parameters)
  }else{
    res = await connection.execute(query)
  }
  output.data = res
  return output
}

module.exports.main = main

/***/ }),

/***/ 598:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(309);


/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



class AqDeqOptions {

  _extend(oracledb) { //eslint-disable-line
  }

}

module.exports = AqDeqOptions;


/***/ }),

/***/ 924:
/***/ ((module) => {

"use strict";
// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



class AqEnqOptions {

  _extend(oracledb) { //eslint-disable-line
  }

}

module.exports = AqEnqOptions;


/***/ }),

/***/ 754:
/***/ ((module) => {

"use strict";
// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



class AqMessage {

  _extend(oracledb) { //eslint-disable-line
  }

}

module.exports = AqMessage;


/***/ }),

/***/ 394:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2019, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// deqOne()
//   Returns a single message from the queue, if one is available.
//-----------------------------------------------------------------------------
async function deqOne() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._deqOne();
}


//-----------------------------------------------------------------------------
// deqMany()
//   Returns an array of messages from the queue, up to the maximum specified,
// if any are available.
//----------------------------------------------------------------------------
async function deqMany(maxMessages) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof maxMessages === 'number', 'NJS-005', 1);
  return await this._deqMany(maxMessages);
}


//-----------------------------------------------------------------------------
// enqOne()
//   Enqueues a single message into the queue.
//-----------------------------------------------------------------------------
async function enqOne(message) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof message === 'object' || typeof message === 'string',
    'NJS-005', 1);
  return await this._enqOne(message);
}


//-----------------------------------------------------------------------------
// enqMany()
//   Enqueues multiple messages into the queue at the same time, avoiding
// multiple round-trips.
//----------------------------------------------------------------------------
async function enqMany(messages) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(Array.isArray(messages), 'NJS-005', 1);
  return await this._enqMany(messages);
}


class AqQueue {

  _extend() {
    this.deqOne = nodbUtil.callbackify(nodbUtil.serialize(deqOne));
    this.deqMany = nodbUtil.callbackify(nodbUtil.serialize(deqMany));
    this.enqOne = nodbUtil.callbackify(nodbUtil.serialize(enqOne));
    this.enqMany = nodbUtil.callbackify(nodbUtil.serialize(enqMany));
  }

  _getConnection() {
    return this._connection;
  }

}

module.exports = AqQueue;


/***/ }),

/***/ 257:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* module decorator */ module = __nccwpck_require__.nmd(module);
// Copyright (c) 2016, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const BaseDbObject = __nccwpck_require__(361);
const EventEmitter = __nccwpck_require__(614);
const QueryStream = __nccwpck_require__(837);
const nodbUtil = __nccwpck_require__(960);
const util = __nccwpck_require__(669);

//-----------------------------------------------------------------------------
// execute()
//   Executes a SQL statement and returns the results.
//-----------------------------------------------------------------------------
async function execute(sql, a2, a3) {
  let binds = [];
  let executeOpts = {};

  nodbUtil.checkArgCount(arguments, 1, 3);
  nodbUtil.assert(typeof sql === 'string', 'NJS-005', 1);

  switch (arguments.length) {
    case 2:
      nodbUtil.assert(nodbUtil.isObjectOrArray(a2), 'NJS-005', 2);
      binds = a2;
      break;
    case 3:
      nodbUtil.assert(nodbUtil.isObjectOrArray(a2), 'NJS-005', 2);
      nodbUtil.assert(nodbUtil.isObject(a3), 'NJS-005', 3);
      binds = a2;
      executeOpts = a3;
      break;
  }

  const result = await this._execute(sql, binds, executeOpts);

  // process queries; if a result set is not desired, fetch all of the rows
  // from the result set and then destroy the result set
  if (result.resultSet && !executeOpts.resultSet) {
    result.rows = await result.resultSet._getAllRows(executeOpts, result);
    delete result.resultSet;
  }

  // process implicit results; ensure all implicit results have their fetch
  // array size fixed, or, if a result set is not requested, that all rows are
  // fetched
  if (result.implicitResults) {
    for (const key in result.implicitResults) {
      const implicitResult = result.implicitResults[key];
      if (!executeOpts.resultSet) {
        result.implicitResults[key] =
            await implicitResult._getAllRows(executeOpts);
      }
    }
  }

  return (result);
}


//-----------------------------------------------------------------------------
// executeMany()
//   Executes a SQL statement multiple times and returns the results.
//-----------------------------------------------------------------------------
async function executeMany(sql, bindsOrNumIters, a3) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 2, 3);
  nodbUtil.assert(typeof sql === 'string', 'NJS-005', 1);
  if (typeof bindsOrNumIters === 'number') {
    nodbUtil.assert(Number.isInteger(bindsOrNumIters), 'NJS-005', 2);
    nodbUtil.assert(bindsOrNumIters > 0, 'NJS-005', 2);
  } else {
    nodbUtil.assert(Array.isArray(bindsOrNumIters), 'NJS-005', 2);
    nodbUtil.assert(bindsOrNumIters.length > 0, 'NJS-005', 2);
  }

  if (arguments.length == 3) {
    nodbUtil.assert(nodbUtil.isObject(a3), 'NJS-005', 3);
    options = a3;
  }

  return (await this._executeMany(sql, bindsOrNumIters, options));
}


//-----------------------------------------------------------------------------
// getDbObjectClass()
//   Returns a database object class given its name. The cache is searched
// first, but if not found, the database is queried and the result is cached
// using the fully qualified name.
//-----------------------------------------------------------------------------
async function getDbObjectClass(name) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);

  let cls = this._dbObjectClasses[name];
  if (cls) {
    return cls;
  }
  return (await this._getDbObjectClass(name));
}


//-----------------------------------------------------------------------------
// getStatementInfo()
//   Returns information about the statement.
//-----------------------------------------------------------------------------
async function getStatementInfo(sql) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  return (await this._getStatementInfo(sql));
}


//-----------------------------------------------------------------------------
// commit()
//   Commits the current transaction.
//-----------------------------------------------------------------------------
async function commit() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._commit();
}


//-----------------------------------------------------------------------------
// createLob()
//   Creates a temporary LOB and returns it to the caller.
//-----------------------------------------------------------------------------
async function createLob(type) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof type === 'number', 'NJS-005', 1);
  return (await this._createLob(type));
}


//-----------------------------------------------------------------------------
// rollback()
//   Rolls back the current transaction.
//-----------------------------------------------------------------------------
async function rollback() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._rollback();
}


//-----------------------------------------------------------------------------
// close()
//   Closes the connection and makes it unusable for further work.
//-----------------------------------------------------------------------------
async function close(a1) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 1) {
    nodbUtil.assert(nodbUtil.isObject(a1), 'NJS-005', 1);
    options = a1;
  }
  await this._close(options);
  for (const cls of Object.values(this._dbObjectClasses)) {
    cls.prototype.constructor = Object;
    cls.prototype = null;
  }
  this.emit('_afterConnClose');
}


//-----------------------------------------------------------------------------
// break()
//   Breaks the execution of the statement.
//-----------------------------------------------------------------------------
module.break = async function() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._break();
};


//-----------------------------------------------------------------------------
// changePassword()
//   Changes the password of the specified user.
//-----------------------------------------------------------------------------
async function changePassword(user, password, newPassword) {
  nodbUtil.checkArgCount(arguments, 3, 3);
  nodbUtil.assert(typeof user === 'string', 'NJS-005', 1);
  nodbUtil.assert(typeof password === 'string', 'NJS-005', 2);
  nodbUtil.assert(typeof newPassword === 'string', 'NJS-005', 3);
  await this._changePassword(user, password, newPassword);
}


//-----------------------------------------------------------------------------
// getQueue()
//   Returns a queue with the specified name.
//-----------------------------------------------------------------------------
async function getQueue(name, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);
  if (arguments.length == 2) {
    nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
    options = a2;
  }
  return (await this._getQueue(name, options));
}


//-----------------------------------------------------------------------------
// ping()
//   Sends a "ping" to the database to see if it is "alive".
//-----------------------------------------------------------------------------
async function ping() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._ping();
}


//-----------------------------------------------------------------------------
// shutdown()
//   Shuts down the database instance.
//-----------------------------------------------------------------------------
async function shutdown(a1) {
  let mode = this._oracledb.SHUTDOWN_MODE_DEFAULT;

  nodbUtil.checkArgCount(arguments, 0, 1);
  if (a1 !== undefined) {
    nodbUtil.assert(typeof mode === 'number', 'NJS-005', 1);
    mode = a1;
  }

  await this._shutdown(mode);
}


//-----------------------------------------------------------------------------
// startup()
//   Starts up the database instance.
//-----------------------------------------------------------------------------
async function startup(a1) {
  let opts = {};

  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 1) {
    nodbUtil.assert(typeof opts === 'object', 'NJS-005', 1);
    opts = a1;
  }

  await this._startup(opts);
}


//-----------------------------------------------------------------------------
// subscribe()
//   Creates a subscription which can be used to get notifications of database
// changes or of AQ messages available to dequeue.
//-----------------------------------------------------------------------------
async function subscribe(name, options) {
  nodbUtil.checkArgCount(arguments, 2, 2);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);
  nodbUtil.assert(nodbUtil.isObject(options), 'NJS-005', 2);
  await this._subscribe(name, options);
}


//-----------------------------------------------------------------------------
// unsubscribe()
//   Destroy a subscription which was earlier created using subscribe().
//-----------------------------------------------------------------------------
async function unsubscribe(name) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);
  await this._unsubscribe(name);
}

// build a database object class
function buildDbObjectClass(schema, name, fqn) {
  const DbObject = function(initialValue) {
    if (this.isCollection) {
      const proxy = new Proxy(this, BaseDbObject._collectionProxyHandler);
      if (initialValue !== undefined) {
        for (let i = 0; i < initialValue.length; i++) {
          this.append(initialValue[i]);
        }
      }
      return (proxy);
    } else if (initialValue !== undefined) {
      Object.assign(this, initialValue);
    }
  };
  DbObject.prototype = Object.create(BaseDbObject.prototype);
  DbObject.prototype.constructor = DbObject;
  DbObject.prototype.schema = schema;
  DbObject.prototype.name = name;
  DbObject.prototype.fqn = fqn;
  DbObject.toString = function() {
    return ('DbObjectClass [' + fqn + ']');
  };
  return (DbObject);
}


// define class
class Connection extends EventEmitter {

  constructor() {
    super();
    this._dbObjectClasses = {};
    this._requestQueue = [];
    this._inProgress = false;
  }

  // extend class with promisified functions
  _extend(oracledb) {
    this._oracledb = oracledb;
    this.break = nodbUtil.callbackify(module.break);  // should not be serialized
    this.changePassword = nodbUtil.callbackify(nodbUtil.serialize(changePassword));
    this.close = nodbUtil.callbackify(nodbUtil.serialize(close));
    this.commit = nodbUtil.callbackify(nodbUtil.serialize(commit));
    this.createLob = nodbUtil.callbackify(nodbUtil.serialize(createLob));
    this.execute = nodbUtil.callbackify(nodbUtil.serialize(execute));
    this.executeMany = nodbUtil.callbackify(nodbUtil.serialize(executeMany));
    this.getDbObjectClass = nodbUtil.callbackify(nodbUtil.serialize(getDbObjectClass));
    this.getQueue = nodbUtil.callbackify(nodbUtil.serialize(getQueue));
    this.getStatementInfo = nodbUtil.callbackify(nodbUtil.serialize(getStatementInfo));
    this.ping = nodbUtil.callbackify(nodbUtil.serialize(ping));
    this.release = nodbUtil.callbackify(nodbUtil.serialize(close));
    this.rollback = nodbUtil.callbackify(nodbUtil.serialize(rollback));
    this.shutdown = nodbUtil.callbackify(nodbUtil.serialize(shutdown));
    this.startup = nodbUtil.callbackify(nodbUtil.serialize(startup));
    this.subscribe = nodbUtil.callbackify(nodbUtil.serialize(subscribe));
    this.unsubscribe = nodbUtil.callbackify(nodbUtil.serialize(unsubscribe));
  }

  async _acquireLock() {
    if (this._inProgress) {
      if (this._oracledb.errorOnConcurrentExecute) {
        throw new Error(nodbUtil.getErrorMessage('NJS-081'));
      }
      await new Promise((resolve, reject) => {
        const payload = {resolve: resolve, reject: reject};
        this._requestQueue.push(payload);
      });
    }
    this._inProgress = true;
  }

  _getConnection() {
    return this;
  }

  _getDbObjectClassJS(schema, name) {
    const fqn = `${schema}.${name}`;
    let cls = this._dbObjectClasses[fqn];
    if (!cls) {
      cls = buildDbObjectClass(schema, name, fqn);
      cls._connection = this;
      this._dbObjectClasses[fqn] = cls;
    }
    return (cls);
  }

  _isDate(val) {
    return (util.isDate(val));
  }

  _releaseLock() {
    if (this._requestQueue.length > 0) {
      const payload = this._requestQueue.shift();
      payload.resolve();
    } else {
      this._inProgress = false;
    }
  }

  // To obtain a SodaDatabase object (high-level SODA object associated with
  // current connection)
  getSodaDatabase() {
    nodbUtil.checkArgCount(arguments, 0, 0);
    return (this._getSodaDatabase());
  }

  // The queryStream function is similar to execute except that it immediately
  // returns a QueryStream.
  queryStream(sql, binding, options) {

    nodbUtil.checkArgCount(arguments, 1, 3);
    nodbUtil.assert(typeof sql === 'string', 'NJS-005', 1);

    if (binding) {
      nodbUtil.assert(nodbUtil.isObjectOrArray(binding), 'NJS-005', 2);
    }

    if (options) {
      nodbUtil.assert(nodbUtil.isObject(options), 'NJS-005', 3);
    }

    binding = binding || [];
    options = options || {};

    options.resultSet = true;

    const stream = new QueryStream();

    // calling execute() via nextTick to ensure that handlers are registered
    // prior to the events being emitted
    process.nextTick(() => {
      try {
        const p = this._execute(sql, binding, options);
        p.then(function(result) {
          if (!result.resultSet) {
            stream.destroy(new Error(nodbUtil.getErrorMessage('NJS-019')));
          } else {
            stream._open(result.resultSet);
          }
        }, function(err) {
          stream.destroy(err);
        });
      } catch (err) {
        stream.destroy(err);
        return;
      }
    });

    return (stream);
  }

}


// module.exports.extend = extend;
module.exports = Connection;


/***/ }),

/***/ 361:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2019, 2021, Oracle and/or its affiliates.  All rights reserved.
//
//----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const util = __nccwpck_require__(669);

// define base database object class; instances of this class are never
// instantiated; instead, classes subclassed from this one will be
// instantiated; a cache of these classes are maintained on each connection
class BaseDbObject {

  // extend class with promisified functions
  _extend(oracledb) {
    this._oracledb = oracledb;
  }

  // initialize object with value
  _initialize(initialValue) {
    if (this.isCollection) {
      for (let i = 0; i < initialValue.length; i++) {
        this.append(initialValue[i]);
      }
    } else {
      Object.assign(this, initialValue);
    }
  }

  // return as a plain object
  _toPojo() {
    if (this.isCollection) {
      const result = this.getValues();
      if (this.elementType == this._oracledb.DB_TYPE_OBJECT) {
        for (let i = 0; i < result.length; i++) {
          result[i] = result[i]._toPojo();
        }
      }
      return (result);
    }
    const result = {};
    for (let name in this.attributes) {
      let value = this[name];
      if (value instanceof BaseDbObject) {
        value = value._toPojo();
      }
      result[name] = value;
    }
    return (result);
  }

  // custom inspection routine
  [util.inspect.custom](depth, options) {
    return ('[' + this.fqn + '] ' + util.inspect(this._toPojo(), options));
  }

  [Symbol.iterator]() {
    if (this.isCollection) {
      const values = this.getValues();
      return (values[Symbol.iterator]());
    }
    throw TypeError("obj is not iterable");
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return (NaN);
      default:
        return ('[' + this.fqn + '] ' + util.inspect(this._toPojo(), {}));
    }
  }

  get [Symbol.toStringTag]() {
    return (this.fqn);
  }

  toJSON() {
    return (this._toPojo());
  }

}


// define proxy handler used for collections
BaseDbObject._collectionProxyHandler = {

  deleteProperty(target, prop) {
    if (typeof prop === 'string') {
      const index = +prop;
      if (!isNaN(index)) {
        return (target.deleteElement(index));
      }
    }
    return (delete target[prop]);
  },

  get(target, prop) {
    if (typeof prop === 'string') {

      // when binding collections, we must be consistent in getting the target
      // of the proxy, since napi_wrap() called on the proxy will not be
      // available when calling napi_unwrap() on the target; this property
      // forces the target to get returned
      if (prop === '_target') {
        return (target);
      }
      const index = +prop;
      if (!isNaN(index)) {
        return (target.getElement(index));
      }
    }
    const value = target[prop];
    if (typeof value === 'function') {
      return (value.bind(target));
    }
    return (value);
  },

  set(target, prop, value) {
    if (typeof prop === 'string') {
      const index = +prop;
      if (!isNaN(index)) {
        target.setElement(index, value);
        return (true);
      }
    }
    target[prop] = value;
    return (true);
  }

};


module.exports = BaseDbObject;


/***/ }),

/***/ 926:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2016, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const { Duplex } = __nccwpck_require__(413);
const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// close()
//   Close the LOB and make it unusable for further operations. If the LOB is
// already closed, nothing is done in order to support multiple close() calls.
//
//   This method is deprecated and will be removed in a future version of the
// node-oracledb driver. Use lob.destroy() instead. NOTE: this method will
// emit a duplicate "close" event in order to be compatible with previous
// versions of node-oracledb.
//-----------------------------------------------------------------------------
async function close() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  if (this.valid) {
    try {
      await this._close();
      this.emit('close');
    } catch (err) {
      this.destroy(err);
    }
  }
}


//-----------------------------------------------------------------------------
// getData()
//   Returns all of the data in the LOB as a single string or buffer.
//-----------------------------------------------------------------------------
async function getData() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getData();
}


class Lob extends Duplex {

  constructor() {
    super({ decodeStrings: false });
    this.offset = 1;
    this._isActive = false;
    this.once('finish', function() {
      if (this._autoCloseLob) {
        this.destroy();
      }
    });
  }

  _extend(oracledb) {
    this._oracledb = oracledb;
    this.close = nodbUtil.callbackify(nodbUtil.preventConcurrent(nodbUtil.serialize(close), 'NJS-023'));
    this.getData = nodbUtil.callbackify(nodbUtil.preventConcurrent(nodbUtil.serialize(getData), 'NJS-023'));
    this._serializedRead = nodbUtil.serialize(this.__read);
    this._serializedWrite = nodbUtil.serialize(this.__write);
  }

  // called by stream.destroy() and ensures that the LOB is closed if it has
  // not already been closed (never called directly)
  async _destroy(err, cb) {
    if (this.valid) {
      try {
        await this._close();
      } catch (closeErr) {
        cb(closeErr);
        return;
      }
    }
    cb(err);
  }

  // return the connection associated with the LOB (used for serializing
  // accesses to the connection)
  _getConnection() {
    let connection = this._parentObj;
    while (!(connection instanceof this._oracledb.Connection))
      connection = connection._parentObj;
    return connection;
  }

  // implementation of streaming read; if lob is set to auto-close, the lob is
  // automatically closed within the C code when an error occurs or when there
  // are no more bytes to transfer; all that needs to be done in the JS layer
  // is to destroy the streaming LOB
  async _read() {
    try {
      const data = await this._serializedRead(this.offset);
      if (data) {
        this.offset += data.length;
        this.push(data);
      } else {
        this.push(null);
        if (this._autoCloseLob) {
          this.destroy();
        }
      }
    } catch (err) {
      this.destroy(err);
    }
  }

  // implementation of streaming write; if lob is set to auto-close, the lob is
  // automatically closed in the "finish" event; all that needs to be done here
  // is to destroy the streaming LOB
  async _write(data, encoding, cb) {

    // convert data if needed
    if (this.type == this._oracledb.DB_TYPE_BLOB && !Buffer.isBuffer(data)) {
      data = Buffer.from(data);
    } else if (this.type == this._oracledb.DB_TYPE_CLOB &&
        Buffer.isBuffer(data)) {
      data = data.toString();
    }

    try {
      await this._serializedWrite(this.offset, data);
    } catch (err) {
      cb(err);
      this.destroy(err);
      return;
    }
    this.offset += data.length;
    cb(null);

  }

}

module.exports = Lob;


/***/ }),

/***/ 309:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2015, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);
const util = __nccwpck_require__(669);

// This version of node-oracledb works with Node.js 8.16, 10.16 or
// later.  The test stops hard-to-interpret runtime errors and crashes
// with older Node.js versions.  Also Node.js 8.16 and 10.16 (and
// 12.0) contain an important Node-API performance regression fix.  If
// you're using the obsolete Node.js 9 or 11 versions, you're on your
// own regarding performance and functionality
let vs = process.version.substring(1).split(".").map(Number);
if (vs[0] < 8 || (vs[0] === 8 && vs[1] < 16)) {
  throw new Error(nodbUtil.getErrorMessage('NJS-069', nodbUtil.PACKAGE_JSON_VERSION, "8.16"));
} else if ((vs[0] === 10 && vs[1] < 16)) {
  throw new Error(nodbUtil.getErrorMessage('NJS-069', nodbUtil.PACKAGE_JSON_VERSION, "10.16"));
}

const AqDeqOptions = __nccwpck_require__(280);
const AqEnqOptions = __nccwpck_require__(924);
const AqMessage = __nccwpck_require__(754);
const AqQueue = __nccwpck_require__(394);
const BaseDbObject = __nccwpck_require__(361);
const Connection = __nccwpck_require__(257);
const Lob = __nccwpck_require__(926);
const Pool = __nccwpck_require__(898);
const ResultSet = __nccwpck_require__(343);
const SodaDatabase = __nccwpck_require__(213);
const SodaCollection = __nccwpck_require__(507);
const SodaDocCursor = __nccwpck_require__(859);
const SodaDocument = __nccwpck_require__(936);
const SodaOperation = __nccwpck_require__(757);

let poolCache = {};
let tempUsedPoolAliases = {};
const defaultPoolAlias = 'default';

// Load the Oracledb binary

/*global __non_webpack_require__*/  // quieten eslint
const requireBinary = (typeof require === 'function') ? eval("require") : require; // See Issue 1156

const binaryLocations = [
  '../' + nodbUtil.RELEASE_DIR + '/' + nodbUtil.BINARY_FILE,  // pre-built binary
  '../' + nodbUtil.RELEASE_DIR + '/' + 'oracledb.node',       // binary built from source
  '../build/Debug/oracledb.node',                             // debug binary
  // For Webpack.  A Webpack copy plugin is still needed to copy 'node_modules/oracledb/build/' to the output directory
  // See https://github.com/oracle/node-oracledb/issues/1156
  './node_modules/oracledb/' + nodbUtil.RELEASE_DIR + '/' + nodbUtil.BINARY_FILE,
  './node_modules/oracledb/' + nodbUtil.RELEASE_DIR + '/' + 'oracledb.node'
];

let oracledbCLib;
for (let i = 0; i < binaryLocations.length; i++) {
  try {
    oracledbCLib = requireBinary(binaryLocations[i]);
    break;
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND' || i == binaryLocations.length - 1) {
      let nodeInfo;
      if (err.code === 'MODULE_NOT_FOUND') {
        // A binary was not found in any of the search directories.
        // Note this message may not be accurate for Webpack users since Webpack changes __dirname
        nodeInfo = `\n  Looked for ${binaryLocations.map(x => __nccwpck_require__(622).resolve(__dirname, x)).join(', ')}\n  ${nodbUtil.getInstallURL()}\n`;
      } else {
        nodeInfo = `\n  Node.js require('oracledb') error was:\n  ${err.message}\n  ${nodbUtil.getInstallHelp()}\n`;
      }
      throw new Error(nodbUtil.getErrorMessage('NJS-045', nodeInfo));
    }
  }
}


class OracleDb {

  constructor() {
    this.queueTimeout = 60000;
    this.queueMax     = 500;
    this.errorOnConcurrentExecute = false;
  }

  // extend class with promisified functions
  _extend() {
    this.getConnection = nodbUtil.callbackify(getConnection);
    this.createPool = nodbUtil.callbackify(createPool);
    this.shutdown = nodbUtil.callbackify(shutdown);
    this.startup = nodbUtil.callbackify(startup);
  }

  // temporary method for determining if an object is a date until
  // napi_is_date() can be used (when Node-API v5 can be used)
  _isDate(val) {
    return util.isDate(val);
  }

  // retrieves a pool from the pool cache (synchronous method)
  getPool(poolAlias) {
    let pool;

    nodbUtil.checkArgCount(arguments, 0, 1);

    if (poolAlias) {
      nodbUtil.assert(typeof poolAlias === 'string' || typeof poolAlias === 'number', 'NJS-005', 1);
    }

    poolAlias = poolAlias || defaultPoolAlias;

    pool = poolCache[poolAlias];

    if (!pool) {
      throw new Error(nodbUtil.getErrorMessage('NJS-047', poolAlias));
    }

    return pool;
  }

  initOracleClient(arg1) {
    let options = {};
    nodbUtil.checkArgCount(arguments, 0, 1);
    if (arg1 !== undefined) {
      nodbUtil.assert(nodbUtil.isObject(arg1), 'NJS-005', 1);
      options = arg1;
    }
    this._initOracleClient(options);
  }

}

// Oracledb functions and classes

//-----------------------------------------------------------------------------
// createPool()
//   Create a pool with the specified options and return it to the caller.
//-----------------------------------------------------------------------------
async function createPool(poolAttrs) {
  let poolAlias;

  // check arguments
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(poolAttrs), 'NJS-005', 1);
  if (poolAttrs.poolAlias !== undefined) {
    if (typeof poolAttrs.poolAlias !== 'string' ||
        poolAttrs.poolAlias.length === 0) {
      throw new Error(nodbUtil.getErrorMessage('NJS-004',
        'poolAttrs.poolAlias'));
    }
    poolAlias = poolAttrs.poolAlias;
  } else if (poolAttrs.poolAlias === undefined
      && !poolCache[defaultPoolAlias]
      && !tempUsedPoolAliases[defaultPoolAlias]) {
    poolAlias = defaultPoolAlias;
  }
  if (poolCache[poolAlias] || tempUsedPoolAliases[poolAlias]) {
    throw new Error(nodbUtil.getErrorMessage('NJS-046', poolAlias));
  }

  // create an adjusted set of pool attributes to pass to the C layer; the
  // session callback must be removed if it is a JavaScript function and the
  // queue timeout is used to specify the maximum amount of time that the C
  // layer will wait for a connection to be returned; ordinarily since the
  // JavaScript layer never calls the C layer to get a connection unless one is
  // known to be available, this should not be needed, but in some cases (such
  // as when the maximum for a particular shard is specified) this may not be
  // known, so this prevents an unnecessarily long wait from taking place
  const adjustedPoolAttrs = Object.defineProperties({},
    Object.getOwnPropertyDescriptors(poolAttrs));
  if (typeof poolAttrs.sessionCallback === 'function') {
    delete adjustedPoolAttrs.sessionCallback;
  }
  if (adjustedPoolAttrs.queueTimeout === undefined) {
    adjustedPoolAttrs.queueTimeout = this.queueTimeout;
  }

  // Need to prevent another call in the same stack from succeeding, otherwise
  // two pools could be created with the same poolAlias and the second one that
  // comes back would overwrite the first in the cache.
  if (poolAlias) {
    tempUsedPoolAliases[poolAlias] = true;
  }

  try {
    const pool = await this._createPool(adjustedPoolAttrs);

    if (poolAlias) {
      poolCache[poolAlias] = pool;

      // It's now safe to remove this alias from the tempUsedPoolAliases.
      delete tempUsedPoolAliases[poolAlias];
    }

    pool._setup(poolAttrs, poolAlias, this);
    pool.on('_afterPoolClose', () => {
      if (pool.poolAlias) {
        delete poolCache[pool.poolAlias];
      }
    });

    return pool;

  } catch (err) {

    // We need to free this up since the creation of the pool failed.
    if (poolAlias) {
      delete tempUsedPoolAliases[poolAlias];
    }

    // add installation help instructions to error message, if applicable
    if (err.message.match(/DPI-1047/)) {
      err.message += "\n" + nodbUtil.getInstallHelp();
    }

    throw err;
  }
}


//-----------------------------------------------------------------------------
// getConnection()
//   Gets either a standalone connection, or a connection from a pool cache
//-----------------------------------------------------------------------------
async function getConnection(a1) {
  let pool;
  let poolAlias;
  let connAttrs = {};

  // verify the number and types of arguments
  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 0) {
    poolAlias = defaultPoolAlias;
  } else {
    nodbUtil.assert(typeof a1 === 'string' || nodbUtil.isObject(a1),
      'NJS-005', 1);
    if (typeof a1 === 'string') {
      poolAlias = a1;
    } else {
      connAttrs = a1;
      if (connAttrs.poolAlias) {
        poolAlias = connAttrs.poolAlias;
      }
    }
  }

  // if a pool alias is available, acquire a connection from the specified pool
  if (poolAlias) {
    pool = poolCache[poolAlias];
    if (!pool) {
      throw new Error(nodbUtil.getErrorMessage('NJS-047', poolAlias));
    }
    return await pool.getConnection(connAttrs);

  // otherwise, create a new standalone connection
  } else {
    try {
      return await this._getConnection(connAttrs);
    } catch (err) {
      if (err.message.match(/DPI-1047/)) {
        err.message += "\n" + nodbUtil.getInstallHelp();
      }
      throw err;
    }
  }
}


//-----------------------------------------------------------------------------
// shutdown()
//   Shuts down the database.
//-----------------------------------------------------------------------------
async function shutdown(a1, a2) {
  let connAttr = {};
  let shutdownMode = this.SHUTDOWN_MODE_DEFAULT;

  // verify the number and types of arguments
  nodbUtil.checkArgCount(arguments, 0, 2);
  if (arguments.length == 2) {
    nodbUtil.assert(typeof a1 === 'object', 'NJS-005', 1);
    nodbUtil.assert(typeof a2 === 'number', 'NJS-005', 2);
    connAttr = a1;
    shutdownMode = a2;
  } else if (arguments.length == 1) {
    nodbUtil.assert(typeof a1 === 'object', 'NJS-005', 1);
    connAttr = a1;
  }

  // only look for the keys that are used for shutting down the database
  // use SYSOPER privilege
  const dbConfig = {
    user: connAttr.user,
    password: connAttr.password,
    connectString: connAttr.connectString,
    connectionString: connAttr.connectionString,
    externalAuth: connAttr.externalAuth,
    privilege: this.SYSOPER
  };

  const conn = await this.getConnection(dbConfig);
  await conn.shutdown(shutdownMode);
  if (shutdownMode != this.SHUTDOWN_MODE_ABORT) {
    await conn.execute("ALTER DATABASE CLOSE");
    await conn.execute("ALTER DATABASE DISMOUNT");
    await conn.shutdown(this.SHUTDOWN_MODE_FINAL);
  }
  await conn.close();
}


//-----------------------------------------------------------------------------
// startup()
//   Starts up the database.
//-----------------------------------------------------------------------------
async function startup(a1, a2) {
  let connAttr = {};
  let startupAttr = {};

  // verify the number and types of arguments
  nodbUtil.checkArgCount(arguments, 0, 2);
  if (arguments.length == 2) {
    nodbUtil.assert (typeof a1 === 'object', 'NJS-005', 1);
    nodbUtil.assert (typeof a2 === 'object', 'NJS-005', 2);
    connAttr = a1;
    startupAttr = a2;
  } else if (arguments.length == 1) {
    nodbUtil.assert(typeof a1 === 'object', 'NJS-005', 1);
    connAttr = a1;
  }

  // only look for the keys that are used for starting up the database
  // use SYSOPER and SYSPRELIM privileges
  const dbConfig = {
    user: connAttr.user,
    password: connAttr.password,
    connectString: connAttr.connectString,
    connectionString: connAttr.connectionString,
    externalAuth: connAttr.externalAuth,
    privilege: this.SYSOPER | this.SYSPRELIM
  };

  let conn = await this.getConnection(dbConfig);
  await conn.startup(startupAttr);
  await conn.close();

  dbConfig.privilege = this.SYSOPER;
  conn = await this.getConnection(dbConfig);
  await conn.execute("ALTER DATABASE MOUNT");
  await conn.execute("ALTER DATABASE OPEN");
  await conn.close();
}


// create instance which will be exported
let oracleDbInst = new OracleDb();

// add classes to prototype
let proto = Object.getPrototypeOf(oracleDbInst);
proto.OracleDb = OracleDb;
proto.AqDeqOptions = AqDeqOptions;
proto.AqEnqOptions = AqEnqOptions;
proto.AqMessage = AqMessage;
proto.AqQueue = AqQueue;
proto.BaseDbObject = BaseDbObject;
proto.Connection = Connection;
proto.Lob = Lob;
proto.Pool = Pool;
proto.ResultSet = ResultSet;
proto.SodaDatabase = SodaDatabase;
proto.SodaCollection = SodaCollection;
proto.SodaDocCursor = SodaDocCursor;
proto.SodaDocument = SodaDocument;
proto.SodaOperation = SodaOperation;

// call C to extend classes
oracledbCLib.init(oracleDbInst);

module.exports = oracleDbInst;


/***/ }),

/***/ 898:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2016, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const EventEmitter = __nccwpck_require__(614);
const nodbUtil = __nccwpck_require__(960);
const util = __nccwpck_require__(669);

//-----------------------------------------------------------------------------
// _checkRequestQueue()
//   When a connection is returned to the pool, this method is called (via an
// event handler) to determine when requests for connections should be
// resumed and cancels any timeout that may have been associated with the
// request. This method is also called from reconfigure() so that waiting
// connection requests can be processed. Note the use of a local variable for
// the number of connections out. This is because the connection requests will
// not resume until after the loop is finished, and therefore the number of
// connections the pool thinks is out will not be incremented.
//-----------------------------------------------------------------------------
function _checkRequestQueue() {
  let connectionsOut = this._connectionsOut;
  while (this._connRequestQueue.length > 0 && connectionsOut < this.poolMax) {
    connectionsOut += 1;
    const payload = this._connRequestQueue.shift();
    if (this._enableStatistics) {
      this._totalRequestsDequeued += 1;
      this._updateWaitStatistics(payload);
    }
    if (payload.timeoutHandle) {
      clearTimeout(payload.timeoutHandle);
    }
    // inform the waiter that processing can continue
    payload.resolve();
  }
}


//-----------------------------------------------------------------------------
// getConnection()
//   Gets a connection from the pool and returns it to the caller. If there are
// fewer connections out than the poolMax setting, then the request will
// return immediately; otherwise, the request will be queued for up to
// queueTimeout milliseconds.
//-----------------------------------------------------------------------------
async function getConnection(a1) {
  let poolMax;
  let options = {};

  // check arguments
  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 1) {
    nodbUtil.assert(nodbUtil.isObject(a1), 'NJS-005', 1);
    options = a1;
  }

  // if pool is draining/closed, throw an appropriate error
  this._checkPoolOpen(true);

  // manage stats, if applicable
  if (this._enableStatistics) {
    this._totalConnectionRequests += 1;
  }

  // getting the poolMax setting on the pool may fail if the pool is no longer
  // valid
  try {
    poolMax = this.poolMax;
  } catch (err) {
    if (this._enableStatistics) {
      this._totalFailedRequests += 1;
    }
    throw err;
  }

  if (this._connectionsOut >= poolMax ||
      this.status === this._oracledb.POOL_STATUS_RECONFIGURING) {

    // when the queue is huge, throw error early without waiting for queue timeout
    if (this._connRequestQueue.length >= this._queueMax &&
        this._queueMax >= 0) {
      if (this._enableStatistics) {
        this._totalRequestsRejected += 1;
      }
      throw new Error(nodbUtil.getErrorMessage('NJS-076', this._queueMax));
    }

    // if too many connections are out, wait until room is made available or the
    // queue timeout expires
    await new Promise((resolve, reject) => {

      // set up a payload which will be added to the queue for processing
      const payload = { resolve: resolve, reject: reject };

      // if using a queue timeout, establish the timeout so that when it
      // expires the payload will be removed from the queue and an exception
      // thrown
      if (this._queueTimeout !== 0) {
        payload.timeoutHandle = setTimeout(() => {
          const ix = this._connRequestQueue.indexOf(payload);
          if (ix >= 0) {
            this._connRequestQueue.splice(ix, 1);
          }
          if (this._enableStatistics) {
            this._totalRequestTimeouts += 1;
            this._updateWaitStatistics(payload);
          }
          reject(new Error(nodbUtil.getErrorMessage('NJS-040',
            this._queueTimeout)));
        }, this._queueTimeout);
      }

      // add payload to the queue
      this._connRequestQueue.push(payload);
      if (this._enableStatistics) {
        payload.enqueuedTime = Date.now();
        this._totalRequestsEnqueued += 1;
        this._maximumQueueLength = Math.max(this._maximumQueueLength,
          this._connRequestQueue.length);
      }

    });

    // check if pool is draining/closed after delay has
    // completed and throw an appropriate error
    this._checkPoolOpen(true);

  }

  // room is available in the queue, so proceed to acquire a connection from
  // the pool; adjust the connections out immediately in order to ensure that
  // another attempt doesn't proceed while this one is underway
  this._connectionsOut += 1;
  try {

    // acquire connection from the pool
    const conn = await this._getConnection(options);

    // invoke tag fixup callback method if one has been specified and the
    // actual tag on the connection doesn't match the one requested, or the
    // connection is freshly created; if the callback fails, close the
    // connection and remove it from the pool
    const requestedTag = options.tag || "";
    if (typeof this.sessionCallback === 'function' &&
        (conn._newSession || conn.tag != requestedTag)) {
      try {
        await new Promise((resolve, reject) => {
          this.sessionCallback(conn, requestedTag, function(err) {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } catch (err) {
        await conn.close({ drop: true });
        throw err;
      }
    }

    // when connection is closed, check to see if another request should be
    // processed and update any stats, as needed
    conn.on('_afterConnClose', () => {
      this._connectionsOut -= 1;
      this.emit('_checkRequestQueue');
      if (this._connectionsOut == 0) {
        this.emit('_allCheckedIn');
      }
    });

    return (conn);

  } catch (err) {
    this._connectionsOut -= 1;
    if (this._enableStatistics) {
      this._totalFailedRequests += 1;
    }
    this.emit('_checkRequestQueue');
    throw err;
  }

}


//-----------------------------------------------------------------------------
// reconfigure()
//   Reconfigure the pool, change the value for given pool-properties.
//-----------------------------------------------------------------------------
async function reconfigure(options) {

  // check arguments
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(options));

  // reconfiguration can happen only when status is OPEN
  this._checkPoolOpen(false);

  if ((options.queueMax !== undefined) &&
      (typeof options.queueMax !== "number"))
    throw new Error(nodbUtil.getErrorMessage('NJS-004', "queueMax"));

  if ((options.queueTimeout !== undefined) &&
      (typeof options.queueTimeout !== "number"))
    throw new Error(nodbUtil.getErrorMessage('NJS-004', "queueTimeout"));

  if ((options.enableStatistics !== undefined) &&
      (typeof options.enableStatistics !== "boolean"))
    throw new Error(nodbUtil.getErrorMessage('NJS-004', "enableStatistics"));

  if ((options.resetStatistics !== undefined) &&
      (typeof options.resetStatistics != "boolean"))
    throw new Error(nodbUtil.getErrorMessage('NJS-004', "resetStatistics"));

  this._status = this._oracledb.POOL_STATUS_RECONFIGURING;
  try {
    // poolMin/poolMax/poolIncrement/poolPingInterval/poolTimeout/
    // poolMaxPerShard/stmtCacheSize/sodaMetaDataCache parameters
    await this._reconfigure(options);

    // pool JS parameters: queueMax, queueTimeout, enableStatistics,
    // resetStatistics

    // reset the statistics-metrics only if 'resetStatistics' is true or
    // 'enableStatistics' is being set to true
    if (options.resetStatistics == true || (options.enableStatistics == true &&
        this._enableStatistics == false)) {
      this._resetStatistics();
    }

    if (options.queueMax !== undefined) {
      this._queueMax = options.queueMax;
    }

    if (options.queueTimeout !== undefined) {
      this._queueTimeout = options.queueTimeout;
    }

    if (options.enableStatistics !== undefined) {
      this._enableStatistics = options.enableStatistics;
    }
  } finally {
    this._status = this._oracledb.POOL_STATUS_OPEN;
  }
  this.emit('_checkRequestQueue');
}


//-----------------------------------------------------------------------------
// close()
//   Close the pool, optionally allowing for a period of time to pass for
// connections to "drain" from the pool.
//-----------------------------------------------------------------------------
async function close(a1) {
  let drainTime = 0;
  let forceClose = false;

  // check arguments
  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 1) {

    // drain time must be a valid number; timeouts larger than a 32-bit signed
    // integer are not supported
    nodbUtil.assert(typeof a1 === 'number', 'NJS-005', 1);
    if (a1 < 0 || isNaN(a1) || a1 > 2 ** 31) {
      throw new Error(nodbUtil.getErrorMessage('NJS-005', 1));
    }

    // no need to worry about drain time if no connections are out!
    forceClose = true;
    if (this._connectionsOut > 0) {
      drainTime = a1 * 1000;
    }

  }

  // if the pool is draining/reconfiguring/closed, throw an appropriate error
  this._checkPoolOpen(false);

  // wait for the pool to become empty or for the drain timeout to expire
  // (whichever comes first)
  if (drainTime > 0) {
    this._status = this._oracledb.POOL_STATUS_DRAINING;
    await new Promise(resolve => {
      const timeout = setTimeout(() => {
        this.removeAllListeners('_allCheckedIn');
        resolve();
      }, drainTime);
      this.once('_allCheckedIn', () => {
        clearTimeout(timeout);
        resolve();
      });
    });
  }

  // close the pool
  await this._close({forceClose: forceClose});
  this._status = this._oracledb.POOL_STATUS_CLOSED;
  this.emit('_afterPoolClose');

}


//-----------------------------------------------------------------------------
// logStatistics()
//  Method to print statistical related information and pool related
//  information when enableStatistics is set to true.
// NOTE: This function replaces the DEPRECATED _logStats() function
//-----------------------------------------------------------------------------
function logStatistics() {
  const stats = this.getStatistics();
  if (stats === null) {
    throw new Error(nodbUtil.getErrorMessage('NJS-083'));
  }

  console.log('\nPool statistics:');
  console.log('...gathered at:', new Date(stats.gatheredDate).toISOString());
  console.log('...up time (milliseconds):', stats.upTime);
  console.log('...up time from last reset (milliseconds)',
    stats.upTimeSinceReset);
  console.log('...connection requests:', stats.connectionRequests);
  console.log('...requests enqueued:', stats.requestsEnqueued);
  console.log('...requests dequeued:', stats.requestsDequeued);
  console.log('...requests failed:', stats.failedRequests);
  console.log('...requests exceeding queueMax:', stats.rejectedRequests);
  console.log('...requests exceeding queueTimeout:', stats.requestTimeouts);
  console.log('...current queue length:', stats.currentQueueLength);
  console.log('...maximum queue length:', stats.maximumQueueLength);
  console.log('...sum of time in queue (milliseconds):', stats.timeInQueue);
  console.log('...minimum time in queue (milliseconds):',
    stats.minimumTimeInQueue);
  console.log('...maximum time in queue (milliseconds):',
    stats.maximumTimeInQueue);
  console.log('...average time in queue (milliseconds):',
    stats.averageTimeInQueue);
  console.log('...pool connections in use:', stats.connectionsInUse);
  console.log('...pool connections open:', stats.connectionsOpen);
  console.log('Pool attributes:');
  console.log('...poolAlias:', stats.poolAlias);
  console.log('...queueMax:', stats.queueMax);
  console.log('...queueTimeout (milliseconds):', stats.queueTimeout);
  console.log('...poolMin:', stats.poolMin);
  console.log('...poolMax:', stats.poolMax);
  console.log('...poolIncrement:', stats.poolIncrement);
  console.log('...poolTimeout (seconds):', stats.poolTimeout);
  console.log('...poolPingInterval (seconds):', stats.poolPingInterval);
  console.log('...poolMaxPerShard:', stats.poolMaxPerShard);
  console.log('...sessionCallback:', stats.sessionCallback);
  console.log('...stmtCacheSize:', stats.stmtCacheSize);
  console.log('...sodaMetaDataCache:', stats.sodaMetaDataCache);
  console.log('Related environment variables:');
  console.log('...UV_THREADPOOL_SIZE:', stats.threadPoolSize);
}


//-----------------------------------------------------------------------------
// getStatistics()
//  Method to obtain a JSON object with all statistical metrics and pool
//  properties
//-----------------------------------------------------------------------------
function getStatistics() {
  let averageTimeInQueue;
  let stats = { };

  // if the pool is not OPEN, throw appropriate err
  this._checkPoolOpen(false);

  if (this._enableStatistics !== true) {
    return null;
  }

  averageTimeInQueue = 0;

  if (this._totalRequestsEnqueued !== 0) {
    averageTimeInQueue = Math.round(this._totalTimeInQueue /
        this._totalRequestsEnqueued);
  }

  stats.gatheredDate = Date.now ();
  stats.upTime = stats.gatheredDate - this._createdDate;
  stats.upTimeSinceReset = stats.gatheredDate - this._timeOfReset;
  stats.connectionRequests = this._totalConnectionRequests;
  stats.requestsEnqueued = this._totalRequestsEnqueued;
  stats.requestsDequeued = this._totalRequestsDequeued;
  stats.failedRequests = this._totalFailedRequests;
  stats.rejectedRequests = this._totalRequestsRejected;
  stats.requestTimeouts = this._totalRequestTimeouts;
  stats.maximumQueueLength = this._maximumQueueLength;
  stats.currentQueueLength = this._connRequestQueue.length;
  stats.timeInQueue = this._totalTimeInQueue;
  stats.minimumTimeInQueue = this._minTimeInQueue;
  stats.maximumTimeInQueue = this._maxTimeInQueue;
  stats.averageTimeInQueue = averageTimeInQueue;
  stats.connectionsInUse = this.connectionsInUse;
  stats.connectionsOpen = this.connectionsOpen;
  stats.poolAlias = this.poolAlias;
  stats.queueMax = this.queueMax;
  stats.queueTimeout = this.queueTimeout;
  stats.poolMin = this.poolMin;
  stats.poolMax = this.poolMax;
  stats.poolIncrement = this.poolIncrement;
  stats.poolTimeout = this.poolTimeout;
  stats.poolPingInterval = this.poolPingInterval;
  stats.poolMaxPerShard = this.poolMaxPerShard;
  stats.stmtCacheSize = this.stmtCacheSize;
  stats.sodaMetaDataCache = this.sodaMetaDataCache;
  stats.threadPoolSize = process.env.UV_THREADPOOL_SIZE;

  return stats;
}


//-----------------------------------------------------------------------------
// _setup()
//   Sets up the pool instance with additional attributes used for logging
// statistics and managing the connection queue.
//-----------------------------------------------------------------------------
function _setup(poolAttrs, poolAlias, oracledb) {
  if (typeof poolAttrs.queueTimeout !== 'undefined') {
    this._queueTimeout = poolAttrs.queueTimeout;
  } else {
    this._queueTimeout = oracledb.queueTimeout;
  }

  if (typeof poolAttrs.queueMax !== 'undefined') {
    this._queueMax = poolAttrs.queueMax;
  } else {
    this._queueMax = oracledb.queueMax;
  }

  if (typeof poolAttrs.poolMaxPerShard !== 'undefined') {
    this.poolMaxPerShard = poolAttrs.poolMaxPerShard;
  }

  if (typeof poolAttrs.enableStatistics !== 'undefined') {
    this._enableStatistics = poolAttrs.enableStatistics;
  } else {
    this._enableStatistics = false;   // default statistics is disabled.
  }

  if (!this._enableStatistics) {
    // DEPRECATED property _enableStats.
    if (typeof poolAttrs._enableStats !== 'undefined') {
      this._enableStatistics = poolAttrs._enableStats;
    }
  }

  if (typeof poolAttrs.sessionCallback !== 'undefined') {
    if (typeof poolAttrs.sessionCallback === 'function' ||
        typeof poolAttrs.sessionCallback === 'string')
      this._sessionCallback = poolAttrs.sessionCallback;
  }

  // register event handler for when request queue should be checked
  this.on('_checkRequestQueue', this._checkRequestQueue);

  // Using Object.defineProperties to add properties to the Pool instance with
  // special properties, such as enumerable but not writable.
  Object.defineProperties(
    this,
    {
      queueMax: { // maximum number of pending pool connections that can be queued
        enumerable: true,
        get: function() {
          return (this._queueMax);
        },
      },
      queueTimeout: { // milliseconds a connection request can spend in queue before being failed
        enumerable: true,
        get: function() {
          return (this._queueTimeout);
        },
      },
      _enableStats: { // DEPRECATED. true means pool stats will be recorded
        get: function() {
          return (this._enableStatistics);
        }
      },
      enableStatistics: { // true means pool stats will be recorded
        enumerable: true,
        get: function() {
          return (this._enableStatistics);
        }
      },
      _connectionsOut: { // number of connections checked out from the pool. Must be inc/dec in the main thread in JS
        value: 0,
        writable: true
      },
      _connRequestQueue: {
        value: [],
        writable: true
      },
      _status: {  // open/closing/closed
        value: oracledb.POOL_STATUS_OPEN,
        writable: true
      },
      poolAlias: {
        enumerable: true,
        get: function() {
          return (poolAlias);
        }
      },
      status: {  // open/closing/closed
        enumerable: true,
        get: function() {
          return (this._status);
        }
      },
      sessionCallback: {  // session callback
        enumerable: true,
        get: function() {
          return this._sessionCallback;
        }
      }
    }
  );

  this._resetStatistics();

}


class Pool extends EventEmitter {

  _extend(oracledb) {
    this._oracledb = oracledb;
    this._setup = _setup;
    this._checkRequestQueue = _checkRequestQueue;
    this.close = nodbUtil.callbackify(close);
    this.getConnection = nodbUtil.callbackify(getConnection);
    this.reconfigure = nodbUtil.callbackify(reconfigure);
    this.logStatistics = logStatistics;
    this.getStatistics = getStatistics;
    this.terminate = this.close;
    this._queueMax = 0;
    this._queueTimeout = 0;
    this._enableStatistics = false;
    this._timeOfReset = this._createdDate = Date.now();
    this._sessionCallback = undefined;

    // DEPRECATED alias
    this._logStats = this.logStatistics;
  }

  // check if pool is draining/reconfiguring/closed and throw an
  // appropriate error
  _checkPoolOpen(ignoreReconfiguring) {
    // if already in reconfiguring status, nothing to do.
    if (this.status === this._oracledb.POOL_STATUS_DRAINING) {
      throw new Error(nodbUtil.getErrorMessage('NJS-064'));
    } else if (this.status === this._oracledb.POOL_STATUS_CLOSED) {
      throw new Error(nodbUtil.getErrorMessage('NJS-065'));
    } else if (!ignoreReconfiguring) {
      if (this.status === this._oracledb.POOL_STATUS_RECONFIGURING) {
        throw new Error(nodbUtil.getErrorMessage('NJS-082'));
      }
    }
  }

  // temporary method for determining if an object is a date until
  // napi_is_date() can be used (when Node-API v5 can be used)
  _isDate(val) {
    return (util.isDate(val));
  }

  //---------------------------------------------------------------------------
  // _resetStatistics()
  //  To initialize the counters/timers
  //---------------------------------------------------------------------------
  _resetStatistics() {
    this._timeOfReset = Date.now();
    this._totalConnectionRequests = 0;
    this._totalRequestsEnqueued = 0;
    this._totalRequestsDequeued = 0;
    this._totalFailedRequests = 0;
    this._totalRequestsRejected = 0;
    this._totalRequestTimeouts = 0;
    this._maximumQueueLength = this._connRequestQueue.length;
    this._totalTimeInQueue = 0;
    this._minTimeInQueue = 0;
    this._maxTimeInQueue = 0;
  }


  // update pool wait statistics after a connect request has spent some time in
  // the queue
  _updateWaitStatistics(payload) {
    const waitTime = Date.now() - payload.enqueuedTime;
    this._totalTimeInQueue += waitTime;
    if (this._minTimeInQueue === 0) {
      this._minTimeInQueue = waitTime;
    } else {
      this._minTimeInQueue = Math.min(this._minTimeInQueue, waitTime);
    }
    this._maxTimeInQueue = Math.max(this._maxTimeInQueue, waitTime);
  }

}


module.exports = Pool;


/***/ }),

/***/ 837:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2015, 2020, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const { Readable } = __nccwpck_require__(413);

class QueryStream extends Readable {

  constructor(rs) {
    super({ objectMode: true });
    this._fetching = false;
    this._numRows = 0;

    // calling open via process.nextTick to allow event handlers to be
    // registered prior to the events being emitted
    if (rs) {
      process.nextTick(() => {
        this._open(rs);
      });
    }
  }

  // called by readable.destroy() and ensures that the result set is closed if
  // it has not already been closed (never called directly)
  async _destroy(err, cb) {
    if (this._resultSet) {
      const rs = this._resultSet;
      this._resultSet = null;
      if (this._fetching) {
        await new Promise(resolve =>
          this.once('_doneFetching', resolve));
      }
      try {
        await rs._close();
      } catch (closeErr) {
        cb(closeErr);
        return;
      }
    }
    cb(err);
  }

  // called when the query stream is to be associated with a result set; this
  // takes place when the query stream if constructed (if a result set is known
  // at that point) or by Connection.execute() when the result set is ready
  _open(rs) {
    this._resultSet = rs;

    // trigger the event listener that may have been added in _read() now that
    // the result set is ready
    this.emit('open');

    // emit a metadata event as a convenience to users
    this.emit('metadata', rs.metaData);
  }

  // called by readable.read() and pushes rows to the internal queue maintained
  // by the stream implementation (never called directly) appropriate
  async _read() {

    // still waiting on the result set to be added via _open() so add an event
    // listener to retry when ready
    if (!this._resultSet) {
      this.once('open', this._read);
      return;
    }

    // using the JS getRow() to leverage the JS row cache; the result set's
    // _allowGetRowCall is set to true to allow the call for query streams
    // created via ResultSet.toQueryStream()
    try {
      this._fetching = true;
      this._resultSet._allowGetRowCall = true;
      const row = await this._resultSet.getRow();
      this._fetching = false;
      if (!this._resultSet) {
        this.emit('_doneFetching');
        return;
      }
      if (row) {
        this.push(row);
      } else {
        this.push(null);
      }
    } catch (err) {
      this.destroy(err);
    }
  }

}

module.exports = QueryStream;


/***/ }),

/***/ 343:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2016, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const QueryStream = __nccwpck_require__(837);
const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// close()
//   Close the result set and make it unusable for further operations.
//-----------------------------------------------------------------------------
async function close() {
  nodbUtil.checkArgCount(arguments, 0, 0);

  if (this._convertedToStream) {
    throw new Error(nodbUtil.getErrorMessage('NJS-042'));
  }

  this._processingStarted = true;
  await this._close();
}


//-----------------------------------------------------------------------------
// getRow()
//   Returns a single row to the caller from the result set, if one is
// available. Rows are buffered in a JavaScript array in order to avoid trips
// through the thread pool that would be required if implemented in C.
//-----------------------------------------------------------------------------
async function getRow() {
  nodbUtil.checkArgCount(arguments, 0, 0);

  if (this._convertedToStream && !this._allowGetRowCall) {
    throw new Error(nodbUtil.getErrorMessage('NJS-042'));
  }

  this._allowGetRowCall = false;
  this._processingStarted = true;

  if (this._rowCache.length == 0) {
    this._rowCache = await this._getRows(this._fetchArraySize, false, false);
  }
  return this._rowCache.shift();
}


//-----------------------------------------------------------------------------
// getRows()
//   Check to see if any rows are in the JS buffer (which could result from
// interspersed calls to getRow() and getRows()). If no rows are in the buffer
// buffer, the call is just proxied to the C layer. Otherwise, rows are pulled
// from the buffer and potentially concatenated with rows from a call to
// getRows().
//-----------------------------------------------------------------------------
async function getRows(numRows) {
  let rowsNeeded;

  nodbUtil.checkArgCount(arguments, 0, 1);

  if (arguments.length == 0) {
    numRows = 0;
  } else {
    nodbUtil.assert(Number.isInteger(numRows), 'NJS-005', 1);
    nodbUtil.assert(numRows >= 0, 'NJS-005', 1);
  }

  if (this._convertedToStream) {
    throw new Error(nodbUtil.getErrorMessage('NJS-042'));
  }

  this._processingStarted = true;

  if (numRows == 0) {
    let requestedRows = this._rowCache;

    const fetchArraySize = this._fetchArraySize;
    while (true) {  // eslint-disable-line
      let rows = await this._getRows(fetchArraySize, false, false);
      if (rows)
        requestedRows = requestedRows.concat(rows);
      if (rows.length < fetchArraySize)
        break;
    }
    return requestedRows;
  }

  if (this._rowCache.length === 0) {
    return await this._getRows(numRows, false, false);
  }

  rowsNeeded = numRows - this._rowCache.length;
  if (rowsNeeded <= 0) {
    return this._rowCache.splice(0, numRows);
  } else {
    const rows = await this._getRows(rowsNeeded, false, false);
    const requestedRows = this._rowCache.concat(rows);
    this._rowCache = [];
    return requestedRows;
  }
}


class ResultSet {

  constructor() {
    this._rowCache = [];
    this._processingStarted = false;
    this._convertedToStream = false;
    this._allowGetRowCall = false;
    this._isActive = false;
  }

  _extend(oracledb) {
    this._oracledb = oracledb;
    this.close = nodbUtil.callbackify(nodbUtil.preventConcurrent(nodbUtil.serialize(close), 'NJS-017'));
    this.getRow = nodbUtil.callbackify(nodbUtil.preventConcurrent(nodbUtil.serialize(getRow), 'NJS-017'));
    this.getRows = nodbUtil.callbackify(nodbUtil.preventConcurrent(nodbUtil.serialize(getRows), 'NJS-017'));
  }

  _getConnection() {
    let connection = this._parentObj;
    while (!(connection instanceof this._oracledb.Connection))
      connection = connection._parentObj;
    return connection;
  }

  async _getAllRows(executeOpts, metaDataObj, isNested) {

    // assign result set metadata to the object; this is either a top-level
    // result object that is returned to the user or a metadata object for a
    // nested cursor or empty (for implicit results which don't provide
    // metadata to the caller)
    if (metaDataObj && !metaDataObj.metaData) {
      metaDataObj.metaData = this.metaData;
    }

    // determine value of maxRows to use
    let maxRows = this._oracledb.maxRows;
    if (executeOpts && executeOpts.maxRows !== undefined) {
      maxRows = executeOpts.maxRows;
    }

    // determine value of outFormat to use
    let outFormat = this._oracledb.outFormat;
    if (executeOpts && executeOpts.outFormat !== undefined) {
      outFormat = executeOpts.outFormat;
    }

    // determine the nested cursor indices to use, allowing for both
    // OUT_FORMAT_ARRAY and OUT_FORMAT_OBJECT formats
    const nestedCursorMetaDataObjs = [];
    const nestedCursorIndices = this._nestedCursorIndices;
    for (let i = 0; i < nestedCursorIndices.length; i++) {
      nestedCursorMetaDataObjs[i] =
        metaDataObj.metaData[nestedCursorIndices[i]];
      if (outFormat == this._oracledb.OUT_FORMAT_OBJECT) {
        nestedCursorIndices[i] = nestedCursorMetaDataObjs[i].name;
      }
    }

    // process all rows; transform nested cursors into arrays of rows by
    // fetching them
    let rowsFetched = [];
    let fetchArraySize = this._fetchArraySize;
    let closeOnFetch = false;
    const closeOnAllRowsFetched = !isNested && nestedCursorIndices.length === 0;
    while (true) {    // eslint-disable-line
      if (maxRows > 0 && fetchArraySize >= maxRows) {
        fetchArraySize = maxRows;
        closeOnFetch = closeOnAllRowsFetched;
      }
      const rows = await this._getRows(fetchArraySize, closeOnFetch,
        closeOnAllRowsFetched);
      if (nestedCursorIndices) {
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          for (let j = 0; j < nestedCursorIndices.length; j++) {
            const val = row[nestedCursorIndices[j]];
            if (val) {
              row[nestedCursorIndices[j]] =
                  await val._getAllRows(executeOpts,
                    nestedCursorMetaDataObjs[j], true);
            }
          }
        }
      }
      if (rows) {
        rowsFetched = rowsFetched.concat(rows);
      }
      if (rows.length == maxRows || rows.length < fetchArraySize) {
        break;
      }
      if (maxRows > 0) {
        maxRows -= rows.length;
      }
    }

    // if the cursor was not automatically closed (in order to ensure that
    // nested cursors could be fetched), close it now that all rows have been
    // fetched
    if (!closeOnAllRowsFetched) {
      await this._close();
    }
    return rowsFetched;
  }

  _getDbObjectClassJS(schema, name) {
    return this._connection._getDbObjectClassJS(schema, name);
  }

  toQueryStream() {
    nodbUtil.checkArgCount(arguments, 0, 0);

    if (this._processingStarted) {
      throw new Error(nodbUtil.getErrorMessage('NJS-041'));
    }

    if (this._convertedToStream) {
      throw new Error(nodbUtil.getErrorMessage('NJS-043'));
    }

    this._convertedToStream = true;

    return new QueryStream(this);
  }

}


module.exports = ResultSet;


/***/ }),

/***/ 507:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2018, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// drop()
//   Drop the collection.
//-----------------------------------------------------------------------------
async function drop() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._drop();
}


//-----------------------------------------------------------------------------
// insertMany()
//   Insert an array of documents into the collection in a single round-trip.
//-----------------------------------------------------------------------------
async function insertMany(docs) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(Array.isArray(docs), 'NJS-005', 1);

  if (docs.length == 0) {
    throw new Error(nodbUtil.getErrorMessage('NJS-005', 1));
  }

  let actualDocs = Array(docs.length);
  for (let i = 0; i < docs.length; i++) {
    let content = docs[i];
    if (!nodbUtil.isSodaDocument(content)) {
      content = Buffer.from(JSON.stringify(content));
    }
    actualDocs[i] = content;
  }

  await this._insertMany(actualDocs);
}


//-----------------------------------------------------------------------------
// insertManyAndGet()
//   Insert an array of documents into the collection in a single round-trip
// and return a set of result documents containing metadata.
//-----------------------------------------------------------------------------
async function insertManyAndGet(docs, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(Array.isArray(docs), 'NJS-005', 1);

  if (arguments.length == 2) {
    nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
    options = a2;
  }

  if (docs.length == 0) {
    throw new Error(nodbUtil.getErrorMessage('NJS-005', 1));
  }

  let actualDocs = Array(docs.length);
  for (let i = 0; i < docs.length; i++) {
    let content = docs[i];
    if (!nodbUtil.isSodaDocument(content)) {
      content = Buffer.from(JSON.stringify(content));
    }
    actualDocs[i] = content;
  }

  return await this._insertManyAndGet(actualDocs, options);
}


//-----------------------------------------------------------------------------
// insertOne()
//   Inserts a single document into the collection.
//-----------------------------------------------------------------------------
async function insertOne(content) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  await this._insertOne(content);
}


//-----------------------------------------------------------------------------
// insertOneAndGet()
//   Inserts a single document into the collection and returns a result
// document containing metadata.
//-----------------------------------------------------------------------------
async function insertOneAndGet(content, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (arguments.length == 2) {
    nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
    options = a2;
  }

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  return await this._insertOneAndGet(content, options);
}


//-----------------------------------------------------------------------------
// createIndex()
//   Create an index on the collection.
//-----------------------------------------------------------------------------
async function createIndex(spec) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(spec), 'NJS-005', 1);
  return await this._createIndex(JSON.stringify(spec));
}


//-----------------------------------------------------------------------------
// dropIndex()
//   Drop an index on the collection.
//-----------------------------------------------------------------------------
async function dropIndex(indexName, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(typeof indexName === 'string', 'NJS-005', 1);
  if (arguments.length == 2) {
    nodbUtil.assert(typeof a2 === 'object', 'NJS-005', 2);
    options = a2;
  }

  return await this._dropIndex(indexName, options);
}


//-----------------------------------------------------------------------------
// getDataGuide()
//   Return the data guide for the collection.
//-----------------------------------------------------------------------------
async function getDataGuide() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getDataGuide();
}


//-----------------------------------------------------------------------------
// save()
//   Saves a single document into the collection.
//-----------------------------------------------------------------------------
async function save(content) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  await this._save(content);
}


//-----------------------------------------------------------------------------
// saveAndGet()
//   Saves a single document into the collection and returns a result
// document containing metadata.
//-----------------------------------------------------------------------------
async function saveAndGet(content, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (arguments.length == 2) {
    nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
    options = a2;
  }

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  return await this._saveAndGet(content, options);
}


//-----------------------------------------------------------------------------
// truncate()
//   Remove all of the documents from a collection.
//-----------------------------------------------------------------------------
async function truncate() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._truncate();
}


class SodaCollection {

  _extend() {
    this.createIndex = nodbUtil.callbackify(nodbUtil.serialize(createIndex));
    this.drop = nodbUtil.callbackify(nodbUtil.serialize(drop));
    this.dropIndex = nodbUtil.callbackify(nodbUtil.serialize(dropIndex));
    this.getDataGuide = nodbUtil.callbackify(nodbUtil.serialize(getDataGuide));
    this.insertMany = nodbUtil.callbackify(nodbUtil.serialize(insertMany));
    this.insertManyAndGet = nodbUtil.callbackify(nodbUtil.serialize(insertManyAndGet));
    this.insertOne = nodbUtil.callbackify(nodbUtil.serialize(insertOne));
    this.insertOneAndGet = nodbUtil.callbackify(nodbUtil.serialize(insertOneAndGet));
    this.save = nodbUtil.callbackify(nodbUtil.serialize(save));
    this.saveAndGet = nodbUtil.callbackify(nodbUtil.serialize(saveAndGet));
    this.truncate = nodbUtil.callbackify(nodbUtil.serialize(truncate));
  }

  _getConnection() {
    return this._database._connection;
  }

  find() {
    nodbUtil.checkArgCount(arguments, 0, 0);
    return this._find();
  }

  get metaData() {
    return JSON.parse(this._metaData);
  }

}

module.exports = SodaCollection;


/***/ }),

/***/ 213:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2018, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// createCollection()
//   Creates a SODA collection.
//-----------------------------------------------------------------------------
async function createCollection(name, a2) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 1, 2);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);

  if (arguments.length == 2) {
    nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
    options = a2;
    if (options.metaData) {
      if (!nodbUtil.isObject(options.metaData)) {
        throw new Error(nodbUtil.getErrorMessage('NJS-005', 2));
      }
      options.metaData = JSON.stringify(options.metaData);
    }
  }

  return await this._createCollection(name, options);
}


//-----------------------------------------------------------------------------
// openCollection()
//   Open an existing SODA collection and return it to the caller.
//-----------------------------------------------------------------------------
async function openCollection(name) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(typeof name === 'string', 'NJS-005', 1);
  return await this._openCollection(name);
}


//-----------------------------------------------------------------------------
// getCollectionNames()
//   Return an array of the names of the collections in the database.
//-----------------------------------------------------------------------------
async function getCollectionNames(a1) {
  let options = {};

  nodbUtil.checkArgCount(arguments, 0, 1);
  if (arguments.length == 1) {
    nodbUtil.assert(nodbUtil.isObject(a1), 'NJS-005', 1);
    options = a1;
  }
  return await this._getCollectionNames(options);
}


class SodaDatabase {

  _extend() {
    this.createCollection = nodbUtil.callbackify(nodbUtil.serialize(createCollection));
    this.getCollectionNames = nodbUtil.callbackify(nodbUtil.serialize(getCollectionNames));
    this.openCollection = nodbUtil.callbackify(nodbUtil.serialize(openCollection));
  }

  _getConnection() {
    return this._connection;
  }

  // To create a SODA document object based content and (optional) other fields
  createDocument(content, a2) {
    let options = {};

    nodbUtil.checkArgCount(arguments, 1, 2);
    nodbUtil.assert(Buffer.isBuffer(content) || typeof content === 'string' ||
        nodbUtil.isObject(content), 'NJS-005', 1);
    if (arguments.length > 1) {
      nodbUtil.assert(nodbUtil.isObject(a2), 'NJS-005', 2);
      options = a2;
    }

    if (typeof content === 'string') {
      content = Buffer.from(content);
    } else if (nodbUtil.isObject(content)) {
      content = Buffer.from(JSON.stringify(content));
    }

    return this._createDocument(content, options);
  }

}


module.exports = SodaDatabase;


/***/ }),

/***/ 859:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2018, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// getNext()
//   Return the new document available from the cursor.
//-----------------------------------------------------------------------------
async function getNext() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getNext();
}


//-----------------------------------------------------------------------------
// close()
//   Close the cursor and make it unusable for further operations.
//----------------------------------------------------------------------------
async function close() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  await this._close();
}


class SodaDocCursor {

  _extend() {
    this.close = nodbUtil.callbackify(nodbUtil.serialize(close));
    this.getNext = nodbUtil.callbackify(nodbUtil.serialize(getNext));
  }

  _getConnection() {
    return this._operation._getConnection();
  }

}

module.exports = SodaDocCursor;


/***/ }),

/***/ 936:
/***/ ((module) => {

"use strict";
// Copyright (c) 2018, 2020, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



class SodaDocument {

  _extend() {
    this._sodaDocumentMarker = true;
  }

  // returns the document content as a Javascript object
  getContent() {
    return JSON.parse(this._getContentAsString());
  }

  // returns the document content as a buffer
  getContentAsBuffer() {
    return this._getContentAsBuffer();
  }

  // returns the document content as a string
  getContentAsString() {
    return this._getContentAsString();
  }

}

module.exports = SodaDocument;


/***/ }),

/***/ 757:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2018, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const nodbUtil = __nccwpck_require__(960);

//-----------------------------------------------------------------------------
// count()
//   Return a count of the number of documents that match the search criteria.
//-----------------------------------------------------------------------------
async function count() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._count(this._options);
}


//-----------------------------------------------------------------------------
// getOne()
//   Return the first document that matches the search criteria.
//-----------------------------------------------------------------------------
async function getOne() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getOne(this._options);
}


//-----------------------------------------------------------------------------
// replaceOne()
//   Replace the first document that matches the search criteria with the
// specified document.
//-----------------------------------------------------------------------------
async function replaceOne(content) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  return await this._replaceOne(this._options, content);
}


//-----------------------------------------------------------------------------
// replaceOneAndGet()
//   Replace the first document that matches the search criteria with the
// specified document and then return a result document containing metadata.
//-----------------------------------------------------------------------------
async function replaceOneAndGet(content) {
  nodbUtil.checkArgCount(arguments, 1, 1);
  nodbUtil.assert(nodbUtil.isObject(content) ||
      nodbUtil.isSodaDocument(content), 'NJS-005', 1);

  if (!nodbUtil.isSodaDocument(content)) {
    content = Buffer.from(JSON.stringify(content));
  }

  return await this._replaceOneAndGet(this._options, content);
}


//-----------------------------------------------------------------------------
// remove()
//   Remove the documents that match the search criteria from the collection
// and return information about the operation to the caller.
//-----------------------------------------------------------------------------
async function remove() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._remove(this._options);
}


//-----------------------------------------------------------------------------
// getCursor()
//   Return a cursor which will return the documents that match the search
// criteria.
//-----------------------------------------------------------------------------
async function getCursor() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getCursor(this._options);
}


//-----------------------------------------------------------------------------
// getDocuments()
//   Return an array of documents that match the search criteria.
//-----------------------------------------------------------------------------
async function getDocuments() {
  nodbUtil.checkArgCount(arguments, 0, 0);
  return await this._getDocuments(this._options);
}


class SodaOperation {

  constructor() {
    this._options = {};
  }

  _extend() {
    this.count = nodbUtil.callbackify(nodbUtil.serialize(count));
    this.getCursor = nodbUtil.callbackify(nodbUtil.serialize(getCursor));
    this.getDocuments = nodbUtil.callbackify(nodbUtil.serialize(getDocuments));
    this.getOne = nodbUtil.callbackify(nodbUtil.serialize(getOne));
    this.remove = nodbUtil.callbackify(nodbUtil.serialize(remove));
    this.replaceOne = nodbUtil.callbackify(nodbUtil.serialize(replaceOne));
    this.replaceOneAndGet = nodbUtil.callbackify(nodbUtil.serialize(replaceOneAndGet));
  }

  _getConnection() {
    return this._collection._database._connection;
  }

  // fetchArraySize - a non-terminal function that can chain further
  fetchArraySize(n) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof n === 'number', 'NJS-005', 1);
    this._options.fetchArraySize = n;
    return this;
  }

  // filter property - a non-terminal function and can chain further
  filter(f) {
    nodbUtil.checkArgCount (arguments, 1, 1);
    nodbUtil.assert(nodbUtil.isObject(f), 'NJS-005', 1);
    this._options.filter = JSON.stringify(f);
    return this;
  }

  // hint - a non-terminal function and can chain further
  hint(val) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof val === 'string', 'NJS-005', 1);
    this._options.hint = val;
    return this;
  }

  // key - a non-terminal function and can chain further
  key(k) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof k === 'string', 'NJS-005', 1);
    this._options.key = k;
    this._options.keys = undefined;
    return this;
  }

  // keys - a non-terminal function and can chain further
  keys(arr) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(Array.isArray(arr), 'NJS-005', 1);

    for (let i = 0; i < arr.length; i++) {
      nodbUtil.assert(typeof arr[i] === 'string', 'NJS-005', 1);
    }

    this._options.keys = arr;
    this._options.key = undefined;
    return this;
  }

  // limit property - a non-terminal function and can chain further
  limit(n) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof n === 'number', 'NJS-005', 1);
    this._options.limit = n;
    return this;
  }

  // skip property - a non-terminal function and can chain further
  skip(n) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof n === 'number', 'NJS-005', 1);
    this._options.skip = n;
    return this;
  }

  // version property - a non-terminal function and can chain further
  version(v) {
    nodbUtil.checkArgCount(arguments, 1, 1);
    nodbUtil.assert(typeof v === 'string', 'NJS-005', 1);
    this._options.version = v;
    return this;
  }

}


module.exports = SodaOperation;


/***/ }),

/***/ 960:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Copyright (c) 2016, 2021, Oracle and/or its affiliates. All rights reserved

//-----------------------------------------------------------------------------
//
// You may not use the identified files except in compliance with the Apache
// License, Version 2.0 (the "License.")
//
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------



const util = __nccwpck_require__(669);

// node-oracledb version number
let packageJSON;
try {
  packageJSON = __nccwpck_require__(512);
} catch (err) {
  throw new Error('package.json is missing');
}
const PACKAGE_JSON_VERSION = packageJSON.version;
module.exports.PACKAGE_JSON_VERSION = PACKAGE_JSON_VERSION;

// Directory containing the node-oracledb add-on binary
const RELEASE_DIR = 'build/Release';
module.exports.RELEASE_DIR = RELEASE_DIR;

// The default node-oracledb add-on binary filename for this Node.js
const BINARY_FILE = 'oracledb-' + PACKAGE_JSON_VERSION + '-' + process.platform + '-' + process.arch + '.node';
module.exports.BINARY_FILE = BINARY_FILE;

// Staging directory used by maintainers building the npm package
const STAGING_DIR = 'package/Staging';
module.exports.STAGING_DIR = STAGING_DIR;

// errorMessages is for NJS error messages used in the JavaScript layer
const errorMessages = {
  'NJS-002': 'NJS-002: invalid pool',
  'NJS-004': 'NJS-004: invalid value for property %s',
  'NJS-005': 'NJS-005: invalid value for parameter %d',
  'NJS-009': 'NJS-009: invalid number of parameters',
  'NJS-017': 'NJS-017: concurrent operations on ResultSet are not allowed',
  'NJS-023': 'NJS-023: concurrent operations on LOB are not allowed',
  'NJS-037': 'NJS-037: incompatible type of value provided',
  'NJS-040': 'NJS-040: connection request timeout. Request exceeded queueTimeout of %d',
  'NJS-041': 'NJS-041: cannot convert ResultSet to QueryStream after invoking methods',
  'NJS-042': 'NJS-042: cannot invoke ResultSet methods after converting to QueryStream',
  'NJS-043': 'NJS-043: ResultSet already converted to QueryStream',
  'NJS-045': 'NJS-045: cannot load a node-oracledb binary for Node.js ' + process.versions.node + ' (' + process.platform + ' ' + process.arch + ') %s',
  'NJS-046': 'NJS-046: poolAlias "%s" already exists in the connection pool cache',
  'NJS-047': 'NJS-047: poolAlias "%s" not found in the connection pool cache',
  'NJS-064': 'NJS-064: connection pool is closing',
  'NJS-065': 'NJS-065: connection pool was closed',
  'NJS-067': 'NJS-067: a pre-built node-oracledb binary was not found for %s',
  'NJS-069': 'NJS-069: node-oracledb %s requires Node.js %s or later',
  'NJS-076': 'NJS-076: connection request rejected. Pool queue length queueMax %d reached',
  'NJS-081': 'NJS-081: concurrent operations on a connection are disabled',
  'NJS-082': 'NJS-082: connection pool is being reconfigured',
  'NJS-083': 'NJS-083: pool statistics not enabled'
};

// getInstallURL returns a string with installation URL
function getInstallURL() {
  return ('Node-oracledb installation instructions: https://oracle.github.io/node-oracledb/INSTALL.html');
}

module.exports.getInstallURL = getInstallURL;

// getInstallHelp returns a string with installation usage tips that may be helpful
function getInstallHelp() {
  let arch, url;
  let mesg = getInstallURL() + '\n';
  if (process.platform === 'linux') {
    if (process.arch === 'x64') {
      url = 'https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html\n';
      arch = '64-bit';
    } else if (process.arch === 'x32') {
      url = 'https://www.oracle.com/database/technologies/instant-client/linux-x86-32-downloads.html\n';
      arch = '32-bit';
    } else {
      url = 'https://www.oracle.com/database/technologies/instant-client.html\n';
      arch = process.arch;
    }
    mesg += 'You must have ' + arch + ' Oracle Client libraries configured with ldconfig, or in LD_LIBRARY_PATH.\n';
    mesg += 'If you do not have Oracle Database on this computer, then install the Instant Client Basic or Basic Light package from \n';
    mesg += url;
  } else if (process.platform === 'darwin') {
    if (process.arch === 'x64') {
      url = 'https://www.oracle.com/database/technologies/instant-client/macos-intel-x86-downloads.html\n';
      arch = '64-bit';
    } else {
      url = 'https://www.oracle.com/database/technologies/instant-client.html\n';
      arch = process.arch;
    }
    mesg += 'You must have the ' + arch + ' Oracle Instant Client Basic or Basic Light package libraries in\n';
    mesg += '/usr/local/lib or set by calling oracledb.initOracleClient({libDir: "/my/instant_client_directory"}).\n';
    mesg += 'Oracle Instant Client can be downloaded from ' + url;
  } else if (process.platform === 'win32') {
    if (process.arch === 'x64') {
      url = 'https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html\n';
      arch = '64-bit';
    } else if (process.arch === 'x32') {
      url = 'https://www.oracle.com/database/technologies/instant-client/microsoft-windows-32-downloads.html\n';
      arch = '32-bit';
    } else {
      url = 'https://www.oracle.com/database/technologies/instant-client.html\n';
      arch = process.arch;
    }
    mesg += 'You must have ' + arch + ' Oracle Client libraries in your PATH environment variable.\n';
    mesg += 'If you do not have Oracle Database on this computer, then install the Instant Client Basic or Basic Light package from\n';
    mesg += url;
    mesg += 'A Microsoft Visual Studio Redistributable suitable for your Oracle client library version must be available.\n';
  } else {
    url = 'https://www.oracle.com/database/technologies/instant-client.html\n';
    mesg += 'You must have ' + process.arch + ' Oracle Client libraries in your operating system library search path.\n';
    mesg += 'If you do not have Oracle Database on this computer, then install an Instant Client Basic or Basic Light package from: \n';
    mesg += url;
  }
  return mesg;
}

module.exports.getInstallHelp = getInstallHelp;

// getErrorMessage is used to get and format error messages to make throwing
// errors a little more convenient.
function getErrorMessage(errorCode) {
  let args = Array.prototype.slice.call(arguments);
  args[0] = errorMessages[errorCode];
  return util.format.apply(util, args);
}

module.exports.getErrorMessage = getErrorMessage;

// assert is typically used at the beginning of public functions to assert
// preconditions for the function to execute. Most commonly it is used to
// validate the number of arguments and their types and throw an error if they
// don't match what is expected.
function assert(condition, errorCode, messageArg1) {
  if (!condition) {
    throw new Error(getErrorMessage(errorCode, messageArg1));
  }
}

module.exports.assert = assert;

// checkArgCount is used to validate the number of arguments, particularly with
// optional parameters (range of number of parameters).  If the number of
// arguments is not within the given range, an error is thrown.
function checkArgCount(args, minArgCount, maxArgCount) {
  if (args.length < minArgCount || args.length > maxArgCount)
    throw new Error(getErrorMessage('NJS-009'));
}

module.exports.checkArgCount = checkArgCount;


// The callbackify function is used to wrap async methods to add optional
// callback support. If the last parameter passed to a method is a function,
// then it is assumed that the callback pattern is being used and the promise
// is resolved or rejected and the callback invoked; otherwise, the function is
// called unchanged and a promise is returned
function callbackify(func) {
  return function() {

    // if last argument is not a function, simply invoke the function as usual
    // and a promise will be returned
    if (typeof arguments[arguments.length - 1] !== 'function') {
      return func.apply(this, arguments);
    }

    // otherwise, resolve or reject the promise and invoke the callback
    const args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
    const cb = arguments[arguments.length - 1];
    func.apply(this, args).then(function(result) {
      cb(null, result);
    }, cb);

  };
}

module.exports.callbackify = callbackify;

// The serialize function is used to wrap methods to ensure that the connection
// is not used concurrently by multiple threads
function serialize(func) {
  return async function() {

    // determine the connection associated with the object
    const connection = this._getConnection();

    // acquire the "lock"; this simply checks to see if another operation is in
    // progress, and if so, waits for it to complete
    await connection._acquireLock();

    // call the function and ensure that the lock is "released" once the
    // function has completed -- either successfully or in failure
    try {
      return await func.apply(this, arguments);
    } finally {
      connection._releaseLock();
    }
  };
}

module.exports.serialize = serialize;

function preventConcurrent(func, errorCode) {
  return async function() {
    if (this._isActive)
      throw new Error(getErrorMessage(errorCode));
    this._isActive = true;
    try {
      return await func.apply(this, arguments);
    } finally {
      this._isActive = false;
    }
  };
}

module.exports.preventConcurrent = preventConcurrent;

function isObject(value) {
  return value !== null && typeof value === 'object';
}

module.exports.isObject = isObject;

function isObjectOrArray(value) {
  return (value !== null && typeof value === 'object') || Array.isArray(value);
}

module.exports.isObjectOrArray = isObjectOrArray;

function isSodaDocument(value) {
  return (value != null && value._sodaDocumentMarker);
}

module.exports.isSodaDocument = isSodaDocument;


/***/ }),

/***/ 512:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"oracledb","_id":"oracledb@5.2.0","_inBundle":false,"_integrity":"sha512-gHOWTM6ILKOGVH3Z+11Cnpls8XWW7sZUoBrbQWvspYOGpkvJ+TKRr1OdVS21EyeAtfMzXePDrSvG/Mlp/fxOVA==","_location":"/oracledb","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"oracledb","name":"oracledb","escapedName":"oracledb","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/oracledb/-/oracledb-5.2.0.tgz","_shasum":"c5774a38508e2ebd4f899500dfc35daa03b00481","_spec":"oracledb","_where":"/home/dcoder/ExecuteOracleQuery","bugs":{"url":"https://github.com/oracle/node-oracledb/issues"},"bundleDependencies":false,"deprecated":false,"description":"A Node.js module for Oracle Database access","engines":{"node":">=10.16"},"homepage":"http://oracle.github.io/node-oracledb/","keywords":["Oracle","Database","official","DB","SQL","JSON","PL/SQL","SODA","OCI","API","client","library","driver","add-on","extension","binding","interface","adapter","module"],"license":"Apache-2.0","main":"./index.js","maintainers":[{"name":"Oracle Corp."}],"name":"oracledb","repository":{"type":"git","url":"git://github.com/oracle/node-oracledb.git"},"scripts":{"install":"node package/install.js","prune":"node package/prunebinaries.js"},"version":"5.2.0"}');

/***/ }),

/***/ 614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__nccwpck_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(784);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;