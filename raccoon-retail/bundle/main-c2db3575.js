import "./subworkers-f28dd231-9e75e91e.js";

import { y as e, z as t, F as s, C as n, E as r, H as o, D as i, I as a, s as l, J as c, d as u, M as h, V as d, Q as f, K as m, O as p, N as g, R as T, h as x, U as y, X as w, Y as A, Z as S, _ as b, $ as R, L as _, a0 as L, a1 as E, a2 as v, g as M, a3 as C, w as I, a4 as P, i as O, a5 as k, a6 as N, G as D, P as H, b as U, a7 as F, a8 as B, a9 as G, aa as j, ab as K, ac as z, ad as V, ae as X, af as W, ag as q, ah as Y, ai as J, aj as $, ak as Q, al as Z, am as ee, an as te, ao as se, ap as ne, aq as re, B as oe, ar as ie, as as ae, t as le, at as ce, l as ue, au as he, av as de, a as fe, r as me, T as pe } from "./TypedMessenger-8bc6584b.js";

class ge extends e {
    constructor(e) {
        super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, 
        this.pluginCallbacks = [], this.register((function(e) {
            return new Se(e);
        })), this.register((function(e) {
            return new Me(e);
        })), this.register((function(e) {
            return new Ce(e);
        })), this.register((function(e) {
            return new Re(e);
        })), this.register((function(e) {
            return new _e(e);
        })), this.register((function(e) {
            return new Le(e);
        })), this.register((function(e) {
            return new Ee(e);
        })), this.register((function(e) {
            return new Ae(e);
        })), this.register((function(e) {
            return new ve(e);
        })), this.register((function(e) {
            return new be(e);
        })), this.register((function(e) {
            return new ye(e);
        })), this.register((function(e) {
            return new Ie(e);
        })), this.register((function(e) {
            return new Pe(e);
        }));
    }
    load(e, n, r, o) {
        const i = this;
        let a;
        a = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : t.extractUrlBase(e), 
        this.manager.itemStart(e);
        const l = function(t) {
            o ? o(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e);
        }, c = new s(this.manager);
        c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), 
        c.setWithCredentials(this.withCredentials), c.load(e, (function(t) {
            try {
                i.parse(t, a, (function(t) {
                    n(t), i.manager.itemEnd(e);
                }), l);
            } catch (e) {
                l(e);
            }
        }), r, l);
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e, this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e, this;
    }
    register(e) {
        return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
        return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), 
        this;
    }
    parse(e, s, n, r) {
        let o;
        const i = {}, a = {};
        if ("string" == typeof e) o = JSON.parse(e); else if (e instanceof ArrayBuffer) {
            if (t.decodeText(new Uint8Array(e, 0, 4)) === Oe) {
                try {
                    i[xe.KHR_BINARY_GLTF] = new De(e);
                } catch (e) {
                    return void (r && r(e));
                }
                o = JSON.parse(i[xe.KHR_BINARY_GLTF].content);
            } else o = JSON.parse(t.decodeText(new Uint8Array(e)));
        } else o = e;
        if (void 0 === o.asset || o.asset.version[0] < 2) return void (r && r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
        const l = new at(o, {
            path: s || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        l.fileLoader.setRequestHeader(this.requestHeader);
        for (let e = 0; e < this.pluginCallbacks.length; e++) {
            const t = this.pluginCallbacks[e](l);
            a[t.name] = t, i[t.name] = !0;
        }
        if (o.extensionsUsed) for (let e = 0; e < o.extensionsUsed.length; ++e) {
            const t = o.extensionsUsed[e], s = o.extensionsRequired || [];
            switch (t) {
              case xe.KHR_MATERIALS_UNLIT:
                i[t] = new we;
                break;

              case xe.KHR_DRACO_MESH_COMPRESSION:
                i[t] = new He(o, this.dracoLoader);
                break;

              case xe.KHR_TEXTURE_TRANSFORM:
                i[t] = new Ue;
                break;

              case xe.KHR_MESH_QUANTIZATION:
                i[t] = new Fe;
                break;

              default:
                s.indexOf(t) >= 0 && void 0 === a[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".');
            }
        }
        l.setExtensions(i), l.setPlugins(a), l.parse(n, r);
    }
    parseAsync(e, t) {
        const s = this;
        return new Promise((function(n, r) {
            s.parse(e, t, n, r);
        }));
    }
}

function Te() {
    let e = {};
    return {
        get: function(t) {
            return e[t];
        },
        add: function(t, s) {
            e[t] = s;
        },
        remove: function(t) {
            delete e[t];
        },
        removeAll: function() {
            e = {};
        }
    };
}

const xe = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};

class ye {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        const e = this.parser, t = this.parser.json.nodes || [];
        for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s];
            n.extensions && n.extensions[this.name] && void 0 !== n.extensions[this.name].light && e._addNodeRef(this.cache, n.extensions[this.name].light);
        }
    }
    _loadLight(e) {
        const t = this.parser, s = "light:" + e;
        let a = t.cache.get(s);
        if (a) return a;
        const l = t.json, c = ((l.extensions && l.extensions[this.name] || {}).lights || [])[e];
        let u;
        const h = new n(16777215);
        void 0 !== c.color && h.fromArray(c.color);
        const d = void 0 !== c.range ? c.range : 0;
        switch (c.type) {
          case "directional":
            u = new i(h), u.target.position.set(0, 0, -1), u.add(u.target);
            break;

          case "point":
            u = new o(h), u.distance = d;
            break;

          case "spot":
            u = new r(h), u.distance = d, c.spot = c.spot || {}, c.spot.innerConeAngle = void 0 !== c.spot.innerConeAngle ? c.spot.innerConeAngle : 0, 
            c.spot.outerConeAngle = void 0 !== c.spot.outerConeAngle ? c.spot.outerConeAngle : Math.PI / 4, 
            u.angle = c.spot.outerConeAngle, u.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, 
            u.target.position.set(0, 0, -1), u.add(u.target);
            break;

          default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
        }
        return u.position.set(0, 0, 0), u.decay = 2, tt(u, c), void 0 !== c.intensity && (u.intensity = c.intensity), 
        u.name = t.createUniqueName(c.name || "light_" + e), a = Promise.resolve(u), t.cache.add(s, a), 
        a;
    }
    getDependency(e, t) {
        if ("light" === e) return this._loadLight(t);
    }
    createNodeAttachment(e) {
        const t = this, s = this.parser, n = s.json.nodes[e], r = (n.extensions && n.extensions[this.name] || {}).light;
        return void 0 === r ? null : this._loadLight(r).then((function(e) {
            return s._getNodeRef(t.cache, r, e);
        }));
    }
}

class we {
    constructor() {
        this.name = xe.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return a;
    }
    extendParams(e, t, s) {
        const r = [];
        e.color = new n(1, 1, 1), e.opacity = 1;
        const o = t.pbrMetallicRoughness;
        if (o) {
            if (Array.isArray(o.baseColorFactor)) {
                const t = o.baseColorFactor;
                e.color.fromArray(t), e.opacity = t[3];
            }
            void 0 !== o.baseColorTexture && r.push(s.assignTexture(e, "map", o.baseColorTexture, l));
        }
        return Promise.all(r);
    }
}

class Ae {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const n = s.extensions[this.name].emissiveStrength;
        return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve();
    }
}

class Se {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [], o = n.extensions[this.name];
        if (void 0 !== o.clearcoatFactor && (t.clearcoat = o.clearcoatFactor), void 0 !== o.clearcoatTexture && r.push(s.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), 
        void 0 !== o.clearcoatRoughnessFactor && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), 
        void 0 !== o.clearcoatRoughnessTexture && r.push(s.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), 
        void 0 !== o.clearcoatNormalTexture && (r.push(s.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), 
        void 0 !== o.clearcoatNormalTexture.scale)) {
            const e = o.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new u(e, e);
        }
        return Promise.all(r);
    }
}

class be {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [], o = n.extensions[this.name];
        return void 0 !== o.iridescenceFactor && (t.iridescence = o.iridescenceFactor), 
        void 0 !== o.iridescenceTexture && r.push(s.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), 
        void 0 !== o.iridescenceIor && (t.iridescenceIOR = o.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [ 100, 400 ]), 
        void 0 !== o.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), 
        void 0 !== o.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), 
        void 0 !== o.iridescenceThicknessTexture && r.push(s.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), 
        Promise.all(r);
    }
}

class Re {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, r = s.json.materials[e];
        if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
        const o = [];
        t.sheenColor = new n(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
        const i = r.extensions[this.name];
        return void 0 !== i.sheenColorFactor && t.sheenColor.fromArray(i.sheenColorFactor), 
        void 0 !== i.sheenRoughnessFactor && (t.sheenRoughness = i.sheenRoughnessFactor), 
        void 0 !== i.sheenColorTexture && o.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, l)), 
        void 0 !== i.sheenRoughnessTexture && o.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), 
        Promise.all(o);
    }
}

class _e {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [], o = n.extensions[this.name];
        return void 0 !== o.transmissionFactor && (t.transmission = o.transmissionFactor), 
        void 0 !== o.transmissionTexture && r.push(s.assignTexture(t, "transmissionMap", o.transmissionTexture)), 
        Promise.all(r);
    }
}

class Le {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, r = s.json.materials[e];
        if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
        const o = [], i = r.extensions[this.name];
        t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0, void 0 !== i.thicknessTexture && o.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), 
        t.attenuationDistance = i.attenuationDistance || 1 / 0;
        const a = i.attenuationColor || [ 1, 1, 1 ];
        return t.attenuationColor = new n(a[0], a[1], a[2]), Promise.all(o);
    }
}

class Ee {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const n = s.extensions[this.name];
        return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve();
    }
}

class ve {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? c : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser, r = s.json.materials[e];
        if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
        const o = [], i = r.extensions[this.name];
        t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1, void 0 !== i.specularTexture && o.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
        const a = i.specularColorFactor || [ 1, 1, 1 ];
        return t.specularColor = new n(a[0], a[1], a[2]), void 0 !== i.specularColorTexture && o.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, l)), 
        Promise.all(o);
    }
}

class Me {
    constructor(e) {
        this.parser = e, this.name = xe.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
        const t = this.parser, s = t.json, n = s.textures[e];
        if (!n.extensions || !n.extensions[this.name]) return null;
        const r = n.extensions[this.name], o = t.options.ktx2Loader;
        if (!o) {
            if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null;
        }
        return t.loadTextureImage(e, r.source, o);
    }
}

class Ce {
    constructor(e) {
        this.parser = e, this.name = xe.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(e) {
        const t = this.name, s = this.parser, n = s.json, r = n.textures[e];
        if (!r.extensions || !r.extensions[t]) return null;
        const o = r.extensions[t], i = n.images[o.source];
        let a = s.textureLoader;
        if (i.uri) {
            const e = s.options.manager.getHandler(i.uri);
            null !== e && (a = e);
        }
        return this.detectSupport().then((function(r) {
            if (r) return s.loadTextureImage(e, o.source, a);
            if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return s.loadTexture(e);
        }));
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise((function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", 
            t.onload = t.onerror = function() {
                e(1 === t.height);
            };
        }))), this.isSupported;
    }
}

class Ie {
    constructor(e) {
        this.name = xe.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
        const t = this.parser.json, s = t.bufferViews[e];
        if (s.extensions && s.extensions[this.name]) {
            const e = s.extensions[this.name], n = this.parser.getDependency("buffer", e.buffer), r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null;
            }
            return n.then((function(t) {
                const s = e.byteOffset || 0, n = e.byteLength || 0, o = e.count, i = e.byteStride, a = new Uint8Array(t, s, n);
                return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(o, i, a, e.mode, e.filter).then((function(e) {
                    return e.buffer;
                })) : r.ready.then((function() {
                    const t = new ArrayBuffer(o * i);
                    return r.decodeGltfBuffer(new Uint8Array(t), o, i, a, e.mode, e.filter), t;
                }));
            }));
        }
        return null;
    }
}

class Pe {
    constructor(e) {
        this.name = xe.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
        const t = this.parser.json, s = t.nodes[e];
        if (!s.extensions || !s.extensions[this.name] || void 0 === s.mesh) return null;
        const n = t.meshes[s.mesh];
        for (const e of n.primitives) if (e.mode !== Ke.TRIANGLES && e.mode !== Ke.TRIANGLE_STRIP && e.mode !== Ke.TRIANGLE_FAN && void 0 !== e.mode) return null;
        const r = s.extensions[this.name].attributes, o = [], i = {};
        for (const e in r) o.push(this.parser.getDependency("accessor", r[e]).then((t => (i[e] = t, 
        i[e]))));
        return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((e => {
            const t = e.pop(), s = t.isGroup ? t.children : [ t ], n = e[0].count, r = [];
            for (const e of s) {
                const t = new h, s = new d, o = new f, a = new d(1, 1, 1), l = new m(e.geometry, e.material, n);
                for (let e = 0; e < n; e++) i.TRANSLATION && s.fromBufferAttribute(i.TRANSLATION, e), 
                i.ROTATION && o.fromBufferAttribute(i.ROTATION, e), i.SCALE && a.fromBufferAttribute(i.SCALE, e), 
                l.setMatrixAt(e, t.compose(s, o, a));
                for (const t in i) "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, i[t]);
                p.prototype.copy.call(l, e), l.frustumCulled = !1, this.parser.assignFinalMaterial(l), 
                r.push(l);
            }
            return t.isGroup ? (t.clear(), t.add(...r), t) : r[0];
        })));
    }
}

const Oe = "glTF", ke = 1313821514, Ne = 5130562;

class De {
    constructor(e) {
        this.name = xe.KHR_BINARY_GLTF, this.content = null, this.body = null;
        const s = new DataView(e, 0, 12);
        if (this.header = {
            magic: t.decodeText(new Uint8Array(e.slice(0, 4))),
            version: s.getUint32(4, !0),
            length: s.getUint32(8, !0)
        }, this.header.magic !== Oe) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const n = this.header.length - 12, r = new DataView(e, 12);
        let o = 0;
        for (;o < n; ) {
            const s = r.getUint32(o, !0);
            o += 4;
            const n = r.getUint32(o, !0);
            if (o += 4, n === ke) {
                const n = new Uint8Array(e, 12 + o, s);
                this.content = t.decodeText(n);
            } else if (n === Ne) {
                const t = 12 + o;
                this.body = e.slice(t, t + s);
            }
            o += s;
        }
        if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}

class He {
    constructor(e, t) {
        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = xe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, 
        this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
        const s = this.json, n = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, i = {}, a = {}, l = {};
        for (const e in o) {
            const t = qe[e] || e.toLowerCase();
            i[t] = o[e];
        }
        for (const t in e.attributes) {
            const n = qe[t] || t.toLowerCase();
            if (void 0 !== o[t]) {
                const r = s.accessors[e.attributes[t]], o = ze[r.componentType];
                l[n] = o.name, a[n] = !0 === r.normalized;
            }
        }
        return t.getDependency("bufferView", r).then((function(e) {
            return new Promise((function(t) {
                n.decodeDracoFile(e, (function(e) {
                    for (const t in e.attributes) {
                        const s = e.attributes[t], n = a[t];
                        void 0 !== n && (s.normalized = n);
                    }
                    t(e);
                }), i, l);
            }));
        }));
    }
}

class Ue {
    constructor() {
        this.name = xe.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
        return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), 
        void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), 
        void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), 
        void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
    }
}

class Fe {
    constructor() {
        this.name = xe.KHR_MESH_QUANTIZATION;
    }
}

class Be extends ae {
    constructor(e, t, s, n) {
        super(e, t, s, n);
    }
    copySampleValue_(e) {
        const t = this.resultBuffer, s = this.sampleValues, n = this.valueSize, r = e * n * 3 + n;
        for (let e = 0; e !== n; e++) t[e] = s[r + e];
        return t;
    }
    interpolate_(e, t, s, n) {
        const r = this.resultBuffer, o = this.sampleValues, i = this.valueSize, a = 2 * i, l = 3 * i, c = n - t, u = (s - t) / c, h = u * u, d = h * u, f = e * l, m = f - l, p = -2 * d + 3 * h, g = d - h, T = 1 - p, x = g - h + u;
        for (let e = 0; e !== i; e++) {
            const t = o[m + e + i], s = o[m + e + a] * c, n = o[f + e + i], l = o[f + e] * c;
            r[e] = T * t + x * s + p * n + g * l;
        }
        return r;
    }
}

const Ge = new f;

class je extends Be {
    interpolate_(e, t, s, n) {
        const r = super.interpolate_(e, t, s, n);
        return Ge.fromArray(r).normalize().toArray(r), r;
    }
}

const Ke = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
}, ze = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}, Ve = {
    9728: V,
    9729: w,
    9984: X,
    9985: W,
    9986: q,
    9987: A
}, Xe = {
    33071: Y,
    33648: J,
    10497: S
}, We = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}, qe = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}, Ye = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}, Je = {
    CUBICSPLINE: void 0,
    LINEAR: G,
    STEP: $
}, $e = "OPAQUE", Qe = "MASK", Ze = "BLEND";

function et(e, t, s) {
    for (const n in s.extensions) void 0 === e[n] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, 
    t.userData.gltfExtensions[n] = s.extensions[n]);
}

function tt(e, t) {
    void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}

function st(e, t) {
    if (e.updateMorphTargets(), void 0 !== t.weights) for (let s = 0, n = t.weights.length; s < n; s++) e.morphTargetInfluences[s] = t.weights[s];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        const s = t.extras.targetNames;
        if (e.morphTargetInfluences.length === s.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, n = s.length; t < n; t++) e.morphTargetDictionary[s[t]] = t;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}

function nt(e) {
    const t = e.extensions && e.extensions[xe.KHR_DRACO_MESH_COMPRESSION];
    let s;
    return s = t ? "draco:" + t.bufferView + ":" + t.indices + ":" + rt(t.attributes) : e.indices + ":" + rt(e.attributes) + ":" + e.mode, 
    s;
}

function rt(e) {
    let t = "";
    const s = Object.keys(e).sort();
    for (let n = 0, r = s.length; n < r; n++) t += s[n] + ":" + e[s[n]] + ";";
    return t;
}

function ot(e) {
    switch (e) {
      case Int8Array:
        return 1 / 127;

      case Uint8Array:
        return 1 / 255;

      case Int16Array:
        return 1 / 32767;

      case Uint16Array:
        return 1 / 65535;

      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}

const it = new h;

class at {
    constructor(e = {}, t = {}) {
        this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Te, 
        this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {
            refs: {},
            uses: {}
        }, this.lightCache = {
            refs: {},
            uses: {}
        }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
        let n = !1, r = !1, o = -1;
        "undefined" != typeof navigator && (n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), 
        r = navigator.userAgent.indexOf("Firefox") > -1, o = r ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), 
        "undefined" == typeof createImageBitmap || n || r && o < 98 ? this.textureLoader = new g(this.options.manager) : this.textureLoader = new T(this.options.manager), 
        this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), 
        this.fileLoader = new s(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), 
        "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(e) {
        this.extensions = e;
    }
    setPlugins(e) {
        this.plugins = e;
    }
    parse(e, t) {
        const s = this, n = this.json, r = this.extensions;
        this.cache.removeAll(), this._invokeAll((function(e) {
            return e._markDefs && e._markDefs();
        })), Promise.all(this._invokeAll((function(e) {
            return e.beforeRoot && e.beforeRoot();
        }))).then((function() {
            return Promise.all([ s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera") ]);
        })).then((function(t) {
            const o = {
                scene: t[0][n.scene || 0],
                scenes: t[0],
                animations: t[1],
                cameras: t[2],
                asset: n.asset,
                parser: s,
                userData: {}
            };
            et(r, o, n), tt(o, n), Promise.all(s._invokeAll((function(e) {
                return e.afterRoot && e.afterRoot(o);
            }))).then((function() {
                e(o);
            }));
        })).catch(t);
    }
    _markDefs() {
        const e = this.json.nodes || [], t = this.json.skins || [], s = this.json.meshes || [];
        for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s].joints;
            for (let t = 0, s = n.length; t < s; t++) e[n[t]].isBone = !0;
        }
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            void 0 !== n.mesh && (this._addNodeRef(this.meshCache, n.mesh), void 0 !== n.skin && (s[n.mesh].isSkinnedMesh = !0)), 
            void 0 !== n.camera && this._addNodeRef(this.cameraCache, n.camera);
        }
    }
    _addNodeRef(e, t) {
        void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, s) {
        if (e.refs[t] <= 1) return s;
        const n = s.clone(), r = (e, t) => {
            const s = this.associations.get(e);
            null != s && this.associations.set(t, s);
            for (const [s, n] of e.children.entries()) r(n, t.children[s]);
        };
        return r(s, n), n.name += "_instance_" + e.uses[t]++, n;
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let s = 0; s < t.length; s++) {
            const n = e(t[s]);
            if (n) return n;
        }
        return null;
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const s = [];
        for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            r && s.push(r);
        }
        return s;
    }
    getDependency(e, t) {
        const s = e + ":" + t;
        let n = this.cache.get(s);
        if (!n) {
            switch (e) {
              case "scene":
                n = this.loadScene(t);
                break;

              case "node":
                n = this._invokeOne((function(e) {
                    return e.loadNode && e.loadNode(t);
                }));
                break;

              case "mesh":
                n = this._invokeOne((function(e) {
                    return e.loadMesh && e.loadMesh(t);
                }));
                break;

              case "accessor":
                n = this.loadAccessor(t);
                break;

              case "bufferView":
                n = this._invokeOne((function(e) {
                    return e.loadBufferView && e.loadBufferView(t);
                }));
                break;

              case "buffer":
                n = this.loadBuffer(t);
                break;

              case "material":
                n = this._invokeOne((function(e) {
                    return e.loadMaterial && e.loadMaterial(t);
                }));
                break;

              case "texture":
                n = this._invokeOne((function(e) {
                    return e.loadTexture && e.loadTexture(t);
                }));
                break;

              case "skin":
                n = this.loadSkin(t);
                break;

              case "animation":
                n = this._invokeOne((function(e) {
                    return e.loadAnimation && e.loadAnimation(t);
                }));
                break;

              case "camera":
                n = this.loadCamera(t);
                break;

              default:
                if (n = this._invokeOne((function(s) {
                    return s != this && s.getDependency && s.getDependency(e, t);
                })), !n) throw new Error("Unknown type: " + e);
            }
            this.cache.add(s, n);
        }
        return n;
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const s = this, n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            t = Promise.all(n.map((function(t, n) {
                return s.getDependency(e, n);
            }))), this.cache.add(e, t);
        }
        return t;
    }
    loadBuffer(e) {
        const s = this.json.buffers[e], n = this.fileLoader;
        if (s.type && "arraybuffer" !== s.type) throw new Error("THREE.GLTFLoader: " + s.type + " buffer type is not supported.");
        if (void 0 === s.uri && 0 === e) return Promise.resolve(this.extensions[xe.KHR_BINARY_GLTF].body);
        const r = this.options;
        return new Promise((function(e, o) {
            n.load(t.resolveURL(s.uri, r.path), e, void 0, (function() {
                o(new Error('THREE.GLTFLoader: Failed to load buffer "' + s.uri + '".'));
            }));
        }));
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then((function(e) {
            const s = t.byteLength || 0, n = t.byteOffset || 0;
            return e.slice(n, n + s);
        }));
    }
    loadAccessor(e) {
        const t = this, s = this.json, n = this.json.accessors[e];
        if (void 0 === n.bufferView && void 0 === n.sparse) {
            const e = We[n.type], t = ze[n.componentType], s = !0 === n.normalized, r = new t(n.count * e);
            return Promise.resolve(new x(r, e, s));
        }
        const r = [];
        return void 0 !== n.bufferView ? r.push(this.getDependency("bufferView", n.bufferView)) : r.push(null), 
        void 0 !== n.sparse && (r.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), 
        r.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(r).then((function(e) {
            const r = e[0], o = We[n.type], i = ze[n.componentType], a = i.BYTES_PER_ELEMENT, l = a * o, c = n.byteOffset || 0, u = void 0 !== n.bufferView ? s.bufferViews[n.bufferView].byteStride : void 0, h = !0 === n.normalized;
            let d, f;
            if (u && u !== l) {
                const e = Math.floor(c / u), s = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + e + ":" + n.count;
                let l = t.cache.get(s);
                l || (d = new i(r, e * u, n.count * u / a), l = new y(d, u / a), t.cache.add(s, l)), 
                f = new Z(l, o, c % u / a, h);
            } else d = null === r ? new i(n.count * o) : new i(r, c, n.count * o), f = new x(d, o, h);
            if (void 0 !== n.sparse) {
                const t = We.SCALAR, s = ze[n.sparse.indices.componentType], a = n.sparse.indices.byteOffset || 0, l = n.sparse.values.byteOffset || 0, c = new s(e[1], a, n.sparse.count * t), u = new i(e[2], l, n.sparse.count * o);
                null !== r && (f = new x(f.array.slice(), f.itemSize, f.normalized));
                for (let e = 0, t = c.length; e < t; e++) {
                    const t = c[e];
                    if (f.setX(t, u[e * o]), o >= 2 && f.setY(t, u[e * o + 1]), o >= 3 && f.setZ(t, u[e * o + 2]), 
                    o >= 4 && f.setW(t, u[e * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return f;
        }));
    }
    loadTexture(e) {
        const t = this.json, s = this.options, n = t.textures[e].source, r = t.images[n];
        let o = this.textureLoader;
        if (r.uri) {
            const e = s.manager.getHandler(r.uri);
            null !== e && (o = e);
        }
        return this.loadTextureImage(e, n, o);
    }
    loadTextureImage(e, t, s) {
        const n = this, r = this.json, o = r.textures[e], i = r.images[t], a = (i.uri || i.bufferView) + ":" + o.sampler;
        if (this.textureCache[a]) return this.textureCache[a];
        const l = this.loadImageSource(t, s).then((function(t) {
            t.flipY = !1, t.name = o.name || i.name || "";
            const s = (r.samplers || {})[o.sampler] || {};
            return t.magFilter = Ve[s.magFilter] || w, t.minFilter = Ve[s.minFilter] || A, t.wrapS = Xe[s.wrapS] || S, 
            t.wrapT = Xe[s.wrapT] || S, n.associations.set(t, {
                textures: e
            }), t;
        })).catch((function() {
            return null;
        }));
        return this.textureCache[a] = l, l;
    }
    loadImageSource(e, s) {
        const n = this, r = this.json, o = this.options;
        if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((e => e.clone()));
        const i = r.images[e], a = self.URL || self.webkitURL;
        let l = i.uri || "", c = !1;
        if (void 0 !== i.bufferView) l = n.getDependency("bufferView", i.bufferView).then((function(e) {
            c = !0;
            const t = new Blob([ e ], {
                type: i.mimeType
            });
            return l = a.createObjectURL(t), l;
        })); else if (void 0 === i.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const u = Promise.resolve(l).then((function(e) {
            return new Promise((function(n, r) {
                let i = n;
                !0 === s.isImageBitmapLoader && (i = function(e) {
                    const t = new ee(e);
                    t.needsUpdate = !0, n(t);
                }), s.load(t.resolveURL(e, o.path), i, void 0, r);
            }));
        })).then((function(e) {
            var t;
            return !0 === c && a.revokeObjectURL(l), e.userData.mimeType = i.mimeType || ((t = i.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), 
            e;
        })).catch((function(e) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", l), e;
        }));
        return this.sourceCache[e] = u, u;
    }
    assignTexture(e, t, s, n) {
        const r = this;
        return this.getDependency("texture", s.index).then((function(o) {
            if (!o) return null;
            if (void 0 === s.texCoord || 0 == s.texCoord || "aoMap" === t && 1 == s.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + s.texCoord + " for texture " + t + " not yet supported."), 
            r.extensions[xe.KHR_TEXTURE_TRANSFORM]) {
                const e = void 0 !== s.extensions ? s.extensions[xe.KHR_TEXTURE_TRANSFORM] : void 0;
                if (e) {
                    const t = r.associations.get(o);
                    o = r.extensions[xe.KHR_TEXTURE_TRANSFORM].extendTexture(o, e), r.associations.set(o, t);
                }
            }
            return void 0 !== n && (o.encoding = n), e[t] = o, o;
        }));
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let s = e.material;
        const n = void 0 === t.attributes.tangent, r = void 0 !== t.attributes.color, o = void 0 === t.attributes.normal;
        if (e.isPoints) {
            const e = "PointsMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t || (t = new b, R.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, 
            t.sizeAttenuation = !1, this.cache.add(e, t)), s = t;
        } else if (e.isLine) {
            const e = "LineBasicMaterial:" + s.uuid;
            let t = this.cache.get(e);
            t || (t = new _, R.prototype.copy.call(t, s), t.color.copy(s.color), this.cache.add(e, t)), 
            s = t;
        }
        if (n || r || o) {
            let e = "ClonedMaterial:" + s.uuid + ":";
            n && (e += "derivative-tangents:"), r && (e += "vertex-colors:"), o && (e += "flat-shading:");
            let t = this.cache.get(e);
            t || (t = s.clone(), r && (t.vertexColors = !0), o && (t.flatShading = !0), n && (t.normalScale && (t.normalScale.y *= -1), 
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), 
            this.associations.set(t, this.associations.get(s))), s = t;
        }
        s.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), 
        e.material = s;
    }
    getMaterialType() {
        return L;
    }
    loadMaterial(e) {
        const t = this, s = this.json, r = this.extensions, o = s.materials[e];
        let i;
        const c = {}, h = [];
        if ((o.extensions || {})[xe.KHR_MATERIALS_UNLIT]) {
            const e = r[xe.KHR_MATERIALS_UNLIT];
            i = e.getMaterialType(), h.push(e.extendParams(c, o, t));
        } else {
            const s = o.pbrMetallicRoughness || {};
            if (c.color = new n(1, 1, 1), c.opacity = 1, Array.isArray(s.baseColorFactor)) {
                const e = s.baseColorFactor;
                c.color.fromArray(e), c.opacity = e[3];
            }
            void 0 !== s.baseColorTexture && h.push(t.assignTexture(c, "map", s.baseColorTexture, l)), 
            c.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1, c.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1, 
            void 0 !== s.metallicRoughnessTexture && (h.push(t.assignTexture(c, "metalnessMap", s.metallicRoughnessTexture)), 
            h.push(t.assignTexture(c, "roughnessMap", s.metallicRoughnessTexture))), i = this._invokeOne((function(t) {
                return t.getMaterialType && t.getMaterialType(e);
            })), h.push(Promise.all(this._invokeAll((function(t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, c);
            }))));
        }
        !0 === o.doubleSided && (c.side = E);
        const d = o.alphaMode || $e;
        if (d === Ze ? (c.transparent = !0, c.depthWrite = !1) : (c.transparent = !1, d === Qe && (c.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), 
        void 0 !== o.normalTexture && i !== a && (h.push(t.assignTexture(c, "normalMap", o.normalTexture)), 
        c.normalScale = new u(1, 1), void 0 !== o.normalTexture.scale)) {
            const e = o.normalTexture.scale;
            c.normalScale.set(e, e);
        }
        return void 0 !== o.occlusionTexture && i !== a && (h.push(t.assignTexture(c, "aoMap", o.occlusionTexture)), 
        void 0 !== o.occlusionTexture.strength && (c.aoMapIntensity = o.occlusionTexture.strength)), 
        void 0 !== o.emissiveFactor && i !== a && (c.emissive = (new n).fromArray(o.emissiveFactor)), 
        void 0 !== o.emissiveTexture && i !== a && h.push(t.assignTexture(c, "emissiveMap", o.emissiveTexture, l)), 
        Promise.all(h).then((function() {
            const s = new i(c);
            return o.name && (s.name = o.name), tt(s, o), t.associations.set(s, {
                materials: e
            }), o.extensions && et(r, s, o), s;
        }));
    }
    createUniqueName(e) {
        const t = v.sanitizeNodeName(e || "");
        let s = t;
        for (let e = 1; this.nodeNamesUsed[s]; ++e) s = t + "_" + e;
        return this.nodeNamesUsed[s] = !0, s;
    }
    loadGeometries(e) {
        const t = this, s = this.extensions, n = this.primitiveCache;
        function r(e) {
            return s[xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(s) {
                return lt(s, e, t);
            }));
        }
        const o = [];
        for (let s = 0, i = e.length; s < i; s++) {
            const i = e[s], a = nt(i), l = n[a];
            if (l) o.push(l.promise); else {
                let e;
                e = i.extensions && i.extensions[xe.KHR_DRACO_MESH_COMPRESSION] ? r(i) : lt(new M, i, t), 
                n[a] = {
                    primitive: i,
                    promise: e
                }, o.push(e);
            }
        }
        return Promise.all(o);
    }
    loadMesh(e) {
        const t = this, s = this.json, n = this.extensions, r = s.meshes[e], o = r.primitives, i = [];
        for (let e = 0, t = o.length; e < t; e++) {
            const t = void 0 === o[e].material ? (void 0 === (a = this.cache).DefaultMaterial && (a.DefaultMaterial = new L({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: Q
            })), a.DefaultMaterial) : this.getDependency("material", o[e].material);
            i.push(t);
        }
        var a;
        return i.push(t.loadGeometries(o)), Promise.all(i).then((function(s) {
            const i = s.slice(0, s.length - 1), a = s[s.length - 1], l = [];
            for (let s = 0, c = a.length; s < c; s++) {
                const c = a[s], u = o[s];
                let h;
                const d = i[s];
                if (u.mode === Ke.TRIANGLES || u.mode === Ke.TRIANGLE_STRIP || u.mode === Ke.TRIANGLE_FAN || void 0 === u.mode) h = !0 === r.isSkinnedMesh ? new C(c, d) : new I(c, d), 
                !0 !== h.isSkinnedMesh || h.geometry.attributes.skinWeight.normalized || h.normalizeSkinWeights(), 
                u.mode === Ke.TRIANGLE_STRIP ? h.geometry = ct(h.geometry, te) : u.mode === Ke.TRIANGLE_FAN && (h.geometry = ct(h.geometry, z)); else if (u.mode === Ke.LINES) h = new P(c, d); else if (u.mode === Ke.LINE_STRIP) h = new O(c, d); else if (u.mode === Ke.LINE_LOOP) h = new k(c, d); else {
                    if (u.mode !== Ke.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
                    h = new N(c, d);
                }
                Object.keys(h.geometry.morphAttributes).length > 0 && st(h, r), h.name = t.createUniqueName(r.name || "mesh_" + e), 
                tt(h, r), u.extensions && et(n, h, u), t.assignFinalMaterial(h), l.push(h);
            }
            for (let s = 0, n = l.length; s < n; s++) t.associations.set(l[s], {
                meshes: e,
                primitives: s
            });
            if (1 === l.length) return l[0];
            const c = new D;
            t.associations.set(c, {
                meshes: e
            });
            for (let e = 0, t = l.length; e < t; e++) c.add(l[e]);
            return c;
        }));
    }
    loadCamera(e) {
        let t;
        const s = this.json.cameras[e], n = s[s.type];
        if (n) return "perspective" === s.type ? t = new H(U.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === s.type && (t = new F(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), 
        s.name && (t.name = this.createUniqueName(s.name)), tt(t, s), Promise.resolve(t);
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }
    loadSkin(e) {
        const t = this.json.skins[e], s = [];
        for (let e = 0, n = t.joints.length; e < n; e++) s.push(this.getDependency("node", t.joints[e]));
        return void 0 !== t.inverseBindMatrices ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), 
        Promise.all(s).then((function(e) {
            const s = e.pop(), n = e, r = [], o = [];
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                if (i) {
                    r.push(i);
                    const t = new h;
                    null !== s && t.fromArray(s.array, 16 * e), o.push(t);
                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e]);
            }
            return new B(r, o);
        }));
    }
    loadAnimation(e) {
        const t = this.json.animations[e], s = [], n = [], r = [], o = [], i = [];
        for (let e = 0, a = t.channels.length; e < a; e++) {
            const a = t.channels[e], l = t.samplers[a.sampler], c = a.target, u = c.node, h = void 0 !== t.parameters ? t.parameters[l.input] : l.input, d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
            s.push(this.getDependency("node", u)), n.push(this.getDependency("accessor", h)), 
            r.push(this.getDependency("accessor", d)), o.push(l), i.push(c);
        }
        return Promise.all([ Promise.all(s), Promise.all(n), Promise.all(r), Promise.all(o), Promise.all(i) ]).then((function(s) {
            const n = s[0], r = s[1], o = s[2], i = s[3], a = s[4], l = [];
            for (let e = 0, t = n.length; e < t; e++) {
                const t = n[e], s = r[e], c = o[e], u = i[e], h = a[e];
                if (void 0 === t) continue;
                let d;
                switch (t.updateMatrix(), Ye[h.path]) {
                  case Ye.weights:
                    d = re;
                    break;

                  case Ye.rotation:
                    d = ne;
                    break;

                  default:
                    d = se;
                }
                const f = t.name ? t.name : t.uuid, m = void 0 !== u.interpolation ? Je[u.interpolation] : G, p = [];
                Ye[h.path] === Ye.weights ? t.traverse((function(e) {
                    e.morphTargetInfluences && p.push(e.name ? e.name : e.uuid);
                })) : p.push(f);
                let g = c.array;
                if (c.normalized) {
                    const e = ot(g.constructor), t = new Float32Array(g.length);
                    for (let s = 0, n = g.length; s < n; s++) t[s] = g[s] * e;
                    g = t;
                }
                for (let e = 0, t = p.length; e < t; e++) {
                    const t = new d(p[e] + "." + Ye[h.path], s.array, g, m);
                    "CUBICSPLINE" === u.interpolation && (t.createInterpolant = function(e) {
                        return new (this instanceof ne ? je : Be)(this.times, this.values, this.getValueSize() / 3, e);
                    }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(t);
                }
            }
            const c = t.name ? t.name : "animation_" + e;
            return new j(c, void 0, l);
        }));
    }
    createNodeMesh(e) {
        const t = this.json, s = this, n = t.nodes[e];
        return void 0 === n.mesh ? null : s.getDependency("mesh", n.mesh).then((function(e) {
            const t = s._getNodeRef(s.meshCache, n.mesh, e);
            return void 0 !== n.weights && t.traverse((function(e) {
                if (e.isMesh) for (let t = 0, s = n.weights.length; t < s; t++) e.morphTargetInfluences[t] = n.weights[t];
            })), t;
        }));
    }
    loadNode(e) {
        const t = this.json, s = this.extensions, n = this, r = t.nodes[e], o = r.name ? n.createUniqueName(r.name) : "";
        return function() {
            const t = [], s = n._invokeOne((function(t) {
                return t.createNodeMesh && t.createNodeMesh(e);
            }));
            s && t.push(s), void 0 !== r.camera && t.push(n.getDependency("camera", r.camera).then((function(e) {
                return n._getNodeRef(n.cameraCache, r.camera, e);
            }))), n._invokeAll((function(t) {
                return t.createNodeAttachment && t.createNodeAttachment(e);
            })).forEach((function(e) {
                t.push(e);
            }));
            const o = [], i = r.children || [];
            for (let e = 0, t = i.length; e < t; e++) o.push(n.getDependency("node", i[e]));
            const a = void 0 === r.skin ? Promise.resolve(null) : n.getDependency("skin", r.skin);
            return Promise.all([ Promise.all(t), Promise.all(o), a ]);
        }().then((function(t) {
            const i = t[0], a = t[1], l = t[2];
            let c;
            if (c = !0 === r.isBone ? new K : i.length > 1 ? new D : 1 === i.length ? i[0] : new p, 
            c !== i[0]) for (let e = 0, t = i.length; e < t; e++) c.add(i[e]);
            if (r.name && (c.userData.name = r.name, c.name = o), tt(c, r), r.extensions && et(s, c, r), 
            void 0 !== r.matrix) {
                const e = new h;
                e.fromArray(r.matrix), c.applyMatrix4(e);
            } else void 0 !== r.translation && c.position.fromArray(r.translation), void 0 !== r.rotation && c.quaternion.fromArray(r.rotation), 
            void 0 !== r.scale && c.scale.fromArray(r.scale);
            n.associations.has(c) || n.associations.set(c, {}), n.associations.get(c).nodes = e, 
            null !== l && c.traverse((function(e) {
                e.isSkinnedMesh && e.bind(l, it);
            }));
            for (let e = 0, t = a.length; e < t; e++) c.add(a[e]);
            return c;
        }));
    }
    loadScene(e) {
        const t = this.extensions, s = this.json.scenes[e], n = this, r = new D;
        s.name && (r.name = n.createUniqueName(s.name)), tt(r, s), s.extensions && et(t, r, s);
        const o = s.nodes || [], i = [];
        for (let e = 0, t = o.length; e < t; e++) i.push(n.getDependency("node", o[e]));
        return Promise.all(i).then((function(e) {
            for (let t = 0, s = e.length; t < s; t++) r.add(e[t]);
            return n.associations = (e => {
                const t = new Map;
                for (const [e, s] of n.associations) (e instanceof R || e instanceof ee) && t.set(e, s);
                return e.traverse((e => {
                    const s = n.associations.get(e);
                    null != s && t.set(e, s);
                })), t;
            })(r), r;
        }));
    }
}

function lt(e, t, s) {
    const n = t.attributes, r = [];
    function o(t, n) {
        return s.getDependency("accessor", t).then((function(t) {
            e.setAttribute(n, t);
        }));
    }
    for (const t in n) {
        const s = qe[t] || t.toLowerCase();
        s in e.attributes || r.push(o(n[t], s));
    }
    if (void 0 !== t.indices && !e.index) {
        const n = s.getDependency("accessor", t.indices).then((function(t) {
            e.setIndex(t);
        }));
        r.push(n);
    }
    return tt(e, t), function(e, t, s) {
        const n = t.attributes, r = new oe;
        if (void 0 === n.POSITION) return;
        {
            const e = s.json.accessors[n.POSITION], t = e.min, o = e.max;
            if (void 0 === t || void 0 === o) return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            if (r.set(new d(t[0], t[1], t[2]), new d(o[0], o[1], o[2])), e.normalized) {
                const t = ot(ze[e.componentType]);
                r.min.multiplyScalar(t), r.max.multiplyScalar(t);
            }
        }
        const o = t.targets;
        if (void 0 !== o) {
            const e = new d, t = new d;
            for (let n = 0, r = o.length; n < r; n++) {
                const r = o[n];
                if (void 0 !== r.POSITION) {
                    const n = s.json.accessors[r.POSITION], o = n.min, i = n.max;
                    if (void 0 !== o && void 0 !== i) {
                        if (t.setX(Math.max(Math.abs(o[0]), Math.abs(i[0]))), t.setY(Math.max(Math.abs(o[1]), Math.abs(i[1]))), 
                        t.setZ(Math.max(Math.abs(o[2]), Math.abs(i[2]))), n.normalized) {
                            const e = ot(ze[n.componentType]);
                            t.multiplyScalar(e);
                        }
                        e.max(t);
                    } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                }
            }
            r.expandByVector(e);
        }
        e.boundingBox = r;
        const i = new ie;
        r.getCenter(i.center), i.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = i;
    }(e, t, s), Promise.all(r).then((function() {
        return void 0 !== t.targets ? function(e, t, s) {
            let n = !1, r = !1, o = !1;
            for (let e = 0, s = t.length; e < s; e++) {
                const s = t[e];
                if (void 0 !== s.POSITION && (n = !0), void 0 !== s.NORMAL && (r = !0), void 0 !== s.COLOR_0 && (o = !0), 
                n && r && o) break;
            }
            if (!n && !r && !o) return Promise.resolve(e);
            const i = [], a = [], l = [];
            for (let c = 0, u = t.length; c < u; c++) {
                const u = t[c];
                if (n) {
                    const t = void 0 !== u.POSITION ? s.getDependency("accessor", u.POSITION) : e.attributes.position;
                    i.push(t);
                }
                if (r) {
                    const t = void 0 !== u.NORMAL ? s.getDependency("accessor", u.NORMAL) : e.attributes.normal;
                    a.push(t);
                }
                if (o) {
                    const t = void 0 !== u.COLOR_0 ? s.getDependency("accessor", u.COLOR_0) : e.attributes.color;
                    l.push(t);
                }
            }
            return Promise.all([ Promise.all(i), Promise.all(a), Promise.all(l) ]).then((function(t) {
                const s = t[0], i = t[1], a = t[2];
                return n && (e.morphAttributes.position = s), r && (e.morphAttributes.normal = i), 
                o && (e.morphAttributes.color = a), e.morphTargetsRelative = !0, e;
            }));
        }(e, t.targets, s) : e;
    }));
}

function ct(e, t) {
    let s = e.getIndex();
    if (null === s) {
        const t = [], n = e.getAttribute("position");
        if (void 0 === n) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), 
        e;
        for (let e = 0; e < n.count; e++) t.push(e);
        e.setIndex(t), s = e.getIndex();
    }
    const n = s.count - 2, r = [];
    if (t === z) for (let e = 1; e <= n; e++) r.push(s.getX(0)), r.push(s.getX(e)), 
    r.push(s.getX(e + 1)); else for (let e = 0; e < n; e++) e % 2 == 0 ? (r.push(s.getX(e)), 
    r.push(s.getX(e + 1)), r.push(s.getX(e + 2))) : (r.push(s.getX(e + 2)), r.push(s.getX(e + 1)), 
    r.push(s.getX(e)));
    r.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const o = e.clone();
    return o.setIndex(r), o;
}

const ut = new WeakMap;

class ht extends e {
    constructor(e) {
        super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, 
        this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, 
        this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        };
    }
    setDecoderPath(e) {
        return this.decoderPath = e, this;
    }
    setDecoderConfig(e) {
        return this.decoderConfig = e, this;
    }
    setWorkerLimit(e) {
        return this.workerLimit = e, this;
    }
    load(e, t, n, r) {
        const o = new s(this.manager);
        o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), 
        o.setWithCredentials(this.withCredentials), o.load(e, (e => {
            this.decodeDracoFile(e, t).catch(r);
        }), n, r);
    }
    decodeDracoFile(e, t, s, n) {
        const r = {
            attributeIDs: s || this.defaultAttributeIDs,
            attributeTypes: n || this.defaultAttributeTypes,
            useUniqueIDs: !!s
        };
        return this.decodeGeometry(e, r).then(t);
    }
    decodeGeometry(e, t) {
        const s = JSON.stringify(t);
        if (ut.has(e)) {
            const t = ut.get(e);
            if (t.key === s) return t.promise;
            if (0 === e.byteLength) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
        }
        let n;
        const r = this.workerNextTaskID++, o = e.byteLength, i = this._getWorker(r, o).then((s => (n = s, 
        new Promise(((s, o) => {
            n._callbacks[r] = {
                resolve: s,
                reject: o
            }, n.postMessage({
                type: "decode",
                id: r,
                taskConfig: t,
                buffer: e
            }, [ e ]);
        }))))).then((e => this._createGeometry(e.geometry)));
        return i.catch((() => !0)).then((() => {
            n && r && this._releaseTask(n, r);
        })), ut.set(e, {
            key: s,
            promise: i
        }), i;
    }
    _createGeometry(e) {
        const t = new M;
        e.index && t.setIndex(new x(e.index.array, 1));
        for (let s = 0; s < e.attributes.length; s++) {
            const n = e.attributes[s], r = n.name, o = n.array, i = n.itemSize;
            t.setAttribute(r, new x(o, i));
        }
        return t;
    }
    _loadLibrary(e, t) {
        const n = new s(this.manager);
        return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), 
        new Promise(((t, s) => {
            n.load(e, t, void 0, s);
        }));
    }
    preload() {
        return this._initDecoder(), this;
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type, t = [];
        return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), 
        t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((t => {
            const s = t[0];
            e || (this.decoderConfig.wasmBinary = t[1]);
            const n = dt.toString(), r = [ "/* draco decoder */", s, "", "/* worker */", n.substring(n.indexOf("{") + 1, n.lastIndexOf("}")) ].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([ r ]));
        })), this.decoderPending;
    }
    _getWorker(e, t) {
        return this._initDecoder().then((() => {
            if (this.workerPool.length < this.workerLimit) {
                const e = new Worker(this.workerSourceURL);
                e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }), e.onmessage = function(t) {
                    const s = t.data;
                    switch (s.type) {
                      case "decode":
                        e._callbacks[s.id].resolve(s);
                        break;

                      case "error":
                        e._callbacks[s.id].reject(s);
                        break;

                      default:
                        console.error('THREE.DRACOLoader: Unexpected message, "' + s.type + '"');
                    }
                }, this.workerPool.push(e);
            } else this.workerPool.sort((function(e, t) {
                return e._taskLoad > t._taskLoad ? -1 : 1;
            }));
            const s = this.workerPool[this.workerPool.length - 1];
            return s._taskCosts[e] = t, s._taskLoad += t, s;
        }));
    }
    _releaseTask(e, t) {
        e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
    }
    debug() {
        console.log("Task load: ", this.workerPool.map((e => e._taskLoad)));
    }
    dispose() {
        for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
        return this.workerPool.length = 0, this;
    }
}

function dt() {
    let e, t;
    function s(e, t, s, n, r, o) {
        const i = o.num_components(), a = s.num_points() * i, l = a * r.BYTES_PER_ELEMENT, c = function(e, t) {
            switch (t) {
              case Float32Array:
                return e.DT_FLOAT32;

              case Int8Array:
                return e.DT_INT8;

              case Int16Array:
                return e.DT_INT16;

              case Int32Array:
                return e.DT_INT32;

              case Uint8Array:
                return e.DT_UINT8;

              case Uint16Array:
                return e.DT_UINT16;

              case Uint32Array:
                return e.DT_UINT32;
            }
        }(e, r), u = e._malloc(l);
        t.GetAttributeDataArrayForAllPoints(s, o, c, l, u);
        const h = new r(e.HEAPF32.buffer, u, a).slice();
        return e._free(u), {
            name: n,
            array: h,
            itemSize: i
        };
    }
    onmessage = function(n) {
        const r = n.data;
        switch (r.type) {
          case "init":
            e = r.decoderConfig, t = new Promise((function(t) {
                e.onModuleLoaded = function(e) {
                    t({
                        draco: e
                    });
                }, DracoDecoderModule(e);
            }));
            break;

          case "decode":
            const n = r.buffer, o = r.taskConfig;
            t.then((e => {
                const t = e.draco, i = new t.Decoder, a = new t.DecoderBuffer;
                a.Init(new Int8Array(n), n.byteLength);
                try {
                    const e = function(e, t, n, r) {
                        const o = r.attributeIDs, i = r.attributeTypes;
                        let a, l;
                        const c = t.GetEncodedGeometryType(n);
                        if (c === e.TRIANGULAR_MESH) a = new e.Mesh, l = t.DecodeBufferToMesh(n, a); else {
                            if (c !== e.POINT_CLOUD) throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                            a = new e.PointCloud, l = t.DecodeBufferToPointCloud(n, a);
                        }
                        if (!l.ok() || 0 === a.ptr) throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
                        const u = {
                            index: null,
                            attributes: []
                        };
                        for (const n in o) {
                            const l = self[i[n]];
                            let c, h;
                            if (r.useUniqueIDs) h = o[n], c = t.GetAttributeByUniqueId(a, h); else {
                                if (h = t.GetAttributeId(a, e[o[n]]), -1 === h) continue;
                                c = t.GetAttribute(a, h);
                            }
                            u.attributes.push(s(e, t, a, n, l, c));
                        }
                        c === e.TRIANGULAR_MESH && (u.index = function(e, t, s) {
                            const n = 3 * s.num_faces(), r = 4 * n, o = e._malloc(r);
                            t.GetTrianglesUInt32Array(s, r, o);
                            const i = new Uint32Array(e.HEAPF32.buffer, o, n).slice();
                            return e._free(o), {
                                array: i,
                                itemSize: 1
                            };
                        }(e, t, a));
                        return e.destroy(a), u;
                    }(t, i, a, o), n = e.attributes.map((e => e.array.buffer));
                    e.index && n.push(e.index.array.buffer), self.postMessage({
                        type: "decode",
                        id: r.id,
                        geometry: e
                    }, n);
                } catch (e) {
                    console.error(e), self.postMessage({
                        type: "error",
                        id: r.id,
                        error: e.message
                    });
                } finally {
                    t.destroy(a), t.destroy(i);
                }
            }));
        }
    };
}

let ft = null;

async function mt(e) {
    return await new Promise(((t, s) => {
        if (!ft) throw new Error("gltf loader not initialized");
        ft.parse(e, "", (e => {
            t(e);
        }), (e => {
            s(e);
        }));
    }));
}

function pt(e, {keepCustomProperties: t = [], rename: s = !0} = {}) {
    const n = s ? " merged" : "", r = new Set;
    for (const t of le(e)) if (t instanceof I) if (Array.isArray(t.material)) for (const e of t.material) r.add(e.name); else r.add(t.material.name);
    const o = new Map;
    for (const e of r) o.set(e, {
        geometries: []
    });
    for (const t of le(e)) if (t instanceof I) {
        let e;
        e = Array.isArray(t.material) ? t.material.map((e => e.name)) : [ t.material.name ];
        const s = t.geometry.clone();
        if (s.applyMatrix4(t.matrixWorld), s.groups.length <= 0) {
            const t = o.get(e[0]);
            if (!t) throw new Error("Assertion failed, material group doesn't exist.");
            let n = 0;
            s.index && (n = s.index.array.length);
            let r = 0;
            for (const e of Object.values(s.attributes)) r = e.count;
            t.geometries.push({
                geometry: s,
                rangeData: {
                    indexStart: 0,
                    indexCount: n,
                    vertexStart: 0,
                    vertexCount: r
                }
            });
        } else for (const t of s.groups) {
            if (t.count <= 0) continue;
            const n = e[t.materialIndex], r = o.get(n);
            if (!r) throw new Error("Assertion failed, material group doesn't exist.");
            let i = 1 / 0, a = -1 / 0;
            for (let e = 0; e < t.count; e++) {
                const n = s.index.array[t.start + e];
                i = Math.min(i, n), a = Math.max(a, n);
            }
            r.geometries.push({
                geometry: s,
                rangeData: {
                    indexStart: t.start,
                    indexCount: t.count,
                    vertexStart: i,
                    vertexCount: a - i + 1
                }
            });
        }
    }
    const i = new Map;
    for (const [e, t] of o) for (const s of t.geometries) {
        const t = Object.keys(s.geometry.attributes).join(",");
        let n = i.get(t);
        n || (n = new Map, i.set(t, n));
        let r = n.get(e);
        r || (r = {
            geometries: []
        }, n.set(e, r)), r.geometries.push(s);
    }
    const a = [];
    for (const [t, s] of i) {
        const r = gt(s);
        r && (r.name = e.name + n, i.size > 1 && (r.name += " " + t)), r && a.push(r);
    }
    if (t.length > 0) for (const s of le(e)) {
        const e = [];
        for (const n of t) Object.prototype.hasOwnProperty.call(s.userData, n) && e.push([ n, s.userData[n] ]);
        if (e.length > 0) {
            const t = new p;
            t.name = s.name, s.updateMatrix(), s.updateMatrixWorld(), t.matrix.copy(s.matrix), 
            t.userData = {};
            for (const [s, n] of e) t.userData[s] = n;
            a.push(t);
        }
    }
    if (0 == a.length) return null;
    if (1 == a.length) return a[0];
    {
        const t = new p;
        t.name = e.name + n;
        for (const e of a) t.add(e);
        return t;
    }
}

function gt(e) {
    let t = 0;
    for (const s of e.values()) for (const {rangeData: e} of s.geometries) t += e.indexCount;
    const s = [], n = [], r = new Uint32Array(t);
    let o = 0, i = 0;
    for (const [t, l] of e) {
        const e = o;
        for (const {geometry: e, rangeData: t} of l.geometries) {
            if (!e.index) throw new Error("Merging eometries without indices is not supported.");
            for (let s = 0; s < t.indexCount; s++) r[o++] = e.index.array[t.indexStart + s] + i - t.vertexStart;
            i += t.vertexCount;
        }
        const c = o;
        s.push({
            start: e,
            count: c - e
        }), n.push(new a({
            name: t
        }));
    }
    if (n.length <= 0) return null;
    const l = new M;
    l.setIndex(new ce(r, 1));
    const c = new Map;
    for (const t of e.values()) for (const e of t.geometries) for (const [t, s] of Object.entries(e.geometry.attributes)) {
        let n = c.get(t);
        n || (n = [], c.set(t, n)), n.push({
            attribute: s,
            rangeData: e.rangeData
        });
    }
    for (const [e, t] of c) {
        const s = xt(t);
        if (!s) return null;
        l.setAttribute(e, s);
    }
    for (const [e, {start: t, count: n}] of s.entries()) l.addGroup(t, n, e);
    return new I(l, n);
}

const Tt = [ Uint8Array, Uint16Array, Float32Array ];

function xt(e) {
    let t, s = -1, n = null, r = null, o = 0;
    for (const {attribute: i, rangeData: a} of e) {
        const e = i.array.constructor;
        if (!Tt.includes(e)) throw new Error(`Unsupported attribute type: ${e.name}`);
        const l = Tt.indexOf(e);
        if (l > s && (n = e, s = l, t = i.normalized), null == r) r = i.itemSize; else if (i.itemSize != r) throw new Error(`Unable to merge attributes, item size differs: ${i.itemSize} != ${r}`);
        o += a.vertexCount * r;
    }
    if (!n || null === r) return null;
    const i = new n(o);
    let a = 0;
    for (const {attribute: s, rangeData: n} of e) {
        const e = n.vertexStart * r, o = n.vertexCount * r, l = e + o;
        let c = s.array, u = s.normalized;
        if (i instanceof Float32Array && c instanceof Uint16Array && !t && u) {
            const e = new Float32Array(c.length);
            for (let t = 0; t < c.length; t++) e[t] = c[t] / 65535;
            c = e, u = !1;
        }
        if (i.constructor !== c.constructor) throw new Error(`Assertion failed, array types are not the same: ${i.constructor.name} !== ${c.constructor.name}`);
        if (t != u) throw new Error(`Assertion failed, normalized values are not the same: ${t} !== ${u}`);
        i.set(c.subarray(e, l), a), a += o;
    }
    return new x(i, r, t);
}

function yt(e) {
    const t = new Map, s = wt(e, t), n = [];
    for (const [e, s] of t) {
        const t = {
            index: null,
            attributes: [],
            groups: e.groups
        };
        for (const [s, n] of Object.entries(e.attributes)) t.attributes.push({
            name: s,
            array: n.array,
            itemSize: n.itemSize,
            normalized: n.normalized
        });
        e.index && (t.index = {
            array: e.index.array
        }), n[s] = t;
    }
    return {
        object: s,
        geometries: n
    };
}

function wt(e, t) {
    const s = [];
    for (const n of e.children) s.push(wt(n, t));
    const n = {
        name: e.name,
        matrix: e.matrix.elements,
        children: s
    };
    if (e instanceof I) {
        if (Array.isArray(e.material)) {
            n.material = [];
            for (const t of e.material) n.material.push(t.name);
        } else n.material = e.material.name;
        let s;
        t.has(e.geometry) ? s = t.get(e.geometry) : (s = t.size, t.set(e.geometry, s)), 
        n.geo = s;
    }
    return n;
}

const At = {
    coolingShelfSmallSteak: {
        tileLength: 1,
        fallingProductTypes: [ [ "steak", "steak" ] ],
        exactFallingProductCount: 1
    },
    crateShelfSmallBananaWaterMelon: {
        tileLength: 1,
        fallingProductTypes: [ [ "banana", "watermelon" ] ]
    },
    crateShelfSmallCarrotEggplant: {
        tileLength: 1,
        fallingProductTypes: [ [ "carrot", "eggplant" ] ]
    },
    crateShelfSmallLeekBellpepper: {
        tileLength: 1,
        fallingProductTypes: [ [ "leek", "bellPepper" ] ]
    },
    freezerLargeIceCream: {
        tileLength: 2,
        fallingProductTypes: [ [ [ "iceCreamOnStick1", "iceCreamOnStick3", "iceCreamBox" ], [ "iceCreamPink", "iceCreamYellow" ] ], [ [ "iceCreamOnStick3", "iceCreamOnStick2" ], [ "iceCreamBrown", "iceCreamMint" ] ] ]
    },
    freezerSmallIceCream: {
        tileLength: 1,
        fallingProductTypes: [ [ [ "iceCreamOnStick1", "iceCreamOnStick3", "iceCreamBox" ], [ "iceCreamPink", "iceCreamBrown" ] ] ]
    },
    freezerSmallPizza: {
        tileLength: 1,
        fallingProductTypes: [ [ "pizza", "pizza" ] ]
    },
    palletShelfSmallOliveOilBarrels: {
        tileLength: 1,
        fallingProductTypes: [ [ "oliveOilBarrel", "oliveOilBarrel" ] ]
    },
    regularShelfCoolingShelfMediumMilkWine: {
        tileLength: 2,
        fallingProductTypes: [ [ "wine", "milk" ], [ "wine", "milk" ] ]
    },
    regularShelfMediumSauce: {
        tileLength: 2,
        fallingProductTypes: [ [ "tomatoSauce", "mustard" ], [ "tomatoSauce", [ "ketchup", "mayonnaise" ] ] ]
    },
    regularShelfSmallBleach: {
        tileLength: 1,
        fallingProductTypes: [ [ [ "bleachBottleBig", "bleachBottleSmall" ], [ "bleachBottleBig", "bleachBottleSmall" ] ] ]
    },
    regularShelfSmallBubblegum: {
        tileLength: 1,
        fallingProductTypes: [ [ "bubblegum", "bubblegum" ] ]
    },
    regularShelfSmallEggsTuna: {
        tileLength: 1,
        fallingProductTypes: [ [ "eggBox", "tunaCan" ] ]
    },
    regularShelfSmallJuices: {
        tileLength: 1,
        fallingProductTypes: [ [ [ "orangeJuice", "appleJuice" ], [ "cherryJuice", "pineappleJuice" ] ] ]
    },
    regularShelfSmallOliveOil: {
        tileLength: 1,
        fallingProductTypes: [ [ [ "oliveOilBottle", "oliveOilBarrel" ], [ "oliveOilBottle", "oliveOilBarrel" ] ] ]
    },
    regularShelfSmallTeaLemonJuice: {
        tileLength: 1,
        fallingProductTypes: [ [ "lemonJuice", "tea" ] ]
    },
    roundedShelfSmallEggs: {
        tileLength: 1,
        fallingProductTypes: [ [ "eggBox", "eggBox" ] ]
    },
    flatCoolingShelfSmallFish: {
        tileLength: 1,
        fallingProductTypes: [ [ [ "smallFish", "bigFish" ], [ "smallFish", "bigFish" ] ] ]
    },
    flatCoolingShelfSmallCrab: {
        tileLength: 1,
        fallingProductTypes: [ [ "crab", "crab" ] ],
        exactFallingProductCount: 4
    },
    flatCoolingShelfSmallSquid: {
        tileLength: 1,
        fallingProductTypes: [ [ "squid", "squid" ] ],
        exactFallingProductCount: 2
    },
    flatCoolingShelfSmallSwordfish: {
        tileLength: 1,
        fallingProductTypes: [ [ "swordFish", "swordFish" ] ]
    }
}, St = [ [ "crateShelfSmallBananaWaterMelon", "crateShelfSmallCarrotEggplant", "crateShelfSmallLeekBellpepper" ], [ "regularShelfSmallEggsTuna", "regularShelfSmallTeaLemonJuice", "roundedShelfSmallEggs", "freezerSmallPizza" ], [ "regularShelfSmallJuices", "regularShelfCoolingShelfMediumMilkWine" ], [ "flatCoolingShelfSmallCrab" ], [ "regularShelfMediumSauce", "regularShelfSmallBubblegum" ], [ "palletShelfSmallOliveOilBarrels", "regularShelfSmallOliveOil" ], [ "freezerLargeIceCream", "freezerSmallIceCream" ], [ "coolingShelfSmallSteak" ], [ "regularShelfSmallBleach" ], [ "flatCoolingShelfSmallFish", "flatCoolingShelfSmallSquid", "flatCoolingShelfSmallSwordfish" ] ], bt = [ {
    x: 2,
    y: 1,
    groupLength: 2
}, {
    x: 2,
    y: 1,
    groupLength: 3
}, {
    x: 2,
    y: 1,
    groupLength: 4
}, {
    x: 3,
    y: 1,
    groupLength: 3
}, {
    x: 4,
    y: 1,
    groupLength: 5
}, {
    x: 3,
    y: 2,
    groupLength: 3
}, {
    x: 3,
    y: 2,
    groupLength: 4
}, {
    x: 4,
    y: 2,
    groupLength: 5
}, {
    x: 4,
    y: 2,
    groupLength: 5
} ];

async function Rt({startX: e = 0, startY: t = 0, endX: s = 10, endY: n = 10} = {}) {
    const r = await vt("floor.glb"), o = new p;
    for (let i = e; i < s; i += 2) for (let e = t; e < n; e += 2) {
        const t = r.scene.clone();
        t.position.set(i, 0, e), o.add(t), t.updateWorldMatrix(!1, !0);
    }
    return o;
}

const _t = [ "boostUpgrade", "customerCautionUpgrade", "gripUpgrade", "trashStorageUpgrade1", "trashStorageUpgrade2", "trashStorageUpgrade3", "safetyGuardUpgrade1", "safetyGuardUpgrade2", "speedUpgrade1", "speedUpgrade2", "speedUpgrade3", "wheelLeftFront", "wheelLeftBack", "wheelRightFront", "wheelRightBack", "raccoonHead" ];

globalThis.VERSION_TIMESTAMP = "000", globalThis.DEBUG = !0, globalThis.ROLLUP_BUILD = !1, 
function() {
    if (ft) throw new Error("gltf loader already initialized");
    ft = new ge;
    const e = new ht;
    e.setDecoderPath("../draco/"), e.setWorkerLimit(1), e.setDecoderConfig({
        type: "wasm"
    }), ft.setDRACOLoader(e);
    const t = JSON.stringify({
        asset: {
            version: "2.0"
        },
        extensionsUsed: [ "KHR_draco_mesh_compression" ]
    }), s = (new TextEncoder).encode(t);
    ft.parse(s, "", (() => {}), (() => {}));
}();

const Lt = {
    loadGlbAsset: async function({glbBuffer: e, keepCustomProperties: t = [], merge: s = !0}) {
        const n = await mt(e);
        n.scene.updateWorldMatrix(!1, !0);
        let r = n.scene;
        return s && (r = pt(r, {
            keepCustomProperties: t
        })), r ? yt(r) : null;
    },
    buildLevel: async function(e, t) {
        const s = function(e) {
            const t = new Set, s = new Set, n = Math.min(St.length - 1, e);
            for (let e = 0; e <= n; e++) {
                const r = St[e];
                if (e == n) for (const e of r) s.add(e); else for (const e of r) t.add(e);
            }
            const r = [];
            for (const e of t) r.push({
                probability: .6,
                type: e
            });
            for (const e of s) r.push({
                probability: 1,
                type: e
            });
            let o = bt[e];
            if (!o) {
                const t = he(3, St.length - 1, e);
                o = {
                    x: Math.floor(ue(2, 5, t)),
                    y: Math.floor(ue(1, 2, t)),
                    groupLength: Math.floor(ue(4, 7, t))
                };
            }
            return {
                shelfGroupCountX: o.x,
                shelfGroupCountY: o.y,
                shelfGroupLength: o.groupLength,
                shelfTypes: r,
                requiredShelves: Array.from(s)
            };
        }(e), n = s.shelfTypes.map((e => "string" == typeof e ? {
            probability: 1,
            item: e
        } : {
            probability: e.probability,
            item: e.type
        })), r = .5;
        let o = !1;
        function i(e) {
            let t = null;
            o || (s.requiredShelves.length > 0 && (t = s.requiredShelves.map((e => ({
                probability: 1,
                item: e
            })))), o = !0), t || (t = n);
            const r = t.filter((t => 2 * At[t.item].tileLength <= e));
            return de(r);
        }
        const a = s.shelfGroupCountX, l = s.shelfGroupCountY, c = 2 * s.shelfGroupLength, u = [];
        for (let e = 0; e < a; e++) {
            const e = [];
            u.push(e);
            for (let t = 0; t < l; t++) {
                const t = [];
                e.push(t);
                let s = 0;
                for (;s < c; ) {
                    const e = i(c - s);
                    if (!e) continue;
                    t.push(e);
                    s += 2 * At[e].tileLength;
                }
            }
        }
        const h = new Set;
        for (const e of u) for (const t of e) for (const e of t) e && h.add(e);
        const f = [];
        for (const e of h) {
            const t = (async () => {
                const t = await Et.send("getAssetBuffer", `shelves/${e}.glb`), s = await mt(t);
                s.scene.updateWorldMatrix(!1, !0);
                const n = pt(s.scene);
                if (!n) throw new Error(`Failed to merge ${e}.glb`);
                return [ e, n ];
            })();
            f.push(t);
        }
        const m = new Map(await Promise.all(f)), g = [], T = [];
        for (const [e, t] of u.entries()) {
            const s = 6 * e;
            for (const [e, n] of t.entries()) {
                const t = e * (c + 6);
                let o = 0;
                for (const e of n) {
                    const n = m.get(e);
                    if (!n) continue;
                    const r = n.clone();
                    r.position.set(s, 0, t + o), r.updateWorldMatrix(!1, !0);
                    const i = At[e], a = new d(1, 0, i.tileLength), l = a.clone();
                    l.x += r.position.x, l.y = 1, l.z += r.position.z, g.push({
                        asset: yt(r),
                        extraData: {
                            objectCenter: a.toArray(),
                            colliderCenter: l.toArray(),
                            colliderSize: [ 1, 1, i.tileLength ],
                            fallingProductTypes: i.fallingProductTypes,
                            exactFallingProductCount: i.exactFallingProductCount || null
                        }
                    }), o += 2 * i.tileLength;
                }
                T.push({
                    minX: s - r,
                    minZ: t - r,
                    maxX: s + r + 2,
                    maxZ: t + r + o
                });
            }
        }
        const x = new p;
        vt("floor.glb");
        const y = vt("plasterWall.glb"), w = vt("checkout.glb"), A = vt("dumpster.glb"), S = vt("wallDecoration.glb"), b = -4, R = 2 * a + 4 * a, _ = -6, L = l * c + 6 * l + 8, E = await Rt({
            startX: b,
            startY: _,
            endX: R,
            endY: L
        });
        x.add(E);
        const v = [], M = fe(t, 0, 3, 0, 1), C = await S, I = [], P = [];
        for (const e of C.scene.children) {
            const s = "Level", n = e.name.indexOf(s);
            if (n >= 0) {
                const r = parseInt(e.name.substring(n + s.length));
                r <= t && I.push(e), r == t && P.push(e);
            }
        }
        function O(e = !1) {
            if (!e && Math.random() > M) return null;
            const t = me(e ? P : I);
            return t ? t.clone() : null;
        }
        const k = await y;
        for (let e = _; e < L; e += 4) {
            const t = k.scene.clone();
            t.position.set(b, 0, e + 4), t.rotation.y = .5 * Math.PI, t.updateWorldMatrix(!1, !0), 
            x.add(t);
            const s = k.scene.clone();
            s.position.set(R, 0, e), s.rotation.y = .5 * -Math.PI, s.updateWorldMatrix(!1, !0), 
            x.add(s);
        }
        const N = [ 5, 10, (L - _) / 2 + 5 ];
        v.push({
            center: [ -9, 0, (L + _) / 2 ],
            size: N
        }), v.push({
            center: [ R + 5, 0, (L + _) / 2 ],
            size: N
        });
        for (let e = _; e < L; e += 2) {
            if (e > -4) {
                const t = O();
                t && (t.position.set(b, .5, e + 2), t.rotation.y = .5 * Math.PI, t.updateWorldMatrix(!1, !0), 
                x.add(t));
            }
            const t = O();
            t && (t.position.set(R, .5, e), t.rotation.y = .5 * -Math.PI, t.updateWorldMatrix(!1, !0), 
            x.add(t));
        }
        for (let e = b; e < R; e += 4) {
            const t = k.scene.clone();
            t.position.set(e, 0, _), t.updateWorldMatrix(!1, !0), x.add(t);
        }
        const D = [ (R - b) / 2 + 5, 10, 5 ];
        v.push({
            center: [ (R + b) / 2, 0, -11 ],
            size: D
        }), v.push({
            center: [ (R + b) / 2, 0, L + 5 - 8 ],
            size: D
        });
        let H = !0;
        for (let e = b; e < R; e += 2) {
            if (e < -1) continue;
            const t = O(H);
            H = !1, t && (t.position.set(e, .5, _), t.updateWorldMatrix(!1, !0), x.add(t));
        }
        const U = await w;
        for (let e = b; e < R; e += 6) {
            const t = U.scene.clone();
            t.position.set(e - 2, 0, L - 8), t.updateWorldMatrix(!1, !0), x.add(t);
        }
        const F = await A;
        F.scene.position.set(-4, 0, -6), F.scene.updateWorldMatrix(!1, !0), x.add(F.scene);
        const B = [ -2.5, 1, -5 ];
        v.push({
            center: B,
            size: [ 1.5, 2, 1 ]
        });
        const G = [ B ];
        return {
            staticAssets: yt(pt(x) || new p),
            shelves: g,
            extra: {
                customerPaths: T,
                staticBodies: v,
                dumpsterPositions: G
            }
        };
    },
    buildLoadScreenFloor: async function() {
        return yt(pt(await Rt({
            startX: -22,
            endX: 22,
            startY: -22,
            endY: 22
        })) || new p);
    },
    loadCleaningMachine: async function() {
        const e = (await vt("cleaningMachine.glb")).scene;
        e.updateWorldMatrix(!1, !0);
        const t = [];
        for (const s of _t) {
            const n = e.getObjectByName(s);
            if (n && n.parent) {
                n.parent.remove(n);
                const e = n.matrixWorld.clone();
                t.push({
                    obj: n,
                    matrix: e
                });
            }
        }
        const s = pt(e, {
            rename: !1
        });
        if (!s) throw new Error("Failed to load cleaning machine asset");
        for (const {obj: e, matrix: n} of t) {
            e.matrixAutoUpdate = !1, e.matrixWorldAutoUpdate = !1, e.matrix.copy(new h), e.matrixWorld.copy(new h), 
            e.updateWorldMatrix(!1, !0);
            const t = pt(e, {
                rename: !1
            });
            t && (t.matrix.copy(n), s.add(t));
        }
        return yt(s);
    }
}, Et = new pe;

async function vt(e) {
    const t = await Et.send("getAssetBuffer", e);
    return await mt(t);
}

Et.initialize(globalThis, Lt);

export { vt as getGltfObjectFromAssetName, Et as messenger };
