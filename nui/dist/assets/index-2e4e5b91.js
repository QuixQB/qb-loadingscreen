(function () {
    const _0xb3a57 = document.createElement("link").relList;
    if (_0xb3a57 && _0xb3a57.supports && _0xb3a57.supports("modulepreload")) {
      return;
    }
    for (const _0x97e08d of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      _0x142642(_0x97e08d);
    }
    new MutationObserver(_0x3bd6df => {
      for (const _0x29e2f1 of _0x3bd6df) {
        if (_0x29e2f1.type === "childList") {
          for (const _0x2096f7 of _0x29e2f1.addedNodes) {
            if (_0x2096f7.tagName === "LINK" && _0x2096f7.rel === "modulepreload") {
              _0x142642(_0x2096f7);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function _0x30bc9f(_0x1ca4b3) {
      const _0x290715 = {};
      if (_0x1ca4b3.integrity) {
        _0x290715.integrity = _0x1ca4b3.integrity;
      }
      if (_0x1ca4b3.referrerPolicy) {
        _0x290715.referrerPolicy = _0x1ca4b3.referrerPolicy;
      }
      if (_0x1ca4b3.crossOrigin === "use-credentials") {
        _0x290715.credentials = "include";
      } else if (_0x1ca4b3.crossOrigin === "anonymous") {
        _0x290715.credentials = "omit";
      } else {
        _0x290715.credentials = "same-origin";
      }
      return _0x290715;
    }
    function _0x142642(_0x21613b) {
      _0x36a41b();
      _0x74e2e9();
      if (_0x21613b.ep) {
        return;
      }
      _0x21613b.ep = true;
      const _0x5b62a0 = _0x30bc9f(_0x21613b);
      fetch(_0x21613b.href, _0x5b62a0);
    }
  })();
  const xe = (_0x175a45, _0x467ff2) => _0x175a45 === _0x467ff2;
  const Ae = Symbol("solid-track");
  const W = {
    equals: xe
  };
  let ge = _e;
  const P = 1;
  const X = 2;
  const pe = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var m = null;
  let te = null;
  let p = null;
  let _ = null;
  let E = null;
  let z = 0;
  function H(_0x350544, _0x1ab383) {
    const _0x166a76 = p;
    const _0x41b585 = m;
    const _0x544740 = _0x350544.length === 0;
    const _0x8e85e4 = _0x544740 ? pe : {
      owned: null,
      cleanups: null,
      context: null,
      owner: _0x1ab383 === undefined ? _0x41b585 : _0x1ab383
    };
    const _0x1336c3 = _0x544740 ? _0x350544 : () => _0x350544(() => N(() => ee(_0x8e85e4)));
    m = _0x8e85e4;
    p = null;
    try {
      return R(_0x1336c3, true);
    } finally {
      p = _0x166a76;
      m = _0x41b585;
    }
  }
  function Q(_0x17e15d, _0x338ea8) {
    _0x338ea8 = _0x338ea8 ? Object.assign({}, W, _0x338ea8) : W;
    const _0x112f63 = {
      value: _0x17e15d,
      observers: null,
      observerSlots: null,
      comparator: _0x338ea8.equals || undefined
    };
    const _0x33b926 = _0x1f14d0 => {
      if (typeof _0x1f14d0 == "function") {
        _0x1f14d0 = _0x1f14d0(_0x112f63.value);
      }
      return me(_0x112f63, _0x1f14d0);
    };
    return [ve.bind(_0x112f63), _0x33b926];
  }
  function I(_0x4f222c, _0x1f14b8, _0x1734f1) {
    const _0xbf6160 = oe(_0x4f222c, _0x1f14b8, false, P);
    D(_0xbf6160);
  }
  function Se(_0x1f6f3a, _0x5a34cc, _0x11bbc8) {
    ge = Te;
    const _0x472b16 = oe(_0x1f6f3a, _0x5a34cc, false, P);
    if (!_0x11bbc8 || !_0x11bbc8.render) {
      _0x472b16.user = true;
    }
    if (E) {
      E.push(_0x472b16);
    } else {
      D(_0x472b16);
    }
  }
  function Ce(_0x2e4b88, _0x72a4d7, _0x37ca3c) {
    _0x37ca3c = _0x37ca3c ? Object.assign({}, W, _0x37ca3c) : W;
    const _0x35d1c1 = oe(_0x2e4b88, _0x72a4d7, true, 0);
    _0x35d1c1.observers = null;
    _0x35d1c1.observerSlots = null;
    _0x35d1c1.comparator = _0x37ca3c.equals || undefined;
    D(_0x35d1c1);
    return ve.bind(_0x35d1c1);
  }
  function N(_0x398470) {
    if (p === null) {
      return _0x398470();
    }
    const _0x3113b1 = p;
    p = null;
    try {
      return _0x398470();
    } finally {
      p = _0x3113b1;
    }
  }
  function fe(_0xc03309) {
    Se(() => N(_0xc03309));
  }
  function Ee(_0x36590a) {
    if (m !== null) {
      if (m.cleanups === null) {
        m.cleanups = [_0x36590a];
      } else {
        m.cleanups.push(_0x36590a);
      }
    }
    return _0x36590a;
  }
  function ve() {
    if (this.sources && this.state) {
      if (this.state === P) {
        D(this);
      } else {
        const _0x34e324 = _;
        _ = null;
        R(() => Y(this), false);
        _ = _0x34e324;
      }
    }
    if (p) {
      const _0x367921 = this.observers ? this.observers.length : 0;
      if (p.sources) {
        p.sources.push(this);
        p.sourceSlots.push(_0x367921);
      } else {
        p.sources = [this];
        p.sourceSlots = [_0x367921];
      }
      if (this.observers) {
        this.observers.push(p);
        this.observerSlots.push(p.sources.length - 1);
      } else {
        this.observers = [p];
        this.observerSlots = [p.sources.length - 1];
      }
    }
    return this.value;
  }
  function me(_0x1f33d9, _0x2ee1c4, _0x63ab1c) {
    let _0x484d1b = _0x1f33d9.value;
    if (!_0x1f33d9.comparator || !_0x1f33d9.comparator(_0x484d1b, _0x2ee1c4)) {
      _0x1f33d9.value = _0x2ee1c4;
      if (_0x1f33d9.observers && _0x1f33d9.observers.length) {
        R(() => {
          for (let _0x1985c1 = 0; _0x1985c1 < _0x1f33d9.observers.length; _0x1985c1 += 1) {
            const _0x454536 = _0x1f33d9.observers[_0x1985c1];
            const _0x1d7045 = te && te.running;
            if (_0x1d7045) {
              te.disposed.has(_0x454536);
            }
            if (_0x1d7045 ? !_0x454536.tState : !_0x454536.state) {
              if (_0x454536.pure) {
                _.push(_0x454536);
              } else {
                E.push(_0x454536);
              }
              if (_0x454536.observers) {
                we(_0x454536);
              }
            }
            if (!_0x1d7045) {
              _0x454536.state = P;
            }
          }
          if (_.length > 1000000) {
            _ = [];
            throw new Error();
          }
        }, false);
      }
    }
    return _0x2ee1c4;
  }
  function D(_0x32355e) {
    if (!_0x32355e.fn) {
      return;
    }
    ee(_0x32355e);
    const _0xf5acc4 = m;
    const _0x2a3cc8 = p;
    const _0x52f339 = z;
    p = m = _0x32355e;
    Le(_0x32355e, _0x32355e.value, _0x52f339);
    p = _0x2a3cc8;
    m = _0xf5acc4;
  }
  function Le(_0xbf8937, _0x5992ca, _0xd20418) {
    let _0x4ecbd5;
    try {
      _0x4ecbd5 = _0xbf8937.fn(_0x5992ca);
    } catch (_0x1670b6) {
      if (_0xbf8937.pure) {
        _0xbf8937.state = P;
        if (_0xbf8937.owned) {
          _0xbf8937.owned.forEach(ee);
        }
        _0xbf8937.owned = null;
      }
      _0xbf8937.updatedAt = _0xd20418 + 1;
      return ye(_0x1670b6);
    }
    if (!_0xbf8937.updatedAt || _0xbf8937.updatedAt <= _0xd20418) {
      if (_0xbf8937.updatedAt != null && "observers" in _0xbf8937) {
        me(_0xbf8937, _0x4ecbd5);
      } else {
        _0xbf8937.value = _0x4ecbd5;
      }
      _0xbf8937.updatedAt = _0xd20418;
    }
  }
  function oe(_0x5ad117, _0x554145, _0x2c8ca8, _0x348e0a = P, _0xf4a330) {
    const _0x3d04d2 = {
      fn: _0x5ad117,
      state: _0x348e0a,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: _0x554145,
      owner: m,
      context: null,
      pure: _0x2c8ca8
    };
    if (m !== null) {
      if (m !== pe) {
        if (m.owned) {
          m.owned.push(_0x3d04d2);
        } else {
          m.owned = [_0x3d04d2];
        }
      }
    }
    return _0x3d04d2;
  }
  function J(_0x15881d) {
    if (_0x15881d.state === 0) {
      return;
    }
    if (_0x15881d.state === X) {
      return Y(_0x15881d);
    }
    if (_0x15881d.suspense && N(_0x15881d.suspense.inFallback)) {
      return _0x15881d.suspense.effects.push(_0x15881d);
    }
    const _0x15002e = [_0x15881d];
    while ((_0x15881d = _0x15881d.owner) && (!_0x15881d.updatedAt || _0x15881d.updatedAt < z)) {
      if (_0x15881d.state) {
        _0x15002e.push(_0x15881d);
      }
    }
    for (let _0x1d93ec = _0x15002e.length - 1; _0x1d93ec >= 0; _0x1d93ec--) {
      _0x15881d = _0x15002e[_0x1d93ec];
      if (_0x15881d.state === P) {
        D(_0x15881d);
      } else if (_0x15881d.state === X) {
        const _0x2acbb5 = _;
        _ = null;
        R(() => Y(_0x15881d, _0x15002e[0]), false);
        _ = _0x2acbb5;
      }
    }
  }
  function R(_0x4440e9, _0x1d4a30) {
    if (_) {
      return _0x4440e9();
    }
    let _0xf593cd = false;
    if (!_0x1d4a30) {
      _ = [];
    }
    if (E) {
      _0xf593cd = true;
    } else {
      E = [];
    }
    z++;
    try {
      const _0x5ea725 = _0x4440e9();
      Pe(_0xf593cd);
      return _0x5ea725;
    } catch (_0x570f43) {
      if (!_0xf593cd) {
        E = null;
      }
      _ = null;
      ye(_0x570f43);
    }
  }
  function Pe(_0x142137) {
    if (_) {
      _e(_);
      _ = null;
    }
    if (_0x142137) {
      return;
    }
    const _0x15bd86 = E;
    E = null;
    if (_0x15bd86.length) {
      R(() => ge(_0x15bd86), false);
    }
  }
  function _e(_0x3f2eb9) {
    for (let _0x2ba250 = 0; _0x2ba250 < _0x3f2eb9.length; _0x2ba250++) {
      J(_0x3f2eb9[_0x2ba250]);
    }
  }
  function Te(_0x1ecb91) {
    let _0x2b162d;
    let _0x430ec1 = 0;
    for (_0x2b162d = 0; _0x2b162d < _0x1ecb91.length; _0x2b162d++) {
      const _0x49902f = _0x1ecb91[_0x2b162d];
      if (_0x49902f.user) {
        _0x1ecb91[_0x430ec1++] = _0x49902f;
      } else {
        J(_0x49902f);
      }
    }
    for (_0x2b162d = 0; _0x2b162d < _0x430ec1; _0x2b162d++) {
      J(_0x1ecb91[_0x2b162d]);
    }
  }
  function Y(_0x25b23c, _0x1eb438) {
    _0x25b23c.state = 0;
    for (let _0x33540b = 0; _0x33540b < _0x25b23c.sources.length; _0x33540b += 1) {
      const _0x2589a5 = _0x25b23c.sources[_0x33540b];
      if (_0x2589a5.sources) {
        const _0x23d8c1 = _0x2589a5.state;
        if (_0x23d8c1 === P) {
          if (_0x2589a5 !== _0x1eb438 && (!_0x2589a5.updatedAt || _0x2589a5.updatedAt < z)) {
            J(_0x2589a5);
          }
        } else if (_0x23d8c1 === X) {
          Y(_0x2589a5, _0x1eb438);
        }
      }
    }
  }
  function we(_0x59837a) {
    for (let _0x531ac8 = 0; _0x531ac8 < _0x59837a.observers.length; _0x531ac8 += 1) {
      const _0x21850f = _0x59837a.observers[_0x531ac8];
      if (!_0x21850f.state) {
        _0x21850f.state = X;
        if (_0x21850f.pure) {
          _.push(_0x21850f);
        } else {
          E.push(_0x21850f);
        }
        if (_0x21850f.observers) {
          we(_0x21850f);
        }
      }
    }
  }
  function ee(_0x7e3021) {
    let _0x999802;
    if (_0x7e3021.sources) {
      while (_0x7e3021.sources.length) {
        const _0xbb515 = _0x7e3021.sources.pop();
        const _0x33e9c7 = _0x7e3021.sourceSlots.pop();
        const _0x12b010 = _0xbb515.observers;
        if (_0x12b010 && _0x12b010.length) {
          const _0x3a7483 = _0x12b010.pop();
          const _0xd9d7e8 = _0xbb515.observerSlots.pop();
          if (_0x33e9c7 < _0x12b010.length) {
            _0x3a7483.sourceSlots[_0xd9d7e8] = _0x33e9c7;
            _0x12b010[_0x33e9c7] = _0x3a7483;
            _0xbb515.observerSlots[_0x33e9c7] = _0xd9d7e8;
          }
        }
      }
    }
    if (_0x7e3021.owned) {
      for (_0x999802 = _0x7e3021.owned.length - 1; _0x999802 >= 0; _0x999802--) {
        ee(_0x7e3021.owned[_0x999802]);
      }
      _0x7e3021.owned = null;
    }
    if (_0x7e3021.cleanups) {
      for (_0x999802 = _0x7e3021.cleanups.length - 1; _0x999802 >= 0; _0x999802--) {
        _0x7e3021.cleanups[_0x999802]();
      }
      _0x7e3021.cleanups = null;
    }
    _0x7e3021.state = 0;
    _0x7e3021.context = null;
  }
  function ye(_0x54a51a) {
    throw _0x54a51a;
  }
  const Ne = Symbol("fallback");
  function ce(_0x14534c) {
    for (let _0x431665 = 0; _0x431665 < _0x14534c.length; _0x431665++) {
      _0x14534c[_0x431665]();
    }
  }
  function ke(_0x43a5a1, _0x21efb0, _0x140905 = {}) {
    let _0xd03978 = [];
    let _0x14bc15 = [];
    let _0x397c0f = [];
    let _0x5af301 = 0;
    let _0x3bf4c1 = _0x21efb0.length > 1 ? [] : null;
    Ee(() => ce(_0x397c0f));
    return () => {
      let _0x234ec8 = _0x43a5a1() || [];
      let _0x458f3e;
      let _0x5a82e3;
      _0x234ec8[Ae];
      return N(() => {
        let _0x36d853 = _0x234ec8.length;
        let _0x1fdf7c;
        let _0x41ebef;
        let _0x2534ea;
        let _0x2b1ad2;
        let _0x4900d8;
        let _0x1c56f4;
        let _0x223905;
        let _0x39bbcc;
        let _0x9c7952;
        if (_0x36d853 === 0) {
          if (_0x5af301 !== 0) {
            ce(_0x397c0f);
            _0x397c0f = [];
            _0xd03978 = [];
            _0x14bc15 = [];
            _0x5af301 = 0;
            _0x3bf4c1 &&= [];
          }
          if (_0x140905.fallback) {
            _0xd03978 = [Ne];
            _0x14bc15[0] = H(_0x7422c => {
              _0x397c0f[0] = _0x7422c;
              return _0x140905.fallback();
            });
            _0x5af301 = 1;
          }
        } else if (_0x5af301 === 0) {
          _0x14bc15 = new Array(_0x36d853);
          _0x5a82e3 = 0;
          for (; _0x5a82e3 < _0x36d853; _0x5a82e3++) {
            _0xd03978[_0x5a82e3] = _0x234ec8[_0x5a82e3];
            _0x14bc15[_0x5a82e3] = H(_0x591984);
          }
          _0x5af301 = _0x36d853;
        } else {
          _0x2534ea = new Array(_0x36d853);
          _0x2b1ad2 = new Array(_0x36d853);
          if (_0x3bf4c1) {
            _0x4900d8 = new Array(_0x36d853);
          }
          _0x1c56f4 = 0;
          _0x223905 = Math.min(_0x5af301, _0x36d853);
          for (; _0x1c56f4 < _0x223905 && _0xd03978[_0x1c56f4] === _0x234ec8[_0x1c56f4]; _0x1c56f4++);
          _0x223905 = _0x5af301 - 1;
          _0x39bbcc = _0x36d853 - 1;
          for (; _0x223905 >= _0x1c56f4 && _0x39bbcc >= _0x1c56f4 && _0xd03978[_0x223905] === _0x234ec8[_0x39bbcc]; _0x223905--, _0x39bbcc--) {
            _0x2534ea[_0x39bbcc] = _0x14bc15[_0x223905];
            _0x2b1ad2[_0x39bbcc] = _0x397c0f[_0x223905];
            if (_0x3bf4c1) {
              _0x4900d8[_0x39bbcc] = _0x3bf4c1[_0x223905];
            }
          }
          _0x1fdf7c = new Map();
          _0x41ebef = new Array(_0x39bbcc + 1);
          _0x5a82e3 = _0x39bbcc;
          for (; _0x5a82e3 >= _0x1c56f4; _0x5a82e3--) {
            _0x9c7952 = _0x234ec8[_0x5a82e3];
            _0x458f3e = _0x1fdf7c.get(_0x9c7952);
            _0x41ebef[_0x5a82e3] = _0x458f3e === undefined ? -1 : _0x458f3e;
            _0x1fdf7c.set(_0x9c7952, _0x5a82e3);
          }
          for (_0x458f3e = _0x1c56f4; _0x458f3e <= _0x223905; _0x458f3e++) {
            _0x9c7952 = _0xd03978[_0x458f3e];
            _0x5a82e3 = _0x1fdf7c.get(_0x9c7952);
            if (_0x5a82e3 !== undefined && _0x5a82e3 !== -1) {
              _0x2534ea[_0x5a82e3] = _0x14bc15[_0x458f3e];
              _0x2b1ad2[_0x5a82e3] = _0x397c0f[_0x458f3e];
              if (_0x3bf4c1) {
                _0x4900d8[_0x5a82e3] = _0x3bf4c1[_0x458f3e];
              }
              _0x5a82e3 = _0x41ebef[_0x5a82e3];
              _0x1fdf7c.set(_0x9c7952, _0x5a82e3);
            } else {
              _0x397c0f[_0x458f3e]();
            }
          }
          for (_0x5a82e3 = _0x1c56f4; _0x5a82e3 < _0x36d853; _0x5a82e3++) {
            if (_0x5a82e3 in _0x2534ea) {
              _0x14bc15[_0x5a82e3] = _0x2534ea[_0x5a82e3];
              _0x397c0f[_0x5a82e3] = _0x2b1ad2[_0x5a82e3];
              if (_0x3bf4c1) {
                _0x3bf4c1[_0x5a82e3] = _0x4900d8[_0x5a82e3];
                _0x3bf4c1[_0x5a82e3](_0x5a82e3);
              }
            } else {
              _0x14bc15[_0x5a82e3] = H(_0x591984);
            }
          }
          _0x14bc15 = _0x14bc15.slice(0, _0x5af301 = _0x36d853);
          _0xd03978 = _0x234ec8.slice(0);
        }
        return _0x14bc15;
      });
      function _0x591984(_0x119a97) {
        _0x397c0f[_0x5a82e3] = _0x119a97;
        if (_0x3bf4c1) {
          const [_0x1e0ee3, _0x585baa] = Q(_0x5a82e3);
          _0x3bf4c1[_0x5a82e3] = _0x585baa;
          return _0x21efb0(_0x234ec8[_0x5a82e3], _0x1e0ee3);
        }
        return _0x21efb0(_0x234ec8[_0x5a82e3]);
      }
    };
  }
  function M(_0x5abc5a, _0x4cb0fe) {
    return N(() => _0x5abc5a(_0x4cb0fe || {}));
  }
  function Oe(_0xe6a10c) {
    const _0x3f3fea = "fallback" in _0xe6a10c && {
      fallback: () => _0xe6a10c.fallback
    };
    return Ce(ke(() => _0xe6a10c.each, _0xe6a10c.children, _0x3f3fea || undefined));
  }
  function Be(_0x211023, _0x3fd23a, _0x11797a) {
    let _0x2132f0 = _0x11797a.length;
    let _0xedb064 = _0x3fd23a.length;
    let _0x3afd00 = _0x2132f0;
    let _0xd148c3 = 0;
    let _0x54a7e2 = 0;
    let _0x5bde1a = _0x3fd23a[_0xedb064 - 1].nextSibling;
    let _0xb9e943 = null;
    while (_0xd148c3 < _0xedb064 || _0x54a7e2 < _0x3afd00) {
      if (_0x3fd23a[_0xd148c3] === _0x11797a[_0x54a7e2]) {
        _0xd148c3++;
        _0x54a7e2++;
        continue;
      }
      while (_0x3fd23a[_0xedb064 - 1] === _0x11797a[_0x3afd00 - 1]) {
        _0xedb064--;
        _0x3afd00--;
      }
      if (_0xedb064 === _0xd148c3) {
        const _0x2bd656 = _0x3afd00 < _0x2132f0 ? _0x54a7e2 ? _0x11797a[_0x54a7e2 - 1].nextSibling : _0x11797a[_0x3afd00 - _0x54a7e2] : _0x5bde1a;
        while (_0x54a7e2 < _0x3afd00) {
          _0x211023.insertBefore(_0x11797a[_0x54a7e2++], _0x2bd656);
        }
      } else if (_0x3afd00 === _0x54a7e2) {
        while (_0xd148c3 < _0xedb064) {
          if (!_0xb9e943 || !_0xb9e943.has(_0x3fd23a[_0xd148c3])) {
            _0x3fd23a[_0xd148c3].remove();
          }
          _0xd148c3++;
        }
      } else if (_0x3fd23a[_0xd148c3] === _0x11797a[_0x3afd00 - 1] && _0x11797a[_0x54a7e2] === _0x3fd23a[_0xedb064 - 1]) {
        const _0x367da6 = _0x3fd23a[--_0xedb064].nextSibling;
        _0x211023.insertBefore(_0x11797a[_0x54a7e2++], _0x3fd23a[_0xd148c3++].nextSibling);
        _0x211023.insertBefore(_0x11797a[--_0x3afd00], _0x367da6);
        _0x3fd23a[_0xedb064] = _0x11797a[_0x3afd00];
      } else {
        if (!_0xb9e943) {
          _0xb9e943 = new Map();
          let _0x19fcbb = _0x54a7e2;
          while (_0x19fcbb < _0x3afd00) {
            _0xb9e943.set(_0x11797a[_0x19fcbb], _0x19fcbb++);
          }
        }
        const _0x350787 = _0xb9e943.get(_0x3fd23a[_0xd148c3]);
        if (_0x350787 != null) {
          if (_0x54a7e2 < _0x350787 && _0x350787 < _0x3afd00) {
            let _0x2f51af = _0xd148c3;
            let _0x430627 = 1;
            let _0x2dc8da;
            while (++_0x2f51af < _0xedb064 && _0x2f51af < _0x3afd00 && (_0x2dc8da = _0xb9e943.get(_0x3fd23a[_0x2f51af])) != null && _0x2dc8da === _0x350787 + _0x430627) {
              _0x430627++;
            }
            if (_0x430627 > _0x350787 - _0x54a7e2) {
              const _0x255d81 = _0x3fd23a[_0xd148c3];
              while (_0x54a7e2 < _0x350787) {
                _0x211023.insertBefore(_0x11797a[_0x54a7e2++], _0x255d81);
              }
            } else {
              _0x211023.replaceChild(_0x11797a[_0x54a7e2++], _0x3fd23a[_0xd148c3++]);
            }
          } else {
            _0xd148c3++;
          }
        } else {
          _0x3fd23a[_0xd148c3++].remove();
        }
      }
    }
  }
  const ue = "_$DX_DELEGATE";
  function je(_0x609530, _0x327ff7, _0x414269, _0x7bcea6 = {}) {
    let _0xa59859;
    H(_0x4bd250 => {
      _0xa59859 = _0x4bd250;
      if (_0x327ff7 === document) {
        _0x609530();
      } else {
        U(_0x327ff7, _0x609530(), _0x327ff7.firstChild ? null : undefined, _0x414269);
      }
    }, _0x7bcea6.owner);
    return () => {
      _0xa59859();
      _0x327ff7.textContent = "";
    };
  }
  function re(_0x184b9d, _0x19f801, _0x1c61e0) {
    let _0x3803e9;
    const _0x11f410 = () => {
      const _0x3ec4d6 = document.createElement("template");
      _0x3ec4d6.innerHTML = _0x184b9d;
      if (_0x1c61e0) {
        return _0x3ec4d6.content.firstChild.firstChild;
      } else {
        return _0x3ec4d6.content.firstChild;
      }
    };
    const _0x1b30b9 = _0x19f801 ? () => N(() => document.importNode(_0x3803e9 ||= _0x11f410(), true)) : () => (_0x3803e9 ||= _0x11f410()).cloneNode(true);
    _0x1b30b9.cloneNode = _0x1b30b9;
    return _0x1b30b9;
  }
  function be(_0x7813b2, _0x28f301 = window.document) {
    const _0x5d35a1 = _0x28f301[ue] ||= new Set();
    for (let _0x46388e = 0, _0x3a7bcd = _0x7813b2.length; _0x46388e < _0x3a7bcd; _0x46388e++) {
      const _0x46e097 = _0x7813b2[_0x46388e];
      if (!_0x5d35a1.has(_0x46e097)) {
        _0x5d35a1.add(_0x46e097);
        _0x28f301.addEventListener(_0x46e097, Ue);
      }
    }
  }
  function le(_0x23eedd, _0x1a929b, _0x3400c9) {
    if (_0x3400c9 == null) {
      _0x23eedd.removeAttribute(_0x1a929b);
    } else {
      _0x23eedd.setAttribute(_0x1a929b, _0x3400c9);
    }
  }
  function C(_0x23a6de, _0x16b059) {
    if (_0x16b059 == null) {
      _0x23a6de.removeAttribute("class");
    } else {
      _0x23a6de.className = _0x16b059;
    }
  }
  function ne(_0x5de32a, _0x16ba7a, _0x1bb730 = {}) {
    const _0x479ce5 = Object.keys(_0x16ba7a || {});
    const _0x11933d = Object.keys(_0x1bb730);
    let _0x1cb480;
    let _0x3d67d6;
    _0x1cb480 = 0;
    _0x3d67d6 = _0x11933d.length;
    for (; _0x1cb480 < _0x3d67d6; _0x1cb480++) {
      const _0x50c831 = _0x11933d[_0x1cb480];
      if (!!_0x50c831 && _0x50c831 !== "undefined" && !_0x16ba7a[_0x50c831]) {
        ae(_0x5de32a, _0x50c831, false);
        delete _0x1bb730[_0x50c831];
      }
    }
    _0x1cb480 = 0;
    _0x3d67d6 = _0x479ce5.length;
    for (; _0x1cb480 < _0x3d67d6; _0x1cb480++) {
      const _0x58055d = _0x479ce5[_0x1cb480];
      const _0x2d572d = !!_0x16ba7a[_0x58055d];
      if (!!_0x58055d && _0x58055d !== "undefined" && _0x1bb730[_0x58055d] !== _0x2d572d && !!_0x2d572d) {
        ae(_0x5de32a, _0x58055d, true);
        _0x1bb730[_0x58055d] = _0x2d572d;
      }
    }
    return _0x1bb730;
  }
  function Me(_0x2df24f, _0x5542fb, _0xab23e0) {
    return N(() => _0x2df24f(_0x5542fb, _0xab23e0));
  }
  function U(_0x553c17, _0x48bcf5, _0x46cdae, _0x404598) {
    if (_0x46cdae !== undefined && !_0x404598) {
      _0x404598 = [];
    }
    if (typeof _0x48bcf5 != "function") {
      return Z(_0x553c17, _0x48bcf5, _0x404598, _0x46cdae);
    }
    I(_0x32f17b => Z(_0x553c17, _0x48bcf5(), _0x32f17b, _0x46cdae), _0x404598);
  }
  function ae(_0x38cecb, _0x311c1f, _0x2944b9) {
    const _0x12fde4 = _0x311c1f.trim().split(/\s+/);
    for (let _0x55dadf = 0, _0xe007d = _0x12fde4.length; _0x55dadf < _0xe007d; _0x55dadf++) {
      _0x38cecb.classList.toggle(_0x12fde4[_0x55dadf], _0x2944b9);
    }
  }
  function Ue(_0x4aa6ad) {
    const _0x2edd9d = "$$" + _0x4aa6ad.type;
    let _0x4cba0c = _0x4aa6ad.composedPath && _0x4aa6ad.composedPath()[0] || _0x4aa6ad.target;
    if (_0x4aa6ad.target !== _0x4cba0c) {
      Object.defineProperty(_0x4aa6ad, "target", {
        configurable: true,
        value: _0x4cba0c
      });
    }
    Object.defineProperty(_0x4aa6ad, "currentTarget", {
      configurable: true,
      get() {
        return _0x4cba0c || document;
      }
    });
    while (_0x4cba0c) {
      const _0x165a18 = _0x4cba0c[_0x2edd9d];
      if (_0x165a18 && !_0x4cba0c.disabled) {
        const _0x134141 = _0x4cba0c[_0x2edd9d + "Data"];
        if (_0x134141 !== undefined) {
          _0x165a18.call(_0x4cba0c, _0x134141, _0x4aa6ad);
        } else {
          _0x165a18.call(_0x4cba0c, _0x4aa6ad);
        }
        if (_0x4aa6ad.cancelBubble) {
          return;
        }
      }
      _0x4cba0c = _0x4cba0c._$host || _0x4cba0c.parentNode || _0x4cba0c.host;
    }
  }
  function Z(_0x216542, _0x4bf5d6, _0x16ff8e, _0x4b929b, _0x134447) {
    while (typeof _0x16ff8e == "function") {
      _0x16ff8e = _0x16ff8e();
    }
    if (_0x4bf5d6 === _0x16ff8e) {
      return _0x16ff8e;
    }
    const _0x52f575 = typeof _0x4bf5d6;
    const _0x32b4d8 = _0x4b929b !== undefined;
    _0x216542 = _0x32b4d8 && _0x16ff8e[0] && _0x16ff8e[0].parentNode || _0x216542;
    if (_0x52f575 === "string" || _0x52f575 === "number") {
      if (_0x52f575 === "number") {
        _0x4bf5d6 = _0x4bf5d6.toString();
      }
      if (_0x32b4d8) {
        let _0x214d71 = _0x16ff8e[0];
        if (_0x214d71 && _0x214d71.nodeType === 3) {
          _0x214d71.data = _0x4bf5d6;
        } else {
          _0x214d71 = document.createTextNode(_0x4bf5d6);
        }
        _0x16ff8e = j(_0x216542, _0x16ff8e, _0x4b929b, _0x214d71);
      } else if (_0x16ff8e !== "" && typeof _0x16ff8e == "string") {
        _0x16ff8e = _0x216542.firstChild.data = _0x4bf5d6;
      } else {
        _0x16ff8e = _0x216542.textContent = _0x4bf5d6;
      }
    } else if (_0x4bf5d6 == null || _0x52f575 === "boolean") {
      _0x16ff8e = j(_0x216542, _0x16ff8e, _0x4b929b);
    } else {
      if (_0x52f575 === "function") {
        I(() => {
          let _0x48ee38 = _0x4bf5d6();
          while (typeof _0x48ee38 == "function") {
            _0x48ee38 = _0x48ee38();
          }
          _0x16ff8e = Z(_0x216542, _0x48ee38, _0x16ff8e, _0x4b929b);
        });
        return () => _0x16ff8e;
      }
      if (Array.isArray(_0x4bf5d6)) {
        const _0x54f15f = [];
        const _0x30dcec = _0x16ff8e && Array.isArray(_0x16ff8e);
        if (ie(_0x54f15f, _0x4bf5d6, _0x16ff8e, _0x134447)) {
          I(() => _0x16ff8e = Z(_0x216542, _0x54f15f, _0x16ff8e, _0x4b929b, true));
          return () => _0x16ff8e;
        }
        if (_0x54f15f.length === 0) {
          _0x16ff8e = j(_0x216542, _0x16ff8e, _0x4b929b);
          if (_0x32b4d8) {
            return _0x16ff8e;
          }
        } else if (_0x30dcec) {
          if (_0x16ff8e.length === 0) {
            de(_0x216542, _0x54f15f, _0x4b929b);
          } else {
            Be(_0x216542, _0x16ff8e, _0x54f15f);
          }
        } else {
          if (_0x16ff8e) {
            j(_0x216542);
          }
          de(_0x216542, _0x54f15f);
        }
        _0x16ff8e = _0x54f15f;
      } else if (_0x4bf5d6.nodeType) {
        if (Array.isArray(_0x16ff8e)) {
          if (_0x32b4d8) {
            return _0x16ff8e = j(_0x216542, _0x16ff8e, _0x4b929b, _0x4bf5d6);
          }
          j(_0x216542, _0x16ff8e, null, _0x4bf5d6);
        } else if (_0x16ff8e == null || _0x16ff8e === "" || !_0x216542.firstChild) {
          _0x216542.appendChild(_0x4bf5d6);
        } else {
          _0x216542.replaceChild(_0x4bf5d6, _0x216542.firstChild);
        }
        _0x16ff8e = _0x4bf5d6;
      } else {
        console.warn("Unrecognized value. Skipped inserting", _0x4bf5d6);
      }
    }
    return _0x16ff8e;
  }
  function ie(_0x31149f, _0x179e06, _0x4459c3, _0x4633c5) {
    let _0xded2d9 = false;
    for (let _0x410e6b = 0, _0x49529d = _0x179e06.length; _0x410e6b < _0x49529d; _0x410e6b++) {
      let _0x237368 = _0x179e06[_0x410e6b];
      let _0x3d62b8 = _0x4459c3 && _0x4459c3[_0x410e6b];
      let _0x5527fa;
      if (_0x237368 != null && _0x237368 !== true && _0x237368 !== false) {
        if ((_0x5527fa = typeof _0x237368) == "object" && _0x237368.nodeType) {
          _0x31149f.push(_0x237368);
        } else if (Array.isArray(_0x237368)) {
          _0xded2d9 = ie(_0x31149f, _0x237368, _0x3d62b8) || _0xded2d9;
        } else if (_0x5527fa === "function") {
          if (_0x4633c5) {
            while (typeof _0x237368 == "function") {
              _0x237368 = _0x237368();
            }
            _0xded2d9 = ie(_0x31149f, Array.isArray(_0x237368) ? _0x237368 : [_0x237368], Array.isArray(_0x3d62b8) ? _0x3d62b8 : [_0x3d62b8]) || _0xded2d9;
          } else {
            _0x31149f.push(_0x237368);
            _0xded2d9 = true;
          }
        } else {
          const _0x35d5ef = String(_0x237368);
          if (_0x3d62b8 && _0x3d62b8.nodeType === 3 && _0x3d62b8.data === _0x35d5ef) {
            _0x31149f.push(_0x3d62b8);
          } else {
            _0x31149f.push(document.createTextNode(_0x35d5ef));
          }
        }
      }
    }
    return _0xded2d9;
  }
  function de(_0x231566, _0x36dfa1, _0x134362 = null) {
    for (let _0x325e31 = 0, _0x36c2f4 = _0x36dfa1.length; _0x325e31 < _0x36c2f4; _0x325e31++) {
      _0x231566.insertBefore(_0x36dfa1[_0x325e31], _0x134362);
    }
  }
  function j(_0xe4b5fc, _0x5e1563, _0x2c11de, _0x3b4c4d) {
    if (_0x2c11de === undefined) {
      return _0xe4b5fc.textContent = "";
    }
    const _0x5c72d1 = _0x3b4c4d || document.createTextNode("");
    if (_0x5e1563.length) {
      let _0x24ae05 = false;
      for (let _0x6f739a = _0x5e1563.length - 1; _0x6f739a >= 0; _0x6f739a--) {
        const _0x278871 = _0x5e1563[_0x6f739a];
        if (_0x5c72d1 !== _0x278871) {
          const _0x533e2b = _0x278871.parentNode === _0xe4b5fc;
          if (!_0x24ae05 && !_0x6f739a) {
            if (_0x533e2b) {
              _0xe4b5fc.replaceChild(_0x5c72d1, _0x278871);
            } else {
              _0xe4b5fc.insertBefore(_0x5c72d1, _0x2c11de);
            }
          } else if (_0x533e2b) {
            _0x278871.remove();
          }
        } else {
          _0x24ae05 = true;
        }
      }
    } else {
      _0xe4b5fc.insertBefore(_0x5c72d1, _0x2c11de);
    }
    return [_0x5c72d1];
  }
  const Ie = "_App_1wmf6_1";
  const Ve = "_button_1wmf6_15";
  const De = "_top_1wmf6_33";
  const Re = "_bottom_1wmf6_39";
  const Ke = "_active_1wmf6_45";
  const qe = "_progressBar_1wmf6_48";
  const Fe = "_box_1wmf6_62";
  const Ge = "_logo_1wmf6_71";
  const He = "_logoProgress_1wmf6_89";
  const Qe = "_videoStyle_1wmf6_99";
  const We = "_fadeIn_1wmf6_109";
  const Xe = "_fadeOut_1wmf6_113";
  const b = {
    App: Ie,
    button: Ve,
    top: De,
    bottom: Re,
    active: Ke,
    progressBar: qe,
    box: Fe,
    logo: Ge,
    logoProgress: He,
    videoStyle: Qe,
    fadeIn: We,
    fadeOut: Xe
  };
  const Je = "_social_1yjhx_1";
  const Ye = "_title_1yjhx_20";
  const Ze = {
    social: Je,
    title: Ye
  };
  const ze = re("<div><img>");
  function G(_0x5b56e3) {
    return (() => {
      const _0x1fd54b = ze();
      const _0x392c1d = _0x1fd54b.firstChild;
      _0x392c1d.$$mousedown = _0x46d745 => _0x46d745.preventDefault();
      _0x392c1d.$$click = () => {
        window.invokeNative("openUrl", _0x5b56e3.link);
      };
      I(_0x4ff9cc => {
        const _0xb590f3 = Ze.social;
        const _0x497acd = _0x5b56e3.icon;
        if (_0xb590f3 !== _0x4ff9cc._v$) {
          C(_0x1fd54b, _0x4ff9cc._v$ = _0xb590f3);
        }
        if (_0x497acd !== _0x4ff9cc._v$2) {
          le(_0x392c1d, "src", _0x4ff9cc._v$2 = _0x497acd);
        }
        return _0x4ff9cc;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x1fd54b;
    })();
  }
  be(["click", "mousedown"]);
  const et = "" + new URL("twitter-d21868bf.svg", import.meta.url).href;
  const tt = "" + new URL("youtube-9ba34c37.svg", import.meta.url).href;
  const nt = "" + new URL("store-d7be97ee.png", import.meta.url).href;
  const he = "" + new URL("logo-187456c5.png", import.meta.url).href;
  function st(_0x4c8bba) {
    for (var _0x34a30f = _0x4c8bba.length, _0x143723, _0x56a641; _0x34a30f !== 0;) {
      _0x56a641 = Math.floor(Math.random() * _0x34a30f);
      _0x34a30f -= 1;
      _0x143723 = _0x4c8bba[_0x34a30f];
      _0x4c8bba[_0x34a30f] = _0x4c8bba[_0x56a641];
      _0x4c8bba[_0x56a641] = _0x143723;
    }
    return _0x4c8bba;
  }
  const lt = re("<div><div class=\"h-full flex flex-col justify-end items-center gap-[2vh]\"><div class=\"w-full flex flex-row justify-start items-center pl-[0.8vh] gap-[0.8vh]\"></div><div class=\"flex flex-row justify-start items-center\"><div><img><div></div></div><div class=\"flex flex-col justify-center items-center gap-[0.6vh]\"><div>Qbhub Loadingscreen</div><div></div><div>1.0");
  const it = re("<div><div>");
  const se = st(["loadingscreen_overlay_cow.webm", "loadingscreen_overlay_deer.webm", "loadingscreen_overlay_rabbit.webm", "loadingscreen_overlay_raccoon.webm", "loadingscreen_overlay_rat.webm", "loadingscreen_overlay_bird.webm", "loadingscreen_overlay_cat.webm"]);
  const ot = "https://assets.nopixel.net/dev/images/loadingscreen/";
  function rt() {
    function _0x4d90f4(_0x31f559) {
      const _0x37efc2 = 100 - _0x4c9d21();
      const _0x5a48a7 = 100 / 14;
      const _0x31d8c6 = (13 - _0x31f559) * _0x5a48a7;
      const _0x2354e7 = (14 - _0x31f559) * _0x5a48a7;
      return "inset(0% " + Math.min(Math.max((_0x37efc2 - _0x31d8c6) / (_0x2354e7 - _0x31d8c6), 0), 1) * 100 + "% 0% 0%)";
    }
    fe(async () => {
      window.addEventListener("message", _0x3276e8 => {
        if (_0x3276e8.data.eventName === "loadProgress") {
          _0x56e687(Math.round(_0x3276e8.data.loadFraction * 100));
        }
      });
    });
    const [_0x4c9d21, _0x56e687] = Q(0);
    const [_0x4a3a89, _0x53ec75] = Q("faq");
    let _0x440920;
    const [_0x521f9e, _0x5b87b6] = Q([]);
    const _0x578251 = async () => {
      const _0x2d4bb7 = [];
      for (let _0x15fd14 = 0; _0x15fd14 < se.length; _0x15fd14++) {
        const _0x41a5ed = document.createElement("video");
        _0x41a5ed.src = "" + ot + se[_0x15fd14];
        _0x41a5ed.muted = true;
        await new Promise(_0x41df62 => {
          _0x41a5ed.addEventListener("canplaythrough", () => {
            _0x41df62(true);
          });
        });
        _0x2d4bb7.push(_0x41a5ed);
      }
      _0x5b87b6(_0x2d4bb7);
    };
    const _0x52c0da = (_0xfee85b, _0x53f467) => {
      let _0x40c422 = _0x521f9e()[_0xfee85b];
      _0x440920.appendChild(_0x40c422);
      if (!_0x53f467) {
        _0x40c422.classList.add(b.fadeIn);
      }
      _0x40c422.classList.add(b.videoStyle);
      _0x40c422.play();
      let _0x432c4d = false;
      _0x40c422.addEventListener("timeupdate", () => {
        if (_0x40c422.currentTime >= _0x40c422.duration - 5) {
          if (_0x432c4d) {
            return;
          }
          _0x432c4d = true;
          setTimeout(() => {
            _0x40c422.classList.add(b.fadeOut);
            setTimeout(() => {
              const _0x16f9ff = _0x440920.querySelector("video");
              if (_0x16f9ff) {
                _0x440920.removeChild(_0x16f9ff);
              }
            }, 1000);
          }, 1000);
          _0xfee85b++;
          if (_0xfee85b >= se.length) {
            _0xfee85b = 0;
          }
          _0x52c0da(_0xfee85b);
        }
      });
    };
    fe(() => {
      _0x578251().then(() => {
        _0x52c0da(0, true);
      });
    });
    return (() => {
      const _0x1a4492 = lt();
      const _0x2d7b6a = _0x1a4492.firstChild;
      const _0x49fe9f = _0x2d7b6a.firstChild;
      const _0x992054 = _0x49fe9f.nextSibling;
      const _0x2c1b2f = _0x992054.firstChild;
      const _0x17e4b7 = _0x2c1b2f.firstChild;
      const _0x1786ec = _0x17e4b7.nextSibling;
      const _0x1ddf56 = _0x2c1b2f.nextSibling;
      const _0x2e7d17 = _0x1ddf56.firstChild;
      const _0x30f896 = _0x2e7d17.nextSibling;
      const _0x734653 = _0x30f896.nextSibling;
      const _0x4d5863 = _0x440920;
      if (typeof _0x4d5863 == "function") {
        Me(_0x4d5863, _0x1a4492);
      } else {
        _0x440920 = _0x1a4492;
      }
      U(_0x49fe9f, M(G, {
        icon: et,
        link: "https://discord.gg/qbhub"
      }), null);
      U(_0x49fe9f, M(G, {
        icon: tt,
        link: "https://discord.gg/qbhub"
      }), null);
      U(_0x49fe9f, M(G, {
        icon: nt,
        link: "https://discord.gg/qbhub"
      }), null);
      U(_0x49fe9f, M(G, {
        icon: he,
        link: "https://discord.gg/qbhub"
      }), null);
      le(_0x17e4b7, "src", he);
      le(_0x17e4b7, "draggable", false);
      _0x2e7d17.$$click = () => {
        _0x53ec75("faq");
      };
      U(_0x30f896, M(Oe, {
        get each() {
          return Array(13);
        },
        children: (_0x2d2b07, _0x27cf45) => (() => {
          const _0x9a1c75 = it();
          const _0x4c1d79 = _0x9a1c75.firstChild;
          I(_0x22be06 => {
            const _0xac3cbf = b.box;
            const _0x319f77 = b.box;
            const _0x422b1c = {
              [b.active]: true
            };
            const _0x4f03d1 = _0x4d90f4(_0x27cf45());
            if (_0xac3cbf !== _0x22be06._v$10) {
              C(_0x9a1c75, _0x22be06._v$10 = _0xac3cbf);
            }
            if (_0x319f77 !== _0x22be06._v$11) {
              C(_0x4c1d79, _0x22be06._v$11 = _0x319f77);
            }
            _0x22be06._v$12 = ne(_0x4c1d79, _0x422b1c, _0x22be06._v$12);
            if (_0x4f03d1 !== _0x22be06._v$13) {
              if ((_0x22be06._v$13 = _0x4f03d1) != null) {
                _0x4c1d79.style.setProperty("clip-path", _0x4f03d1);
              } else {
                _0x4c1d79.style.removeProperty("clip-path");
              }
            }
            return _0x22be06;
          }, {
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined,
            _v$13: undefined
          });
          return _0x9a1c75;
        })()
      }));
      _0x734653.$$click = () => {
        _0x53ec75("tutorials");
      };
      I(_0x2bc7c9 => {
        const _0x25efdc = b.App;
        const _0x4103aa = b.logo;
        const _0x553255 = b.logoProgress;
        const _0x4613c1 = "inset(" + (100 - _0x4c9d21()) + "% 0% 0% 0%)";
        const _0x6851d4 = b.button;
        const _0x7efd22 = {
          [b.top]: true
        };
        const _0x2cd2d4 = b.progressBar;
        const _0xd0debb = b.button;
        const _0x47ad37 = {
          [b.bottom]: true
        };
        if (_0x25efdc !== _0x2bc7c9._v$) {
          C(_0x1a4492, _0x2bc7c9._v$ = _0x25efdc);
        }
        if (_0x4103aa !== _0x2bc7c9._v$2) {
          C(_0x2c1b2f, _0x2bc7c9._v$2 = _0x4103aa);
        }
        if (_0x553255 !== _0x2bc7c9._v$3) {
          C(_0x1786ec, _0x2bc7c9._v$3 = _0x553255);
        }
        if (_0x4613c1 !== _0x2bc7c9._v$4) {
          if ((_0x2bc7c9._v$4 = _0x4613c1) != null) {
            _0x1786ec.style.setProperty("clip-path", _0x4613c1);
          } else {
            _0x1786ec.style.removeProperty("clip-path");
          }
        }
        if (_0x6851d4 !== _0x2bc7c9._v$5) {
          C(_0x2e7d17, _0x2bc7c9._v$5 = _0x6851d4);
        }
        _0x2bc7c9._v$6 = ne(_0x2e7d17, _0x7efd22, _0x2bc7c9._v$6);
        if (_0x2cd2d4 !== _0x2bc7c9._v$7) {
          C(_0x30f896, _0x2bc7c9._v$7 = _0x2cd2d4);
        }
        if (_0xd0debb !== _0x2bc7c9._v$8) {
          C(_0x734653, _0x2bc7c9._v$8 = _0xd0debb);
        }
        _0x2bc7c9._v$9 = ne(_0x734653, _0x47ad37, _0x2bc7c9._v$9);
        return _0x2bc7c9;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined,
        _v$7: undefined,
        _v$8: undefined,
        _v$9: undefined
      });
      return _0x1a4492;
    })();
  }
  be(["click"]);
  je(() => M(rt, {}), document.getElementById("root"));