window.fjit || (window.fjit = {
    table: "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",
    fjHost: "feedjit.com",
    numTopAds: 6,
    topAdToShow: !1,
    adSelectorNum: !1,
    isIECache: "unset",
    isPreview: !1,
    isNewVisit: !1,
    isNewUnique: !1,
    permvid: null,
    pvNum: !1,
    divAlertElem: !1,
    wUrlMap: {},
    clickTrackEnabled: !1,
    proEnabled: !1,
    doLogUser: "1",
    proID: !1,
    proCSSInserted: !1,
    proCSS: '<style type="text/css">a.fjfcl74:visited {color: #FCC; font-size: 1px; font-family: Arial, sans-serif;} a.fjfcl74:link {color: #CCC; font-size: 1px; font-family: Arial, sans-serif;}</style>',
    ajCallbacks: {},
    iter: 1,
    getIter: function() {
        return this.iter++
    },
    qStrCache: {},
    protocol: document.location && "https:" == document.location.protocol ? "https" : "http",
    hostname: "",
    cookiesAreEnabled: null,
    scrToTxt: "",
    trafficFeedEnabled: !1,
    flashVisible: !0,
    flashHasLoaded: !1,
    flashInserted: !1,
    domainAlternates: !1,
    FNVCalled: !1,
    flCallbacks: [],
    totFLTime: 0,
    logRun: !1,
    cssNodes: {},
    widgetsRun: {},
    clickTInst: !1,
    flashElemId: !1,
    vid: null,
    filterOn: null,
    readyBound: !1,
    domIsReady: !1,
    onDomReadyFuncs: [],
    logDivInserted: !1,
    logDivElem: !1,
    logStartTime: (new Date).getTime(),
    logData: "",
    stdCSSDat: {
        fontFamily: "Arial, Verdana, Serif",
        fontSize: "12px",
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#000000",
        textTransform: "none",
        textDecoration: "none",
        letterSpacing: "normal",
        wordSpacing: "normal",
        lineHeight: "normal",
        textAlign: "left",
        verticalAlign: "baseline",
        direction: "ltr",
        backgroundColor: "#FFF",
        backgroundImage: "none",
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        backgroundAttachment: "scroll",
        width: "auto",
        height: "auto",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
        marginTop: "0",
        marginRight: "0",
        marginBottom: "0",
        marginLeft: "0",
        paddingTop: "0",
        paddingRight: "0",
        paddingBottom: "0",
        paddingLeft: "0",
        borderTopWidth: "0",
        borderRightWidth: "0",
        borderBottomWidth: "0",
        borderLeftWidth: "0",
        borderTopColor: "#000000",
        borderRightColor: "#000000",
        borderBottomColor: "#000000",
        borderLeftColor: "#000000",
        borderTopStyle: "none",
        borderRightStyle: "none",
        borderBottomStyle: "none",
        borderLeftStyle: "none",
        position: "static",
        display: "block",
        visibility: "visible",
        zIndex: "auto",
        overflowX: "visible",
        overflowY: "visible",
        whiteSpace: "normal",
        clip: "auto",
        "float": "none",
        clear: "none",
        cursor: "auto",
        listStyleImage: "none",
        listStylePosition: "outside",
        listStyleType: "disc",
        markerOffset: "auto",
        opacity: "1",
        filter: "alpha(opacity=100)"
    },
    init: function() {
        window.FJDEVHOST && (this.fjHost = window.FJDEVHOST);
        this.wUrlMap = {
            trafficList: "http://" + this.fjHost + "/serve",
            map: "http://" + this.fjHost + "/map",
            popPages: "http://" + this.fjHost + "/popPages",
            coFilter: "http://" + this.fjHost + "/coFilter"
        };
        /^https?:\/\/([^\/]+)/i.test(location.href) ? this.hostname = RegExp.$1 : this.hostname = "unknown";
        this.detectPreview();
        this.bindReady();
        this.isPreview || (this.setupClickTrk(), this.cookiesInit())
    },
    csum: function(a, b) {
        b == window.undefined && (b = 0);
        var c = 0,
            c = 0;
        b ^= -1;
        for (var d = 0, e = a.length; d < e; d++) c = (b ^ a.charCodeAt(d)) & 255, c = "0x" + this.table.substr(9 * c, 8), b = b >>> 8 ^ c;
        return ((b ^ -1) + 2147483647).toString(16)
    },
    fisherYates: function(a) {
        var b = a.length;
        if (0 == b) return !1;
        for (; --b;) {
            var c = Math.floor(Math.random() * (b + 1)),
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
    },
    detectPreview: function() {
        /^https?:\/\/(?:www\.)?typepad\.com\/services\//i.test(window.location.href) &&
            (this.isPreview = !0)
    },
    cookiesInit: function() {
        if (this.cookiesEnabled()) {
            this.createCookie("_fjtad2", "1", 30);
            var a = this.readCookie("_fjvid1");
            a ? this.vid = a : (this.vid = "new", this.isNewVisit = !0);
            var b = this.readCookie("_fjpermvid1");
            b ? (this.permvid = b, this.isNewUnique = !1) : (this.permvid = (new Date).getTime() + "-" + (Math.random() + "").replace("0.", ""), this.isNewUnique = !0);
            this.pvNum = (b = this.readCookie("_fjpvnum1")) ? parseInt(b) + 1 : 1;
            b = this.readCookie("_fjtads1");
            b || (b = Math.floor(1001 * Math.random()), this.createCookie("_fjtads1",
                b, 2592E3));
            this.adSelectorNum = b;
            var c = this.readCookie("_fjtad6"),
                b = !1,
                d;
            c && (c = c.split(":"), 2 == c.length && /\d+/.test(c[0]) && (b = c[1].split("T"), d = parseInt(c[0]), d++, d >= b.length && (d = 0), this.createCookie("_fjtad6", d + ":" + b.join("T"), 864E3)));
            b || (b = "123456".split(""), this.fisherYates(b), d = 0, this.createCookie("_fjtad6", "0:" + b.join("T"), 864E3));
            this.topAdToShow = b[d];
            this.createCookie("_fjpvnum1", this.pvNum, 31536E3);
            this.createCookie("_fjvid1", a, 1800);
            this.createCookie("_fjpermvid1", this.permvid, 31536E3)
        } else this.vid =
            "cookiesDisabled", this.topAdToShow = Math.floor(Math.random() * this.numTopAds + 1)
    },
    addOnDomReady: function(a) {
        this.domIsReady ? a() : this.onDomReadyFuncs.push(a)
    },
    domReady: function() {
        if (!this.domIsReady) {
            this.domIsReady = !0;
            for (var a = 0; a < this.onDomReadyFuncs.length; a++) this.onDomReadyFuncs[a]()
        }
    },
    bindReady: function() {
        this.readyBound || (this.readyBound = !0, document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
            document.removeEventListener("DOMContentLoaded", arguments.callee, !1);
            fjit.domReady()
        }, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), fjit.domReady())
        }), document.documentElement.doScroll && window == window.top && function() {
            if (!this.domIsReady) {
                try {
                    document.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                fjit.domReady()
            }
        }()))
    },
    isFilterOn: function() {
        return this.filterOn ? "1" : "0"
    },
    flashDetect: new function() {
        var a = this;
        a.installed = !1;
        a.raw = "";
        a.major = -1;
        a.minor = -1;
        a.revision = -1;
        a.revisionStr = "";
        var b = [{
                name: "ShockwaveFlash.ShockwaveFlash.7",
                version: function(a) {
                    return c(a)
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash.6",
                version: function(a) {
                    var b = "6,0,21";
                    try {
                        a.AllowScriptAccess = "always", b = c(a)
                    } catch (f) {}
                    return b
                }
            }, {
                name: "ShockwaveFlash.ShockwaveFlash",
                version: function(a) {
                    return c(a)
                }
            }],
            c = function(a) {
                var b = -1;
                try {
                    b = a.GetVariable("$version")
                } catch (c) {}
                return b
            };
        a.FJ_FlashDetect = function() {
            var c, e, f, g, k;
            if (navigator.plugins && 0 < navigator.plugins.length) {
                var h =
                    navigator.mimeTypes;
                if (h && h["application/x-shockwave-flash"] && h["application/x-shockwave-flash"].enabledPlugin && h["application/x-shockwave-flash"].enabledPlugin.description) {
                    c = h = h["application/x-shockwave-flash"].enabledPlugin.description;
                    var h = c.split(/ +/),
                        l = h[2].split(/\./),
                        h = h[3];
                    e = parseInt(l[0], 10);
                    f = parseInt(l[1], 10);
                    g = h;
                    k = parseInt(h.replace(/[a-zA-Z]/g, ""), 10) || a.revision;
                    a.raw = c;
                    a.major = e;
                    a.minor = f;
                    a.revisionStr = g;
                    a.revision = k;
                    a.installed = !0
                }
            } else if (-1 == navigator.appVersion.indexOf("Mac") &&
                window.execScript)
                for (h = -1, l = 0; l < b.length && -1 == h; l++) {
                    c = -1;
                    try {
                        c = new ActiveXObject(b[l].name)
                    } catch (m) {
                        c = {
                            activeXError: !0
                        }
                    }
                    c.activeXError || (a.installed = !0, h = b[l].version(c), -1 != h && (c = h, g = c.split(","), e = parseInt(g[0].split(" ")[1], 10), f = parseInt(g[1], 10), k = parseInt(g[2], 10), g = g[2], a.raw = c, a.major = e, a.minor = f, a.revision = k, a.revisionStr = g))
                }
        }()
    },
    flashOn: function() {
        return !1
    },
    isIE: function() {
        if ("unset" == this.isIECache) {
            this.isIECache = 0;
            try {
                "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) &&
                    (rv = parseFloat(RegExp.$1), 0 < rv && (this.isIECache = rv))
            } catch (a) {}
        }
        return this.isIECache
    },
    getScrQ: function(a) {
        for (var b = document.getElementsByTagName("script"), c = 0; c < b.length; c++)
            if (0 == b[c].src.indexOf(a)) return b[c].src.replace(/^[^\?]+\??/, "");
        return ""
    },
    getQVar: function(a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (e[0] == b) return e[1]
        }
        return ""
    },
    get_cHost: function() {
        var a = this.getWQVar("trafficList", "fhst");
        if (/[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+/.test(a)) return a;
        if (!/https?/.test(this.protocol)) return "localhost";
        a = location.host.replace(/^www\./i, "");
        a = a.replace(/:\d+$/, "");
        a = a.replace(/^\./, "");
        a = a.replace(/\.$/, "");
        a = a.replace(/[^a-zA-Z0-9\.\-]+/g, "");
        return (a = a.replace(/blogspot\.(?:com|[a-z]{2,3}|[a-z]{2,3}\.[a-z]{2})$/, "blogspot.com")) ? a : "localhost"
    },
    createCookie: function(a, b, c) {
        if (c) {
            var d = new Date;
            d.setTime(d.getTime() + 1E3 * c);
            c = "; expires=" + d.toGMTString()
        } else c = "";
        document.cookie = a + "=" + b + c + "; path=/"
    },
    readCookie: function(a) {
        if (document.cookie && document.cookie.substr) {
            a += "=";
            for (var b = document.cookie.split(";"),
                    c = 0; c < b.length; c++) {
                for (var d = b[c];
                    " " == d.charAt(0);) d = d.substring(1, d.length);
                if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
            }
        }
        return null
    },
    eraseCookie: function(a) {
        this.createCookie(a, "", -1)
    },
    cookiesEnabled: function() {
        if ("yes" == this.cookiesAreEnabled) return !0;
        if ("no" == this.cookiesAreEnabled) return !1;
        this.createCookie("_fjdet1", "det", 10);
        if ("det" == this.readCookie("_fjdet1")) return this.cookiesAreEnabled = "yes", !0;
        this.cookiesAreEnabled = "no";
        return !1
    },
    ignoreMe: function() {
        "1" != this.getIgnore() &&
            (this.createCookie("_fjIgnoreMe", "1", 31536E3), this.flSet("fjIgnoreMe_" + this.hostname, "1"))
    },
    stopIgnoringMe: function() {
        "1" == this.getIgnore() && (this.eraseCookie("_fjIgnoreMe"), this.flSet("fjIgnoreMe_" + this.hostname, "0"))
    },
    injectCSS: function(a, b) {
        var c = document.getElementsByTagName("head")[0],
            d = document.createElement("link");
        d.type = "text/css";
        d.rel = "stylesheet";
        d.href = a;
        d.media = "screen";
        "undefined" != typeof this.cssNodes[b] && this.cssNodes[b] && this.cssNodes[b].parentNode && this.cssNodes[b].parentNode.removeChild(this.cssNodes[b]);
        c.appendChild(d);
        this.cssNodes[b] = d
    },
    setNewVID: function(a) {
        this.vid = a;
        this.createCookie("_fjvid1", a, 1800)
    },
    getWQVar: function(a, b) {
        this.qStrCache[a] || (this.qStrCache[a] = this.getScrQ(this.wUrlMap[a]));
        return this.getQVar(this.qStrCache[a], b)
    },
    isHidden: function(a) {
        a = this.e(a).parentNode;
        try {
            for (; a;) {
                if (a) {
                    if ("none" == this.getStyle(a, "display")) return !0;
                    if (a.style) {
                        if (this.isTooNarrow(a.style.width) || this.isTooNarrow(a.style.height)) return !0;
                        try {
                            if ("absolute" == a.style.position && (-160 > parseFloat(a.style.left) ||
                                    -160 > parseFloat(a.style.top) || -160 > parseFloat(a.style.bottom) || -160 > parseFloat(a.style.right) || 3E3 < parseFloat(a.style.left) || 3E3 < parseFloat(a.style.right))) return !0
                        } catch (b) {}
                    }
                }
                a = a.parentNode
            }
        } catch (c) {}
        return !1
    },
    isTooNarrow: function(a) {
        return /^\d+$/.test(a) && 10 > parseFloat(a) || /^\d+(?:px|mm|pt|pc)+$/.test(a) && 10 > parseFloat(a) || /^\d+(?:in|cm|em|ex)+$/.test(a) && 2 > parseFloat(a) ? !0 : !1
    },
    makeWParams: function(a, b, c) {
        var d = this.logRun ? 1 : 0;
        this.logRun = !0;
        var e, f;
        screen && screen.width && screen.height ? (e = screen.width,
            f = screen.height) : f = e = 0;
        var g = "0",
            k = this.flGet("gid");
        k && (g = k);
        for (var k = "wh hl hlnks srefs hbars hfce wne bc tc brd1 lnk hc hfc btn ww tft".split(" "), h = "", l = 0; l < k.length; l++) h += this.getWQVar(b, k[l]);
        k = this.csum(h);
        h = "";
        try {
            for (var m = document.getElementsByTagName("meta"), l = 0; l < m.length; l++) "generator" == m[l].name.toLowerCase() && (h = m[l].content)
        } catch (n) {}
        a = "w=" + b + "&ign=" + this.getIgnore() + "&wn=" + a + "&cen=" + (this.cookiesEnabled() ? "1" : "0") + "&nv=" + (this.isNewVisit ? "1" : "0") + "&inu=" + (this.isNewUnique ? "1" :
                "0") + "&pvid=" + this.permvid + "&pvnum=" + this.pvNum + "&tats=" + this.topAdToShow + "&adseln=" + this.adSelectorNum + "&fl=" + this.isFilterOn() + "&vid=" + this.vid + "&rn=" + ("undefined" == typeof this.widgetsRun[c] ? "0" : "1") + "&lg=" + (d ? "0" : "1") + "&u=" + encodeURIComponent(this.getCleanLoc()) + "&r=" + encodeURIComponent(document.referrer) + "&t=" + encodeURIComponent(this.getCleanTitle()) + "&sw=" + e + "&sh=" + f + "&pid=" + this.getWQVar(b, "pid") + "&wid=" + this.getWQVar(b, "wid") + "&proid=" + this.getWQVar(b, "proid") + "&fhst=" + this.getWQVar(b, "fhst") +
            "&tft=" + this.getWQVar(b, "tft") + "&wh=" + this.getWQVar(b, "wh") + "&hl=" + this.getWQVar(b, "hl") + "&hlnks=" + this.getWQVar(b, "hlnks") + "&srefs=" + this.getWQVar(b, "srefs") + "&hbars=" + this.getWQVar(b, "hbars") + "&hfce=" + this.getWQVar(b, "hfce") + "&wne=" + this.getWQVar(b, "wne") + "&msum=" + k + "&gid=" + g + "&flt=" + this.totFLTime + "&fv=" + (this.flashVisible ? "1" : "0") + "&tfen=" + (this.trafficFeedEnabled ? "1" : "0") + "&flc=" + this.getSess() + "&lu=" + this.doLogUser + "&isIE=" + (this.isIE() ? "1" : "0") + "&oldB=" + (this.oldBrowser() ? "1" : "0") + "&mgen=" +
            h + "&fjv=2&rand=" + Math.floor(999999999 * Math.random());
        this.widgetsRun[c] = 1;
        return a
    },
    pause: function(a) {
        var b = new Date,
            c = null;
        do c = new Date; while (c - b < a)
    },
    eDec: function(a) {
        var b = document.createElement("textarea");
        b.innerHTML = a.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return b.value
    },
    shortenPre: function(a, b) {
        if (a.length <= b) return a;
        b -= 3;
        a = a.substr(a.length - b, b);
        return a = "..." + a.replace(/^[^\s\r\n\t]+[\s\r\n\t]+/, "")
    },
    shortenPost: function(a, b) {
        if (a.length <= b) return a;
        a = a.substr(0, b - 3);
        return a = a.replace(/[\s\r\n\t]+[^\s\r\n\t]+$/,
            "") + "..."
    },
    getIgnore: function() {
        return "1" == this.readCookie("_fjIgnoreMe") ? "1" : "1" == this.flGet("fjIgnoreMe_" + this.hostname) ? "1" : "0"
    },
    enableCTrack: function() {
        this.clickTrackEnabled = !0
    },
    disableCTrack: function() {
        this.clickTrackEnabled = !1
    },
    handleAClick: function(a, b) {
        if (this.clickTrackEnabled) {
            var c = a.href,
                d;
            d = c.replace(/\#.*$/, "");
            var e = window.location.href,
                e = e.replace(/\#.*$/, "");
            if (/^http/i.test(c) && e != d) {
                d = a.innerHTML ? this.eDec(a.innerHTML.replace(/<[^>]+>/g, "")) : "";
                for (var f = e = "", g = a;
                    (g = g.previousSibling) &&
                    255 > e.length;)
                    if (3 == g.nodeType) e = this.eDec(g.nodeValue) + e;
                    else if (1 == g.nodeType && g.firstChild && g.firstChild === g.lastChild && 3 == g.firstChild.nodeType) e = this.eDec(g.firstChild.nodeValue) + e;
                else break;
                for (g = a;
                    (g = g.nextSibling) && 255 > f.length;)
                    if (3 == g.nodeType) f += this.eDec(g.nodeValue);
                    else if (1 == g.nodeType && g.firstChild && g.firstChild === g.lastChild && 3 == g.firstChild.nodeType) f += this.eDec(g.firstChild.nodeValue);
                else break;
                d = d.replace(/[\s\r\n\t]+/g, " ");
                e = e.replace(/[\s\r\n\t]+/g, " ");
                f = f.replace(/[\s\r\n\t]+/g,
                    " ");
                d = this.shortenPost(d, 125);
                var e = this.shortenPre(e, 125),
                    f = this.shortenPost(f, 125),
                    g = "0",
                    k = this.flGet("gid");
                k && (g = k);
                k = document.createElement("IMG");
                k.width = "1";
                k.height = "1";
                k.alt = "blah";
                k.src = this.protocol + "://" + this.fjHost + "/click/?&h=" + encodeURIComponent(c) + "&u=" + encodeURIComponent(this.getCleanLoc()) + "&cen=" + (this.cookiesEnabled() ? "1" : "0") + "&vid=" + this.vid + "&ign=" + this.getIgnore() + "&fl=" + this.isFilterOn() + "&lnt=" + encodeURIComponent(d) + "&prt=" + encodeURIComponent(e) + "&pot=" + encodeURIComponent(f) +
                    "&gid=" + g + "&tfen=" + (this.trafficFeedEnabled ? "1" : "0") + "&flc=" + this.getSess() + "&fjv=2&t=" + encodeURIComponent(this.getCleanTitle()) + "&rand=" + Math.floor(999999999 * Math.random());
                document.body.appendChild(k);
                c = document.createElement("IMG");
                c.width = "1";
                c.height = "1";
                c.alt = "";
                c.src = this.protocol + "://" + this.fjHost + "/images/transparent.gif?r=" + Math.floor(999999999 * Math.random());
                document.body.appendChild(c);
                fjit.pause(500);
                return !0
            }
        }
    },
    installATrack: function(a) {
        "function" != typeof a.onclick && (a.onclick = function(a) {
            return fjit.handleAClick(this,
                a)
        })
    },
    processLinks: function() {
        for (var a = document.body.getElementsByTagName("A"), b = 0; b < a.length; b++) /^(http:\/\/|\/)/.test(a[b].href) && this.installATrack(a[b])
    },
    getStyle: function(a, b) {
        var c = "";
        document.defaultView && document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function(a, b) {
            return b.toUpperCase()
        }), c = a.currentStyle[b]);
        return c
    },
    e: function(a) {
        return document.getElementById(a)
    },
    setupClickTrk: function() {
        var a =
            this;
        if (!this.clickTInst) {
            this.clickTInst = !0;
            var b = window.onload;
            window.onload = "function" != typeof window.onload ? function() {
                a.processLinks()
            } : function() {
                a.processLinks();
                b()
            }
        }
    },
    scrollTo: function(a) {
        a = this.e(a);
        for (var b = 0, c = 0; null != a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
        window.scrollTo(b, c)
    },
    logAddScrollTo: function(a, b) {
        this.scrToTxt += '&nbsp;&nbsp;<a href="#" onclick="fjit.scrollTo(\'' + a + '\'); return false;" style="text-decoration: underline;">' + b + "</a>";
        var c = this.e("FJ_S_TO");
        c && (c.innerHTML =
            this.scrToTxt)
    },
    log: function(a, b) {
        this.logData = (b ? b + ":&nbsp;" : "") + ((new Date).getTime() - this.logStartTime) + ": " + a + "<br />" + this.logData;
        this.logDivInserted && (this.logDivElem.firstChild.nextSibling.innerHTML = this.logData)
    },
    appendLogDiv: function() {
        if (!this.logDivInserted) {
            this.logDivInserted = !0;
            var a = document.createElement("DIV"),
                a = document.createElement("DIV");
            a.style.position = "fixed";
            a.style.zIndex = 99999999;
            a.style.textAlign = "left";
            a.style.left = "0px";
            a.style.bottom = "0px";
            a.style.border = "2px solid #F00";
            a.style.width = "600px";
            a.style.height = "200px";
            a.style.overflow = "scroll";
            a.style.fontSize = "10px";
            a.style.fontFamily = "Arial";
            a.style.color = "#000";
            a.style.backgroundColor = "#FFF";
            a.innerHTML = '<div><img src="' + this.protocol + "://" + this.fjHost + '/images/logos/feedjit.gif" width="64" height="14" alt="" align="absmiddle" />&nbsp;&nbsp;<span id="FJ_S_TO"></span></div><div id="divLOG"></div>';
            a.firstChild.nextSibling.innerHTML = this.logData;
            this.logDivElem = a;
            document.body.appendChild(this.logDivElem);
            this.e("FJ_S_TO").innerHTML =
                this.scrToTxt
        }
    },
    isThisVisible: function(a) {
        a = fjit.e(a);
        try {
            for (;
                (a = a.parentNode) && "BODY" != a.tagName.toUpperCase();)
                if ("none" == fjit.getStyle(a, "display")) return !1
        } catch (b) {}
        return !0
    },
    setFlashElemId: function(a) {
        this.flashElemId = a
    },
    flGet: function(a) {
        if (this.flashElemId) {
            var b = !1;
            try {
                b = this.e(this.flashElemId).fjfGet(a)
            } catch (c) {}
            if (b) return b
        }
        return !1
    },
    flSet: function(a, b) {
        if (this.flashElemId) try {
            this.e(this.flashElemId).fjfSet(a, b)
        } catch (c) {}
    },
    UUID: function() {
        var a = "";
        if (this.flashElemId) try {
            a = this.e(this.flashElemId).fjfUUID()
        } catch (b) {}
        return a
    },
    makeSess: function(a) {
        if (this.flashElemId) try {
            this.e(this.flashElemId).fjfMakeSess(a)
        } catch (b) {}
    },
    getSess: function() {
        var a = !1;
        if (this.flashElemId) try {
            a = this.e(this.flashElemId).fjfGetSess()
        } catch (b) {}
        return a
    },
    loggedIn: function() {
        var a = !1;
        if (this.flashElemId) try {
            this.getSess() && (a = this.e(this.flashElemId).fjfGet("loggedIn"))
        } catch (b) {}
        return a
    },
    addOnFlash: function(a, b) {
        this.flashHasLoaded ? (this.log("in addOnFlash() flashHasLoaded is true, so executing callback immediately", b), a()) : (this.log("in addOnFlash() flash has not loaded yet, so queueing callback",
            b), this.flCallbacks.push(a))
    },
    doWrite: function(a, b, c) {
        this.log("Starting " + a + " widget creation", a);
        if (this.proEnabled && !this.proCSSInserted) {
            b = this.proCSS + b;
            this.proCSSInserted = !0;
            var d = this
        }
        if (fjit.flashOn())
            if (this.flashHasLoaded) this.log("Flash already loaded at start of doWrite(). Doing basic doc.write and executing cb() immediately", a), b && 0 < b.length && document.write(b), c();
            else if (this.flashInserted) this.log("Flash is already inserted. Writing basic div and setting up callback and returning.",
            a), b && 0 < b.length && document.write(b), this.addOnFlash(c, a);
        else {
            this.setFlashElemId("FJ_FL_Obj");
            var e = '<div id="FJ_FL_Cont" style="position: relative; width: 1px; height: 1px; border-width: 0; padding: 0; margin: 0; position: relative;"><div id="FJ_FL_Cover" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; background-color: #F00; z-index: 2;"></div><object id="FJ_FL_Obj" type="application/x-shockwave-flash" data="' + this.protocol + "://" + this.fjHost + '/flash/fj.swf" width="1" height="1" style="position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 1;"><param name="wmode" value="transparent"><param name="AllowScriptAccess" value="always" /><param name="movie" value="' +
                this.protocol + "://" + this.fjHost + '/flash/fj.swf" /></object></div>';
            b && 0 < b.length && (e += b);
            document.write(e);
            fjit.e("FJ_FL_Cover").style.backgroundColor = fjit.e("FJ_FL_Cont").parentNode.style.backgroundColor;
            this.flashInserted = !0;
            this.log("Adding callback for " + a);
            this.addOnFlash(c, a);
            this.flStartTime = (new Date).getTime();
            this.isThisVisible("FJ_FL_Cont") ? (this.log("Widget is visible", a), d = this, setTimeout(function() {
                d.flashLoaded(!0)
            }, 1E4)) : (this.flashVisible = !1, this.log("Widget is NOT visible"), this.isIE() ?
                this.domIsReady ? (this.log("Browser is IE and DOM is ready - inserting visible flash", a), this.flashNotVisible(a)) : (this.log("Browser is IE - setting up onDomReady to insert visible flash", a), d = this, this.addOnDomReady(function() {
                    d.flashNotVisible(a)
                })) : (this.log("Inserting visible flash into DOM", a), this.flashNotVisible(a)))
        } else this.log("Flash not enabled. Calling doc.write and running callback immediatelly.", a), b && 0 < b.length && document.write(b), c()
    },
    flashNotVisible: function(a) {
        if (this.FNVCalled) this.log("FNV already called",
            a);
        else {
            this.FNVCalled = !0;
            var b = document.createElement("DIV");
            b.style.width = "1px";
            b.style.height = "1px";
            b.style.borderWidth = "0px";
            document.body.appendChild(b);
            this.setFlashElemId("FJ_FL_Obj2");
            b.innerHTML = '<div style="width: 1px; height: 1px; border: 0; padding: 0;"><object id="FJ_FL_Obj2" type="application/x-shockwave-flash" data="' + this.protocol + "://" + this.fjHost + '/flash/fj2.swf" width="1" height="1" style="width: 1px; height: 1px;"><param name="AllowScriptAccess" value="always" /><param name="movie" value="' +
                this.protocol + "://" + this.fjHost + '/flash/fj2.swf" /></object></div>';
            this.log("Added new flash object to DOM", a);
            var c = this;
            setTimeout(function() {
                c.flashLoaded(!0)
            }, 1E4)
        }
    },
    flashLoaded: function(a) {
        if (!this.flashHasLoaded) {
            this.flashHasLoaded = !0;
            if (a) this.log("WARNING: fjit.flashLoaded() called through timeout - Flash did not load."), this.totFLTime = "0";
            else {
                this.log("Flash loaded succesfully!");
                if ("1" == this.flGet("fjdebug"))
                    if (this.isIE()) {
                        var b = this;
                        this.addOnDomReady(function() {
                            b.appendLogDiv()
                        })
                    } else this.appendLogDiv();
                this.totFLTime = (new Date).getTime() - this.flStartTime
            }
            if (0 < this.flCallbacks.length)
                for (a = 0; a < this.flCallbacks.length; a++) this.log("Executing callback #" + a), this.flCallbacks[a]()
        }
    },
    setStyle: function(a, b) {
        for (var c in b) a.style[c] = b[c]
    },
    stdCSS: function(a) {
        for (var b in this.stdCSSDat) a.style[b] = this.stdCSSDat[b]
    },
    makeAjaxQstr: function(a) {
        var b = "",
            c;
        for (c in a) b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]) + "&";
        return b += "flc=" + this.getSess() + "&r=" + Math.floor(999999999 * Math.random())
    },
    addAjaxCB: function(a) {
        var b =
            "cbh" + this.getIter();
        this.ajCallbacks[b] = a;
        return b
    },
    ajax: function(a, b, c) {
        "function" == typeof c && (b.onOK = this.addAjaxCB(function(a) {
            try {
                c(a)
            } catch (b) {}
        }));
        b = this.makeAjaxQstr(b);
        var d = document.createElement("SCRIPT");
        d.charset = "utf-8";
        d.type = "text/javascript";
        d.src = this.protocol + "://" + this.fjHost + "/ajaxjs" + a + "?" + b;
        document.getElementsByTagName("head")[0].appendChild(d)
    },
    enablePro: function(a) {
        this.proID = a;
        this.proEnabled = !0
    },
    logPro: function() {
        var a = "https:" == document.location.protocol ? "https://ssllog." :
            "http://log.",
            b = document.createElement("SCRIPT");
        b.charset = "utf-8";
        b.type = "text/javascript";
        b.src = a + this.fjHost + "/pg/fj/" + this.proID + "/?wmode=1";
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    logJSError: function(a) {
        var b = new Image(1, 1);
        a = "m=" + encodeURIComponent(a) + "&u=" + encodeURIComponent(location.href) + "&r=" + Math.floor(2147483646 * Math.random());
        b.src = this.protocol + "://" + this.fjHost + "/logJSError/?" + a;
        b.onload = function() {}
    },
    logAdClick: function(a) {
        var b = new Image(1, 1);
        a = "c=" + encodeURIComponent(a) +
            "&u=" + encodeURIComponent(location.href) + "&pv=" + encodeURIComponent(this.pvNum) + "&r=" + Math.floor(2147483646 * Math.random());
        b.src = this.protocol + "://" + this.fjHost + "/logAdClick/?" + a;
        b.onload = function() {}
    },
    getCleanTitle: function() {
        var a = document.title;
        if (!a) return "";
        a = document.title.replace(/[\s\r\n\t]+/g, " ");
        a = a.replace(/#fjm-.+$/, "");
        return a = a.replace(/#fjinit.*$/, "")
    },
    getCleanLoc: function() {
        var a = location.href,
            a = a.replace(/#fjm-.+$/, "");
        return a = a.replace(/#fjinit.*$/, "")
    },
    oldBrowser: function() {
        return this.isIE() &&
            7 > this.isIE() ? !0 : !1
    },
    handleAdClick: function(a, b, c) {
        this.logAdClick(c);
        (a = a.target ? a.target : a.srcElement) && "A" != a.tagName && "A" != a.parentNode.tagName && window.open(b, "_blank")
    },
    handleAdClick2: function(a, b, c) {
        this.logAdClick(c);
        (a = a.target ? a.target : a.srcElement) && "A" != a.tagName && window.open(b, "_blank")
    },
    hideAllDomainMsgs: function(a) {
        a.getElementById("fjDomainMsg").style.display = "none";
        a.getElementById("fjDomainAvailable").style.display = "none";
        a.getElementById("fjDomainError").style.display = "none";
        a.getElementById("fjDomainLoading").style.display =
            "none";
        a.getElementById("fjDomainCommError").style.display = "none"
    },
    checkDomain: function(a, b) {
        this.closeDivAlert();
        if (/^[a-zA-Z0-9\.\-]+$/.test(b)) {
            var c = this;
            this.hideAllDomainMsgs(a);
            a.getElementById("fjDomainLoading").style.display = "block";
            this.ajax("/checkDomain/", {
                d: b
            }, function(b) {
                c.hideAllDomainMsgs(a);
                "1" == b.available ? (a.getElementById("fjDomainClickToReg").href = "http://www.bluehost.com/track/wordfence/bh4?page=cgi-bin/signup/" + b.domain, a.getElementById("fjDomainAvailable").style.display = "block") :
                    b.error ? (a.getElementById("fjDomainErrorMsg").innerHTML = b.error, a.getElementById("fjDomainError").style.display = "block", b.alternates && 0 < b.alternates.length && (c.domainAlternates = b.alternates, 10 < c.domainAlternates.length && (c.domainAlternates = c.domainAlternates.slice(0, 25)), c.showDomainAlternates())) : a.getElementById("fjDomainCommError").style.display = "block"
            })
        } else alert("A domain may only consist of letters, numbers and the dash (-) character. Make sure you don't have any spaces.")
    },
    showDomainAlternates: function() {
        if (this.domainAlternates &&
            0 < this.domainAlternates.length) {
            for (var a = '<span style="font-weight: bold;">Domain not available</span><br /><br />The domain you chose is not available, but here are a few suggestions based on your choice. Click any of them to get a website with that domain.<br /><br />', b = 0; b < this.domainAlternates.length; b++) var c = this.domainAlternates[b],
                a = a + ('<a style="font-family: Arial; color: #00F; font-size: 11px; font-weight: normal; text-decoration: underline; padding-right: 2px;" href="http://www.bluehost.com/track/wordfence/bh4?page=cgi-bin/signup/' +
                    c + '" target="_blank" onclick="fjit.logAdClick(\'bh4\'); return true;">' + c + "</a> ");
            this.divAlert(a)
        }
    },
    divAlert: function(a) {
        this.closeDivAlert();
        var b = "CSS1Compat" === document.compatMode ? document.documentElement : document.body,
            c = Math.floor(b.clientWidth / 2 - 200),
            b = Math.floor(b.clientHeight / 2 - 150),
            d = document.createElement("DIV");
        d.style.position = "fixed";
        d.style.zIndex = 1E7;
        d.style.color = "#333";
        d.style.fontFamily = "Arial";
        d.style.textDecoration = "none";
        d.style.fontWeight = "normal";
        d.style.fontSize = "12px";
        d.style.boxShadow =
            "15px 15px 7px #818181";
        d.style.MozBoxShadow = "15px 15px 7px #818181";
        d.style.WebkitBoxShadow = "15px 15px 7px #818181";
        d.style.MozBorderRadius = "5px";
        d.style.borderRadius = "5px";
        d.style.border = "3px solid #000";
        d.style.width = "400px";
        d.style.height = "300px";
        d.style.left = c + "px";
        d.style.top = b + "px";
        d.style.backgroundColor = "#FFF";
        d.style.padding = "5px";
        d.innerHTML = '<div style="position: absolute; top: 3px; right: 3px;"><a href="#" onclick="fjit.closeDivAlert(); return false;" style="color: #00F; text-decoration: underline; font-family: Arial; font-size: 12px;">close</a></div>' +
            a;
        document.body.appendChild(d);
        this.divAlertElem = d
    },
    closeDivAlert: function() {
        this.divAlertElem && (this.divAlertElem.parentNode.removeChild(this.divAlertElem), this.divAlertElem = !1)
    },
    addEventListener: function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    removeEventListener: function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    getFrameDoc: function(a) {
        return a.contentDocument ? a.contentDocument : a.contentWindow ?
            a.contentWindow.document : a.document
    }
}, fjit.init());
window.fjltf || (window.fjltf = {
    flStartTime: 0,
    fjz: !1,
    cssINodes: {},
    proID: 0,
    pid: 0,
    scrollingPaused: !1,
    scrollDragLastPos: !1,
    bodyDragSinceMouseDown: !1,
    websocketPort: 0,
    lastMoveTime: !1,
    scrollInterval: 20,
    currentScrollSpeed: 0,
    socketsCreatedWithinTen: 0,
    lastWebSocketConnTime: !1,
    emergencyDisableSockets: !1,
    lastTimeUpdate: 0,
    JSON: !1,
    init: function() {
        fjit.enableCTrack();
        this.setup()
    },
    ie7Mode: function() {
        return fjit.isIE() && ("BackCompat" == document.compatMode || 8 > fjit.isIE() || 0 < document.documentMode && 8 > document.documentMode) ?
            !0 : !1
    },
    setup: function() {
        fjit.oldBrowser() || fjit.injectCSS("http://feedjit.com/js/inj_tf.css", "FJ_TFMNU_CSS");
        fjit.trafficFeedEnabled = !0;
        fjit.logAddScrollTo("FJ_TF_Cont", "Traffic Feed");
        var a = fjit.getScrQ("http://" + fjit.fjHost + "/serve");
        fjit.filterOn = 1 == fjit.getQVar(a, "fl") ? !0 : !1;
        this.pid = fjit.getQVar(a, "pid");
        this.wid = fjit.getQVar(a, "wid");
        this.previewMode = "1" == fjit.getQVar(a, "previewMode") ? !0 : !1;
        this.widgetWidth = parseInt(fjit.getQVar(a, "ww"));
        /^\d+$/.test(this.widgetWidth) ? 300 < this.widgetWidth ? this.widgetWidth =
            300 : 160 > this.widgetWidth && (this.widgetWidth = 160) : this.widgetWidth = 160;
        this.ie7Mode() ? this.widgetWidthPadded = this.widgetWidth : this.widgetWidthPadded = parseInt(this.widgetWidth) + 10;
        (this.proID = fjit.getQVar(a, "proid")) && fjit.enablePro(this.proID);
        this.qstr = a;
        var b = this,
            a = 'style="position: relative; padding: 0; margin: 0; border-width: 0px; width: ' + this.widgetWidth + 'px;"';
        fjit.isPreview ? document.write('<div id="FJ_TF_Cont" ' + a + '><table border="0" cellpadding="3" cellspacing="0"><tr><td><img src="http://' +
            fjit.fjHost + '/images/icons/feedjitIcon92x91.png" width="92" height="91" border="0" alt="" /></td><td style="vertical-align: top;"><span style="font-family: Verdana; font-size: 12px; font-weight: normal;">Preview not available for Feedjit. Please complete installation of Feedjit to view your Live Traffic Feed.</span></td></tr></table></div>') : fjit.doWrite("TFeed", '<div id="FJ_TF_Cont" ' + a + "></div>", function() {
            b.fl()
        })
    },
    getPID: function() {
        return this.pid
    },
    getWID: function() {
        return this.wid
    },
    fl: function(a) {
        fjit.oldBrowser() ?
            (fjit.doLogUser = "0", this.doRouter()) : (this.previewMode ? this.JSON = window.JSON : (this.ifr = this.makeIframe(fjit.e("FJ_TF_Cont")), this.JSON = this.ifr.win.JSON), a = (a = fjit.flGet("askAppear")) ? a : "first", fjit.loggedIn() ? "never" == a ? (fjit.doLogUser = "1", this.doRouter()) : this.askAppear() : (fjit.doLogUser = "0", this.doRouter()))
    },
    doRouter: function() {
        var a = fjit.makeWParams("1", "trafficList", "FJ_TL_RUN");
        this.cachedWParams = a;
        var b = fjit.isHidden("FJ_TF_Cont"),
            c = !1;
        if ("1" == fjit.getWQVar("trafficList", "hl") || "1" == fjit.getWQVar("trafficList",
                "hlnks") || "1" == fjit.getWQVar("trafficList", "hbars") || "1" == fjit.getWQVar("trafficList", "hfce")) c = !0;
        if (!b || "feedjit.com" == fjit.get_cHost() || c) b = b ? "1" : "0", c = document.createElement("SCRIPT"), c.charset = "utf-8", c.type = "text/javascript", c.src = "http://" + fjit.fjHost + "/router/?ishd=" + b + "&" + a + "&ww=" + this.widgetWidth, document.getElementsByTagName("head")[0].appendChild(c)
    },
    makeIframe: function(a) {
        var b = document.createElement("iframe");
        b.width = this.widgetWidthPadded;
        b.style.width = this.widgetWidthPadded + "px";
        b.height =
            "500";
        b.src = "#fji" + (new Date).getTime();
        b.name = "FJIframe";
        b.scrolling = "no";
        b.frameBorder = "0";
        b.marginWidth = "0";
        b.marginHeight = "0";
        b.style.borderWidth = "0";
        b.style.zIndex = "1";
        fjit.isIE() && (b.allowTransparency = !0);
        a.appendChild(b);
        if (a = fjit.getFrameDoc(b)) {
            var c = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link rel="stylesheet" type="text/css" href="' + ("http://" +
                fjit.fjHost + "/style/1515/serve/?isIE=" + (fjit.isIE() ? "1" : "0") + "&" + this.qstr) + '" media="screen" /></head><body style="margin: 0; padding: 0; background-color: transparent;"><div id="iframeDIV" style="width: ' + this.widgetWidthPadded + 'px; padding: 0; border-width: 0; margin: 0;"></div></body></html>';
            if (this.ie7Mode()) try {
                a = a.window.document
            } catch (d) {} else a.open(), a.close();
            a.write(c);
            a.close();
            c = a.getElementById("iframeDIV");
            b.contentWindow.fjit = fjit;
            b.contentWindow.fjltf = this;
            return {
                div: c,
                iframe: b,
                doc: a,
                win: b.contentWindow
            }
        }
    },
    logAnalyticsEvent: function(a, b) {
        try {
            this.ifr.doc.getElementById("fjGAiframe").contentWindow.postMessage(a + "__" + b, "http://feedjit.com")
        } catch (c) {}
    },
    handleAdClick: function(a, b, c) {
        (a = a.target ? a.target : a.srcElement) && "A" != a.tagName && "A" != a.parentNode.tagName && (this.logAnalyticsEvent("adClicks", "topAdClick"), window.open(b, "_blank"))
    },
    proc: function(a, b, c, d) {
        document.referrer && /:\/\/[^\/]*(?:google|yahoo|bing|search|live)\./.test(document.referrer) && /\?.*(?:feedjit|live.*traffic|traffic.*feed|live.*feed)/.test(document.referrer) &&
            (a = a.replace(/ltf(?:A|B)/g, "fjSearcher"));
        this.previewMode ? (fjit.e("FJ_TF_Cont").innerHTML = a, this.eventElem = document.getElementById("fjEvents")) : (this.ifr.div.innerHTML = a, this.eventElem = this.ifr.doc.getElementById("fjEvents"));
        try {
            /fjr91/.test(window.location.hash) && fjit.scrollTo("FJ_TF_Cont")
        } catch (e) {}
        a = this.previewMode ? document : this.ifr.doc;
        for (var f = 0; f < c.length - 1; f++) {
            var g = a.getElementById(c[f] + "eventElem"),
                k = a.getElementById(c[f] + "timeElem"),
                h = Math.floor(parseFloat(d[f])),
                h = b - h,
                h = (new Date).getTime() -
                1E3 * h;
            g.fjTime = h;
            g.fjTimeElem = k
        }
        this.doTimeUpdate();
        this.previewMode || (this.ifr.iframe.height = this.ifr.div.offsetHeight);
        this.websocketPort = 4E3 + this.makePortOffset();
        "WebSocket" in window ? this.startWebSockets() : this.logToSockets();
        this.lockEventContainer();
        this.startTimeUpdate();
        var l = this;
        this.previewMode ? jQuery("#fjEvents").mouseleave(function(a) {
            l.panelOnMouseUp(a)
        }) : fjit.addEventListener(this.ifr.doc, "mouseout", function(a) {
            l.panelOnMouseOut(a)
        })
    },
    reportAdPos: function() {
        var a = this;
        try {
            for (var b =
                    this.ifr.iframe, c = 0; null != b; c += b.offsetTop, b = b.offsetParent);
            var d = void 0 !== document.height ? document.height : document.body.offsetHeight;
            if (0 < c) {
                var e = new Image(1, 1);
                e.src = fjit.protocol + "://" + fjit.fjHost + "/logger/?c=" + encodeURIComponent(fjit.get_cHost()) + "&t=" + encodeURIComponent(c) + "&d=" + encodeURIComponent(d);
                e.onload = function() {};
                var f = Math.floor(c / d * 100);
                this.previewMode || 30 < f && 600 < c && setTimeout(function() {
                    a.socket.close()
                }, 18E4)
            }
        } catch (g) {}
    },
    startTimeUpdate: function() {
        var a = this;
        setInterval(function() {
                a.doTimeUpdate()
            },
            1E3)
    },
    doTimeUpdate: function() {
        var a = this;
        if (1E4 > (new Date).getTime() - this.lastTimeUpdate && this.isScrolling()) return !1;
        this.lastTimeUpdate = (new Date).getTime();
        this.eachEventElement(function(b) {
            if (b.fjTimeElem) {
                var c = Math.floor(((new Date).getTime() - b.fjTime) / 1E3),
                    c = a.makeTimeAgo(c) + " ago";
                b.fjTimeElem.innerHTML != c && (b.fjTimeElem.innerHTML = c)
            }
        });
        this.realignEventElements()
    },
    realignEventElements: function() {
        var a = !1,
            b = !1;
        this.eachEventElement(function(c) {
            !1 !== a && (c.style.top = b + a + "px");
            b = c.offsetHeight;
            a = c.offsetTop
        })
    },
    relockEventContainer: function() {
        this.eachEventElement(function(a) {
            a.style.top = ""
        });
        this.eachEventElement(function(a) {
            a.style.position = "static"
        });
        this.eventElem.style.height = "";
        this.lockEventContainer()
    },
    lockEventContainer: function() {
        this.eventElem.style.height = this.eventElem.offsetHeight + "px";
        this.eachEventElement(function(a) {
            a.style.top = a.offsetTop + "px"
        });
        this.eachEventElement(function(a) {
            a.style.position = "absolute"
        });
        this.highestElem = 0
    },
    addTrafficTmpl: function(a) {
        this.eventTmpl =
            a
    },
    eachEventElement: function(a) {
        if (this.eventElem)
            for (var b = this.eventElem.firstChild; b;) "DIV" == b.nodeName && a(b), b = b.nextSibling
    },
    getFirstEventDivTop: function() {
        for (var a = this.eventElem.firstChild; a;) {
            if ("DIV" == a.nodeName) return parseFloat(a.style.top);
            a = a.nextSibling
        }
        return 0
    },
    scrollEvents: function() {
        if (this.scrollingPaused) return !1;
        if (this.scrollEventsInt) return this.scrollEventsCatchup = !0, !1;
        this.scrollEventsCatchup = !1;
        if (0 != this.getFirstEventDivTop()) {
            var a = this;
            this.scrollEventsInt = setInterval(function() {
                    a.scrollEventsMove()
                },
                this.scrollInterval)
        } else this.clearScrollInterval()
    },
    clearScrollInterval: function() {
        clearInterval(this.scrollEventsInt);
        this.lastMoveTime = this.scrollEventsInt = !1;
        this.currentScrollSpeed = 0
    },
    isScrolling: function() {
        return this.scrollEventsInt ? !0 : !1
    },
    scrollingPause: function() {
        this.clearScrollInterval();
        this.scrollingPaused = !0;
        this.currentScrollSpeed = 0
    },
    scrollingUnpause: function() {
        this.scrollingPaused = !1;
        this.scrollEvents();
        this.currentScrollSpeed = 0
    },
    scrollManualMove: function(a) {
        this.eachEventElement(function(b) {
            b.style.top =
                parseFloat(b.style.top) + a + "px"
        })
    },
    scrollEventsMove: function() {
        var a = this.lastMoveTime ? (new Date).getTime() - this.lastMoveTime : !1;
        this.lastMoveTime = (new Date).getTime();
        var b = this.getFirstEventDivTop();
        if (0 > b) {
            var c = Math.abs(b) / 20,
                c = 0.5 < c ? c : 0.5;
            if (this.currentScrollSpeed < c) {
                var d = this.currentScrollSpeed + 0.1;
                d > c && (d = c)
            } else this.currentScrollSpeed > c ? (d = this.currentScrollSpeed - 0.1, d < c && (d = c)) : d = c;
            this.currentScrollSpeed = d;
            a && a > this.scrollInterval && (d *= a / this.scrollInterval);
            0 < b + d && (d = 0 - b);
            this.eachEventElement(function(a) {
                a.style.top =
                    parseFloat(a.style.top) + d + "px"
            })
        } else 0 < b ? this.eachEventElement(function(a) {
            var c = b - 0.9 * b;
            a.style.top = Math.floor(parseFloat(a.style.top) - c) + "px"
        }) : this.clearScrollInterval()
    },
    newEvent: function(a) {
        var b = this.eventTmpl,
            c = Math.floor(99999999999 * Math.random()) + "" + (new Date).getTime(),
            b = b.replace("${timeAgoElemID}", c),
            b = b.replace("${locName}", a.ln),
            b = b.replace("${countryCode}", a.cc.toLowerCase());
        if (a.t && a.u) {
            var d = a.t;
            40 < d.length && (d = d.substr(0, 40) + "...");
            b = b.replace("${pageViewed}", ' viewed <a href="' +
                a.u + '" target="_blank">' + d + "</a>")
        } else b = b.replace("${pageViewed}", "");
        d = this.extractHostname(a.u);
        if (a.r) {
            var e = this.extractHostname(a.r);
            d != e ? (d = ' arrived from <a href="' + a.r.replace('"', "") + '" target="_blank">' + this.extractHostname(a.r) + "</a> ", a.t && a.u && (d += "and "), b = b.replace("${referer}", d)) : b = b.replace("${referer}", "")
        } else b = b.replace("${referer}", "");
        a = this.getFirstEventDivTop();
        e = this.previewMode ? document : this.ifr.doc;
        d = e.createElement("DIV");
        d.style.position = "absolute";
        d.style.left = "1000px";
        d.style.top = "-1000px";
        d.fjTime = (new Date).getTime();
        d.innerHTML = b;
        this.eventElem.insertBefore(d, this.eventElem.firstChild);
        d.fjTimeElem = e.getElementById(c);
        b = Math.floor(((new Date).getTime() - d.fjTime) / 1E3);
        b = this.makeTimeAgo(b) + " ago";
        d.fjTimeElem.innerHTML = b;
        d.style.left = "0px";
        d.style.top = a - d.offsetHeight + "px";
        d.style.width = this.widgetWidth - 14 + "px";
        for (b = d.firstChild; b;) {
            if ("DIV" == b.nodeName) {
                b.style.width = this.widgetWidth - 14 + "px";
                break
            }
            b = b.nextSibling
        }
        var f = 0;
        this.eachEventElement(function(a) {
            f++;
            lastEventElem = a
        });
        100 < f && lastEventElem.parentNode.removeChild(lastEventElem)
    },
    logToSockets: function() {
        var a = new Image(1, 1);
        a.src = fjit.protocol + "://grm.feedjit.com:" + (this.websocketPort + 20) + "/logOldBrowser/?" + this.cachedWParams;
        a.onload = function() {}
    },
    startWebSockets: function() {
        if (this.emergencyDisableSockets) return !1;
        if (this.lastWebSocketConnTime)
            if (1E4 > (new Date).getTime() - this.lastWebSocketConnTime) {
                if (this.socketsCreatedWithinTen++, 5 < this.socketsCreatedWithinTen) return this.emergencyDisableSockets = !0, !1
            } else this.socketsCreatedWithinTen = 0;
        this.lastWebSocketConnTime = (new Date).getTime();
        var a = this;
        this.socket = new WebSocket("ws://grm.feedjit.com:" + this.websocketPort + "/fjlive/?" + this.cachedWParams);
        this.socket.onopen = function() {};
        this.socket.onmessage = function(b) {
            var d = !1;
            if ((d = a.JSON.parse(b.data)) && Array.isArray(d)) {
                for (b = 0; b < d.length; b++) a.newEvent(d[b]);
                a.scrollEvents()
            }
        };
        this.socket.onerror = function(a) {};
        this.socket.onclose = function(a) {};
        var b = this.socket;
        setTimeout(function() {
                b.close()
            },
            864E5)
    },
    injectWidgetCSS: function(a, b) {
        if (!fjit.oldBrowser()) {
            var c = this.previewMode ? document.createElement("link") : this.ifr.doc.createElement("link");
            c.type = "text/css";
            c.rel = "stylesheet";
            c.href = a;
            c.media = "screen";
            var d = !1;
            if (this.previewMode) {
                var e = document.getElementsByTagName("head")[0],
                    d = document,
                    f = e.firstChild;
                do f.tagName && "LINK" == f.tagName && /feedjit.com\/style\/\d+\//i.test(f.href) && f.parentNode.removeChild(f); while (f = f.nextSibling)
            } else e = this.ifr.doc.getElementsByTagName("head")[0], d = this.ifr.doc,
                f = e.firstChild, f.parentNode.removeChild(f);
            e.appendChild(c);
            b && setTimeout(function() {
                var c = d.createElement("IMG");
                c.onerror = function() {
                    b()
                };
                c.src = a
            }, 500)
        }
    },
    tfMenu: function() {
        if (!fjit.oldBrowser()) {
            iframeSrc = "http://" + fjit.fjHost + "/pro/wframe/tfMenu?wid=" + encodeURIComponent(this.wid) + "&pid=" + encodeURIComponent(this.pid) + "&ign=" + fjit.getIgnore() + "&u=" + encodeURIComponent(fjit.getCleanLoc()) + "&t=" + encodeURIComponent(fjit.getCleanTitle());
            var a = this;
            this.newPanelIframe(iframeSrc, function(b, c) {
                "doIgnore" ==
                b ? (fjit.ignoreMe(), a.tfMenu()) : "stopIgnoring" == b && (fjit.stopIgnoringMe(), a.tfMenu())
            })
        }
    },
    starClick: function(a) {
        fjit.isOldBrowser() || (iframeSrc = "http://" + fjit.fjHost + "/pro/wframe/starClick?e=" + encodeURIComponent(a) + "&wid=" + encodeURIComponent(this.wid) + "&pid=" + encodeURIComponent(this.pid) + "&u=" + encodeURIComponent(fjit.getCleanLoc()) + "&t=" + encodeURIComponent(fjit.getCleanTitle()), this.newPanelIframe(iframeSrc, function(a, c) {}))
    },
    askAppear: function(a) {
        var b = this;
        fjit.ajax("/siteStatus/", {
            u: fjit.getCleanLoc(),
            pid: this.pid
        }, function(a) {
            b.askAppearCB(a)
        })
    },
    askAppearCB: function(a) {
        if (a.err) fjit.doLogUser = "0", this.doRouter();
        else if ("blocked" == a.state) fjit.doLogUser = "0", this.doRouter();
        else if ("allowed" == a.state) fjit.doLogUser = "1", this.doRouter();
        else {
            a = "http://" + fjit.fjHost + "/pro/wframe/askAppear/?u=" + encodeURIComponent(fjit.getCleanLoc()) + "&wid=" + encodeURIComponent(this.wid) + "&pid=" + encodeURIComponent(this.pid);
            var b = this;
            this.newPanelIframe(a, function(a, d) {
                fjit.doLogUser = "always" == a ? "1" : "0";
                b.doRouter()
            })
        }
    },
    newPanelIframe: function(a, b) {
        var c = document.getElementById("FJZ");
        c && c.parentNode.removeChild(c);
        this.iframeMsgHandler = b;
        c = document.createElement("DIV");
        c.id = "FJZ";
        c.style.display = "none";
        c.innerHTML = '<div id="FJY"><iframe src="' + a + '" width="340" height="140" border="0" frameborder="0" name="FJaskAppearFrame" id="FJaskAppearFrame" style="border: none;" scrolling="no"></iframe></div>';
        document.body.appendChild(c);
        this.fjz = c;
        this.fjz.style.display = "block";
        if (window.postMessage) {
            var d = this;
            this.askAppearListener =
                function(a) {
                    d.receiveMessage(a)
                };
            fjit.addEventListener(window, "message", this.askAppearListener)
        }
    },
    receiveMessage: function(a) {
        /^https?:\/\/(?:[a-zA-Z0-9]+\.)?feedjit.com/.test(a.origin) && (fjit.removeEventListener(window, "message", this.askAppearListener), this.handleMsg(a.data, "message event"))
    },
    handleMsg: function(a, b) {
        this.fjz && this.fjz.parentNode && this.fjz.parentNode.removeChild(this.fjz);
        this.iframeMsgHandler(a, b)
    },
    extractHostname: function(a) {
        var b = document.createElement("A");
        b.href = a;
        return b.hostname
    },
    makeTimeAgo: function(a) {
        var b = Math.floor(a / 2592E3),
            c = Math.floor(a / 86400),
            d = Math.floor(a / 3600),
            e = Math.floor(a / 60);
        return 0 < b ? this.pluralize(b, "month", c - 30 * b, "day") : 0 < c ? (d -= 24 * c, this.pluralize(c, "day", d, "hour")) : 0 < d ? this.pluralize(d, "hr", e - 60 * d, "min") : 0 < e ? this.pluralize(e, "min") : Math.round(a) + " secs"
    },
    pluralize: function(a, b, c, d) {
        1 != a && (b += "s");
        1 != c && (d += "s");
        return a && c ? a + " " + b + " " + c + " " + d : a + " " + b
    },
    panelOnMouseDown: function(a) {
        this.bodyDragSinceMouseDown = !1;
        this.scrollingPause();
        this.scrollDragLastPos =
            a.clientY
    },
    panelOnMouseMove: function(a) {
        this.scrollDragLastPos && a.clientY != this.scrollDragLastPos && (this.scrollManualMove(a.clientY - this.scrollDragLastPos), this.scrollDragLastPos = a.clientY, this.bodyDragSinceMouseDown = !0)
    },
    panelOnMouseUp: function(a) {
        this.scrollDragLastPos = !1;
        this.scrollingUnpause()
    },
    panelOnMouseOut: function(a) {
        var b = a.relatedTarget || a.toElement;
        b && "HTML" != b.nodeName || this.panelOnMouseUp(a)
    },
    bodyLinkClicked: function(a) {
        return this.bodyDragSinceMouseDown ? (a.stopPropagation ? a.stopPropagation() :
            a.cancelBubble = !0, !1) : !0
    },
    updateWidgetWidth: function(a) {
        /^\d+$/.test(a) && (this.widgetWidth = parseInt(a))
    },
    makePortOffset: function() {
        var a = "" + fjit.csum(fjit.get_cHost());
        return parseInt(a.substr(a.length - 1, 1), 16)
    }
}, fjltf.init());
