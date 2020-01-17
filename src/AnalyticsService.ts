import Amplitude from 'amplitude'
let amplitude = new Amplitude('randomKeyForInit')

const init = (key: string) => {
  amplitude = new Amplitude(key)
}

const track = (data: any) => {
  amplitude.track(data)
}
export default {
  init,
  track
}
