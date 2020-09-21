/*
 * Copyright (c) 2020  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Sandbox Controller REST API
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GeoData', 'model/NetworkCharacteristics', 'model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoData'), require('./NetworkCharacteristics'), require('./Process'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeSandboxControllerRestApi) {
      root.AdvantEdgeSandboxControllerRestApi = {};
    }
    root.AdvantEdgeSandboxControllerRestApi.PhysicalLocation = factory(root.AdvantEdgeSandboxControllerRestApi.ApiClient, root.AdvantEdgeSandboxControllerRestApi.GeoData, root.AdvantEdgeSandboxControllerRestApi.NetworkCharacteristics, root.AdvantEdgeSandboxControllerRestApi.Process);
  }
}(this, function(ApiClient, GeoData, NetworkCharacteristics, Process) {
  'use strict';

  /**
   * The PhysicalLocation model module.
   * @module model/PhysicalLocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PhysicalLocation</code>.
   * Physical location object
   * @alias module:model/PhysicalLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>PhysicalLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhysicalLocation} obj Optional instance to populate.
   * @return {module:model/PhysicalLocation} The populated <code>PhysicalLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('isExternal'))
        obj.isExternal = ApiClient.convertToType(data['isExternal'], 'Boolean');
      if (data.hasOwnProperty('geoData'))
        obj.geoData = GeoData.constructFromObject(data['geoData']);
      if (data.hasOwnProperty('networkLocationsInRange'))
        obj.networkLocationsInRange = ApiClient.convertToType(data['networkLocationsInRange'], ['String']);
      if (data.hasOwnProperty('connected'))
        obj.connected = ApiClient.convertToType(data['connected'], 'Boolean');
      if (data.hasOwnProperty('wireless'))
        obj.wireless = ApiClient.convertToType(data['wireless'], 'Boolean');
      if (data.hasOwnProperty('wirelessType'))
        obj.wirelessType = ApiClient.convertToType(data['wirelessType'], 'String');
      if (data.hasOwnProperty('meta'))
        obj.meta = ApiClient.convertToType(data['meta'], {'String': 'String'});
      if (data.hasOwnProperty('userMeta'))
        obj.userMeta = ApiClient.convertToType(data['userMeta'], {'String': 'String'});
      if (data.hasOwnProperty('processes'))
        obj.processes = ApiClient.convertToType(data['processes'], [Process]);
      if (data.hasOwnProperty('netChar'))
        obj.netChar = NetworkCharacteristics.constructFromObject(data['netChar']);
      if (data.hasOwnProperty('linkLatency'))
        obj.linkLatency = ApiClient.convertToType(data['linkLatency'], 'Number');
      if (data.hasOwnProperty('linkLatencyVariation'))
        obj.linkLatencyVariation = ApiClient.convertToType(data['linkLatencyVariation'], 'Number');
      if (data.hasOwnProperty('linkThroughput'))
        obj.linkThroughput = ApiClient.convertToType(data['linkThroughput'], 'Number');
      if (data.hasOwnProperty('linkPacketLoss'))
        obj.linkPacketLoss = ApiClient.convertToType(data['linkPacketLoss'], 'Number');
    }
    return obj;
  }

  /**
   * Unique physical location ID
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Physical location name
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Physical location type
   * @member {module:model/PhysicalLocation.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * true: Physical location is external to MEEP false: Physical location is internal to MEEP
   * @member {Boolean} isExternal
   */
  exports.prototype.isExternal = undefined;

  /**
   * @member {module:model/GeoData} geoData
   */
  exports.prototype.geoData = undefined;

  /**
   * @member {Array.<String>} networkLocationsInRange
   */
  exports.prototype.networkLocationsInRange = undefined;

  /**
   * true: Physical location has network connectivity false: Physical location has no network connectivity
   * @member {Boolean} connected
   */
  exports.prototype.connected = undefined;

  /**
   * true: Physical location uses a wireless connection false: Physical location uses a wired connection
   * @member {Boolean} wireless
   */
  exports.prototype.wireless = undefined;

  /**
   * Prioritized, comma-separated list of supported wireless connection types. Default priority if not specififed is 'wifi,5g,4g,other'. Wireless connection types: - 4g - 5g - wifi - other
   * @member {String} wirelessType
   */
  exports.prototype.wirelessType = undefined;

  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} meta
   */
  exports.prototype.meta = undefined;

  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} userMeta
   */
  exports.prototype.userMeta = undefined;

  /**
   * @member {Array.<module:model/Process>} processes
   */
  exports.prototype.processes = undefined;

  /**
   * @member {module:model/NetworkCharacteristics} netChar
   */
  exports.prototype.netChar = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar latency
   * @member {Number} linkLatency
   */
  exports.prototype.linkLatency = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar latencyVariation
   * @member {Number} linkLatencyVariation
   */
  exports.prototype.linkLatencyVariation = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar throughputUl and throughputDl
   * @member {Number} linkThroughput
   */
  exports.prototype.linkThroughput = undefined;

  /**
   * **DEPRECATED** As of release 1.5.0, replaced by netChar packetLoss
   * @member {Number} linkPacketLoss
   */
  exports.prototype.linkPacketLoss = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UE"
     * @const
     */
    UE: "UE",

    /**
     * value: "FOG"
     * @const
     */
    FOG: "FOG",

    /**
     * value: "EDGE"
     * @const
     */
    EDGE: "EDGE",

    /**
     * value: "CN"
     * @const
     */
    CN: "CN",

    /**
     * value: "DC"
     * @const
     */
    DC: "DC"
  };

  return exports;

}));
