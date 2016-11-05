
//function OscillatorSample() {
//    this.isPlaying = false;
//    this.canvas = document.querySelector('canvas');
//    this.WIDTH = 640;
//    this.HEIGHT = 240;
//}

//function makeDistortionCurve(amount) {
//    var k = typeof amount === 'number' ? amount : 50,
//      n_samples = 44100,
//      curve = new Float32Array(n_samples),
//      deg = Math.PI / 180,
//      i = 0,
//      x;
//    for (; i < n_samples; ++i) {
//        x = i * 2 / n_samples - 1;
//        curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
//    }
//    return curve;
//};

//OscillatorSample.prototype.play = function () {
//    // Create some sweet sweet nodes.
//    this.oscillator = [];
//    this.gainnode = [];
//    var ArrayLength = 9;
//    for (var i = 0; i < ArrayLength; i++) {
//        this.oscillator[i] = context.createOscillator();
//        this.gainnode[i] = context.createGain();
//    }

//    this.analyser = context.createAnalyser();

//    var distortion = context.createWaveShaper();

//    // Setup the graph.
//    for (var i = 0; i < this.oscillator.length; i++) {
//        this.oscillator[i].connect(this.gainnode[i]);
//        this.gainnode[i].connect(this.analyser);
//        this.gainnode[i].gain.value = 0;
//    }
    
//    this.analyser.connect(context.destination);

//    for (var i = 0; i < this.oscillator.length; i++) {
//        this.oscillator[i][this.oscillator[i].start ? 'start' : 'noteOn'](0);
//        this.oscillator[i].frequency.val = 100+ (((i + 1) / 9) * 440);
//        console.log(((i + 1) / 9) * 1000);
//    }
//    //distortion.curve = makeDistortionCurve(1000);
//    //distortion.oversample = '4x';
//    requestAnimFrame(this.visualize.bind(this));
//};

//OscillatorSample.prototype.stop = function () {
//    for (var i = 0; i < this.oscillator.length; i++) {
//        this.oscillator[i].stop(0);
//    }
//};

//OscillatorSample.prototype.toggle = function () {
//    (this.isPlaying ? this.stop() : this.play());
//    this.isPlaying = !this.isPlaying;

//};

//OscillatorSample.prototype.changeFrequency = function (val) {
//    for (var i = 0; i < this.oscillator.length; i++) {
//        //this.oscillator[i].frequency.value = val * ((i+1)/this.oscillator.length);
//        this.oscillator[i].frequency.val = ((i + 1) / 9) * 1000;
//    }
//};

//OscillatorSample.prototype.changeDetune = function (val) {
//    for (var i = 0; i < this.oscillator.length; i++) {
//        this.oscillator[i].detune.value = val;
//    }

//};

////OscillatorSample.prototype.changeVolume = function (id,val) {

////    this.gainnode[id].gain.value = val / 100;
////    //for (var i = 0; i < this.gainnode.length; i++) {
////    //    this.gainnode[i].gain.value = val / 100;
////    //    console.log((i+1/this.gainnode.length)*(val/100));
////    //}

////};

//OscillatorSample.prototype.changeVolume = function (id, val,freq) {
//    console.log(freq);
//        this.oscillator[id].frequency.value = freq*20;
//    //console.log(val/1000);
//    this.gainnode[id].gain.value = val / 100;
//    //for (var i = 0; i < this.oscillator.length; i++) {
//    //    this.oscillator[i].frequency.value = val;
//    //}
//    //this.gainnode[id].gain.value = val / 100;
//    //for (var i = 0; i < this.gainnode.length; i++) {
//    //    this.gainnode[i].gain.value = val / 100;
//    //    console.log((i+1/this.gainnode.length)*(val/100));
//    //}

//};

//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;
//}

//OscillatorSample.prototype.changeType = function (type) {
//    for (var i = 0; i < this.oscillator.length; i++) {
//        if (type == "triangle") {
//            var real = new Float32Array(20);
//            var imag = new Float32Array(20);
//            for (var j = 0; j < real.length; j++) {
//                real[j] = 0;// getRandomArbitrary(0, 1);
//            }
//            for (var j = 0; j < imag.length; j++) {
//                imag[j] = 0;// getRandomArbitrary(0, 1);
//            }
//            //real[0] = 0;
//            //imag[0] = 0;
//            //real[1] = 1;
//            //imag[1] = 0;
//            //real[2] = .5;
//            //imag[2] = 0;
//            //real[3] = 1;
//            //imag[3] = 0;
//            //real[4] = 0;
//            //imag[4] = 0;
//            //real[5] = 1;
//            //imag[5] = 0;

//            var wave = context.createPeriodicWave(real, imag);
//            // this.oscillator[i].type = "custom";
//            this.oscillator[i].setPeriodicWave(wave);
//        }
//        else {
//            this.oscillator[i].type = type;
//        }
//    }

//};

//OscillatorSample.prototype.visualize = function () {
//    //this.canvas.width = this.WIDTH;
//    //this.canvas.height = this.HEIGHT;
//    //var drawContext = this.canvas.getContext('2d');

//    //var times = new Uint8Array(this.analyser.frequencyBinCount);
//    //this.analyser.getByteTimeDomainData(times);
//    //for (var i = 0; i < times.length; i++) {
//    //    var value = times[i];
//    //    var percent = value / 256;
//    //    var height = this.HEIGHT * percent;
//    //    var offset = this.HEIGHT - height - 1;
//    //    var barWidth = this.WIDTH / times.length;
//    //    drawContext.fillStyle = 'black';
//    //    drawContext.fillRect(i * barWidth, offset, 1, 1);
//    //}
//    //requestAnimFrame(this.visualize.bind(this));
//};