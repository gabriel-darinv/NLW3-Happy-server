import Image from '../models/Image'

import getIP from '../errors/getIP'

const ipList = getIP()



export default {
  render(image: Image) {
    const ip = ipList['Wi-Fi'][0]

    return {
      id: image.id,
      url: `http://${ip}:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}