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
 *
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address:30000/api_ <p>**Default Port**<br>`30005`
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

// Network metrics subscription response
type NetworkSubscriptionResponse struct {

	// Subscription identifier
	SubscriptionId string `json:"subscriptionId,omitempty"`

	// Uniquely identifies this create subscription request. If there is a communication failure during the request, using the same clientCorrelator when retrying the request allows the operator to avoid creating a duplicate subscription.
	ClientCorrelator string `json:"clientCorrelator,omitempty"`

	CallbackReference *NetworkCallbackReference `json:"callbackReference,omitempty"`

	// Self referring URL.
	ResourceURL string `json:"resourceURL,omitempty"`

	NetworkQueryParams *NetworkQueryParams `json:"networkQueryParams,omitempty"`

	// Recurrence of recurring-time-based notifications
	Recurrence int32 `json:"recurrence,omitempty"`

	// Type of subscription triggering notifications
	SubscriptionType string `json:"subscriptionType,omitempty"`
}
