/**
 * Copyright 2012 Adobe Systems Incorporated
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
 *
 */


/**
 * Pender Event
 *
 * basic base class definition supporting custom events
 * written to avoid dependency on a larger library
 * defines a very basic custom event api
 * author: Lorin Beer
 * email : lorin@adobe.com
 */


var PenderEvent = {
    _listeners : {},

    addListener : function (event,listener) {
	if (typeof _listeners[event] === "undefined") {
	    _listeners[event] = [];
	}
	_listeners[event].push (listener);
    },

    fire : function (event,firer) {
	var i = 0;
	if (!(typeof _listeners[event] === "unidentified")) {
	    listeners[i].handle(event,firer);
	}
    }
}