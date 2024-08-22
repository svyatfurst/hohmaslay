let body = document.querySelector("body");

document.addEventListener('mousemove', function(e){
    let triangle = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    triangle.style.left = x + 'px';
    triangle.style.top = y + 'px';

    body.appendChild(triangle);

    setTimeout(() => {
        triangle.remove();
    }, 1000)
})

setTimeout(() => {
    let message = document.createElement("div")
    message.style.top = "50%"
    message.style.left = "50%"
    message.style.position = "absolute"
    message.style.transform = "translate(-50%, -50%)"
    message.style.backgroundColor = "lightgrey"
    message.style.width = "400px"
    message.style.height = "200px"
    let topbar = document.createElement("div")
    topbar.style.height = "30px"
    topbar.style.width = "390px"
    topbar.style.background = "blue"
    topbar.style.top = "5px"
    topbar.style.left = "5px"
    topbar.style.position = "absolute"
    let text = document.createElement("p")
    text.style.color = "black"
    text.textContent = "А̴̢̻̩̪̫͊Х̸̲̌̓̀̀̄͋̉̏̓̒͝͝А̵̛̥̕̚̕̕͝Х̷̢̹̩̲̬͕̳̖̫̲̱̓́͐̿͊̀͒̕͜А̷̧̙̣̮̎̿̀̇̈Х̶̢̘̻͇͙̤̊̈́̓̏̽̃̇͝А̸͈̗͙̹̩̫͚̗̝̰͇̹̃͂̓̽̍̏͊̋̒͗͋͘̚Х̸̡̨̡̰͓͇̝̝͍͙̯̬̹̈́̇̃̾̎А̶̜̄̀̈̐͆̅͘Х̷̠̯̙̗͖͉̺́А̷̢͍͚͇̮̰͉̺̳͉͎̹̫̑̍̆͗̅͐́Х̴̻͓̅А̶̹͍̦̫͖̝̰͎̣͇͖̠̙̑Х̴̡͈̮͓͉͔̪̱̣̗̳̞̂̔̐͋́̃А̵̨͇̤̺̤̼̩̻̩̭̙̒̎͒́̊͌̈́̏́͛Х̶̡̳̪̩̄̄͆͐̓͛͗̂̈́̋̽̚͘͜͝ͅА̷̧̠̭̯͉͔̖̬̫̗̭͓̰̺̽̉Х̴̨̯̯̫̹̖͖̠̭̭̩̲̉̆̒̓̊̐̊̕͜͠͠А̶̡̰͍͙͎̲̙̝̠̟̮̩̣͚̓́͌̓͊̂͑̐͋̃͑̚͝Х̴̡̭̙͇̟̼̺͙̙̘̼̟͊̀̈́͝А̶̢̢͙̫͍̼͚̙̤͓̠͚̼̓̑͆̒̓͆̋̌̌͒̿͝ͅХ̸̹̭̣̖͙̥͓̪̟̙͈̯̫͋̑͒̆̃̑̆̂͌͂͜͠А̴̻͈̟̤̝̼̼̘̣̠̣̓̿̑̊̆̂͊͂̑̍͜͝Х̸̡̤̳͖̗͈̥̈́̀̊͆̽͊̌̍͝А̴̙̽͒̏̆̃̇̏̔̒͑̈͒͜͝͝Х̶̩̼̻̳̗̠̺̻̹͂̈̅̆̄͜ͅА̷̧̟̹̩̄͆̈́͛̕Х̸̢̛͍̣͍͍̪̥̯̜̪̳̾̂̉̀̑̈̿͑͐͂̋͜͜͠͠А̴̛̘̟̤̪͖̌̽̽̈̄͊̚͝Х̵̡̜̹̦͔̠͓͚̞̎̿̇́̏̈́̊̓̄͆̿̇̈́̋"
    text.style.position = "absolute"
    text.style.fontSize = "large"
    text.style.top = "-12.5px"
    let messageText = document.createElement("p")
    messageText.style.color = "darkred"
    messageText.style.fontSize = "30px"
    messageText.textContent = "ХОЧєЦА?"
    messageText.style.position = "absolute"
    messageText.style.top = "40%"
    messageText.style.left = "50%"
    messageText.style.transform = "translate(-50%, -50%)"
    let button1 = document.createElement("button")
    button1.style.position = "absolute"
    button1.style.right = "5px"
    button1.style.width = "190px"
    button1.style.bottom = "5px"
    button1.style.height = "42px"
    button1.style.backgroundColor = "darkgreen"
    button1.style.color = "pink"
    button1.textContent = "КОНЄШНОЧЄНЬ"
    let button2 = document.createElement("button")
    button2.style.position = "absolute"
    button2.style.left = "5px"
    button2.style.width = "190px"
    button2.style.bottom = "5px"
    button2.style.height = "42px"
    button2.style.backgroundColor = "pink"
    button2.style.color = "darkgreen"
    button2.textContent = "нєхочєца((("
    button2.style.fontSize = "20px"
    button2.addEventListener("click", () => {
        let secondMessage = document.createElement("div")
        secondMessage.style.position = "absolute"
        secondMessage.style.width = "400px"
        secondMessage.style.height = "200px"
        secondMessage.style.backgroundColor = "lightgrey"
        secondMessage.style.top = "100px"
        secondMessage.style.left = "100px"
        let secondText = document.createElement("p")
        secondText.textContent = "Х̮͉̝̓ͦ̂О̨͇̙̝̾̄ͦͣ̑͛͊́_̗̬̇̊͋͜Х͡__̶̨̩̳̤̙̠̰̟̥ͯ̓̏̎̀̇͋͌ͫͤ̌ͪ͊ͥͧ̎ͯ́̓̔ͥ̕͢͠Л̖̗ͨЬ͆̂ͬІ̴̝̙̥͎̺͚̠̮̪͊̑̀́̑͛ͮ͛ͤ̈́̀̓̔͘͜͝ͅЬ̶̴̧̤͕̟̭̖ͪ̿ͫͪͯ̏͊̎̿͌ͭ͡͡͝_̩̮̀͗ͧ͟І̷̶̮̜͉̠̖̟̬̬̖̺ͬ̊͂̈́̏ͤ̏̈́ͧ͌̽̓͆̂̏ͭ́͌̚͢͞͝Ь̷̨̧̧̣͕̟̝͇͕͉ͭ͂ͥͯ̑ͪͩ͊ͭ́͟͞͞І̶̢̦͖͈̖͓̲̤̖̟́͗̑̓̿͛ͥͣ̓̄̑ͦ͌͠ С̵̦̜̲̓ͤ̓ͥ̓̓̄͢͞_̛͙̥̮̲̙̖͖͚̑ͮ͐͗̿͐ͤ̎ͨ̊͠͠Л̥̄̈А͙̙̦̲͙̀ͨ̐ͯ_̳̑́͂͌̽͋͗͝В̢̡̛͖̝̣̩͎̗̭̾ͫ̑͒̂ͤ̉̅̚͡ͅА̷̢̛̜̠̻͍̫͎̼̗̪͕͔̥̭̖ͯ̿̔ͣͦͣ͂͂̒ͧ͑ͭ̍̃͛̈͊͂͑ К̷̴ͦ̋͌͟У̸̣̠̳̭̩̿͆̒ͯ̅̾̿ͩͧ̀͑̕̚ͅ_̠͍̌ͧ͑Р̊̐_̢̘̹̲́ͬ̔͟С̴̸̠̹̞͕̫̮̲̫̤̺͈̘͔͈͙͉̆ͨ̑́ͩ͑̒ͭ̓ͫͫ͛̄̎͛͟ͅЬ̼͂ͦ͢͢К̷̴̡̢̞̳̙̦̱̭͓͍̫̆̀̇̐̂͋̃̿̆̽̒̾̌̽ͯ̈́̃̊̄ͯ̓͟͢͡͝А̨̲͉͔͓̺̙̣̭̊̀̇̔͌ͤ̃ͪ̾̅ͮ̓͝͞͠Й̸̳̹͈̞̍̓ͦͩ̍ О͓̠ͪ͛Б̗ͣͭЛ͈̼̀̇͘_̲̖̰̙̣̗ͬ̔ͭ̀͟͟ͅА̢̧̝͖̻̩̼̞̬̟̰̰̳͌̍͒̐ͦ̋̾̋̑ͥ̊̔ͬ͆̾͗͘͜͟͞͠С̜̗͐̐͌ͭ͋Т̶̢͎̰̩̳̪̲͖̈́ͮ̄̒͛͋ͧͭ̚̕̕͟_І̸̸̶̢̻̬͕̯̦̦̩ͧͯ̊̈̈́͌ͬ̀̽̕̚͢͠І̪͈̤̟̯̏̐ͨ̇̀ͦ͑І̷̳̂ͭ̆́͐̋ͬͥͦͮ̏__̋!̦̗̺͔̓͋̆̄̆̊ͩͬ͜!͓̯͚̘͎͕͉̀ͬ̏̓̋̄̇͆͘͜_̵̮͉̲̘͖̝̍̏!̴̴̨̲͚̱̬̓ͥ̂̋̿̽͊ͬ͐͘͘͢__̐͐"
        secondText.style.position = "absolute"
        secondText.style.left = "50%"
        secondText.style.top = "35%"
        secondText.style.transform = "translate(-50%, -50%)"
        secondText.style.color = "red"
        secondText.style.fontSize = "30px"
        secondMessage.appendChild(secondText)
        body.appendChild(secondMessage)
    })
    button1.addEventListener("click", () => {
        let thirdMessage = document.createElement("div")
        thirdMessage.style.position = "absolute"
        thirdMessage.style.width = "90%"
        thirdMessage.style.height = "90%"
        thirdMessage.style.backgroundColor = "grey"
        thirdMessage.style.top = "50%"
        thirdMessage.style.right = "-40%"
        thirdMessage.style.transform = "translate(-50%, -50%)"
        let thirdText = document.createElement("h1")
        thirdText.style.color = "pink"
        thirdText.style.position = "absolute"
        thirdText.style.left = "50%"
        thirdText.style.top = "50%"
        thirdText.style.transform = "translate(-50%, -50%)"
        thirdText.textContent = "З ДНЕМ НАРОДЖЕННЯ СОНЕЧКО НЯШЕЧКА АГРО КОМФОРТІК УТЮТЮТЮТЮТЮТ КОХАЮ ТЕБЕ МОЙ ПУКІ СВЕН БЕБІДЬ ГАРНЮНЬКА БУБОЧКА!!!!!!!!!!!!!!!! ІХІХХЕКДЕЗПЛЩВЛСЗВЛАЗА"
        let firstPhoto = document.createElement("img")
        firstPhoto.src = "photo1.webp"
        firstPhoto.style.height = "30%"
        firstPhoto.style.width = "30%"
        firstPhoto.style.transform = "rotate(-30deg)"
        firstPhoto.style.position = "absolute"
        let secondPhoto = document.createElement("img")
        secondPhoto.src = "photo2.webp"
        secondPhoto.style.height = "30%"
        secondPhoto.style.width = "30%"
        secondPhoto.style.right = "0%"
        secondPhoto.style.bottom = "0%"
        secondPhoto.style.transform = "rotate(-15deg)"
        secondPhoto.style.position = "absolute"
        thirdMessage.appendChild(thirdText)
        thirdMessage.appendChild(secondPhoto)
        thirdMessage.appendChild(firstPhoto)
        body.appendChild(thirdMessage)
    })
    message.appendChild(button2)
    message.appendChild(button1)
    message.appendChild(messageText)
    topbar.appendChild(text)
    message.appendChild(topbar)
    body.appendChild(message)

}, 1000)