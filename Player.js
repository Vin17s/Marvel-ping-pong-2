class Player{
    constructor(){
        this.index=null
        this.name=null
        this.y=null
    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            y:this.y
            
        })
    }
    static readPlayerInfo(){
        database.ref("players").on("value", function(data){
            allPlayers = data.val()
        })

        
    }
}