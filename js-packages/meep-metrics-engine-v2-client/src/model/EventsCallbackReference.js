/*
 * Copyright (c) 2019  InterDigital Communications, Inc
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
 * AdvantEDGE Metrics Service REST API
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address:30000/api_ <p>**Default Port**<br>`30005`
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdvantEdgeMetricsServiceRestApi) {
      root.AdvantEdgeMetricsServiceRestApi = {};
    }
    root.AdvantEdgeMetricsServiceRestApi.EventsCallbackReference = factory(root.AdvantEdgeMetricsServiceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EventsCallbackReference model module.
   * @module model/EventsCallbackReference
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EventsCallbackReference</code>.
   * Notification callback definition.
   * @alias module:model/EventsCallbackReference
   * @class
   * @param notifyURL {String} The URL of your own listener application.
   */
  var exports = function(notifyURL) {
    this.notifyURL = notifyURL;
  };

  /**
   * Constructs a <code>EventsCallbackReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventsCallbackReference} obj Optional instance to populate.
   * @return {module:model/EventsCallbackReference} The populated <code>EventsCallbackReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('notifyURL'))
        obj.notifyURL = ApiClient.convertToType(data['notifyURL'], 'String');
    }
    return obj;
  }

  /**
   * The URL of your own listener application.
   * @member {String} notifyURL
   */
  exports.prototype.notifyURL = undefined;

  return exports;

}));
