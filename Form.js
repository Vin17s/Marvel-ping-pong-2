class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("START")
        this.greeting=createElement("h2")
        this.title=createElement("h1")
    }
    display(){
        this.title.html("MARVEL SUPERHERO PING PONG")
        this.title.position(displayWidth/2-50,10)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello "+player.name+"! Please wait for other player to join")
        this.greeting.position(displayWidth/2-70,displayHeight/2)
    })
    

    }
    hide(){
        this.button.hide()
        this.input.hide()
        this.greeting.hide()

    }

}