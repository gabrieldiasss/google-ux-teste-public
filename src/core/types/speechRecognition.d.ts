interface Window {
  webkitSpeechRecognition: any;
}
declare global {
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
