import './index.scss'
import { pxToRemRootValue } from '../config/config'

const createViewportContent = (scale) => {
  return `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, user-scalable=no`
}

const meta = document.createElement('meta')
meta.name = 'viewport'
// 设备视图缩放为1
meta.content = createViewportContent(1)
document.head.append(meta)
// 设计图宽750放到设备视图缩放比例
meta.content = createViewportContent(document.documentElement.clientWidth / 750)

// 设置hmtl的字体大小
const setHtmlFontSize = () => {
  let fontSize = document.documentElement.clientWidth / 750 * pxToRemRootValue
  // 不小于12，如chrome不支持小于12px字体
  fontSize = fontSize < 12 ? 12 : fontSize
  document.documentElement.style.fontSize = fontSize + 'px'
}

const resize = window.onresize
// 检查之前是否有程序监控窗口大小变化
const resizeIsFun = typeof (()=> {}) === typeof resize
// 重新设置监控窗口大小变化
window.onresize = () => {
  resizeIsFun && resize()
  setHtmlFontSize()
}

setHtmlFontSize()
