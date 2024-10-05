globalThis.VERSION_TIMESTAMP = "000", globalThis.DEBUG = !0, globalThis.INCLUDE_CHEATS = !0, 
globalThis.ROLLUP_BUILD = !1, globalThis.PUBLISHER_BUILD = "none";

/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const t = 2, e = 0, n = 2, i = 1e3, r = 1001, a = 1002, s = 1003, o = 1004, l = 1005, c = 1006, h = 1007, u = 1008, d = 2300, p = 2301, f = 1, m = 2, g = 3001;

class _ {
    addEventListener(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        const n = this._listeners;
        void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
    }
    hasEventListener(t, e) {
        if (void 0 === this._listeners) return !1;
        const n = this._listeners;
        return void 0 !== n[t] && -1 !== n[t].indexOf(e);
    }
    removeEventListener(t, e) {
        if (void 0 === this._listeners) return;
        const n = this._listeners[t];
        if (void 0 !== n) {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
        }
    }
    dispatchEvent(t) {
        if (void 0 === this._listeners) return;
        const e = this._listeners[t.type];
        if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null;
        }
    }
}

const v = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff" ];

let x = 1234567;

const y = Math.PI / 180, M = 180 / Math.PI;

function b() {
    const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
    return (v[255 & t] + v[t >> 8 & 255] + v[t >> 16 & 255] + v[t >> 24 & 255] + "-" + v[255 & e] + v[e >> 8 & 255] + "-" + v[e >> 16 & 15 | 64] + v[e >> 24 & 255] + "-" + v[63 & n | 128] + v[n >> 8 & 255] + "-" + v[n >> 16 & 255] + v[n >> 24 & 255] + v[255 & i] + v[i >> 8 & 255] + v[i >> 16 & 255] + v[i >> 24 & 255]).toLowerCase();
}

function S(t, e, n) {
    return Math.max(e, Math.min(n, t));
}

function w(t, e) {
    return (t % e + e) % e;
}

function T(t, e, n) {
    return (1 - n) * t + n * e;
}

function E(t) {
    return 0 == (t & t - 1) && 0 !== t;
}

function A(t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
}

function C(t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
}

function L(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;

      case Uint16Array:
        return t / 65535;

      case Uint8Array:
        return t / 255;

      case Int16Array:
        return Math.max(t / 32767, -1);

      case Int8Array:
        return Math.max(t / 127, -1);

      default:
        throw new Error("Invalid component type.");
    }
}

function R(t, e) {
    switch (e.constructor) {
      case Float32Array:
        return t;

      case Uint16Array:
        return Math.round(65535 * t);

      case Uint8Array:
        return Math.round(255 * t);

      case Int16Array:
        return Math.round(32767 * t);

      case Int8Array:
        return Math.round(127 * t);

      default:
        throw new Error("Invalid component type.");
    }
}

var P = Object.freeze({
    __proto__: null,
    DEG2RAD: y,
    RAD2DEG: M,
    generateUUID: b,
    clamp: S,
    euclideanModulo: w,
    mapLinear: function(t, e, n, i, r) {
        return i + (t - e) * (r - i) / (n - e);
    },
    inverseLerp: function(t, e, n) {
        return t !== e ? (n - t) / (e - t) : 0;
    },
    lerp: T,
    damp: function(t, e, n, i) {
        return T(t, e, 1 - Math.exp(-n * i));
    },
    pingpong: function(t, e = 1) {
        return e - Math.abs(w(t, 2 * e) - e);
    },
    smoothstep: function(t, e, n) {
        return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
    },
    smootherstep: function(t, e, n) {
        return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    randInt: function(t, e) {
        return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function(t, e) {
        return t + Math.random() * (e - t);
    },
    randFloatSpread: function(t) {
        return t * (.5 - Math.random());
    },
    seededRandom: function(t) {
        void 0 !== t && (x = t);
        let e = x += 1831565813;
        return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), 
        ((e ^ e >>> 14) >>> 0) / 4294967296;
    },
    degToRad: function(t) {
        return t * y;
    },
    radToDeg: function(t) {
        return t * M;
    },
    isPowerOfTwo: E,
    ceilPowerOfTwo: A,
    floorPowerOfTwo: C,
    setQuaternionFromProperEuler: function(t, e, n, i, r) {
        const a = Math.cos, s = Math.sin, o = a(n / 2), l = s(n / 2), c = a((e + i) / 2), h = s((e + i) / 2), u = a((e - i) / 2), d = s((e - i) / 2), p = a((i - e) / 2), f = s((i - e) / 2);
        switch (r) {
          case "XYX":
            t.set(o * h, l * u, l * d, o * c);
            break;

          case "YZY":
            t.set(l * d, o * h, l * u, o * c);
            break;

          case "ZXZ":
            t.set(l * u, l * d, o * h, o * c);
            break;

          case "XZX":
            t.set(o * h, l * f, l * p, o * c);
            break;

          case "YXY":
            t.set(l * p, o * h, l * f, o * c);
            break;

          case "ZYZ":
            t.set(l * f, l * p, o * h, o * c);
            break;

          default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
        }
    },
    normalize: R,
    denormalize: L
});

class D {
    constructor(t = 0, e = 0) {
        D.prototype.isVector2 = !0, this.x = t, this.y = e;
    }
    get width() {
        return this.x;
    }
    set width(t) {
        this.x = t;
    }
    get height() {
        return this.y;
    }
    set height(t) {
        this.y = t;
    }
    set(t, e) {
        return this.x = t, this.y = e, this;
    }
    setScalar(t) {
        return this.x = t, this.y = t, this;
    }
    setX(t) {
        return this.x = t, this;
    }
    setY(t) {
        return this.y = t, this;
    }
    setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
    }
    getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          default:
            throw new Error("index is out of range: " + t);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y);
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this;
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this;
    }
    addScalar(t) {
        return this.x += t, this.y += t, this;
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this;
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this;
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this;
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this;
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this;
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this;
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this;
    }
    divide(t) {
        return this.x /= t.x, this.y /= t.y, this;
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t);
    }
    applyMatrix3(t) {
        const e = this.x, n = this.y, i = t.elements;
        return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], 
        this;
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), 
        this;
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), 
        this;
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), 
        this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y;
    }
    cross(t) {
        return this.x * t.y - this.y * t.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
        const e = this.x - t.x, n = this.y - t.y;
        return e * e + n * n;
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
    }
    equals(t) {
        return t.x === this.x && t.y === this.y;
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t;
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this;
    }
    rotateAround(t, e) {
        const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
        return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this;
    }
    * [Symbol.iterator]() {
        yield this.x, yield this.y;
    }
}

class I {
    constructor() {
        I.prototype.isMatrix3 = !0, this.elements = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
    }
    set(t, e, n, i, r, a, s, o, l) {
        const c = this.elements;
        return c[0] = t, c[1] = i, c[2] = s, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = a, 
        c[8] = l, this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t) {
        const e = this.elements, n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], 
        e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    }
    extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), 
        this;
    }
    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }
    multiply(t) {
        return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
        const n = t.elements, i = e.elements, r = this.elements, a = n[0], s = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], f = i[0], m = i[3], g = i[6], _ = i[1], v = i[4], x = i[7], y = i[2], M = i[5], b = i[8];
        return r[0] = a * f + s * _ + o * y, r[3] = a * m + s * v + o * M, r[6] = a * g + s * x + o * b, 
        r[1] = l * f + c * _ + h * y, r[4] = l * m + c * v + h * M, r[7] = l * g + c * x + h * b, 
        r[2] = u * f + d * _ + p * y, r[5] = u * m + d * v + p * M, r[8] = u * g + d * x + p * b, 
        this;
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, 
        e[5] *= t, e[8] *= t, this;
    }
    determinant() {
        const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], s = t[5], o = t[6], l = t[7], c = t[8];
        return e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o;
    }
    invert() {
        const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], s = t[5], o = t[6], l = t[7], c = t[8], h = c * a - s * l, u = s * o - c * r, d = l * r - a * o, p = e * h + n * u + i * d;
        if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const f = 1 / p;
        return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (s * n - i * a) * f, t[3] = u * f, 
        t[4] = (c * e - i * o) * f, t[5] = (i * r - s * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, 
        t[8] = (a * e - n * r) * f, this;
    }
    transpose() {
        let t;
        const e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], 
        e[5] = e[7], e[7] = t, this;
    }
    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], 
        t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
    }
    setUvTransform(t, e, n, i, r, a, s) {
        const o = Math.cos(r), l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * a + l * s) + a + t, -i * l, i * o, -i * (-l * a + o * s) + s + e, 0, 0, 1), 
        this;
    }
    scale(t, e) {
        return this.premultiply(N.makeScale(t, e)), this;
    }
    rotate(t) {
        return this.premultiply(N.makeRotation(-t)), this;
    }
    translate(t, e) {
        return this.premultiply(N.makeTranslation(t, e)), this;
    }
    makeTranslation(t, e) {
        return this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
    }
    makeRotation(t) {
        const e = Math.cos(t), n = Math.sin(t);
        return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t, e) {
        return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t) {
        const e = this.elements, n = t.elements;
        for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
        return !0;
    }
    fromArray(t, e = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
        return this;
    }
    toArray(t = [], e = 0) {
        const n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], 
        t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
    }
    clone() {
        return (new this.constructor).fromArray(this.elements);
    }
}

const N = new I;

function O(t) {
    for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
    return !1;
}

function z(t) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t);
}

function U(t) {
    return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
}

function F(t) {
    return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
}

const B = {
    srgb: {
        "srgb-linear": U
    },
    "srgb-linear": {
        srgb: F
    }
}, k = {
    legacyMode: !0,
    get workingColorSpace() {
        return "srgb-linear";
    },
    set workingColorSpace(t) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function(t, e, n) {
        if (this.legacyMode || e === n || !e || !n) return t;
        if (B[e] && void 0 !== B[e][n]) {
            const i = B[e][n];
            return t.r = i(t.r), t.g = i(t.g), t.b = i(t.b), t;
        }
        throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function(t, e) {
        return this.convert(t, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function(t, e) {
        return this.convert(t, e, this.workingColorSpace);
    }
}, V = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, H = {
    r: 0,
    g: 0,
    b: 0
}, G = {
    h: 0,
    s: 0,
    l: 0
}, W = {
    h: 0,
    s: 0,
    l: 0
};

function j(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t;
}

function q(t, e) {
    return e.r = t.r, e.g = t.g, e.b = t.b, e;
}

class X {
    constructor(t, e, n) {
        return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n);
    }
    set(t) {
        return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), 
        this;
    }
    setScalar(t) {
        return this.r = t, this.g = t, this.b = t, this;
    }
    setHex(t, e = "srgb") {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, 
        this.b = (255 & t) / 255, k.toWorkingColorSpace(this, e), this;
    }
    setRGB(t, e, n, i = k.workingColorSpace) {
        return this.r = t, this.g = e, this.b = n, k.toWorkingColorSpace(this, i), this;
    }
    setHSL(t, e, n, i = k.workingColorSpace) {
        if (t = w(t, 1), e = S(e, 0, 1), n = S(n, 0, 1), 0 === e) this.r = this.g = this.b = n; else {
            const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
            this.r = j(r, i, t + 1 / 3), this.g = j(r, i, t), this.b = j(r, i, t - 1 / 3);
        }
        return k.toWorkingColorSpace(this, i), this;
    }
    setStyle(t, e = "srgb") {
        function n(e) {
            void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
        }
        let i;
        if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let t;
            const r = i[1], a = i[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, 
                this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, 
                k.toWorkingColorSpace(this, e), n(t[4]), this;
                if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, 
                this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, 
                k.toWorkingColorSpace(this, e), n(t[4]), this;
                break;

              case "hsl":
              case "hsla":
                if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                    const i = parseFloat(t[1]) / 360, r = parseFloat(t[2]) / 100, a = parseFloat(t[3]) / 100;
                    return n(t[4]), this.setHSL(i, r, a, e);
                }
            }
        } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const t = i[1], n = t.length;
            if (3 === n) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, 
            this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, k.toWorkingColorSpace(this, e), 
            this;
            if (6 === n) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, 
            this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, k.toWorkingColorSpace(this, e), 
            this;
        }
        return t && t.length > 0 ? this.setColorName(t, e) : this;
    }
    setColorName(t, e = "srgb") {
        const n = V[t.toLowerCase()];
        return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), 
        this;
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this;
    }
    copySRGBToLinear(t) {
        return this.r = U(t.r), this.g = U(t.g), this.b = U(t.b), this;
    }
    copyLinearToSRGB(t) {
        return this.r = F(t.r), this.g = F(t.g), this.b = F(t.b), this;
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this;
    }
    getHex(t = "srgb") {
        return k.fromWorkingColorSpace(q(this, H), t), S(255 * H.r, 0, 255) << 16 ^ S(255 * H.g, 0, 255) << 8 ^ S(255 * H.b, 0, 255) << 0;
    }
    getHexString(t = "srgb") {
        return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = k.workingColorSpace) {
        k.fromWorkingColorSpace(q(this, H), e);
        const n = H.r, i = H.g, r = H.b, a = Math.max(n, i, r), s = Math.min(n, i, r);
        let o, l;
        const c = (s + a) / 2;
        if (s === a) o = 0, l = 0; else {
            const t = a - s;
            switch (l = c <= .5 ? t / (a + s) : t / (2 - a - s), a) {
              case n:
                o = (i - r) / t + (i < r ? 6 : 0);
                break;

              case i:
                o = (r - n) / t + 2;
                break;

              case r:
                o = (n - i) / t + 4;
            }
            o /= 6;
        }
        return t.h = o, t.s = l, t.l = c, t;
    }
    getRGB(t, e = k.workingColorSpace) {
        return k.fromWorkingColorSpace(q(this, H), e), t.r = H.r, t.g = H.g, t.b = H.b, 
        t;
    }
    getStyle(t = "srgb") {
        return k.fromWorkingColorSpace(q(this, H), t), "srgb" !== t ? `color(${t} ${H.r} ${H.g} ${H.b})` : `rgb(${255 * H.r | 0},${255 * H.g | 0},${255 * H.b | 0})`;
    }
    offsetHSL(t, e, n) {
        return this.getHSL(G), G.h += t, G.s += e, G.l += n, this.setHSL(G.h, G.s, G.l), 
        this;
    }
    add(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this;
    }
    addColors(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
    }
    addScalar(t) {
        return this.r += t, this.g += t, this.b += t, this;
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), 
        this;
    }
    multiply(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
    }
    multiplyScalar(t) {
        return this.r *= t, this.g *= t, this.b *= t, this;
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, 
        this;
    }
    lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, 
        this;
    }
    lerpHSL(t, e) {
        this.getHSL(G), t.getHSL(W);
        const n = T(G.h, W.h, e), i = T(G.s, W.s, e), r = T(G.l, W.l, e);
        return this.setHSL(n, i, r), this;
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
        return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
    }
    toJSON() {
        return this.getHex();
    }
    * [Symbol.iterator]() {
        yield this.r, yield this.g, yield this.b;
    }
}

let Y;

X.NAMES = V;

class Z {
    static getDataURL(t) {
        if (/^data:/i.test(t.src)) return t.src;
        if ("undefined" == typeof HTMLCanvasElement) return t.src;
        let e;
        if (t instanceof HTMLCanvasElement) e = t; else {
            void 0 === Y && (Y = z("canvas")), Y.width = t.width, Y.height = t.height;
            const n = Y.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), 
            e = Y;
        }
        return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), 
        e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
    }
    static sRGBToLinear(t) {
        if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
            const e = z("canvas");
            e.width = t.width, e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * U(r[t] / 255);
            return n.putImageData(i, 0, 0), e;
        }
        if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * U(e[t] / 255)) : e[t] = U(e[t]);
            return {
                data: e,
                width: t.width,
                height: t.height
            };
        }
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), 
        t;
    }
}

class J {
    constructor(t = null) {
        this.isSource = !0, this.uuid = b(), this.data = t, this.version = 0;
    }
    set needsUpdate(t) {
        !0 === t && this.version++;
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }, i = this.data;
        if (null !== i) {
            let t;
            if (Array.isArray(i)) {
                t = [];
                for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(K(i[e].image)) : t.push(K(i[e]));
            } else t = K(i);
            n.url = t;
        }
        return e || (t.images[this.uuid] = n), n;
    }
}

function K(t) {
    return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Z.getDataURL(t) : t.data ? {
        data: Array.from(t.data),
        width: t.width,
        height: t.height,
        type: t.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}

let Q = 0;

class $ extends _ {
    constructor(t = $.DEFAULT_IMAGE, e = $.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, s = 1023, o = 1009, l = $.DEFAULT_ANISOTROPY, c = 3e3) {
        super(), this.isTexture = !0, Object.defineProperty(this, "id", {
            value: Q++
        }), this.uuid = b(), this.name = "", this.source = new J(t), this.mipmaps = [], 
        this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, 
        this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, 
        this.offset = new D(0, 0), this.repeat = new D(1, 1), this.center = new D(0, 0), 
        this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new I, this.generateMipmaps = !0, 
        this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, 
        this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, 
        this.needsPMREMUpdate = !1;
    }
    get image() {
        return this.source.data;
    }
    set image(t) {
        this.source.data = t;
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), 
        this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, 
        this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, 
        this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), 
        this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, 
        this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, 
        this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, 
        this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), 
        this.needsUpdate = !0, this;
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [ this.repeat.x, this.repeat.y ],
            offset: [ this.offset.x, this.offset.y ],
            center: [ this.center.x, this.center.y ],
            rotation: this.rotation,
            wrap: [ this.wrapS, this.wrapT ],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), 
        n;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
    transformUv(t) {
        if (300 !== this.mapping) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
          case 1e3:
            t.x = t.x - Math.floor(t.x);
            break;

          case 1001:
            t.x = t.x < 0 ? 0 : 1;
            break;

          case 1002:
            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
          case 1e3:
            t.y = t.y - Math.floor(t.y);
            break;

          case 1001:
            t.y = t.y < 0 ? 0 : 1;
            break;

          case 1002:
            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        }
        return this.flipY && (t.y = 1 - t.y), t;
    }
    set needsUpdate(t) {
        !0 === t && (this.version++, this.source.needsUpdate = !0);
    }
}

$.DEFAULT_IMAGE = null, $.DEFAULT_MAPPING = 300, $.DEFAULT_ANISOTROPY = 1;

class tt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
        tt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i;
    }
    get width() {
        return this.z;
    }
    set width(t) {
        this.z = t;
    }
    get height() {
        return this.w;
    }
    set height(t) {
        this.w = t;
    }
    set(t, e, n, i) {
        return this.x = t, this.y = e, this.z = n, this.w = i, this;
    }
    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this;
    }
    setX(t) {
        return this.x = t, this;
    }
    setY(t) {
        return this.y = t, this;
    }
    setZ(t) {
        return this.z = t, this;
    }
    setW(t) {
        return this.w = t, this;
    }
    setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          case 3:
            this.w = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
    }
    getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          case 3:
            return this.w;

          default:
            throw new Error("index is out of range: " + t);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, 
        this;
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
    }
    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this;
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, 
        this;
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, 
        this;
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, 
        this;
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
    }
    applyMatrix4(t) {
        const e = this.x, n = this.y, i = this.z, r = this.w, a = t.elements;
        return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, 
        this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, 
        this;
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t);
    }
    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, 
        this.z = t.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t) {
        let e, n, i, r;
        const a = .01, s = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], f = o[2], m = o[6], g = o[10];
        if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
            if (Math.abs(c + u) < s && Math.abs(h + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s) return this.set(1, 0, 0, 0), 
            this;
            e = Math.PI;
            const t = (l + 1) / 2, o = (d + 1) / 2, _ = (g + 1) / 2, v = (c + u) / 4, x = (h + f) / 4, y = (p + m) / 4;
            return t > o && t > _ ? t < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), 
            i = v / n, r = x / n) : o > _ ? o < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), 
            n = v / i, r = y / i) : _ < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_), 
            n = x / r, i = y / r), this.set(n, i, r, e), this;
        }
        let _ = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
        return Math.abs(_) < .001 && (_ = 1), this.x = (m - p) / _, this.y = (h - f) / _, 
        this.z = (u - c) / _, this.w = Math.acos((l + d + g - 1) / 2), this;
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), 
        this.w = Math.min(this.w, t.w), this;
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), 
        this.w = Math.max(this.w, t.w), this;
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), 
        this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), 
        this;
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), 
        this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), 
        this;
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), 
        this.w = Math.floor(this.w), this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), 
        this.w = Math.ceil(this.w), this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), 
        this.w = Math.round(this.w), this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), 
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), 
        this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, 
        this.w += (t.w - this.w) * e, this;
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, 
        this.w = t.w + (e.w - t.w) * n, this;
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), 
        this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), 
        this;
    }
    * [Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w;
    }
}

class et extends _ {
    constructor(t = 1, e = 1, n = {}) {
        super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, 
        this.scissor = new tt(0, 0, t, e), this.scissorTest = !1, this.viewport = new tt(0, 0, t, e);
        const i = {
            width: t,
            height: e,
            depth: 1
        };
        this.texture = new $(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), 
        this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, 
        this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, 
        this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, 
        this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, 
        this.samples = void 0 !== n.samples ? n.samples : 0;
    }
    setSize(t, e, n = 1) {
        this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, 
        this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, 
        this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), 
        this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
        const e = Object.assign({}, t.texture.image);
        return this.texture.source = new J(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, 
        null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, 
        this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}

class nt extends $ {
    constructor(t = null, e = 1, n = 1, i = 1) {
        super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, 
        this.flipY = !1, this.unpackAlignment = 1;
    }
}

class it extends $ {
    constructor(t = null, e = 1, n = 1, i = 1) {
        super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
        }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, 
        this.flipY = !1, this.unpackAlignment = 1;
    }
}

class rt {
    constructor(t = 0, e = 0, n = 0, i = 1) {
        this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i;
    }
    static slerpFlat(t, e, n, i, r, a, s) {
        let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
        const u = r[a + 0], d = r[a + 1], p = r[a + 2], f = r[a + 3];
        if (0 === s) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
        if (1 === s) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = f);
        if (h !== f || o !== u || l !== d || c !== p) {
            let t = 1 - s;
            const e = o * u + l * d + c * p + h * f, n = e >= 0 ? 1 : -1, i = 1 - e * e;
            if (i > Number.EPSILON) {
                const r = Math.sqrt(i), a = Math.atan2(r, e * n);
                t = Math.sin(t * a) / r, s = Math.sin(s * a) / r;
            }
            const r = s * n;
            if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, 
            t === 1 - s) {
                const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= t, l *= t, c *= t, h *= t;
            }
        }
        t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
    }
    static multiplyQuaternionsFlat(t, e, n, i, r, a) {
        const s = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[a], u = r[a + 1], d = r[a + 2], p = r[a + 3];
        return t[e] = s * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - s * d, 
        t[e + 2] = l * p + c * d + s * u - o * h, t[e + 3] = c * p - s * h - o * u - l * d, 
        t;
    }
    get x() {
        return this._x;
    }
    set x(t) {
        this._x = t, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(t) {
        this._y = t, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(t) {
        this._z = t, this._onChangeCallback();
    }
    get w() {
        return this._w;
    }
    set w(t) {
        this._w = t, this._onChangeCallback();
    }
    set(t, e, n, i) {
        return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), 
        this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), 
        this;
    }
    setFromEuler(t, e) {
        const n = t._x, i = t._y, r = t._z, a = t._order, s = Math.cos, o = Math.sin, l = s(n / 2), c = s(i / 2), h = s(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
        switch (a) {
          case "XYZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, 
            this._w = l * c * h - u * d * p;
            break;

          case "YXZ":
            this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, 
            this._w = l * c * h + u * d * p;
            break;

          case "ZXY":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, 
            this._w = l * c * h - u * d * p;
            break;

          case "ZYX":
            this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, 
            this._w = l * c * h + u * d * p;
            break;

          case "YZX":
            this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, 
            this._w = l * c * h - u * d * p;
            break;

          case "XZY":
            this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, 
            this._w = l * c * h + u * d * p;
            break;

          default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
        }
        return !1 !== e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t, e) {
        const n = e / 2, i = Math.sin(n);
        return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), 
        this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t) {
        const e = t.elements, n = e[0], i = e[4], r = e[8], a = e[1], s = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = n + s + h;
        if (u > 0) {
            const t = .5 / Math.sqrt(u + 1);
            this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (a - i) * t;
        } else if (n > s && n > h) {
            const t = 2 * Math.sqrt(1 + n - s - h);
            this._w = (c - o) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (r + l) / t;
        } else if (s > h) {
            const t = 2 * Math.sqrt(1 + s - n - h);
            this._w = (r - l) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (o + c) / t;
        } else {
            const t = 2 * Math.sqrt(1 + h - n - s);
            this._w = (a - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t;
        }
        return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t, e) {
        let n = t.dot(e) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, 
        this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, 
        this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, 
        this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
    }
    angleTo(t) {
        return 2 * Math.acos(Math.abs(S(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
        const n = this.angleTo(t);
        if (0 === n) return this;
        const i = Math.min(1, e / n);
        return this.slerp(t, i), this;
    }
    identity() {
        return this.set(0, 0, 0, 1);
    }
    invert() {
        return this.conjugate();
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
        let t = this.length();
        return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, 
        this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), 
        this._onChangeCallback(), this;
    }
    multiply(t) {
        return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
        return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
        const n = t._x, i = t._y, r = t._z, a = t._w, s = e._x, o = e._y, l = e._z, c = e._w;
        return this._x = n * c + a * s + i * l - r * o, this._y = i * c + a * o + r * s - n * l, 
        this._z = r * c + a * l + n * o - i * s, this._w = a * c - n * s - i * o - r * l, 
        this._onChangeCallback(), this;
    }
    slerp(t, e) {
        if (0 === e) return this;
        if (1 === e) return this.copy(t);
        const n = this._x, i = this._y, r = this._z, a = this._w;
        let s = a * t._w + n * t._x + i * t._y + r * t._z;
        if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, 
        s = -s) : this.copy(t), s >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, 
        this;
        const o = 1 - s * s;
        if (o <= Number.EPSILON) {
            const t = 1 - e;
            return this._w = t * a + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, 
            this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
        }
        const l = Math.sqrt(o), c = Math.atan2(l, s), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
        return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, 
        this._z = r * h + this._z * u, this._onChangeCallback(), this;
    }
    slerpQuaternions(t, e, n) {
        return this.copy(t).slerp(e, n);
    }
    random() {
        const t = Math.random(), e = Math.sqrt(1 - t), n = Math.sqrt(t), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
        return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
    }
    fromArray(t, e = 0) {
        return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], 
        this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, 
        t;
    }
    fromBufferAttribute(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), 
        this;
    }
    _onChange(t) {
        return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {}
    * [Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._w;
    }
}

class at {
    constructor(t = 0, e = 0, n = 0) {
        at.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
    }
    set(t, e, n) {
        return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this;
    }
    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this;
    }
    setX(t) {
        return this.x = t, this;
    }
    setY(t) {
        return this.y = t, this;
    }
    setZ(t) {
        return this.z = t, this;
    }
    setComponent(t, e) {
        switch (t) {
          case 0:
            this.x = e;
            break;

          case 1:
            this.y = e;
            break;

          case 2:
            this.z = e;
            break;

          default:
            throw new Error("index is out of range: " + t);
        }
        return this;
    }
    getComponent(t) {
        switch (t) {
          case 0:
            return this.x;

          case 1:
            return this.y;

          case 2:
            return this.z;

          default:
            throw new Error("index is out of range: " + t);
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }
    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this;
    }
    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this;
    }
    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
    }
    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
    }
    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
    }
    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this;
    }
    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
    }
    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
    }
    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this;
    }
    multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
    }
    applyEuler(t) {
        return this.applyQuaternion(ot.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
        return this.applyQuaternion(ot.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
        const e = this.x, n = this.y, i = this.z, r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, 
        this.z = r[2] * e + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
        const e = this.x, n = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, 
        this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this;
    }
    applyQuaternion(t) {
        const e = this.x, n = this.y, i = this.z, r = t.x, a = t.y, s = t.z, o = t.w, l = o * e + a * i - s * n, c = o * n + s * e - r * i, h = o * i + r * n - a * e, u = -r * e - a * n - s * i;
        return this.x = l * o + u * -r + c * -s - h * -a, this.y = c * o + u * -a + h * -r - l * -s, 
        this.z = h * o + u * -s + l * -a - c * -r, this;
    }
    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
    }
    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
    }
    transformDirection(t) {
        const e = this.x, n = this.y, i = this.z, r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, 
        this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
    }
    divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t);
    }
    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), 
        this;
    }
    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), 
        this;
    }
    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), 
        this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
    }
    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), 
        this.z = Math.max(t, Math.min(e, this.z)), this;
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), 
        this;
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), 
        this;
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), 
        this;
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), 
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, 
        this;
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, 
        this;
    }
    cross(t) {
        return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
        const n = t.x, i = t.y, r = t.z, a = e.x, s = e.y, o = e.z;
        return this.x = i * o - r * s, this.y = r * a - n * o, this.z = n * s - i * a, this;
    }
    projectOnVector(t) {
        const e = t.lengthSq();
        if (0 === e) return this.set(0, 0, 0);
        const n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
        return st.copy(this).projectOnVector(t), this.sub(st);
    }
    reflect(t) {
        return this.sub(st.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (0 === e) return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(S(n, -1, 1));
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
        const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
        return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
    }
    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
        const i = Math.sin(e) * t;
        return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), 
        this;
    }
    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, 4 * e);
    }
    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, 3 * e);
    }
    setFromEuler(t) {
        return this.x = t._x, this.y = t._y, this.z = t._z, this;
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
        const t = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t ** 2);
        return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this;
    }
    * [Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z;
    }
}

const st = new at, ot = new rt;

class lt {
    constructor(t = new at(1 / 0, 1 / 0, 1 / 0), e = new at(-1 / 0, -1 / 0, -1 / 0)) {
        this.isBox3 = !0, this.min = t, this.max = e;
    }
    set(t, e) {
        return this.min.copy(t), this.max.copy(e), this;
    }
    setFromArray(t) {
        let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0;
        for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o], c = t[o + 1], h = t[o + 2];
            l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > a && (a = c), 
            h > s && (s = h);
        }
        return this.min.set(e, n, i), this.max.set(r, a, s), this;
    }
    setFromBufferAttribute(t) {
        let e = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, a = -1 / 0, s = -1 / 0;
        for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
            l < e && (e = l), c < n && (n = c), h < i && (i = h), l > r && (r = l), c > a && (a = c), 
            h > s && (s = h);
        }
        return this.min.set(e, n, i), this.max.set(r, a, s), this;
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
        return this;
    }
    setFromCenterAndSize(t, e) {
        const n = ht.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
    }
    setFromObject(t, e = !1) {
        return this.makeEmpty(), this.expandByObject(t, e);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this;
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, 
        this;
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this;
    }
    expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this;
    }
    expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this;
    }
    expandByObject(t, e = !1) {
        t.updateWorldMatrix(!1, !1);
        const n = t.geometry;
        if (void 0 !== n) if (e && null != n.attributes && void 0 !== n.attributes.position) {
            const e = n.attributes.position;
            for (let n = 0, i = e.count; n < i; n++) ht.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), 
            this.expandByPoint(ht);
        } else null === n.boundingBox && n.computeBoundingBox(), ut.copy(n.boundingBox), 
        ut.applyMatrix4(t.matrixWorld), this.union(ut);
        const i = t.children;
        for (let t = 0, n = i.length; t < n; t++) this.expandByObject(i[t], e);
        return this;
    }
    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
    }
    intersectsSphere(t) {
        return this.clampPoint(t.center, ht), ht.distanceToSquared(t.center) <= t.radius * t.radius;
    }
    intersectsPlane(t) {
        let e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, 
        n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, 
        n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, 
        n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
    }
    intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(vt), xt.subVectors(this.max, vt), dt.subVectors(t.a, vt), pt.subVectors(t.b, vt), 
        ft.subVectors(t.c, vt), mt.subVectors(pt, dt), gt.subVectors(ft, pt), _t.subVectors(dt, ft);
        let e = [ 0, -mt.z, mt.y, 0, -gt.z, gt.y, 0, -_t.z, _t.y, mt.z, 0, -mt.x, gt.z, 0, -gt.x, _t.z, 0, -_t.x, -mt.y, mt.x, 0, -gt.y, gt.x, 0, -_t.y, _t.x, 0 ];
        return !!bt(e, dt, pt, ft, xt) && (e = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ], !!bt(e, dt, pt, ft, xt) && (yt.crossVectors(mt, gt), 
        e = [ yt.x, yt.y, yt.z ], bt(e, dt, pt, ft, xt)));
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
        return ht.copy(t).clamp(this.min, this.max).sub(t).length();
    }
    getBoundingSphere(t) {
        return this.getCenter(t.center), t.radius = .5 * this.getSize(ht).length(), t;
    }
    intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), 
        this;
    }
    union(t) {
        return this.min.min(t.min), this.max.max(t.max), this;
    }
    applyMatrix4(t) {
        return this.isEmpty() || (ct[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), 
        ct[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ct[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), 
        ct[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ct[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), 
        ct[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ct[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), 
        ct[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ct)), 
        this;
    }
    translate(t) {
        return this.min.add(t), this.max.add(t), this;
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max);
    }
}

const ct = [ new at, new at, new at, new at, new at, new at, new at, new at ], ht = new at, ut = new lt, dt = new at, pt = new at, ft = new at, mt = new at, gt = new at, _t = new at, vt = new at, xt = new at, yt = new at, Mt = new at;

function bt(t, e, n, i, r) {
    for (let a = 0, s = t.length - 3; a <= s; a += 3) {
        Mt.fromArray(t, a);
        const s = r.x * Math.abs(Mt.x) + r.y * Math.abs(Mt.y) + r.z * Math.abs(Mt.z), o = e.dot(Mt), l = n.dot(Mt), c = i.dot(Mt);
        if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
    }
    return !0;
}

const St = new lt, wt = new at, Tt = new at;

class Et {
    constructor(t = new at, e = -1) {
        this.center = t, this.radius = e;
    }
    set(t, e) {
        return this.center.copy(t), this.radius = e, this;
    }
    setFromPoints(t, e) {
        const n = this.center;
        void 0 !== e ? n.copy(e) : St.setFromPoints(t).getCenter(n);
        let i = 0;
        for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
        return this.radius = Math.sqrt(i), this;
    }
    copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this;
    }
    isEmpty() {
        return this.radius < 0;
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
        return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
        const n = this.center.distanceToSquared(t);
        return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), 
        e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), 
        t);
    }
    applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), 
        this;
    }
    translate(t) {
        return this.center.add(t), this;
    }
    expandByPoint(t) {
        if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
        wt.subVectors(t, this.center);
        const e = wt.lengthSq();
        if (e > this.radius * this.radius) {
            const t = Math.sqrt(e), n = .5 * (t - this.radius);
            this.center.addScaledVector(wt, n / t), this.radius += n;
        }
        return this;
    }
    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : (Tt.subVectors(t.center, this.center).setLength(t.radius), 
        this.expandByPoint(wt.copy(t.center).add(Tt)), this.expandByPoint(wt.copy(t.center).sub(Tt))), 
        this);
    }
    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}

const At = new at, Ct = new at, Lt = new at, Rt = new at, Pt = new at, Dt = new at, It = new at;

class Nt {
    constructor(t = new at, e = new at(0, 0, -1)) {
        this.origin = t, this.direction = e;
    }
    set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this;
    }
    copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    }
    at(t, e) {
        return e.copy(this.direction).multiplyScalar(t).add(this.origin);
    }
    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this;
    }
    recast(t) {
        return this.origin.copy(this.at(t, At)), this;
    }
    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
        const e = At.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (At.copy(this.direction).multiplyScalar(e).add(this.origin), 
        At.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, i) {
        Ct.copy(t).add(e).multiplyScalar(.5), Lt.copy(e).sub(t).normalize(), Rt.copy(this.origin).sub(Ct);
        const r = .5 * t.distanceTo(e), a = -this.direction.dot(Lt), s = Rt.dot(this.direction), o = -Rt.dot(Lt), l = Rt.lengthSq(), c = Math.abs(1 - a * a);
        let h, u, d, p;
        if (c > 0) if (h = a * o - s, u = a * s - o, p = r * c, h >= 0) if (u >= -p) if (u <= p) {
            const t = 1 / c;
            h *= t, u *= t, d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l;
        } else u = r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l; else u = -r, 
        h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l; else u <= -p ? (h = Math.max(0, -(-a * r + s)), 
        u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, 
        u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)), 
        u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l); else u = a > 0 ? -r : r, 
        h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Lt).multiplyScalar(u).add(Ct), 
        d;
    }
    intersectSphere(t, e) {
        At.subVectors(t.center, this.origin);
        const n = At.dot(this.direction), i = At.dot(At) - n * n, r = t.radius * t.radius;
        if (i > r) return null;
        const a = Math.sqrt(r - i), s = n - a, o = n + a;
        return s < 0 && o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
    }
    intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
        const n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
        const n = this.distanceToPlane(t);
        return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        if (0 === e) return !0;
        return t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
        let n, i, r, a, s, o;
        const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
        return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, 
        i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, 
        a = (t.min.y - u.y) * c), n > a || r > i ? null : ((r > n || isNaN(n)) && (n = r), 
        (a < i || isNaN(i)) && (i = a), h >= 0 ? (s = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (s = (t.max.z - u.z) * h, 
        o = (t.min.z - u.z) * h), n > o || s > i ? null : ((s > n || n != n) && (n = s), 
        (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
    }
    intersectsBox(t) {
        return null !== this.intersectBox(t, At);
    }
    intersectTriangle(t, e, n, i, r) {
        Pt.subVectors(e, t), Dt.subVectors(n, t), It.crossVectors(Pt, Dt);
        let a, s = this.direction.dot(It);
        if (s > 0) {
            if (i) return null;
            a = 1;
        } else {
            if (!(s < 0)) return null;
            a = -1, s = -s;
        }
        Rt.subVectors(this.origin, t);
        const o = a * this.direction.dot(Dt.crossVectors(Rt, Dt));
        if (o < 0) return null;
        const l = a * this.direction.dot(Pt.cross(Rt));
        if (l < 0) return null;
        if (o + l > s) return null;
        const c = -a * Rt.dot(It);
        return c < 0 ? null : this.at(c / s, r);
    }
    applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
    }
    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}

class Ot {
    constructor() {
        Ot.prototype.isMatrix4 = !0, this.elements = [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    }
    set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
        const g = this.elements;
        return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = s, g[13] = o, 
        g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, 
        this;
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
        return (new Ot).fromArray(this.elements);
    }
    copy(t) {
        const e = this.elements, n = t.elements;
        return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], 
        e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], 
        e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    }
    copyPosition(t) {
        const e = this.elements, n = t.elements;
        return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    }
    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), 
        this;
    }
    extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), 
        this;
    }
    makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), 
        this;
    }
    extractRotation(t) {
        const e = this.elements, n = t.elements, i = 1 / zt.setFromMatrixColumn(t, 0).length(), r = 1 / zt.setFromMatrixColumn(t, 1).length(), a = 1 / zt.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, 
        e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, 
        e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t) {
        const e = this.elements, n = t.x, i = t.y, r = t.z, a = Math.cos(n), s = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
        if ("XYZ" === t.order) {
            const t = a * c, n = a * h, i = s * c, r = s * h;
            e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -s * o, 
            e[2] = r - t * l, e[6] = i + n * l, e[10] = a * o;
        } else if ("YXZ" === t.order) {
            const t = o * c, n = o * h, i = l * c, r = l * h;
            e[0] = t + r * s, e[4] = i * s - n, e[8] = a * l, e[1] = a * h, e[5] = a * c, e[9] = -s, 
            e[2] = n * s - i, e[6] = r + t * s, e[10] = a * o;
        } else if ("ZXY" === t.order) {
            const t = o * c, n = o * h, i = l * c, r = l * h;
            e[0] = t - r * s, e[4] = -a * h, e[8] = i + n * s, e[1] = n + i * s, e[5] = a * c, 
            e[9] = r - t * s, e[2] = -a * l, e[6] = s, e[10] = a * o;
        } else if ("ZYX" === t.order) {
            const t = a * c, n = a * h, i = s * c, r = s * h;
            e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, 
            e[9] = n * l - i, e[2] = -l, e[6] = s * o, e[10] = a * o;
        } else if ("YZX" === t.order) {
            const t = a * o, n = a * l, i = s * o, r = s * l;
            e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = a * c, e[9] = -s * c, 
            e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h;
        } else if ("XZY" === t.order) {
            const t = a * o, n = a * l, i = s * o, r = s * l;
            e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = a * c, e[9] = n * h - i, 
            e[2] = i * h - n, e[6] = s * c, e[10] = r * h + t;
        }
        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
        this;
    }
    makeRotationFromQuaternion(t) {
        return this.compose(Ft, t, Bt);
    }
    lookAt(t, e, n) {
        const i = this.elements;
        return Ht.subVectors(t, e), 0 === Ht.lengthSq() && (Ht.z = 1), Ht.normalize(), kt.crossVectors(n, Ht), 
        0 === kt.lengthSq() && (1 === Math.abs(n.z) ? Ht.x += 1e-4 : Ht.z += 1e-4, Ht.normalize(), 
        kt.crossVectors(n, Ht)), kt.normalize(), Vt.crossVectors(Ht, kt), i[0] = kt.x, i[4] = Vt.x, 
        i[8] = Ht.x, i[1] = kt.y, i[5] = Vt.y, i[9] = Ht.y, i[2] = kt.z, i[6] = Vt.z, i[10] = Ht.z, 
        this;
    }
    multiply(t) {
        return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
        const n = t.elements, i = e.elements, r = this.elements, a = n[0], s = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], f = n[6], m = n[10], g = n[14], _ = n[3], v = n[7], x = n[11], y = n[15], M = i[0], b = i[4], S = i[8], w = i[12], T = i[1], E = i[5], A = i[9], C = i[13], L = i[2], R = i[6], P = i[10], D = i[14], I = i[3], N = i[7], O = i[11], z = i[15];
        return r[0] = a * M + s * T + o * L + l * I, r[4] = a * b + s * E + o * R + l * N, 
        r[8] = a * S + s * A + o * P + l * O, r[12] = a * w + s * C + o * D + l * z, r[1] = c * M + h * T + u * L + d * I, 
        r[5] = c * b + h * E + u * R + d * N, r[9] = c * S + h * A + u * P + d * O, r[13] = c * w + h * C + u * D + d * z, 
        r[2] = p * M + f * T + m * L + g * I, r[6] = p * b + f * E + m * R + g * N, r[10] = p * S + f * A + m * P + g * O, 
        r[14] = p * w + f * C + m * D + g * z, r[3] = _ * M + v * T + x * L + y * I, r[7] = _ * b + v * E + x * R + y * N, 
        r[11] = _ * S + v * A + x * P + y * O, r[15] = _ * w + v * C + x * D + y * z, this;
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, 
        e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, 
        e[11] *= t, e[15] *= t, this;
    }
    determinant() {
        const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], a = t[1], s = t[5], o = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14];
        return t[3] * (+r * o * h - i * l * h - r * s * u + n * l * u + i * s * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * a * u - i * a * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * s * d - r * a * h + n * a * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * o * h + e * s * u + i * a * h - n * a * u + n * o * c);
    }
    transpose() {
        const t = this.elements;
        let e;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], 
        t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], 
        t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
    }
    setPosition(t, e, n) {
        const i = this.elements;
        return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, 
        i[14] = n), this;
    }
    invert() {
        const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], s = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], f = t[13], m = t[14], g = t[15], _ = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g, v = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g, x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g, y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m, M = e * _ + n * v + i * x + r * y;
        if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const b = 1 / M;
        return t[0] = _ * b, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * b, 
        t[2] = (s * m * r - f * o * r + f * i * l - n * m * l - s * i * g + n * o * g) * b, 
        t[3] = (h * o * r - s * u * r - h * i * l + n * u * l + s * i * d - n * o * d) * b, 
        t[4] = v * b, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * b, 
        t[6] = (p * o * r - a * m * r - p * i * l + e * m * l + a * i * g - e * o * g) * b, 
        t[7] = (a * u * r - c * o * r + c * i * l - e * u * l - a * i * d + e * o * d) * b, 
        t[8] = x * b, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * b, 
        t[10] = (a * f * r - p * s * r + p * n * l - e * f * l - a * n * g + e * s * g) * b, 
        t[11] = (c * s * r - a * h * r - c * n * l + e * h * l + a * n * d - e * s * d) * b, 
        t[12] = y * b, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * b, 
        t[14] = (p * s * i - a * f * i - p * n * o + e * f * o + a * n * m - e * s * m) * b, 
        t[15] = (a * h * i - c * s * i + c * n * o - e * h * o - a * n * u + e * s * u) * b, 
        this;
    }
    scale(t) {
        const e = this.elements, n = t.x, i = t.y, r = t.z;
        return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, 
        e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
    }
    getMaxScaleOnAxis() {
        const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t, e, n) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t) {
        const e = Math.cos(t), n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t) {
        const e = Math.cos(t), n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t) {
        const e = Math.cos(t), n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t, e) {
        const n = Math.cos(e), i = Math.sin(e), r = 1 - n, a = t.x, s = t.y, o = t.z, l = r * a, c = r * s;
        return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1), 
        this;
    }
    makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t, e, n, i, r, a) {
        return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t, e, n) {
        const i = this.elements, r = e._x, a = e._y, s = e._z, o = e._w, l = r + r, c = a + a, h = s + s, u = r * l, d = r * c, p = r * h, f = a * c, m = a * h, g = s * h, _ = o * l, v = o * c, x = o * h, y = n.x, M = n.y, b = n.z;
        return i[0] = (1 - (f + g)) * y, i[1] = (d + x) * y, i[2] = (p - v) * y, i[3] = 0, 
        i[4] = (d - x) * M, i[5] = (1 - (u + g)) * M, i[6] = (m + _) * M, i[7] = 0, i[8] = (p + v) * b, 
        i[9] = (m - _) * b, i[10] = (1 - (u + f)) * b, i[11] = 0, i[12] = t.x, i[13] = t.y, 
        i[14] = t.z, i[15] = 1, this;
    }
    decompose(t, e, n) {
        const i = this.elements;
        let r = zt.set(i[0], i[1], i[2]).length();
        const a = zt.set(i[4], i[5], i[6]).length(), s = zt.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], Ut.copy(this);
        const o = 1 / r, l = 1 / a, c = 1 / s;
        return Ut.elements[0] *= o, Ut.elements[1] *= o, Ut.elements[2] *= o, Ut.elements[4] *= l, 
        Ut.elements[5] *= l, Ut.elements[6] *= l, Ut.elements[8] *= c, Ut.elements[9] *= c, 
        Ut.elements[10] *= c, e.setFromRotationMatrix(Ut), n.x = r, n.y = a, n.z = s, this;
    }
    makePerspective(t, e, n, i, r, a) {
        const s = this.elements, o = 2 * r / (e - t), l = 2 * r / (n - i), c = (e + t) / (e - t), h = (n + i) / (n - i), u = -(a + r) / (a - r), d = -2 * a * r / (a - r);
        return s[0] = o, s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = h, s[13] = 0, 
        s[2] = 0, s[6] = 0, s[10] = u, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, 
        this;
    }
    makeOrthographic(t, e, n, i, r, a) {
        const s = this.elements, o = 1 / (e - t), l = 1 / (n - i), c = 1 / (a - r), h = (e + t) * o, u = (n + i) * l, d = (a + r) * c;
        return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -h, s[1] = 0, s[5] = 2 * l, s[9] = 0, 
        s[13] = -u, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, 
        s[11] = 0, s[15] = 1, this;
    }
    equals(t) {
        const e = this.elements, n = t.elements;
        for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
        return !0;
    }
    fromArray(t, e = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
        return this;
    }
    toArray(t = [], e = 0) {
        const n = this.elements;
        return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], 
        t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], 
        t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], 
        t[e + 15] = n[15], t;
    }
}

const zt = new at, Ut = new Ot, Ft = new at(0, 0, 0), Bt = new at(1, 1, 1), kt = new at, Vt = new at, Ht = new at, Gt = new Ot, Wt = new rt;

class jt {
    constructor(t = 0, e = 0, n = 0, i = jt.DefaultOrder) {
        this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i;
    }
    get x() {
        return this._x;
    }
    set x(t) {
        this._x = t, this._onChangeCallback();
    }
    get y() {
        return this._y;
    }
    set y(t) {
        this._y = t, this._onChangeCallback();
    }
    get z() {
        return this._z;
    }
    set z(t) {
        this._z = t, this._onChangeCallback();
    }
    get order() {
        return this._order;
    }
    set order(t) {
        this._order = t, this._onChangeCallback();
    }
    set(t, e, n, i = this._order) {
        return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), 
        this;
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), 
        this;
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
        const i = t.elements, r = i[0], a = i[4], s = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
        switch (e) {
          case "XYZ":
            this._y = Math.asin(S(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), 
            this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, l), this._z = 0);
            break;

          case "YXZ":
            this._x = Math.asin(-S(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), 
            this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
            break;

          case "ZXY":
            this._x = Math.asin(S(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), 
            this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
            break;

          case "ZYX":
            this._y = Math.asin(-S(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), 
            this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
            break;

          case "YZX":
            this._z = Math.asin(S(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), 
            this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(s, d));
            break;

          case "XZY":
            this._z = Math.asin(-S(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, l), 
            this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
            break;

          default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
        }
        return this._order = e, !0 === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t, e, n) {
        return Gt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Gt, e, n);
    }
    setFromVector3(t, e = this._order) {
        return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
        return Wt.setFromEuler(this), this.setFromQuaternion(Wt, t);
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
    }
    fromArray(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), 
        this._onChangeCallback(), this;
    }
    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, 
        t;
    }
    _onChange(t) {
        return this._onChangeCallback = t, this;
    }
    _onChangeCallback() {}
    * [Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._order;
    }
    toVector3() {
        console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
    }
}

jt.DefaultOrder = "XYZ", jt.RotationOrders = [ "XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX" ];

class qt {
    constructor() {
        this.mask = 1;
    }
    set(t) {
        this.mask = (1 << t | 0) >>> 0;
    }
    enable(t) {
        this.mask |= 1 << t | 0;
    }
    enableAll() {
        this.mask = -1;
    }
    toggle(t) {
        this.mask ^= 1 << t | 0;
    }
    disable(t) {
        this.mask &= ~(1 << t | 0);
    }
    disableAll() {
        this.mask = 0;
    }
    test(t) {
        return 0 != (this.mask & t.mask);
    }
    isEnabled(t) {
        return 0 != (this.mask & (1 << t | 0));
    }
}

let Xt = 0;

const Yt = new at, Zt = new rt, Jt = new Ot, Kt = new at, Qt = new at, $t = new at, te = new rt, ee = new at(1, 0, 0), ne = new at(0, 1, 0), ie = new at(0, 0, 1), re = {
    type: "added"
}, ae = {
    type: "removed"
};

class se extends _ {
    constructor() {
        super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
            value: Xt++
        }), this.uuid = b(), this.name = "", this.type = "Object3D", this.parent = null, 
        this.children = [], this.up = se.DefaultUp.clone();
        const t = new at, e = new jt, n = new rt, i = new at(1, 1, 1);
        e._onChange((function() {
            n.setFromEuler(e, !1);
        })), n._onChange((function() {
            e.setFromQuaternion(n, void 0, !1);
        })), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new Ot
            },
            normalMatrix: {
                value: new I
            }
        }), this.matrix = new Ot, this.matrixWorld = new Ot, this.matrixAutoUpdate = se.DefaultMatrixAutoUpdate, 
        this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = se.DefaultMatrixWorldAutoUpdate, 
        this.layers = new qt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, 
        this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t) {
        return this.quaternion.premultiply(t), this;
    }
    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
        this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
        return Zt.setFromAxisAngle(t, e), this.quaternion.multiply(Zt), this;
    }
    rotateOnWorldAxis(t, e) {
        return Zt.setFromAxisAngle(t, e), this.quaternion.premultiply(Zt), this;
    }
    rotateX(t) {
        return this.rotateOnAxis(ee, t);
    }
    rotateY(t) {
        return this.rotateOnAxis(ne, t);
    }
    rotateZ(t) {
        return this.rotateOnAxis(ie, t);
    }
    translateOnAxis(t, e) {
        return Yt.copy(t).applyQuaternion(this.quaternion), this.position.add(Yt.multiplyScalar(e)), 
        this;
    }
    translateX(t) {
        return this.translateOnAxis(ee, t);
    }
    translateY(t) {
        return this.translateOnAxis(ne, t);
    }
    translateZ(t) {
        return this.translateOnAxis(ie, t);
    }
    localToWorld(t) {
        return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t) {
        return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Jt.copy(this.matrixWorld).invert());
    }
    lookAt(t, e, n) {
        t.isVector3 ? Kt.copy(t) : Kt.set(t, e, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1), Qt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Jt.lookAt(Qt, Kt, this.up) : Jt.lookAt(Kt, Qt, this.up), 
        this.quaternion.setFromRotationMatrix(Jt), i && (Jt.extractRotation(i.matrixWorld), 
        Zt.setFromRotationMatrix(Jt), this.quaternion.premultiply(Zt.invert()));
    }
    add(t) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), 
        this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, 
        this.children.push(t), t.dispatchEvent(re)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), 
        this);
    }
    remove(t) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
            return this;
        }
        const e = this.children.indexOf(t);
        return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ae)), 
        this;
    }
    removeFromParent() {
        const t = this.parent;
        return null !== t && t.remove(this), this;
    }
    clear() {
        for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(ae);
        }
        return this.children.length = 0, this;
    }
    attach(t) {
        return this.updateWorldMatrix(!0, !1), Jt.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), 
        Jt.multiply(t.parent.matrixWorld)), t.applyMatrix4(Jt), this.add(t), t.updateWorldMatrix(!1, !0), 
        this;
    }
    getObjectById(t) {
        return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
        return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
        if (this[t] === e) return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i;
        }
    }
    getObjectsByProperty(t, e) {
        let n = [];
        this[t] === e && n.push(this);
        for (let i = 0, r = this.children.length; i < r; i++) {
            const r = this.children[i].getObjectsByProperty(t, e);
            r.length > 0 && (n = n.concat(r));
        }
        return n;
    }
    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qt, t, $t), t;
    }
    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Qt, te, t), t;
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
        t(this);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
        if (!1 === this.visible) return;
        t(this);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
        const e = this.parent;
        null !== e && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), 
        this.matrixWorldNeedsUpdate = !1, t = !0);
        const e = this.children;
        for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            !0 !== i.matrixWorldAutoUpdate && !0 !== t || i.updateMatrixWorld(t);
        }
    }
    updateWorldMatrix(t, e) {
        const n = this.parent;
        if (!0 === t && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), 
        this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), 
        !0 === e) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
            }
        }
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t, n = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
        }
        if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), 
        !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), 
        !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), 
        i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), 
        this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), 
        null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), 
        this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), 
        this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
                const n = e.shapes;
                if (Array.isArray(n)) for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    r(t.shapes, i);
                } else r(t.shapes, n);
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), 
        void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), 
        void 0 !== this.material) if (Array.isArray(this.material)) {
            const e = [];
            for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
            i.material = e;
        } else i.material = r(t.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object);
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
                const n = this.animations[e];
                i.animations.push(r(t.animations, n));
            }
        }
        if (e) {
            const e = a(t.geometries), i = a(t.materials), r = a(t.textures), s = a(t.images), o = a(t.shapes), l = a(t.skeletons), c = a(t.animations), h = a(t.nodes);
            e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), 
            s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), 
            c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h);
        }
        return n.object = i, n;
        function a(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                delete i.metadata, e.push(i);
            }
            return e;
        }
    }
    clone(t) {
        return (new this.constructor).copy(this, t);
    }
    copy(t, e = !0) {
        if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, 
        this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), 
        this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, 
        this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, 
        this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, 
        this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, 
        this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (let e = 0; e < t.children.length; e++) {
            const n = t.children[e];
            this.add(n.clone());
        }
        return this;
    }
}

se.DefaultUp = new at(0, 1, 0), se.DefaultMatrixAutoUpdate = !0, se.DefaultMatrixWorldAutoUpdate = !0;

const oe = new at, le = new at, ce = new at, he = new at, ue = new at, de = new at, pe = new at, fe = new at, me = new at, ge = new at;

class _e {
    constructor(t = new at, e = new at, n = new at) {
        this.a = t, this.b = e, this.c = n;
    }
    static getNormal(t, e, n, i) {
        i.subVectors(n, e), oe.subVectors(t, e), i.cross(oe);
        const r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, i, r) {
        oe.subVectors(i, e), le.subVectors(n, e), ce.subVectors(t, e);
        const a = oe.dot(oe), s = oe.dot(le), o = oe.dot(ce), l = le.dot(le), c = le.dot(ce), h = a * l - s * s;
        if (0 === h) return r.set(-2, -1, -1);
        const u = 1 / h, d = (l * o - s * c) * u, p = (a * c - s * o) * u;
        return r.set(1 - d - p, p, d);
    }
    static containsPoint(t, e, n, i) {
        return this.getBarycoord(t, e, n, i, he), he.x >= 0 && he.y >= 0 && he.x + he.y <= 1;
    }
    static getUV(t, e, n, i, r, a, s, o) {
        return this.getBarycoord(t, e, n, i, he), o.set(0, 0), o.addScaledVector(r, he.x), 
        o.addScaledVector(a, he.y), o.addScaledVector(s, he.z), o;
    }
    static isFrontFacing(t, e, n, i) {
        return oe.subVectors(n, e), le.subVectors(t, e), oe.cross(le).dot(i) < 0;
    }
    set(t, e, n) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t, e, n, i) {
        return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
    }
    setFromAttributeAndIndices(t, e, n, i) {
        return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), 
        this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    }
    getArea() {
        return oe.subVectors(this.c, this.b), le.subVectors(this.a, this.b), .5 * oe.cross(le).length();
    }
    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t) {
        return _e.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
        return _e.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getUV(t, e, n, i, r) {
        return _e.getUV(t, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t) {
        return _e.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
        return _e.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
        const n = this.a, i = this.b, r = this.c;
        let a, s;
        ue.subVectors(i, n), de.subVectors(r, n), fe.subVectors(t, n);
        const o = ue.dot(fe), l = de.dot(fe);
        if (o <= 0 && l <= 0) return e.copy(n);
        me.subVectors(t, i);
        const c = ue.dot(me), h = de.dot(me);
        if (c >= 0 && h <= c) return e.copy(i);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0) return a = o / (o - c), e.copy(n).addScaledVector(ue, a);
        ge.subVectors(t, r);
        const d = ue.dot(ge), p = de.dot(ge);
        if (p >= 0 && d <= p) return e.copy(r);
        const f = d * l - o * p;
        if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), e.copy(n).addScaledVector(de, s);
        const m = c * p - d * h;
        if (m <= 0 && h - c >= 0 && d - p >= 0) return pe.subVectors(r, i), s = (h - c) / (h - c + (d - p)), 
        e.copy(i).addScaledVector(pe, s);
        const g = 1 / (m + f + u);
        return a = f * g, s = u * g, e.copy(n).addScaledVector(ue, a).addScaledVector(de, s);
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
}

let ve = 0;

class xe extends _ {
    constructor() {
        super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
            value: ve++
        }), this.uuid = b(), this.name = "", this.type = "Material", this.blending = 1, 
        this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, 
        this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, 
        this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, 
        this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, 
        this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, 
        this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, 
        this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, 
        this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, 
        this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, 
        this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
        return this._alphaTest;
    }
    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString();
    }
    setValues(t) {
        if (void 0 !== t) for (const e in t) {
            const n = t[e];
            if (void 0 === n) {
                console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                continue;
            }
            const i = this[e];
            void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
        }
    }
    toJSON(t) {
        const e = void 0 === t || "string" == typeof t;
        e && (t = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        function i(t) {
            const e = [];
            for (const n in t) {
                const i = t[n];
                delete i.metadata, e.push(i);
            }
            return e;
        }
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), 
        this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), 
        void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), 
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), 
        void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 
        this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), 
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), 
        void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), 
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), 
        void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), 
        void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), 
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), 
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), 
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, 
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), 
        void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), 
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), 
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), 
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), 
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), 
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, 
        n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, 
        n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, 
        n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, 
        n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), 
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, 
        n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), 
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), 
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), 
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), 
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), 
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), 
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), 
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, 
        void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), 
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), 
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), 
        void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), 
        void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), 
        void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), 
        void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), 
        void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), 
        void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 
        0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), 
        this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), 
        n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 
        n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, 
        n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, 
        n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, 
        void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), 
        !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 
        0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), 
        void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), 
        void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), 
        void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), 
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), 
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), 
        !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), 
        "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), 
        "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), 
        !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), 
        !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), 
        Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
            const e = i(t.textures), r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
        }
        return n;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, 
        this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, 
        this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, 
        this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, 
        this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, 
        this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, 
        this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, 
        this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let n = null;
        if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
        }
        return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, 
        this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, 
        this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, 
        this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, 
        this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, 
        this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), 
        this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
    set needsUpdate(t) {
        !0 === t && this.version++;
    }
}

class ye extends xe {
    constructor(t) {
        super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new X(16777215), 
        this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, 
        this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, 
        this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, 
        this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", 
        this.fog = !0, this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, 
        this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, 
        this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, 
        this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, 
        this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, 
        this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
    }
}

const Me = new at, be = new D;

class Se {
    constructor(t, e, n = !1) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, 
        this.count = void 0 !== t ? t.length / e : 0, this.normalized = n, this.usage = 35044, 
        this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0;
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        !0 === t && this.version++;
    }
    setUsage(t) {
        return this.usage = t, this;
    }
    copy(t) {
        return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, 
        this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
    }
    copyAt(t, e, n) {
        t *= this.itemSize, n *= e.itemSize;
        for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
        return this;
    }
    copyArray(t) {
        return this.array.set(t), this;
    }
    applyMatrix3(t) {
        if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) be.fromBufferAttribute(this, e), 
        be.applyMatrix3(t), this.setXY(e, be.x, be.y); else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), 
        Me.applyMatrix3(t), this.setXYZ(e, Me.x, Me.y, Me.z);
        return this;
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.applyMatrix4(t), 
        this.setXYZ(e, Me.x, Me.y, Me.z);
        return this;
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.applyNormalMatrix(t), 
        this.setXYZ(e, Me.x, Me.y, Me.z);
        return this;
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.transformDirection(t), 
        this.setXYZ(e, Me.x, Me.y, Me.z);
        return this;
    }
    set(t, e = 0) {
        return this.array.set(t, e), this;
    }
    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = L(e, this.array)), e;
    }
    setX(t, e) {
        return this.normalized && (e = R(e, this.array)), this.array[t * this.itemSize] = e, 
        this;
    }
    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = L(e, this.array)), e;
    }
    setY(t, e) {
        return this.normalized && (e = R(e, this.array)), this.array[t * this.itemSize + 1] = e, 
        this;
    }
    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = L(e, this.array)), e;
    }
    setZ(t, e) {
        return this.normalized && (e = R(e, this.array)), this.array[t * this.itemSize + 2] = e, 
        this;
    }
    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = L(e, this.array)), e;
    }
    setW(t, e) {
        return this.normalized && (e = R(e, this.array)), this.array[t * this.itemSize + 3] = e, 
        this;
    }
    setXY(t, e, n) {
        return t *= this.itemSize, this.normalized && (e = R(e, this.array), n = R(n, this.array)), 
        this.array[t + 0] = e, this.array[t + 1] = n, this;
    }
    setXYZ(t, e, n, i) {
        return t *= this.itemSize, this.normalized && (e = R(e, this.array), n = R(n, this.array), 
        i = R(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, 
        this;
    }
    setXYZW(t, e, n, i, r) {
        return t *= this.itemSize, this.normalized && (e = R(e, this.array), n = R(n, this.array), 
        i = R(i, this.array), r = R(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, 
        this.array[t + 2] = i, this.array[t + 3] = r, this;
    }
    onUpload(t) {
        return this.onUploadCallback = t, this;
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (t.name = this.name), 35044 !== this.usage && (t.usage = this.usage), 
        0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), 
        t;
    }
    copyColorsArray() {
        console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
    }
    copyVector2sArray() {
        console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
    }
    copyVector3sArray() {
        console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
    }
    copyVector4sArray() {
        console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
    }
}

class we extends Se {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n);
    }
}

class Te extends Se {
    constructor(t, e, n) {
        super(new Uint32Array(t), e, n);
    }
}

class Ee extends Se {
    constructor(t, e, n) {
        super(new Float32Array(t), e, n);
    }
}

let Ae = 0;

const Ce = new Ot, Le = new se, Re = new at, Pe = new lt, De = new lt, Ie = new at;

class Ne extends _ {
    constructor() {
        super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
            value: Ae++
        }), this.uuid = b(), this.name = "", this.type = "BufferGeometry", this.index = null, 
        this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, 
        this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {};
    }
    getIndex() {
        return this.index;
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new (O(t) ? Te : we)(t, 1) : this.index = t, 
        this;
    }
    getAttribute(t) {
        return this.attributes[t];
    }
    setAttribute(t, e) {
        return this.attributes[t] = e, this;
    }
    deleteAttribute(t) {
        return delete this.attributes[t], this;
    }
    hasAttribute(t) {
        return void 0 !== this.attributes[t];
    }
    addGroup(t, e, n = 0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        });
    }
    clearGroups() {
        this.groups = [];
    }
    setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e;
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const e = (new I).getNormalMatrix(t);
            n.applyNormalMatrix(e), n.needsUpdate = !0;
        }
        const i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), 
        null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t) {
        return Ce.makeRotationFromQuaternion(t), this.applyMatrix4(Ce), this;
    }
    rotateX(t) {
        return Ce.makeRotationX(t), this.applyMatrix4(Ce), this;
    }
    rotateY(t) {
        return Ce.makeRotationY(t), this.applyMatrix4(Ce), this;
    }
    rotateZ(t) {
        return Ce.makeRotationZ(t), this.applyMatrix4(Ce), this;
    }
    translate(t, e, n) {
        return Ce.makeTranslation(t, e, n), this.applyMatrix4(Ce), this;
    }
    scale(t, e, n) {
        return Ce.makeScale(t, e, n), this.applyMatrix4(Ce), this;
    }
    lookAt(t) {
        return Le.lookAt(t), Le.updateMatrix(), this.applyMatrix4(Le.matrix), this;
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(Re).negate(), this.translate(Re.x, Re.y, Re.z), 
        this;
    }
    setFromPoints(t) {
        const e = [];
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0);
        }
        return this.setAttribute("position", new Ee(e, 3)), this;
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new lt);
        const t = this.attributes.position, e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), 
        void this.boundingBox.set(new at(-1 / 0, -1 / 0, -1 / 0), new at(1 / 0, 1 / 0, 1 / 0));
        if (void 0 !== t) {
            if (this.boundingBox.setFromBufferAttribute(t), e) for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                Pe.setFromBufferAttribute(n), this.morphTargetsRelative ? (Ie.addVectors(this.boundingBox.min, Pe.min), 
                this.boundingBox.expandByPoint(Ie), Ie.addVectors(this.boundingBox.max, Pe.max), 
                this.boundingBox.expandByPoint(Ie)) : (this.boundingBox.expandByPoint(Pe.min), this.boundingBox.expandByPoint(Pe.max));
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new Et);
        const t = this.attributes.position, e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), 
        void this.boundingSphere.set(new at, 1 / 0);
        if (t) {
            const n = this.boundingSphere.center;
            if (Pe.setFromBufferAttribute(t), e) for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                De.setFromBufferAttribute(n), this.morphTargetsRelative ? (Ie.addVectors(Pe.min, De.min), 
                Pe.expandByPoint(Ie), Ie.addVectors(Pe.max, De.max), Pe.expandByPoint(Ie)) : (Pe.expandByPoint(De.min), 
                Pe.expandByPoint(De.max));
            }
            Pe.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++) Ie.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(Ie));
            if (e) for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r], s = this.morphTargetsRelative;
                for (let e = 0, r = a.count; e < r; e++) Ie.fromBufferAttribute(a, e), s && (Re.fromBufferAttribute(t, e), 
                Ie.add(Re)), i = Math.max(i, n.distanceToSquared(Ie));
            }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
    }
    computeTangents() {
        const t = this.index, e = this.attributes;
        if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        const n = t.array, i = e.position.array, r = e.normal.array, a = e.uv.array, s = i.length / 3;
        !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Se(new Float32Array(4 * s), 4));
        const o = this.getAttribute("tangent").array, l = [], c = [];
        for (let t = 0; t < s; t++) l[t] = new at, c[t] = new at;
        const h = new at, u = new at, d = new at, p = new D, f = new D, m = new D, g = new at, _ = new at;
        function v(t, e, n) {
            h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(a, 2 * t), 
            f.fromArray(a, 2 * e), m.fromArray(a, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
            const r = 1 / (f.x * m.y - m.x * f.y);
            isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), 
            _.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), 
            l[e].add(g), l[n].add(g), c[t].add(_), c[e].add(_), c[n].add(_));
        }
        let x = this.groups;
        0 === x.length && (x = [ {
            start: 0,
            count: n.length
        } ]);
        for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t], i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) v(n[t + 0], n[t + 1], n[t + 2]);
        }
        const y = new at, M = new at, b = new at, S = new at;
        function w(t) {
            b.fromArray(r, 3 * t), S.copy(b);
            const e = l[t];
            y.copy(e), y.sub(b.multiplyScalar(b.dot(e))).normalize(), M.crossVectors(S, e);
            const n = M.dot(c[t]) < 0 ? -1 : 1;
            o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = n;
        }
        for (let t = 0, e = x.length; t < e; ++t) {
            const e = x[t], i = e.start;
            for (let t = i, r = i + e.count; t < r; t += 3) w(n[t + 0]), w(n[t + 1]), w(n[t + 2]);
        }
    }
    computeVertexNormals() {
        const t = this.index, e = this.getAttribute("position");
        if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n) n = new Se(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n); else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new at, r = new at, a = new at, s = new at, o = new at, l = new at, c = new at, h = new at;
            if (t) for (let u = 0, d = t.count; u < d; u += 3) {
                const d = t.getX(u + 0), p = t.getX(u + 1), f = t.getX(u + 2);
                i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), a.fromBufferAttribute(e, f), 
                c.subVectors(a, r), h.subVectors(i, r), c.cross(h), s.fromBufferAttribute(n, d), 
                o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), s.add(c), o.add(c), l.add(c), 
                n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z);
            } else for (let t = 0, s = e.count; t < s; t += 3) i.fromBufferAttribute(e, t + 0), 
            r.fromBufferAttribute(e, t + 1), a.fromBufferAttribute(e, t + 2), c.subVectors(a, r), 
            h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), 
            n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), n.needsUpdate = !0;
        }
    }
    merge() {
        return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), 
        this;
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, n = t.count; e < n; e++) Ie.fromBufferAttribute(t, e), Ie.normalize(), 
        t.setXYZ(e, Ie.x, Ie.y, Ie.z);
    }
    toNonIndexed() {
        function t(t, e) {
            const n = t.array, i = t.itemSize, r = t.normalized, a = new n.constructor(e.length * i);
            let s = 0, o = 0;
            for (let r = 0, l = e.length; r < l; r++) {
                s = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
                for (let t = 0; t < i; t++) a[o++] = n[s++];
            }
            return new Se(a, i, r);
        }
        if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), 
        this;
        const e = new Ne, n = this.index.array, i = this.attributes;
        for (const r in i) {
            const a = t(i[r], n);
            e.setAttribute(r, a);
        }
        const r = this.morphAttributes;
        for (const i in r) {
            const a = [], s = r[i];
            for (let e = 0, i = s.length; e < i; e++) {
                const i = t(s[e], n);
                a.push(i);
            }
            e.morphAttributes[i] = a;
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let t = 0, n = a.length; t < n; t++) {
            const n = a[t];
            e.addGroup(n.start, n.count, n.materialIndex);
        }
        return e;
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), 
        Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t;
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        null !== e && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const n = this.attributes;
        for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data);
        }
        const i = {};
        let r = !1;
        for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e], a = [];
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                a.push(i.toJSON(t.data));
            }
            a.length > 0 && (i[e] = a, r = !0);
        }
        r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
        const s = this.boundingSphere;
        return null !== s && (t.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius
        }), t;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    copy(t) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], 
        this.boundingBox = null, this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const n = t.index;
        null !== n && this.setIndex(n.clone(e));
        const i = t.attributes;
        for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e));
        }
        const r = t.morphAttributes;
        for (const t in r) {
            const n = [], i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n;
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const a = t.groups;
        for (let t = 0, e = a.length; t < e; t++) {
            const e = a[t];
            this.addGroup(e.start, e.count, e.materialIndex);
        }
        const s = t.boundingBox;
        null !== s && (this.boundingBox = s.clone());
        const o = t.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, 
        this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), 
        this;
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}

const Oe = new Ot, ze = new Nt, Ue = new Et, Fe = new at, Be = new at, ke = new at, Ve = new at, He = new at, Ge = new D, We = new D, je = new D, qe = new at, Xe = new at;

class Ye extends se {
    constructor(t = new Ne, e = new ye) {
        super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, 
        this.updateMorphTargets();
    }
    copy(t, e) {
        return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), 
        void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), 
        this.material = t.material, this.geometry = t.geometry, this;
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes, e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        }
    }
    getVertexPosition(t, e) {
        const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
        e.fromBufferAttribute(i, t);
        const s = this.morphTargetInfluences;
        if (r && s) {
            He.set(0, 0, 0);
            for (let n = 0, i = r.length; n < i; n++) {
                const i = s[n], o = r[n];
                0 !== i && (Ve.fromBufferAttribute(o, t), a ? He.addScaledVector(Ve, i) : He.addScaledVector(Ve.sub(e), i));
            }
            e.add(He);
        }
        return this.isSkinnedMesh && this.boneTransform(t, e), e;
    }
    raycast(t, e) {
        const n = this.geometry, i = this.material, r = this.matrixWorld;
        if (void 0 === i) return;
        if (null === n.boundingSphere && n.computeBoundingSphere(), Ue.copy(n.boundingSphere), 
        Ue.applyMatrix4(r), !1 === t.ray.intersectsSphere(Ue)) return;
        if (Oe.copy(r).invert(), ze.copy(t.ray).applyMatrix4(Oe), null !== n.boundingBox && !1 === ze.intersectsBox(n.boundingBox)) return;
        let a;
        const s = n.index, o = n.attributes.position, l = n.attributes.uv, c = n.attributes.uv2, h = n.groups, u = n.drawRange;
        if (null !== s) if (Array.isArray(i)) for (let n = 0, r = h.length; n < r; n++) {
            const r = h[n], o = i[r.materialIndex];
            for (let n = Math.max(r.start, u.start), i = Math.min(s.count, Math.min(r.start + r.count, u.start + u.count)); n < i; n += 3) {
                const i = s.getX(n), h = s.getX(n + 1), u = s.getX(n + 2);
                a = Ze(this, o, t, ze, l, c, i, h, u), a && (a.faceIndex = Math.floor(n / 3), a.face.materialIndex = r.materialIndex, 
                e.push(a));
            }
        } else {
            for (let n = Math.max(0, u.start), r = Math.min(s.count, u.start + u.count); n < r; n += 3) {
                const r = s.getX(n), o = s.getX(n + 1), h = s.getX(n + 2);
                a = Ze(this, i, t, ze, l, c, r, o, h), a && (a.faceIndex = Math.floor(n / 3), e.push(a));
            }
        } else if (void 0 !== o) if (Array.isArray(i)) for (let n = 0, r = h.length; n < r; n++) {
            const r = h[n], s = i[r.materialIndex];
            for (let n = Math.max(r.start, u.start), i = Math.min(o.count, Math.min(r.start + r.count, u.start + u.count)); n < i; n += 3) {
                a = Ze(this, s, t, ze, l, c, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), 
                a.face.materialIndex = r.materialIndex, e.push(a));
            }
        } else {
            for (let n = Math.max(0, u.start), r = Math.min(o.count, u.start + u.count); n < r; n += 3) {
                a = Ze(this, i, t, ze, l, c, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), 
                e.push(a));
            }
        }
    }
}

function Ze(t, e, n, i, r, a, s, o, l) {
    t.getVertexPosition(s, Fe), t.getVertexPosition(o, Be), t.getVertexPosition(l, ke);
    const c = function(t, e, n, i, r, a, s, o) {
        let l;
        if (l = 1 === e.side ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, 0 === e.side, o), 
        null === l) return null;
        Xe.copy(o), Xe.applyMatrix4(t.matrixWorld);
        const c = n.ray.origin.distanceTo(Xe);
        return c < n.near || c > n.far ? null : {
            distance: c,
            point: Xe.clone(),
            object: t
        };
    }(t, e, n, i, Fe, Be, ke, qe);
    if (c) {
        r && (Ge.fromBufferAttribute(r, s), We.fromBufferAttribute(r, o), je.fromBufferAttribute(r, l), 
        c.uv = _e.getUV(qe, Fe, Be, ke, Ge, We, je, new D)), a && (Ge.fromBufferAttribute(a, s), 
        We.fromBufferAttribute(a, o), je.fromBufferAttribute(a, l), c.uv2 = _e.getUV(qe, Fe, Be, ke, Ge, We, je, new D));
        const t = {
            a: s,
            b: o,
            c: l,
            normal: new at,
            materialIndex: 0
        };
        _e.getNormal(Fe, Be, ke, t.normal), c.face = t;
    }
    return c;
}

class Je extends Ne {
    constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
        super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
        };
        const s = this;
        i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
        const o = [], l = [], c = [], h = [];
        let u = 0, d = 0;
        function p(t, e, n, i, r, a, p, f, m, g, _) {
            const v = a / m, x = p / g, y = a / 2, M = p / 2, b = f / 2, S = m + 1, w = g + 1;
            let T = 0, E = 0;
            const A = new at;
            for (let a = 0; a < w; a++) {
                const s = a * x - M;
                for (let o = 0; o < S; o++) {
                    const u = o * v - y;
                    A[t] = u * i, A[e] = s * r, A[n] = b, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, 
                    A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - a / g), 
                    T += 1;
                }
            }
            for (let t = 0; t < g; t++) for (let e = 0; e < m; e++) {
                const n = u + e + S * t, i = u + e + S * (t + 1), r = u + (e + 1) + S * (t + 1), a = u + (e + 1) + S * t;
                o.push(n, i, a), o.push(i, r, a), E += 6;
            }
            s.addGroup(d, E, _), d += E, u += T;
        }
        p("z", "y", "x", -1, -1, n, e, t, a, r, 0), p("z", "y", "x", 1, -1, n, e, -t, a, r, 1), 
        p("x", "z", "y", 1, 1, t, n, e, i, a, 2), p("x", "z", "y", 1, -1, t, n, -e, i, a, 3), 
        p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), 
        this.setIndex(o), this.setAttribute("position", new Ee(l, 3)), this.setAttribute("normal", new Ee(c, 3)), 
        this.setAttribute("uv", new Ee(h, 2));
    }
    static fromJSON(t) {
        return new Je(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
    }
}

function Ke(t) {
    const e = {};
    for (const n in t) {
        e[n] = {};
        for (const i in t[n]) {
            const r = t[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
        }
    }
    return e;
}

function Qe(t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const i = Ke(t[n]);
        for (const t in i) e[t] = i[t];
    }
    return e;
}

function $e(t) {
    return null === t.getRenderTarget() && 3001 === t.outputEncoding ? "srgb" : "srgb-linear";
}

const tn = {
    clone: Ke,
    merge: Qe
};

class en extends xe {
    constructor(t) {
        super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, 
        this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", 
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", 
        this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, 
        this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [ 1, 1, 1 ],
            uv: [ 0, 0 ],
            uv2: [ 0, 0 ]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, 
        void 0 !== t && this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, 
        this.uniforms = Ke(t.uniforms), this.uniformsGroups = function(t) {
            const e = [];
            for (let n = 0; n < t.length; n++) e.push(t[n].clone());
            return e;
        }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, 
        this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, 
        this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, 
        this;
    }
    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion, e.uniforms = {};
        for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture ? e.uniforms[n] = {
                type: "t",
                value: i.toJSON(t).uuid
            } : i && i.isColor ? e.uniforms[n] = {
                type: "c",
                value: i.getHex()
            } : i && i.isVector2 ? e.uniforms[n] = {
                type: "v2",
                value: i.toArray()
            } : i && i.isVector3 ? e.uniforms[n] = {
                type: "v3",
                value: i.toArray()
            } : i && i.isVector4 ? e.uniforms[n] = {
                type: "v4",
                value: i.toArray()
            } : i && i.isMatrix3 ? e.uniforms[n] = {
                type: "m3",
                value: i.toArray()
            } : i && i.isMatrix4 ? e.uniforms[n] = {
                type: "m4",
                value: i.toArray()
            } : e.uniforms[n] = {
                value: i
            };
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, 
        e.fragmentShader = this.fragmentShader;
        const n = {};
        for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
        return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
}

class nn extends se {
    constructor() {
        super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ot, 
        this.projectionMatrix = new Ot, this.projectionMatrixInverse = new Ot;
    }
    copy(t, e) {
        return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), 
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(-e[8], -e[9], -e[10]).normalize();
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}

class rn extends nn {
    constructor(t = 50, e = 1, n = .1, i = 2e3) {
        super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, 
        this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, 
        this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t, e) {
        return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, 
        this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), 
        this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
    }
    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = 2 * M * Math.atan(e), this.updateProjectionMatrix();
    }
    getFocalLength() {
        const t = Math.tan(.5 * y * this.fov);
        return .5 * this.getFilmHeight() / t;
    }
    getEffectiveFOV() {
        return 2 * M * Math.atan(Math.tan(.5 * y * this.fov) / this.zoom);
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1);
    }
    setViewOffset(t, e, n, i, r, a) {
        this.aspect = t / e, null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, 
        this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan(.5 * y * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -.5 * i;
        const a = this.view;
        if (null !== this.view && this.view.enabled) {
            const t = a.fullWidth, s = a.fullHeight;
            r += a.offsetX * i / t, e -= a.offsetY * n / s, i *= a.width / t, n *= a.height / s;
        }
        const s = this.filmOffset;
        0 !== s && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), 
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, 
        e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, 
        null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, 
        e.object.filmOffset = this.filmOffset, e;
    }
}

class an extends se {
    constructor(t, e, n) {
        super(), this.type = "CubeCamera", this.renderTarget = n;
        const i = new rn(-90, 1, t, e);
        i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
        const r = new rn(-90, 1, t, e);
        r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
        const a = new rn(-90, 1, t, e);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(0, 1, 0), this.add(a);
        const s = new rn(-90, 1, t, e);
        s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(0, -1, 0), this.add(s);
        const o = new rn(-90, 1, t, e);
        o.layers = this.layers, o.up.set(0, 1, 0), o.lookAt(0, 0, 1), this.add(o);
        const l = new rn(-90, 1, t, e);
        l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
    }
    update(t, e) {
        null === this.parent && this.updateMatrixWorld();
        const n = this.renderTarget, [i, r, a, s, o, l] = this.children, c = t.getRenderTarget(), h = t.toneMapping, u = t.xr.enabled;
        t.toneMapping = 0, t.xr.enabled = !1;
        const d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), 
        t.render(e, r), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), 
        t.render(e, s), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = d, 
        t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, 
        t.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
    }
}

class sn extends $ {
    constructor(t, e, n, i, r, a, s, o, l, c) {
        super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, n, i, r, a, s, o, l, c), 
        this.isCubeTexture = !0, this.flipY = !1;
    }
    get images() {
        return this.image;
    }
    set images(t) {
        this.image = t;
    }
}

class on extends et {
    constructor(t = 1, e = {}) {
        super(t, t, e), this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: t,
            height: t,
            depth: 1
        }, i = [ n, n, n, n, n, n ];
        this.texture = new sn(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), 
        this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, 
        this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : 1006;
    }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, 
        this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        }, i = new Je(5, 5, 5), r = new en({
            name: "CubemapFromEquirect",
            uniforms: Ke(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
        r.uniforms.tEquirect.value = e;
        const a = new Ye(i, r), s = e.minFilter;
        1008 === e.minFilter && (e.minFilter = 1006);
        return new an(1, 10, this).update(t, a), e.minFilter = s, a.geometry.dispose(), 
        a.material.dispose(), this;
    }
    clear(t, e, n, i) {
        const r = t.getRenderTarget();
        for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
        t.setRenderTarget(r);
    }
}

const ln = new at, cn = new at, hn = new I;

class un {
    constructor(t = new at(1, 0, 0), e = 0) {
        this.isPlane = !0, this.normal = t, this.constant = e;
    }
    set(t, e) {
        return this.normal.copy(t), this.constant = e, this;
    }
    setComponents(t, e, n, i) {
        return this.normal.set(t, e, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
    }
    setFromCoplanarPoints(t, e, n) {
        const i = ln.subVectors(n, e).cross(cn.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, t), this;
    }
    copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this;
    }
    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this;
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
        return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
    }
    intersectLine(t, e) {
        const n = t.delta(ln), i = this.normal.dot(n);
        if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
        const r = -(t.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start);
    }
    intersectsLine(t) {
        const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0;
    }
    intersectsBox(t) {
        return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
        return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
        const n = e || hn.getNormalMatrix(t), i = this.coplanarPoint(ln).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r), this;
    }
    translate(t) {
        return this.constant -= t.dot(this.normal), this;
    }
    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}

const dn = new Et, pn = new at;

class fn {
    constructor(t = new un, e = new un, n = new un, i = new un, r = new un, a = new un) {
        this.planes = [ t, e, n, i, r, a ];
    }
    set(t, e, n, i, r, a) {
        const s = this.planes;
        return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), 
        this;
    }
    copy(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
        return this;
    }
    setFromProjectionMatrix(t) {
        const e = this.planes, n = t.elements, i = n[0], r = n[1], a = n[2], s = n[3], o = n[4], l = n[5], c = n[6], h = n[7], u = n[8], d = n[9], p = n[10], f = n[11], m = n[12], g = n[13], _ = n[14], v = n[15];
        return e[0].setComponents(s - i, h - o, f - u, v - m).normalize(), e[1].setComponents(s + i, h + o, f + u, v + m).normalize(), 
        e[2].setComponents(s + r, h + l, f + d, v + g).normalize(), e[3].setComponents(s - r, h - l, f - d, v - g).normalize(), 
        e[4].setComponents(s - a, h - c, f - p, v - _).normalize(), e[5].setComponents(s + a, h + c, f + p, v + _).normalize(), 
        this;
    }
    intersectsObject(t) {
        const e = t.geometry;
        return null === e.boundingSphere && e.computeBoundingSphere(), dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), 
        this.intersectsSphere(dn);
    }
    intersectsSprite(t) {
        return dn.center.set(0, 0, 0), dn.radius = .7071067811865476, dn.applyMatrix4(t.matrixWorld), 
        this.intersectsSphere(dn);
    }
    intersectsSphere(t) {
        const e = this.planes, n = t.center, i = -t.radius;
        for (let t = 0; t < 6; t++) {
            if (e[t].distanceToPoint(n) < i) return !1;
        }
        return !0;
    }
    intersectsBox(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (pn.x = i.normal.x > 0 ? t.max.x : t.min.x, pn.y = i.normal.y > 0 ? t.max.y : t.min.y, 
            pn.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(pn) < 0) return !1;
        }
        return !0;
    }
    containsPoint(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
        return !0;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
}

function mn() {
    let t = null, e = !1, n = null, i = null;
    function r(e, a) {
        n(e, a), i = t.requestAnimationFrame(r);
    }
    return {
        start: function() {
            !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0);
        },
        stop: function() {
            t.cancelAnimationFrame(i), e = !1;
        },
        setAnimationLoop: function(t) {
            n = t;
        },
        setContext: function(e) {
            t = e;
        }
    };
}

function gn(t, e) {
    const n = e.isWebGL2, i = new WeakMap;
    return {
        get: function(t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
        },
        remove: function(e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e));
        },
        update: function(e, r) {
            if (e.isGLBufferAttribute) {
                const t = i.get(e);
                return void ((!t || t.version < e.version) && i.set(e, {
                    buffer: e.buffer,
                    type: e.type,
                    bytesPerElement: e.elementSize,
                    version: e.version
                }));
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const a = i.get(e);
            void 0 === a ? i.set(e, function(e, i) {
                const r = e.array, a = e.usage, s = t.createBuffer();
                let o;
                if (t.bindBuffer(i, s), t.bufferData(i, r, a), e.onUploadCallback(), r instanceof Float32Array) o = 5126; else if (r instanceof Uint16Array) if (e.isFloat16BufferAttribute) {
                    if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                    o = 5131;
                } else o = 5123; else if (r instanceof Int16Array) o = 5122; else if (r instanceof Uint32Array) o = 5125; else if (r instanceof Int32Array) o = 5124; else if (r instanceof Int8Array) o = 5120; else if (r instanceof Uint8Array) o = 5121; else {
                    if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                    o = 5121;
                }
                return {
                    buffer: s,
                    type: o,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: e.version
                };
            }(e, r)) : a.version < e.version && (!function(e, i, r) {
                const a = i.array, s = i.updateRange;
                t.bindBuffer(r, e), -1 === s.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), 
                s.count = -1), i.onUploadCallback();
            }(a.buffer, e, r), a.version = e.version);
        }
    };
}

class _n extends Ne {
    constructor(t = 1, e = 1, n = 1, i = 1) {
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
        };
        const r = t / 2, a = e / 2, s = Math.floor(n), o = Math.floor(i), l = s + 1, c = o + 1, h = t / s, u = e / o, d = [], p = [], f = [], m = [];
        for (let t = 0; t < c; t++) {
            const e = t * u - a;
            for (let n = 0; n < l; n++) {
                const i = n * h - r;
                p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o);
            }
        }
        for (let t = 0; t < o; t++) for (let e = 0; e < s; e++) {
            const n = e + l * t, i = e + l * (t + 1), r = e + 1 + l * (t + 1), a = e + 1 + l * t;
            d.push(n, i, a), d.push(i, r, a);
        }
        this.setIndex(d), this.setAttribute("position", new Ee(p, 3)), this.setAttribute("normal", new Ee(f, 3)), 
        this.setAttribute("uv", new Ee(m, 2));
    }
    static fromJSON(t) {
        return new _n(t.width, t.height, t.widthSegments, t.heightSegments);
    }
}

const vn = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
    alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
    iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",
    transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
}, xn = {
    common: {
        diffuse: {
            value: new X(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new I
        },
        uv2Transform: {
            value: new I
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new D(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new X(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new X(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new I
        }
    },
    sprite: {
        diffuse: {
            value: new X(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new D(.5, .5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new I
        }
    }
}, yn = {
    basic: {
        uniforms: Qe([ xn.common, xn.specularmap, xn.envmap, xn.aomap, xn.lightmap, xn.fog ]),
        vertexShader: vn.meshbasic_vert,
        fragmentShader: vn.meshbasic_frag
    },
    lambert: {
        uniforms: Qe([ xn.common, xn.specularmap, xn.envmap, xn.aomap, xn.lightmap, xn.emissivemap, xn.bumpmap, xn.normalmap, xn.displacementmap, xn.fog, xn.lights, {
            emissive: {
                value: new X(0)
            }
        } ]),
        vertexShader: vn.meshlambert_vert,
        fragmentShader: vn.meshlambert_frag
    },
    phong: {
        uniforms: Qe([ xn.common, xn.specularmap, xn.envmap, xn.aomap, xn.lightmap, xn.emissivemap, xn.bumpmap, xn.normalmap, xn.displacementmap, xn.fog, xn.lights, {
            emissive: {
                value: new X(0)
            },
            specular: {
                value: new X(1118481)
            },
            shininess: {
                value: 30
            }
        } ]),
        vertexShader: vn.meshphong_vert,
        fragmentShader: vn.meshphong_frag
    },
    standard: {
        uniforms: Qe([ xn.common, xn.envmap, xn.aomap, xn.lightmap, xn.emissivemap, xn.bumpmap, xn.normalmap, xn.displacementmap, xn.roughnessmap, xn.metalnessmap, xn.fog, xn.lights, {
            emissive: {
                value: new X(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        } ]),
        vertexShader: vn.meshphysical_vert,
        fragmentShader: vn.meshphysical_frag
    },
    toon: {
        uniforms: Qe([ xn.common, xn.aomap, xn.lightmap, xn.emissivemap, xn.bumpmap, xn.normalmap, xn.displacementmap, xn.gradientmap, xn.fog, xn.lights, {
            emissive: {
                value: new X(0)
            }
        } ]),
        vertexShader: vn.meshtoon_vert,
        fragmentShader: vn.meshtoon_frag
    },
    matcap: {
        uniforms: Qe([ xn.common, xn.bumpmap, xn.normalmap, xn.displacementmap, xn.fog, {
            matcap: {
                value: null
            }
        } ]),
        vertexShader: vn.meshmatcap_vert,
        fragmentShader: vn.meshmatcap_frag
    },
    points: {
        uniforms: Qe([ xn.points, xn.fog ]),
        vertexShader: vn.points_vert,
        fragmentShader: vn.points_frag
    },
    dashed: {
        uniforms: Qe([ xn.common, xn.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        } ]),
        vertexShader: vn.linedashed_vert,
        fragmentShader: vn.linedashed_frag
    },
    depth: {
        uniforms: Qe([ xn.common, xn.displacementmap ]),
        vertexShader: vn.depth_vert,
        fragmentShader: vn.depth_frag
    },
    normal: {
        uniforms: Qe([ xn.common, xn.bumpmap, xn.normalmap, xn.displacementmap, {
            opacity: {
                value: 1
            }
        } ]),
        vertexShader: vn.meshnormal_vert,
        fragmentShader: vn.meshnormal_frag
    },
    sprite: {
        uniforms: Qe([ xn.sprite, xn.fog ]),
        vertexShader: vn.sprite_vert,
        fragmentShader: vn.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new I
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: vn.background_vert,
        fragmentShader: vn.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: vn.backgroundCube_vert,
        fragmentShader: vn.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: vn.cube_vert,
        fragmentShader: vn.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: vn.equirect_vert,
        fragmentShader: vn.equirect_frag
    },
    distanceRGBA: {
        uniforms: Qe([ xn.common, xn.displacementmap, {
            referencePosition: {
                value: new at
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        } ]),
        vertexShader: vn.distanceRGBA_vert,
        fragmentShader: vn.distanceRGBA_frag
    },
    shadow: {
        uniforms: Qe([ xn.lights, xn.fog, {
            color: {
                value: new X(0)
            },
            opacity: {
                value: 1
            }
        } ]),
        vertexShader: vn.shadow_vert,
        fragmentShader: vn.shadow_frag
    }
};

yn.physical = {
    uniforms: Qe([ yn.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new D(1, 1)
        },
        clearcoatNormalMap: {
            value: null
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new X(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionSamplerSize: {
            value: new D
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new X(0)
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularColor: {
            value: new X(1, 1, 1)
        },
        specularColorMap: {
            value: null
        }
    } ]),
    vertexShader: vn.meshphysical_vert,
    fragmentShader: vn.meshphysical_frag
};

const Mn = {
    r: 0,
    b: 0,
    g: 0
};

function bn(t, e, n, i, r, a, s) {
    const o = new X(0);
    let l, c, h = !0 === a ? 0 : 1, u = null, d = 0, p = null;
    function f(e, n) {
        e.getRGB(Mn, $e(t)), i.buffers.color.setClear(Mn.r, Mn.g, Mn.b, n, s);
    }
    return {
        getClearColor: function() {
            return o;
        },
        setClearColor: function(t, e = 1) {
            o.set(t), h = e, f(o, h);
        },
        getClearAlpha: function() {
            return h;
        },
        setClearAlpha: function(t) {
            h = t, f(o, h);
        },
        render: function(i, a) {
            let s = !1, m = !0 === a.isScene ? a.background : null;
            if (m && m.isTexture) {
                m = (a.backgroundBlurriness > 0 ? n : e).get(m);
            }
            const g = t.xr, _ = g.getSession && g.getSession();
            _ && "additive" === _.environmentBlendMode && (m = null), null === m ? f(o, h) : m && m.isColor && (f(m, 1), 
            s = !0), (t.autoClear || s) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), 
            m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === c && (c = new Ye(new Je(1, 1, 1), new en({
                name: "BackgroundCubeMaterial",
                uniforms: Ke(yn.backgroundCube.uniforms),
                vertexShader: yn.backgroundCube.vertexShader,
                fragmentShader: yn.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t, e, n) {
                this.matrixWorld.copyPosition(n.matrixWorld);
            }, Object.defineProperty(c.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value;
                }
            }), r.update(c)), c.material.uniforms.envMap.value = m, c.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, 
            c.material.uniforms.backgroundBlurriness.value = a.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = a.backgroundIntensity, 
            c.material.toneMapped = 3001 !== m.encoding, u === m && d === m.version && p === t.toneMapping || (c.material.needsUpdate = !0, 
            u = m, d = m.version, p = t.toneMapping), c.layers.enableAll(), i.unshift(c, c.geometry, c.material, 0, 0, null)) : m && m.isTexture && (void 0 === l && (l = new Ye(new _n(2, 2), new en({
                name: "BackgroundMaterial",
                uniforms: Ke(yn.background.uniforms),
                vertexShader: yn.background.vertexShader,
                fragmentShader: yn.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value;
                }
            }), r.update(l)), l.material.uniforms.t2D.value = m, l.material.uniforms.backgroundIntensity.value = a.backgroundIntensity, 
            l.material.toneMapped = 3001 !== m.encoding, !0 === m.matrixAutoUpdate && m.updateMatrix(), 
            l.material.uniforms.uvTransform.value.copy(m.matrix), u === m && d === m.version && p === t.toneMapping || (l.material.needsUpdate = !0, 
            u = m, d = m.version, p = t.toneMapping), l.layers.enableAll(), i.unshift(l, l.geometry, l.material, 0, 0, null));
        }
    };
}

function Sn(t, e, n, i) {
    const r = t.getParameter(34921), a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), s = i.isWebGL2 || null !== a, o = {}, l = p(null);
    let c = l, h = !1;
    function u(e) {
        return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
    }
    function d(e) {
        return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
    }
    function p(t) {
        const e = [], n = [], i = [];
        for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null
        };
    }
    function f() {
        const t = c.newAttributes;
        for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
    }
    function m(t) {
        g(t, 0);
    }
    function g(n, r) {
        const a = c.newAttributes, s = c.enabledAttributes, o = c.attributeDivisors;
        if (a[n] = 1, 0 === s[n] && (t.enableVertexAttribArray(n), s[n] = 1), o[n] !== r) {
            (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), 
            o[n] = r;
        }
    }
    function _() {
        const e = c.newAttributes, n = c.enabledAttributes;
        for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), 
        n[i] = 0);
    }
    function v(e, n, r, a, s, o) {
        !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, a, s, o) : t.vertexAttribIPointer(e, n, r, s, o);
    }
    function x() {
        y(), h = !0, c !== l && (c = l, u(c.object));
    }
    function y() {
        l.geometry = null, l.program = null, l.wireframe = !1;
    }
    return {
        setup: function(r, l, d, x, y) {
            let M = !1;
            if (s) {
                const e = function(e, n, r) {
                    const s = !0 === r.wireframe;
                    let l = o[e.id];
                    void 0 === l && (l = {}, o[e.id] = l);
                    let c = l[n.id];
                    void 0 === c && (c = {}, l[n.id] = c);
                    let h = c[s];
                    void 0 === h && (h = p(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), 
                    c[s] = h);
                    return h;
                }(x, d, l);
                c !== e && (c = e, u(c.object)), M = function(t, e, n, i) {
                    const r = c.attributes, a = e.attributes;
                    let s = 0;
                    const o = n.getAttributes();
                    for (const e in o) {
                        if (o[e].location >= 0) {
                            const n = r[e];
                            let i = a[e];
                            if (void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), 
                            "instanceColor" === e && t.instanceColor && (i = t.instanceColor)), void 0 === n) return !0;
                            if (n.attribute !== i) return !0;
                            if (i && n.data !== i.data) return !0;
                            s++;
                        }
                    }
                    return c.attributesNum !== s || c.index !== i;
                }(r, x, d, y), M && function(t, e, n, i) {
                    const r = {}, a = e.attributes;
                    let s = 0;
                    const o = n.getAttributes();
                    for (const e in o) {
                        if (o[e].location >= 0) {
                            let n = a[e];
                            void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), 
                            "instanceColor" === e && t.instanceColor && (n = t.instanceColor));
                            const i = {};
                            i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, s++;
                        }
                    }
                    c.attributes = r, c.attributesNum = s, c.index = i;
                }(r, x, d, y);
            } else {
                const t = !0 === l.wireframe;
                c.geometry === x.id && c.program === d.id && c.wireframe === t || (c.geometry = x.id, 
                c.program = d.id, c.wireframe = t, M = !0);
            }
            null !== y && n.update(y, 34963), (M || h) && (h = !1, function(r, a, s, o) {
                if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                f();
                const l = o.attributes, c = s.getAttributes(), h = a.defaultAttributeValues;
                for (const e in c) {
                    const i = c[e];
                    if (i.location >= 0) {
                        let a = l[e];
                        if (void 0 === a && ("instanceMatrix" === e && r.instanceMatrix && (a = r.instanceMatrix), 
                        "instanceColor" === e && r.instanceColor && (a = r.instanceColor)), void 0 !== a) {
                            const e = a.normalized, s = a.itemSize, l = n.get(a);
                            if (void 0 === l) continue;
                            const c = l.buffer, h = l.type, u = l.bytesPerElement;
                            if (a.isInterleavedBufferAttribute) {
                                const n = a.data, l = n.stride, d = a.offset;
                                if (n.isInstancedInterleavedBuffer) {
                                    for (let t = 0; t < i.locationSize; t++) g(i.location + t, n.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count);
                                } else for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                                t.bindBuffer(34962, c);
                                for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, h, e, l * u, (d + s / i.locationSize * t) * u);
                            } else {
                                if (a.isInstancedBufferAttribute) {
                                    for (let t = 0; t < i.locationSize; t++) g(i.location + t, a.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count);
                                } else for (let t = 0; t < i.locationSize; t++) m(i.location + t);
                                t.bindBuffer(34962, c);
                                for (let t = 0; t < i.locationSize; t++) v(i.location + t, s / i.locationSize, h, e, s * u, s / i.locationSize * t * u);
                            }
                        } else if (void 0 !== h) {
                            const n = h[e];
                            if (void 0 !== n) switch (n.length) {
                              case 2:
                                t.vertexAttrib2fv(i.location, n);
                                break;

                              case 3:
                                t.vertexAttrib3fv(i.location, n);
                                break;

                              case 4:
                                t.vertexAttrib4fv(i.location, n);
                                break;

                              default:
                                t.vertexAttrib1fv(i.location, n);
                            }
                        }
                    }
                }
                _();
            }(r, l, d, x), null !== y && t.bindBuffer(34963, n.get(y).buffer));
        },
        reset: x,
        resetDefaultState: y,
        dispose: function() {
            x();
            for (const t in o) {
                const e = o[t];
                for (const t in e) {
                    const n = e[t];
                    for (const t in n) d(n[t].object), delete n[t];
                    delete e[t];
                }
                delete o[t];
            }
        },
        releaseStatesOfGeometry: function(t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const t in e) {
                const n = e[t];
                for (const t in n) d(n[t].object), delete n[t];
                delete e[t];
            }
            delete o[t.id];
        },
        releaseStatesOfProgram: function(t) {
            for (const e in o) {
                const n = o[e];
                if (void 0 === n[t.id]) continue;
                const i = n[t.id];
                for (const t in i) d(i[t].object), delete i[t];
                delete n[t.id];
            }
        },
        initAttributes: f,
        enableAttribute: m,
        disableUnusedAttributes: _
    };
}

function wn(t, e, n, i) {
    const r = i.isWebGL2;
    let a;
    this.setMode = function(t) {
        a = t;
    }, this.render = function(e, i) {
        t.drawArrays(a, e, i), n.update(i, a, 1);
    }, this.renderInstances = function(i, s, o) {
        if (0 === o) return;
        let l, c;
        if (r) l = t, c = "drawArraysInstanced"; else if (l = e.get("ANGLE_instanced_arrays"), 
        c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[c](a, i, s, o), n.update(s, a, o);
    };
}

function Tn(t, e, n) {
    let i;
    function r(e) {
        if ("highp" === e) {
            if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            e = "mediump";
        }
        return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
    }
    const a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
    let s = void 0 !== n.precision ? n.precision : "highp";
    const o = r(s);
    o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), 
    s = o);
    const l = a || e.has("WEBGL_draw_buffers"), c = !0 === n.logarithmicDepthBuffer, h = t.getParameter(34930), u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), f = t.getParameter(34921), m = t.getParameter(36347), g = t.getParameter(36348), _ = t.getParameter(36349), v = u > 0, x = a || e.has("OES_texture_float");
    return {
        isWebGL2: a,
        drawBuffers: l,
        getMaxAnisotropy: function() {
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                const n = e.get("EXT_texture_filter_anisotropic");
                i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else i = 0;
            return i;
        },
        getMaxPrecision: r,
        precision: s,
        logarithmicDepthBuffer: c,
        maxTextures: h,
        maxVertexTextures: u,
        maxTextureSize: d,
        maxCubemapSize: p,
        maxAttributes: f,
        maxVertexUniforms: m,
        maxVaryings: g,
        maxFragmentUniforms: _,
        vertexTextures: v,
        floatFragmentTextures: x,
        floatVertexTextures: v && x,
        maxSamples: a ? t.getParameter(36183) : 0
    };
}

function En(t) {
    const e = this;
    let n = null, i = 0, r = !1, a = !1;
    const s = new un, o = new I, l = {
        value: null,
        needsUpdate: !1
    };
    function c() {
        l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
    }
    function h(t, n, i, r) {
        const a = null !== t ? t.length : 0;
        let c = null;
        if (0 !== a) {
            if (c = l.value, !0 !== r || null === c) {
                const e = i + 4 * a, r = n.matrixWorldInverse;
                o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                for (let e = 0, n = i; e !== a; ++e, n += 4) s.copy(t[e]).applyMatrix4(r, o), s.normal.toArray(c, n), 
                c[n + 3] = s.constant;
            }
            l.value = c, l.needsUpdate = !0;
        }
        return e.numPlanes = a, e.numIntersection = 0, c;
    }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, a) {
        const s = 0 !== t.length || e || 0 !== i || r;
        return r = e, n = h(t, a, 0), i = t.length, s;
    }, this.beginShadows = function() {
        a = !0, h(null);
    }, this.endShadows = function() {
        a = !1, c();
    }, this.setState = function(e, s, o) {
        const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, f = t.get(e);
        if (!r || null === u || 0 === u.length || a && !p) a ? h(null) : c(); else {
            const t = a ? 0 : i, e = 4 * t;
            let r = f.clippingState || null;
            l.value = r, r = h(u, s, e, o);
            for (let t = 0; t !== e; ++t) r[t] = n[t];
            f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t;
        }
    };
}

function An(t) {
    let e = new WeakMap;
    function n(t, e) {
        return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t;
    }
    function i(t) {
        const n = t.target;
        n.removeEventListener("dispose", i);
        const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
        get: function(r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                const a = r.mapping;
                if (303 === a || 304 === a) {
                    if (e.has(r)) {
                        return n(e.get(r).texture, r.mapping);
                    }
                    {
                        const a = r.image;
                        if (a && a.height > 0) {
                            const s = new on(a.height / 2);
                            return s.fromEquirectangularTexture(t, r), e.set(r, s), r.addEventListener("dispose", i), 
                            n(s.texture, r.mapping);
                        }
                        return null;
                    }
                }
            }
            return r;
        },
        dispose: function() {
            e = new WeakMap;
        }
    };
}

class Cn extends nn {
    constructor(t = -1, e = 1, n = 1, i = -1, r = .1, a = 2e3) {
        super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, 
        this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, 
        this.near = r, this.far = a, this.updateProjectionMatrix();
    }
    copy(t, e) {
        return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, 
        this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, 
        this.view = null === t.view ? null : Object.assign({}, t.view), this;
    }
    setViewOffset(t, e, n, i, r, a) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, 
        this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
        let r = n - t, a = n + t, s = i + e, o = i - e;
        if (null !== this.view && this.view.enabled) {
            const t = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += t * this.view.offsetX, a = r + t * this.view.width, s -= e * this.view.offsetY, 
            o = s - e * this.view.height;
        }
        this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, 
        e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, 
        e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), 
        e;
    }
}

const Ln = [ .125, .215, .35, .446, .526, .582 ], Rn = new Cn, Pn = new X;

let Dn = null;

const In = (1 + Math.sqrt(5)) / 2, Nn = 1 / In, On = [ new at(1, 1, 1), new at(-1, 1, 1), new at(1, 1, -1), new at(-1, 1, -1), new at(0, In, Nn), new at(0, In, -Nn), new at(Nn, 0, In), new at(-Nn, 0, In), new at(In, Nn, 0), new at(-In, Nn, 0) ];

class zn {
    constructor(t) {
        this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, 
        this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, 
        this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(t, e = 0, n = .1, i = 100) {
        Dn = this._renderer.getRenderTarget(), this._setSize(256);
        const r = this._allocateTargets();
        return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), 
        this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(t, e = null) {
        return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
        return this._fromTexture(t, e);
    }
    compileCubemapShader() {
        null === this._cubemapMaterial && (this._cubemapMaterial = kn(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
        null === this._equirectMaterial && (this._equirectMaterial = Bn(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
        this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), 
        null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
        null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
    }
    _cleanup(t) {
        this._renderer.setRenderTarget(Dn), t.scissorTest = !1, Fn(t, 0, 0, t.width, t.height);
    }
    _fromTexture(t, e) {
        301 === t.mapping || 302 === t.mapping ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), 
        Dn = this._renderer.getRenderTarget();
        const n = e || this._allocateTargets();
        return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
            magFilter: 1006,
            minFilter: 1006,
            generateMipmaps: !1,
            type: 1016,
            format: 1023,
            encoding: 3e3,
            depthBuffer: !1
        }, i = Un(t, e, n);
        if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t) {
            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Un(t, e, n);
            const {_lodMax: i} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = function(t) {
                const e = [], n = [], i = [];
                let r = t;
                const a = t - 4 + 1 + Ln.length;
                for (let s = 0; s < a; s++) {
                    const a = Math.pow(2, r);
                    n.push(a);
                    let o = 1 / a;
                    s > t - 4 ? o = Ln[s - t + 4 - 1] : 0 === s && (o = 0), i.push(o);
                    const l = 1 / (a - 2), c = -l, h = 1 + l, u = [ c, c, h, c, h, h, c, c, h, h, c, h ], d = 6, p = 6, f = 3, m = 2, g = 1, _ = new Float32Array(f * p * d), v = new Float32Array(m * p * d), x = new Float32Array(g * p * d);
                    for (let t = 0; t < d; t++) {
                        const e = t % 3 * 2 / 3 - 1, n = t > 2 ? 0 : -1, i = [ e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0 ];
                        _.set(i, f * p * t), v.set(u, m * p * t);
                        const r = [ t, t, t, t, t, t ];
                        x.set(r, g * p * t);
                    }
                    const y = new Ne;
                    y.setAttribute("position", new Se(_, f)), y.setAttribute("uv", new Se(v, m)), y.setAttribute("faceIndex", new Se(x, g)), 
                    e.push(y), r > 4 && r--;
                }
                return {
                    lodPlanes: e,
                    sizeLods: n,
                    sigmas: i
                };
            }(i)), this._blurMaterial = function(t, e, n) {
                const i = new Float32Array(20), r = new at(0, 1, 0);
                return new en({
                    name: "SphericalGaussianBlur",
                    defines: {
                        n: 20,
                        CUBEUV_TEXEL_WIDTH: 1 / e,
                        CUBEUV_TEXEL_HEIGHT: 1 / n,
                        CUBEUV_MAX_MIP: `${t}.0`
                    },
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        samples: {
                            value: 1
                        },
                        weights: {
                            value: i
                        },
                        latitudinal: {
                            value: !1
                        },
                        dTheta: {
                            value: 0
                        },
                        mipInt: {
                            value: 0
                        },
                        poleAxis: {
                            value: r
                        }
                    },
                    vertexShader: Vn(),
                    fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                    blending: 0,
                    depthTest: !1,
                    depthWrite: !1
                });
            }(i, t, e);
        }
        return i;
    }
    _compileMaterial(t) {
        const e = new Ye(this._lodPlanes[0], t);
        this._renderer.compile(e, Rn);
    }
    _sceneToCubeUV(t, e, n, i) {
        const r = new rn(90, 1, e, n), a = [ 1, -1, 1, 1, 1, 1 ], s = [ 1, 1, 1, -1, -1, -1 ], o = this._renderer, l = o.autoClear, c = o.toneMapping;
        o.getClearColor(Pn), o.toneMapping = 0, o.autoClear = !1;
        const h = new ye({
            name: "PMREM.Background",
            side: 1,
            depthWrite: !1,
            depthTest: !1
        }), u = new Ye(new Je, h);
        let d = !1;
        const p = t.background;
        p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(Pn), 
        d = !0);
        for (let e = 0; e < 6; e++) {
            const n = e % 3;
            0 === n ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, a[e]), 
            r.lookAt(0, s[e], 0)) : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
            const l = this._cubeSize;
            Fn(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r);
        }
        u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, 
        t.background = p;
    }
    _textureToCubeUV(t, e) {
        const n = this._renderer, i = 301 === t.mapping || 302 === t.mapping;
        i ? (null === this._cubemapMaterial && (this._cubemapMaterial = kn()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Bn());
        const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new Ye(this._lodPlanes[0], r);
        r.uniforms.envMap.value = t;
        const s = this._cubeSize;
        Fn(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, Rn);
    }
    _applyPMREM(t) {
        const e = this._renderer, n = e.autoClear;
        e.autoClear = !1;
        for (let e = 1; e < this._lodPlanes.length; e++) {
            const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]), i = On[(e - 1) % On.length];
            this._blur(t, e - 1, e, n, i);
        }
        e.autoClear = n;
    }
    _blur(t, e, n, i, r) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r);
    }
    _halfBlur(t, e, n, i, r, a, s) {
        const o = this._renderer, l = this._blurMaterial;
        "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
        const c = new Ye(this._lodPlanes[i], l), h = l.uniforms, u = this._sizeLods[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
        f > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
        const m = [];
        let g = 0;
        for (let t = 0; t < 20; ++t) {
            const e = t / p, n = Math.exp(-e * e / 2);
            m.push(n), 0 === t ? g += n : t < f && (g += 2 * n);
        }
        for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
        h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === a, 
        s && (h.poleAxis.value = s);
        const {_lodMax: _} = this;
        h.dTheta.value = d, h.mipInt.value = _ - n;
        const v = this._sizeLods[i];
        Fn(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), 
        o.setRenderTarget(e), o.render(c, Rn);
    }
}

function Un(t, e, n) {
    const i = new et(t, e, n);
    return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, 
    i;
}

function Fn(t, e, n, i, r) {
    t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
}

function Bn() {
    return new en({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Vn(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    });
}

function kn() {
    return new en({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Vn(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    });
}

function Vn() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}

function Hn(t) {
    let e = new WeakMap, n = null;
    function i(t) {
        const n = t.target;
        n.removeEventListener("dispose", i);
        const r = e.get(n);
        void 0 !== r && (e.delete(n), r.dispose());
    }
    return {
        get: function(r) {
            if (r && r.isTexture) {
                const a = r.mapping, s = 303 === a || 304 === a, o = 301 === a || 302 === a;
                if (s || o) {
                    if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                        r.needsPMREMUpdate = !1;
                        let i = e.get(r);
                        return null === n && (n = new zn(t)), i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), 
                        e.set(r, i), i.texture;
                    }
                    if (e.has(r)) return e.get(r).texture;
                    {
                        const a = r.image;
                        if (s && a && a.height > 0 || o && a && function(t) {
                            let e = 0;
                            const n = 6;
                            for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                            return e === n;
                        }(a)) {
                            null === n && (n = new zn(t));
                            const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
                            return e.set(r, a), r.addEventListener("dispose", i), a.texture;
                        }
                        return null;
                    }
                }
            }
            return r;
        },
        dispose: function() {
            e = new WeakMap, null !== n && (n.dispose(), n = null);
        }
    };
}

function Gn(t) {
    const e = {};
    function n(n) {
        if (void 0 !== e[n]) return e[n];
        let i;
        switch (n) {
          case "WEBGL_depth_texture":
            i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
            break;

          case "EXT_texture_filter_anisotropic":
            i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;

          case "WEBGL_compressed_texture_s3tc":
            i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;

          case "WEBGL_compressed_texture_pvrtc":
            i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;

          default:
            i = t.getExtension(n);
        }
        return e[n] = i, i;
    }
    return {
        has: function(t) {
            return null !== n(t);
        },
        init: function(t) {
            t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), 
            n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), 
            n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), 
            n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
        },
        get: function(t) {
            const e = n(t);
            return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), 
            e;
        }
    };
}

function Wn(t, e, n, i) {
    const r = {}, a = new WeakMap;
    function s(t) {
        const o = t.target;
        null !== o.index && e.remove(o.index);
        for (const t in o.attributes) e.remove(o.attributes[t]);
        o.removeEventListener("dispose", s), delete r[o.id];
        const l = a.get(o);
        l && (e.remove(l), a.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, 
        n.memory.geometries--;
    }
    function o(t) {
        const n = [], i = t.index, r = t.attributes.position;
        let s = 0;
        if (null !== i) {
            const t = i.array;
            s = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
                const i = t[e + 0], r = t[e + 1], a = t[e + 2];
                n.push(i, r, r, a, a, i);
            }
        } else {
            const t = r.array;
            s = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                const t = e + 0, i = e + 1, r = e + 2;
                n.push(t, i, i, r, r, t);
            }
        }
        const o = new (O(n) ? Te : we)(n, 1);
        o.version = s;
        const l = a.get(t);
        l && e.remove(l), a.set(t, o);
    }
    return {
        get: function(t, e) {
            return !0 === r[e.id] || (e.addEventListener("dispose", s), r[e.id] = !0, n.memory.geometries++), 
            e;
        },
        update: function(t) {
            const n = t.attributes;
            for (const t in n) e.update(n[t], 34962);
            const i = t.morphAttributes;
            for (const t in i) {
                const n = i[t];
                for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962);
            }
        },
        getWireframeAttribute: function(t) {
            const e = a.get(t);
            if (e) {
                const n = t.index;
                null !== n && e.version < n.version && o(t);
            } else o(t);
            return a.get(t);
        }
    };
}

function jn(t, e, n, i) {
    const r = i.isWebGL2;
    let a, s, o;
    this.setMode = function(t) {
        a = t;
    }, this.setIndex = function(t) {
        s = t.type, o = t.bytesPerElement;
    }, this.render = function(e, i) {
        t.drawElements(a, i, s, e * o), n.update(i, a, 1);
    }, this.renderInstances = function(i, l, c) {
        if (0 === c) return;
        let h, u;
        if (r) h = t, u = "drawElementsInstanced"; else if (h = e.get("ANGLE_instanced_arrays"), 
        u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        h[u](a, l, s, i * o, c), n.update(l, a, c);
    };
}

function qn(t) {
    const e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: e,
        programs: null,
        autoReset: !0,
        reset: function() {
            e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
        },
        update: function(t, n, i) {
            switch (e.calls++, n) {
              case 4:
                e.triangles += i * (t / 3);
                break;

              case 1:
                e.lines += i * (t / 2);
                break;

              case 3:
                e.lines += i * (t - 1);
                break;

              case 2:
                e.lines += i * t;
                break;

              case 0:
                e.points += i * t;
                break;

              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", n);
            }
        }
    };
}

function Xn(t, e) {
    return t[0] - e[0];
}

function Yn(t, e) {
    return Math.abs(e[1]) - Math.abs(t[1]);
}

function Zn(t, e, n) {
    const i = {}, r = new Float32Array(8), a = new WeakMap, s = new tt, o = [];
    for (let t = 0; t < 8; t++) o[t] = [ t, 0 ];
    return {
        update: function(l, c, h, u) {
            const d = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
                const i = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, r = void 0 !== i ? i.length : 0;
                let o = a.get(c);
                if (void 0 === o || o.count !== r) {
                    void 0 !== o && o.texture.dispose();
                    const t = void 0 !== c.morphAttributes.position, n = void 0 !== c.morphAttributes.normal, i = void 0 !== c.morphAttributes.color, l = c.morphAttributes.position || [], h = c.morphAttributes.normal || [], u = c.morphAttributes.color || [];
                    let d = 0;
                    !0 === t && (d = 1), !0 === n && (d = 2), !0 === i && (d = 3);
                    let p = c.attributes.position.count * d, f = 1;
                    p > e.maxTextureSize && (f = Math.ceil(p / e.maxTextureSize), p = e.maxTextureSize);
                    const m = new Float32Array(p * f * 4 * r), g = new nt(m, p, f, r);
                    g.type = 1015, g.needsUpdate = !0;
                    const _ = 4 * d;
                    for (let e = 0; e < r; e++) {
                        const r = l[e], a = h[e], o = u[e], c = p * f * 4 * e;
                        for (let e = 0; e < r.count; e++) {
                            const l = e * _;
                            !0 === t && (s.fromBufferAttribute(r, e), m[c + l + 0] = s.x, m[c + l + 1] = s.y, 
                            m[c + l + 2] = s.z, m[c + l + 3] = 0), !0 === n && (s.fromBufferAttribute(a, e), 
                            m[c + l + 4] = s.x, m[c + l + 5] = s.y, m[c + l + 6] = s.z, m[c + l + 7] = 0), !0 === i && (s.fromBufferAttribute(o, e), 
                            m[c + l + 8] = s.x, m[c + l + 9] = s.y, m[c + l + 10] = s.z, m[c + l + 11] = 4 === o.itemSize ? s.w : 1);
                        }
                    }
                    o = {
                        count: r,
                        texture: g,
                        size: new D(p, f)
                    }, a.set(c, o), c.addEventListener("dispose", (function t() {
                        g.dispose(), a.delete(c), c.removeEventListener("dispose", t);
                    }));
                }
                let l = 0;
                for (let t = 0; t < d.length; t++) l += d[t];
                const h = c.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", d), 
                u.getUniforms().setValue(t, "morphTargetsTexture", o.texture, n), u.getUniforms().setValue(t, "morphTargetsTextureSize", o.size);
            } else {
                const e = void 0 === d ? 0 : d.length;
                let n = i[c.id];
                if (void 0 === n || n.length !== e) {
                    n = [];
                    for (let t = 0; t < e; t++) n[t] = [ t, 0 ];
                    i[c.id] = n;
                }
                for (let t = 0; t < e; t++) {
                    const e = n[t];
                    e[0] = t, e[1] = d[t];
                }
                n.sort(Yn);
                for (let t = 0; t < 8; t++) t < e && n[t][1] ? (o[t][0] = n[t][0], o[t][1] = n[t][1]) : (o[t][0] = Number.MAX_SAFE_INTEGER, 
                o[t][1] = 0);
                o.sort(Xn);
                const a = c.morphAttributes.position, s = c.morphAttributes.normal;
                let l = 0;
                for (let t = 0; t < 8; t++) {
                    const e = o[t], n = e[0], i = e[1];
                    n !== Number.MAX_SAFE_INTEGER && i ? (a && c.getAttribute("morphTarget" + t) !== a[n] && c.setAttribute("morphTarget" + t, a[n]), 
                    s && c.getAttribute("morphNormal" + t) !== s[n] && c.setAttribute("morphNormal" + t, s[n]), 
                    r[t] = i, l += i) : (a && !0 === c.hasAttribute("morphTarget" + t) && c.deleteAttribute("morphTarget" + t), 
                    s && !0 === c.hasAttribute("morphNormal" + t) && c.deleteAttribute("morphNormal" + t), 
                    r[t] = 0);
                }
                const h = c.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(t, "morphTargetBaseInfluence", h), u.getUniforms().setValue(t, "morphTargetInfluences", r);
            }
        }
    };
}

function Jn(t, e, n, i) {
    let r = new WeakMap;
    function a(t) {
        const e = t.target;
        e.removeEventListener("dispose", a), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
    }
    return {
        update: function(t) {
            const s = i.render.frame, o = t.geometry, l = e.get(t, o);
            return r.get(l) !== s && (e.update(l), r.set(l, s)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", a) && t.addEventListener("dispose", a), 
            n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), 
            l;
        },
        dispose: function() {
            r = new WeakMap;
        }
    };
}

const Kn = new $, Qn = new nt, $n = new it, ti = new sn, ei = [], ni = [], ii = new Float32Array(16), ri = new Float32Array(9), ai = new Float32Array(4);

function si(t, e, n) {
    const i = t[0];
    if (i <= 0 || i > 0) return t;
    const r = e * n;
    let a = ei[r];
    if (void 0 === a && (a = new Float32Array(r), ei[r] = a), 0 !== e) {
        i.toArray(a, 0);
        for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(a, r);
    }
    return a;
}

function oi(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
    return !0;
}

function li(t, e) {
    for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
}

function ci(t, e) {
    let n = ni[e];
    void 0 === n && (n = new Int32Array(e), ni[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
    return n;
}

function hi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e);
}

function ui(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), 
    n[0] = e.x, n[1] = e.y); else {
        if (oi(n, e)) return;
        t.uniform2fv(this.addr, e), li(n, e);
    }
}

function di(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z); else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), 
    n[0] = e.r, n[1] = e.g, n[2] = e.b); else {
        if (oi(n, e)) return;
        t.uniform3fv(this.addr, e), li(n, e);
    }
}

function pi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else {
        if (oi(n, e)) return;
        t.uniform4fv(this.addr, e), li(n, e);
    }
}

function fi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
        if (oi(n, e)) return;
        t.uniformMatrix2fv(this.addr, !1, e), li(n, e);
    } else {
        if (oi(n, i)) return;
        ai.set(i), t.uniformMatrix2fv(this.addr, !1, ai), li(n, i);
    }
}

function mi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
        if (oi(n, e)) return;
        t.uniformMatrix3fv(this.addr, !1, e), li(n, e);
    } else {
        if (oi(n, i)) return;
        ri.set(i), t.uniformMatrix3fv(this.addr, !1, ri), li(n, i);
    }
}

function gi(t, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
        if (oi(n, e)) return;
        t.uniformMatrix4fv(this.addr, !1, e), li(n, e);
    } else {
        if (oi(n, i)) return;
        ii.set(i), t.uniformMatrix4fv(this.addr, !1, ii), li(n, i);
    }
}

function _i(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e);
}

function vi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2i(this.addr, e.x, e.y), 
    n[0] = e.x, n[1] = e.y); else {
        if (oi(n, e)) return;
        t.uniform2iv(this.addr, e), li(n, e);
    }
}

function xi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3i(this.addr, e.x, e.y, e.z), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z); else {
        if (oi(n, e)) return;
        t.uniform3iv(this.addr, e), li(n, e);
    }
}

function yi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4i(this.addr, e.x, e.y, e.z, e.w), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else {
        if (oi(n, e)) return;
        t.uniform4iv(this.addr, e), li(n, e);
    }
}

function Mi(t, e) {
    const n = this.cache;
    n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e);
}

function bi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2ui(this.addr, e.x, e.y), 
    n[0] = e.x, n[1] = e.y); else {
        if (oi(n, e)) return;
        t.uniform2uiv(this.addr, e), li(n, e);
    }
}

function Si(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3ui(this.addr, e.x, e.y, e.z), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z); else {
        if (oi(n, e)) return;
        t.uniform3uiv(this.addr, e), li(n, e);
    }
}

function wi(t, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w), 
    n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else {
        if (oi(n, e)) return;
        t.uniform4uiv(this.addr, e), li(n, e);
    }
}

function Ti(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || Kn, r);
}

function Ei(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || $n, r);
}

function Ai(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || ti, r);
}

function Ci(t, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Qn, r);
}

function Li(t, e) {
    t.uniform1fv(this.addr, e);
}

function Ri(t, e) {
    const n = si(e, this.size, 2);
    t.uniform2fv(this.addr, n);
}

function Pi(t, e) {
    const n = si(e, this.size, 3);
    t.uniform3fv(this.addr, n);
}

function Di(t, e) {
    const n = si(e, this.size, 4);
    t.uniform4fv(this.addr, n);
}

function Ii(t, e) {
    const n = si(e, this.size, 4);
    t.uniformMatrix2fv(this.addr, !1, n);
}

function Ni(t, e) {
    const n = si(e, this.size, 9);
    t.uniformMatrix3fv(this.addr, !1, n);
}

function Oi(t, e) {
    const n = si(e, this.size, 16);
    t.uniformMatrix4fv(this.addr, !1, n);
}

function zi(t, e) {
    t.uniform1iv(this.addr, e);
}

function Ui(t, e) {
    t.uniform2iv(this.addr, e);
}

function Fi(t, e) {
    t.uniform3iv(this.addr, e);
}

function Bi(t, e) {
    t.uniform4iv(this.addr, e);
}

function ki(t, e) {
    t.uniform1uiv(this.addr, e);
}

function Vi(t, e) {
    t.uniform2uiv(this.addr, e);
}

function Hi(t, e) {
    t.uniform3uiv(this.addr, e);
}

function Gi(t, e) {
    t.uniform4uiv(this.addr, e);
}

function Wi(t, e, n) {
    const i = this.cache, r = e.length, a = ci(n, r);
    oi(i, a) || (t.uniform1iv(this.addr, a), li(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || Kn, a[t]);
}

function ji(t, e, n) {
    const i = this.cache, r = e.length, a = ci(n, r);
    oi(i, a) || (t.uniform1iv(this.addr, a), li(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || $n, a[t]);
}

function qi(t, e, n) {
    const i = this.cache, r = e.length, a = ci(n, r);
    oi(i, a) || (t.uniform1iv(this.addr, a), li(i, a));
    for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || ti, a[t]);
}

function Xi(t, e, n) {
    const i = this.cache, r = e.length, a = ci(n, r);
    oi(i, a) || (t.uniform1iv(this.addr, a), li(i, a));
    for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || Qn, a[t]);
}

class Yi {
    constructor(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
            switch (t) {
              case 5126:
                return hi;

              case 35664:
                return ui;

              case 35665:
                return di;

              case 35666:
                return pi;

              case 35674:
                return fi;

              case 35675:
                return mi;

              case 35676:
                return gi;

              case 5124:
              case 35670:
                return _i;

              case 35667:
              case 35671:
                return vi;

              case 35668:
              case 35672:
                return xi;

              case 35669:
              case 35673:
                return yi;

              case 5125:
                return Mi;

              case 36294:
                return bi;

              case 36295:
                return Si;

              case 36296:
                return wi;

              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return Ti;

              case 35679:
              case 36299:
              case 36307:
                return Ei;

              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return Ai;

              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return Ci;
            }
        }(e.type);
    }
}

class Zi {
    constructor(t, e, n) {
        this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
            switch (t) {
              case 5126:
                return Li;

              case 35664:
                return Ri;

              case 35665:
                return Pi;

              case 35666:
                return Di;

              case 35674:
                return Ii;

              case 35675:
                return Ni;

              case 35676:
                return Oi;

              case 5124:
              case 35670:
                return zi;

              case 35667:
              case 35671:
                return Ui;

              case 35668:
              case 35672:
                return Fi;

              case 35669:
              case 35673:
                return Bi;

              case 5125:
                return ki;

              case 36294:
                return Vi;

              case 36295:
                return Hi;

              case 36296:
                return Gi;

              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return Wi;

              case 35679:
              case 36299:
              case 36307:
                return ji;

              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return qi;

              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return Xi;
            }
        }(e.type);
    }
}

class Ji {
    constructor(t) {
        this.id = t, this.seq = [], this.map = {};
    }
    setValue(t, e, n) {
        const i = this.seq;
        for (let r = 0, a = i.length; r !== a; ++r) {
            const a = i[r];
            a.setValue(t, e[a.id], n);
        }
    }
}

const Ki = /(\w+)(\])?(\[|\.)?/g;

function Qi(t, e) {
    t.seq.push(e), t.map[e.id] = e;
}

function $i(t, e, n) {
    const i = t.name, r = i.length;
    for (Ki.lastIndex = 0; ;) {
        const a = Ki.exec(i), s = Ki.lastIndex;
        let o = a[1];
        const l = "]" === a[2], c = a[3];
        if (l && (o |= 0), void 0 === c || "[" === c && s + 2 === r) {
            Qi(n, void 0 === c ? new Yi(o, t, e) : new Zi(o, t, e));
            break;
        }
        {
            let t = n.map[o];
            void 0 === t && (t = new Ji(o), Qi(n, t)), n = t;
        }
    }
}

class tr {
    constructor(t, e) {
        this.seq = [], this.map = {};
        const n = t.getProgramParameter(e, 35718);
        for (let i = 0; i < n; ++i) {
            const n = t.getActiveUniform(e, i);
            $i(n, t.getUniformLocation(e, n.name), this);
        }
    }
    setValue(t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
    }
    setOptional(t, e, n) {
        const i = e[n];
        void 0 !== i && this.setValue(t, n, i);
    }
    static upload(t, e, n, i) {
        for (let r = 0, a = e.length; r !== a; ++r) {
            const a = e[r], s = n[a.id];
            !1 !== s.needsUpdate && a.setValue(t, s.value, i);
        }
    }
    static seqWithValue(t, e) {
        const n = [];
        for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r);
        }
        return n;
    }
}

function er(t, e, n) {
    const i = t.createShader(e);
    return t.shaderSource(i, n), t.compileShader(i), i;
}

let nr = 0;

function ir(t, e, n) {
    const i = t.getShaderParameter(e, 35713), r = t.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const a = /ERROR: 0:(\d+)/.exec(r);
    if (a) {
        const i = parseInt(a[1]);
        return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t, e) {
            const n = t.split("\n"), i = [], r = Math.max(e - 6, 0), a = Math.min(e + 6, n.length);
            for (let t = r; t < a; t++) {
                const r = t + 1;
                i.push(`${r === e ? ">" : " "} ${r}: ${n[t]}`);
            }
            return i.join("\n");
        }(t.getShaderSource(e), i);
    }
    return r;
}

function rr(t, e) {
    const n = function(t) {
        switch (t) {
          case 3e3:
            return [ "Linear", "( value )" ];

          case 3001:
            return [ "sRGB", "( value )" ];

          default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), [ "Linear", "( value )" ];
        }
    }(e);
    return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}

function ar(t, e) {
    let n;
    switch (e) {
      case 1:
        n = "Linear";
        break;

      case 2:
        n = "Reinhard";
        break;

      case 3:
        n = "OptimizedCineon";
        break;

      case 4:
        n = "ACESFilmic";
        break;

      case 5:
        n = "Custom";
        break;

      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }
    return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}

function sr(t) {
    return "" !== t;
}

function or(t, e) {
    const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}

function lr(t, e) {
    return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}

const cr = /^[ \t]*#include +<([\w\d./]+)>/gm;

function hr(t) {
    return t.replace(cr, ur);
}

function ur(t, e) {
    const n = vn[e];
    if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
    return hr(n);
}

const dr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function pr(t) {
    return t.replace(dr, fr);
}

function fr(t, e, n, i) {
    let r = "";
    for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
    return r;
}

function mr(t) {
    let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
    return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), 
    e;
}

function gr(t, e, n, i) {
    const r = t.getContext(), a = n.defines;
    let s = n.vertexShader, o = n.fragmentShader;
    const l = function(t) {
        let e = "SHADOWMAP_TYPE_BASIC";
        return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), 
        e;
    }(n), c = function(t) {
        let e = "ENVMAP_TYPE_CUBE";
        if (t.envMap) switch (t.envMapMode) {
          case 301:
          case 302:
            e = "ENVMAP_TYPE_CUBE";
            break;

          case 306:
            e = "ENVMAP_TYPE_CUBE_UV";
        }
        return e;
    }(n), h = function(t) {
        let e = "ENVMAP_MODE_REFLECTION";
        t.envMap && 302 === t.envMapMode && (e = "ENVMAP_MODE_REFRACTION");
        return e;
    }(n), u = function(t) {
        let e = "ENVMAP_BLENDING_NONE";
        if (t.envMap) switch (t.combine) {
          case 0:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;

          case 1:
            e = "ENVMAP_BLENDING_MIX";
            break;

          case 2:
            e = "ENVMAP_BLENDING_ADD";
        }
        return e;
    }(n), d = function(t) {
        const e = t.envMapCubeUVHeight;
        if (null === e) return null;
        const n = Math.log2(e) - 2, i = 1 / e;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
            texelHeight: i,
            maxMip: n
        };
    }(n), p = n.isWebGL2 ? "" : function(t) {
        return [ t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : "" ].filter(sr).join("\n");
    }(n), f = function(t) {
        const e = [];
        for (const n in t) {
            const i = t[n];
            !1 !== i && e.push("#define " + n + " " + i);
        }
        return e.join("\n");
    }(a), m = r.createProgram();
    let g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = [ f ].filter(sr).join("\n"), g.length > 0 && (g += "\n"), 
    _ = [ p, f ].filter(sr).join("\n"), _.length > 0 && (_ += "\n")) : (g = [ mr(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n" ].filter(sr).join("\n"), 
    _ = [ p, mr(n), "#define SHADER_NAME " + n.shaderName, f, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? vn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? ar("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", vn.encodings_pars_fragment, rr("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n" ].filter(sr).join("\n")), 
    s = hr(s), s = or(s, n), s = lr(s, n), o = hr(o), o = or(o, n), o = lr(o, n), s = pr(s), 
    o = pr(o), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (v = "#version 300 es\n", 
    g = [ "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture" ].join("\n") + "\n" + g, 
    _ = [ "#define varying in", "300 es" === n.glslVersion ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad" ].join("\n") + "\n" + _);
    const x = v + _ + o, y = er(r, 35633, v + g + s), M = er(r, 35632, x);
    if (r.attachShader(m, y), r.attachShader(m, M), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), 
    r.linkProgram(m), t.debug.checkShaderErrors) {
        const t = r.getProgramInfoLog(m).trim(), e = r.getShaderInfoLog(y).trim(), n = r.getShaderInfoLog(M).trim();
        let i = !0, a = !0;
        if (!1 === r.getProgramParameter(m, 35714)) {
            i = !1;
            const e = ir(r, y, "vertex"), n = ir(r, M, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(m, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n);
        } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (a = !1);
        a && (this.diagnostics = {
            runnable: i,
            programLog: t,
            vertexShader: {
                log: e,
                prefix: g
            },
            fragmentShader: {
                log: n,
                prefix: _
            }
        });
    }
    let b, S;
    return r.deleteShader(y), r.deleteShader(M), this.getUniforms = function() {
        return void 0 === b && (b = new tr(r, m)), b;
    }, this.getAttributes = function() {
        return void 0 === S && (S = function(t, e) {
            const n = {}, i = t.getProgramParameter(e, 35721);
            for (let r = 0; r < i; r++) {
                const i = t.getActiveAttrib(e, r), a = i.name;
                let s = 1;
                35674 === i.type && (s = 2), 35675 === i.type && (s = 3), 35676 === i.type && (s = 4), 
                n[a] = {
                    type: i.type,
                    location: t.getAttribLocation(e, a),
                    locationSize: s
                };
            }
            return n;
        }(r, m)), S;
    }, this.destroy = function() {
        i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0;
    }, this.name = n.shaderName, this.id = nr++, this.cacheKey = e, this.usedTimes = 1, 
    this.program = m, this.vertexShader = y, this.fragmentShader = M, this;
}

let _r = 0;

class vr {
    constructor() {
        this.shaderCache = new Map, this.materialCache = new Map;
    }
    update(t) {
        const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
        return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), 
        r.usedTimes++), this;
    }
    remove(t) {
        const e = this.materialCache.get(t);
        for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
        return this.materialCache.delete(t), this;
    }
    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id;
    }
    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id;
    }
    dispose() {
        this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let n = e.get(t);
        return void 0 === n && (n = new Set, e.set(t, n)), n;
    }
    _getShaderStage(t) {
        const e = this.shaderCache;
        let n = e.get(t);
        return void 0 === n && (n = new xr(t), e.set(t, n)), n;
    }
}

class xr {
    constructor(t) {
        this.id = _r++, this.code = t, this.usedTimes = 0;
    }
}

function yr(t, e, n, i, r, a, s) {
    const o = new qt, l = new vr, c = [], h = r.isWebGL2, u = r.logarithmicDepthBuffer, d = r.vertexTextures;
    let p = r.precision;
    const f = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    return {
        getParameters: function(a, o, c, m, g) {
            const _ = m.fog, v = g.geometry, x = a.isMeshStandardMaterial ? m.environment : null, y = (a.isMeshStandardMaterial ? n : e).get(a.envMap || x), M = y && 306 === y.mapping ? y.image.height : null, b = f[a.type];
            null !== a.precision && (p = r.getMaxPrecision(a.precision), p !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead."));
            const S = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color, w = void 0 !== S ? S.length : 0;
            let T, E, A, C, L = 0;
            if (void 0 !== v.morphAttributes.position && (L = 1), void 0 !== v.morphAttributes.normal && (L = 2), 
            void 0 !== v.morphAttributes.color && (L = 3), b) {
                const t = yn[b];
                T = t.vertexShader, E = t.fragmentShader;
            } else T = a.vertexShader, E = a.fragmentShader, l.update(a), A = l.getVertexShaderID(a), 
            C = l.getFragmentShaderID(a);
            const R = t.getRenderTarget(), P = a.alphaTest > 0, D = a.clearcoat > 0, I = a.iridescence > 0;
            return {
                isWebGL2: h,
                shaderID: b,
                shaderName: a.type,
                vertexShader: T,
                fragmentShader: E,
                defines: a.defines,
                customVertexShaderID: A,
                customFragmentShaderID: C,
                isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                glslVersion: a.glslVersion,
                precision: p,
                instancing: !0 === g.isInstancedMesh,
                instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
                supportsVertexTextures: d,
                outputEncoding: null === R ? t.outputEncoding : !0 === R.isXRRenderTarget ? R.texture.encoding : 3e3,
                map: !!a.map,
                matcap: !!a.matcap,
                envMap: !!y,
                envMapMode: y && y.mapping,
                envMapCubeUVHeight: M,
                lightMap: !!a.lightMap,
                aoMap: !!a.aoMap,
                emissiveMap: !!a.emissiveMap,
                bumpMap: !!a.bumpMap,
                normalMap: !!a.normalMap,
                objectSpaceNormalMap: 1 === a.normalMapType,
                tangentSpaceNormalMap: 0 === a.normalMapType,
                decodeVideoTexture: !!a.map && !0 === a.map.isVideoTexture && 3001 === a.map.encoding,
                clearcoat: D,
                clearcoatMap: D && !!a.clearcoatMap,
                clearcoatRoughnessMap: D && !!a.clearcoatRoughnessMap,
                clearcoatNormalMap: D && !!a.clearcoatNormalMap,
                iridescence: I,
                iridescenceMap: I && !!a.iridescenceMap,
                iridescenceThicknessMap: I && !!a.iridescenceThicknessMap,
                displacementMap: !!a.displacementMap,
                roughnessMap: !!a.roughnessMap,
                metalnessMap: !!a.metalnessMap,
                specularMap: !!a.specularMap,
                specularIntensityMap: !!a.specularIntensityMap,
                specularColorMap: !!a.specularColorMap,
                opaque: !1 === a.transparent && 1 === a.blending,
                alphaMap: !!a.alphaMap,
                alphaTest: P,
                gradientMap: !!a.gradientMap,
                sheen: a.sheen > 0,
                sheenColorMap: !!a.sheenColorMap,
                sheenRoughnessMap: !!a.sheenRoughnessMap,
                transmission: a.transmission > 0,
                transmissionMap: !!a.transmissionMap,
                thicknessMap: !!a.thicknessMap,
                combine: a.combine,
                vertexTangents: !!a.normalMap && !!v.attributes.tangent,
                vertexColors: a.vertexColors,
                vertexAlphas: !0 === a.vertexColors && !!v.attributes.color && 4 === v.attributes.color.itemSize,
                vertexUvs: !!(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatMap || a.clearcoatRoughnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.displacementMap || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheenColorMap || a.sheenRoughnessMap),
                uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.iridescenceMap || a.iridescenceThicknessMap || a.transmission > 0 || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularColorMap || a.sheen > 0 || a.sheenColorMap || a.sheenRoughnessMap || !a.displacementMap),
                fog: !!_,
                useFog: !0 === a.fog,
                fogExp2: _ && _.isFogExp2,
                flatShading: !!a.flatShading,
                sizeAttenuation: a.sizeAttenuation,
                logarithmicDepthBuffer: u,
                skinning: !0 === g.isSkinnedMesh,
                morphTargets: void 0 !== v.morphAttributes.position,
                morphNormals: void 0 !== v.morphAttributes.normal,
                morphColors: void 0 !== v.morphAttributes.color,
                morphTargetsCount: w,
                morphTextureStride: L,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numSpotLightMaps: o.spotLightMap.length,
                numRectAreaLights: o.rectArea.length,
                numHemiLights: o.hemi.length,
                numDirLightShadows: o.directionalShadowMap.length,
                numPointLightShadows: o.pointShadowMap.length,
                numSpotLightShadows: o.spotShadowMap.length,
                numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
                numClippingPlanes: s.numPlanes,
                numClipIntersection: s.numIntersection,
                dithering: a.dithering,
                shadowMapEnabled: t.shadowMap.enabled && c.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: a.toneMapped ? t.toneMapping : 0,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: a.premultipliedAlpha,
                doubleSided: 2 === a.side,
                flipSided: 1 === a.side,
                useDepthPacking: !!a.depthPacking,
                depthPacking: a.depthPacking || 0,
                index0AttributeName: a.index0AttributeName,
                extensionDerivatives: a.extensions && a.extensions.derivatives,
                extensionFragDepth: a.extensions && a.extensions.fragDepth,
                extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: h || i.has("EXT_shader_texture_lod"),
                customProgramCacheKey: a.customProgramCacheKey()
            };
        },
        getProgramCacheKey: function(e) {
            const n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), 
            void 0 !== e.defines) for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return !1 === e.isRawShaderMaterial && (!function(t, e) {
                t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), 
                t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), 
                t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), 
                t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), 
                t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), 
                t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), 
                t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), 
                t.push(e.depthPacking);
            }(n, e), function(t, e) {
                o.disableAll(), e.isWebGL2 && o.enable(0);
                e.supportsVertexTextures && o.enable(1);
                e.instancing && o.enable(2);
                e.instancingColor && o.enable(3);
                e.map && o.enable(4);
                e.matcap && o.enable(5);
                e.envMap && o.enable(6);
                e.lightMap && o.enable(7);
                e.aoMap && o.enable(8);
                e.emissiveMap && o.enable(9);
                e.bumpMap && o.enable(10);
                e.normalMap && o.enable(11);
                e.objectSpaceNormalMap && o.enable(12);
                e.tangentSpaceNormalMap && o.enable(13);
                e.clearcoat && o.enable(14);
                e.clearcoatMap && o.enable(15);
                e.clearcoatRoughnessMap && o.enable(16);
                e.clearcoatNormalMap && o.enable(17);
                e.iridescence && o.enable(18);
                e.iridescenceMap && o.enable(19);
                e.iridescenceThicknessMap && o.enable(20);
                e.displacementMap && o.enable(21);
                e.specularMap && o.enable(22);
                e.roughnessMap && o.enable(23);
                e.metalnessMap && o.enable(24);
                e.gradientMap && o.enable(25);
                e.alphaMap && o.enable(26);
                e.alphaTest && o.enable(27);
                e.vertexColors && o.enable(28);
                e.vertexAlphas && o.enable(29);
                e.vertexUvs && o.enable(30);
                e.vertexTangents && o.enable(31);
                e.uvsVertexOnly && o.enable(32);
                t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
                e.useFog && o.enable(1);
                e.flatShading && o.enable(2);
                e.logarithmicDepthBuffer && o.enable(3);
                e.skinning && o.enable(4);
                e.morphTargets && o.enable(5);
                e.morphNormals && o.enable(6);
                e.morphColors && o.enable(7);
                e.premultipliedAlpha && o.enable(8);
                e.shadowMapEnabled && o.enable(9);
                e.physicallyCorrectLights && o.enable(10);
                e.doubleSided && o.enable(11);
                e.flipSided && o.enable(12);
                e.useDepthPacking && o.enable(13);
                e.dithering && o.enable(14);
                e.specularIntensityMap && o.enable(15);
                e.specularColorMap && o.enable(16);
                e.transmission && o.enable(17);
                e.transmissionMap && o.enable(18);
                e.thicknessMap && o.enable(19);
                e.sheen && o.enable(20);
                e.sheenColorMap && o.enable(21);
                e.sheenRoughnessMap && o.enable(22);
                e.decodeVideoTexture && o.enable(23);
                e.opaque && o.enable(24);
                t.push(o.mask);
            }(n, e), n.push(t.outputEncoding)), n.push(e.customProgramCacheKey), n.join();
        },
        getUniforms: function(t) {
            const e = f[t.type];
            let n;
            if (e) {
                const t = yn[e];
                n = tn.clone(t.uniforms);
            } else n = t.uniforms;
            return n;
        },
        acquireProgram: function(e, n) {
            let i;
            for (let t = 0, e = c.length; t < e; t++) {
                const e = c[t];
                if (e.cacheKey === n) {
                    i = e, ++i.usedTimes;
                    break;
                }
            }
            return void 0 === i && (i = new gr(t, n, e, a), c.push(i)), i;
        },
        releaseProgram: function(t) {
            if (0 == --t.usedTimes) {
                const e = c.indexOf(t);
                c[e] = c[c.length - 1], c.pop(), t.destroy();
            }
        },
        releaseShaderCache: function(t) {
            l.remove(t);
        },
        programs: c,
        dispose: function() {
            l.dispose();
        }
    };
}

function Mr() {
    let t = new WeakMap;
    return {
        get: function(e) {
            let n = t.get(e);
            return void 0 === n && (n = {}, t.set(e, n)), n;
        },
        remove: function(e) {
            t.delete(e);
        },
        update: function(e, n, i) {
            t.get(e)[n] = i;
        },
        dispose: function() {
            t = new WeakMap;
        }
    };
}

function br(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
}

function Sr(t, e) {
    return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
}

function wr() {
    const t = [];
    let e = 0;
    const n = [], i = [], r = [];
    function a(n, i, r, a, s, o) {
        let l = t[e];
        return void 0 === l ? (l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o
        }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, 
        l.renderOrder = n.renderOrder, l.z = s, l.group = o), e++, l;
    }
    return {
        opaque: n,
        transmissive: i,
        transparent: r,
        init: function() {
            e = 0, n.length = 0, i.length = 0, r.length = 0;
        },
        push: function(t, e, s, o, l, c) {
            const h = a(t, e, s, o, l, c);
            s.transmission > 0 ? i.push(h) : !0 === s.transparent ? r.push(h) : n.push(h);
        },
        unshift: function(t, e, s, o, l, c) {
            const h = a(t, e, s, o, l, c);
            s.transmission > 0 ? i.unshift(h) : !0 === s.transparent ? r.unshift(h) : n.unshift(h);
        },
        finish: function() {
            for (let n = e, i = t.length; n < i; n++) {
                const e = t[n];
                if (null === e.id) break;
                e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
            }
        },
        sort: function(t, e) {
            n.length > 1 && n.sort(t || br), i.length > 1 && i.sort(e || Sr), r.length > 1 && r.sort(e || Sr);
        }
    };
}

function Tr() {
    let t = new WeakMap;
    return {
        get: function(e, n) {
            const i = t.get(e);
            let r;
            return void 0 === i ? (r = new wr, t.set(e, [ r ])) : n >= i.length ? (r = new wr, 
            i.push(r)) : r = i[n], r;
        },
        dispose: function() {
            t = new WeakMap;
        }
    };
}

function Er() {
    const t = {};
    return {
        get: function(e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
                n = {
                    direction: new at,
                    color: new X
                };
                break;

              case "SpotLight":
                n = {
                    position: new at,
                    direction: new at,
                    color: new X,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;

              case "PointLight":
                n = {
                    position: new at,
                    color: new X,
                    distance: 0,
                    decay: 0
                };
                break;

              case "HemisphereLight":
                n = {
                    direction: new at,
                    skyColor: new X,
                    groundColor: new X
                };
                break;

              case "RectAreaLight":
                n = {
                    color: new X,
                    position: new at,
                    halfWidth: new at,
                    halfHeight: new at
                };
            }
            return t[e.id] = n, n;
        }
    };
}

let Ar = 0;

function Cr(t, e) {
    return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0);
}

function Lr(t, e) {
    const n = new Er, i = function() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new D
                    };
                    break;

                  case "PointLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new D,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                }
                return t[e.id] = n, n;
            }
        };
    }(), r = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1
        },
        ambient: [ 0, 0, 0 ],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0
    };
    for (let t = 0; t < 9; t++) r.probe.push(new at);
    const a = new at, s = new Ot, o = new Ot;
    return {
        setup: function(a, s) {
            let o = 0, l = 0, c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let h = 0, u = 0, d = 0, p = 0, f = 0, m = 0, g = 0, _ = 0, v = 0, x = 0;
            a.sort(Cr);
            const y = !0 !== s ? Math.PI : 1;
            for (let t = 0, e = a.length; t < e; t++) {
                const e = a[t], s = e.color, M = e.intensity, b = e.distance, S = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                if (e.isAmbientLight) o += s.r * M * y, l += s.g * M * y, c += s.b * M * y; else if (e.isLightProbe) for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], M); else if (e.isDirectionalLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                        const t = e.shadow, n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, 
                        n.shadowMapSize = t.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = S, 
                        r.directionalShadowMatrix[h] = e.shadow.matrix, m++;
                    }
                    r.directional[h] = t, h++;
                } else if (e.isSpotLight) {
                    const t = n.get(e);
                    t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(s).multiplyScalar(M * y), 
                    t.distance = b, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), 
                    t.decay = e.decay, r.spot[d] = t;
                    const a = e.shadow;
                    if (e.map && (r.spotLightMap[v] = e.map, v++, a.updateMatrices(e), e.castShadow && x++), 
                    r.spotLightMatrix[d] = a.matrix, e.castShadow) {
                        const t = i.get(e);
                        t.shadowBias = a.bias, t.shadowNormalBias = a.normalBias, t.shadowRadius = a.radius, 
                        t.shadowMapSize = a.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = S, _++;
                    }
                    d++;
                } else if (e.isRectAreaLight) {
                    const t = n.get(e);
                    t.color.copy(s).multiplyScalar(M), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), 
                    r.rectArea[p] = t, p++;
                } else if (e.isPointLight) {
                    const t = n.get(e);
                    if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, 
                    t.decay = e.decay, e.castShadow) {
                        const t = e.shadow, n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, 
                        n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, 
                        r.pointShadow[u] = n, r.pointShadowMap[u] = S, r.pointShadowMatrix[u] = e.shadow.matrix, 
                        g++;
                    }
                    r.point[u] = t, u++;
                } else if (e.isHemisphereLight) {
                    const t = n.get(e);
                    t.skyColor.copy(e.color).multiplyScalar(M * y), t.groundColor.copy(e.groundColor).multiplyScalar(M * y), 
                    r.hemi[f] = t, f++;
                }
            }
            p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = xn.LTC_FLOAT_1, 
            r.rectAreaLTC2 = xn.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = xn.LTC_HALF_1, 
            r.rectAreaLTC2 = xn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), 
            r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
            const M = r.hash;
            M.directionalLength === h && M.pointLength === u && M.spotLength === d && M.rectAreaLength === p && M.hemiLength === f && M.numDirectionalShadows === m && M.numPointShadows === g && M.numSpotShadows === _ && M.numSpotMaps === v || (r.directional.length = h, 
            r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, 
            r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, 
            r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, 
            r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, 
            r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, M.directionalLength = h, 
            M.pointLength = u, M.spotLength = d, M.rectAreaLength = p, M.hemiLength = f, M.numDirectionalShadows = m, 
            M.numPointShadows = g, M.numSpotShadows = _, M.numSpotMaps = v, r.version = Ar++);
        },
        setupView: function(t, e) {
            let n = 0, i = 0, l = 0, c = 0, h = 0;
            const u = e.matrixWorldInverse;
            for (let e = 0, d = t.length; e < d; e++) {
                const d = t[e];
                if (d.isDirectionalLight) {
                    const t = r.directional[n];
                    t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), 
                    t.direction.sub(a), t.direction.transformDirection(u), n++;
                } else if (d.isSpotLight) {
                    const t = r.spot[l];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), 
                    a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(u), 
                    l++;
                } else if (d.isRectAreaLight) {
                    const t = r.rectArea[c];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), 
                    s.copy(d.matrixWorld), s.premultiply(u), o.extractRotation(s), t.halfWidth.set(.5 * d.width, 0, 0), 
                    t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), 
                    c++;
                } else if (d.isPointLight) {
                    const t = r.point[i];
                    t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++;
                } else if (d.isHemisphereLight) {
                    const t = r.hemi[h];
                    t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), 
                    h++;
                }
            }
        },
        state: r
    };
}

function Rr(t, e) {
    const n = new Lr(t, e), i = [], r = [];
    return {
        init: function() {
            i.length = 0, r.length = 0;
        },
        state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
        },
        setupLights: function(t) {
            n.setup(i, t);
        },
        setupLightsView: function(t) {
            n.setupView(i, t);
        },
        pushLight: function(t) {
            i.push(t);
        },
        pushShadow: function(t) {
            r.push(t);
        }
    };
}

function Pr(t, e) {
    let n = new WeakMap;
    return {
        get: function(i, r = 0) {
            const a = n.get(i);
            let s;
            return void 0 === a ? (s = new Rr(t, e), n.set(i, [ s ])) : r >= a.length ? (s = new Rr(t, e), 
            a.push(s)) : s = a[r], s;
        },
        dispose: function() {
            n = new WeakMap;
        }
    };
}

class Dr extends xe {
    constructor(t) {
        super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, 
        this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, 
        this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, 
        this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, 
        this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, 
        this;
    }
}

class Ir extends xe {
    constructor(t) {
        super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new at, 
        this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, 
        this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, 
        this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, 
        this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, 
        this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, 
        this.displacementBias = t.displacementBias, this;
    }
}

function Nr(t, e, n) {
    let i = new fn;
    const r = new D, a = new D, s = new tt, o = new Dr({
        depthPacking: 3201
    }), l = new Ir, c = {}, h = n.maxTextureSize, u = {
        0: 1,
        1: 0,
        2: 2
    }, d = new en({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new D
            },
            radius: {
                value: 4
            }
        },
        vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    }), p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const f = new Ne;
    f.setAttribute("position", new Se(new Float32Array([ -1, -1, .5, 3, -1, .5, -1, 3, .5 ]), 3));
    const m = new Ye(f, d), g = this;
    function _(n, i) {
        const a = e.update(m);
        d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples, 
        p.defines.VSM_SAMPLES = n.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), 
        null === n.mapPass && (n.mapPass = new et(r.x, r.y)), d.uniforms.shadow_pass.value = n.map.texture, 
        d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), 
        t.clear(), t.renderBufferDirect(i, null, a, d, m, null), p.uniforms.shadow_pass.value = n.mapPass.texture, 
        p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), 
        t.clear(), t.renderBufferDirect(i, null, a, p, m, null);
    }
    function v(e, n, i, r, a, s) {
        let h = null;
        const d = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
        if (void 0 !== d) h = d; else if (h = !0 === i.isPointLight ? l : o, t.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
            const t = h.uuid, e = n.uuid;
            let i = c[t];
            void 0 === i && (i = {}, c[t] = i);
            let r = i[e];
            void 0 === r && (r = h.clone(), i[e] = r), h = r;
        }
        return h.visible = n.visible, h.wireframe = n.wireframe, h.side = 3 === s ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side], 
        h.alphaMap = n.alphaMap, h.alphaTest = n.alphaTest, h.map = n.map, h.clipShadows = n.clipShadows, 
        h.clippingPlanes = n.clippingPlanes, h.clipIntersection = n.clipIntersection, h.displacementMap = n.displacementMap, 
        h.displacementScale = n.displacementScale, h.displacementBias = n.displacementBias, 
        h.wireframeLinewidth = n.wireframeLinewidth, h.linewidth = n.linewidth, !0 === i.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(i.matrixWorld), 
        h.nearDistance = r, h.farDistance = a), h;
    }
    function x(n, r, a, s, o) {
        if (!1 === n.visible) return;
        if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            const i = e.update(n), r = n.material;
            if (Array.isArray(r)) {
                const e = i.groups;
                for (let l = 0, c = e.length; l < c; l++) {
                    const c = e[l], h = r[c.materialIndex];
                    if (h && h.visible) {
                        const e = v(n, h, s, a.near, a.far, o);
                        t.renderBufferDirect(a, null, i, e, n, c);
                    }
                }
            } else if (r.visible) {
                const e = v(n, r, s, a.near, a.far, o);
                t.renderBufferDirect(a, null, i, e, n, null);
            }
        }
        const l = n.children;
        for (let t = 0, e = l.length; t < e; t++) x(l[t], r, a, s, o);
    }
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, n, o) {
        if (!1 === g.enabled) return;
        if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
        if (0 === e.length) return;
        const l = t.getRenderTarget(), c = t.getActiveCubeFace(), u = t.getActiveMipmapLevel(), d = t.state;
        d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), 
        d.setScissorTest(!1);
        for (let l = 0, c = e.length; l < c; l++) {
            const c = e[l], u = c.shadow;
            if (void 0 === u) {
                console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                continue;
            }
            if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
            r.copy(u.mapSize);
            const p = u.getFrameExtents();
            if (r.multiply(p), a.copy(u.mapSize), (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / p.x), 
            r.x = a.x * p.x, u.mapSize.x = a.x), r.y > h && (a.y = Math.floor(h / p.y), r.y = a.y * p.y, 
            u.mapSize.y = a.y)), null === u.map) {
                const t = 3 !== this.type ? {
                    minFilter: 1003,
                    magFilter: 1003
                } : {};
                u.map = new et(r.x, r.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
            }
            t.setRenderTarget(u.map), t.clear();
            const f = u.getViewportCount();
            for (let t = 0; t < f; t++) {
                const e = u.getViewport(t);
                s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w), d.viewport(s), u.updateMatrices(c, t), 
                i = u.getFrustum(), x(n, o, u.camera, c, this.type);
            }
            !0 !== u.isPointLightShadow && 3 === this.type && _(u, o), u.needsUpdate = !1;
        }
        g.needsUpdate = !1, t.setRenderTarget(l, c, u);
    };
}

function Or(t, e, n) {
    const i = n.isWebGL2;
    const r = new function() {
        let e = !1;
        const n = new tt;
        let i = null;
        const r = new tt(0, 0, 0, 0);
        return {
            setMask: function(n) {
                i === n || e || (t.colorMask(n, n, n, n), i = n);
            },
            setLocked: function(t) {
                e = t;
            },
            setClear: function(e, i, a, s, o) {
                !0 === o && (e *= s, i *= s, a *= s), n.set(e, i, a, s), !1 === r.equals(n) && (t.clearColor(e, i, a, s), 
                r.copy(n));
            },
            reset: function() {
                e = !1, i = null, r.set(-1, 0, 0, 0);
            }
        };
    }, a = new function() {
        let e = !1, n = null, i = null, r = null;
        return {
            setTest: function(t) {
                t ? k(2929) : V(2929);
            },
            setMask: function(i) {
                n === i || e || (t.depthMask(i), n = i);
            },
            setFunc: function(e) {
                if (i !== e) {
                    switch (e) {
                      case 0:
                        t.depthFunc(512);
                        break;

                      case 1:
                        t.depthFunc(519);
                        break;

                      case 2:
                        t.depthFunc(513);
                        break;

                      case 3:
                      default:
                        t.depthFunc(515);
                        break;

                      case 4:
                        t.depthFunc(514);
                        break;

                      case 5:
                        t.depthFunc(518);
                        break;

                      case 6:
                        t.depthFunc(516);
                        break;

                      case 7:
                        t.depthFunc(517);
                    }
                    i = e;
                }
            },
            setLocked: function(t) {
                e = t;
            },
            setClear: function(e) {
                r !== e && (t.clearDepth(e), r = e);
            },
            reset: function() {
                e = !1, n = null, i = null, r = null;
            }
        };
    }, s = new function() {
        let e = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, c = null;
        return {
            setTest: function(t) {
                e || (t ? k(2960) : V(2960));
            },
            setMask: function(i) {
                n === i || e || (t.stencilMask(i), n = i);
            },
            setFunc: function(e, n, s) {
                i === e && r === n && a === s || (t.stencilFunc(e, n, s), i = e, r = n, a = s);
            },
            setOp: function(e, n, i) {
                s === e && o === n && l === i || (t.stencilOp(e, n, i), s = e, o = n, l = i);
            },
            setLocked: function(t) {
                e = t;
            },
            setClear: function(e) {
                c !== e && (t.clearStencil(e), c = e);
            },
            reset: function() {
                e = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, c = null;
            }
        };
    }, o = new WeakMap, l = new WeakMap;
    let c = {}, h = {}, u = new WeakMap, d = [], p = null, f = !1, m = null, g = null, _ = null, v = null, x = null, y = null, M = null, b = !1, S = null, w = null, T = null, E = null, A = null;
    const C = t.getParameter(35661);
    let L = !1, R = 0;
    const P = t.getParameter(7938);
    -1 !== P.indexOf("WebGL") ? (R = parseFloat(/^WebGL (\d)/.exec(P)[1]), L = R >= 1) : -1 !== P.indexOf("OpenGL ES") && (R = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]), 
    L = R >= 2);
    let D = null, I = {};
    const N = t.getParameter(3088), O = t.getParameter(2978), z = (new tt).fromArray(N), U = (new tt).fromArray(O);
    function F(e, n, i) {
        const r = new Uint8Array(4), a = t.createTexture();
        t.bindTexture(e, a), t.texParameteri(e, 10241, 9728), t.texParameteri(e, 10240, 9728);
        for (let e = 0; e < i; e++) t.texImage2D(n + e, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return a;
    }
    const B = {};
    function k(e) {
        !0 !== c[e] && (t.enable(e), c[e] = !0);
    }
    function V(e) {
        !1 !== c[e] && (t.disable(e), c[e] = !1);
    }
    B[3553] = F(3553, 3553, 1), B[34067] = F(34067, 34069, 6), r.setClear(0, 0, 0, 1), 
    a.setClear(1), s.setClear(0), k(2929), a.setFunc(3), j(!1), q(1), k(2884), W(0);
    const H = {
        100: 32774,
        101: 32778,
        102: 32779
    };
    if (i) H[103] = 32775, H[104] = 32776; else {
        const t = e.get("EXT_blend_minmax");
        null !== t && (H[103] = t.MIN_EXT, H[104] = t.MAX_EXT);
    }
    const G = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };
    function W(e, n, i, r, a, s, o, l) {
        if (0 !== e) {
            if (!1 === f && (k(3042), f = !0), 5 === e) a = a || n, s = s || i, o = o || r, 
            n === g && a === x || (t.blendEquationSeparate(H[n], H[a]), g = n, x = a), i === _ && r === v && s === y && o === M || (t.blendFuncSeparate(G[i], G[r], G[s], G[o]), 
            _ = i, v = r, y = s, M = o), m = e, b = !1; else if (e !== m || l !== b) {
                if (100 === g && 100 === x || (t.blendEquation(32774), g = 100, x = 100), l) switch (e) {
                  case 1:
                    t.blendFuncSeparate(1, 771, 1, 771);
                    break;

                  case 2:
                    t.blendFunc(1, 1);
                    break;

                  case 3:
                    t.blendFuncSeparate(0, 769, 0, 1);
                    break;

                  case 4:
                    t.blendFuncSeparate(0, 768, 0, 770);
                    break;

                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                } else switch (e) {
                  case 1:
                    t.blendFuncSeparate(770, 771, 1, 771);
                    break;

                  case 2:
                    t.blendFunc(770, 1);
                    break;

                  case 3:
                    t.blendFuncSeparate(0, 769, 0, 1);
                    break;

                  case 4:
                    t.blendFunc(0, 768);
                    break;

                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
                _ = null, v = null, y = null, M = null, m = e, b = l;
            }
        } else !0 === f && (V(3042), f = !1);
    }
    function j(e) {
        S !== e && (e ? t.frontFace(2304) : t.frontFace(2305), S = e);
    }
    function q(e) {
        0 !== e ? (k(2884), e !== w && (1 === e ? t.cullFace(1029) : 2 === e ? t.cullFace(1028) : t.cullFace(1032))) : V(2884), 
        w = e;
    }
    function X(e, n, i) {
        e ? (k(32823), E === n && A === i || (t.polygonOffset(n, i), E = n, A = i)) : V(32823);
    }
    return {
        buffers: {
            color: r,
            depth: a,
            stencil: s
        },
        enable: k,
        disable: V,
        bindFramebuffer: function(e, n) {
            return h[e] !== n && (t.bindFramebuffer(e, n), h[e] = n, i && (36009 === e && (h[36160] = n), 
            36160 === e && (h[36009] = n)), !0);
        },
        drawBuffers: function(i, r) {
            let a = d, s = !1;
            if (i) if (a = u.get(r), void 0 === a && (a = [], u.set(r, a)), i.isWebGLMultipleRenderTargets) {
                const t = i.texture;
                if (a.length !== t.length || 36064 !== a[0]) {
                    for (let e = 0, n = t.length; e < n; e++) a[e] = 36064 + e;
                    a.length = t.length, s = !0;
                }
            } else 36064 !== a[0] && (a[0] = 36064, s = !0); else 1029 !== a[0] && (a[0] = 1029, 
            s = !0);
            s && (n.isWebGL2 ? t.drawBuffers(a) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
        },
        useProgram: function(e) {
            return p !== e && (t.useProgram(e), p = e, !0);
        },
        setBlending: W,
        setMaterial: function(t, e) {
            2 === t.side ? V(2884) : k(2884);
            let n = 1 === t.side;
            e && (n = !n), j(n), 1 === t.blending && !1 === t.transparent ? W(0) : W(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), 
            a.setFunc(t.depthFunc), a.setTest(t.depthTest), a.setMask(t.depthWrite), r.setMask(t.colorWrite);
            const i = t.stencilWrite;
            s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), 
            s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), 
            !0 === t.alphaToCoverage ? k(32926) : V(32926);
        },
        setFlipSided: j,
        setCullFace: q,
        setLineWidth: function(e) {
            e !== T && (L && t.lineWidth(e), T = e);
        },
        setPolygonOffset: X,
        setScissorTest: function(t) {
            t ? k(3089) : V(3089);
        },
        activeTexture: function(e) {
            void 0 === e && (e = 33984 + C - 1), D !== e && (t.activeTexture(e), D = e);
        },
        bindTexture: function(e, n, i) {
            void 0 === i && (i = null === D ? 33984 + C - 1 : D);
            let r = I[i];
            void 0 === r && (r = {
                type: void 0,
                texture: void 0
            }, I[i] = r), r.type === e && r.texture === n || (D !== i && (t.activeTexture(i), 
            D = i), t.bindTexture(e, n || B[e]), r.type = e, r.texture = n);
        },
        unbindTexture: function() {
            const e = I[D];
            void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, 
            e.texture = void 0);
        },
        compressedTexImage2D: function() {
            try {
                t.compressedTexImage2D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        compressedTexImage3D: function() {
            try {
                t.compressedTexImage3D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        texImage2D: function() {
            try {
                t.texImage2D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        texImage3D: function() {
            try {
                t.texImage3D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        updateUBOMapping: function(e, n) {
            let i = l.get(n);
            void 0 === i && (i = new WeakMap, l.set(n, i));
            let r = i.get(e);
            void 0 === r && (r = t.getUniformBlockIndex(n, e.name), i.set(e, r));
        },
        uniformBlockBinding: function(e, n) {
            const i = l.get(n).get(e);
            o.get(n) !== i && (t.uniformBlockBinding(n, i, e.__bindingPointIndex), o.set(n, i));
        },
        texStorage2D: function() {
            try {
                t.texStorage2D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        texStorage3D: function() {
            try {
                t.texStorage3D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        texSubImage2D: function() {
            try {
                t.texSubImage2D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        texSubImage3D: function() {
            try {
                t.texSubImage3D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        compressedTexSubImage2D: function() {
            try {
                t.compressedTexSubImage2D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        compressedTexSubImage3D: function() {
            try {
                t.compressedTexSubImage3D.apply(t, arguments);
            } catch (t) {
                console.error("THREE.WebGLState:", t);
            }
        },
        scissor: function(e) {
            !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e));
        },
        viewport: function(e) {
            !1 === U.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), U.copy(e));
        },
        reset: function() {
            t.disable(3042), t.disable(2884), t.disable(2929), t.disable(32823), t.disable(3089), 
            t.disable(2960), t.disable(32926), t.blendEquation(32774), t.blendFunc(1, 0), t.blendFuncSeparate(1, 0, 1, 0), 
            t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(513), 
            t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(519, 0, 4294967295), t.stencilOp(7680, 7680, 7680), 
            t.clearStencil(0), t.cullFace(1029), t.frontFace(2305), t.polygonOffset(0, 0), t.activeTexture(33984), 
            t.bindFramebuffer(36160, null), !0 === i && (t.bindFramebuffer(36009, null), t.bindFramebuffer(36008, null)), 
            t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), 
            t.viewport(0, 0, t.canvas.width, t.canvas.height), c = {}, D = null, I = {}, h = {}, 
            u = new WeakMap, d = [], p = null, f = !1, m = null, g = null, _ = null, v = null, 
            x = null, y = null, M = null, b = !1, S = null, w = null, T = null, E = null, A = null, 
            z.set(0, 0, t.canvas.width, t.canvas.height), U.set(0, 0, t.canvas.width, t.canvas.height), 
            r.reset(), a.reset(), s.reset();
        }
    };
}

function zr(t, e, n, i, r, a, s) {
    const o = r.isWebGL2, l = r.maxTextures, c = r.maxCubemapSize, h = r.maxTextureSize, u = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), f = new WeakMap;
    let m;
    const g = new WeakMap;
    let _ = !1;
    try {
        _ = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t) {}
    function v(t, e) {
        return _ ? new OffscreenCanvas(t, e) : z("canvas");
    }
    function x(t, e, n, i) {
        let r = 1;
        if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                const i = e ? C : Math.floor, a = i(r * t.width), s = i(r * t.height);
                void 0 === m && (m = v(a, s));
                const o = n ? v(a, s) : m;
                o.width = a, o.height = s;
                return o.getContext("2d").drawImage(t, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + s + ")."), 
                o;
            }
            return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), 
            t;
        }
        return t;
    }
    function y(t) {
        return E(t.width) && E(t.height);
    }
    function M(t, e) {
        return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter;
    }
    function b(e) {
        t.generateMipmap(e);
    }
    function S(n, i, r, a, s = !1) {
        if (!1 === o) return i;
        if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
        }
        let l = i;
        return 6403 === i && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 
        33319 === i && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 
        6408 === i && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = 3001 === a && !1 === s ? 35907 : 32856), 
        32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e.get("EXT_color_buffer_float"), 
        l;
    }
    function w(t, e, n) {
        return !0 === M(t, n) || t.isFramebufferTexture && 1003 !== t.minFilter && 1006 !== t.minFilter ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1;
    }
    function T(t) {
        return 1003 === t || 1004 === t || 1005 === t ? 9728 : 9729;
    }
    function A(t) {
        const e = t.target;
        e.removeEventListener("dispose", A), function(t) {
            const e = i.get(t);
            if (void 0 === e.__webglInit) return;
            const n = t.source, r = g.get(n);
            if (r) {
                const i = r[e.__cacheKey];
                i.usedTimes--, 0 === i.usedTimes && R(t), 0 === Object.keys(r).length && g.delete(n);
            }
            i.remove(t);
        }(e), e.isVideoTexture && f.delete(e);
    }
    function L(e) {
        const n = e.target;
        n.removeEventListener("dispose", L), function(e) {
            const n = e.texture, r = i.get(e), a = i.get(n);
            void 0 !== a.__webglTexture && (t.deleteTexture(a.__webglTexture), s.memory.textures--);
            e.depthTexture && e.depthTexture.dispose();
            if (e.isWebGLCubeRenderTarget) for (let e = 0; e < 6; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]), 
            r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e]); else {
                if (t.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), 
                r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), 
                r.__webglColorRenderbuffer) for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
            }
            if (e.isWebGLMultipleRenderTargets) for (let e = 0, r = n.length; e < r; e++) {
                const r = i.get(n[e]);
                r.__webglTexture && (t.deleteTexture(r.__webglTexture), s.memory.textures--), i.remove(n[e]);
            }
            i.remove(n), i.remove(e);
        }(n);
    }
    function R(e) {
        const n = i.get(e);
        t.deleteTexture(n.__webglTexture);
        const r = e.source;
        delete g.get(r)[n.__cacheKey], s.memory.textures--;
    }
    let P = 0;
    function D(t, e) {
        const r = i.get(t);
        if (t.isVideoTexture && function(t) {
            const e = s.render.frame;
            f.get(t) !== e && (f.set(t, e), t.update());
        }(t), !1 === t.isRenderTargetTexture && t.version > 0 && r.__version !== t.version) {
            const n = t.image;
            if (null === n) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else {
                if (!1 !== n.complete) return void F(r, t, e);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            }
        }
        n.bindTexture(3553, r.__webglTexture, 33984 + e);
    }
    const I = {
        1e3: 10497,
        1001: 33071,
        1002: 33648
    }, N = {
        1003: 9728,
        1004: 9984,
        1005: 9986,
        1006: 9729,
        1007: 9985,
        1008: 9987
    };
    function O(n, a, s) {
        if (s ? (t.texParameteri(n, 10242, I[a.wrapS]), t.texParameteri(n, 10243, I[a.wrapT]), 
        32879 !== n && 35866 !== n || t.texParameteri(n, 32882, I[a.wrapR]), t.texParameteri(n, 10240, N[a.magFilter]), 
        t.texParameteri(n, 10241, N[a.minFilter])) : (t.texParameteri(n, 10242, 33071), 
        t.texParameteri(n, 10243, 33071), 32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071), 
        1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), 
        t.texParameteri(n, 10240, T(a.magFilter)), t.texParameteri(n, 10241, T(a.minFilter)), 
        1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), 
        !0 === e.has("EXT_texture_filter_anisotropic")) {
            const s = e.get("EXT_texture_filter_anisotropic");
            if (1003 === a.magFilter) return;
            if (1005 !== a.minFilter && 1008 !== a.minFilter) return;
            if (1015 === a.type && !1 === e.has("OES_texture_float_linear")) return;
            if (!1 === o && 1016 === a.type && !1 === e.has("OES_texture_half_float_linear")) return;
            (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), 
            i.get(a).__currentAnisotropy = a.anisotropy);
        }
    }
    function U(e, n) {
        let i = !1;
        void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", A));
        const r = n.source;
        let a = g.get(r);
        void 0 === a && (a = {}, g.set(r, a));
        const o = function(t) {
            const e = [];
            return e.push(t.wrapS), e.push(t.wrapT), e.push(t.wrapR || 0), e.push(t.magFilter), 
            e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), 
            e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), 
            e.push(t.unpackAlignment), e.push(t.encoding), e.join();
        }(n);
        if (o !== e.__cacheKey) {
            void 0 === a[o] && (a[o] = {
                texture: t.createTexture(),
                usedTimes: 0
            }, s.memory.textures++, i = !0), a[o].usedTimes++;
            const r = a[e.__cacheKey];
            void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && R(n)), e.__cacheKey = o, 
            e.__webglTexture = a[o].texture;
        }
        return i;
    }
    function F(e, r, s) {
        let l = 3553;
        (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = 35866), r.isData3DTexture && (l = 32879);
        const c = U(e, r), u = r.source;
        n.bindTexture(l, e.__webglTexture, 33984 + s);
        const d = i.get(u);
        if (u.version !== d.__version || !0 === c) {
            n.activeTexture(33984 + s), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), 
            t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
            const e = function(t) {
                return !o && (1001 !== t.wrapS || 1001 !== t.wrapT || 1003 !== t.minFilter && 1006 !== t.minFilter);
            }(r) && !1 === y(r.image);
            let i = x(r.image, e, !1, h);
            i = W(r, i);
            const p = y(i) || o, f = a.convert(r.format, r.encoding);
            let m, g = a.convert(r.type), _ = S(r.internalFormat, f, g, r.encoding, r.isVideoTexture);
            O(l, r, p);
            const v = r.mipmaps, T = o && !0 !== r.isVideoTexture, E = void 0 === d.__version || !0 === c, A = w(r, i, p);
            if (r.isDepthTexture) _ = 6402, o ? _ = 1015 === r.type ? 36012 : 1014 === r.type ? 33190 : 1020 === r.type ? 35056 : 33189 : 1015 === r.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 
            1026 === r.format && 6402 === _ && 1012 !== r.type && 1014 !== r.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), 
            r.type = 1014, g = a.convert(r.type)), 1027 === r.format && 6402 === _ && (_ = 34041, 
            1020 !== r.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), 
            r.type = 1020, g = a.convert(r.type))), E && (T ? n.texStorage2D(3553, 1, _, i.width, i.height) : n.texImage2D(3553, 0, _, i.width, i.height, 0, f, g, null)); else if (r.isDataTexture) if (v.length > 0 && p) {
                T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
                for (let t = 0, e = v.length; t < e; t++) m = v[t], T ? n.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, t, _, m.width, m.height, 0, f, g, m.data);
                r.generateMipmaps = !1;
            } else T ? (E && n.texStorage2D(3553, A, _, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, i.width, i.height, f, g, i.data)) : n.texImage2D(3553, 0, _, i.width, i.height, 0, f, g, i.data); else if (r.isCompressedTexture) if (r.isCompressedArrayTexture) {
                T && E && n.texStorage3D(35866, A, _, v[0].width, v[0].height, i.depth);
                for (let t = 0, e = v.length; t < e; t++) m = v[t], 1023 !== r.format ? null !== f ? T ? n.compressedTexSubImage3D(35866, t, 0, 0, 0, m.width, m.height, i.depth, f, m.data, 0, 0) : n.compressedTexImage3D(35866, t, _, m.width, m.height, i.depth, 0, m.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? n.texSubImage3D(35866, t, 0, 0, 0, m.width, m.height, i.depth, f, g, m.data) : n.texImage3D(35866, t, _, m.width, m.height, i.depth, 0, f, g, m.data);
            } else {
                T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
                for (let t = 0, e = v.length; t < e; t++) m = v[t], 1023 !== r.format ? null !== f ? T ? n.compressedTexSubImage2D(3553, t, 0, 0, m.width, m.height, f, m.data) : n.compressedTexImage2D(3553, t, _, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? n.texSubImage2D(3553, t, 0, 0, m.width, m.height, f, g, m.data) : n.texImage2D(3553, t, _, m.width, m.height, 0, f, g, m.data);
            } else if (r.isDataArrayTexture) T ? (E && n.texStorage3D(35866, A, _, i.width, i.height, i.depth), 
            n.texSubImage3D(35866, 0, 0, 0, 0, i.width, i.height, i.depth, f, g, i.data)) : n.texImage3D(35866, 0, _, i.width, i.height, i.depth, 0, f, g, i.data); else if (r.isData3DTexture) T ? (E && n.texStorage3D(32879, A, _, i.width, i.height, i.depth), 
            n.texSubImage3D(32879, 0, 0, 0, 0, i.width, i.height, i.depth, f, g, i.data)) : n.texImage3D(32879, 0, _, i.width, i.height, i.depth, 0, f, g, i.data); else if (r.isFramebufferTexture) {
                if (E) if (T) n.texStorage2D(3553, A, _, i.width, i.height); else {
                    let t = i.width, e = i.height;
                    for (let i = 0; i < A; i++) n.texImage2D(3553, i, _, t, e, 0, f, g, null), t >>= 1, 
                    e >>= 1;
                }
            } else if (v.length > 0 && p) {
                T && E && n.texStorage2D(3553, A, _, v[0].width, v[0].height);
                for (let t = 0, e = v.length; t < e; t++) m = v[t], T ? n.texSubImage2D(3553, t, 0, 0, f, g, m) : n.texImage2D(3553, t, _, f, g, m);
                r.generateMipmaps = !1;
            } else T ? (E && n.texStorage2D(3553, A, _, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, f, g, i)) : n.texImage2D(3553, 0, _, f, g, i);
            M(r, p) && b(l), d.__version = u.version, r.onUpdate && r.onUpdate(r);
        }
        e.__version = r.version;
    }
    function B(e, r, s, o, l) {
        const c = a.convert(s.format, s.encoding), h = a.convert(s.type), u = S(s.internalFormat, c, h, s.encoding);
        i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), 
        n.bindFramebuffer(36160, e), G(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(s).__webglTexture, 0, H(r)) : (3553 === l || l >= 34069 && l <= 34074) && t.framebufferTexture2D(36160, o, l, i.get(s).__webglTexture, 0), 
        n.bindFramebuffer(36160, null);
    }
    function k(e, n, i) {
        if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i || G(n)) {
                const e = n.depthTexture;
                e && e.isDepthTexture && (1015 === e.type ? r = 36012 : 1014 === e.type && (r = 33190));
                const i = H(n);
                G(n) ? d.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : t.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
            } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e);
        } else if (n.depthBuffer && n.stencilBuffer) {
            const r = H(n);
            i && !1 === G(n) ? t.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : G(n) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : t.renderbufferStorage(36161, 34041, n.width, n.height), 
            t.framebufferRenderbuffer(36160, 33306, 36161, e);
        } else {
            const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [ n.texture ];
            for (let r = 0; r < e.length; r++) {
                const s = e[r], o = a.convert(s.format, s.encoding), l = a.convert(s.type), c = S(s.internalFormat, o, l, s.encoding), h = H(n);
                i && !1 === G(n) ? t.renderbufferStorageMultisample(36161, h, c, n.width, n.height) : G(n) ? d.renderbufferStorageMultisampleEXT(36161, h, c, n.width, n.height) : t.renderbufferStorage(36161, c, n.width, n.height);
            }
        }
        t.bindRenderbuffer(36161, null);
    }
    function V(e) {
        const r = i.get(e), a = !0 === e.isWebGLCubeRenderTarget;
        if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (a) throw new Error("target.depthTexture not supported in Cube render targets");
            !function(e, r) {
                if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                if (n.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, 
                r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), D(r.depthTexture, 0);
                const a = i.get(r.depthTexture).__webglTexture, s = H(r);
                if (1026 === r.depthTexture.format) G(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, s) : t.framebufferTexture2D(36160, 36096, 3553, a, 0); else {
                    if (1027 !== r.depthTexture.format) throw new Error("Unknown depthTexture format");
                    G(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, s) : t.framebufferTexture2D(36160, 33306, 3553, a, 0);
                }
            }(r.__webglFramebuffer, e);
        } else if (a) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++) n.bindFramebuffer(36160, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), 
            k(r.__webglDepthbuffer[i], e, !1);
        } else n.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), 
        k(r.__webglDepthbuffer, e, !1);
        n.bindFramebuffer(36160, null);
    }
    function H(t) {
        return Math.min(u, t.samples);
    }
    function G(t) {
        const n = i.get(t);
        return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
    }
    function W(t, n) {
        const i = t.encoding, r = t.format, a = t.type;
        return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || 1035 === t.format || 3e3 !== i && (3001 === i ? !1 === o ? !0 === e.has("EXT_sRGB") && 1023 === r ? (t.format = 1035, 
        t.minFilter = 1006, t.generateMipmaps = !1) : n = Z.sRGBToLinear(n) : 1023 === r && 1009 === a || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)), 
        n;
    }
    this.allocateTextureUnit = function() {
        const t = P;
        return t >= l && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l), 
        P += 1, t;
    }, this.resetTextureUnits = function() {
        P = 0;
    }, this.setTexture2D = D, this.setTexture2DArray = function(t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? F(r, t, e) : n.bindTexture(35866, r.__webglTexture, 33984 + e);
    }, this.setTexture3D = function(t, e) {
        const r = i.get(t);
        t.version > 0 && r.__version !== t.version ? F(r, t, e) : n.bindTexture(32879, r.__webglTexture, 33984 + e);
    }, this.setTextureCube = function(e, r) {
        const s = i.get(e);
        e.version > 0 && s.__version !== e.version ? function(e, r, s) {
            if (6 !== r.image.length) return;
            const l = U(e, r), h = r.source;
            n.bindTexture(34067, e.__webglTexture, 33984 + s);
            const u = i.get(h);
            if (h.version !== u.__version || !0 === l) {
                n.activeTexture(33984 + s), t.pixelStorei(37440, r.flipY), t.pixelStorei(37441, r.premultiplyAlpha), 
                t.pixelStorei(3317, r.unpackAlignment), t.pixelStorei(37443, 0);
                const e = r.isCompressedTexture || r.image[0].isCompressedTexture, i = r.image[0] && r.image[0].isDataTexture, d = [];
                for (let t = 0; t < 6; t++) d[t] = e || i ? i ? r.image[t].image : r.image[t] : x(r.image[t], !1, !0, c), 
                d[t] = W(r, d[t]);
                const p = d[0], f = y(p) || o, m = a.convert(r.format, r.encoding), g = a.convert(r.type), _ = S(r.internalFormat, m, g, r.encoding), v = o && !0 !== r.isVideoTexture, T = void 0 === u.__version || !0 === l;
                let E, A = w(r, p, f);
                if (O(34067, r, f), e) {
                    v && T && n.texStorage2D(34067, A, _, p.width, p.height);
                    for (let t = 0; t < 6; t++) {
                        E = d[t].mipmaps;
                        for (let e = 0; e < E.length; e++) {
                            const i = E[e];
                            1023 !== r.format ? null !== m ? v ? n.compressedTexSubImage2D(34069 + t, e, 0, 0, i.width, i.height, m, i.data) : n.compressedTexImage2D(34069 + t, e, _, i.width, i.height, 0, i.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v ? n.texSubImage2D(34069 + t, e, 0, 0, i.width, i.height, m, g, i.data) : n.texImage2D(34069 + t, e, _, i.width, i.height, 0, m, g, i.data);
                        }
                    }
                } else {
                    E = r.mipmaps, v && T && (E.length > 0 && A++, n.texStorage2D(34067, A, _, d[0].width, d[0].height));
                    for (let t = 0; t < 6; t++) if (i) {
                        v ? n.texSubImage2D(34069 + t, 0, 0, 0, d[t].width, d[t].height, m, g, d[t].data) : n.texImage2D(34069 + t, 0, _, d[t].width, d[t].height, 0, m, g, d[t].data);
                        for (let e = 0; e < E.length; e++) {
                            const i = E[e].image[t].image;
                            v ? n.texSubImage2D(34069 + t, e + 1, 0, 0, i.width, i.height, m, g, i.data) : n.texImage2D(34069 + t, e + 1, _, i.width, i.height, 0, m, g, i.data);
                        }
                    } else {
                        v ? n.texSubImage2D(34069 + t, 0, 0, 0, m, g, d[t]) : n.texImage2D(34069 + t, 0, _, m, g, d[t]);
                        for (let e = 0; e < E.length; e++) {
                            const i = E[e];
                            v ? n.texSubImage2D(34069 + t, e + 1, 0, 0, m, g, i.image[t]) : n.texImage2D(34069 + t, e + 1, _, m, g, i.image[t]);
                        }
                    }
                }
                M(r, f) && b(34067), u.__version = h.version, r.onUpdate && r.onUpdate(r);
            }
            e.__version = r.version;
        }(s, e, r) : n.bindTexture(34067, s.__webglTexture, 33984 + r);
    }, this.rebindTextures = function(t, e, n) {
        const r = i.get(t);
        void 0 !== e && B(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== n && V(t);
    }, this.setupRenderTarget = function(e) {
        const l = e.texture, c = i.get(e), h = i.get(l);
        e.addEventListener("dispose", L), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()), 
        h.__version = l.version, s.memory.textures++);
        const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = y(e) || o;
        if (u) {
            c.__webglFramebuffer = [];
            for (let e = 0; e < 6; e++) c.__webglFramebuffer[e] = t.createFramebuffer();
        } else {
            if (c.__webglFramebuffer = t.createFramebuffer(), d) if (r.drawBuffers) {
                const n = e.texture;
                for (let e = 0, r = n.length; e < r; e++) {
                    const r = i.get(n[e]);
                    void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), s.memory.textures++);
                }
            } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (o && e.samples > 0 && !1 === G(e)) {
                const i = d ? l : [ l ];
                c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = [], 
                n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                for (let n = 0; n < i.length; n++) {
                    const r = i[n];
                    c.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
                    const s = a.convert(r.format, r.encoding), o = a.convert(r.type), l = S(r.internalFormat, s, o, r.encoding, !0 === e.isXRRenderTarget), h = H(e);
                    t.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t.framebufferRenderbuffer(36160, 36064 + n, 36161, c.__webglColorRenderbuffer[n]);
                }
                t.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), 
                k(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(36160, null);
            }
        }
        if (u) {
            n.bindTexture(34067, h.__webglTexture), O(34067, l, p);
            for (let t = 0; t < 6; t++) B(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
            M(l, p) && b(34067), n.unbindTexture();
        } else if (d) {
            const t = e.texture;
            for (let r = 0, a = t.length; r < a; r++) {
                const a = t[r], s = i.get(a);
                n.bindTexture(3553, s.__webglTexture), O(3553, a, p), B(c.__webglFramebuffer, e, a, 36064 + r, 3553), 
                M(a, p) && b(3553);
            }
            n.unbindTexture();
        } else {
            let t = 3553;
            (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), 
            n.bindTexture(t, h.__webglTexture), O(t, l, p), B(c.__webglFramebuffer, e, l, 36064, t), 
            M(l, p) && b(t), n.unbindTexture();
        }
        e.depthBuffer && V(e);
    }, this.updateRenderTargetMipmap = function(t) {
        const e = y(t) || o, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [ t.texture ];
        for (let a = 0, s = r.length; a < s; a++) {
            const s = r[a];
            if (M(s, e)) {
                const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = i.get(s).__webglTexture;
                n.bindTexture(e, r), b(e), n.unbindTexture();
            }
        }
    }, this.updateMultisampleRenderTarget = function(e) {
        if (o && e.samples > 0 && !1 === G(e)) {
            const r = e.isWebGLMultipleRenderTargets ? e.texture : [ e.texture ], a = e.width, s = e.height;
            let o = 16384;
            const l = [], c = e.stencilBuffer ? 33306 : 36096, h = i.get(e), u = !0 === e.isWebGLMultipleRenderTargets;
            if (u) for (let e = 0; e < r.length; e++) n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), 
            t.framebufferRenderbuffer(36160, 36064 + e, 36161, null), n.bindFramebuffer(36160, h.__webglFramebuffer), 
            t.framebufferTexture2D(36009, 36064 + e, 3553, null, 0);
            n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, h.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
                l.push(36064 + n), e.depthBuffer && l.push(c);
                const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[n]), 
                !0 === d && (t.invalidateFramebuffer(36008, [ c ]), t.invalidateFramebuffer(36009, [ c ])), 
                u) {
                    const e = i.get(r[n]).__webglTexture;
                    t.framebufferTexture2D(36009, 36064, 3553, e, 0);
                }
                t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728), p && t.invalidateFramebuffer(36008, l);
            }
            if (n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u) for (let e = 0; e < r.length; e++) {
                n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064 + e, 36161, h.__webglColorRenderbuffer[e]);
                const a = i.get(r[e]).__webglTexture;
                n.bindFramebuffer(36160, h.__webglFramebuffer), t.framebufferTexture2D(36009, 36064 + e, 3553, a, 0);
            }
            n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
        }
    }, this.setupDepthRenderbuffer = V, this.setupFrameBufferTexture = B, this.useMultisampledRTT = G;
}

function Ur(t, e, n) {
    const i = n.isWebGL2;
    return {
        convert: function(n, r = null) {
            let a;
            if (1009 === n) return 5121;
            if (1017 === n) return 32819;
            if (1018 === n) return 32820;
            if (1010 === n) return 5120;
            if (1011 === n) return 5122;
            if (1012 === n) return 5123;
            if (1013 === n) return 5124;
            if (1014 === n) return 5125;
            if (1015 === n) return 5126;
            if (1016 === n) return i ? 5131 : (a = e.get("OES_texture_half_float"), null !== a ? a.HALF_FLOAT_OES : null);
            if (1021 === n) return 6406;
            if (1023 === n) return 6408;
            if (1024 === n) return 6409;
            if (1025 === n) return 6410;
            if (1026 === n) return 6402;
            if (1027 === n) return 34041;
            if (1022 === n) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 
            6408;
            if (1035 === n) return a = e.get("EXT_sRGB"), null !== a ? a.SRGB_ALPHA_EXT : null;
            if (1028 === n) return 6403;
            if (1029 === n) return 36244;
            if (1030 === n) return 33319;
            if (1031 === n) return 33320;
            if (1033 === n) return 36249;
            if (33776 === n || 33777 === n || 33778 === n || 33779 === n) if (3001 === r) {
                if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === a) return null;
                if (33776 === n) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (33777 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (33778 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (33779 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            } else {
                if (a = e.get("WEBGL_compressed_texture_s3tc"), null === a) return null;
                if (33776 === n) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (33777 === n) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (33778 === n) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (33779 === n) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
            if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
                if (a = e.get("WEBGL_compressed_texture_pvrtc"), null === a) return null;
                if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (36196 === n) return a = e.get("WEBGL_compressed_texture_etc1"), null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (37492 === n || 37496 === n) {
                if (a = e.get("WEBGL_compressed_texture_etc"), null === a) return null;
                if (37492 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                if (37496 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
                if (a = e.get("WEBGL_compressed_texture_astc"), null === a) return null;
                if (37808 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (37809 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (37810 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (37811 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (37812 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (37813 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (37814 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (37815 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (37816 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (37817 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (37818 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (37819 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (37820 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (37821 === n) return 3001 === r ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (36492 === n) {
                if (a = e.get("EXT_texture_compression_bptc"), null === a) return null;
                if (36492 === n) return 3001 === r ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            }
            return 1020 === n ? i ? 34042 : (a = e.get("WEBGL_depth_texture"), null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null;
        }
    };
}

class Fr extends rn {
    constructor(t = []) {
        super(), this.isArrayCamera = !0, this.cameras = t;
    }
}

class Br extends se {
    constructor() {
        super(), this.isGroup = !0, this.type = "Group";
    }
}

const kr = {
    type: "move"
};

class Vr {
    constructor() {
        this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new Br, this._hand.matrixAutoUpdate = !1, 
        this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand;
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new Br, this._targetRay.matrixAutoUpdate = !1, 
        this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new at, 
        this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new at), 
        this._targetRay;
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new Br, this._grip.matrixAutoUpdate = !1, 
        this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new at, 
        this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new at), this._grip;
    }
    dispatchEvent(t) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), 
        null !== this._hand && this._hand.dispatchEvent(t), this;
    }
    connect(t) {
        if (t && t.hand) {
            const e = this._hand;
            if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
        }
        return this.dispatchEvent({
            type: "connected",
            data: t
        }), this;
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), 
        null !== this._hand && (this._hand.visible = !1), this;
    }
    update(t, e, n) {
        let i = null, r = null, a = null;
        const s = this._targetRay, o = this._grip, l = this._hand;
        if (t && "visible-blurred" !== e.session.visibilityState) {
            if (l && t.hand) {
                a = !0;
                for (const i of t.hand.values()) {
                    const t = e.getJointPose(i, n), r = this._getHandJoint(l, i);
                    null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), 
                    r.jointRadius = t.radius), r.visible = null !== t;
                }
                const i = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], s = i.position.distanceTo(r.position), o = .02, c = .005;
                l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }));
            } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), 
            o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, 
            o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, 
            o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            null !== s && (i = e.getPose(t.targetRaySpace, n), null === i && null !== r && (i = r), 
            null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), 
            i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, 
            i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, 
            this.dispatchEvent(kr)));
        }
        return null !== s && (s.visible = null !== i), null !== o && (o.visible = null !== r), 
        null !== l && (l.visible = null !== a), this;
    }
    _getHandJoint(t, e) {
        if (void 0 === t.joints[e.jointName]) {
            const n = new Br;
            n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
        }
        return t.joints[e.jointName];
    }
}

class Hr extends $ {
    constructor(t, e, n, i, r, a, s, o, l, c) {
        if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && 1026 === c && (n = 1014), void 0 === n && 1027 === c && (n = 1020), 
        super(null, i, r, a, s, o, c, n, l), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== s ? s : 1003, this.minFilter = void 0 !== o ? o : 1003, 
        this.flipY = !1, this.generateMipmaps = !1;
    }
}

class Gr extends _ {
    constructor(t, e) {
        super();
        const n = this;
        let i = null, r = 1, a = null, s = "local-floor", o = null, l = null, c = null, h = null, u = null, d = null;
        const p = e.getContextAttributes();
        let f = null, m = null;
        const g = [], _ = [], v = new Set, x = new Map, y = new rn;
        y.layers.enable(1), y.viewport = new tt;
        const M = new rn;
        M.layers.enable(2), M.viewport = new tt;
        const b = [ y, M ], S = new Fr;
        S.layers.enable(1), S.layers.enable(2);
        let w = null, T = null;
        function E(t) {
            const e = _.indexOf(t.inputSource);
            if (-1 === e) return;
            const n = g[e];
            void 0 !== n && n.dispatchEvent({
                type: t.type,
                data: t.inputSource
            });
        }
        function A() {
            i.removeEventListener("select", E), i.removeEventListener("selectstart", E), i.removeEventListener("selectend", E), 
            i.removeEventListener("squeeze", E), i.removeEventListener("squeezestart", E), i.removeEventListener("squeezeend", E), 
            i.removeEventListener("end", A), i.removeEventListener("inputsourceschange", C);
            for (let t = 0; t < g.length; t++) {
                const e = _[t];
                null !== e && (_[t] = null, g[t].disconnect(e));
            }
            w = null, T = null, t.setRenderTarget(f), u = null, h = null, c = null, i = null, 
            m = null, I.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            });
        }
        function C(t) {
            for (let e = 0; e < t.removed.length; e++) {
                const n = t.removed[e], i = _.indexOf(n);
                i >= 0 && (_[i] = null, g[i].disconnect(n));
            }
            for (let e = 0; e < t.added.length; e++) {
                const n = t.added[e];
                let i = _.indexOf(n);
                if (-1 === i) {
                    for (let t = 0; t < g.length; t++) {
                        if (t >= _.length) {
                            _.push(n), i = t;
                            break;
                        }
                        if (null === _[t]) {
                            _[t] = n, i = t;
                            break;
                        }
                    }
                    if (-1 === i) break;
                }
                const r = g[i];
                r && r.connect(n);
            }
        }
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
            let e = g[t];
            return void 0 === e && (e = new Vr, g[t] = e), e.getTargetRaySpace();
        }, this.getControllerGrip = function(t) {
            let e = g[t];
            return void 0 === e && (e = new Vr, g[t] = e), e.getGripSpace();
        }, this.getHand = function(t) {
            let e = g[t];
            return void 0 === e && (e = new Vr, g[t] = e), e.getHandSpace();
        }, this.setFramebufferScaleFactor = function(t) {
            r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
        }, this.setReferenceSpaceType = function(t) {
            s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
        }, this.getReferenceSpace = function() {
            return o || a;
        }, this.setReferenceSpace = function(t) {
            o = t;
        }, this.getBaseLayer = function() {
            return null !== h ? h : u;
        }, this.getBinding = function() {
            return c;
        }, this.getFrame = function() {
            return d;
        }, this.getSession = function() {
            return i;
        }, this.setSession = async function(l) {
            if (i = l, null !== i) {
                if (f = t.getRenderTarget(), i.addEventListener("select", E), i.addEventListener("selectstart", E), 
                i.addEventListener("selectend", E), i.addEventListener("squeeze", E), i.addEventListener("squeezestart", E), 
                i.addEventListener("squeezeend", E), i.addEventListener("end", A), i.addEventListener("inputsourceschange", C), 
                !0 !== p.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
                    const n = {
                        antialias: void 0 !== i.renderState.layers || p.antialias,
                        alpha: p.alpha,
                        depth: p.depth,
                        stencil: p.stencil,
                        framebufferScaleFactor: r
                    };
                    u = new XRWebGLLayer(i, e, n), i.updateRenderState({
                        baseLayer: u
                    }), m = new et(u.framebufferWidth, u.framebufferHeight, {
                        format: 1023,
                        type: 1009,
                        encoding: t.outputEncoding,
                        stencilBuffer: p.stencil
                    });
                } else {
                    let n = null, a = null, s = null;
                    p.depth && (s = p.stencil ? 35056 : 33190, n = p.stencil ? 1027 : 1026, a = p.stencil ? 1020 : 1014);
                    const o = {
                        colorFormat: 32856,
                        depthFormat: s,
                        scaleFactor: r
                    };
                    c = new XRWebGLBinding(i, e), h = c.createProjectionLayer(o), i.updateRenderState({
                        layers: [ h ]
                    }), m = new et(h.textureWidth, h.textureHeight, {
                        format: 1023,
                        type: 1009,
                        depthTexture: new Hr(h.textureWidth, h.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
                        stencilBuffer: p.stencil,
                        encoding: t.outputEncoding,
                        samples: p.antialias ? 4 : 0
                    });
                    t.properties.get(m).__ignoreDepthValues = h.ignoreDepthValues;
                }
                m.isXRRenderTarget = !0, this.setFoveation(1), o = null, a = await i.requestReferenceSpace(s), 
                I.setContext(i), I.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                });
            }
        };
        const L = new at, R = new at;
        function P(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), 
            t.matrixWorldInverse.copy(t.matrixWorld).invert();
        }
        this.updateCamera = function(t) {
            if (null === i) return;
            S.near = M.near = y.near = t.near, S.far = M.far = y.far = t.far, w === S.near && T === S.far || (i.updateRenderState({
                depthNear: S.near,
                depthFar: S.far
            }), w = S.near, T = S.far);
            const e = t.parent, n = S.cameras;
            P(S, e);
            for (let t = 0; t < n.length; t++) P(n[t], e);
            S.matrixWorld.decompose(S.position, S.quaternion, S.scale), t.matrix.copy(S.matrix), 
            t.matrix.decompose(t.position, t.quaternion, t.scale);
            const r = t.children;
            for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
            2 === n.length ? function(t, e, n) {
                L.setFromMatrixPosition(e.matrixWorld), R.setFromMatrixPosition(n.matrixWorld);
                const i = L.distanceTo(R), r = e.projectionMatrix.elements, a = n.projectionMatrix.elements, s = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (a[8] + 1) / a[0], d = s * h, p = s * u, f = i / (-h + u), m = f * -h;
                e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), 
                t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                const g = s + f, _ = o + f, v = d - m, x = p + (i - m), y = l * o / _ * g, M = c * o / _ * g;
                t.projectionMatrix.makePerspective(v, x, y, M, g, _);
            }(S, y, M) : S.projectionMatrix.copy(y.projectionMatrix);
        }, this.getCamera = function() {
            return S;
        }, this.getFoveation = function() {
            return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0;
        }, this.setFoveation = function(t) {
            null !== h && (h.fixedFoveation = t), null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = t);
        }, this.getPlanes = function() {
            return v;
        };
        let D = null;
        const I = new mn;
        I.setAnimationLoop((function(e, i) {
            if (l = i.getViewerPose(o || a), d = i, null !== l) {
                const e = l.views;
                null !== u && (t.setRenderTargetFramebuffer(m, u.framebuffer), t.setRenderTarget(m));
                let n = !1;
                e.length !== S.cameras.length && (S.cameras.length = 0, n = !0);
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    let a = null;
                    if (null !== u) a = u.getViewport(r); else {
                        const e = c.getViewSubImage(h, r);
                        a = e.viewport, 0 === i && (t.setRenderTargetTextures(m, e.colorTexture, h.ignoreDepthValues ? void 0 : e.depthStencilTexture), 
                        t.setRenderTarget(m));
                    }
                    let s = b[i];
                    void 0 === s && (s = new rn, s.layers.enable(i), s.viewport = new tt, b[i] = s), 
                    s.matrix.fromArray(r.transform.matrix), s.projectionMatrix.fromArray(r.projectionMatrix), 
                    s.viewport.set(a.x, a.y, a.width, a.height), 0 === i && S.matrix.copy(s.matrix), 
                    !0 === n && S.cameras.push(s);
                }
            }
            for (let t = 0; t < g.length; t++) {
                const e = _[t], n = g[t];
                null !== e && void 0 !== n && n.update(e, i, o || a);
            }
            if (D && D(e, i), i.detectedPlanes) {
                n.dispatchEvent({
                    type: "planesdetected",
                    data: i.detectedPlanes
                });
                let t = null;
                for (const e of v) i.detectedPlanes.has(e) || (null === t && (t = []), t.push(e));
                if (null !== t) for (const e of t) v.delete(e), x.delete(e), n.dispatchEvent({
                    type: "planeremoved",
                    data: e
                });
                for (const t of i.detectedPlanes) if (v.has(t)) {
                    const e = x.get(t);
                    t.lastChangedTime > e && (x.set(t, t.lastChangedTime), n.dispatchEvent({
                        type: "planechanged",
                        data: t
                    }));
                } else v.add(t), x.set(t, i.lastChangedTime), n.dispatchEvent({
                    type: "planeadded",
                    data: t
                });
            }
            d = null;
        })), this.setAnimationLoop = function(t) {
            D = t;
        }, this.dispose = function() {};
    }
}

function Wr(t, e) {
    function n(n, i) {
        n.opacity.value = i.opacity, i.color && n.diffuse.value.copy(i.color), i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), 
        i.map && (n.map.value = i.map), i.alphaMap && (n.alphaMap.value = i.alphaMap), i.bumpMap && (n.bumpMap.value = i.bumpMap, 
        n.bumpScale.value = i.bumpScale, 1 === i.side && (n.bumpScale.value *= -1)), i.displacementMap && (n.displacementMap.value = i.displacementMap, 
        n.displacementScale.value = i.displacementScale, n.displacementBias.value = i.displacementBias), 
        i.emissiveMap && (n.emissiveMap.value = i.emissiveMap), i.normalMap && (n.normalMap.value = i.normalMap, 
        n.normalScale.value.copy(i.normalScale), 1 === i.side && n.normalScale.value.negate()), 
        i.specularMap && (n.specularMap.value = i.specularMap), i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
        const r = e.get(i).envMap;
        if (r && (n.envMap.value = r, n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, 
        n.reflectivity.value = i.reflectivity, n.ior.value = i.ior, n.refractionRatio.value = i.refractionRatio), 
        i.lightMap) {
            n.lightMap.value = i.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e;
        }
        let a, s;
        i.aoMap && (n.aoMap.value = i.aoMap, n.aoMapIntensity.value = i.aoMapIntensity), 
        i.map ? a = i.map : i.specularMap ? a = i.specularMap : i.displacementMap ? a = i.displacementMap : i.normalMap ? a = i.normalMap : i.bumpMap ? a = i.bumpMap : i.roughnessMap ? a = i.roughnessMap : i.metalnessMap ? a = i.metalnessMap : i.alphaMap ? a = i.alphaMap : i.emissiveMap ? a = i.emissiveMap : i.clearcoatMap ? a = i.clearcoatMap : i.clearcoatNormalMap ? a = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? a = i.clearcoatRoughnessMap : i.iridescenceMap ? a = i.iridescenceMap : i.iridescenceThicknessMap ? a = i.iridescenceThicknessMap : i.specularIntensityMap ? a = i.specularIntensityMap : i.specularColorMap ? a = i.specularColorMap : i.transmissionMap ? a = i.transmissionMap : i.thicknessMap ? a = i.thicknessMap : i.sheenColorMap ? a = i.sheenColorMap : i.sheenRoughnessMap && (a = i.sheenRoughnessMap), 
        void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), 
        n.uvTransform.value.copy(a.matrix)), i.aoMap ? s = i.aoMap : i.lightMap && (s = i.lightMap), 
        void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), 
        n.uv2Transform.value.copy(s.matrix));
    }
    return {
        refreshFogUniforms: function(e, n) {
            n.color.getRGB(e.fogColor.value, $e(t)), n.isFog ? (e.fogNear.value = n.near, e.fogFar.value = n.far) : n.isFogExp2 && (e.fogDensity.value = n.density);
        },
        refreshMaterialUniforms: function(t, i, r, a, s) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(t, i) : i.isMeshToonMaterial ? (n(t, i), 
            function(t, e) {
                e.gradientMap && (t.gradientMap.value = e.gradientMap);
            }(t, i)) : i.isMeshPhongMaterial ? (n(t, i), function(t, e) {
                t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4);
            }(t, i)) : i.isMeshStandardMaterial ? (n(t, i), function(t, n) {
                t.roughness.value = n.roughness, t.metalness.value = n.metalness, n.roughnessMap && (t.roughnessMap.value = n.roughnessMap);
                n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
                e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity);
            }(t, i), i.isMeshPhysicalMaterial && function(t, e, n) {
                t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), 
                t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), 
                e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, 
                e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), 
                e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), 
                t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()));
                e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, 
                t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], 
                e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap));
                e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = n.texture, 
                t.transmissionSamplerSize.value.set(n.width, n.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), 
                t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), 
                t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), 
                e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap);
                e.specularColorMap && (t.specularColorMap.value = e.specularColorMap);
            }(t, i, s)) : i.isMeshMatcapMaterial ? (n(t, i), function(t, e) {
                e.matcap && (t.matcap.value = e.matcap);
            }(t, i)) : i.isMeshDepthMaterial ? n(t, i) : i.isMeshDistanceMaterial ? (n(t, i), 
            function(t, e) {
                t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, 
                t.farDistance.value = e.farDistance;
            }(t, i)) : i.isMeshNormalMaterial ? n(t, i) : i.isLineBasicMaterial ? (function(t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
            }(t, i), i.isLineDashedMaterial && function(t, e) {
                t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
            }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, 
                t.scale.value = .5 * i, e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                let r;
                e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
            }(t, i, r, a) : i.isSpriteMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, 
                e.map && (t.map.value = e.map);
                e.alphaMap && (t.alphaMap.value = e.alphaMap);
                e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                let n;
                e.map ? n = e.map : e.alphaMap && (n = e.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix));
            }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
        }
    };
}

function jr(t, e, n, i) {
    let r = {}, a = {}, s = [];
    const o = n.isWebGL2 ? t.getParameter(35375) : 0;
    function l(t, e, n) {
        const i = t.value;
        if (void 0 === n[e]) {
            if ("number" == typeof i) n[e] = i; else {
                const t = Array.isArray(i) ? i : [ i ], r = [];
                for (let e = 0; e < t.length; e++) r.push(t[e].clone());
                n[e] = r;
            }
            return !0;
        }
        if ("number" == typeof i) {
            if (n[e] !== i) return n[e] = i, !0;
        } else {
            const t = Array.isArray(n[e]) ? n[e] : [ n[e] ], r = Array.isArray(i) ? i : [ i ];
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (!1 === n.equals(r[e])) return n.copy(r[e]), !0;
            }
        }
        return !1;
    }
    function c(t) {
        const e = {
            boundary: 0,
            storage: 0
        };
        return "number" == typeof t ? (e.boundary = 4, e.storage = 4) : t.isVector2 ? (e.boundary = 8, 
        e.storage = 8) : t.isVector3 || t.isColor ? (e.boundary = 16, e.storage = 12) : t.isVector4 ? (e.boundary = 16, 
        e.storage = 16) : t.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t.isMatrix4 ? (e.boundary = 64, 
        e.storage = 64) : t.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t), 
        e;
    }
    function h(e) {
        const n = e.target;
        n.removeEventListener("dispose", h);
        const i = s.indexOf(n.__bindingPointIndex);
        s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
    }
    return {
        bind: function(t, e) {
            const n = e.program;
            i.uniformBlockBinding(t, n);
        },
        update: function(n, u) {
            let d = r[n.id];
            void 0 === d && (!function(t) {
                const e = t.uniforms;
                let n = 0;
                const i = 16;
                let r = 0;
                for (let t = 0, a = e.length; t < a; t++) {
                    const a = e[t], s = {
                        boundary: 0,
                        storage: 0
                    }, o = Array.isArray(a.value) ? a.value : [ a.value ];
                    for (let t = 0, e = o.length; t < e; t++) {
                        const e = c(o[t]);
                        s.boundary += e.boundary, s.storage += e.storage;
                    }
                    if (a.__data = new Float32Array(s.storage / Float32Array.BYTES_PER_ELEMENT), a.__offset = n, 
                    t > 0) {
                        r = n % i;
                        const t = i - r;
                        0 !== r && t - s.boundary < 0 && (n += i - r, a.__offset = n);
                    }
                    n += s.storage;
                }
                r = n % i, r > 0 && (n += i - r);
                t.__size = n, t.__cache = {};
            }(n), d = function(e) {
                const n = function() {
                    for (let t = 0; t < o; t++) if (-1 === s.indexOf(t)) return s.push(t), t;
                    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 
                    0;
                }();
                e.__bindingPointIndex = n;
                const i = t.createBuffer(), r = e.__size, a = e.usage;
                return t.bindBuffer(35345, i), t.bufferData(35345, r, a), t.bindBuffer(35345, null), 
                t.bindBufferBase(35345, n, i), i;
            }(n), r[n.id] = d, n.addEventListener("dispose", h));
            const p = u.program;
            i.updateUBOMapping(n, p);
            const f = e.render.frame;
            a[n.id] !== f && (!function(e) {
                const n = r[e.id], i = e.uniforms, a = e.__cache;
                t.bindBuffer(35345, n);
                for (let e = 0, n = i.length; e < n; e++) {
                    const n = i[e];
                    if (!0 === l(n, e, a)) {
                        const e = n.__offset, i = Array.isArray(n.value) ? n.value : [ n.value ];
                        let r = 0;
                        for (let a = 0; a < i.length; a++) {
                            const s = i[a], o = c(s);
                            "number" == typeof s ? (n.__data[0] = s, t.bufferSubData(35345, e + r, n.__data)) : s.isMatrix3 ? (n.__data[0] = s.elements[0], 
                            n.__data[1] = s.elements[1], n.__data[2] = s.elements[2], n.__data[3] = s.elements[0], 
                            n.__data[4] = s.elements[3], n.__data[5] = s.elements[4], n.__data[6] = s.elements[5], 
                            n.__data[7] = s.elements[0], n.__data[8] = s.elements[6], n.__data[9] = s.elements[7], 
                            n.__data[10] = s.elements[8], n.__data[11] = s.elements[0]) : (s.toArray(n.__data, r), 
                            r += o.storage / Float32Array.BYTES_PER_ELEMENT);
                        }
                        t.bufferSubData(35345, e, n.__data);
                    }
                }
                t.bindBuffer(35345, null);
            }(n), a[n.id] = f);
        },
        dispose: function() {
            for (const e in r) t.deleteBuffer(r[e]);
            s = [], r = {}, a = {};
        }
    };
}

function qr(t = {}) {
    this.isWebGLRenderer = !0;
    const e = void 0 !== t.canvas ? t.canvas : function() {
        const t = z("canvas");
        return t.style.display = "block", t;
    }(), n = void 0 !== t.context ? t.context : null, i = void 0 === t.depth || t.depth, r = void 0 === t.stencil || t.stencil, a = void 0 !== t.antialias && t.antialias, s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, o = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, l = void 0 !== t.powerPreference ? t.powerPreference : "default", c = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
    let h;
    h = null !== n ? n.getContextAttributes().alpha : void 0 !== t.alpha && t.alpha;
    let u = null, d = null;
    const p = [], f = [];
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, 
    this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, 
    this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, 
    this.toneMappingExposure = 1;
    const m = this;
    let g = !1, _ = 0, v = 0, x = null, y = -1, M = null;
    const b = new tt, S = new tt;
    let w = null, T = e.width, E = e.height, A = 1, L = null, R = null;
    const P = new tt(0, 0, T, E), I = new tt(0, 0, T, E);
    let N = !1;
    const O = new fn;
    let U = !1, F = !1, B = null;
    const k = new Ot, V = new D, H = new at, G = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function W() {
        return null === x ? A : 1;
    }
    let j, q, X, Y, Z, J, K, Q, $, nt, it, rt, st, ot, lt, ct, ht, ut, dt, pt, ft, mt, gt, _t, vt = n;
    function xt(t, n) {
        for (let i = 0; i < t.length; i++) {
            const r = t[i], a = e.getContext(r, n);
            if (null !== a) return a;
        }
        return null;
    }
    try {
        const t = {
            alpha: !0,
            depth: i,
            stencil: r,
            antialias: a,
            premultipliedAlpha: s,
            preserveDrawingBuffer: o,
            powerPreference: l,
            failIfMajorPerformanceCaveat: c
        };
        if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r148"), e.addEventListener("webglcontextlost", bt, !1), 
        e.addEventListener("webglcontextrestored", St, !1), e.addEventListener("webglcontextcreationerror", wt, !1), 
        null === vt) {
            const e = [ "webgl2", "webgl", "experimental-webgl" ];
            if (!0 === m.isWebGL1Renderer && e.shift(), vt = xt(e, t), null === vt) throw xt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
        void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            };
        });
    } catch (t) {
        throw console.error("THREE.WebGLRenderer: " + t.message), t;
    }
    function yt() {
        j = new Gn(vt), q = new Tn(vt, j, t), j.init(q), mt = new Ur(vt, j, q), X = new Or(vt, j, q), 
        Y = new qn, Z = new Mr, J = new zr(vt, j, X, Z, q, mt, Y), K = new An(m), Q = new Hn(m), 
        $ = new gn(vt, q), gt = new Sn(vt, j, $, q), nt = new Wn(vt, $, Y, gt), it = new Jn(vt, nt, $, Y), 
        dt = new Zn(vt, q, J), ct = new En(Z), rt = new yr(m, K, Q, j, q, gt, ct), st = new Wr(m, Z), 
        ot = new Tr, lt = new Pr(j, q), ut = new bn(m, K, Q, X, it, h, s), ht = new Nr(m, it, q), 
        _t = new jr(vt, Y, q, X), pt = new wn(vt, j, Y, q), ft = new jn(vt, j, Y, q), Y.programs = rt.programs, 
        m.capabilities = q, m.extensions = j, m.properties = Z, m.renderLists = ot, m.shadowMap = ht, 
        m.state = X, m.info = Y;
    }
    yt();
    const Mt = new Gr(m, vt);
    function bt(t) {
        t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g = !0;
    }
    function St() {
        console.log("THREE.WebGLRenderer: Context Restored."), g = !1;
        const t = Y.autoReset, e = ht.enabled, n = ht.autoUpdate, i = ht.needsUpdate, r = ht.type;
        yt(), Y.autoReset = t, ht.enabled = e, ht.autoUpdate = n, ht.needsUpdate = i, ht.type = r;
    }
    function wt(t) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage);
    }
    function Tt(t) {
        const e = t.target;
        e.removeEventListener("dispose", Tt), function(t) {
            (function(t) {
                const e = Z.get(t).programs;
                void 0 !== e && (e.forEach((function(t) {
                    rt.releaseProgram(t);
                })), t.isShaderMaterial && rt.releaseShaderCache(t));
            })(t), Z.remove(t);
        }(e);
    }
    this.xr = Mt, this.getContext = function() {
        return vt;
    }, this.getContextAttributes = function() {
        return vt.getContextAttributes();
    }, this.forceContextLoss = function() {
        const t = j.get("WEBGL_lose_context");
        t && t.loseContext();
    }, this.forceContextRestore = function() {
        const t = j.get("WEBGL_lose_context");
        t && t.restoreContext();
    }, this.getPixelRatio = function() {
        return A;
    }, this.setPixelRatio = function(t) {
        void 0 !== t && (A = t, this.setSize(T, E, !1));
    }, this.getSize = function(t) {
        return t.set(T, E);
    }, this.setSize = function(t, n, i) {
        Mt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (T = t, 
        E = n, e.width = Math.floor(t * A), e.height = Math.floor(n * A), !1 !== i && (e.style.width = t + "px", 
        e.style.height = n + "px"), this.setViewport(0, 0, t, n));
    }, this.getDrawingBufferSize = function(t) {
        return t.set(T * A, E * A).floor();
    }, this.setDrawingBufferSize = function(t, n, i) {
        T = t, E = n, A = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), 
        this.setViewport(0, 0, t, n);
    }, this.getCurrentViewport = function(t) {
        return t.copy(b);
    }, this.getViewport = function(t) {
        return t.copy(P);
    }, this.setViewport = function(t, e, n, i) {
        t.isVector4 ? P.set(t.x, t.y, t.z, t.w) : P.set(t, e, n, i), X.viewport(b.copy(P).multiplyScalar(A).floor());
    }, this.getScissor = function(t) {
        return t.copy(I);
    }, this.setScissor = function(t, e, n, i) {
        t.isVector4 ? I.set(t.x, t.y, t.z, t.w) : I.set(t, e, n, i), X.scissor(S.copy(I).multiplyScalar(A).floor());
    }, this.getScissorTest = function() {
        return N;
    }, this.setScissorTest = function(t) {
        X.setScissorTest(N = t);
    }, this.setOpaqueSort = function(t) {
        L = t;
    }, this.setTransparentSort = function(t) {
        R = t;
    }, this.getClearColor = function(t) {
        return t.copy(ut.getClearColor());
    }, this.setClearColor = function() {
        ut.setClearColor.apply(ut, arguments);
    }, this.getClearAlpha = function() {
        return ut.getClearAlpha();
    }, this.setClearAlpha = function() {
        ut.setClearAlpha.apply(ut, arguments);
    }, this.clear = function(t = !0, e = !0, n = !0) {
        let i = 0;
        t && (i |= 16384), e && (i |= 256), n && (i |= 1024), vt.clear(i);
    }, this.clearColor = function() {
        this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0);
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", bt, !1), e.removeEventListener("webglcontextrestored", St, !1), 
        e.removeEventListener("webglcontextcreationerror", wt, !1), ot.dispose(), lt.dispose(), 
        Z.dispose(), K.dispose(), Q.dispose(), it.dispose(), gt.dispose(), _t.dispose(), 
        rt.dispose(), Mt.dispose(), Mt.removeEventListener("sessionstart", At), Mt.removeEventListener("sessionend", Ct), 
        B && (B.dispose(), B = null), Lt.stop();
    }, this.renderBufferDirect = function(t, e, n, i, r, a) {
        null === e && (e = G);
        const s = r.isMesh && r.matrixWorld.determinant() < 0, o = function(t, e, n, i, r) {
            !0 !== e.isScene && (e = G);
            J.resetTextureUnits();
            const a = e.fog, s = i.isMeshStandardMaterial ? e.environment : null, o = null === x ? m.outputEncoding : !0 === x.isXRRenderTarget ? x.texture.encoding : 3e3, l = (i.isMeshStandardMaterial ? Q : K).get(i.envMap || s), c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize, h = !!i.normalMap && !!n.attributes.tangent, u = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, f = !!n.morphAttributes.color, g = i.toneMapped ? m.toneMapping : 0, _ = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, v = void 0 !== _ ? _.length : 0, b = Z.get(i), S = d.state.lights;
            if (!0 === U && (!0 === F || t !== M)) {
                const e = t === M && i.id === y;
                ct.setState(i, t, e);
            }
            let w = !1;
            i.version === b.__version ? b.needsLights && b.lightsStateVersion !== S.state.version || b.outputEncoding !== o || r.isInstancedMesh && !1 === b.instancing ? w = !0 : r.isInstancedMesh || !0 !== b.instancing ? r.isSkinnedMesh && !1 === b.skinning ? w = !0 : r.isSkinnedMesh || !0 !== b.skinning ? b.envMap !== l || !0 === i.fog && b.fog !== a ? w = !0 : void 0 === b.numClippingPlanes || b.numClippingPlanes === ct.numPlanes && b.numIntersection === ct.numIntersection ? (b.vertexAlphas !== c || b.vertexTangents !== h || b.morphTargets !== u || b.morphNormals !== p || b.morphColors !== f || b.toneMapping !== g || !0 === q.isWebGL2 && b.morphTargetsCount !== v) && (w = !0) : w = !0 : w = !0 : w = !0 : (w = !0, 
            b.__version = i.version);
            let T = b.currentProgram;
            !0 === w && (T = Nt(i, e, r));
            let C = !1, L = !1, R = !1;
            const P = T.getUniforms(), D = b.uniforms;
            X.useProgram(T.program) && (C = !0, L = !0, R = !0);
            i.id !== y && (y = i.id, L = !0);
            if (C || M !== t) {
                if (P.setValue(vt, "projectionMatrix", t.projectionMatrix), q.logarithmicDepthBuffer && P.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), 
                M !== t && (M = t, L = !0, R = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                    const e = P.map.cameraPosition;
                    void 0 !== e && e.setValue(vt, H.setFromMatrixPosition(t.matrixWorld));
                }
                (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && P.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), 
                (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && P.setValue(vt, "viewMatrix", t.matrixWorldInverse);
            }
            if (r.isSkinnedMesh) {
                P.setOptional(vt, r, "bindMatrix"), P.setOptional(vt, r, "bindMatrixInverse");
                const t = r.skeleton;
                t && (q.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), 
                P.setValue(vt, "boneTexture", t.boneTexture, J), P.setValue(vt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
            }
            const I = n.morphAttributes;
            (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === q.isWebGL2) && dt.update(r, n, i, T);
            (L || b.receiveShadow !== r.receiveShadow) && (b.receiveShadow = r.receiveShadow, 
            P.setValue(vt, "receiveShadow", r.receiveShadow));
            i.isMeshGouraudMaterial && null !== i.envMap && (D.envMap.value = l, D.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
            L && (P.setValue(vt, "toneMappingExposure", m.toneMappingExposure), b.needsLights && (O = R, 
            (N = D).ambientLightColor.needsUpdate = O, N.lightProbe.needsUpdate = O, N.directionalLights.needsUpdate = O, 
            N.directionalLightShadows.needsUpdate = O, N.pointLights.needsUpdate = O, N.pointLightShadows.needsUpdate = O, 
            N.spotLights.needsUpdate = O, N.spotLightShadows.needsUpdate = O, N.rectAreaLights.needsUpdate = O, 
            N.hemisphereLights.needsUpdate = O), a && !0 === i.fog && st.refreshFogUniforms(D, a), 
            st.refreshMaterialUniforms(D, i, A, E, B), tr.upload(vt, b.uniformsList, D, J));
            var N, O;
            i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (tr.upload(vt, b.uniformsList, D, J), 
            i.uniformsNeedUpdate = !1);
            i.isSpriteMaterial && P.setValue(vt, "center", r.center);
            if (P.setValue(vt, "modelViewMatrix", r.modelViewMatrix), P.setValue(vt, "normalMatrix", r.normalMatrix), 
            P.setValue(vt, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
                const t = i.uniformsGroups;
                for (let e = 0, n = t.length; e < n; e++) if (q.isWebGL2) {
                    const n = t[e];
                    _t.update(n, T), _t.bind(n, T);
                } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
            }
            return T;
        }(t, e, n, i, r);
        X.setMaterial(i, s);
        let l = n.index, c = 1;
        !0 === i.wireframe && (l = nt.getWireframeAttribute(n), c = 2);
        const h = n.drawRange, u = n.attributes.position;
        let p = h.start * c, f = (h.start + h.count) * c;
        null !== a && (p = Math.max(p, a.start * c), f = Math.min(f, (a.start + a.count) * c)), 
        null !== l ? (p = Math.max(p, 0), f = Math.min(f, l.count)) : null != u && (p = Math.max(p, 0), 
        f = Math.min(f, u.count));
        const g = f - p;
        if (g < 0 || g === 1 / 0) return;
        let _;
        gt.setup(r, i, o, n, l);
        let v = pt;
        if (null !== l && (_ = $.get(l), v = ft, v.setIndex(_)), r.isMesh) !0 === i.wireframe ? (X.setLineWidth(i.wireframeLinewidth * W()), 
        v.setMode(1)) : v.setMode(4); else if (r.isLine) {
            let t = i.linewidth;
            void 0 === t && (t = 1), X.setLineWidth(t * W()), r.isLineSegments ? v.setMode(1) : r.isLineLoop ? v.setMode(2) : v.setMode(3);
        } else r.isPoints ? v.setMode(0) : r.isSprite && v.setMode(4);
        if (r.isInstancedMesh) v.renderInstances(p, g, r.count); else if (n.isInstancedBufferGeometry) {
            const t = void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0, e = Math.min(n.instanceCount, t);
            v.renderInstances(p, g, e);
        } else v.render(p, g);
    }, this.compile = function(t, e) {
        function n(t, e, n) {
            !0 === t.transparent && 3 === t.side ? (t.side = 1, t.needsUpdate = !0, Nt(t, e, n), 
            t.side = 0, t.needsUpdate = !0, Nt(t, e, n), t.side = 3) : Nt(t, e, n);
        }
        d = lt.get(t), d.init(), f.push(d), t.traverseVisible((function(t) {
            t.isLight && t.layers.test(e.layers) && (d.pushLight(t), t.castShadow && d.pushShadow(t));
        })), d.setupLights(m.physicallyCorrectLights), t.traverse((function(e) {
            const i = e.material;
            if (i) if (Array.isArray(i)) for (let r = 0; r < i.length; r++) {
                n(i[r], t, e);
            } else n(i, t, e);
        })), f.pop(), d = null;
    };
    let Et = null;
    function At() {
        Lt.stop();
    }
    function Ct() {
        Lt.start();
    }
    const Lt = new mn;
    function Rt(t, e, n, i) {
        if (!1 === t.visible) return;
        if (t.layers.test(e.layers)) if (t.isGroup) n = t.renderOrder; else if (t.isLOD) !0 === t.autoUpdate && t.update(e); else if (t.isLight) d.pushLight(t), 
        t.castShadow && d.pushShadow(t); else if (t.isSprite) {
            if (!t.frustumCulled || O.intersectsSprite(t)) {
                i && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
                const e = it.update(t), r = t.material;
                r.visible && u.push(t, e, r, n, H.z, null);
            }
        } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Y.render.frame && (t.skeleton.update(), 
        t.skeleton.frame = Y.render.frame), !t.frustumCulled || O.intersectsObject(t))) {
            i && H.setFromMatrixPosition(t.matrixWorld).applyMatrix4(k);
            const e = it.update(t), r = t.material;
            if (Array.isArray(r)) {
                const i = e.groups;
                for (let a = 0, s = i.length; a < s; a++) {
                    const s = i[a], o = r[s.materialIndex];
                    o && o.visible && u.push(t, e, o, n, H.z, s);
                }
            } else r.visible && u.push(t, e, r, n, H.z, null);
        }
        const r = t.children;
        for (let t = 0, a = r.length; t < a; t++) Rt(r[t], e, n, i);
    }
    function Pt(t, e, n, i) {
        const r = t.opaque, s = t.transmissive, o = t.transparent;
        d.setupLightsView(n), s.length > 0 && function(t, e, n) {
            const i = q.isWebGL2;
            null === B && (B = new et(1, 1, {
                generateMipmaps: !0,
                type: j.has("EXT_color_buffer_half_float") ? 1016 : 1009,
                minFilter: 1008,
                samples: i && !0 === a ? 4 : 0
            }));
            m.getDrawingBufferSize(V), i ? B.setSize(V.x, V.y) : B.setSize(C(V.x), C(V.y));
            const r = m.getRenderTarget();
            m.setRenderTarget(B), m.clear();
            const s = m.toneMapping;
            m.toneMapping = 0, Dt(t, e, n), m.toneMapping = s, J.updateMultisampleRenderTarget(B), 
            J.updateRenderTargetMipmap(B), m.setRenderTarget(r);
        }(r, e, n), i && X.viewport(b.copy(i)), r.length > 0 && Dt(r, e, n), s.length > 0 && Dt(s, e, n), 
        o.length > 0 && Dt(o, e, n), X.buffers.depth.setTest(!0), X.buffers.depth.setMask(!0), 
        X.buffers.color.setMask(!0), X.setPolygonOffset(!1);
    }
    function Dt(t, e, n) {
        const i = !0 === e.isScene ? e.overrideMaterial : null;
        for (let r = 0, a = t.length; r < a; r++) {
            const a = t[r], s = a.object, o = a.geometry, l = null === i ? a.material : i, c = a.group;
            s.layers.test(n.layers) && It(s, e, n, o, l, c);
        }
    }
    function It(t, e, n, i, r, a) {
        t.onBeforeRender(m, e, n, i, r, a), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), 
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(m, e, n, i, t, a), 
        !0 === r.transparent && 3 === r.side ? (r.side = 1, r.needsUpdate = !0, m.renderBufferDirect(n, e, i, r, t, a), 
        r.side = 0, r.needsUpdate = !0, m.renderBufferDirect(n, e, i, r, t, a), r.side = 3) : m.renderBufferDirect(n, e, i, r, t, a), 
        t.onAfterRender(m, e, n, i, r, a);
    }
    function Nt(t, e, n) {
        !0 !== e.isScene && (e = G);
        const i = Z.get(t), r = d.state.lights, a = d.state.shadowsArray, s = r.state.version, o = rt.getParameters(t, r.state, a, e, n), l = rt.getProgramCacheKey(o);
        let c = i.programs;
        i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, 
        i.envMap = (t.isMeshStandardMaterial ? Q : K).get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Tt), 
        c = new Map, i.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === s) return zt(t, o), h;
        } else o.uniforms = rt.getUniforms(t), t.onBuild(n, o, m), t.onBeforeCompile(o, m), 
        h = rt.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
        const u = i.uniforms;
        (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = ct.uniform), 
        zt(t, o), i.needsLights = function(t) {
            return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
        }(t), i.lightsStateVersion = s, i.needsLights && (u.ambientLightColor.value = r.state.ambient, 
        u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, 
        u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, 
        u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, 
        u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, 
        u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, 
        u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, 
        u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, 
        u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, 
        u.pointShadowMatrix.value = r.state.pointShadowMatrix);
        const p = h.getUniforms(), f = tr.seqWithValue(p.seq, u);
        return i.currentProgram = h, i.uniformsList = f, h;
    }
    function zt(t, e) {
        const n = Z.get(t);
        n.outputEncoding = e.outputEncoding, n.instancing = e.instancing, n.skinning = e.skinning, 
        n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, 
        n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, 
        n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, 
        n.toneMapping = e.toneMapping;
    }
    Lt.setAnimationLoop((function(t) {
        Et && Et(t);
    })), "undefined" != typeof self && Lt.setContext(self), this.setAnimationLoop = function(t) {
        Et = t, Mt.setAnimationLoop(t), null === t ? Lt.stop() : Lt.start();
    }, Mt.addEventListener("sessionstart", At), Mt.addEventListener("sessionend", Ct), 
    this.render = function(t, e) {
        if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === g) return;
        !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), 
        !0 === Mt.enabled && !0 === Mt.isPresenting && (!0 === Mt.cameraAutoUpdate && Mt.updateCamera(e), 
        e = Mt.getCamera()), !0 === t.isScene && t.onBeforeRender(m, t, e, x), d = lt.get(t, f.length), 
        d.init(), f.push(d), k.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), 
        O.setFromProjectionMatrix(k), F = this.localClippingEnabled, U = ct.init(this.clippingPlanes, F, e), 
        u = ot.get(t, p.length), u.init(), p.push(u), Rt(t, e, 0, m.sortObjects), u.finish(), 
        !0 === m.sortObjects && u.sort(L, R), !0 === U && ct.beginShadows();
        const n = d.state.shadowsArray;
        if (ht.render(n, t, e), !0 === U && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), 
        ut.render(u, t), d.setupLights(m.physicallyCorrectLights), e.isArrayCamera) {
            const n = e.cameras;
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                Pt(u, t, i, i.viewport);
            }
        } else Pt(u, t, e);
        null !== x && (J.updateMultisampleRenderTarget(x), J.updateRenderTargetMipmap(x)), 
        !0 === t.isScene && t.onAfterRender(m, t, e), gt.resetDefaultState(), y = -1, M = null, 
        f.pop(), d = f.length > 0 ? f[f.length - 1] : null, p.pop(), u = p.length > 0 ? p[p.length - 1] : null;
    }, this.getActiveCubeFace = function() {
        return _;
    }, this.getActiveMipmapLevel = function() {
        return v;
    }, this.getRenderTarget = function() {
        return x;
    }, this.setRenderTargetTextures = function(t, e, n) {
        Z.get(t.texture).__webglTexture = e, Z.get(t.depthTexture).__webglTexture = n;
        const i = Z.get(t);
        i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, 
        i.__autoAllocateDepthBuffer || !0 === j.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), 
        i.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(t, e) {
        const n = Z.get(t);
        n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e;
    }, this.setRenderTarget = function(t, e = 0, n = 0) {
        x = t, _ = e, v = n;
        let i = !0, r = null, a = !1, s = !1;
        if (t) {
            const n = Z.get(t);
            void 0 !== n.__useDefaultFramebuffer ? (X.bindFramebuffer(36160, null), i = !1) : void 0 === n.__webglFramebuffer ? J.setupRenderTarget(t) : n.__hasExternalTextures && J.rebindTextures(t, Z.get(t.texture).__webglTexture, Z.get(t.depthTexture).__webglTexture);
            const o = t.texture;
            (o.isData3DTexture || o.isDataArrayTexture || o.isCompressedArrayTexture) && (s = !0);
            const l = Z.get(t).__webglFramebuffer;
            t.isWebGLCubeRenderTarget ? (r = l[e], a = !0) : r = q.isWebGL2 && t.samples > 0 && !1 === J.useMultisampledRTT(t) ? Z.get(t).__webglMultisampledFramebuffer : l, 
            b.copy(t.viewport), S.copy(t.scissor), w = t.scissorTest;
        } else b.copy(P).multiplyScalar(A).floor(), S.copy(I).multiplyScalar(A).floor(), 
        w = N;
        if (X.bindFramebuffer(36160, r) && q.drawBuffers && i && X.drawBuffers(t, r), X.viewport(b), 
        X.scissor(S), X.setScissorTest(w), a) {
            const i = Z.get(t.texture);
            vt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n);
        } else if (s) {
            const i = Z.get(t.texture), r = e || 0;
            vt.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
        }
        y = -1;
    }, this.readRenderTargetPixels = function(t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o = Z.get(t).__webglFramebuffer;
        if (t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
            X.bindFramebuffer(36160, o);
            try {
                const s = t.texture, o = s.format, l = s.type;
                if (1023 !== o && mt.convert(o) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c = 1016 === l && (j.has("EXT_color_buffer_half_float") || q.isWebGL2 && j.has("EXT_color_buffer_float"));
                if (!(1009 === l || mt.convert(l) === vt.getParameter(35738) || 1015 === l && (q.isWebGL2 || j.has("OES_texture_float") || j.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && vt.readPixels(e, n, i, r, mt.convert(o), mt.convert(l), a);
            } finally {
                const t = null !== x ? Z.get(x).__webglFramebuffer : null;
                X.bindFramebuffer(36160, t);
            }
        }
    }, this.copyFramebufferToTexture = function(t, e, n = 0) {
        const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), a = Math.floor(e.image.height * i);
        J.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, a), X.unbindTexture();
    }, this.copyTextureToTexture = function(t, e, n, i = 0) {
        const r = e.image.width, a = e.image.height, s = mt.convert(n.format), o = mt.convert(n.type);
        J.setTexture2D(n, 0), vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), 
        vt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, i, t.x, t.y, r, a, s, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : vt.texSubImage2D(3553, i, t.x, t.y, s, o, e.image), 
        0 === i && n.generateMipmaps && vt.generateMipmap(3553), X.unbindTexture();
    }, this.copyTextureToTexture3D = function(t, e, n, i, r = 0) {
        if (m.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const a = t.max.x - t.min.x + 1, s = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = mt.convert(i.format), c = mt.convert(i.type);
        let h;
        if (i.isData3DTexture) J.setTexture3D(i, 0), h = 32879; else {
            if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            J.setTexture2DArray(i, 0), h = 35866;
        }
        vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment);
        const u = vt.getParameter(3314), d = vt.getParameter(32878), p = vt.getParameter(3316), f = vt.getParameter(3315), g = vt.getParameter(32877), _ = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        vt.pixelStorei(3314, _.width), vt.pixelStorei(32878, _.height), vt.pixelStorei(3316, t.min.x), 
        vt.pixelStorei(3315, t.min.y), vt.pixelStorei(32877, t.min.z), n.isDataTexture || n.isData3DTexture ? vt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, _.data) : n.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), 
        vt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, _.data)) : vt.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, _), 
        vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, p), vt.pixelStorei(3315, f), 
        vt.pixelStorei(32877, g), 0 === r && i.generateMipmaps && vt.generateMipmap(h), 
        X.unbindTexture();
    }, this.initTexture = function(t) {
        t.isCubeTexture ? J.setTextureCube(t, 0) : t.isData3DTexture ? J.setTexture3D(t, 0) : t.isDataArrayTexture || t.isCompressedArrayTexture ? J.setTexture2DArray(t, 0) : J.setTexture2D(t, 0), 
        X.unbindTexture();
    }, this.resetState = function() {
        _ = 0, v = 0, x = null, X.reset(), gt.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }));
}

(class extends qr {}).prototype.isWebGL1Renderer = !0;

class Xr extends se {
    constructor() {
        super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, 
        this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, 
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    copy(t, e) {
        return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), 
        null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), 
        this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, 
        null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), 
        this.matrixAutoUpdate = t.matrixAutoUpdate, this;
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.backgroundBlurriness = this.backgroundBlurriness), 
        1 !== this.backgroundIntensity && (e.backgroundIntensity = this.backgroundIntensity), 
        e;
    }
    get autoUpdate() {
        return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), 
        this.matrixWorldAutoUpdate;
    }
    set autoUpdate(t) {
        console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), 
        this.matrixWorldAutoUpdate = t;
    }
}

class Yr {
    constructor(t, e) {
        this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, 
        this.usage = 35044, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = b();
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        !0 === t && this.version++;
    }
    setUsage(t) {
        return this.usage = t, this;
    }
    copy(t) {
        return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, 
        this.usage = t.usage, this;
    }
    copyAt(t, e, n) {
        t *= this.stride, n *= e.stride;
        for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
        return this;
    }
    set(t, e = 0) {
        return this.array.set(t, e), this;
    }
    clone(t) {
        void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = b()), 
        void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
        return n.setUsage(this.usage), n;
    }
    onUpload(t) {
        return this.onUploadCallback = t, this;
    }
    toJSON(t) {
        return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = b()), 
        void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), 
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        };
    }
}

const Zr = new at;

class Jr {
    constructor(t, e, n, i = !1) {
        this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, 
        this.offset = n, this.normalized = i;
    }
    get count() {
        return this.data.count;
    }
    get array() {
        return this.data.array;
    }
    set needsUpdate(t) {
        this.data.needsUpdate = t;
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.data.count; e < n; e++) Zr.fromBufferAttribute(this, e), 
        Zr.applyMatrix4(t), this.setXYZ(e, Zr.x, Zr.y, Zr.z);
        return this;
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++) Zr.fromBufferAttribute(this, e), Zr.applyNormalMatrix(t), 
        this.setXYZ(e, Zr.x, Zr.y, Zr.z);
        return this;
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++) Zr.fromBufferAttribute(this, e), Zr.transformDirection(t), 
        this.setXYZ(e, Zr.x, Zr.y, Zr.z);
        return this;
    }
    setX(t, e) {
        return this.normalized && (e = R(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, 
        this;
    }
    setY(t, e) {
        return this.normalized && (e = R(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, 
        this;
    }
    setZ(t, e) {
        return this.normalized && (e = R(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, 
        this;
    }
    setW(t, e) {
        return this.normalized && (e = R(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, 
        this;
    }
    getX(t) {
        let e = this.data.array[t * this.data.stride + this.offset];
        return this.normalized && (e = L(e, this.array)), e;
    }
    getY(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 1];
        return this.normalized && (e = L(e, this.array)), e;
    }
    getZ(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 2];
        return this.normalized && (e = L(e, this.array)), e;
    }
    getW(t) {
        let e = this.data.array[t * this.data.stride + this.offset + 3];
        return this.normalized && (e = L(e, this.array)), e;
    }
    setXY(t, e, n) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = R(e, this.array), 
        n = R(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
    }
    setXYZ(t, e, n, i) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = R(e, this.array), 
        n = R(n, this.array), i = R(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, 
        this.data.array[t + 2] = i, this;
    }
    setXYZW(t, e, n, i, r) {
        return t = t * this.data.stride + this.offset, this.normalized && (e = R(e, this.array), 
        n = R(n, this.array), i = R(i, this.array), r = R(r, this.array)), this.data.array[t + 0] = e, 
        this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, 
        this;
    }
    clone(t) {
        if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
            }
            return new Se(new this.array.constructor(t), this.itemSize, this.normalized);
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), 
        new Jr(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
    toJSON(t) {
        if (void 0 === t) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let e = 0; e < this.count; e++) {
                const n = e * this.data.stride + this.offset;
                for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            };
        }
        return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), 
        {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        };
    }
}

const Kr = new at, Qr = new tt, $r = new tt, ta = new at, ea = new Ot;

class na extends Ye {
    constructor(t, e) {
        super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", 
        this.bindMatrix = new Ot, this.bindMatrixInverse = new Ot;
    }
    copy(t, e) {
        return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), 
        this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
    }
    bind(t, e) {
        this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), 
        e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
    }
    pose() {
        this.skeleton.pose();
    }
    normalizeSkinWeights() {
        const t = new tt, e = this.geometry.attributes.skinWeight;
        for (let n = 0, i = e.count; n < i; n++) {
            t.fromBufferAttribute(e, n);
            const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
        }
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
    boneTransform(t, e) {
        const n = this.skeleton, i = this.geometry;
        Qr.fromBufferAttribute(i.attributes.skinIndex, t), $r.fromBufferAttribute(i.attributes.skinWeight, t), 
        Kr.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
        for (let t = 0; t < 4; t++) {
            const i = $r.getComponent(t);
            if (0 !== i) {
                const r = Qr.getComponent(t);
                ea.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(ta.copy(Kr).applyMatrix4(ea), i);
            }
        }
        return e.applyMatrix4(this.bindMatrixInverse);
    }
}

class ia extends se {
    constructor() {
        super(), this.isBone = !0, this.type = "Bone";
    }
}

class ra extends $ {
    constructor(t = null, e = 1, n = 1, i, r, a, s, o, l = 1003, c = 1003, h, u) {
        super(null, a, s, o, l, c, i, r, h, u), this.isDataTexture = !0, this.image = {
            data: t,
            width: e,
            height: n
        }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
    }
}

const aa = new Ot, sa = new Ot;

class oa {
    constructor(t = [], e = []) {
        this.uuid = b(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, 
        this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
    }
    init() {
        const t = this.bones, e = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses(); else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), 
            this.boneInverses = [];
            for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new Ot);
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = new Ot;
            this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
        }
    }
    pose() {
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && e.matrixWorld.copy(this.boneInverses[t]).invert();
        }
        for (let t = 0, e = this.bones.length; t < e; t++) {
            const e = this.bones[t];
            e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), 
            e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
        }
    }
    update() {
        const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
        for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i] ? t[i].matrixWorld : sa;
            aa.multiplyMatrices(r, e[i]), aa.toArray(n, 16 * i);
        }
        null !== i && (i.needsUpdate = !0);
    }
    clone() {
        return new oa(this.bones, this.boneInverses);
    }
    computeBoneTexture() {
        let t = Math.sqrt(4 * this.bones.length);
        t = A(t), t = Math.max(t, 4);
        const e = new Float32Array(t * t * 4);
        e.set(this.boneMatrices);
        const n = new ra(e, t, t, 1023, 1015);
        return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this.boneTextureSize = t, 
        this;
    }
    getBoneByName(t) {
        for (let e = 0, n = this.bones.length; e < n; e++) {
            const n = this.bones[e];
            if (n.name === t) return n;
        }
    }
    dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
    }
    fromJSON(t, e) {
        this.uuid = t.uuid;
        for (let n = 0, i = t.bones.length; n < i; n++) {
            const i = t.bones[n];
            let r = e[i];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new ia), 
            this.bones.push(r), this.boneInverses.push((new Ot).fromArray(t.boneInverses[n]));
        }
        return this.init(), this;
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        t.uuid = this.uuid;
        const e = this.bones, n = this.boneInverses;
        for (let i = 0, r = e.length; i < r; i++) {
            const r = e[i];
            t.bones.push(r.uuid);
            const a = n[i];
            t.boneInverses.push(a.toArray());
        }
        return t;
    }
}

class la extends Se {
    constructor(t, e, n, i = 1) {
        super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
    }
    copy(t) {
        return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
    }
    toJSON() {
        const t = super.toJSON();
        return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, 
        t;
    }
}

const ca = new Ot, ha = new Ot, ua = [], da = new Ot, pa = new Ye;

class fa extends Ye {
    constructor(t, e, n) {
        super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new la(new Float32Array(16 * n), 16), 
        this.instanceColor = null, this.count = n, this.frustumCulled = !1;
        for (let t = 0; t < n; t++) this.setMatrixAt(t, da);
    }
    copy(t, e) {
        return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), 
        this.count = t.count, this;
    }
    getColorAt(t, e) {
        e.fromArray(this.instanceColor.array, 3 * t);
    }
    getMatrixAt(t, e) {
        e.fromArray(this.instanceMatrix.array, 16 * t);
    }
    raycast(t, e) {
        const n = this.matrixWorld, i = this.count;
        if (pa.geometry = this.geometry, pa.material = this.material, void 0 !== pa.material) for (let r = 0; r < i; r++) {
            this.getMatrixAt(r, ca), ha.multiplyMatrices(n, ca), pa.matrixWorld = ha, pa.raycast(t, ua);
            for (let t = 0, n = ua.length; t < n; t++) {
                const n = ua[t];
                n.instanceId = r, n.object = this, e.push(n);
            }
            ua.length = 0;
        }
    }
    setColorAt(t, e) {
        null === this.instanceColor && (this.instanceColor = new la(new Float32Array(3 * this.instanceMatrix.count), 3)), 
        e.toArray(this.instanceColor.array, 3 * t);
    }
    setMatrixAt(t, e) {
        e.toArray(this.instanceMatrix.array, 16 * t);
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        });
    }
}

class ma extends xe {
    constructor(t) {
        super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new X(16777215), 
        this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, 
        this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, 
        this.linejoin = t.linejoin, this.fog = t.fog, this;
    }
}

const ga = new at, _a = new at, va = new Ot, xa = new Nt, ya = new Et;

class Ma extends se {
    constructor(t = new Ne, e = new ma) {
        super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, 
        this.updateMorphTargets();
    }
    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, 
        this;
    }
    computeLineDistances() {
        const t = this.geometry;
        if (null === t.index) {
            const e = t.attributes.position, n = [ 0 ];
            for (let t = 1, i = e.count; t < i; t++) ga.fromBufferAttribute(e, t - 1), _a.fromBufferAttribute(e, t), 
            n[t] = n[t - 1], n[t] += ga.distanceTo(_a);
            t.setAttribute("lineDistance", new Ee(n, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this;
    }
    raycast(t, e) {
        const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), ya.copy(n.boundingSphere), 
        ya.applyMatrix4(i), ya.radius += r, !1 === t.ray.intersectsSphere(ya)) return;
        va.copy(i).invert(), xa.copy(t.ray).applyMatrix4(va);
        const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, l = new at, c = new at, h = new at, u = new at, d = this.isLineSegments ? 2 : 1, p = n.index, f = n.attributes.position;
        if (null !== p) {
            for (let n = Math.max(0, a.start), i = Math.min(p.count, a.start + a.count) - 1; n < i; n += d) {
                const i = p.getX(n), r = p.getX(n + 1);
                l.fromBufferAttribute(f, i), c.fromBufferAttribute(f, r);
                if (xa.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const a = t.ray.origin.distanceTo(u);
                a < t.near || a > t.far || e.push({
                    distance: a,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        } else {
            for (let n = Math.max(0, a.start), i = Math.min(f.count, a.start + a.count) - 1; n < i; n += d) {
                l.fromBufferAttribute(f, n), c.fromBufferAttribute(f, n + 1);
                if (xa.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const i = t.ray.origin.distanceTo(u);
                i < t.near || i > t.far || e.push({
                    distance: i,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes, e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        }
    }
}

const ba = new at, Sa = new at;

class wa extends Ma {
    constructor(t, e) {
        super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
    }
    computeLineDistances() {
        const t = this.geometry;
        if (null === t.index) {
            const e = t.attributes.position, n = [];
            for (let t = 0, i = e.count; t < i; t += 2) ba.fromBufferAttribute(e, t), Sa.fromBufferAttribute(e, t + 1), 
            n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + ba.distanceTo(Sa);
            t.setAttribute("lineDistance", new Ee(n, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this;
    }
}

class Ta extends Ma {
    constructor(t, e) {
        super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
    }
}

class Ea extends xe {
    constructor(t) {
        super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new X(16777215), 
        this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, 
        this.fog = !0, this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, 
        this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, 
        this;
    }
}

const Aa = new Ot, Ca = new Nt, La = new Et, Ra = new at;

class Pa extends se {
    constructor(t = new Ne, e = new Ea) {
        super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, 
        this.updateMorphTargets();
    }
    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, 
        this;
    }
    raycast(t, e) {
        const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(), La.copy(n.boundingSphere), 
        La.applyMatrix4(i), La.radius += r, !1 === t.ray.intersectsSphere(La)) return;
        Aa.copy(i).invert(), Ca.copy(t.ray).applyMatrix4(Aa);
        const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, l = n.index, c = n.attributes.position;
        if (null !== l) {
            for (let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count); n < r; n++) {
                const r = l.getX(n);
                Ra.fromBufferAttribute(c, r), Da(Ra, r, o, i, t, e, this);
            }
        } else {
            for (let n = Math.max(0, a.start), r = Math.min(c.count, a.start + a.count); n < r; n++) Ra.fromBufferAttribute(c, n), 
            Da(Ra, n, o, i, t, e, this);
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes, e = Object.keys(t);
        if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t = 0, e = n.length; t < e; t++) {
                    const e = n[t].name || String(t);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                }
            }
        }
    }
}

function Da(t, e, n, i, r, a, s) {
    const o = Ca.distanceSqToPoint(t);
    if (o < n) {
        const n = new at;
        Ca.closestPointToPoint(t, n), n.applyMatrix4(i);
        const l = r.ray.origin.distanceTo(n);
        if (l < r.near || l > r.far) return;
        a.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: s
        });
    }
}

class Ia extends xe {
    constructor(t) {
        super(), this.isMeshStandardMaterial = !0, this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new X(16777215), this.roughness = 1, 
        this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, 
        this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, 
        this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, 
        this.normalMapType = 0, this.normalScale = new D(1, 1), this.displacementMap = null, 
        this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, 
        this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, 
        this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", 
        this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, 
        this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, 
        this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), 
        this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, 
        this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, 
        this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, 
        this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, 
        this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, 
        this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, 
        this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, 
        this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, 
        this.fog = t.fog, this;
    }
}

class Na extends Ia {
    constructor(t) {
        super(), this.isMeshPhysicalMaterial = !0, this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, 
        this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new D(1, 1), this.clearcoatNormalMap = null, 
        this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
                return S(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t);
            }
        }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [ 100, 400 ], 
        this.iridescenceThicknessMap = null, this.sheenColor = new X(0), this.sheenColorMap = null, 
        this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, 
        this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, 
        this.attenuationColor = new X(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, 
        this.specularColor = new X(1, 1, 1), this.specularColorMap = null, this._sheen = 0, 
        this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t);
    }
    get sheen() {
        return this._sheen;
    }
    set sheen(t) {
        this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
    }
    get clearcoat() {
        return this._clearcoat;
    }
    set clearcoat(t) {
        this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
    }
    get iridescence() {
        return this._iridescence;
    }
    set iridescence(t) {
        this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
    }
    get transmission() {
        return this._transmission;
    }
    set transmission(t) {
        this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
    }
    copy(t) {
        return super.copy(t), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, 
        this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, 
        this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, 
        this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, 
        this.iridescenceThicknessRange = [ ...t.iridescenceThicknessRange ], this.iridescenceThicknessMap = t.iridescenceThicknessMap, 
        this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, 
        this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, 
        this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, 
        this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, 
        this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, 
        this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), 
        this.specularColorMap = t.specularColorMap, this;
    }
}

class Oa extends xe {
    constructor(t) {
        super(), this.isMeshToonMaterial = !0, this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new X(16777215), this.map = null, 
        this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, 
        this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, 
        this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, 
        this.normalScale = new D(1, 1), this.displacementMap = null, this.displacementScale = 1, 
        this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, 
        this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, 
        this.setValues(t);
    }
    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, 
        this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, 
        this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, 
        this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, 
        this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), 
        this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, 
        this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, 
        this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, 
        this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
    }
}

function za(t, e, n) {
    return Fa(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n);
}

function Ua(t, e, n) {
    return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
}

function Fa(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}

function Ba(t) {
    const e = t.length, n = new Array(e);
    for (let t = 0; t !== e; ++t) n[t] = t;
    return n.sort((function(e, n) {
        return t[e] - t[n];
    })), n;
}

function ka(t, e, n) {
    const i = t.length, r = new t.constructor(i);
    for (let a = 0, s = 0; s !== i; ++a) {
        const i = n[a] * e;
        for (let n = 0; n !== e; ++n) r[s++] = t[i + n];
    }
    return r;
}

function Va(t, e, n, i) {
    let r = 1, a = t[0];
    for (;void 0 !== a && void 0 === a[i]; ) a = t[r++];
    if (void 0 === a) return;
    let s = a[i];
    if (void 0 !== s) if (Array.isArray(s)) do {
        s = a[i], void 0 !== s && (e.push(a.time), n.push.apply(n, s)), a = t[r++];
    } while (void 0 !== a); else if (void 0 !== s.toArray) do {
        s = a[i], void 0 !== s && (e.push(a.time), s.toArray(n, n.length)), a = t[r++];
    } while (void 0 !== a); else do {
        s = a[i], void 0 !== s && (e.push(a.time), n.push(s)), a = t[r++];
    } while (void 0 !== a);
}

class Ha {
    constructor(t, e, n, i) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), 
        this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t) {
        const e = this.parameterPositions;
        let n = this._cachedIndex, i = e[n], r = e[n - 1];
        t: {
            e: {
                let a;
                n: {
                    i: if (!(t < i)) {
                        for (let a = n + 2; ;) {
                            if (void 0 === i) {
                                if (t < r) break i;
                                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                            }
                            if (n === a) break;
                            if (r = i, i = e[++n], t < i) break e;
                        }
                        a = e.length;
                        break n;
                    }
                    if (t >= r) break t;
                    {
                        const s = e[1];
                        t < s && (n = 2, r = s);
                        for (let a = n - 2; ;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                            if (n === a) break;
                            if (i = r, r = e[--n - 1], t >= r) break e;
                        }
                        a = n, n = 0;
                    }
                }
                for (;n < a; ) {
                    const i = n + a >>> 1;
                    t < e[i] ? a = i : n = i + 1;
                }
                if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (void 0 === i) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
            }
            this._cachedIndex = n, this.intervalChanged_(n, r, i);
        }
        return this.interpolate_(n, r, t, i);
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
        const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
        for (let t = 0; t !== i; ++t) e[t] = n[r + t];
        return e;
    }
    interpolate_() {
        throw new Error("call to abstract method");
    }
    intervalChanged_() {}
}

class Ga extends Ha {
    constructor(t, e, n, i) {
        super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, 
        this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: 2400,
            endingEnd: 2400
        };
    }
    intervalChanged_(t, e, n) {
        const i = this.parameterPositions;
        let r = t - 2, a = t + 1, s = i[r], o = i[a];
        if (void 0 === s) switch (this.getSettings_().endingStart) {
          case 2401:
            r = t, s = 2 * e - n;
            break;

          case 2402:
            r = i.length - 2, s = e + i[r] - i[r + 1];
            break;

          default:
            r = t, s = n;
        }
        if (void 0 === o) switch (this.getSettings_().endingEnd) {
          case 2401:
            a = t, o = 2 * n - e;
            break;

          case 2402:
            a = 1, o = n + i[1] - i[0];
            break;

          default:
            a = t - 1, o = e;
        }
        const l = .5 * (n - e), c = this.valueSize;
        this._weightPrev = l / (e - s), this._weightNext = l / (o - n), this._offsetPrev = r * c, 
        this._offsetNext = a * c;
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = t * s, l = o - s, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, v = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f;
        for (let t = 0; t !== s; ++t) r[t] = g * a[c + t] + _ * a[l + t] + v * a[o + t] + x * a[h + t];
        return r;
    }
}

class Wa extends Ha {
    constructor(t, e, n, i) {
        super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = t * s, l = o - s, c = (n - e) / (i - e), h = 1 - c;
        for (let t = 0; t !== s; ++t) r[t] = a[l + t] * h + a[o + t] * c;
        return r;
    }
}

class ja extends Ha {
    constructor(t, e, n, i) {
        super(t, e, n, i);
    }
    interpolate_(t) {
        return this.copySampleValue_(t - 1);
    }
}

class qa {
    constructor(t, e, n, i) {
        if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t, this.times = Ua(e, this.TimeBufferType), this.values = Ua(n, this.ValueBufferType), 
        this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t) {
        const e = t.constructor;
        let n;
        if (e.toJSON !== this.toJSON) n = e.toJSON(t); else {
            n = {
                name: t.name,
                times: Ua(t.times, Array),
                values: Ua(t.values, Array)
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e);
        }
        return n.type = t.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(t) {
        return new ja(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
        return new Wa(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
        return new Ga(this.times, this.values, this.getValueSize(), t);
    }
    setInterpolation(t) {
        let e;
        switch (t) {
          case 2300:
            e = this.InterpolantFactoryMethodDiscrete;
            break;

          case 2301:
            e = this.InterpolantFactoryMethodLinear;
            break;

          case 2302:
            e = this.InterpolantFactoryMethodSmooth;
        }
        if (void 0 === e) {
            const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (t === this.DefaultInterpolation) throw new Error(e);
                this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", e), this;
        }
        return this.createInterpolant = e, this;
    }
    getInterpolation() {
        switch (this.createInterpolant) {
          case this.InterpolantFactoryMethodDiscrete:
            return 2300;

          case this.InterpolantFactoryMethodLinear:
            return 2301;

          case this.InterpolantFactoryMethodSmooth:
            return 2302;
        }
    }
    getValueSize() {
        return this.values.length / this.times.length;
    }
    shift(t) {
        if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
        }
        return this;
    }
    scale(t) {
        if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
        }
        return this;
    }
    trim(t, e) {
        const n = this.times, i = n.length;
        let r = 0, a = i - 1;
        for (;r !== i && n[r] < t; ) ++r;
        for (;-1 !== a && n[a] > e; ) --a;
        if (++a, 0 !== r || a !== i) {
            r >= a && (a = Math.max(a, 1), r = a - 1);
            const t = this.getValueSize();
            this.times = za(n, r, a), this.values = za(this.values, r * t, a * t);
        }
        return this;
    }
    validate() {
        let t = !0;
        const e = this.getValueSize();
        e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), 
        t = !1);
        const n = this.times, i = this.values, r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
        let a = null;
        for (let e = 0; e !== r; e++) {
            const i = n[e];
            if ("number" == typeof i && isNaN(i)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
                break;
            }
            if (null !== a && a > i) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, a), t = !1;
                break;
            }
            a = i;
        }
        if (void 0 !== i && Fa(i)) for (let e = 0, n = i.length; e !== n; ++e) {
            const n = i[e];
            if (isNaN(n)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), 
                t = !1;
                break;
            }
        }
        return t;
    }
    optimize() {
        const t = za(this.times), e = za(this.values), n = this.getValueSize(), i = 2302 === this.getInterpolation(), r = t.length - 1;
        let a = 1;
        for (let s = 1; s < r; ++s) {
            let r = !1;
            const o = t[s];
            if (o !== t[s + 1] && (1 !== s || o !== t[0])) if (i) r = !0; else {
                const t = s * n, i = t - n, a = t + n;
                for (let s = 0; s !== n; ++s) {
                    const n = e[t + s];
                    if (n !== e[i + s] || n !== e[a + s]) {
                        r = !0;
                        break;
                    }
                }
            }
            if (r) {
                if (s !== a) {
                    t[a] = t[s];
                    const i = s * n, r = a * n;
                    for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
                }
                ++a;
            }
        }
        if (r > 0) {
            t[a] = t[r];
            for (let t = r * n, i = a * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
            ++a;
        }
        return a !== t.length ? (this.times = za(t, 0, a), this.values = za(e, 0, a * n)) : (this.times = t, 
        this.values = e), this;
    }
    clone() {
        const t = za(this.times, 0), e = za(this.values, 0), n = new (0, this.constructor)(this.name, t, e);
        return n.createInterpolant = this.createInterpolant, n;
    }
}

qa.prototype.TimeBufferType = Float32Array, qa.prototype.ValueBufferType = Float32Array, 
qa.prototype.DefaultInterpolation = 2301;

class Xa extends qa {}

Xa.prototype.ValueTypeName = "bool", Xa.prototype.ValueBufferType = Array, Xa.prototype.DefaultInterpolation = 2300, 
Xa.prototype.InterpolantFactoryMethodLinear = void 0, Xa.prototype.InterpolantFactoryMethodSmooth = void 0;

class Ya extends qa {}

Ya.prototype.ValueTypeName = "color";

class Za extends qa {}

Za.prototype.ValueTypeName = "number";

class Ja extends Ha {
    constructor(t, e, n, i) {
        super(t, e, n, i);
    }
    interpolate_(t, e, n, i) {
        const r = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = (n - e) / (i - e);
        let l = t * s;
        for (let t = l + s; l !== t; l += 4) rt.slerpFlat(r, 0, a, l - s, a, l, o);
        return r;
    }
}

class Ka extends qa {
    InterpolantFactoryMethodLinear(t) {
        return new Ja(this.times, this.values, this.getValueSize(), t);
    }
}

Ka.prototype.ValueTypeName = "quaternion", Ka.prototype.DefaultInterpolation = 2301, 
Ka.prototype.InterpolantFactoryMethodSmooth = void 0;

class Qa extends qa {}

Qa.prototype.ValueTypeName = "string", Qa.prototype.ValueBufferType = Array, Qa.prototype.DefaultInterpolation = 2300, 
Qa.prototype.InterpolantFactoryMethodLinear = void 0, Qa.prototype.InterpolantFactoryMethodSmooth = void 0;

class $a extends qa {}

$a.prototype.ValueTypeName = "vector";

class ts {
    constructor(t, e = -1, n, i = 2500) {
        this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = b(), 
        this.duration < 0 && this.resetDuration();
    }
    static parse(t) {
        const e = [], n = t.tracks, i = 1 / (t.fps || 1);
        for (let t = 0, r = n.length; t !== r; ++t) e.push(es(n[t]).scale(i));
        const r = new this(t.name, t.duration, e, t.blendMode);
        return r.uuid = t.uuid, r;
    }
    static toJSON(t) {
        const e = [], n = t.tracks, i = {
            name: t.name,
            duration: t.duration,
            tracks: e,
            uuid: t.uuid,
            blendMode: t.blendMode
        };
        for (let t = 0, i = n.length; t !== i; ++t) e.push(qa.toJSON(n[t]));
        return i;
    }
    static CreateFromMorphTargetSequence(t, e, n, i) {
        const r = e.length, a = [];
        for (let t = 0; t < r; t++) {
            let s = [], o = [];
            s.push((t + r - 1) % r, t, (t + 1) % r), o.push(0, 1, 0);
            const l = Ba(s);
            s = ka(s, 1, l), o = ka(o, 1, l), i || 0 !== s[0] || (s.push(r), o.push(o[0])), 
            a.push(new Za(".morphTargetInfluences[" + e[t].name + "]", s, o).scale(1 / n));
        }
        return new this(t, -1, a);
    }
    static findByName(t, e) {
        let n = t;
        if (!Array.isArray(t)) {
            const e = t;
            n = e.geometry && e.geometry.animations || e.animations;
        }
        for (let t = 0; t < n.length; t++) if (n[t].name === e) return n[t];
        return null;
    }
    static CreateClipsFromMorphTargetSequences(t, e, n) {
        const i = {}, r = /^([\w-]*?)([\d]+)$/;
        for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e], a = n.name.match(r);
            if (a && a.length > 1) {
                const t = a[1];
                let e = i[t];
                e || (i[t] = e = []), e.push(n);
            }
        }
        const a = [];
        for (const t in i) a.push(this.CreateFromMorphTargetSequence(t, i[t], e, n));
        return a;
    }
    static parseAnimation(t, e) {
        if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), 
        null;
        const n = function(t, e, n, i, r) {
            if (0 !== n.length) {
                const a = [], s = [];
                Va(n, a, s, i), 0 !== a.length && r.push(new t(e, a, s));
            }
        }, i = [], r = t.name || "default", a = t.fps || 30, s = t.blendMode;
        let o = t.length || -1;
        const l = t.hierarchy || [];
        for (let t = 0; t < l.length; t++) {
            const r = l[t].keys;
            if (r && 0 !== r.length) if (r[0].morphTargets) {
                const t = {};
                let e;
                for (e = 0; e < r.length; e++) if (r[e].morphTargets) for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
                for (const n in t) {
                    const t = [], a = [];
                    for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                        const i = r[e];
                        t.push(i.time), a.push(i.morphTarget === n ? 1 : 0);
                    }
                    i.push(new Za(".morphTargetInfluence[" + n + "]", t, a));
                }
                o = t.length * a;
            } else {
                const a = ".bones[" + e[t].name + "]";
                n($a, a + ".position", r, "pos", i), n(Ka, a + ".quaternion", r, "rot", i), n($a, a + ".scale", r, "scl", i);
            }
        }
        if (0 === i.length) return null;
        return new this(r, o, i, s);
    }
    resetDuration() {
        let t = 0;
        for (let e = 0, n = this.tracks.length; e !== n; ++e) {
            const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1]);
        }
        return this.duration = t, this;
    }
    trim() {
        for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
        return this;
    }
    validate() {
        let t = !0;
        for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
        return t;
    }
    optimize() {
        for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
        return this;
    }
    clone() {
        const t = [];
        for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
        return new this.constructor(this.name, this.duration, t, this.blendMode);
    }
    toJSON() {
        return this.constructor.toJSON(this);
    }
}

function es(t) {
    if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = function(t) {
        switch (t.toLowerCase()) {
          case "scalar":
          case "double":
          case "float":
          case "number":
          case "integer":
            return Za;

          case "vector":
          case "vector2":
          case "vector3":
          case "vector4":
            return $a;

          case "color":
            return Ya;

          case "quaternion":
            return Ka;

          case "bool":
          case "boolean":
            return Xa;

          case "string":
            return Qa;
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
    }(t.type);
    if (void 0 === t.times) {
        const e = [], n = [];
        Va(t.keys, e, n, "value"), t.times = e, t.values = n;
    }
    return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation);
}

const ns = {
    enabled: !1,
    files: {},
    add: function(t, e) {
        !1 !== this.enabled && (this.files[t] = e);
    },
    get: function(t) {
        if (!1 !== this.enabled) return this.files[t];
    },
    remove: function(t) {
        delete this.files[t];
    },
    clear: function() {
        this.files = {};
    }
};

class is {
    constructor(t, e, n) {
        const i = this;
        let r, a = !1, s = 0, o = 0;
        const l = [];
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
            o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), a = !0;
        }, this.itemEnd = function(t) {
            s++, void 0 !== i.onProgress && i.onProgress(t, s, o), s === o && (a = !1, void 0 !== i.onLoad && i.onLoad());
        }, this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t);
        }, this.resolveURL = function(t) {
            return r ? r(t) : t;
        }, this.setURLModifier = function(t) {
            return r = t, this;
        }, this.addHandler = function(t, e) {
            return l.push(t, e), this;
        }, this.removeHandler = function(t) {
            const e = l.indexOf(t);
            return -1 !== e && l.splice(e, 2), this;
        }, this.getHandler = function(t) {
            for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e], i = l[e + 1];
                if (n.global && (n.lastIndex = 0), n.test(t)) return i;
            }
            return null;
        };
    }
}

const rs = new is;

class as {
    constructor(t) {
        this.manager = void 0 !== t ? t : rs, this.crossOrigin = "anonymous", this.withCredentials = !1, 
        this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {}
    loadAsync(t, e) {
        const n = this;
        return new Promise((function(i, r) {
            n.load(t, i, e, r);
        }));
    }
    parse() {}
    setCrossOrigin(t) {
        return this.crossOrigin = t, this;
    }
    setWithCredentials(t) {
        return this.withCredentials = t, this;
    }
    setPath(t) {
        return this.path = t, this;
    }
    setResourcePath(t) {
        return this.resourcePath = t, this;
    }
    setRequestHeader(t) {
        return this.requestHeader = t, this;
    }
}

const ss = {};

class os extends Error {
    constructor(t, e) {
        super(t), this.response = e;
    }
}

class ls extends as {
    constructor(t) {
        super(t);
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = ns.get(t);
        if (void 0 !== r) return this.manager.itemStart(t), setTimeout((() => {
            e && e(r), this.manager.itemEnd(t);
        }), 0), r;
        if (void 0 !== ss[t]) return void ss[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
        });
        ss[t] = [], ss[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
        });
        const a = new Request(t, {
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        }), s = this.mimeType, o = this.responseType;
        fetch(a).then((e => {
            if (200 === e.status || 0 === e.status) {
                if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), 
                "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
                const n = ss[t], i = e.body.getReader(), r = e.headers.get("Content-Length") || e.headers.get("X-File-Size"), a = r ? parseInt(r) : 0, s = 0 !== a;
                let o = 0;
                const l = new ReadableStream({
                    start(t) {
                        !function e() {
                            i.read().then((({done: i, value: r}) => {
                                if (i) t.close(); else {
                                    o += r.byteLength;
                                    const i = new ProgressEvent("progress", {
                                        lengthComputable: s,
                                        loaded: o,
                                        total: a
                                    });
                                    for (let t = 0, e = n.length; t < e; t++) {
                                        const e = n[t];
                                        e.onProgress && e.onProgress(i);
                                    }
                                    t.enqueue(r), e();
                                }
                            }));
                        }();
                    }
                });
                return new Response(l);
            }
            throw new os(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e);
        })).then((t => {
            switch (o) {
              case "arraybuffer":
                return t.arrayBuffer();

              case "blob":
                return t.blob();

              case "document":
                return t.text().then((t => (new DOMParser).parseFromString(t, s)));

              case "json":
                return t.json();

              default:
                if (void 0 === s) return t.text();
                {
                    const e = /charset="?([^;"\s]*)"?/i.exec(s), n = e && e[1] ? e[1].toLowerCase() : void 0, i = new TextDecoder(n);
                    return t.arrayBuffer().then((t => i.decode(t)));
                }
            }
        })).then((e => {
            ns.add(t, e);
            const n = ss[t];
            delete ss[t];
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onLoad && i.onLoad(e);
            }
        })).catch((e => {
            const n = ss[t];
            if (void 0 === n) throw this.manager.itemError(t), e;
            delete ss[t];
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onError && i.onError(e);
            }
            this.manager.itemError(t);
        })).finally((() => {
            this.manager.itemEnd(t);
        })), this.manager.itemStart(t);
    }
    setResponseType(t) {
        return this.responseType = t, this;
    }
    setMimeType(t) {
        return this.mimeType = t, this;
    }
}

class cs extends as {
    constructor(t) {
        super(t);
    }
    load(t, e, n, i) {
        void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = this, a = ns.get(t);
        if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t);
        }), 0), a;
        const s = z("img");
        function o() {
            c(), ns.add(t, this), e && e(this), r.manager.itemEnd(t);
        }
        function l(e) {
            c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
        }
        function c() {
            s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1);
        }
        return s.addEventListener("load", o, !1), s.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), 
        r.manager.itemStart(t), s.src = t, s;
    }
}

class hs extends as {
    constructor(t) {
        super(t);
    }
    load(t, e, n, i) {
        const r = new $, a = new cs(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, (function(t) {
            r.image = t, r.needsUpdate = !0, void 0 !== e && e(r);
        }), n, i), r;
    }
}

class us extends se {
    constructor(t, e = 1) {
        super(), this.isLight = !0, this.type = "Light", this.color = new X(t), this.intensity = e;
    }
    dispose() {}
    copy(t, e) {
        return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, 
        this;
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, 
        void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), 
        void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), 
        void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), 
        void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
    }
}

const ds = new Ot, ps = new at, fs = new at;

class ms {
    constructor(t) {
        this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, 
        this.mapSize = new D(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ot, 
        this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new fn, this._frameExtents = new D(1, 1), 
        this._viewportCount = 1, this._viewports = [ new tt(0, 0, 1, 1) ];
    }
    getViewportCount() {
        return this._viewportCount;
    }
    getFrustum() {
        return this._frustum;
    }
    updateMatrices(t) {
        const e = this.camera, n = this.matrix;
        ps.setFromMatrixPosition(t.matrixWorld), e.position.copy(ps), fs.setFromMatrixPosition(t.target.matrixWorld), 
        e.lookAt(fs), e.updateMatrixWorld(), ds.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), 
        this._frustum.setFromProjectionMatrix(ds), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), 
        n.multiply(ds);
    }
    getViewport(t) {
        return this._viewports[t];
    }
    getFrameExtents() {
        return this._frameExtents;
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, 
        this.mapSize.copy(t.mapSize), this;
    }
    clone() {
        return (new this.constructor).copy(this);
    }
    toJSON() {
        const t = {};
        return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 
        1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), 
        t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
    }
}

class gs extends ms {
    constructor() {
        super(new rn(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
    }
    updateMatrices(t) {
        const e = this.camera, n = 2 * M * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
        n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, 
        e.updateProjectionMatrix()), super.updateMatrices(t);
    }
    copy(t) {
        return super.copy(t), this.focus = t.focus, this;
    }
}

class _s extends us {
    constructor(t, e, n = 0, i = Math.PI / 3, r = 0, a = 2) {
        super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(se.DefaultUp), 
        this.updateMatrix(), this.target = new se, this.distance = n, this.angle = i, this.penumbra = r, 
        this.decay = a, this.map = null, this.shadow = new gs;
    }
    get power() {
        return this.intensity * Math.PI;
    }
    set power(t) {
        this.intensity = t / Math.PI;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(t, e) {
        return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, 
        this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), 
        this;
    }
}

const vs = new Ot, xs = new at, ys = new at;

class Ms extends ms {
    constructor() {
        super(new rn(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new D(4, 2), 
        this._viewportCount = 6, this._viewports = [ new tt(2, 1, 1, 1), new tt(0, 1, 1, 1), new tt(3, 1, 1, 1), new tt(1, 1, 1, 1), new tt(3, 0, 1, 1), new tt(1, 0, 1, 1) ], 
        this._cubeDirections = [ new at(1, 0, 0), new at(-1, 0, 0), new at(0, 0, 1), new at(0, 0, -1), new at(0, 1, 0), new at(0, -1, 0) ], 
        this._cubeUps = [ new at(0, 1, 0), new at(0, 1, 0), new at(0, 1, 0), new at(0, 1, 0), new at(0, 0, 1), new at(0, 0, -1) ];
    }
    updateMatrices(t, e = 0) {
        const n = this.camera, i = this.matrix, r = t.distance || n.far;
        r !== n.far && (n.far = r, n.updateProjectionMatrix()), xs.setFromMatrixPosition(t.matrixWorld), 
        n.position.copy(xs), ys.copy(n.position), ys.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), 
        n.lookAt(ys), n.updateMatrixWorld(), i.makeTranslation(-xs.x, -xs.y, -xs.z), vs.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), 
        this._frustum.setFromProjectionMatrix(vs);
    }
}

class bs extends us {
    constructor(t, e, n = 0, i = 2) {
        super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, 
        this.decay = i, this.shadow = new Ms;
    }
    get power() {
        return 4 * this.intensity * Math.PI;
    }
    set power(t) {
        this.intensity = t / (4 * Math.PI);
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(t, e) {
        return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), 
        this;
    }
}

class Ss extends ms {
    constructor() {
        super(new Cn(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
    }
}

class ws extends us {
    constructor(t, e) {
        super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(se.DefaultUp), 
        this.updateMatrix(), this.target = new se, this.shadow = new Ss;
    }
    dispose() {
        this.shadow.dispose();
    }
    copy(t) {
        return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), 
        this;
    }
}

class Ts extends us {
    constructor(t, e) {
        super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
    }
}

class Es {
    static decodeText(t) {
        if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
        let e = "";
        for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
        try {
            return decodeURIComponent(escape(e));
        } catch (t) {
            return e;
        }
    }
    static extractUrlBase(t) {
        const e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.slice(0, e + 1);
    }
    static resolveURL(t, e) {
        return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), 
        /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
    }
}

class As extends as {
    constructor(t) {
        super(t), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), 
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), 
        this.options = {
            premultiplyAlpha: "none"
        };
    }
    setOptions(t) {
        return this.options = t, this;
    }
    load(t, e, n, i) {
        void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
        const r = this, a = ns.get(t);
        if (void 0 !== a) return r.manager.itemStart(t), setTimeout((function() {
            e && e(a), r.manager.itemEnd(t);
        }), 0), a;
        const s = {};
        s.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", s.headers = this.requestHeader, 
        fetch(t, s).then((function(t) {
            return t.blob();
        })).then((function(t) {
            return createImageBitmap(t, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }));
        })).then((function(n) {
            ns.add(t, n), e && e(n), r.manager.itemEnd(t);
        })).catch((function(e) {
            i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
        })), r.manager.itemStart(t);
    }
}

const Cs = new RegExp("[\\[\\]\\.:\\/]", "g"), Ls = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Rs = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]") + /(WCOD+)?/.source.replace("WCOD", Ls) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]") + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]") + "$"), Ps = [ "material", "materials", "bones", "map" ];

class Ds {
    constructor(t, e, n) {
        this.path = e, this.parsedPath = n || Ds.parseTrackName(e), this.node = Ds.findNode(t, this.parsedPath.nodeName) || t, 
        this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t, e, n) {
        return t && t.isAnimationObjectGroup ? new Ds.Composite(t, e, n) : new Ds(t, e, n);
    }
    static sanitizeNodeName(t) {
        return t.replace(/\s/g, "_").replace(Cs, "");
    }
    static parseTrackName(t) {
        const e = Rs.exec(t);
        if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
        const n = {
            nodeName: e[2],
            objectName: e[3],
            objectIndex: e[4],
            propertyName: e[5],
            propertyIndex: e[6]
        }, i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1);
            -1 !== Ps.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t);
        }
        if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
        return n;
    }
    static findNode(t, e) {
        if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
        if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n;
        }
        if (t.children) {
            const n = function(t) {
                for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    if (r.name === e || r.uuid === e) return r;
                    const a = n(r.children);
                    if (a) return a;
                }
                return null;
            }, i = n(t.children);
            if (i) return i;
        }
        return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
        t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
    }
    _getValue_arrayElement(t, e) {
        t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
        this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
        this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
        this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_array(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_fromArray(t, e) {
        this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
        this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _getValue_unbound(t, e) {
        this.bind(), this.getValue(t, e);
    }
    _setValue_unbound(t, e) {
        this.bind(), this.setValue(t, e);
    }
    bind() {
        let t = this.node;
        const e = this.parsedPath, n = e.objectName, i = e.propertyName;
        let r = e.propertyIndex;
        if (t || (t = Ds.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), 
        this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, 
        !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        if (n) {
            let i = e.objectIndex;
            switch (n) {
              case "materials":
                if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                t = t.material.materials;
                break;

              case "bones":
                if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++) if (t[e].name === i) {
                    i = e;
                    break;
                }
                break;

              case "map":
                if ("map" in t) {
                    t = t.map;
                    break;
                }
                if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!t.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                t = t.material.map;
                break;

              default:
                if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                t = t[n];
            }
            if (void 0 !== i) {
                if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                t = t[i];
            }
        }
        const a = t[i];
        if (void 0 === a) {
            const n = e.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t);
        }
        let s = this.Versioning.None;
        this.targetObject = t, void 0 !== t.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
        let o = this.BindingType.Direct;
        if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
                if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
            }
            o = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
        } else void 0 !== a.fromArray && void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray, 
        this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray, 
        this.resolvedProperty = a) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][s];
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
}

function Is(t, e) {
    return (t % e + e) % e;
}

function Ns(t, e, n) {
    return Is(t - e, n - e) + e;
}

function Os(t, e, n) {
    return t + n * (e - t);
}

function zs(t, e, n) {
    return (n - t) / (e - t);
}

function Us(t, e, n) {
    return Math.max(e, Math.min(n, t));
}

function Fs(t) {
    return Us(t, 0, 1);
}

function Bs(t, e, n, i, r, a = !0) {
    let s = zs(e, n, t);
    return a && (s = Fs(s)), Os(i, r, s);
}

Ds.Composite = class {
    constructor(t, e, n) {
        const i = n || Ds.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, i);
    }
    getValue(t, e) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
        void 0 !== i && i.getValue(t, e);
    }
    setValue(t, e) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e);
    }
    bind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
    }
    unbind() {
        const t = this._bindings;
        for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
    }
}, Ds.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
}, Ds.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
}, Ds.prototype.GetterByBindingType = [ Ds.prototype._getValue_direct, Ds.prototype._getValue_array, Ds.prototype._getValue_arrayElement, Ds.prototype._getValue_toArray ], 
Ds.prototype.SetterByBindingTypeAndVersioning = [ [ Ds.prototype._setValue_direct, Ds.prototype._setValue_direct_setNeedsUpdate, Ds.prototype._setValue_direct_setMatrixWorldNeedsUpdate ], [ Ds.prototype._setValue_array, Ds.prototype._setValue_array_setNeedsUpdate, Ds.prototype._setValue_array_setMatrixWorldNeedsUpdate ], [ Ds.prototype._setValue_arrayElement, Ds.prototype._setValue_arrayElement_setNeedsUpdate, Ds.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate ], [ Ds.prototype._setValue_fromArray, Ds.prototype._setValue_fromArray_setNeedsUpdate, Ds.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate ] ], 
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: "148"
    }
})), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "148");

const ks = new Map;

function Vs(t, e) {
    try {
        return localStorage.setItem(t, e), !0;
    } catch (n) {
        return ks.set(t, String(e)), !1;
    }
}

function Hs(t) {
    try {
        return localStorage.getItem(t);
    } catch (e) {
        return ks.get(t) || null;
    }
}

function Gs(t, e) {
    return new Promise(((n, i) => {
        const r = new XMLHttpRequest;
        r.responseType = "blob", r.addEventListener("progress", (t => {
            if (e) {
                let n = 0;
                t.lengthComputable && (n = t.loaded / t.total), e(n);
            }
        })), r.onload = e => {
            200 == r.status || 0 == r.status ? n(r.response) : i(new Error(`"${t}" responded with a non ok status code`));
        }, r.onerror = t => {
            i(t);
        }, r.open("GET", t, !0), r.send();
    }));
}

function Ws(t, e) {
    let n = "";
    n += e, t.style.setProperty("--image", `url(${n})`);
}

function* js(t, {skipObjsFn: e = null} = {}) {
    if (!e || e(t)) {
        yield t;
        for (const n of t.children) for (const t of js(n, {
            skipObjsFn: e
        })) yield t;
    }
}

function qs(t, e) {
    return Math.floor(Ys(t, e));
}

function Xs(t, e, n) {
    return n * (e - t) + t;
}

function Ys(t, e) {
    return Xs(t, e, Math.random());
}

function Zs(t) {
    return function(t, e) {
        return t[Math.floor(e * t.length)];
    }(t, Math.random());
}

function Js(t) {
    return function(t, e) {
        let n = 0;
        for (const e of t) n += e.probability;
        const i = Xs(0, n, e);
        let r = 0;
        for (const e of t) if (r += e.probability, r > i) return e.item;
        return null;
    }(t, Math.random());
}

class Ks {
    constructor({returnTransferSupport: t = !1} = {}) {
        this.returnTransferSupport = t, this.lastRequestId = 0, this.sendHandler = null, 
        this.responseHandlers = null, this.onRequestIdMessageCbs = new Map;
    }
    initialize(t, e) {
        t instanceof Worker ? (this.setSendHandler((e => {
            t.postMessage(e.sendData, e.transfer);
        })), t.addEventListener("message", (t => {
            this.handleReceivedMessage(t.data);
        }))) : (this.setSendHandler((e => {
            t.postMessage(e.sendData, {
                transfer: e.transfer
            });
        })), t.addEventListener("message", (t => {
            this.handleReceivedMessage(t.data);
        }))), this.setResponseHandlers(e);
    }
    setSendHandler(t) {
        this.sendHandler = t;
    }
    async handleReceivedMessage(t) {
        if ("request" == t.direction) {
            if (!this.responseHandlers) throw new Error("Failed to handle message, no request handlers set. Make sure to call `setRequestHandlers` before handling messages.");
            if (!this.sendHandler) throw new Error("Failed to handle message, no send handler set. Make sure to call `setSendHandler` before handling messages.");
            const e = this.responseHandlers[t.type];
            let n, i = [], r = !1;
            if (e) try {
                n = await e(...t.args);
            } catch (t) {
                n = t, r = !0;
            }
            if (this.returnTransferSupport && n && !r) {
                const t = n;
                i = t.transfer || [], n = t.returnValue;
            }
            await this.sendHandler({
                sendData: {
                    direction: "response",
                    id: t.id,
                    didThrow: r,
                    type: t.type,
                    returnValue: n
                },
                transfer: i
            });
        } else if ("response" == t.direction) {
            const e = this.onRequestIdMessageCbs.get(t.id);
            if (e) for (const n of e) n(t);
            this.onRequestIdMessageCbs.delete(t.id);
        }
    }
    setResponseHandlers(t) {
        this.responseHandlers = t;
    }
    async send(t, ...e) {
        return await this.sendWithTransfer(t, [], ...e);
    }
    async sendWithTransfer(t, e, ...n) {
        if (!this.sendHandler) throw new Error("Failed to send message, no send handler set. Make sure to call `setSendHandler` before sending messages.");
        const i = this.lastRequestId++, r = new Promise(((t, e) => {
            this.onResponseMessage(i, (n => {
                n.didThrow ? e(n.returnValue) : t(n.returnValue);
            }));
        }));
        return await this.sendHandler({
            sendData: {
                direction: "request",
                id: i,
                type: t,
                args: n
            },
            transfer: e
        }), await r;
    }
    onResponseMessage(t, e) {
        let n = this.onRequestIdMessageCbs.get(t);
        n || (n = new Set, this.onRequestIdMessageCbs.set(t, n)), n.add(e);
    }
}

export { xe as $, Ts as A, lt as B, X as C, ws as D, _s as E, ls as F, Br as G, bs as H, ye as I, Na as J, fa as K, ma as L, Ot as M, hs as N, se as O, rn as P, rt as Q, As as R, vn as S, Ks as T, Yr as U, at as V, qr as W, c as X, u as Y, i as Z, Ea as _, Bs as a, Ia as a0, n as a1, Ds as a2, na as a3, wa as a4, Ta as a5, Pa as a6, Cn as a7, oa as a8, p as a9, ts as aa, ia as ab, m as ac, s as ad, o as ae, h as af, l as ag, r as ah, a as ai, d as aj, e as ak, Jr as al, $ as am, f as an, $a as ao, Ka as ap, Za as aq, Et as ar, Ha as as, Te as at, zs as au, Js as av, P as b, Us as c, D as d, Oa as e, t as f, Ne as g, Se as h, Ma as i, Fs as j, Ys as k, Os as l, Ns as m, qs as n, Is as o, Ws as p, Vs as q, Zs as r, g as s, js as t, Hs as u, Gs as v, Ye as w, Xr as x, as as y, Es as z };
