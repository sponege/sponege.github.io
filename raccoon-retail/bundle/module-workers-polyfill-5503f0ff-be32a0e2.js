!function(e) {
    if (!e || !0 !== e._$P) {
        if (e) {
            var n, r = Object.defineProperty({}, "type", {
                get: function() {
                    n = !0;
                }
            });
            try {
                var t = URL.createObjectURL(new Blob([ "" ], {
                    type: "text/javascript"
                }));
                new e(t, r).terminate(), URL.revokeObjectURL(t);
            } catch (e) {}
            if (!n) try {
                new e("data:text/javascript,", r).terminate();
            } catch (e) {}
            if (n) return;
            (self.Worker = function(n, r) {
                return r && "module" == r.type && (r = {
                    name: n + "\n" + (r.name || "")
                }, n = "undefined" == typeof document ? location.href : document.currentScript && document.currentScript.src || (new Error).stack.match(/[(@]((file|https?):\/\/[^)]+?):\d+(:\d+)?(?:\)|$)/m)[1]), 
                new e(n, r);
            })._$P = !0;
        }
        "undefined" == typeof document && function() {
            var e = {}, n = {};
            function r(e, n) {
                for (n = n.replace(/^(\.\.\/|\.\/)/, e.replace(/[^/]+$/g, "") + "$1"); n !== (n = n.replace(/[^/]+\/\.\.\//g, "")); ) ;
                return n.replace(/\.\//g, "");
            }
            var t = [], s = t.push.bind(t);
            addEventListener("message", s);
            var a = self.name.match(/^[^\n]+/)[0];
            self.name = self.name.replace(/^[^\n]*\n/g, ""), function t(s, a) {
                var u, o = s;
                return a && (s = r(a, s)), e[s] || (e[s] = fetch(s).then((function(a) {
                    if ((o = a.url) !== s) {
                        if (null != e[o]) return e[o];
                        e[o] = e[s];
                    }
                    return a.text().then((function(e) {
                        if (!a.ok) throw e;
                        var c = {
                            exports: {}
                        };
                        u = n[o] || (n[o] = c.exports);
                        var i = function(e) {
                            return t(e, o);
                        }, f = [];
                        return e = function(e, n) {
                            n = n || [];
                            var r, t = [], a = 0;
                            function u(e, n) {
                                for (var s, a = /(?:^|,)\s*([\w$]+)(?:\s+as\s+([\w$]+))?\s*/g, u = []; s = a.exec(e); ) n ? t.push((s[2] || s[1]) + ":" + s[1]) : u.push((s[2] || s[1]) + "=" + r + "." + s[1]);
                                return u;
                            }
                            return (e = e.replace(/(^\s*|[;}\s\n]\s*)import\s*(?:(?:([\w$]+)(?:\s*\,\s*\{([^}]+)\})?|(?:\*\s*as\s+([\w$]+))|\{([^}]*)\})\s*from)?\s*(['"])(.+?)\6/g, (function(e, t, s, o, c, i, f, p) {
                                return n.push(p), t += "var " + (r = "$im$" + ++a) + "=$require(" + f + p + f + ")", 
                                s && (t += ";var " + s + " = 'default' in " + r + " ? " + r + ".default : " + r), 
                                c && (t += ";var " + c + " = " + r), (o = o || i) && (t += ";var " + u(o, !1)), 
                                t;
                            })).replace(/((?:^|[;}\s\n])\s*)export\s*(?:\s+(default)\s+|((?:async\s+)?function\s*\*?|class|const\s|let\s|var\s)\s*([a-zA-Z0-9$_{[]+))/g, (function(e, n, r, s, u) {
                                if (r) {
                                    var o = "$im$" + ++a;
                                    return t.push("default:" + o), n + "var " + o + "=";
                                }
                                return t.push(u + ":" + u), n + s + " " + u;
                            })).replace(/((?:^|[;}\s\n])\s*)export\s*\{([^}]+)\}\s*;?/g, (function(e, n, r) {
                                return u(r, !0), n;
                            })).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)(import\s*\([\s\S]+?\))/g, "$1$$$2")).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)import\.meta\.url/g, "$1" + JSON.stringify(s)) + "\n$module.exports={" + t.join(",") + "}";
                        }(e, f), Promise.all(f.map((function(e) {
                            var s = r(o, e);
                            return s in n ? n[s] : t(s);
                        }))).then((function(n) {
                            e += "\n//# sourceURL=" + s;
                            try {
                                var r = new Function("$import", "$require", "$module", "$exports", e);
                            } catch (n) {
                                var t = n.line - 1, a = n.column, o = e.split("\n"), p = (o[t - 2] || "") + "\n" + o[t - 1] + "\n" + (null == a ? "" : new Array(a).join("-") + "^\n") + (o[t] || ""), l = new Error(n.message + "\n\n" + p, s, t);
                                throw l.sourceURL = l.fileName = s, l.line = t, l.column = a, l;
                            }
                            var m = r(i, (function(e) {
                                return n[f.indexOf(e)];
                            }), c, c.exports);
                            return null != m && (c.exports = m), Object.assign(u, c.exports), c.exports;
                        }));
                    }));
                })));
            }(a).then((function() {
                removeEventListener("message", s), t.map(dispatchEvent);
            })).catch((function(e) {
                setTimeout((function() {
                    throw e;
                }));
            }));
        }();
    }
}(self.Worker);
