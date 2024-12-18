class MockAudioContext {
  constructor() {}
  createBuffer() {
    return {};
  }
  createBufferSource() {
    return {
      connect: () => {},
      start: () => {},
      stop: () => {},
      disconnect: () => {},
    };
  }
  createGain() {
    return {
      connect: () => {},
      gain: {
        setValueAtTime: () => {},
      },
    };
  }
  decodeAudioData() {
    return Promise.resolve({});
  }
  close() {
    return Promise.resolve();
  }
}

global.AudioContext = global.AudioContext || MockAudioContext;
global.webkitAudioContext = global.webkitAudioContext || MockAudioContext;

global.THREE = {
    ...global.THREE,
    AudioLoader: function() {
        return {
            load: function(url, onLoad) {
                // Simulate a successful load with a mock buffer
                return Promise.resolve().then(() => onLoad({}));
            }
        }
    },
     Audio: function() {
        this.setBuffer = function() {};
        this.setVolume = function() {};
        this.play = function() {};
        this.setPlaybackRate = function() {};
        this.connect = function() {};
    },
    Vector3: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.clone = function() {
            return new global.THREE.Vector3(this.x, this.y, this.z);
        }
    }
}