// 基礎版
const rInput = document.getElementById('r-input')
const gInput = document.getElementById('g-input')
const bInput = document.getElementById('b-input')
const hexInput = document.getElementById('hex-input')
const rDisplay = document.getElementById('r-display')
const gDisplay = document.getElementById('g-display')
const bDisplay = document.getElementById('b-display')
const hexDisplay = document.getElementById('hex-basic-display')
const errDisplay = document.getElementById('errow-display')

// 隨著輸入值改變 RGB 色塊顏色
rInput.addEventListener('input', () => {
  rDisplay.style.backgroundColor = `rgb(${event.target.value},0,0)`
  // 聯動挑戰版
  rRange.value = event.target.value
  rRangeDisplay.innerHTML = event.target.value
})

gInput.addEventListener('input', () => {
  gDisplay.style.backgroundColor = `rgb(0,${event.target.value},0)`
  // 聯動挑戰版
  gRange.value = event.target.value
  gRangeDisplay.innerHTML = event.target.value
})

bInput.addEventListener('input', () => {
  bDisplay.style.backgroundColor = `rgb(0,0,${event.target.value})`
  // 聯動挑戰版
  bRange.value = event.target.value
  bRangeDisplay.innerHTML = event.target.value
})

// RGB to Hex 轉換
function rgbToHex(num) {
  let hex = Number(num).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }
  return hex
}

function getFullColorHex() {
  // 例外處理：1) RGB 輸入值為空 2) RGB 輸入值不是 0~255 的數字
  if (rInput.value === '' || rInput.value < 0 || rInput.value > 255 ||
    gInput.value === '' || gInput.value < 0 || gInput.value > 255 ||
    bInput.value === '' || bInput.value < 0 || bInput.value > 255) {
    errDisplay.innerHTML = '請確認各欄位輸入的數字介於 0 ~ 255'
  } else {
    // 通過檢查，刪除 errow 訊息
    errDisplay.innerHTML = ''
    const rHex = rgbToHex(rInput.value)
    const gHex = rgbToHex(gInput.value)
    const bHex = rgbToHex(bInput.value)
    const hexColor = rHex + gHex + bHex
    // 顯示 hex 轉換值及顏色
    hexInput.value = hexColor.toUpperCase()
    hexDisplay.style.backgroundColor = `#${hexColor}`
    // 連動挑戰版背景色及顯示值
    advancedPanel.style.backgroundColor = `#${hexColor}`
    hexAdvancedPanel.innerHTML = `#${hexColor.toUpperCase()}`
  }
}

// 進階版
const advancedPanel = document.querySelector('.advanced-panel')
const rRange = document.getElementById('r-range')
const gRange = document.getElementById('g-range')
const bRange = document.getElementById('b-range')
const rRangeDisplay = document.getElementById('r-range-display')
const gRangeDisplay = document.getElementById('g-range-display')
const bRangeDisplay = document.getElementById('b-range-display')
const hexAdvancedPanel = document.getElementById('hex-advanced-panel')

rRange.addEventListener('input', () => {
  rRangeDisplay.innerHTML = event.target.value
  // 連動基本版
  rInput.value = event.target.value
  rDisplay.style.backgroundColor = `rgb(${event.target.value},0,0)`

  getFullColorHex()
})

gRange.addEventListener('input', () => {
  gRangeDisplay.innerHTML = event.target.value

  // 連動基本版
  gInput.value = event.target.value
  gDisplay.style.backgroundColor = `rgb(0,${event.target.value},0)`

  getFullColorHex()
})

bRange.addEventListener('input', () => {
  bRangeDisplay.innerHTML = event.target.value
  // 連動基本版
  bInput.value = event.target.value
  bDisplay.style.backgroundColor = `rgb(0,0,${event.target.value})`

  getFullColorHex()
})

