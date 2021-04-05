/**
 * 一款免费的开源性能监控SDK
 *
 * @remarks
 * 目前能够完成监控的指标包含FCP等
 *
 * @packageDocumentation
 */

import data from './Base'

/**
 *
 *
 * @param {string} msg
 */
const init = (msg: string) => {
  console.log(msg, 'msg')
}

init(data)

export {init, data}
