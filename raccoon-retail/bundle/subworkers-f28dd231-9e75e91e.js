!function() {
    var e = !1;
    try {
        document;
    } catch (t) {
        e = !0;
    }
    e && (self.Worker || (self.Worker = function(e, t) {
        var s = this;
        this.id = Math.random().toString(36).substr(2, 5), this.eventListeners = {
            message: []
        }, self.addEventListener("message", (function(e) {
            if (e.data && e.data._from === s.id) {
                var t = new MessageEvent("message");
                t.initMessageEvent("message", !1, !1, e.data.message, s, "", null, []), s.dispatchEvent(t), 
                s.onmessage && s.onmessage(t);
            }
        }));
        var n = self.location.pathname, a = "/" == e.charAt(0) ? e : "/" + e, r = n.substring(0, n.lastIndexOf("/")) + a;
        self.postMessage({
            _subworker: !0,
            cmd: "newWorker",
            id: this.id,
            path: r,
            workerOptions: t
        });
    }, Worker.prototype = {
        onerror: null,
        onmessage: null,
        postMessage: function(e, t) {
            self.postMessage({
                _subworker: !0,
                id: this.id,
                cmd: "passMessage",
                message: e,
                transfer: t
            }, t);
        },
        terminate: function() {
            self.postMessage({
                _subworker: !0,
                cmd: "terminate",
                id: this.id
            });
        },
        addEventListener: function(e, t, s) {
            this.eventListeners[e] && this.eventListeners[e].push(t);
        },
        removeEventListener: function(e, t, s) {
            if (e in this.eventListeners) {
                var n = this.eventListeners[e].indexOf(t);
                -1 !== n && this.eventListeners[e].splice(n, 1);
            }
        },
        dispatchEvent: function(e) {
            for (var t = this.eventListeners[e.type], s = 0; s < t.length; s++) t[s](e);
        }
    }));
    var t = {}, s = {
        newWorker: function(e) {
            var s = new Worker(e.data.path, e.data.workerOptions);
            s.addEventListener("message", (function(t) {
                var s = {
                    _from: e.data.id,
                    message: t.data
                };
                e.target.postMessage(s);
            })), t[e.data.id] = s;
        },
        terminate: function(e) {
            t[e.data.id].terminate();
        },
        passMessage: function(e) {
            t[e.data.id].postMessage(e.data.message, e.data.transfer);
        }
    }, n = function(e) {
        e.data && e.data._subworker && s[e.data.cmd](e);
    }, a = Worker;
    Worker = function(e, t) {
        if (this.constructor !== Worker) throw new TypeError("Failed to construct 'Worker': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
        var s = e.indexOf("blob:");
        -1 !== s && 0 !== s && (e = e.substring(s));
        var r = new a(e, t);
        return r.addEventListener("message", n), r;
    };
}();
