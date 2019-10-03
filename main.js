var div1 = document.createElement('div')
div1.className = 'demo'
document.body.appendChild(div1)

var dragging = false

var lastX
var lastY
div1.onmousedown = function (e) {
    console.log('原始位置')
    console.log(e.clientX, e.clientY)
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}

document.body.onmousemove = function (e) {
    if (dragging === true) {
        console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }

}

document.onmouseup = function () {
    dragging = false

}

