/*
 Copyright (c) 2017 Vasyl Stokolosa https://github.com/shystruk
 License: MIT - https://opensource.org/licenses/MIT
 https://github.com/shystruk/publish-subscribe-js
 */
(function(f) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = f();
    } else if (typeof define === 'function' && define.amd) {
        define([],f);
    } else {
        var g;

        if (typeof window !== 'undefined') {
            g = window;
        } else if(typeof global !== 'undefined') {
            g = global;
        } else if(typeof self !== 'undefined') {
            g = self;
        } else {
            g = this;
        }

        g.myModule = f();
    }
})(function() {
    var define,module,exports;

    return {
        key: 0,
        subscribers: {},

        /**
         * @param {String} topic
         * @param {Function} subscriber
         * @return {Number}
         */
        subscribe: function (topic, subscriber) {
            if (topic in this.subscribers) {
                this.subscribers[topic][this.key] = subscriber;
            } else {
                this.subscribers[topic] = {};
                this.subscribers[topic][this.key] = subscriber;
            }

            return this.key++;
        },

        /**
         * @param {String} topic
         * @param {*=} data
         */
        publish: function (topic, data) {
            for (var sub in this.subscribers[topic]) {
                try {
                    this.subscribers[topic][sub](data, Array.prototype.slice.call(arguments));
                } catch (error) {
                    throw error;
                }
            }
        },

        /**
         * @param {String} topic
         * @param {Number} key
         */
        unsubscribe: function (topic, key) {
            if (key) {
                delete this.subscribers[topic][key];
            } else {
                delete this.subscribers[topic];
            }
        },

        unsubscribeAll: function () {
            this.subscribers = {};
            this.key = 0;
        }
    };
});
