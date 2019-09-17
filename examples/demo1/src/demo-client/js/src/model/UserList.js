/**
 * MEEP Demo App API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.UserList = factory(root.MeepDemoAppApi.ApiClient, root.MeepDemoAppApi.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';




  /**
   * The UserList model module.
   * @module model/UserList
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UserList</code>.
   * @alias module:model/UserList
   * @class
   * @param userList {Array.<module:model/UserInfo>} 
   */
  var exports = function(userList) {
    var _this = this;

    _this['userList'] = userList;
  };

  /**
   * Constructs a <code>UserList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserList} obj Optional instance to populate.
   * @return {module:model/UserList} The populated <code>UserList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userList')) {
        obj['userList'] = ApiClient.convertToType(data['userList'], [UserInfo]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserInfo>} userList
   */
  exports.prototype['userList'] = undefined;



  return exports;
}));


