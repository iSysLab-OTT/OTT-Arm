const _0x43663d = _0x493e;
(function (_0x2801e7, _0x3d6675) {
  const _0x376dc6 = _0x493e,
    _0x5de8eb = _0x2801e7();
  while (!![]) {
    try {
      const _0x3529bc =
        (parseInt(_0x376dc6(0xaa)) / 0x1) * (parseInt(_0x376dc6(0xa2)) / 0x2) +
        (-parseInt(_0x376dc6(0xa9)) / 0x3) * (parseInt(_0x376dc6(0xb4)) / 0x4) +
        parseInt(_0x376dc6(0xb2)) / 0x5 +
        (-parseInt(_0x376dc6(0xaf)) / 0x6) * (parseInt(_0x376dc6(0xb8)) / 0x7) +
        (parseInt(_0x376dc6(0xb9)) / 0x8) * (parseInt(_0x376dc6(0xb5)) / 0x9) +
        (-parseInt(_0x376dc6(0x9b)) / 0xa) *
          (-parseInt(_0x376dc6(0xa7)) / 0xb) +
        (-parseInt(_0x376dc6(0xb7)) / 0xc) * (parseInt(_0x376dc6(0xa1)) / 0xd);
      if (_0x3529bc === _0x3d6675) break;
      else _0x5de8eb['push'](_0x5de8eb['shift']());
    } catch (_0x150c37) {
      _0x5de8eb['push'](_0x5de8eb['shift']());
    }
  }
})(_0x5bd5, 0x3ce42);
const recordButton = document[_0x43663d(0xba)](_0x43663d(0xad)),
  stopButton = document[_0x43663d(0xba)]('.stop'),
  playButton = document[_0x43663d(0xba)](_0x43663d(0xa4)),
  downloadButton = document['querySelector'](_0x43663d(0xb1)),
  previewPlayer = document[_0x43663d(0xba)](_0x43663d(0x9f)),
  recordingPlayer = document[_0x43663d(0xba)](_0x43663d(0xa8));
let recorder,
  recordedChunks,
  fileName = new Date();
function videoStart() {
  const _0xb66489 = _0x43663d;
  navigator[_0xb66489(0xae)]
    [_0xb66489(0x98)]({ video: !![], audio: !![] })
    [_0xb66489(0xab)]((_0x13c1b4) => {
      const _0x2e9151 = _0xb66489;
      (previewPlayer[_0x2e9151(0xbb)] = _0x13c1b4),
        startRecording(previewPlayer[_0x2e9151(0xa5)]());
    });
}
function startRecording(_0xd56556) {
  const _0x288328 = _0x43663d;
  (recordedChunks = []),
    (recorder = new MediaRecorder(_0xd56556)),
    (recorder[_0x288328(0xac)] = (_0x4038dc) => {
      const _0x6113ed = _0x288328;
      recordedChunks[_0x6113ed(0x9d)](_0x4038dc['data']);
    }),
    recorder[_0x288328(0xb3)]();
}
function stopRecording() {
  const _0x42eb6f = _0x43663d;
  previewPlayer[_0x42eb6f(0xbb)]
    ['getTracks']()
    [_0x42eb6f(0xa0)]((_0x37f17d) => _0x37f17d[_0x42eb6f(0xa6)]()),
    recorder[_0x42eb6f(0xa6)]();
}
function _0x5bd5() {
  const _0x1ae1b3 = [
    '.start',
    'mediaDevices',
    '2412AavWdy',
    'video/webm',
    '.download',
    '2279020jrScRq',
    'start',
    '244BEyjIs',
    '1650267BMYxTG',
    'addEventListener',
    '228JHWICL',
    '7189plclPf',
    '8nxWMbB',
    'querySelector',
    'srcObject',
    'download',
    'click',
    'getDisplayMedia',
    'toLocaleTimeString',
    '.webm',
    '38960sYuwuz',
    'src',
    'push',
    'createObjectURL',
    '#preview',
    'forEach',
    '188799BQVLEz',
    '2NGAvVk',
    'href',
    '.play',
    'captureStream',
    'stop',
    '275rcCnkM',
    '#recording',
    '1506bNoVdY',
    '232256kagcJe',
    'then',
    'ondataavailable',
  ];
  _0x5bd5 = function () {
    return _0x1ae1b3;
  };
  return _0x5bd5();
}
function playRecording() {
  const _0x358c08 = _0x43663d,
    _0x302d74 = new Blob(recordedChunks, { type: _0x358c08(0xb0) });
  (recordingPlayer[_0x358c08(0x9c)] = URL[_0x358c08(0x9e)](_0x302d74)),
    recordingPlayer['play'](),
    (downloadButton[_0x358c08(0xa3)] = recordingPlayer['src']),
    (downloadButton[_0x358c08(0xbc)] =
      'isyslab-' + fileName[_0x358c08(0x99)]() + _0x358c08(0x9a)),
    console['log'](recordingPlayer['src']);
}
function _0x493e(_0x2387c9, _0x53cac2) {
  const _0x5bd519 = _0x5bd5();
  return (
    (_0x493e = function (_0x493ea5, _0x104a27) {
      _0x493ea5 = _0x493ea5 - 0x97;
      let _0x4a6f99 = _0x5bd519[_0x493ea5];
      return _0x4a6f99;
    }),
    _0x493e(_0x2387c9, _0x53cac2)
  );
}
recordButton[_0x43663d(0xb6)]('click', videoStart),
  stopButton[_0x43663d(0xb6)](_0x43663d(0x97), stopRecording),
  playButton['addEventListener'](_0x43663d(0x97), playRecording);
