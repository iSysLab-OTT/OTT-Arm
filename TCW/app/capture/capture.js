const _0x4aea14 = _0x40f2;
(function (_0x3291a0, _0x15b89c) {
  const _0x53931c = _0x40f2,
    _0x22c775 = _0x3291a0();
  while (!![]) {
    try {
      const _0x2b2a22 =
        parseInt(_0x53931c(0x161)) / 0x1 +
        parseInt(_0x53931c(0x149)) / 0x2 +
        -parseInt(_0x53931c(0x150)) / 0x3 +
        (parseInt(_0x53931c(0x155)) / 0x4) *
          (parseInt(_0x53931c(0x168)) / 0x5) +
        (parseInt(_0x53931c(0x165)) / 0x6) *
          (parseInt(_0x53931c(0x153)) / 0x7) +
        -parseInt(_0x53931c(0x14a)) / 0x8 +
        (-parseInt(_0x53931c(0x14d)) / 0x9) *
          (parseInt(_0x53931c(0x152)) / 0xa);
      if (_0x2b2a22 === _0x15b89c) break;
      else _0x22c775['push'](_0x22c775['shift']());
    } catch (_0x4cc248) {
      _0x22c775['push'](_0x22c775['shift']());
    }
  }
})(_0x2add, 0x8c145);
const recordButton = document[_0x4aea14(0x16a)](_0x4aea14(0x16b)),
  stopButton = document[_0x4aea14(0x16a)](_0x4aea14(0x163)),
  playButton = document[_0x4aea14(0x16a)](_0x4aea14(0x15d)),
  downloadButton = document[_0x4aea14(0x16a)](_0x4aea14(0x15f)),
  previewPlayer = document[_0x4aea14(0x16a)]('#preview'),
  recordingPlayer = document[_0x4aea14(0x16a)]('#recording');
let recorder,
  recordedChunks,
  fileName = new Date();
function videoStart() {
  const _0x191b36 = _0x4aea14;
  navigator['mediaDevices']
    ['getDisplayMedia']({ video: !![], audio: !![] })
    [_0x191b36(0x148)]((_0x5b7c49) => {
      const _0x893ac = _0x191b36;
      (previewPlayer['srcObject'] = _0x5b7c49),
        startRecording(previewPlayer[_0x893ac(0x14e)]());
    });
}
function startRecording(_0x5d0db0) {
  const _0x424395 = _0x4aea14;
  (recordedChunks = []),
    (recorder = new MediaRecorder(_0x5d0db0)),
    (recorder['ondataavailable'] = (_0x517f61) => {
      const _0x3c3d8e = _0x40f2;
      recordedChunks[_0x3c3d8e(0x157)](_0x517f61[_0x3c3d8e(0x162)]);
    }),
    recorder[_0x424395(0x160)](),
    (document[_0x424395(0x15e)](_0x424395(0x159))[_0x424395(0x156)] =
      window[_0x424395(0x16c)][_0x424395(0x14c)]),
    (document[_0x424395(0x15e)](_0x424395(0x154))['textContent'] =
      window[_0x424395(0x15a)][_0x424395(0x154)]),
    (document[_0x424395(0x15e)](_0x424395(0x151))['textContent'] =
      window[_0x424395(0x15a)][_0x424395(0x15b)]);
}
function stopRecording() {
  const _0x15dea5 = _0x4aea14;
  previewPlayer[_0x15dea5(0x16f)]
    [_0x15dea5(0x147)]()
    [_0x15dea5(0x167)]((_0x5c1199) => _0x5c1199[_0x15dea5(0x164)]()),
    recorder[_0x15dea5(0x164)]();
}
function playRecording() {
  const _0x532469 = _0x4aea14,
    _0x2d8824 = new Blob(recordedChunks, { type: _0x532469(0x166) });
  (recordingPlayer[_0x532469(0x16e)] = URL[_0x532469(0x170)](_0x2d8824)),
    (downloadButton['href'] = recordingPlayer[_0x532469(0x16e)]),
    (downloadButton[_0x532469(0x15c)] =
      _0x532469(0x169) + fileName['toLocaleTimeString']() + '.webm'),
    console[_0x532469(0x16d)](recordingPlayer[_0x532469(0x16e)]);
}
recordButton[_0x4aea14(0x14b)](_0x4aea14(0x14f), videoStart),
  stopButton['addEventListener']('click', stopRecording),
  playButton[_0x4aea14(0x14b)](_0x4aea14(0x14f), playRecording);
function _0x2add() {
  const _0x1e55bc = [
    '806730iZsZBr',
    'systemLanguage',
    '55010NLrUak',
    '7grCpix',
    'userAgent',
    '4PRXSFG',
    'textContent',
    'push',
    'innerHTML',
    'webSrc',
    'navigator',
    'language',
    'download',
    '.play',
    'getElementById',
    '.download',
    'start',
    '506787uqDpRc',
    'data',
    '.stop',
    'stop',
    '3216018npihJm',
    'video/webm',
    'forEach',
    '3341545lHGMqf',
    'isyslab-',
    'querySelector',
    '.start',
    'location',
    'log',
    'src',
    'srcObject',
    'createObjectURL',
    'getTracks',
    'then',
    '164962DVyryH',
    '697984bXDEXq',
    'addEventListener',
    'href',
    '1413DRuXNV',
    'captureStream',
    'click',
  ];
  _0x2add = function () {
    return _0x1e55bc;
  };
  return _0x2add();
}
function _0x40f2(_0x35f3d1, _0x3a6fe3) {
  const _0x2added = _0x2add();
  return (
    (_0x40f2 = function (_0x40f294, _0x59b61d) {
      _0x40f294 = _0x40f294 - 0x147;
      let _0x3ea68c = _0x2added[_0x40f294];
      return _0x3ea68c;
    }),
    _0x40f2(_0x35f3d1, _0x3a6fe3)
  );
}
function getIP(_0x360880) {
  const _0x1e4ec6 = _0x4aea14;
  document[_0x1e4ec6(0x15e)]('myip')[_0x1e4ec6(0x158)] = _0x360880['ip'];
}
