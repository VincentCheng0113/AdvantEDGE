/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { combineReducers } from 'redux';

import uiReducer from './ui';
import cfgReducer from './cfg';
import execReducer from './exec';
import settingsReducer from './settings';
import monitorReducer from './monitor';

const meepReducer = combineReducers({
  ui: uiReducer,
  cfg: cfgReducer,
  exec: execReducer,
  monitor: monitorReducer,
  settings: settingsReducer
});

export default meepReducer;
