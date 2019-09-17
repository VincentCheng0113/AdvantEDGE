/**
 * MEEP Controller REST API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/EgressService', 'model/IngressService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EgressService'), require('./IngressService'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.NodeServiceMaps = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.EgressService, root.MeepControllerRestApi.IngressService);
  }
}(this, function(ApiClient, EgressService, IngressService) {
  'use strict';




  /**
   * The NodeServiceMaps model module.
   * @module model/NodeServiceMaps
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NodeServiceMaps</code>.
   * Node-specific mapping of exposed internal &amp; external services
   * @alias module:model/NodeServiceMaps
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NodeServiceMaps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeServiceMaps} obj Optional instance to populate.
   * @return {module:model/NodeServiceMaps} The populated <code>NodeServiceMaps</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('node')) {
        obj['node'] = ApiClient.convertToType(data['node'], 'String');
      }
      if (data.hasOwnProperty('ingressServiceMap')) {
        obj['ingressServiceMap'] = ApiClient.convertToType(data['ingressServiceMap'], [IngressService]);
      }
      if (data.hasOwnProperty('egressServiceMap')) {
        obj['egressServiceMap'] = ApiClient.convertToType(data['egressServiceMap'], [EgressService]);
      }
    }
    return obj;
  }

  /**
   * Unique external node identifier
   * @member {String} node
   */
  exports.prototype['node'] = undefined;
  /**
   * @member {Array.<module:model/IngressService>} ingressServiceMap
   */
  exports.prototype['ingressServiceMap'] = undefined;
  /**
   * @member {Array.<module:model/EgressService>} egressServiceMap
   */
  exports.prototype['egressServiceMap'] = undefined;



  return exports;
}));


