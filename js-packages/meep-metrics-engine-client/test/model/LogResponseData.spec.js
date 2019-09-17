/**
 * MEEP Metrics Engine Service REST API
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MeepMetricsEngineServiceRestApi);
  }
}(this, function(expect, MeepMetricsEngineServiceRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MeepMetricsEngineServiceRestApi.LogResponseData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LogResponseData', function() {
    it('should create an instance of LogResponseData', function() {
      // uncomment below and update the code to test LogResponseData
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be.a(MeepMetricsEngineServiceRestApi.LogResponseData);
    });

    it('should have the property rx (base name: "rx")', function() {
      // uncomment below and update the code to test the property rx
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property rxBytes (base name: "rxBytes")', function() {
      // uncomment below and update the code to test the property rxBytes
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property throughput (base name: "throughput")', function() {
      // uncomment below and update the code to test the property throughput
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property packetLoss (base name: "packet-loss")', function() {
      // uncomment below and update the code to test the property packetLoss
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property latency (base name: "latency")', function() {
      // uncomment below and update the code to test the property latency
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property newPoa (base name: "newPoa")', function() {
      // uncomment below and update the code to test the property newPoa
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

    it('should have the property oldPoa (base name: "oldPoa")', function() {
      // uncomment below and update the code to test the property oldPoa
      //var instane = new MeepMetricsEngineServiceRestApi.LogResponseData();
      //expect(instance).to.be();
    });

  });

}));
