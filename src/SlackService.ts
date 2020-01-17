import axios from 'axios'
let url: string = ''

const init = (webhookURL: string) => {
  url = webhookURL
}

/**
 * Post a message to slack
 * @param {object} data
 * @example postToSlack({channel:'@user',text:'hello'})
 */
const postToSlack = ({ text }: { text: string }) => {
  const data = {
    text: text
  }
  return axios(url, {
    data: data,
    // required for sending msg by frontend
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}
export default {
  init,
  postToSlack
}
