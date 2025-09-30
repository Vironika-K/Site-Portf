(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"L3_atlas_1", frames: [[0,1280,918,493],[0,702,919,576],[921,0,920,676],[921,1254,967,444],[921,678,919,574],[0,0,919,700]]},
		{name:"L3_atlas_2", frames: [[0,0,626,541],[0,543,633,395],[635,356,293,616],[274,1130,210,166],[0,1222,209,77],[0,940,272,280],[562,974,246,206],[274,940,286,188],[628,0,588,354]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["L3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Безымянный1 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.в2 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.вв0 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.вв1 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.вв2 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.в4 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.в5 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.кн1 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.кн2 = function() {
	this.initialize(ss["L3_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.PigeonFlying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(2.55,-0.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(2.2,61.6,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(1.65,185.7,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(1.8,184.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(2.1,187.05,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(2,103.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0,483.5,522.8);


(lib.Шапка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.вв2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,77);


(lib.Тело = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.вв0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,616);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.кн1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,286,188), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.вв1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,210,166), null);


(lib.Нога = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,206);


(lib.Велосипед = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,395);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в4();
	this.instance.setTransform(-136,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-140,272,280);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в4();
	this.instance.setTransform(-136,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-140,272,280);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в4();
	this.instance.setTransform(-136,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-140,272,280);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в4();
	this.instance.setTransform(-136,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-140,272,280);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.в4();
	this.instance.setTransform(-136,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-140,272,280);


(lib.Крыло = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(143,186.8,1,1,0,0,0,143,186.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:94,scaleX:1.004,scaleY:0.977,skewX:1.3196,skewY:3.2301,x:144.05,y:99},0).wait(1).to({scaleX:1.008,scaleY:0.9539,skewX:2.6392,skewY:6.4602,x:144.95,y:103.95},0).wait(1).to({scaleX:1.0119,scaleY:0.9308,skewX:3.9587,skewY:9.6903,x:145.85,y:109.05},0).wait(1).to({scaleX:1.0159,scaleY:0.9077,skewX:5.2783,skewY:12.9204,x:146.6,y:114.1},0).wait(1).to({scaleX:1.0199,scaleY:0.8847,skewX:6.5979,skewY:16.1505,x:147.25,y:119.2},0).wait(1).to({scaleX:1.0239,scaleY:0.8616,skewX:7.9175,skewY:19.3806,x:147.8,y:124.35},0).wait(1).to({scaleX:1.0279,scaleY:0.8386,skewX:9.2371,skewY:22.6107,x:148.25,y:129.55},0).wait(1).to({scaleY:0.7996,skewX:11.7171,skewY:25.0909,x:148.75,y:135.8},0).wait(1).to({scaleY:0.7606,skewX:14.1971,skewY:27.5712,x:148.95,y:142},0).wait(1).to({scaleY:0.7217,skewX:16.6772,skewY:30.0515,x:148.85,y:148.35},0).wait(1).to({scaleY:0.6827,skewX:19.1572,skewY:32.5318,x:148.3,y:154.65},0).wait(1).to({scaleY:0.6438,skewX:21.6372,skewY:35.0121,x:147.55,y:161.1},0).wait(1).to({scaleY:0.6048,skewX:24.1173,skewY:37.4924,x:146.3,y:167.4},0).wait(1).to({scaleX:1.0262,scaleY:0.6267,skewX:21.0343,skewY:34.4095,x:145.75,y:162.3},0).wait(1).to({scaleX:1.0244,scaleY:0.6486,skewX:17.9514,skewY:31.3266,x:144.9,y:157.25},0).wait(1).to({scaleX:1.0227,scaleY:0.6705,skewX:14.8684,skewY:28.2438,x:143.85,y:152.3},0).wait(1).to({scaleX:1.021,scaleY:0.6924,skewX:11.7855,skewY:25.1609,x:142.4,y:147.45},0).wait(1).to({scaleX:1.0193,scaleY:0.7143,skewX:8.7025,skewY:22.078,x:140.8,y:142.8},0).wait(1).to({scaleX:1.0175,scaleY:0.7363,skewX:5.6196,skewY:18.9951,x:138.95,y:138.25},0).wait(1).to({scaleX:1.0158,scaleY:0.7582,skewX:2.5366,skewY:15.9123,x:136.85,y:133.9},0).wait(1).to({scaleX:1.0141,scaleY:0.7791,skewX:2.1457,skewY:14.3255,x:137.75,y:130.3},0).wait(1).to({scaleX:1.0124,scaleY:0.8001,skewX:1.7548,skewY:12.7388,x:138.75,y:126.55},0).wait(1).to({scaleX:1.0107,scaleY:0.821,skewX:1.3639,skewY:11.1521,x:139.65,y:122.9},0).wait(1).to({scaleX:1.0089,scaleY:0.842,skewX:0.973,skewY:9.5654,x:140.5,y:119.2},0).wait(1).to({scaleX:1.0072,scaleY:0.8629,skewX:0.5821,skewY:7.9787,x:141.4,y:115.55},0).wait(1).to({scaleX:1.0055,scaleY:0.8839,skewX:0.1912,skewY:6.3919,x:142.15,y:111.9},0).wait(1).to({scaleX:1.0038,scaleY:0.9048,skewX:-0.1997,skewY:4.8052,x:143,y:108.2},0).wait(1).to({scaleX:1.002,scaleY:0.9258,skewX:-0.5907,skewY:3.2185,x:143.75,y:104.55},0).wait(1).to({scaleX:1.0003,scaleY:0.9467,skewX:-0.9816,skewY:1.6318,x:144.45,y:100.95},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-4.6,303.2,313.5);


(lib.Колесо = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(134.9,142,1,1,0,0,0,-1.1,2);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(140,136,1,1,-90);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.setTransform(136,133.85,1,1,180);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация6("synched",0);
	this.instance_3.setTransform(133.95,136,1,1,90);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация7("synched",0);
	this.instance_4.setTransform(136,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_4}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,rotation:-90,x:140,y:136},15).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},15).to({_off:true,rotation:-180,x:136,y:133.85},14).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},14).to({_off:true,rotation:-270,x:133.95,y:136},13).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},13).to({_off:true,rotation:-360,x:136,y:140},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-60.3,393.3,393.40000000000003);


(lib.Книга = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Крыло("synched",0);
	this.instance.setTransform(271.95,100.6,0.6234,0.6234,0,0,0,145.7,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой_1
	this.instance_1 = new lib.кн2();
	this.instance_1.setTransform(0,0,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой_3
	this.instance_2 = new lib.Крыло("synched",0);
	this.instance_2.setTransform(70.9,65.9,0.5867,0.5867,0,0,180,145.7,152.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-26,384.5,224.3);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,0,1,1,0,0,0,105,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0009,skewY:0.6624,x:0.05,y:0.75},0).wait(1).to({scaleX:1.0018,skewY:1.3249,x:0,y:1.55},0).wait(1).to({scaleX:1.0026,skewY:1.9873,y:2.3},0).wait(1).to({scaleX:1.0035,skewY:2.6497,y:3.05},0).wait(1).to({scaleX:1.0044,skewY:3.3122,x:0.05,y:3.85},0).wait(1).to({scaleX:1.0053,skewY:3.9746,y:4.6},0).wait(1).to({scaleX:1.0062,skewY:4.637,y:5.35},0).wait(1).to({scaleX:1.007,skewY:5.2995,y:6.1},0).wait(1).to({scaleX:1.0079,skewY:5.9619,x:0,y:6.9},0).wait(1).to({scaleX:1.0088,skewY:6.6243,y:7.6},0).wait(1).to({scaleX:1.0097,skewY:7.2868,y:8.4},0).wait(1).to({scaleX:1.0105,skewY:7.9492,x:0.05,y:9.15},0).wait(1).to({scaleX:1.0114,skewY:8.6116,y:9.9},0).wait(1).to({scaleX:1.0145,scaleY:0.9991,skewX:1.1942,skewY:9.3427,x:-0.55,y:10.9},0).wait(1).to({scaleX:1.0177,scaleY:0.9981,skewX:2.3884,skewY:10.0737,x:-1.05,y:11.85},0).wait(1).to({scaleX:1.0208,scaleY:0.9971,skewX:3.5826,skewY:10.8048,x:-1.55,y:12.85},0).wait(1).to({scaleX:1.0239,scaleY:0.9962,skewX:4.7768,skewY:11.5359,x:-2.15,y:13.8},0).wait(1).to({scaleX:1.0271,scaleY:0.9952,skewX:5.9711,skewY:12.2669,x:-2.65,y:14.75},0).wait(1).to({scaleX:1.0302,scaleY:0.9943,skewX:7.1653,skewY:12.998,x:-3.2,y:15.8},0).wait(1).to({scaleX:1.0334,scaleY:0.9933,skewX:8.3595,skewY:13.729,x:-3.75,y:16.7},0).wait(1).to({scaleX:1.0365,scaleY:0.9924,skewX:9.5537,skewY:14.4601,x:-4.25,y:17.65},0).wait(1).to({scaleX:1.0396,scaleY:0.9914,skewX:10.7479,skewY:15.1912,x:-4.8,y:18.7},0).wait(1).to({scaleX:1.0427,scaleY:0.9905,skewX:11.9421,skewY:15.9222,x:-5.35,y:19.7},0).wait(1).to({scaleX:1.0459,scaleY:0.9895,skewX:13.1363,skewY:16.6533,x:-5.9,y:20.65},0).wait(1).to({scaleX:1.049,scaleY:0.9886,skewX:14.3305,skewY:17.3843,x:-6.45,y:21.6},0).wait(1).to({scaleX:1.0521,scaleY:0.9876,skewX:15.5248,skewY:18.1154,x:-7,y:22.6},0).wait(1).to({scaleX:1.0496,scaleY:0.9866,skewX:16.719,x:-8.55,y:21.75},0).wait(1).to({scaleX:1.0472,scaleY:0.9857,skewX:17.9132,x:-10.15,y:20.95},0).wait(1).to({scaleX:1.0447,scaleY:0.9847,skewX:19.1074,x:-11.8,y:20.15},0).wait(1).to({scaleX:1.0422,scaleY:0.9838,skewX:20.3016,x:-13.4,y:19.35},0).wait(1).to({scaleX:1.0397,scaleY:0.9828,skewX:21.4958,x:-15,y:18.5},0).wait(1).to({scaleX:1.0372,scaleY:0.9819,skewX:22.69,x:-16.6,y:17.7},0).wait(1).to({scaleX:1.0347,scaleY:0.9809,skewX:23.8842,x:-18.15,y:16.9},0).wait(1).to({scaleX:1.0322,scaleY:0.9799,skewX:25.0784,x:-19.75,y:16.05},0).wait(1).to({scaleX:1.0297,scaleY:0.979,skewX:26.2727,x:-21.35,y:15.2},0).wait(1).to({scaleX:1.0273,scaleY:0.978,skewX:27.4669,x:-23,y:14.45},0).wait(1).to({scaleX:1.0248,scaleY:0.9771,skewX:28.6611,x:-24.6,y:13.6},0).wait(1).to({scaleX:1.0223,scaleY:0.9761,skewX:29.8553,x:-26.2,y:12.75},0).wait(1).to({scaleX:1.0198,scaleY:0.9752,skewX:31.0495,x:-27.8,y:12},0).wait(1).to({scaleX:1.0173,scaleY:0.9784,skewX:28.5996,skewY:17.01,x:-25.9,y:11.1},0).wait(1).to({scaleX:1.0148,scaleY:0.9817,skewX:26.1496,skewY:15.9045,x:-24.05,y:10.3},0).wait(1).to({scaleX:1.0124,scaleY:0.9849,skewX:23.6997,skewY:14.7991,x:-22.25,y:9.4},0).wait(1).to({scaleX:1.0099,scaleY:0.9881,skewX:21.2497,skewY:13.6937,x:-20.4,y:8.55},0).wait(1).to({scaleX:1.0074,scaleY:0.9914,skewX:18.7998,skewY:12.5882,x:-18.5,y:7.7},0).wait(1).to({scaleX:1.0049,scaleY:0.9946,skewX:16.3499,skewY:11.4828,x:-16.7,y:6.85},0).wait(1).to({scaleX:1.0024,scaleY:0.9979,skewX:13.8999,skewY:10.3773,x:-14.85,y:6},0).wait(1).to({scaleX:0.9999,scaleY:1.0011,skewX:11.45,skewY:9.2719,x:-13.05,y:5.15},0).wait(1).to({scaleX:0.9974,scaleY:1.0044,skewX:9,skewY:8.1665,x:-11.2,y:4.35},0).wait(1).to({scaleX:0.9949,scaleY:1.0076,skewX:6.5501,skewY:7.061,x:-9.3,y:3.45},0).wait(1).to({scaleX:0.9925,scaleY:1.0109,skewX:4.1002,skewY:5.9556,x:-7.45,y:2.6},0).wait(1).to({scaleX:0.99,scaleY:1.0141,skewX:1.6502,skewY:4.8502,x:-5.6,y:1.75},0).wait(1).to({scaleX:0.9875,scaleY:1.0173,skewX:-0.7997,skewY:3.7447,x:-3.75,y:0.9},0).wait(1).to({scaleX:0.985,scaleY:1.0206,skewX:-3.2496,skewY:2.6393,x:-1.95,y:0},0).wait(1).to({scaleX:0.9848,scaleY:1.0186,skewX:-2.8217,skewY:1.8896,x:-1.75,y:-0.5},0).wait(1).to({scaleX:0.9845,scaleY:1.0167,skewX:-2.3937,skewY:1.1398,x:-1.6,y:-1},0).wait(1).to({scaleX:0.9843,scaleY:1.0148,skewX:-1.9658,skewY:0.3901,x:-1.35,y:-1.5},0).wait(1).to({scaleX:0.984,scaleY:1.0128,skewX:-1.5378,skewY:-0.3596,x:-1.2,y:-1.95},0).wait(1).to({scaleX:0.9838,scaleY:1.0109,rotation:-1.1098,skewX:0,skewY:0,x:-1.05,y:-2.45},0).wait(1).to({scaleX:0.9835,scaleY:1.009,rotation:0,skewX:-0.6819,skewY:-1.859,x:-0.85,y:-2.95},0).wait(1).to({scaleX:0.9833,scaleY:1.007,skewX:-0.2539,skewY:-2.6087,x:-0.65,y:-3.45},0).wait(1).to({scaleX:0.983,scaleY:1.0051,skewX:0.1741,skewY:-3.3585,x:-0.45,y:-4},0).wait(1).to({scaleX:0.9828,scaleY:1.0031,skewX:0.602,skewY:-4.1082,x:-0.25,y:-4.45},0).wait(1).to({scaleX:0.9825,scaleY:1.0012,skewX:1.03,skewY:-4.8579,x:-0.1,y:-4.95},0).wait(1).to({scaleX:0.9823,scaleY:0.9993,skewX:1.458,skewY:-5.6076,x:0.1,y:-5.5},0).wait(1).to({scaleX:0.982,scaleY:0.9973,skewX:1.8859,skewY:-6.3573,x:0.3,y:-5.9},0).wait(1).to({scaleY:0.9972,skewX:1.9145,skewY:-6.4073,y:-6.1},0).wait(1).to({scaleY:0.997,skewX:1.943,skewY:-6.4573,x:0.35,y:-6.2},0).wait(1).to({scaleY:0.9969,skewX:1.9715,skewY:-6.5073,x:0.4,y:-6.3},0).wait(1).to({scaleY:0.9968,skewX:2,skewY:-6.5573,y:-6.4},0).wait(1).to({scaleY:0.9967,skewX:2.0286,skewY:-6.6072,y:-6.55},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.3,-101,291.3,236.9);


(lib.Волосы = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Шапка("synched",0);
	this.instance.setTransform(28.5,-19.3,1,1,0,0,0,131.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

	// Слой_1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(85.15,61.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71));

	// Слой_3
	this.instance_2 = new lib.Тело("synched",0);
	this.instance_2.setTransform(-99,267.15,1,1,0,0,0,146.5,308);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71));

	// Слой_5
	this.instance_3 = new lib.Велосипед("synched",0);
	this.instance_3.setTransform(-68.15,390.35,1,1,0,0,0,316.5,197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71));

	// Слой_6
	this.instance_4 = new lib.Колесо("synched",0);
	this.instance_4.setTransform(112.95,512.7,1,1,0,0,0,136.6,135.2);

	this.instance_5 = new lib.Колесо("synched",0);
	this.instance_5.setTransform(-306.05,504.8,1,1,0,0,0,136,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(71));

	// Слой_4
	this.instance_6 = new lib.Нога("synched",0);
	this.instance_6.setTransform(-208.05,378.85,1,1,0,0,0,123,103);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502,-65.4,811.5,776);


// stage content:
(lib._3лаба = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Книга5
	this.instance = new lib.Книга("synched",19);
	this.instance.setTransform(1659.1,544.8,0.3503,0.3977,0,22.3938,8.405,167.9,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:174.2,regY:86,scaleX:0.3504,skewX:22.3948,skewY:8.4073,x:1647,y:544.75,startPosition:20},0).wait(1).to({x:1633,y:543.7,startPosition:21},0).wait(1).to({x:1619,y:542.7,startPosition:22},0).wait(1).to({x:1605,y:541.65,startPosition:23},0).wait(1).to({x:1591,y:540.6,startPosition:24},0).wait(1).to({x:1577.05,y:539.6,startPosition:25},0).wait(1).to({x:1563.05,y:538.55,startPosition:26},0).wait(1).to({x:1549.05,y:537.55,startPosition:27},0).wait(1).to({x:1535.05,y:536.5,startPosition:28},0).wait(1).to({x:1521.05,y:535.45,startPosition:29},0).wait(1).to({x:1507.1,y:534.45,startPosition:0},0).wait(1).to({x:1493.1,y:533.4,startPosition:1},0).wait(1).to({x:1479.1,y:532.35,startPosition:2},0).wait(1).to({x:1465.1,y:531.35,startPosition:3},0).wait(1).to({x:1451.1,y:530.3,startPosition:4},0).wait(1).to({x:1437.15,y:529.3,startPosition:5},0).wait(1).to({x:1423.15,y:528.25,startPosition:6},0).wait(1).to({x:1409.15,y:527.2,startPosition:7},0).wait(1).to({x:1395.15,y:526.2,startPosition:8},0).wait(1).to({x:1381.15,y:525.15,startPosition:9},0).wait(1).to({x:1367.2,y:524.15,startPosition:10},0).wait(1).to({x:1353.2,y:523.1,startPosition:11},0).wait(1).to({x:1339.2,y:522.05,startPosition:12},0).wait(1).to({x:1325.2,y:521.05,startPosition:13},0).wait(1).to({x:1311.2,y:520,startPosition:14},0).wait(1).to({x:1297.25,y:519,startPosition:15},0).wait(1).to({x:1283.25,y:517.95,startPosition:16},0).wait(1).to({x:1269.25,y:516.9,startPosition:17},0).wait(1).to({x:1255.25,y:515.9,startPosition:18},0).wait(1).to({x:1241.25,y:514.85,startPosition:19},0).wait(1).to({x:1227.25,y:513.8,startPosition:20},0).wait(1).to({x:1213.3,y:512.8,startPosition:21},0).wait(1).to({x:1199.3,y:511.75,startPosition:22},0).wait(1).to({x:1185.3,y:510.75,startPosition:23},0).wait(1).to({x:1171.3,y:509.7,startPosition:24},0).wait(1).to({x:1157.3,y:508.65,startPosition:25},0).wait(1).to({x:1150.9,y:518.4,startPosition:26},0).wait(1).to({x:1144.45,y:528.15,startPosition:27},0).wait(1).to({x:1138,y:537.9,startPosition:28},0).wait(1).to({x:1131.55,y:547.65,startPosition:29},0).wait(1).to({x:1125.1,y:557.4,startPosition:0},0).wait(1).to({x:1118.7,y:567.1,startPosition:1},0).wait(1).to({x:1112.25,y:576.85,startPosition:2},0).wait(1).to({x:1105.8,y:586.6,startPosition:3},0).wait(1).to({x:1099.35,y:596.35,startPosition:4},0).wait(1).to({x:1092.9,y:606.1,startPosition:5},0).wait(1).to({x:1086.45,y:615.8,startPosition:6},0).wait(1).to({x:1080.05,y:625.55,startPosition:7},0).wait(1).to({x:1073.6,y:635.3,startPosition:8},0).wait(1).to({x:1067.15,y:645.05,startPosition:9},0).wait(1).to({x:1060.7,y:654.8,startPosition:10},0).wait(1).to({x:1054.25,y:664.55,startPosition:11},0).wait(1).to({x:1047.8,y:674.25,startPosition:12},0).wait(1).to({x:1041.4,y:684,startPosition:13},0).wait(1).to({x:1034.95,y:693.75,startPosition:14},0).wait(1).to({x:1028.5,y:703.5,startPosition:15},0).wait(1).to({x:1022.05,y:713.25,startPosition:16},0).wait(1).to({x:1015.6,y:722.95,startPosition:17},0).wait(1).to({x:1009.2,y:732.7,startPosition:18},0).wait(1).to({x:1002.75,y:742.45,startPosition:19},0).wait(1).to({x:996.3,y:752.2,startPosition:20},0).wait(1).to({x:989.85,y:761.95,startPosition:21},0).wait(1).to({x:983.4,y:771.7,startPosition:22},0).wait(1).to({x:976.95,y:781.4,startPosition:23},0).wait(1).to({x:966.65,y:781.6,startPosition:24},0).wait(1).to({x:956.35,y:781.8,startPosition:25},0).wait(1).to({x:946.05,y:782,startPosition:26},0).wait(1).to({x:935.75,y:782.2,startPosition:27},0).wait(1).to({x:925.45,y:782.35,startPosition:28},0).wait(1).to({x:915.15,y:782.55,startPosition:29},0).wait(1).to({x:904.85,y:782.75,startPosition:0},0).wait(1).to({x:894.55,y:782.95,startPosition:1},0).wait(1).to({x:884.25,y:783.15,startPosition:2},0).wait(1).to({x:873.9,y:783.3,startPosition:3},0).wait(1).to({x:863.6,y:783.5,startPosition:4},0).wait(1).to({x:853.3,y:783.7,startPosition:5},0).wait(1).to({x:843,y:783.9,startPosition:6},0).wait(1).to({x:832.7,y:784.1,startPosition:7},0).wait(1).to({x:822.4,y:784.3,startPosition:8},0).wait(1).to({x:812.1,y:784.45,startPosition:9},0).wait(1).to({x:801.8,y:784.65,startPosition:10},0).wait(1).to({x:791.5,y:784.85,startPosition:11},0).wait(1).to({x:781.2,y:785.05,startPosition:12},0).wait(1).to({x:770.9,y:785.25,startPosition:13},0).wait(1).to({x:760.55,y:785.4,startPosition:14},0).wait(1).to({x:750.25,y:785.6,startPosition:15},0).wait(1).to({x:739.95,y:785.8,startPosition:16},0).wait(1).to({x:729.65,y:786,startPosition:17},0).wait(1).to({x:719.35,y:786.2,startPosition:18},0).wait(1).to({x:709.05,y:786.35,startPosition:19},0).wait(1).to({x:698.75,y:786.55,startPosition:20},0).wait(1).to({x:688.45,y:786.75,startPosition:21},0).wait(1).to({x:678.15,y:786.95,startPosition:22},0).wait(1).to({x:667.85,y:787.15,startPosition:23},0).wait(1).to({x:657.5,y:787.3,startPosition:24},0).wait(1).to({x:651.25,y:781.5,startPosition:25},0).wait(1).to({x:644.95,y:775.65,startPosition:26},0).wait(1).to({x:638.65,y:769.85,startPosition:27},0).wait(1).to({x:632.35,y:764,startPosition:28},0).wait(1).to({x:626.05,y:758.15,startPosition:29},0).wait(1).to({x:619.75,y:752.35,startPosition:0},0).wait(1).to({x:613.45,y:746.5,startPosition:1},0).wait(1).to({x:607.15,y:740.7,startPosition:2},0).wait(1).to({x:600.85,y:734.85,startPosition:3},0).wait(1).to({x:594.55,y:729,startPosition:4},0).wait(1).to({x:588.25,y:723.2,startPosition:5},0).wait(1).to({x:582,y:717.35,startPosition:6},0).wait(1).to({x:575.7,y:711.55,startPosition:7},0).wait(1).to({x:569.4,y:705.7,startPosition:8},0).wait(1).to({x:563.1,y:699.85,startPosition:9},0).wait(1).to({x:556.8,y:694.05,startPosition:10},0).wait(1).to({x:550.5,y:688.2,startPosition:11},0).wait(1).to({x:544.2,y:682.4,startPosition:12},0).wait(1).to({x:537.9,y:676.55,startPosition:13},0).wait(1).to({x:531.6,y:670.7,startPosition:14},0).wait(1).to({x:525.3,y:664.9,startPosition:15},0).wait(1).to({x:519,y:659.05,startPosition:16},0).wait(1).to({x:512.75,y:653.2,startPosition:17},0).wait(1).to({x:506.45,y:647.4,startPosition:18},0).wait(1).to({x:500.15,y:641.55,startPosition:19},0).wait(1).to({x:493.85,y:635.75,startPosition:20},0).wait(1).to({x:487.55,y:629.9,startPosition:21},0).wait(1).to({x:481.25,y:624.05,startPosition:22},0).wait(1).to({x:474.95,y:618.25,startPosition:23},0).wait(1).to({x:468.65,y:612.4,startPosition:24},0).wait(1).to({x:462.35,y:606.6,startPosition:25},0).wait(1).to({x:456.05,y:600.75,startPosition:26},0).wait(1).to({x:449.75,y:594.9,startPosition:27},0).wait(1).to({x:443.75,y:583.75,startPosition:28},0).wait(1).to({x:437.7,y:572.6,startPosition:29},0).wait(1).to({x:431.7,y:561.45,startPosition:0},0).wait(1).to({x:425.65,y:550.3,startPosition:1},0).wait(1).to({x:419.65,y:539.15,startPosition:2},0).wait(1).to({x:413.6,y:528,startPosition:3},0).wait(1).to({x:407.6,y:516.85,startPosition:4},0).wait(1).to({x:401.55,y:505.65,startPosition:5},0).wait(1).to({x:395.55,y:494.5,startPosition:6},0).wait(1).to({x:389.5,y:483.35,startPosition:7},0).wait(1).to({x:383.5,y:472.2,startPosition:8},0).wait(1).to({x:377.45,y:461.05,startPosition:9},0).wait(1).to({x:371.4,y:449.9,startPosition:10},0).wait(1).to({x:365.4,y:438.75,startPosition:11},0).wait(1).to({x:359.35,y:427.6,startPosition:12},0).wait(1).to({x:353.35,y:416.45,startPosition:13},0).wait(1).to({x:347.3,y:405.25,startPosition:14},0).wait(1).to({x:341.3,y:394.1,startPosition:15},0).wait(1).to({x:335.25,y:382.95,startPosition:16},0).wait(1).to({x:329.25,y:371.8,startPosition:17},0).wait(1).to({x:323.2,y:360.65,startPosition:18},0).wait(1).to({x:317.2,y:349.5,startPosition:19},0).wait(1).to({x:311.15,y:338.35,startPosition:20},0).wait(1).to({x:305.15,y:327.2,startPosition:21},0).wait(1).to({x:299.1,y:316.05,startPosition:22},0).wait(1).to({x:293.05,y:304.85,startPosition:23},0).wait(1).to({x:282.2,y:313.1,startPosition:24},0).wait(1).to({x:271.3,y:321.3,startPosition:25},0).wait(1).to({x:260.45,y:329.5,startPosition:26},0).wait(1).to({x:249.55,y:337.7,startPosition:27},0).wait(1).to({x:238.7,y:345.95,startPosition:28},0).wait(1).to({x:233.7,y:359.15,startPosition:29},0).wait(1).to({x:228.7,y:372.4,startPosition:0},0).wait(1).to({x:223.7,y:385.6,startPosition:1},0).wait(1).to({x:218.7,y:398.85,startPosition:2},0).wait(1).to({x:213.7,y:412.05,startPosition:3},0).wait(1).to({x:208.7,y:425.3,startPosition:4},0).wait(1).to({x:203.7,y:438.5,startPosition:5},0).wait(1).to({x:198.7,y:451.75,startPosition:6},0).wait(1).to({x:193.7,y:465,startPosition:7},0).wait(1).to({x:188.7,y:478.2,startPosition:8},0).wait(1).to({x:183.7,y:491.45,startPosition:9},0).wait(1).to({x:178.7,y:504.65,startPosition:10},0).wait(1).to({x:173.7,y:517.9,startPosition:11},0).wait(1).to({x:168.7,y:531.1,startPosition:12},0).wait(1).to({x:163.65,y:544.35,startPosition:13},0).wait(1).to({x:158.65,y:557.55,startPosition:14},0).wait(1).to({x:145.75,startPosition:15},0).wait(1).to({x:132.85,y:557.6,startPosition:16},0).wait(1).to({x:119.95,startPosition:17},0).wait(1).to({x:107.05,startPosition:18},0).wait(1).to({x:94.15,startPosition:19},0).wait(1).to({x:81.2,startPosition:20},0).wait(1).to({x:68.3,startPosition:21},0).wait(1).to({x:55.4,startPosition:22},0).wait(1).to({x:42.55,startPosition:23},0).wait(1).to({x:29.65,startPosition:24},0).wait(1).to({x:16.7,startPosition:25},0).wait(1).to({x:3.8,startPosition:26},0).wait(1).to({x:-9.1,startPosition:27},0).wait(1).to({x:-22,startPosition:28},0).wait(1).to({x:-34.9,startPosition:29},0).wait(1).to({x:-47.8,y:557.65,startPosition:0},0).wait(1).to({x:-60.75,startPosition:1},0).wait(1).to({x:-73.65,startPosition:2},0).wait(1).to({x:-86.55,startPosition:3},0).wait(1).to({x:-99.45,startPosition:4},0).wait(1).to({x:-112.35,startPosition:5},0).wait(1).to({x:-125.25,startPosition:6},0).wait(1).to({x:-138.2,startPosition:7},0).wait(1).to({x:-151.1,startPosition:8},0).wait(1).to({x:-164,startPosition:9},0).wait(1).to({x:-176.9,startPosition:10},0).wait(1).to({x:-189.8,startPosition:11},0).wait(1).to({x:-202.75,startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1));

	// Книга4
	this.instance_1 = new lib.Книга("synched",7);
	this.instance_1.setTransform(2385.95,561.8,0.5582,0.5582,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:174.2,regY:86,x:2469.45,y:611.65,startPosition:8},0).wait(1).to({x:2455.75,y:613.55,startPosition:9},0).wait(1).to({x:2442,y:615.45,startPosition:10},0).wait(1).to({x:2428.3,y:617.35,startPosition:11},0).wait(1).to({x:2414.6,y:619.25,startPosition:12},0).wait(1).to({x:2400.85,y:621.15,startPosition:13},0).wait(1).to({x:2387.15,y:623.05,startPosition:14},0).wait(1).to({x:2373.45,y:624.95,startPosition:15},0).wait(1).to({x:2359.7,y:626.85,startPosition:16},0).wait(1).to({x:2346,y:628.75,startPosition:17},0).wait(1).to({x:2332.25,y:630.65,startPosition:18},0).wait(1).to({x:2318.55,y:632.55,startPosition:19},0).wait(1).to({x:2304.85,y:634.45,startPosition:20},0).wait(1).to({x:2291.1,y:636.35,startPosition:21},0).wait(1).to({x:2277.4,y:638.25,startPosition:22},0).wait(1).to({x:2263.7,y:640.15,startPosition:23},0).wait(1).to({x:2249.95,y:642.05,startPosition:24},0).wait(1).to({x:2236.25,y:643.95,startPosition:25},0).wait(1).to({x:2222.5,y:645.85,startPosition:26},0).wait(1).to({x:2208.8,y:647.75,startPosition:27},0).wait(1).to({x:2195.1,y:649.65,startPosition:28},0).wait(1).to({x:2181.35,y:651.55,startPosition:29},0).wait(1).to({x:2167.65,y:653.45,startPosition:0},0).wait(1).to({x:2153.95,y:655.35,startPosition:1},0).wait(1).to({x:2140.2,y:657.25,startPosition:2},0).wait(1).to({x:2126.5,y:659.15,startPosition:3},0).wait(1).to({x:2112.75,y:661.05,startPosition:4},0).wait(1).to({x:2099.05,y:662.95,startPosition:5},0).wait(1).to({x:2085.35,y:664.85,startPosition:6},0).wait(1).to({x:2071.6,y:666.75,startPosition:7},0).wait(1).to({x:2057.9,y:668.65,startPosition:8},0).wait(1).to({x:2044.2,y:670.55,startPosition:9},0).wait(1).to({x:2035.75,y:667.55,startPosition:10},0).wait(1).to({x:2027.35,y:664.55,startPosition:11},0).wait(1).to({x:2018.95,y:661.55,startPosition:12},0).wait(1).to({x:2010.5,y:658.55,startPosition:13},0).wait(1).to({x:2002.1,y:655.55,startPosition:14},0).wait(1).to({x:1993.7,y:652.55,startPosition:15},0).wait(1).to({x:1985.25,y:649.55,startPosition:16},0).wait(1).to({x:1976.85,y:646.55,startPosition:17},0).wait(1).to({x:1968.45,y:643.55,startPosition:18},0).wait(1).to({x:1960,y:640.55,startPosition:19},0).wait(1).to({x:1951.6,y:637.55,startPosition:20},0).wait(1).to({x:1943.2,y:634.55,startPosition:21},0).wait(1).to({x:1934.75,y:631.55,startPosition:22},0).wait(1).to({x:1926.35,y:628.55,startPosition:23},0).wait(1).to({x:1917.95,y:625.55,startPosition:24},0).wait(1).to({x:1909.5,y:622.55,startPosition:25},0).wait(1).to({x:1901.1,y:619.6,startPosition:26},0).wait(1).to({x:1892.7,y:616.6,startPosition:27},0).wait(1).to({x:1884.25,y:613.6,startPosition:28},0).wait(1).to({x:1875.85,y:610.6,startPosition:29},0).wait(1).to({x:1867.45,y:607.6,startPosition:0},0).wait(1).to({x:1859,y:604.6,startPosition:1},0).wait(1).to({x:1850.6,y:601.6,startPosition:2},0).wait(1).to({x:1842.2,y:598.6,startPosition:3},0).wait(1).to({x:1833.75,y:595.6,startPosition:4},0).wait(1).to({x:1825.35,y:592.6,startPosition:5},0).wait(1).to({x:1816.95,y:589.6,startPosition:6},0).wait(1).to({x:1808.5,y:586.6,startPosition:7},0).wait(1).to({x:1800.1,y:583.6,startPosition:8},0).wait(1).to({x:1791.7,y:580.6,startPosition:9},0).wait(1).to({x:1783.25,y:577.6,startPosition:10},0).wait(1).to({x:1774.85,y:574.6,startPosition:11},0).wait(1).to({x:1766.45,y:571.6,startPosition:12},0).wait(1).to({x:1758.05,y:568.65,startPosition:13},0).wait(1).to({x:1748.65,y:571.55,startPosition:14},0).wait(1).to({x:1739.25,y:574.45,startPosition:15},0).wait(1).to({x:1729.9,y:577.35,startPosition:16},0).wait(1).to({x:1720.5,y:580.25,startPosition:17},0).wait(1).to({x:1711.1,y:583.2,startPosition:18},0).wait(1).to({x:1701.75,y:586.1,startPosition:19},0).wait(1).to({x:1692.35,y:589,startPosition:20},0).wait(1).to({x:1682.95,y:591.9,startPosition:21},0).wait(1).to({x:1673.6,y:594.8,startPosition:22},0).wait(1).to({x:1664.2,y:597.75,startPosition:23},0).wait(1).to({x:1654.8,y:600.65,startPosition:24},0).wait(1).to({x:1645.45,y:603.55,startPosition:25},0).wait(1).to({x:1636.05,y:606.45,startPosition:26},0).wait(1).to({x:1626.65,y:609.35,startPosition:27},0).wait(1).to({x:1617.3,y:612.3,startPosition:28},0).wait(1).to({x:1607.9,y:615.2,startPosition:29},0).wait(1).to({x:1598.5,y:618.1,startPosition:0},0).wait(1).to({x:1589.15,y:621,startPosition:1},0).wait(1).to({x:1579.75,y:623.95,startPosition:2},0).wait(1).to({x:1570.35,y:626.85,startPosition:3},0).wait(1).to({x:1561,y:629.75,startPosition:4},0).wait(1).to({x:1551.6,y:632.65,startPosition:5},0).wait(1).to({x:1542.2,y:635.55,startPosition:6},0).wait(1).to({x:1532.85,y:638.5,startPosition:7},0).wait(1).to({x:1523.45,y:641.4,startPosition:8},0).wait(1).to({x:1514.05,y:644.3,startPosition:9},0).wait(1).to({x:1504.7,y:647.2,startPosition:10},0).wait(1).to({x:1495.3,y:650.1,startPosition:11},0).wait(1).to({x:1485.9,y:653.05,startPosition:12},0).wait(1).to({x:1476.55,y:655.95,startPosition:13},0).wait(1).to({x:1467.15,y:658.85,startPosition:14},0).wait(1).to({x:1457.75,y:661.75,startPosition:15},0).wait(1).to({x:1448.4,y:664.7,startPosition:16},0).wait(1).to({x:1438.65,y:661.95,startPosition:17},0).wait(1).to({x:1428.9,y:659.2,startPosition:18},0).wait(1).to({x:1419.2,y:656.5,startPosition:19},0).wait(1).to({x:1409.45,y:653.75,startPosition:20},0).wait(1).to({x:1399.7,y:651.05,startPosition:21},0).wait(1).to({x:1390,y:648.3,startPosition:22},0).wait(1).to({x:1380.25,y:645.6,startPosition:23},0).wait(1).to({x:1370.55,y:642.85,startPosition:24},0).wait(1).to({x:1360.8,y:640.15,startPosition:25},0).wait(1).to({x:1351.05,y:637.4,startPosition:26},0).wait(1).to({x:1341.35,y:634.65,startPosition:27},0).wait(1).to({x:1331.6,y:631.95,startPosition:28},0).wait(1).to({x:1321.85,y:629.2,startPosition:29},0).wait(1).to({x:1312.15,y:626.5,startPosition:0},0).wait(1).to({x:1302.4,y:623.75,startPosition:1},0).wait(1).to({x:1292.7,y:621.05,startPosition:2},0).wait(1).to({x:1282.95,y:618.3,startPosition:3},0).wait(1).to({x:1273.2,y:615.6,startPosition:4},0).wait(1).to({x:1263.5,y:612.85,startPosition:5},0).wait(1).to({x:1253.75,y:610.1,startPosition:6},0).wait(1).to({x:1244,y:607.4,startPosition:7},0).wait(1).to({x:1234.3,y:604.65,startPosition:8},0).wait(1).to({x:1224.55,y:601.95,startPosition:9},0).wait(1).to({x:1214.85,y:599.2,startPosition:10},0).wait(1).to({x:1205.1,y:596.5,startPosition:11},0).wait(1).to({x:1195.35,y:593.75,startPosition:12},0).wait(1).to({x:1185.65,y:591.05,startPosition:13},0).wait(1).to({x:1175.9,y:588.3,startPosition:14},0).wait(1).to({x:1166.2,y:585.6,startPosition:15},0).wait(1).to({x:1157,y:588.05,startPosition:16},0).wait(1).to({x:1147.85,y:590.5,startPosition:17},0).wait(1).to({x:1138.65,y:592.95,startPosition:18},0).wait(1).to({x:1129.5,y:595.4,startPosition:19},0).wait(1).to({x:1120.35,y:597.85,startPosition:20},0).wait(1).to({x:1111.15,y:600.3,startPosition:21},0).wait(1).to({x:1102,y:602.75,startPosition:22},0).wait(1).to({x:1092.8,y:605.2,startPosition:23},0).wait(1).to({x:1083.65,y:607.65,startPosition:24},0).wait(1).to({x:1074.5,y:610.1,startPosition:25},0).wait(1).to({x:1065.3,y:612.55,startPosition:26},0).wait(1).to({x:1056.15,y:615,startPosition:27},0).wait(1).to({x:1046.95,y:617.45,startPosition:28},0).wait(1).to({x:1037.8,y:619.9,startPosition:29},0).wait(1).to({x:1028.65,y:622.35,startPosition:0},0).wait(1).to({x:1019.45,y:624.8,startPosition:1},0).wait(1).to({x:1010.3,y:627.25,startPosition:2},0).wait(1).to({x:1001.1,y:629.7,startPosition:3},0).wait(1).to({x:991.95,y:632.15,startPosition:4},0).wait(1).to({x:982.8,y:634.6,startPosition:5},0).wait(1).to({x:973.6,y:637.05,startPosition:6},0).wait(1).to({x:964.45,y:639.5,startPosition:7},0).wait(1).to({x:955.25,y:641.95,startPosition:8},0).wait(1).to({x:946.1,y:644.4,startPosition:9},0).wait(1).to({x:936.95,y:646.85,startPosition:10},0).wait(1).to({x:927.75,y:649.3,startPosition:11},0).wait(1).to({x:918.6,y:651.75,startPosition:12},0).wait(1).to({x:909.45,y:654.2,startPosition:13},0).wait(1).to({x:898.95,y:651.95,startPosition:14},0).wait(1).to({x:888.5,y:649.7,startPosition:15},0).wait(1).to({x:878,y:647.45,startPosition:16},0).wait(1).to({x:867.55,y:645.2,startPosition:17},0).wait(1).to({x:857.1,y:643,startPosition:18},0).wait(1).to({x:846.6,y:640.75,startPosition:19},0).wait(1).to({x:836.15,y:638.5,startPosition:20},0).wait(1).to({x:825.65,y:636.25,startPosition:21},0).wait(1).to({x:815.2,y:634,startPosition:22},0).wait(1).to({x:804.75,y:631.8,startPosition:23},0).wait(1).to({x:794.25,y:629.55,startPosition:24},0).wait(1).to({x:783.8,y:627.3,startPosition:25},0).wait(1).to({x:773.3,y:625.05,startPosition:26},0).wait(1).to({x:762.85,y:622.8,startPosition:27},0).wait(1).to({x:752.4,y:620.6,startPosition:28},0).wait(1).to({x:741.9,y:618.35,startPosition:29},0).wait(1).to({x:731.45,y:616.1,startPosition:0},0).wait(1).to({x:720.95,y:613.85,startPosition:1},0).wait(1).to({x:710.5,y:611.6,startPosition:2},0).wait(1).to({x:700.05,y:609.4,startPosition:3},0).wait(1).to({x:689.55,y:607.15,startPosition:4},0).wait(1).to({x:679.1,y:604.9,startPosition:5},0).wait(1).to({x:668.6,y:602.65,startPosition:6},0).wait(1).to({x:658.15,y:600.4,startPosition:7},0).wait(1).to({x:647.7,y:598.2,startPosition:8},0).wait(1).to({x:637.2,y:595.95,startPosition:9},0).wait(1).to({x:626.75,y:593.7,startPosition:10},0).wait(1).to({x:616.25,y:591.45,startPosition:11},0).wait(1).to({x:605.8,y:589.2,startPosition:12},0).wait(1).to({x:595.35,y:587,startPosition:13},0).wait(1).to({x:584.85,y:584.75,startPosition:14},0).wait(1).to({x:574.4,y:582.5,startPosition:15},0).wait(1).to({x:563.9,y:580.25,startPosition:16},0).wait(1).to({x:553.45,y:578,startPosition:17},0).wait(1).to({x:543,y:575.8,startPosition:18},0).wait(1).to({x:518.15,y:580.15,startPosition:19},0).wait(1).to({x:493.35,y:584.5,startPosition:20},0).wait(1).to({x:468.5,y:588.85,startPosition:21},0).wait(1).to({x:443.7,y:593.2,startPosition:22},0).wait(1).to({x:418.85,y:597.55,startPosition:23},0).wait(1).to({x:394.05,y:601.9,startPosition:24},0).wait(1).to({x:369.2,y:606.25,startPosition:25},0).wait(1).to({x:344.4,y:610.6,startPosition:26},0).wait(1).to({x:319.6,y:615,startPosition:27},0).wait(1).to({x:294.75,y:619.35,startPosition:28},0).wait(1).to({x:269.95,y:623.7,startPosition:29},0).wait(1).to({x:245.1,y:628.05,startPosition:0},0).wait(1).to({x:220.3,y:632.4,startPosition:1},0).wait(1).to({x:195.45,y:636.75,startPosition:2},0).wait(1).to({x:170.65,y:641.1,startPosition:3},0).wait(1).to({x:145.8,y:645.45,startPosition:4},0).wait(1).to({x:121,y:649.8,startPosition:5},0).wait(1).to({x:96.2,y:654.2,startPosition:6},0).wait(1).to({x:71.4,y:658.55,startPosition:7},0).wait(1).to({x:46.6,y:662.9,startPosition:8},0).wait(1).to({x:21.75,y:667.25,startPosition:9},0).wait(1).to({x:-3.05,y:671.6,startPosition:10},0).wait(1).to({x:-27.9,y:675.95,startPosition:11},0).wait(1).to({x:-52.7,y:680.3,startPosition:12},0).wait(1).to({x:-77.55,y:684.65,startPosition:13},0).wait(1).to({x:-102.35,y:689,startPosition:14},0).wait(1).to({x:-127.2,y:693.4,startPosition:15},0).wait(1));

	// Книга3
	this.instance_2 = new lib.Книга("synched",19);
	this.instance_2.setTransform(1652.6,941.2,0.7744,0.7744,-18.9408,0,0,174.4,84.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:174.2,regY:86,rotation:-18.9415,x:1652.3,y:937.9,startPosition:20},0).wait(1).to({x:1651.7,y:933.25,startPosition:21},0).wait(1).to({x:1651.15,y:928.65,startPosition:22},0).wait(1).to({x:1650.55,y:924,startPosition:23},0).wait(1).to({x:1650,y:919.4,startPosition:24},0).wait(1).to({x:1649.4,y:914.75,startPosition:25},0).wait(1).to({x:1648.8,y:910.15,startPosition:26},0).wait(1).to({x:1648.25,y:905.5,startPosition:27},0).wait(1).to({x:1647.65,y:900.9,startPosition:28},0).wait(1).to({x:1647.1,y:896.25,startPosition:29},0).wait(1).to({x:1646.5,y:891.6,startPosition:0},0).wait(1).to({x:1645.9,y:887,startPosition:1},0).wait(1).to({x:1645.35,y:882.35,startPosition:2},0).wait(1).to({x:1644.75,y:877.75,startPosition:3},0).wait(1).to({x:1644.2,y:873.1,startPosition:4},0).wait(1).to({x:1643.6,y:868.5,startPosition:5},0).wait(1).to({x:1643.05,y:863.85,startPosition:6},0).wait(1).to({x:1642.45,y:859.25,startPosition:7},0).wait(1).to({x:1641.85,y:854.6,startPosition:8},0).wait(1).to({x:1641.3,y:849.95,startPosition:9},0).wait(1).to({x:1640.7,y:845.35,startPosition:10},0).wait(1).to({x:1640.15,y:840.7,startPosition:11},0).wait(1).to({x:1639.55,y:836.1,startPosition:12},0).wait(1).to({x:1638.95,y:831.45,startPosition:13},0).wait(1).to({x:1638.4,y:826.85,startPosition:14},0).wait(1).to({x:1637.8,y:822.2,startPosition:15},0).wait(1).to({x:1637.25,y:817.6,startPosition:16},0).wait(1).to({x:1636.65,y:812.95,startPosition:17},0).wait(1).to({x:1636.1,y:808.3,startPosition:18},0).wait(1).to({x:1635.5,y:803.7,startPosition:19},0).wait(1).to({x:1634.9,y:799.05,startPosition:20},0).wait(1).to({x:1634.35,y:794.45,startPosition:21},0).wait(1).to({x:1633.75,y:789.8,startPosition:22},0).wait(1).to({x:1633.2,y:785.2,startPosition:23},0).wait(1).to({x:1632.6,y:780.55,startPosition:24},0).wait(1).to({x:1632,y:775.95,startPosition:25},0).wait(1).to({x:1629.5,y:782.15,startPosition:26},0).wait(1).to({x:1627,y:788.4,startPosition:27},0).wait(1).to({x:1624.45,y:794.6,startPosition:28},0).wait(1).to({x:1621.95,y:800.85,startPosition:29},0).wait(1).to({x:1619.4,y:807.05,startPosition:0},0).wait(1).to({x:1616.9,y:813.3,startPosition:1},0).wait(1).to({x:1614.4,y:819.55,startPosition:2},0).wait(1).to({x:1611.85,y:825.75,startPosition:3},0).wait(1).to({x:1609.35,y:832,startPosition:4},0).wait(1).to({x:1606.85,y:838.2,startPosition:5},0).wait(1).to({x:1604.3,y:844.45,startPosition:6},0).wait(1).to({x:1601.8,y:850.65,startPosition:7},0).wait(1).to({x:1599.25,y:856.9,startPosition:8},0).wait(1).to({x:1596.75,y:863.15,startPosition:9},0).wait(1).to({x:1594.25,y:869.35,startPosition:10},0).wait(1).to({x:1591.7,y:875.6,startPosition:11},0).wait(1).to({x:1589.2,y:881.8,startPosition:12},0).wait(1).to({x:1586.65,y:888.05,startPosition:13},0).wait(1).to({x:1584.15,y:894.25,startPosition:14},0).wait(1).to({x:1581.65,y:900.5,startPosition:15},0).wait(1).to({x:1579.1,y:906.75,startPosition:16},0).wait(1).to({x:1576.6,y:912.95,startPosition:17},0).wait(1).to({x:1574.05,y:919.2,startPosition:18},0).wait(1).to({x:1571.55,y:925.4,startPosition:19},0).wait(1).to({x:1569.05,y:931.65,startPosition:20},0).wait(1).to({x:1566.5,y:937.85,startPosition:21},0).wait(1).to({x:1564,y:944.1,startPosition:22},0).wait(1).to({x:1561.45,y:950.35,startPosition:23},0).wait(1).to({x:1561.8,y:945.2,startPosition:24},0).wait(1).to({x:1562.1,y:940.1,startPosition:25},0).wait(1).to({x:1562.4,y:935,startPosition:26},0).wait(1).to({x:1562.75,y:929.9,startPosition:27},0).wait(1).to({x:1563.05,y:924.8,startPosition:28},0).wait(1).to({x:1563.35,y:919.7,startPosition:29},0).wait(1).to({x:1563.7,y:914.6,startPosition:0},0).wait(1).to({x:1564,y:909.5,startPosition:1},0).wait(1).to({x:1564.3,y:904.4,startPosition:2},0).wait(1).to({x:1564.65,y:899.3,startPosition:3},0).wait(1).to({x:1564.95,y:894.15,startPosition:4},0).wait(1).to({x:1565.25,y:889.05,startPosition:5},0).wait(1).to({x:1565.6,y:883.95,startPosition:6},0).wait(1).to({x:1565.9,y:878.85,startPosition:7},0).wait(1).to({x:1566.2,y:873.75,startPosition:8},0).wait(1).to({x:1566.55,y:868.65,startPosition:9},0).wait(1).to({x:1566.85,y:863.55,startPosition:10},0).wait(1).to({x:1567.15,y:858.45,startPosition:11},0).wait(1).to({x:1567.5,y:853.35,startPosition:12},0).wait(1).to({x:1567.8,y:848.25,startPosition:13},0).wait(1).to({x:1568.1,y:843.1,startPosition:14},0).wait(1).to({x:1568.45,y:838,startPosition:15},0).wait(1).to({x:1568.75,y:832.9,startPosition:16},0).wait(1).to({x:1569.05,y:827.8,startPosition:17},0).wait(1).to({x:1569.4,y:822.7,startPosition:18},0).wait(1).to({x:1569.7,y:817.6,startPosition:19},0).wait(1).to({x:1570,y:812.5,startPosition:20},0).wait(1).to({x:1570.3,y:807.4,startPosition:21},0).wait(1).to({x:1570.65,y:802.3,startPosition:22},0).wait(1).to({x:1570.95,y:797.2,startPosition:23},0).wait(1).to({x:1571.25,y:792.1,startPosition:24},0).wait(1).to({x:1570.75,y:798.85,startPosition:25},0).wait(1).to({x:1570.2,y:805.6,startPosition:26},0).wait(1).to({x:1569.65,y:812.4,startPosition:27},0).wait(1).to({x:1569.15,y:819.15,startPosition:28},0).wait(1).to({x:1568.6,y:825.9,startPosition:29},0).wait(1).to({x:1568.05,y:832.7,startPosition:0},0).wait(1).to({x:1567.55,y:839.45,startPosition:1},0).wait(1).to({x:1567,y:846.25,startPosition:2},0).wait(1).to({x:1566.45,y:853,startPosition:3},0).wait(1).to({x:1565.9,y:859.75,startPosition:4},0).wait(1).to({x:1565.4,y:866.55,startPosition:5},0).wait(1).to({x:1564.85,y:873.3,startPosition:6},0).wait(1).to({x:1564.3,y:880.1,startPosition:7},0).wait(1).to({x:1563.8,y:886.85,startPosition:8},0).wait(1).to({x:1563.25,y:893.6,startPosition:9},0).wait(1).to({x:1562.7,y:900.4,startPosition:10},0).wait(1).to({x:1562.2,y:907.15,startPosition:11},0).wait(1).to({x:1561.65,y:913.95,startPosition:12},0).wait(1).to({x:1561.1,y:920.7,startPosition:13},0).wait(1).to({x:1560.55,y:927.45,startPosition:14},0).wait(1).to({x:1560.05,y:934.25,startPosition:15},0).wait(1).to({x:1559.5,y:941,startPosition:16},0).wait(1).to({x:1558.95,y:947.8,startPosition:17},0).wait(1).to({x:1558.45,y:954.55,startPosition:18},0).wait(1).to({x:1557.9,y:961.3,startPosition:19},0).wait(1).to({x:1557.35,y:968.1,startPosition:20},0).wait(1).to({x:1556.85,y:974.85,startPosition:21},0).wait(1).to({x:1556.3,y:981.65,startPosition:22},0).wait(1).to({x:1555.75,y:988.4,startPosition:23},0).wait(1).to({x:1555.25,y:995.15,startPosition:24},0).wait(1).to({x:1554.7,y:1001.95,startPosition:25},0).wait(1).to({x:1554.15,y:1008.7,startPosition:26},0).wait(1).to({x:1553.6,y:1015.5,startPosition:27},0).wait(1).to({x:1551.35,y:1004.3,startPosition:28},0).wait(1).to({x:1549.1,y:993.15,startPosition:29},0).wait(1).to({x:1546.85,y:982,startPosition:0},0).wait(1).to({x:1544.6,y:970.85,startPosition:1},0).wait(1).to({x:1542.3,y:959.7,startPosition:2},0).wait(1).to({x:1540.05,y:948.55,startPosition:3},0).wait(1).to({x:1537.8,y:937.4,startPosition:4},0).wait(1).to({x:1535.55,y:926.25,startPosition:5},0).wait(1).to({x:1533.25,y:915.05,startPosition:6},0).wait(1).to({x:1531,y:903.9,startPosition:7},0).wait(1).to({x:1528.75,y:892.75,startPosition:8},0).wait(1).to({x:1526.5,y:881.6,startPosition:9},0).wait(1).to({x:1524.2,y:870.45,startPosition:10},0).wait(1).to({x:1521.95,y:859.3,startPosition:11},0).wait(1).to({x:1519.7,y:848.15,startPosition:12},0).wait(1).to({x:1517.45,y:837,startPosition:13},0).wait(1).to({x:1515.2,y:825.85,startPosition:14},0).wait(1).to({x:1512.9,y:814.65,startPosition:15},0).wait(1).to({x:1510.65,y:803.5,startPosition:16},0).wait(1).to({x:1508.4,y:792.35,startPosition:17},0).wait(1).to({x:1506.15,y:781.2,startPosition:18},0).wait(1).to({x:1503.85,y:770.05,startPosition:19},0).wait(1).to({x:1501.6,y:758.9,startPosition:20},0).wait(1).to({x:1499.35,y:747.75,startPosition:21},0).wait(1).to({x:1497.1,y:736.6,startPosition:22},0).wait(1).to({x:1494.8,y:725.45,startPosition:23},0).wait(1).to({x:1504.45,y:734.1,startPosition:24},0).wait(1).to({x:1514.05,y:742.8,startPosition:25},0).wait(1).to({x:1523.65,y:751.45,startPosition:26},0).wait(1).to({x:1533.3,y:760.15,startPosition:27},0).wait(1).to({x:1542.9,y:768.8,startPosition:28},0).wait(1).to({x:1552.5,y:777.5,startPosition:29},0).wait(1).to({x:1562.1,y:786.2,startPosition:0},0).wait(1).to({x:1571.75,y:794.85,startPosition:1},0).wait(1).to({x:1581.35,y:803.55,startPosition:2},0).wait(1).to({x:1590.95,y:812.2,startPosition:3},0).wait(1).to({x:1600.6,y:820.9,startPosition:4},0).wait(1).to({x:1610.2,y:829.55,startPosition:5},0).wait(1).to({x:1619.8,y:838.25,startPosition:6},0).wait(1).to({x:1629.4,y:846.95,startPosition:7},0).wait(1).to({x:1639.05,y:855.6,startPosition:8},0).wait(1).to({x:1648.65,y:864.3,startPosition:9},0).wait(1).to({x:1658.25,y:872.95,startPosition:10},0).wait(1).to({x:1667.9,y:881.65,startPosition:11},0).wait(1).to({x:1677.5,y:890.3,startPosition:12},0).wait(1).to({x:1687.1,y:899,startPosition:13},0).wait(1).to({x:1696.7,y:907.7,startPosition:14},0).wait(1).to({x:1695.05,y:902.9,startPosition:15},0).wait(1).to({x:1693.35,y:898.15,startPosition:16},0).wait(1).to({x:1691.7,y:893.4,startPosition:17},0).wait(1).to({x:1690,y:888.65,startPosition:18},0).wait(1).to({x:1688.35,y:883.9,startPosition:19},0).wait(1).to({x:1686.65,y:879.1,startPosition:20},0).wait(1).to({x:1684.95,y:874.35,startPosition:21},0).wait(1).to({x:1683.3,y:869.6,startPosition:22},0).wait(1).to({x:1681.6,y:864.85,startPosition:23},0).wait(1).to({x:1679.95,y:860.1,startPosition:24},0).wait(1).to({x:1678.25,y:855.35,startPosition:25},0).wait(1).to({x:1676.6,y:850.55,startPosition:26},0).wait(1).to({x:1674.9,y:845.8,startPosition:27},0).wait(1).to({x:1673.2,y:841.05,startPosition:28},0).wait(1).to({x:1671.55,y:836.3,startPosition:29},0).wait(1).to({x:1669.85,y:831.55,startPosition:0},0).wait(1).to({x:1668.2,y:826.75,startPosition:1},0).wait(1).to({x:1666.5,y:822,startPosition:2},0).wait(1).to({x:1664.85,y:817.25,startPosition:3},0).wait(1).to({x:1663.15,y:812.5,startPosition:4},0).wait(1).to({x:1661.45,y:807.75,startPosition:5},0).wait(1).to({x:1659.8,y:803,startPosition:6},0).wait(1).to({x:1658.1,y:798.2,startPosition:7},0).wait(1).to({x:1656.45,y:793.45,startPosition:8},0).wait(1).to({x:1654.75,y:788.7,startPosition:9},0).wait(1).to({x:1653.1,y:783.95,startPosition:10},0).wait(1).to({x:1651.4,y:779.2,startPosition:11},0).wait(1).to({x:1649.7,y:774.45,startPosition:12},0).wait(1).to({x:1649.1,y:785.2,startPosition:13},0).wait(1).to({x:1648.5,y:796,startPosition:14},0).wait(1).to({x:1647.9,y:806.8,startPosition:15},0).wait(1).to({x:1647.3,y:817.55,startPosition:16},0).wait(1).to({x:1646.7,y:828.35,startPosition:17},0).wait(1).to({x:1646.1,y:839.15,startPosition:18},0).wait(1).to({x:1645.5,y:849.95,startPosition:19},0).wait(1).to({x:1644.85,y:860.7,startPosition:20},0).wait(1).to({x:1644.25,y:871.5,startPosition:21},0).wait(1).to({x:1643.65,y:882.3,startPosition:22},0).wait(1).to({x:1643.05,y:893.1,startPosition:23},0).wait(1).to({x:1642.45,y:903.85,startPosition:24},0).wait(1).to({x:1641.85,y:914.65,startPosition:25},0).wait(1).to({x:1641.25,y:925.45,startPosition:26},0).wait(1).to({x:1640.6,y:936.25,startPosition:27},0).wait(1));

	// Книга2
	this.instance_3 = new lib.Книга("synched",26);
	this.instance_3.setTransform(1652.2,-101.9,0.383,0.383,0,0,0,195.1,102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:174.2,regY:86,x:1640.9,y:-98.5,startPosition:27},0).wait(1).to({x:1637.55,y:-88.6,startPosition:28},0).wait(1).to({x:1634.25,y:-78.8,startPosition:29},0).wait(1).to({x:1630.95,y:-69.05,startPosition:0},0).wait(1).to({x:1627.65,y:-59.25,startPosition:1},0).wait(1).to({x:1624.35,y:-49.5,startPosition:2},0).wait(1).to({x:1621.05,y:-39.7,startPosition:3},0).wait(1).to({x:1617.75,y:-29.9,startPosition:4},0).wait(1).to({x:1614.45,y:-20.15,startPosition:5},0).wait(1).to({x:1611.15,y:-10.35,startPosition:6},0).wait(1).to({x:1607.85,y:-0.6,startPosition:7},0).wait(1).to({x:1604.55,y:9.2,startPosition:8},0).wait(1).to({x:1601.25,y:18.95,startPosition:9},0).wait(1).to({x:1598,y:28.75,startPosition:10},0).wait(1).to({x:1594.7,y:38.45,startPosition:11},0).wait(1).to({x:1591.4,y:48.25,startPosition:12},0).wait(1).to({x:1588.1,y:58,startPosition:13},0).wait(1).to({x:1584.8,y:67.8,startPosition:14},0).wait(1).to({x:1581.5,y:77.55,startPosition:15},0).wait(1).to({x:1578.2,y:87.35,startPosition:16},0).wait(1).to({x:1574.9,y:97.1,startPosition:17},0).wait(1).to({x:1571.6,y:106.9,startPosition:18},0).wait(1).to({x:1568.3,y:116.65,startPosition:19},0).wait(1).to({x:1565,y:126.45,startPosition:20},0).wait(1).to({x:1561.7,y:136.2,startPosition:21},0).wait(1).to({x:1558.4,y:146,startPosition:22},0).wait(1).to({x:1555.15,y:155.75,startPosition:23},0).wait(1).to({x:1551.85,y:165.55,startPosition:24},0).wait(1).to({x:1548.55,y:175.35,startPosition:25},0).wait(1).to({x:1545.25,y:185.1,startPosition:26},0).wait(1).to({x:1541.95,y:194.85,startPosition:27},0).wait(1).to({x:1538.65,y:204.65,startPosition:28},0).wait(1).to({x:1535.35,y:214.4,startPosition:29},0).wait(1).to({x:1532.05,y:224.2,startPosition:0},0).wait(1).to({x:1528.75,y:234,startPosition:1},0).wait(1).to({x:1525.4,y:243.9,startPosition:2},0).wait(1).to({x:1520.9,y:252.3,startPosition:3},0).wait(1).to({x:1511.75,y:257.45,startPosition:4},0).wait(1).to({x:1502.8,y:262.5,startPosition:5},0).wait(1).to({x:1493.8,y:267.6,startPosition:6},0).wait(1).to({x:1484.8,y:272.65,startPosition:7},0).wait(1).to({x:1475.85,y:277.75,startPosition:8},0).wait(1).to({x:1466.85,y:282.8,startPosition:9},0).wait(1).to({x:1457.85,y:287.85,startPosition:10},0).wait(1).to({x:1448.9,y:292.95,startPosition:11},0).wait(1).to({x:1439.9,y:298,startPosition:12},0).wait(1).to({x:1430.9,y:303.1,startPosition:13},0).wait(1).to({x:1421.9,y:308.15,startPosition:14},0).wait(1).to({x:1412.95,y:313.25,startPosition:15},0).wait(1).to({x:1403.95,y:318.3,startPosition:16},0).wait(1).to({x:1394.95,y:323.35,startPosition:17},0).wait(1).to({x:1386,y:328.45,startPosition:18},0).wait(1).to({x:1377,y:333.5,startPosition:19},0).wait(1).to({x:1368,y:338.6,startPosition:20},0).wait(1).to({x:1359.05,y:343.65,startPosition:21},0).wait(1).to({x:1350.05,y:348.75,startPosition:22},0).wait(1).to({x:1341.05,y:353.8,startPosition:23},0).wait(1).to({x:1332.1,y:358.85,startPosition:24},0).wait(1).to({x:1323.1,y:363.95,startPosition:25},0).wait(1).to({x:1314.1,y:369,startPosition:26},0).wait(1).to({x:1305.15,y:374.1,startPosition:27},0).wait(1).to({x:1296.15,y:379.15,startPosition:28},0).wait(1).to({x:1287.15,y:384.2,startPosition:29},0).wait(1).to({x:1278.15,y:389.3,startPosition:0},0).wait(1).to({x:1269.2,y:394.35,startPosition:1},0).wait(1).to({x:1260.2,y:399.45,startPosition:2},0).wait(1).to({x:1251.05,y:404.6,startPosition:3},0).wait(1).to({x:1241.45,y:405,startPosition:4},0).wait(1).to({x:1231.15,y:403.6,startPosition:5},0).wait(1).to({x:1220.9,y:402.2,startPosition:6},0).wait(1).to({x:1210.7,y:400.8,startPosition:7},0).wait(1).to({x:1200.45,y:399.4,startPosition:8},0).wait(1).to({x:1190.25,y:398,startPosition:9},0).wait(1).to({x:1180,y:396.6,startPosition:10},0).wait(1).to({x:1169.8,y:395.2,startPosition:11},0).wait(1).to({x:1159.55,y:393.85,startPosition:12},0).wait(1).to({skewY:180,x:1165.35,y:392.45,startPosition:13},0).wait(1).to({x:1155.15,y:391.05,startPosition:14},0).wait(1).to({x:1144.95,y:389.65,startPosition:15},0).wait(1).to({x:1134.7,y:388.25,startPosition:16},0).wait(1).to({x:1124.5,y:386.85,startPosition:17},0).wait(1).to({x:1114.25,y:385.45,startPosition:18},0).wait(1).to({x:1104.05,y:384.05,startPosition:19},0).wait(1).to({x:1093.8,y:382.65,startPosition:20},0).wait(1).to({x:1083.6,y:381.3,startPosition:21},0).wait(1).to({x:1073.35,y:379.9,startPosition:22},0).wait(1).to({x:1063.15,y:378.5,startPosition:23},0).wait(1).to({x:1052.9,y:377.1,startPosition:24},0).wait(1).to({x:1042.7,y:375.7,startPosition:25},0).wait(1).to({x:1032.5,y:374.3,startPosition:26},0).wait(1).to({x:1022.25,y:372.9,startPosition:27},0).wait(1).to({x:1012.05,y:371.5,startPosition:28},0).wait(1).to({x:1001.8,y:370.1,startPosition:29},0).wait(1).to({x:991.6,y:368.7,startPosition:0},0).wait(1).to({x:981.4,y:367.35,startPosition:1},0).wait(1).to({x:971.15,y:365.95,startPosition:2},0).wait(1).to({x:960.95,y:364.55,startPosition:3},0).wait(1).to({x:950.7,y:363.15,startPosition:4},0).wait(1).to({x:940.5,y:361.75,startPosition:5},0).wait(1).to({x:930.1,y:360.35,startPosition:6},0).wait(1).to({x:919.85,y:358.95,startPosition:7},0).wait(1).to({x:925.85,y:351,startPosition:8},0).wait(1).to({x:932.2,y:342.85,startPosition:9},0).wait(1).to({x:938.5,y:334.7,startPosition:10},0).wait(1).to({x:944.85,y:326.55,startPosition:11},0).wait(1).to({x:951.15,y:318.4,startPosition:12},0).wait(1).to({x:957.45,y:310.25,startPosition:13},0).wait(1).to({x:963.8,y:302.05,startPosition:14},0).wait(1).to({x:970.1,y:293.9,startPosition:15},0).wait(1).to({x:976.4,y:285.75,startPosition:16},0).wait(1).to({x:982.75,y:277.6,startPosition:17},0).wait(1).to({x:989.1,y:269.4,startPosition:18},0).wait(1).to({x:996.85,y:265.9,startPosition:19},0).wait(1).to({x:1007.05,y:268.5,startPosition:20},0).wait(1).to({x:1017.05,y:271,startPosition:21},0).wait(1).to({x:1027.05,y:273.55,startPosition:22},0).wait(1).to({x:1037.1,y:276.1,startPosition:23},0).wait(1).to({x:1047.05,y:278.6,startPosition:24},0).wait(1).to({x:1057.05,y:281.15,startPosition:25},0).wait(1).to({x:1067.05,y:283.7,startPosition:26},0).wait(1).to({x:1077.05,y:286.2,startPosition:27},0).wait(1).to({x:1087.1,y:288.75,startPosition:28},0).wait(1).to({x:1097.1,y:291.25,startPosition:29},0).wait(1).to({x:1107.1,y:293.8,startPosition:0},0).wait(1).to({x:1117.1,y:296.35,startPosition:1},0).wait(1).to({x:1127.05,y:298.85,startPosition:2},0).wait(1).to({x:1137.1,y:301.4,startPosition:3},0).wait(1).to({x:1147.1,y:303.95,startPosition:4},0).wait(1).to({x:1157.05,y:306.45,startPosition:5},0).wait(1).to({x:1167.1,y:309,startPosition:6},0).wait(1).to({x:1177.1,y:311.55,startPosition:7},0).wait(1).to({x:1187.1,y:314.05,startPosition:8},0).wait(1).to({x:1197.1,y:316.6,startPosition:9},0).wait(1).to({x:1207.1,y:319.15,startPosition:10},0).wait(1).to({x:1217.1,y:321.65,startPosition:11},0).wait(1).to({x:1227.1,y:324.2,startPosition:12},0).wait(1).to({x:1237.1,y:326.75,startPosition:13},0).wait(1).to({x:1247.1,y:329.25,startPosition:14},0).wait(1).to({x:1257.1,y:331.8,startPosition:15},0).wait(1).to({x:1267.1,y:334.35,startPosition:16},0).wait(1).to({x:1277.1,y:336.85,startPosition:17},0).wait(1).to({x:1286.9,y:339.3,startPosition:18},0).wait(1).to({x:1297.25,y:340.1,startPosition:19},0).wait(1).to({x:1307.65,y:340.95,startPosition:20},0).wait(1).to({x:1317.95,y:341.75,startPosition:21},0).wait(1).to({x:1328.25,y:342.55,startPosition:22},0).wait(1).to({x:1338.55,y:343.35,startPosition:23},0).wait(1).to({x:1348.8,y:344.15,startPosition:24},0).wait(1).to({x:1359.1,y:344.95,startPosition:25},0).wait(1).to({x:1369.4,y:345.8,startPosition:26},0).wait(1).to({x:1379.65,y:346.6,startPosition:27},0).wait(1).to({x:1389.95,y:347.4,startPosition:28},0).wait(1).to({x:1400.25,y:348.2,startPosition:29},0).wait(1).to({x:1410.5,y:349,startPosition:0},0).wait(1).to({x:1420.8,y:349.8,startPosition:1},0).wait(1).to({x:1431.1,y:350.6,startPosition:2},0).wait(1).to({x:1441.4,y:351.45,startPosition:3},0).wait(1).to({x:1451.65,y:352.25,startPosition:4},0).wait(1).to({x:1461.95,y:353.05,startPosition:5},0).wait(1).to({x:1472.25,y:353.85,startPosition:6},0).wait(1).to({x:1482.5,y:354.65,startPosition:7},0).wait(1).to({x:1492.8,y:355.45,startPosition:8},0).wait(1).to({x:1503.1,y:356.3,startPosition:9},0).wait(1).to({x:1513.35,y:357.1,startPosition:10},0).wait(1).to({x:1523.65,y:357.9,startPosition:11},0).wait(1).to({x:1533.95,y:358.7,startPosition:12},0).wait(1).to({x:1544.25,y:359.5,startPosition:13},0).wait(1).to({x:1554.5,y:360.3,startPosition:14},0).wait(1).to({x:1564.8,y:361.1,startPosition:15},0).wait(1).to({x:1575.1,y:361.95,startPosition:16},0).wait(1).to({x:1585.35,y:362.75,startPosition:17},0).wait(1).to({x:1595.65,y:363.55,startPosition:18},0).wait(1).to({x:1605.95,y:364.35,startPosition:19},0).wait(1).to({x:1616.25,y:365.15,startPosition:20},0).wait(1).to({x:1626.5,y:365.95,startPosition:21},0).wait(1).to({x:1636.8,y:366.8,startPosition:22},0).wait(1).to({x:1647.15,y:367.6,startPosition:23},0).wait(1).to({x:1657.55,y:368.4,startPosition:24},0).wait(1).to({x:1665.15,y:363.35,startPosition:25},0).wait(1).to({x:1671.55,y:355.3,startPosition:26},0).wait(1).to({x:1677.95,y:347.2,startPosition:27},0).wait(1).to({x:1684.35,y:339.1,startPosition:28},0).wait(1).to({x:1690.75,y:331,startPosition:29},0).wait(1).to({x:1697.15,y:322.9,startPosition:0},0).wait(1).to({x:1703.55,y:314.85,startPosition:1},0).wait(1).to({x:1709.95,y:306.75,startPosition:2},0).wait(1).to({x:1716.35,y:298.65,startPosition:3},0).wait(1).to({x:1722.75,y:290.55,startPosition:4},0).wait(1).to({x:1729.15,y:282.45,startPosition:5},0).wait(1).to({x:1735.55,y:274.35,startPosition:6},0).wait(1).to({x:1741.95,y:266.3,startPosition:7},0).wait(1).to({x:1748.35,y:258.2,startPosition:8},0).wait(1).to({x:1754.75,y:250.1,startPosition:9},0).wait(1).to({x:1761.15,y:242,startPosition:10},0).wait(1).to({x:1767.55,y:233.9,startPosition:11},0).wait(1).to({x:1773.95,y:225.85,startPosition:12},0).wait(1).to({x:1780.35,y:217.75,startPosition:13},0).wait(1).to({x:1786.65,y:209.85,startPosition:14},0).wait(1).to({x:1797.15,y:208.95,startPosition:15},0).wait(1).to({x:1807.45,y:208,startPosition:16},0).wait(1).to({x:1817.7,y:207.1,startPosition:17},0).wait(1).to({x:1828,y:206.15,startPosition:18},0).wait(1).to({x:1838.25,y:205.25,startPosition:19},0).wait(1).to({x:1848.55,y:204.3,startPosition:20},0).wait(1).to({x:1858.8,y:203.4,startPosition:21},0).wait(1).to({x:1869.05,y:202.5,startPosition:22},0).wait(1).to({x:1879.35,y:201.55,startPosition:23},0).wait(1).to({x:1889.6,y:200.65,startPosition:24},0).wait(1).to({x:1899.9,y:199.7,startPosition:25},0).wait(1).to({x:1910.2,y:198.8,startPosition:26},0).wait(1).to({x:1920.45,y:197.85,startPosition:27},0).wait(1).to({x:1930.75,y:196.95,startPosition:28},0).wait(1).to({x:1941,y:196.05,startPosition:29},0).wait(1).to({x:1951.3,y:195.1,startPosition:0},0).wait(1).to({x:1961.55,y:194.2,startPosition:1},0).wait(1).to({x:1971.85,y:193.25,startPosition:2},0).wait(1).to({x:1982.1,y:192.35,startPosition:3},0).wait(1).to({x:1992.4,y:191.4,startPosition:4},0).wait(1));

	// Книга1
	this.instance_4 = new lib.Книга("synched",26);
	this.instance_4.setTransform(2073.3,428.9,0.351,0.2645,0,0,0,216.7,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:174.2,regY:86,x:2045.35,y:424.1,startPosition:27},0).wait(1).to({x:2032.3,y:427.35,startPosition:28},0).wait(1).to({x:2019.25,y:430.65,startPosition:29},0).wait(1).to({x:2006.2,y:433.9,startPosition:0},0).wait(1).to({x:1993.15,y:437.2,startPosition:1},0).wait(1).to({x:1980.1,y:440.45,startPosition:2},0).wait(1).to({x:1967.05,y:443.75,startPosition:3},0).wait(1).to({x:1954,y:447,startPosition:4},0).wait(1).to({x:1940.95,y:450.3,startPosition:5},0).wait(1).to({x:1927.9,y:453.55,startPosition:6},0).wait(1).to({x:1914.9,y:456.85,startPosition:7},0).wait(1).to({x:1901.85,y:460.1,startPosition:8},0).wait(1).to({x:1888.8,y:463.4,startPosition:9},0).wait(1).to({x:1875.75,y:466.65,startPosition:10},0).wait(1).to({x:1862.7,y:469.9,startPosition:11},0).wait(1).to({x:1849.65,y:473.2,startPosition:12},0).wait(1).to({x:1836.6,y:476.45,startPosition:13},0).wait(1).to({x:1823.55,y:479.75,startPosition:14},0).wait(1).to({x:1810.5,y:483,startPosition:15},0).wait(1).to({x:1797.45,y:486.3,startPosition:16},0).wait(1).to({x:1784.4,y:489.55,startPosition:17},0).wait(1).to({x:1771.4,y:492.85,startPosition:18},0).wait(1).to({x:1758.35,y:496.1,startPosition:19},0).wait(1).to({x:1745.3,y:499.4,startPosition:20},0).wait(1).to({x:1732.25,y:502.65,startPosition:21},0).wait(1).to({x:1719.2,y:505.95,startPosition:22},0).wait(1).to({x:1706.15,y:509.2,startPosition:23},0).wait(1).to({x:1693.1,y:512.5,startPosition:24},0).wait(1).to({x:1680.05,y:515.75,startPosition:25},0).wait(1).to({x:1667,y:519.05,startPosition:26},0).wait(1).to({x:1653.95,y:522.3,startPosition:27},0).wait(1).to({x:1640.9,y:525.55,startPosition:28},0).wait(1).to({x:1627.8,y:526,startPosition:29},0).wait(1).to({x:1614.65,y:526.45,startPosition:0},0).wait(1).to({x:1601.55,y:526.9,startPosition:1},0).wait(1).to({x:1588.4,y:527.35,startPosition:2},0).wait(1).to({x:1575.3,y:527.8,startPosition:3},0).wait(1).to({x:1562.15,y:528.25,startPosition:4},0).wait(1).to({x:1549.05,y:528.7,startPosition:5},0).wait(1).to({x:1535.9,y:529.15,startPosition:6},0).wait(1).to({x:1522.8,y:529.6,startPosition:7},0).wait(1).to({x:1509.65,y:530.05,startPosition:8},0).wait(1).to({x:1496.55,y:530.5,startPosition:9},0).wait(1).to({x:1483.4,y:530.95,startPosition:10},0).wait(1).to({x:1470.3,y:531.4,startPosition:11},0).wait(1).to({x:1457.15,y:531.85,startPosition:12},0).wait(1).to({x:1444.05,y:532.3,startPosition:13},0).wait(1).to({x:1430.9,y:532.75,startPosition:14},0).wait(1).to({x:1417.8,y:533.2,startPosition:15},0).wait(1).to({x:1404.65,y:533.65,startPosition:16},0).wait(1).to({x:1391.55,y:534.1,startPosition:17},0).wait(1).to({x:1378.4,y:534.5,startPosition:18},0).wait(1).to({x:1365.3,y:534.95,startPosition:19},0).wait(1).to({x:1352.15,y:535.4,startPosition:20},0).wait(1).to({x:1344.9,y:532.3,startPosition:21},0).wait(1).to({x:1337.6,y:529.2,startPosition:22},0).wait(1).to({x:1330.35,y:526.1,startPosition:23},0).wait(1).to({x:1323.1,y:523,startPosition:24},0).wait(1).to({x:1315.85,y:519.9,startPosition:25},0).wait(1).to({x:1308.55,y:516.75,startPosition:26},0).wait(1).to({x:1301.3,y:513.65,startPosition:27},0).wait(1).to({x:1294.05,y:510.55,startPosition:28},0).wait(1).to({x:1286.75,y:507.45,startPosition:29},0).wait(1).to({x:1279.5,y:504.35,startPosition:0},0).wait(1).to({x:1272.25,y:501.25,startPosition:1},0).wait(1).to({x:1264.95,y:498.1,startPosition:2},0).wait(1).to({x:1256.05,y:495.6,startPosition:3},0).wait(1).to({x:1247.15,y:493.1,startPosition:4},0).wait(1).to({x:1238.2,y:490.6,startPosition:5},0).wait(1).to({x:1229.3,y:488.1,startPosition:6},0).wait(1).to({x:1220.35,y:485.6,startPosition:7},0).wait(1).to({x:1211.45,y:483.1,startPosition:8},0).wait(1).to({x:1202.5,y:480.6,startPosition:9},0).wait(1).to({x:1193.6,y:478.1,startPosition:10},0).wait(1).to({x:1184.65,y:475.6,startPosition:11},0).wait(1).to({x:1175.75,y:473.1,startPosition:12},0).wait(1).to({x:1166.8,y:470.6,startPosition:13},0).wait(1).to({x:1157.9,y:468.1,startPosition:14},0).wait(1).to({x:1148.95,y:465.6,startPosition:15},0).wait(1).to({x:1140.05,y:463.1,startPosition:16},0).wait(1).to({x:1131.1,y:460.6,startPosition:17},0).wait(1).to({x:1122.2,y:458.1,startPosition:18},0).wait(1).to({x:1113.3,y:455.6,startPosition:19},0).wait(1).to({x:1104.35,y:453.1,startPosition:20},0).wait(1).to({x:1095.45,y:450.6,startPosition:21},0).wait(1).to({x:1086.5,y:448.1,startPosition:22},0).wait(1).to({x:1077.6,y:445.6,startPosition:23},0).wait(1).to({x:1068.65,y:443.1,startPosition:24},0).wait(1).to({x:1059.75,y:440.55,startPosition:25},0).wait(1).to({x:1050.8,y:438.05,startPosition:26},0).wait(1).to({x:1041.9,y:435.55,startPosition:27},0).wait(1).to({x:1032.95,y:433.05,startPosition:28},0).wait(1).to({x:1024.05,y:430.55,startPosition:29},0).wait(1).to({x:1015.1,y:428.05,startPosition:0},0).wait(1).to({x:1006.2,y:425.55,startPosition:1},0).wait(1).to({x:997.25,y:423.05,startPosition:2},0).wait(1).to({x:988.35,y:420.55,startPosition:3},0).wait(1).to({x:979.45,y:418.05,startPosition:4},0).wait(1).to({x:970.5,y:415.55,startPosition:5},0).wait(1).to({x:961.6,y:413.05,startPosition:6},0).wait(1).to({x:952.65,y:410.55,startPosition:7},0).wait(1).to({x:943.75,y:408.05,startPosition:8},0).wait(1).to({x:934.8,y:405.55,startPosition:9},0).wait(1).to({x:925.9,y:403.05,startPosition:10},0).wait(1).to({x:916.95,y:400.55,startPosition:11},0).wait(1).to({x:908.05,y:398.05,startPosition:12},0).wait(1).to({x:899.1,y:395.55,startPosition:13},0).wait(1).to({x:890.2,y:393.05,startPosition:14},0).wait(1).to({x:881.25,y:390.55,startPosition:15},0).wait(1).to({x:872.35,y:388.05,startPosition:16},0).wait(1).to({x:863.4,y:385.55,startPosition:17},0).wait(1).to({x:854.5,y:383.05,startPosition:18},0).wait(1).to({x:845.55,y:380.5,startPosition:19},0).wait(1).to({x:835.3,y:380.6,startPosition:20},0).wait(1).to({x:825.05,y:380.7,startPosition:21},0).wait(1).to({x:814.8,y:380.8,startPosition:22},0).wait(1).to({x:804.55,y:380.9,startPosition:23},0).wait(1).to({x:794.3,y:381,startPosition:24},0).wait(1).to({x:784.05,y:381.05,startPosition:25},0).wait(1).to({x:773.8,y:381.15,startPosition:26},0).wait(1).to({x:763.55,y:381.25,startPosition:27},0).wait(1).to({x:753.25,y:381.35,startPosition:28},0).wait(1).to({x:743,y:381.45,startPosition:29},0).wait(1).to({x:732.75,y:381.55,startPosition:0},0).wait(1).to({x:722.5,y:381.65,startPosition:1},0).wait(1).to({x:712.25,y:381.7,startPosition:2},0).wait(1).to({x:702,y:381.8,startPosition:3},0).wait(1).to({x:691.75,y:381.9,startPosition:4},0).wait(1).to({x:681.5,y:382,startPosition:5},0).wait(1).to({x:671.25,y:382.1,startPosition:6},0).wait(1).to({x:660.95,y:382.2,startPosition:7},0).wait(1).to({x:650.7,y:382.25,startPosition:8},0).wait(1).to({x:640.45,y:382.35,startPosition:9},0).wait(1).to({x:630.2,y:382.45,startPosition:10},0).wait(1).to({x:619.95,y:382.55,startPosition:11},0).wait(1).to({x:609.7,y:382.65,startPosition:12},0).wait(1).to({x:599.45,y:382.75,startPosition:13},0).wait(1).to({x:589.2,y:382.8,startPosition:14},0).wait(1).to({x:578.9,y:382.9,startPosition:15},0).wait(1).to({x:568.65,y:383,startPosition:16},0).wait(1).to({x:558.4,y:383.1,startPosition:17},0).wait(1).to({x:548.15,y:383.2,startPosition:18},0).wait(1).to({x:537.9,y:383.3,startPosition:19},0).wait(1).to({x:527.65,y:383.35,startPosition:20},0).wait(1).to({x:517.4,y:383.45,startPosition:21},0).wait(1).to({x:507.15,y:383.55,startPosition:22},0).wait(1).to({x:496.9,y:383.65,startPosition:23},0).wait(1).to({x:486.6,y:383.75,startPosition:24},0).wait(1).to({x:476.35,y:383.85,startPosition:25},0).wait(1).to({x:466.1,y:383.9,startPosition:26},0).wait(1).to({x:455.85,y:384,startPosition:27},0).wait(1).to({x:445.6,y:384.1,startPosition:28},0).wait(1).to({x:435.35,y:384.2,startPosition:29},0).wait(1).to({x:425.1,y:384.3,startPosition:0},0).wait(1).to({x:414.85,y:384.4,startPosition:1},0).wait(1).to({x:404.55,y:384.45,startPosition:2},0).wait(1).to({x:394.95,y:379.65,startPosition:3},0).wait(1).to({x:385.3,y:374.8,startPosition:4},0).wait(1).to({x:375.7,y:369.95,startPosition:5},0).wait(1).to({x:366.05,y:365.1,startPosition:6},0).wait(1).to({x:356.4,y:360.25,startPosition:7},0).wait(1).to({x:346.8,y:355.4,startPosition:8},0).wait(1).to({x:337.15,y:350.55,startPosition:9},0).wait(1).to({x:327.5,y:345.7,startPosition:10},0).wait(1).to({x:317.9,y:340.85,startPosition:11},0).wait(1).to({x:308.25,y:336,startPosition:12},0).wait(1).to({x:298.6,y:331.15,startPosition:13},0).wait(1).to({x:289,y:326.3,startPosition:14},0).wait(1).to({x:279.35,y:321.5,startPosition:15},0).wait(1).to({x:269.7,y:316.65,startPosition:16},0).wait(1).to({x:260.1,y:311.8,startPosition:17},0).wait(1).to({x:250.45,y:306.95,startPosition:18},0).wait(1).to({x:240.8,y:302.1,startPosition:19},0).wait(1).to({x:231.2,y:297.25,startPosition:20},0).wait(1).to({x:221.55,y:292.4,startPosition:21},0).wait(1).to({x:211.9,y:287.55,startPosition:22},0).wait(1).to({x:202.3,y:282.7,startPosition:23},0).wait(1).to({x:192.65,y:277.85,startPosition:24},0).wait(1).to({x:183,y:273,startPosition:25},0).wait(1).to({x:173.4,y:268.2,startPosition:26},0).wait(1).to({x:163.75,y:263.35,startPosition:27},0).wait(1).to({x:154.1,y:258.5,startPosition:28},0).wait(1).to({x:144.5,y:253.65,startPosition:29},0).wait(1).to({x:134.85,y:248.8,startPosition:0},0).wait(1).to({x:125.2,y:243.95,startPosition:1},0).wait(1).to({x:115.6,y:239.1,startPosition:2},0).wait(1).to({x:105.95,y:234.25,startPosition:3},0).wait(1).to({x:96.3,y:229.4,startPosition:4},0).wait(1).to({x:86.7,y:224.55,startPosition:5},0).wait(1).to({x:77.05,y:219.7,startPosition:6},0).wait(1).to({x:67.4,y:214.85,startPosition:7},0).wait(1).to({x:54.2,y:213.95,startPosition:8},0).wait(1).to({x:40.9,y:213,startPosition:9},0).wait(1).to({x:27.65,y:212.05,startPosition:10},0).wait(1).to({x:14.35,y:211.1,startPosition:11},0).wait(1).to({x:1.05,y:210.15,startPosition:12},0).wait(1).to({x:-12.2,y:209.2,startPosition:13},0).wait(1).to({x:-25.5,y:208.3,startPosition:14},0).wait(1).to({x:-38.8,y:207.35,startPosition:15},0).wait(1).to({x:-52.05,y:206.4,startPosition:16},0).wait(1).to({x:-65.35,y:205.45,startPosition:17},0).wait(1).to({x:-78.6,y:204.5,startPosition:18},0).wait(1).to({x:-91.9,y:203.55,startPosition:19},0).wait(1).to({x:-105.2,y:202.6,startPosition:20},0).wait(1).to({x:-118.45,y:201.7,startPosition:21},0).wait(1).to({x:-131.75,y:200.75,startPosition:22},0).wait(1).to({x:-145.05,y:199.8,startPosition:23},0).wait(1).to({x:-158.3,y:198.85,startPosition:24},0).wait(1).to({x:-171.6,y:197.9,startPosition:25},0).wait(1).to({x:-184.85,y:196.95,startPosition:26},0).wait(1).to({x:-198.15,y:196,startPosition:27},0).wait(1).to({x:-211.45,y:195.1,startPosition:28},0).wait(1).to({x:-224.7,y:194.15,startPosition:29},0).wait(1).to({x:-238,y:193.2,startPosition:0},0).wait(1).to({x:-251.3,y:192.25,startPosition:1},0).wait(1).to({x:-264.55,y:191.3,startPosition:2},0).wait(1).to({x:-277.85,y:190.35,startPosition:3},0).wait(1).to({x:-291.15,y:189.4,startPosition:4},0).wait(1));

	// Девушка
	this.instance_5 = new lib.Волосы("synched",0);
	this.instance_5.setTransform(2275.4,323.9,0.8035,0.8035,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-95.9,regY:296.1,x:2185.1,y:565.3,startPosition:1},0).wait(1).to({x:2171.85,y:568.9,startPosition:2},0).wait(1).to({x:2158.65,y:572.5,startPosition:3},0).wait(1).to({x:2145.4,y:576.15,startPosition:4},0).wait(1).to({x:2132.2,y:579.75,startPosition:5},0).wait(1).to({x:2118.95,y:583.35,startPosition:6},0).wait(1).to({x:2105.7,y:586.95,startPosition:7},0).wait(1).to({x:2092.5,y:590.6,startPosition:8},0).wait(1).to({x:2079.25,y:594.2,startPosition:9},0).wait(1).to({x:2066.05,y:597.8,startPosition:10},0).wait(1).to({x:2052.8,y:601.45,startPosition:11},0).wait(1).to({x:2039.55,y:605.05,startPosition:12},0).wait(1).to({x:2026.35,y:608.65,startPosition:13},0).wait(1).to({x:2013.1,y:612.25,startPosition:14},0).wait(1).to({x:1999.9,y:615.9,startPosition:15},0).wait(1).to({x:1986.65,y:619.5,startPosition:16},0).wait(1).to({x:1973.4,y:623.1,startPosition:17},0).wait(1).to({x:1960.2,y:626.75,startPosition:18},0).wait(1).to({x:1946.95,y:630.35,startPosition:19},0).wait(1).to({x:1933.75,y:633.95,startPosition:20},0).wait(1).to({x:1920.5,y:637.55,startPosition:21},0).wait(1).to({x:1907.25,y:641.2,startPosition:22},0).wait(1).to({x:1894.05,y:644.8,startPosition:23},0).wait(1).to({x:1880.8,y:648.4,startPosition:24},0).wait(1).to({x:1867.6,y:652.05,startPosition:25},0).wait(1).to({x:1854.35,y:655.65,startPosition:26},0).wait(1).to({x:1841.1,y:659.25,startPosition:27},0).wait(1).to({x:1827.9,y:662.85,startPosition:28},0).wait(1).to({x:1814.65,y:666.5,startPosition:29},0).wait(1).to({x:1801.45,y:670.1,startPosition:30},0).wait(1).to({x:1788.2,y:673.7,startPosition:31},0).wait(1).to({x:1775,y:677.35,startPosition:32},0).wait(1).to({x:1766.25,y:676.25,startPosition:33},0).wait(1).to({x:1757.55,y:675.15,startPosition:34},0).wait(1).to({x:1748.85,y:674.05,startPosition:35},0).wait(1).to({x:1740.15,y:672.95,startPosition:36},0).wait(1).to({x:1731.45,y:671.85,startPosition:37},0).wait(1).to({x:1722.75,y:670.75,startPosition:38},0).wait(1).to({x:1714.05,y:669.65,startPosition:39},0).wait(1).to({x:1705.35,y:668.55,startPosition:40},0).wait(1).to({x:1696.65,y:667.45,startPosition:41},0).wait(1).to({x:1687.95,y:666.35,startPosition:42},0).wait(1).to({x:1679.25,y:665.25,startPosition:43},0).wait(1).to({x:1670.55,y:664.2,startPosition:44},0).wait(1).to({x:1661.85,y:663.1,startPosition:45},0).wait(1).to({x:1653.15,y:662,startPosition:46},0).wait(1).to({x:1644.45,y:660.9,startPosition:47},0).wait(1).to({x:1635.75,y:659.8,startPosition:48},0).wait(1).to({x:1627.05,y:658.7,startPosition:49},0).wait(1).to({x:1618.3,y:657.6,startPosition:50},0).wait(1).to({x:1609.6,y:656.5,startPosition:51},0).wait(1).to({x:1600.9,y:655.4,startPosition:52},0).wait(1).to({x:1592.2,y:654.3,startPosition:53},0).wait(1).to({x:1583.5,y:653.2,startPosition:54},0).wait(1).to({x:1574.8,y:652.15,startPosition:55},0).wait(1).to({x:1566.1,y:651.05,startPosition:56},0).wait(1).to({x:1557.4,y:649.95,startPosition:57},0).wait(1).to({x:1548.7,y:648.85,startPosition:58},0).wait(1).to({x:1540,y:647.75,startPosition:59},0).wait(1).to({x:1531.3,y:646.65,startPosition:60},0).wait(1).to({x:1522.6,y:645.55,startPosition:61},0).wait(1).to({x:1513.9,y:644.45,startPosition:62},0).wait(1).to({x:1505.2,y:643.35,startPosition:63},0).wait(1).to({x:1496.5,y:642.25,startPosition:64},0).wait(1).to({x:1487.8,y:641.15,startPosition:65},0).wait(1).to({x:1479.1,y:640.1,startPosition:66},0).wait(1).to({x:1470.45,y:640.95,startPosition:67},0).wait(1).to({x:1461.85,y:641.85,startPosition:68},0).wait(1).to({x:1453.25,y:642.75,startPosition:69},0).wait(1).to({x:1444.65,y:643.65,startPosition:70},0).wait(1).to({x:1436,y:644.55,startPosition:0},0).wait(1).to({x:1427.4,y:645.4,startPosition:1},0).wait(1).to({x:1418.8,y:646.3,startPosition:2},0).wait(1).to({x:1410.2,y:647.2,startPosition:3},0).wait(1).to({x:1401.6,y:648.1,startPosition:4},0).wait(1).to({x:1392.95,y:649,startPosition:5},0).wait(1).to({x:1384.35,y:649.9,startPosition:6},0).wait(1).to({x:1375.75,y:650.75,startPosition:7},0).wait(1).to({x:1367.15,y:651.65,startPosition:8},0).wait(1).to({x:1358.55,y:652.55,startPosition:9},0).wait(1).to({x:1349.9,y:653.45,startPosition:10},0).wait(1).to({x:1341.3,y:654.35,startPosition:11},0).wait(1).to({x:1332.7,y:655.2,startPosition:12},0).wait(1).to({x:1324.1,y:656.1,startPosition:13},0).wait(1).to({x:1315.45,y:657,startPosition:14},0).wait(1).to({x:1306.85,y:657.9,startPosition:15},0).wait(1).to({x:1298.25,y:658.8,startPosition:16},0).wait(1).to({x:1289.65,y:659.7,startPosition:17},0).wait(1).to({x:1281.05,y:660.55,startPosition:18},0).wait(1).to({x:1272.4,y:661.45,startPosition:19},0).wait(1).to({x:1263.8,y:662.35,startPosition:20},0).wait(1).to({x:1255.2,y:663.25,startPosition:21},0).wait(1).to({x:1246.6,y:664.15,startPosition:22},0).wait(1).to({x:1238,y:665,startPosition:23},0).wait(1).to({x:1229.35,y:665.9,startPosition:24},0).wait(1).to({x:1220.75,y:666.8,startPosition:25},0).wait(1).to({x:1212.15,y:667.7,startPosition:26},0).wait(1).to({x:1203.55,y:668.6,startPosition:27},0).wait(1).to({x:1194.95,y:669.5,startPosition:28},0).wait(1).to({x:1185.85,y:669.05,startPosition:29},0).wait(1).to({x:1176.8,y:668.65,startPosition:30},0).wait(1).to({x:1167.75,y:668.25,startPosition:31},0).wait(1).to({x:1158.65,y:667.8,startPosition:32},0).wait(1).to({x:1149.6,y:667.4,startPosition:33},0).wait(1).to({x:1140.55,y:667,startPosition:34},0).wait(1).to({x:1131.5,y:666.6,startPosition:35},0).wait(1).to({x:1122.4,y:666.15,startPosition:36},0).wait(1).to({x:1113.35,y:665.75,startPosition:37},0).wait(1).to({x:1104.3,y:665.35,startPosition:38},0).wait(1).to({x:1095.2,y:664.95,startPosition:39},0).wait(1).to({x:1086.15,y:664.5,startPosition:40},0).wait(1).to({x:1077.1,y:664.1,startPosition:41},0).wait(1).to({x:1068.05,y:663.7,startPosition:42},0).wait(1).to({x:1058.95,y:663.3,startPosition:43},0).wait(1).to({x:1049.9,y:662.85,startPosition:44},0).wait(1).to({x:1040.85,y:662.45,startPosition:45},0).wait(1).to({x:1031.75,y:662.05,startPosition:46},0).wait(1).to({x:1022.7,y:661.65,startPosition:47},0).wait(1).to({x:1013.65,y:661.2,startPosition:48},0).wait(1).to({x:1004.6,y:660.8,startPosition:49},0).wait(1).to({x:995.5,y:660.4,startPosition:50},0).wait(1).to({x:986.45,y:659.95,startPosition:51},0).wait(1).to({x:977.4,y:659.55,startPosition:52},0).wait(1).to({x:968.3,y:659.15,startPosition:53},0).wait(1).to({x:959.25,y:658.75,startPosition:54},0).wait(1).to({x:950.2,y:658.3,startPosition:55},0).wait(1).to({x:941.15,y:657.9,startPosition:56},0).wait(1).to({x:932.05,y:657.5,startPosition:57},0).wait(1).to({x:923,y:657.1,startPosition:58},0).wait(1).to({x:913.95,y:656.65,startPosition:59},0).wait(1).to({x:904.9,y:656.25,startPosition:60},0).wait(1).to({x:895.8,y:655.85,startPosition:61},0).wait(1).to({x:886.75,y:655.45,startPosition:62},0).wait(1).to({x:877.7,y:655,startPosition:63},0).wait(1).to({x:868.6,y:654.6,startPosition:64},0).wait(1).to({x:859.55,y:654.2,startPosition:65},0).wait(1).to({x:850.5,y:653.8,startPosition:66},0).wait(1).to({x:841.45,y:653.35,startPosition:67},0).wait(1).to({x:832.35,y:652.95,startPosition:68},0).wait(1).to({x:823.3,y:652.55,startPosition:69},0).wait(1).to({x:814.25,y:652.1,startPosition:70},0).wait(1).to({x:805.15,y:651.7,startPosition:0},0).wait(1).to({x:796.1,y:651.3,startPosition:1},0).wait(1).to({x:787.05,y:650.9,startPosition:2},0).wait(1).to({x:778,y:650.45,startPosition:3},0).wait(1).to({x:768.9,y:650.05,startPosition:4},0).wait(1).to({x:759.85,y:649.65,startPosition:5},0).wait(1).to({x:750.8,y:649.25,startPosition:6},0).wait(1).to({x:741.7,y:648.8,startPosition:7},0).wait(1).to({x:732.65,y:648.4,startPosition:8},0).wait(1).to({x:723.6,y:648,startPosition:9},0).wait(1).to({x:714.55,y:647.6,startPosition:10},0).wait(1).to({x:705.45,y:647.15,startPosition:11},0).wait(1).to({x:696.4,y:646.75,startPosition:12},0).wait(1).to({x:687.35,y:646.35,startPosition:13},0).wait(1).to({x:678.3,y:645.95,startPosition:14},0).wait(1).to({x:666.9,y:646.45,startPosition:15},0).wait(1).to({x:655.5,y:646.95,startPosition:16},0).wait(1).to({x:644.1,y:647.45,startPosition:17},0).wait(1).to({x:632.7,y:647.95,startPosition:18},0).wait(1).to({x:621.35,y:648.45,startPosition:19},0).wait(1).to({x:609.95,y:648.95,startPosition:20},0).wait(1).to({x:598.55,y:649.45,startPosition:21},0).wait(1).to({x:587.15,y:649.95,startPosition:22},0).wait(1).to({x:575.8,y:650.45,startPosition:23},0).wait(1).to({x:564.4,y:650.95,startPosition:24},0).wait(1).to({x:553,y:651.45,startPosition:25},0).wait(1).to({x:541.6,y:652,startPosition:26},0).wait(1).to({x:530.2,y:652.5,startPosition:27},0).wait(1).to({x:518.85,y:653,startPosition:28},0).wait(1).to({x:507.45,y:653.5,startPosition:29},0).wait(1).to({x:496.05,y:654,startPosition:30},0).wait(1).to({x:484.65,y:654.5,startPosition:31},0).wait(1).to({x:473.3,y:655,startPosition:32},0).wait(1).to({x:461.9,y:655.5,startPosition:33},0).wait(1).to({x:450.5,y:656,startPosition:34},0).wait(1).to({x:439.1,y:656.5,startPosition:35},0).wait(1).to({x:427.75,y:657,startPosition:36},0).wait(1).to({x:416.35,y:657.5,startPosition:37},0).wait(1).to({x:404.95,y:658.05,startPosition:38},0).wait(1).to({x:393.55,y:658.55,startPosition:39},0).wait(1).to({x:382.15,y:659.05,startPosition:40},0).wait(1).to({x:370.8,y:659.55,startPosition:41},0).wait(1).to({x:359.4,y:660.05,startPosition:42},0).wait(1).to({x:348,y:660.55,startPosition:43},0).wait(1).to({x:336.6,y:661.05,startPosition:44},0).wait(1).to({x:325.25,y:661.55,startPosition:45},0).wait(1).to({x:313.85,y:662.05,startPosition:46},0).wait(1).to({x:302.45,y:662.55,startPosition:47},0).wait(1).to({x:291.05,y:663.05,startPosition:48},0).wait(1).to({x:279.7,y:663.6,startPosition:49},0).wait(1).to({x:258.2,y:664.85,startPosition:50},0).wait(1).to({x:236.7,y:666.15,startPosition:51},0).wait(1).to({x:215.2,y:667.45,startPosition:52},0).wait(1).to({x:193.75,y:668.75,startPosition:53},0).wait(1).to({x:172.25,y:670.05,startPosition:54},0).wait(1).to({x:150.75,y:671.35,startPosition:55},0).wait(1).to({x:129.3,y:672.65,startPosition:56},0).wait(1).to({x:107.8,y:673.95,startPosition:57},0).wait(1).to({x:86.3,y:675.25,startPosition:58},0).wait(1).to({x:64.8,y:676.55,startPosition:59},0).wait(1).to({x:43.35,y:677.85,startPosition:60},0).wait(1).to({x:21.85,y:679.15,startPosition:61},0).wait(1).to({x:0.35,y:680.45,startPosition:62},0).wait(1).to({x:-21.1,y:681.7,startPosition:63},0).wait(1).to({x:-42.6,y:683,startPosition:64},0).wait(1).to({x:-64.1,y:684.3,startPosition:65},0).wait(1).to({x:-85.5,y:685.6,startPosition:66},0).wait(1).to({x:-107,y:686.9,startPosition:67},0).wait(1).to({x:-128.5,y:688.2,startPosition:68},0).wait(1).to({x:-150,y:689.5,startPosition:69},0).wait(1).to({x:-171.45,y:690.8,startPosition:70},0).wait(1).to({x:-192.95,y:692.1,startPosition:0},0).wait(1).to({x:-214.45,y:693.4,startPosition:1},0).wait(1).to({x:-235.9,y:694.7,startPosition:2},0).wait(1).to({x:-257.4,y:696,startPosition:3},0).wait(1).to({x:-278.9,y:697.3,startPosition:4},0).wait(1).to({x:-300.4,y:698.6,startPosition:5},0).wait(1));

	// Голубь
	this.instance_6 = new lib.PigeonFlying("synched",8);
	this.instance_6.setTransform(-208.15,96.05,0.4026,0.4026,-13.005,0,0,240.7,258.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:243.4,regY:261.4,scaleX:0.4027,scaleY:0.4027,rotation:-13.0065,x:-189,y:97.3,startPosition:9},0).wait(1).to({x:-171.25,y:97.5,startPosition:10},0).wait(1).to({x:-153.45,y:97.7,startPosition:11},0).wait(1).to({x:-135.7,y:97.9,startPosition:12},0).wait(1).to({x:-117.9,y:98.15,startPosition:13},0).wait(1).to({x:-100.15,y:98.35,startPosition:14},0).wait(1).to({x:-82.35,y:98.55,startPosition:15},0).wait(1).to({x:-64.55,y:98.75,startPosition:16},0).wait(1).to({x:-46.8,y:98.95,startPosition:17},0).wait(1).to({x:-29,y:99.2,startPosition:18},0).wait(1).to({x:-11.25,y:99.4,startPosition:19},0).wait(1).to({x:6.55,y:99.6,startPosition:20},0).wait(1).to({x:24.3,y:99.8,startPosition:21},0).wait(1).to({x:42.1,y:100,startPosition:22},0).wait(1).to({x:59.85,y:100.25,startPosition:23},0).wait(1).to({x:77.65,y:100.45,startPosition:0},0).wait(1).to({x:95.4,y:100.65,startPosition:1},0).wait(1).to({x:113.2,y:100.85,startPosition:2},0).wait(1).to({x:130.9,y:101.1,startPosition:3},0).wait(1).to({x:148.7,y:101.3,startPosition:4},0).wait(1).to({x:166.5,y:101.5,startPosition:5},0).wait(1).to({x:184.25,y:101.7,startPosition:6},0).wait(1).to({x:202.05,y:101.9,startPosition:7},0).wait(1).to({x:219.8,y:102.15,startPosition:8},0).wait(1).to({x:237.6,y:102.35,startPosition:9},0).wait(1).to({x:255.35,y:102.55,startPosition:10},0).wait(1).to({x:273.15,y:102.75,startPosition:11},0).wait(1).to({x:290.9,y:102.95,startPosition:12},0).wait(1).to({x:304.25,startPosition:13},0).wait(1).to({x:317.55,startPosition:14},0).wait(1).to({x:330.9,startPosition:15},0).wait(1).to({x:344.25,startPosition:16},0).wait(1).to({x:357.55,startPosition:17},0).wait(1).to({x:370.9,startPosition:18},0).wait(1).to({x:384.2,startPosition:19},0).wait(1).to({x:397.55,startPosition:20},0).wait(1).to({x:410.85,startPosition:21},0).wait(1).to({x:424.2,startPosition:22},0).wait(1).to({x:437.5,startPosition:23},0).wait(1).to({x:450.85,startPosition:0},0).wait(1).to({x:464.2,startPosition:1},0).wait(1).to({x:477.5,startPosition:2},0).wait(1).to({x:490.85,startPosition:3},0).wait(1).to({x:504.15,startPosition:4},0).wait(1).to({x:517.5,startPosition:5},0).wait(1).to({x:530.8,startPosition:6},0).wait(1).to({x:544.15,startPosition:7},0).wait(1).to({x:557.45,startPosition:8},0).wait(1).to({x:570.8,startPosition:9},0).wait(1).to({x:584.15,startPosition:10},0).wait(1).to({x:597.45,startPosition:11},0).wait(1).to({x:610.8,startPosition:12},0).wait(1).to({x:624.1,startPosition:13},0).wait(1).to({x:632.9,y:103.15,startPosition:14},0).wait(1).to({x:641.65,y:103.3,startPosition:15},0).wait(1).to({x:650.45,y:103.5,startPosition:16},0).wait(1).to({x:659.2,y:103.65,startPosition:17},0).wait(1).to({x:668,y:103.8,startPosition:18},0).wait(1).to({x:676.75,y:104,startPosition:19},0).wait(1).to({x:685.55,y:104.15,startPosition:20},0).wait(1).to({x:694.3,y:104.35,startPosition:21},0).wait(1).to({x:703.1,y:104.5,startPosition:22},0).wait(1).to({x:711.85,y:104.65,startPosition:23},0).wait(1).to({x:720.65,y:104.85,startPosition:0},0).wait(1).to({x:729.45,y:105,startPosition:1},0).wait(1).to({x:738.2,y:105.2,startPosition:2},0).wait(1).to({x:747,y:105.35,startPosition:3},0).wait(1).to({x:755.75,y:105.5,startPosition:4},0).wait(1).to({x:764.55,y:105.7,startPosition:5},0).wait(1).to({x:773.3,y:105.85,startPosition:6},0).wait(1).to({x:782.1,y:106,startPosition:7},0).wait(1).to({x:790.85,y:106.2,startPosition:8},0).wait(1).to({x:799.65,y:106.35,startPosition:9},0).wait(1).to({x:808.4,y:106.55,startPosition:10},0).wait(1).to({x:817.2,y:106.7,startPosition:11},0).wait(1).to({x:825.95,y:106.85,startPosition:12},0).wait(1).to({x:834.7,y:106.25,startPosition:13},0).wait(1).to({x:843.45,y:105.65,startPosition:14},0).wait(1).to({x:852.25,y:105.05,startPosition:15},0).wait(1).to({x:861,y:104.45,startPosition:16},0).wait(1).to({x:869.75,y:103.85,startPosition:17},0).wait(1).to({x:878.5,y:103.25,startPosition:18},0).wait(1).to({x:887.25,y:102.65,startPosition:19},0).wait(1).to({x:896,y:102.05,startPosition:20},0).wait(1).to({x:904.75,y:101.45,startPosition:21},0).wait(1).to({x:913.5,y:100.85,startPosition:22},0).wait(1).to({x:922.3,y:100.25,startPosition:23},0).wait(1).to({x:931.05,y:99.65,startPosition:0},0).wait(1).to({x:939.8,y:99.05,startPosition:1},0).wait(1).to({x:948.55,y:98.45,startPosition:2},0).wait(1).to({x:957.3,y:97.85,startPosition:3},0).wait(1).to({x:966.05,y:97.25,startPosition:4},0).wait(1).to({x:974.8,y:96.65,startPosition:5},0).wait(1).to({x:983.55,y:96.05,startPosition:6},0).wait(1).to({x:992.3,y:95.45,startPosition:7},0).wait(1).to({x:1001.1,y:94.85,startPosition:8},0).wait(1).to({x:1009.85,y:94.25,startPosition:9},0).wait(1).to({x:1018.6,y:93.65,startPosition:10},0).wait(1).to({x:1027.35,y:93.05,startPosition:11},0).wait(1).to({x:1036.1,y:92.45,startPosition:12},0).wait(1).to({x:1044.85,y:91.8,startPosition:13},0).wait(1).to({x:1053.6,y:91.2,startPosition:14},0).wait(1).to({x:1064.45,y:91.75,startPosition:15},0).wait(1).to({x:1075.25,y:92.25,startPosition:16},0).wait(1).to({x:1086.1,y:92.75,startPosition:17},0).wait(1).to({x:1096.9,y:93.25,startPosition:18},0).wait(1).to({x:1107.7,y:93.8,startPosition:19},0).wait(1).to({x:1118.55,y:94.3,startPosition:20},0).wait(1).to({x:1129.35,y:94.8,startPosition:21},0).wait(1).to({x:1140.2,y:95.3,startPosition:22},0).wait(1).to({x:1151,y:95.8,startPosition:23},0).wait(1).to({x:1161.85,y:96.35,startPosition:0},0).wait(1).to({x:1172.65,y:96.85,startPosition:1},0).wait(1).to({x:1183.45,y:97.35,startPosition:2},0).wait(1).to({x:1194.3,y:97.85,startPosition:3},0).wait(1).to({x:1205.1,y:98.35,startPosition:4},0).wait(1).to({x:1215.95,y:98.9,startPosition:5},0).wait(1).to({x:1226.75,y:99.4,startPosition:6},0).wait(1).to({x:1237.6,y:99.9,startPosition:7},0).wait(1).to({x:1248.4,y:100.4,startPosition:8},0).wait(1).to({x:1259.25,y:100.95,startPosition:9},0).wait(1).to({x:1270.05,y:101.45,startPosition:10},0).wait(1).to({x:1280.85,y:101.95,startPosition:11},0).wait(1).to({x:1291.7,y:102.45,startPosition:12},0).wait(1).to({x:1302.5,y:102.95,startPosition:13},0).wait(1).to({x:1311.05,y:102.5,startPosition:14},0).wait(1).to({x:1319.6,y:102.05,startPosition:15},0).wait(1).to({x:1328.15,y:101.55,startPosition:16},0).wait(1).to({x:1336.7,y:101.1,startPosition:17},0).wait(1).to({x:1345.25,y:100.6,startPosition:18},0).wait(1).to({x:1353.8,y:100.15,startPosition:19},0).wait(1).to({x:1362.3,y:99.7,startPosition:20},0).wait(1).to({x:1370.85,y:99.2,startPosition:21},0).wait(1).to({x:1379.4,y:98.75,startPosition:22},0).wait(1).to({x:1387.95,y:98.25,startPosition:23},0).wait(1).to({x:1396.5,y:97.8,startPosition:0},0).wait(1).to({x:1405.05,y:97.35,startPosition:1},0).wait(1).to({x:1413.6,y:96.85,startPosition:2},0).wait(1).to({x:1422.15,y:96.4,startPosition:3},0).wait(1).to({x:1430.65,y:95.9,startPosition:4},0).wait(1).to({x:1439.2,y:95.45,startPosition:5},0).wait(1).to({x:1447.75,y:95,startPosition:6},0).wait(1).to({x:1456.3,y:94.5,startPosition:7},0).wait(1).to({x:1464.85,y:94.05,startPosition:8},0).wait(1).to({x:1473.4,y:93.55,startPosition:9},0).wait(1).to({x:1481.95,y:93.1,startPosition:10},0).wait(1).to({x:1490.5,y:92.65,startPosition:11},0).wait(1).to({x:1499.05,y:92.15,startPosition:12},0).wait(1).to({x:1507.55,y:91.7,startPosition:13},0).wait(1).to({x:1516.1,y:91.2,startPosition:14},0).wait(1).to({x:1525,y:91.75,startPosition:15},0).wait(1).to({x:1533.95,y:92.3,startPosition:16},0).wait(1).to({x:1542.85,y:92.8,startPosition:17},0).wait(1).to({x:1551.75,y:93.35,startPosition:18},0).wait(1).to({x:1560.65,y:93.9,startPosition:19},0).wait(1).to({x:1569.55,y:94.45,startPosition:20},0).wait(1).to({x:1578.45,y:94.95,startPosition:21},0).wait(1).to({x:1587.35,y:95.5,startPosition:22},0).wait(1).to({x:1596.25,y:96.05,startPosition:23},0).wait(1).to({x:1605.2,y:96.55,startPosition:0},0).wait(1).to({x:1614.1,y:97.1,startPosition:1},0).wait(1).to({x:1623,y:97.65,startPosition:2},0).wait(1).to({x:1631.9,y:98.15,startPosition:3},0).wait(1).to({x:1640.8,y:98.7,startPosition:4},0).wait(1).to({x:1649.7,y:99.25,startPosition:5},0).wait(1).to({x:1658.6,y:99.75,startPosition:6},0).wait(1).to({x:1667.55,y:100.3,startPosition:7},0).wait(1).to({x:1676.45,y:100.85,startPosition:8},0).wait(1).to({x:1685.35,y:101.35,startPosition:9},0).wait(1).to({x:1694.25,y:101.9,startPosition:10},0).wait(1).to({x:1703.15,y:102.45,startPosition:11},0).wait(1).to({x:1712.05,y:102.95,startPosition:12},0).wait(1).to({x:1725,y:102.5,startPosition:13},0).wait(1).to({x:1737.9,y:102,startPosition:14},0).wait(1).to({x:1750.8,y:101.5,startPosition:15},0).wait(1).to({x:1763.7,y:101,startPosition:16},0).wait(1).to({x:1776.65,y:100.5,startPosition:17},0).wait(1).to({x:1789.55,y:100.05,startPosition:18},0).wait(1).to({x:1802.45,y:99.55,startPosition:19},0).wait(1).to({x:1815.4,y:99.05,startPosition:20},0).wait(1).to({x:1828.3,y:98.55,startPosition:21},0).wait(1).to({x:1841.2,y:98.1,startPosition:22},0).wait(1).to({x:1854.1,y:97.6,startPosition:23},0).wait(1).to({x:1867.05,y:97.1,startPosition:0},0).wait(1).to({x:1879.95,y:96.6,startPosition:1},0).wait(1).to({x:1892.85,y:96.1,startPosition:2},0).wait(1).to({x:1905.8,y:95.65,startPosition:3},0).wait(1).to({x:1918.7,y:95.15,startPosition:4},0).wait(1).to({x:1931.6,y:94.65,startPosition:5},0).wait(1).to({x:1944.55,y:94.15,startPosition:6},0).wait(1).to({x:1957.45,y:93.65,startPosition:7},0).wait(1).to({x:1970.35,y:93.2,startPosition:8},0).wait(1).to({x:1983.25,y:92.7,startPosition:9},0).wait(1).to({x:1996.2,y:92.2,startPosition:10},0).wait(1).to({x:2009.1,y:91.7,startPosition:11},0).wait(1).to({x:2022,y:91.2,startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1));

	// Фон
	this.instance_7 = new lib.Безымянный1();
	this.instance_7.setTransform(0,0,3.0671,1.9963);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(340.5,392.9,2249.8,726.3000000000001);
// library properties:
lib.properties = {
	id: '4F0CD3322EC5954996D3730CA1D6D474',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/L3_atlas_1.png", id:"L3_atlas_1"},
		{src:"images/L3_atlas_2.png", id:"L3_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4F0CD3322EC5954996D3730CA1D6D474'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;