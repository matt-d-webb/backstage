/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var identity_v1_identity_pb = require('../../identity/v1/identity_pb.js');
goog.object.extend(proto, identity_v1_identity_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.spotify.backstage.scaffolder.v1.CreateReply', null, global);
goog.exportSymbol('proto.spotify.backstage.scaffolder.v1.CreateRequest', null, global);
goog.exportSymbol('proto.spotify.backstage.scaffolder.v1.Empty', null, global);
goog.exportSymbol('proto.spotify.backstage.scaffolder.v1.ListTemplatesReply', null, global);
goog.exportSymbol('proto.spotify.backstage.scaffolder.v1.Template', null, global);
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
proto.spotify.backstage.scaffolder.v1.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spotify.backstage.scaffolder.v1.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spotify.backstage.scaffolder.v1.Empty.displayName = 'proto.spotify.backstage.scaffolder.v1.Empty';
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
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.repeatedFields_, null);
};
goog.inherits(proto.spotify.backstage.scaffolder.v1.ListTemplatesReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.displayName = 'proto.spotify.backstage.scaffolder.v1.ListTemplatesReply';
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
proto.spotify.backstage.scaffolder.v1.CreateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spotify.backstage.scaffolder.v1.CreateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spotify.backstage.scaffolder.v1.CreateReply.displayName = 'proto.spotify.backstage.scaffolder.v1.CreateReply';
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
proto.spotify.backstage.scaffolder.v1.CreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spotify.backstage.scaffolder.v1.CreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spotify.backstage.scaffolder.v1.CreateRequest.displayName = 'proto.spotify.backstage.scaffolder.v1.CreateRequest';
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
proto.spotify.backstage.scaffolder.v1.Template = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spotify.backstage.scaffolder.v1.Template, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spotify.backstage.scaffolder.v1.Template.displayName = 'proto.spotify.backstage.scaffolder.v1.Template';
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
proto.spotify.backstage.scaffolder.v1.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.spotify.backstage.scaffolder.v1.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spotify.backstage.scaffolder.v1.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.spotify.backstage.scaffolder.v1.Empty}
 */
proto.spotify.backstage.scaffolder.v1.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spotify.backstage.scaffolder.v1.Empty;
  return proto.spotify.backstage.scaffolder.v1.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spotify.backstage.scaffolder.v1.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spotify.backstage.scaffolder.v1.Empty}
 */
proto.spotify.backstage.scaffolder.v1.Empty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.spotify.backstage.scaffolder.v1.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spotify.backstage.scaffolder.v1.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spotify.backstage.scaffolder.v1.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.repeatedFields_ = [1];



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
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.toObject = function(opt_includeInstance) {
  return proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spotify.backstage.scaffolder.v1.ListTemplatesReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    templatesList: jspb.Message.toObjectList(msg.getTemplatesList(),
    proto.spotify.backstage.scaffolder.v1.Template.toObject, includeInstance)
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
 * @return {!proto.spotify.backstage.scaffolder.v1.ListTemplatesReply}
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spotify.backstage.scaffolder.v1.ListTemplatesReply;
  return proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spotify.backstage.scaffolder.v1.ListTemplatesReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spotify.backstage.scaffolder.v1.ListTemplatesReply}
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.spotify.backstage.scaffolder.v1.Template;
      reader.readMessage(value,proto.spotify.backstage.scaffolder.v1.Template.deserializeBinaryFromReader);
      msg.addTemplates(value);
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
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spotify.backstage.scaffolder.v1.ListTemplatesReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.spotify.backstage.scaffolder.v1.Template.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Template templates = 1;
 * @return {!Array<!proto.spotify.backstage.scaffolder.v1.Template>}
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.getTemplatesList = function() {
  return /** @type{!Array<!proto.spotify.backstage.scaffolder.v1.Template>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.spotify.backstage.scaffolder.v1.Template, 1));
};


/** @param {!Array<!proto.spotify.backstage.scaffolder.v1.Template>} value */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.setTemplatesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.spotify.backstage.scaffolder.v1.Template=} opt_value
 * @param {number=} opt_index
 * @return {!proto.spotify.backstage.scaffolder.v1.Template}
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.addTemplates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.spotify.backstage.scaffolder.v1.Template, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.spotify.backstage.scaffolder.v1.ListTemplatesReply.prototype.clearTemplatesList = function() {
  this.setTemplatesList([]);
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
proto.spotify.backstage.scaffolder.v1.CreateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.spotify.backstage.scaffolder.v1.CreateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.CreateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    componentId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.spotify.backstage.scaffolder.v1.CreateReply}
 */
proto.spotify.backstage.scaffolder.v1.CreateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spotify.backstage.scaffolder.v1.CreateReply;
  return proto.spotify.backstage.scaffolder.v1.CreateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spotify.backstage.scaffolder.v1.CreateReply}
 */
proto.spotify.backstage.scaffolder.v1.CreateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentId(value);
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
proto.spotify.backstage.scaffolder.v1.CreateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spotify.backstage.scaffolder.v1.CreateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.CreateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComponentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string component_id = 1;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.CreateReply.prototype.getComponentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.CreateReply.prototype.setComponentId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.spotify.backstage.scaffolder.v1.CreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    templateId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    org: jspb.Message.getFieldWithDefault(msg, 2, ""),
    componentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pb_private: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.spotify.backstage.scaffolder.v1.CreateRequest}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spotify.backstage.scaffolder.v1.CreateRequest;
  return proto.spotify.backstage.scaffolder.v1.CreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spotify.backstage.scaffolder.v1.CreateRequest}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemplateId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrg(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComponentId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrivate(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spotify.backstage.scaffolder.v1.CreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spotify.backstage.scaffolder.v1.CreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemplateId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getComponentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrivate();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string template_id = 1;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.getTemplateId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.setTemplateId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org = 2;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.getOrg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.setOrg = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string component_id = 3;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.getComponentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.setComponentId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool private = 4;
 * @return {boolean}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.getPrivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.setPrivate = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.spotify.backstage.scaffolder.v1.CreateRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.spotify.backstage.scaffolder.v1.Template.prototype.toObject = function(opt_includeInstance) {
  return proto.spotify.backstage.scaffolder.v1.Template.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spotify.backstage.scaffolder.v1.Template} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.Template.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && identity_v1_identity_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.spotify.backstage.scaffolder.v1.Template}
 */
proto.spotify.backstage.scaffolder.v1.Template.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spotify.backstage.scaffolder.v1.Template;
  return proto.spotify.backstage.scaffolder.v1.Template.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spotify.backstage.scaffolder.v1.Template} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spotify.backstage.scaffolder.v1.Template}
 */
proto.spotify.backstage.scaffolder.v1.Template.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new identity_v1_identity_pb.User;
      reader.readMessage(value,identity_v1_identity_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
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
proto.spotify.backstage.scaffolder.v1.Template.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spotify.backstage.scaffolder.v1.Template.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spotify.backstage.scaffolder.v1.Template} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spotify.backstage.scaffolder.v1.Template.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      identity_v1_identity_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.Template.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.Template.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.spotify.backstage.scaffolder.v1.Template.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional spotify.backstage.identity.v1.User user = 4;
 * @return {?proto.spotify.backstage.identity.v1.User}
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.getUser = function() {
  return /** @type{?proto.spotify.backstage.identity.v1.User} */ (
    jspb.Message.getWrapperField(this, identity_v1_identity_pb.User, 4));
};


/** @param {?proto.spotify.backstage.identity.v1.User|undefined} value */
proto.spotify.backstage.scaffolder.v1.Template.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.spotify.backstage.scaffolder.v1.Template.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.spotify.backstage.scaffolder.v1);