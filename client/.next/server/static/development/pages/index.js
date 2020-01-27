module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _improbable_eng_grpc_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @improbable-eng/grpc-web */ "@improbable-eng/grpc-web");
/* harmony import */ var _improbable_eng_grpc_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_improbable_eng_grpc_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _proto_proto_jobs_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proto/proto/jobs_pb */ "./proto/proto/jobs_pb.js");
/* harmony import */ var _proto_proto_jobs_pb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proto_proto_jobs_pb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _proto_proto_jobs_pb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proto/proto/jobs_pb_service */ "./proto/proto/jobs_pb_service.js");
/* harmony import */ var _proto_proto_jobs_pb_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_proto_proto_jobs_pb_service__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/app/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Home = () => {
  const [counter, setCounter] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const jobs = new _proto_proto_jobs_pb__WEBPACK_IMPORTED_MODULE_2__["GetAllJobsRequest"]();
    _improbable_eng_grpc_web__WEBPACK_IMPORTED_MODULE_1__["grpc"].unary(_proto_proto_jobs_pb_service__WEBPACK_IMPORTED_MODULE_3__["JobService"].GetAllJobs, {
      request: jobs,
      host: "https://localhost:3050",
      onEnd: res => {
        console.log(res.message.toObject());
      }
    });
  }, [counter]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Hello world!"), __jsx("button", {
    onClick: () => setCounter(counter + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Inc ", counter));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./proto/proto/jobs_pb.js":
/*!********************************!*\
  !*** ./proto/proto/jobs_pb.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: proto/jobs.proto

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.jobspb.CreateJobRequest', null, global);
goog.exportSymbol('proto.jobspb.CreateJobResponse', null, global);
goog.exportSymbol('proto.jobspb.GetAllJobsRequest', null, global);
goog.exportSymbol('proto.jobspb.GetAllJobsResponse', null, global);
goog.exportSymbol('proto.jobspb.Job', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.jobspb.Job = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.jobspb.Job, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobspb.Job.displayName = 'proto.jobspb.Job';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.jobspb.CreateJobRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.jobspb.CreateJobRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobspb.CreateJobRequest.displayName = 'proto.jobspb.CreateJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.jobspb.CreateJobResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.jobspb.CreateJobResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobspb.CreateJobResponse.displayName = 'proto.jobspb.CreateJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.jobspb.GetAllJobsRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.jobspb.GetAllJobsRequest, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobspb.GetAllJobsRequest.displayName = 'proto.jobspb.GetAllJobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.jobspb.GetAllJobsResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jobspb.GetAllJobsResponse.repeatedFields_, null);
};

goog.inherits(proto.jobspb.GetAllJobsResponse, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jobspb.GetAllJobsResponse.displayName = 'proto.jobspb.GetAllJobsResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.jobspb.Job.prototype.toObject = function (opt_includeInstance) {
    return proto.jobspb.Job.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.jobspb.Job} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.jobspb.Job.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, ""),
      title: jspb.Message.getFieldWithDefault(msg, 2, ""),
      description: jspb.Message.getFieldWithDefault(msg, 3, ""),
      image: jspb.Message.getFieldWithDefault(msg, 4, ""),
      email: jspb.Message.getFieldWithDefault(msg, 5, ""),
      phone: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobspb.Job}
 */


proto.jobspb.Job.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobspb.Job();
  return proto.jobspb.Job.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobspb.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobspb.Job}
 */


proto.jobspb.Job.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setTitle(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setDescription(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setImage(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setEmail(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPhone(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.jobspb.Job.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.jobspb.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobspb.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.jobspb.Job.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getTitle();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getDescription();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getImage();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getEmail();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getPhone();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional string id = 1;
 * @return {string}
 */


proto.jobspb.Job.prototype.getId = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setId = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string title = 2;
 * @return {string}
 */


proto.jobspb.Job.prototype.getTitle = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setTitle = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string description = 3;
 * @return {string}
 */


proto.jobspb.Job.prototype.getDescription = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setDescription = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string image = 4;
 * @return {string}
 */


proto.jobspb.Job.prototype.getImage = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setImage = function (value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string email = 5;
 * @return {string}
 */


proto.jobspb.Job.prototype.getEmail = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setEmail = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string phone = 6;
 * @return {string}
 */


proto.jobspb.Job.prototype.getPhone = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/**
 * @param {string} value
 * @return {!proto.jobspb.Job} returns this
 */


proto.jobspb.Job.prototype.setPhone = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.jobspb.CreateJobRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.jobspb.CreateJobRequest.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.jobspb.CreateJobRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.jobspb.CreateJobRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      job: (f = msg.getJob()) && proto.jobspb.Job.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobspb.CreateJobRequest}
 */


proto.jobspb.CreateJobRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobspb.CreateJobRequest();
  return proto.jobspb.CreateJobRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobspb.CreateJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobspb.CreateJobRequest}
 */


proto.jobspb.CreateJobRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.jobspb.Job();
        reader.readMessage(value, proto.jobspb.Job.deserializeBinaryFromReader);
        msg.setJob(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.jobspb.CreateJobRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.jobspb.CreateJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobspb.CreateJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.jobspb.CreateJobRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getJob();

  if (f != null) {
    writer.writeMessage(1, f, proto.jobspb.Job.serializeBinaryToWriter);
  }
};
/**
 * optional Job job = 1;
 * @return {?proto.jobspb.Job}
 */


proto.jobspb.CreateJobRequest.prototype.getJob = function () {
  return (
    /** @type{?proto.jobspb.Job} */
    jspb.Message.getWrapperField(this, proto.jobspb.Job, 1)
  );
};
/**
 * @param {?proto.jobspb.Job|undefined} value
 * @return {!proto.jobspb.CreateJobRequest} returns this
*/


proto.jobspb.CreateJobRequest.prototype.setJob = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.jobspb.CreateJobRequest} returns this
 */


proto.jobspb.CreateJobRequest.prototype.clearJob = function () {
  return this.setJob(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */


proto.jobspb.CreateJobRequest.prototype.hasJob = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.jobspb.CreateJobResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.jobspb.CreateJobResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.jobspb.CreateJobResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.jobspb.CreateJobResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      job: (f = msg.getJob()) && proto.jobspb.Job.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobspb.CreateJobResponse}
 */


proto.jobspb.CreateJobResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobspb.CreateJobResponse();
  return proto.jobspb.CreateJobResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobspb.CreateJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobspb.CreateJobResponse}
 */


proto.jobspb.CreateJobResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.jobspb.Job();
        reader.readMessage(value, proto.jobspb.Job.deserializeBinaryFromReader);
        msg.setJob(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.jobspb.CreateJobResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.jobspb.CreateJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobspb.CreateJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.jobspb.CreateJobResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getJob();

  if (f != null) {
    writer.writeMessage(1, f, proto.jobspb.Job.serializeBinaryToWriter);
  }
};
/**
 * optional Job job = 1;
 * @return {?proto.jobspb.Job}
 */


proto.jobspb.CreateJobResponse.prototype.getJob = function () {
  return (
    /** @type{?proto.jobspb.Job} */
    jspb.Message.getWrapperField(this, proto.jobspb.Job, 1)
  );
};
/**
 * @param {?proto.jobspb.Job|undefined} value
 * @return {!proto.jobspb.CreateJobResponse} returns this
*/


proto.jobspb.CreateJobResponse.prototype.setJob = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};
/**
 * Clears the message field making it undefined.
 * @return {!proto.jobspb.CreateJobResponse} returns this
 */


proto.jobspb.CreateJobResponse.prototype.clearJob = function () {
  return this.setJob(undefined);
};
/**
 * Returns whether this field is set.
 * @return {boolean}
 */


proto.jobspb.CreateJobResponse.prototype.hasJob = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.jobspb.GetAllJobsRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.jobspb.GetAllJobsRequest.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.jobspb.GetAllJobsRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.jobspb.GetAllJobsRequest.toObject = function (includeInstance, msg) {
    var f,
        obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobspb.GetAllJobsRequest}
 */


proto.jobspb.GetAllJobsRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobspb.GetAllJobsRequest();
  return proto.jobspb.GetAllJobsRequest.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobspb.GetAllJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobspb.GetAllJobsRequest}
 */


proto.jobspb.GetAllJobsRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.jobspb.GetAllJobsRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.jobspb.GetAllJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobspb.GetAllJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.jobspb.GetAllJobsRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.jobspb.GetAllJobsResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.jobspb.GetAllJobsResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.jobspb.GetAllJobsResponse.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.jobspb.GetAllJobsResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.jobspb.GetAllJobsResponse.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      jobsList: jspb.Message.toObjectList(msg.getJobsList(), proto.jobspb.Job.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jobspb.GetAllJobsResponse}
 */


proto.jobspb.GetAllJobsResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jobspb.GetAllJobsResponse();
  return proto.jobspb.GetAllJobsResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jobspb.GetAllJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jobspb.GetAllJobsResponse}
 */


proto.jobspb.GetAllJobsResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.jobspb.Job();
        reader.readMessage(value, proto.jobspb.Job.deserializeBinaryFromReader);
        msg.addJobs(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.jobspb.GetAllJobsResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.jobspb.GetAllJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jobspb.GetAllJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.jobspb.GetAllJobsResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getJobsList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.jobspb.Job.serializeBinaryToWriter);
  }
};
/**
 * repeated Job jobs = 1;
 * @return {!Array<!proto.jobspb.Job>}
 */


proto.jobspb.GetAllJobsResponse.prototype.getJobsList = function () {
  return (
    /** @type{!Array<!proto.jobspb.Job>} */
    jspb.Message.getRepeatedWrapperField(this, proto.jobspb.Job, 1)
  );
};
/**
 * @param {!Array<!proto.jobspb.Job>} value
 * @return {!proto.jobspb.GetAllJobsResponse} returns this
*/


proto.jobspb.GetAllJobsResponse.prototype.setJobsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.jobspb.Job=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jobspb.Job}
 */


proto.jobspb.GetAllJobsResponse.prototype.addJobs = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.jobspb.Job, opt_index);
};
/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jobspb.GetAllJobsResponse} returns this
 */


proto.jobspb.GetAllJobsResponse.prototype.clearJobsList = function () {
  return this.setJobsList([]);
};

goog.object.extend(exports, proto.jobspb);

/***/ }),

/***/ "./proto/proto/jobs_pb_service.js":
/*!****************************************!*\
  !*** ./proto/proto/jobs_pb_service.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// package: jobspb
// file: proto/jobs.proto
var proto_jobs_pb = __webpack_require__(/*! ../proto/jobs_pb */ "./proto/proto/jobs_pb.js");

var grpc = __webpack_require__(/*! @improbable-eng/grpc-web */ "@improbable-eng/grpc-web").grpc;

var JobService = function () {
  function JobService() {}

  JobService.serviceName = "jobspb.JobService";
  return JobService;
}();

JobService.CreateJob = {
  methodName: "CreateJob",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: proto_jobs_pb.CreateJobRequest,
  responseType: proto_jobs_pb.CreateJobResponse
};
JobService.GetAllJobs = {
  methodName: "GetAllJobs",
  service: JobService,
  requestStream: false,
  responseStream: false,
  requestType: proto_jobs_pb.GetAllJobsRequest,
  responseType: proto_jobs_pb.GetAllJobsResponse
};
exports.JobService = JobService;

function JobServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

JobServiceClient.prototype.createJob = function createJob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }

  var client = grpc.unary(JobService.CreateJob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

JobServiceClient.prototype.getAllJobs = function getAllJobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }

  var client = grpc.unary(JobService.GetAllJobs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.JobServiceClient = JobServiceClient;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@improbable-eng/grpc-web":
/*!*******************************************!*\
  !*** external "@improbable-eng/grpc-web" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@improbable-eng/grpc-web");

/***/ }),

/***/ "google-protobuf":
/*!**********************************!*\
  !*** external "google-protobuf" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-protobuf");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map