//DOM
const recordButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const playButton = document.querySelector('.play');
const downloadButton = document.querySelector('.download');

const previewPlayer = document.querySelector('#preview');
const recordingPlayer = document.querySelector('#recording');

let recorder;
let recordedChunks;
let fileName = new Date();

//functions
function videoStart() {
  navigator.mediaDevices
    .getDisplayMedia({ video: true, audio: true })
    .then((stream) => {
      previewPlayer.srcObject = stream;
      startRecording(previewPlayer.captureStream());
    });
}

function startRecording(stream) {
  recordedChunks = [];
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    recordedChunks.push(e.data);
  };
  recorder.start();

  //User Info
  document.getElementById('webSrc').textContent = window.location.href;
  // 현 접속 URL
  document.getElementById('userAgent').textContent = window.navigator.userAgent;
  // 현 접속 브라우저 정보
  document.getElementById('systemLanguage').textContent =
    window.navigator.language;
  // 현 접속 언어 정보
}

function stopRecording() {
  previewPlayer.srcObject.getTracks().forEach((track) => track.stop());
  recorder.stop();
}

function playRecording() {
  const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
  recordingPlayer.src = URL.createObjectURL(recordedBlob);
  //recordingPlayer.play();
  downloadButton.href = recordingPlayer.src;
  //시간, 분, 초 단위 파일 명 지정
  downloadButton.download = `isyslab-${fileName.toLocaleTimeString()}.webm`;
  console.log(recordingPlayer.src);
}

//event
recordButton.addEventListener('click', videoStart);
stopButton.addEventListener('click', stopRecording);
playButton.addEventListener('click', playRecording);

// getIp
function getIP(json) {
  document.getElementById('myip').innerHTML = json.ip;
}
