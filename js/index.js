var buttonContainer = document.getElementById('buttons-container')

var buttons = document.getElementsByTagName('span')

var readOut = document.getElementById('screen')

var operator = document.getElementsByClassName('operator')

document.addEventListener('DOMContentLoaded',function(){
  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      if(buttons[i].textContent === 'C'){
        readOut.textContent = ''
        return
      }
      else if(buttons[i].textContent === '='){
        let art = readOut.textContent.match(/(\d+)([+\-\x\÷])(\d+)/)

        readOut.textContent = calc[art[2]](parseInt(art[1]), parseInt(art[3]))
        return
      }

      else readOut.append(event.target.textContent)
    })
  }
})
