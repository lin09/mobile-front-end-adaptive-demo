import './index.scss'
import { pxToRemRootValue, designWidth, pageMaxWidth } from '../config/config'

const infoDoc = document.createElement('div')
infoDoc.className = 'adaptive'
document.body.prepend(infoDoc)

// 组装meta[name=viewport]的content值
const createViewportContent = (scale) => {
  return `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`
}

// 创建meta[name=viewport]
const meta = document.createElement('meta')
meta.name = 'viewport'
// 添加meta[name=viewport]head
document.head.append(meta)

// 设置页面缩放
const setViewportScaleBase = (scale, callBack) => {
  if (setViewportScaleBase.scale === scale) {
    callBack()
  } else {
    clearTimeout(setViewportScaleBase.timeout)
    setViewportScaleBase.scale = scale
    meta.content = createViewportContent(scale)
    setViewportScaleBase.timeout = setTimeout(callBack, 100)
  }
}
const initViewportScale = (callBack) => {
  setViewportScaleBase(1, callBack)
}
initViewportScale()
const setViewportScale = (callBack) => {
  initViewportScale(() => {
    if (window.devicePixelRatio > 1) {
      let scale = document.documentElement.clientWidth / designWidth
      setViewportScaleBase(scale > 1 ? 1 : scale, callBack)
    } else {
      callBack()
    }
  })
}

// 设置hmtl的字体大小
const setHtmlFontSize = () => {
  let pageWidth = document.documentElement.clientWidth
  pageWidth = pageWidth > pageMaxWidth ? pageMaxWidth : pageWidth
  // fontSize / pxToRemRootValue = pageWidth / designWidth
  let fontSize = pageWidth / designWidth * pxToRemRootValue
  // 不小于12，如chrome不支持小于12px字体
  fontSize = fontSize < 12 ? 12 : fontSize
  fontSize = fontSize + 'px'
  document.documentElement.style.fontSize = fontSize

  infoDoc.innerText = JSON.stringify({
    fontSize,
    pageWidth,
    scale: setViewportScaleBase.scale
  }).replace(/,/g, ',\r')
}

const oldResize = window.onresize
// 检查之前是否有程序监控窗口大小变化
const resizeIsFun = typeof (()=> {}) === typeof oldResize
const newResize = () => {
  window.onresize = null
  setViewportScale(() => {
    setHtmlFontSize()
    resizeIsFun && oldResize()
    window.onresize = newResize
  })
}
newResize()
