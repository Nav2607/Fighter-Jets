class Form{
    constructor(){
       this.input = createInput("");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting1 = createElement('h2');
       //this.title = createElement('h1');
       this.intructions = createElement("h2");
       this.intructions1 = createElement("h3");
       this.intructions2 = createElement("h3");
       this.intructions3 = createElement("h3");
       this.rules = createElement("h2")
       this.rules1 = createElement("h2")
       this.rules2 = createElement("h2")
       this.rules3 = createElement("h2")
       this.rules4 = createElement("h2")
       this.rules5 = createElement("h2")
       this.reset = createButton("Reset");
       this.name = createElement("h3");

    }
    hide() {
        this.greeting.hide();
        this.greeting1.hide();
        this.button.hide();
        this.input.hide();
        //this.title.hide();
        this.intructions.hide();
        this.intructions1.hide();
        this.intructions2.hide();
        this.intructions3.hide();
        this.rules.hide();
        this.rules1.hide();
        this.rules2.hide();
        this.rules3.hide();
        this.rules4.hide();
        this.rules5.hide();
        this.name.hide();
        
    }
    display() {
        //this.title.html("Fighter Jets");
        //this.title.position(300, 0);
        //this.title.style('font-size', '70px');
        //this.title.style('color', 'skyblue');
        this.input.position(400,350);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'white');
        this.button.position(400,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('font-size','20px')
        this.button.style('color',"white");
        this.button.style('background', rgb(131,175,80));
        this.intructions.html("Game Controls: "); 
        this.intructions.position(700,220); 
        this.intructions1.html("→ Up arrow to move"); 
        this.intructions1.position(670,250); //Change position later
        this.intructions2.html("→ Left and Right arrow to turn"); 
        this.intructions2.position(670,280); //Change position later
        this.intructions3.html("→ Space bar to shoot"); 
        this.intructions3.position(670,310); //Change position later
        this.rules.html("Fighter Jets is a multiplayer game" )
        this.rules.position(20,150)
        this.rules1.html("in which you take control of a plane.")
        this.rules1.position(20,180)
        this.rules2.html("Join the game with a friend and take")
        this.rules2.position(20,210)
        this.rules3.html("part in jet plane battle! Your goal is to")
        this.rules3.position(20,240)
        this.rules4.html("destory the other player's jet and claim")
        this.rules4.position(20,270)
        this.rules5.html("victory!")
        this.rules5.position(20,300)
        this.reset.position(1100,75);
        this.name.html("Name:")
        this.name.position(340,330);
        image(sky_img, 0, 0, 1000, 600);
        image(FighterJets_img, 270,-150 );

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            if(player.index === 1){
                player.x = 50;
            }

            if(player.index === 2){
                player.x = 950;
            }
            player.update();

            player.updateCount(playerCount);
            this.name.hide();
            this.greeting.html("Waiting for other")
            this.greeting1.html("player to join...")
            this.greeting.position(250,350);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
            this.greeting1.html("player to join...")
            this.greeting1.position(250,400);
            this.greeting1.style('color', 'white');
            this.greeting1.style('font-size', '50px');
        

        });
        this.reset.mousePressed(() => {
            database.ref('/').update({
                players:null,
                gameState:0,
                playerCount:0
            })
            game.update(0);
        });

    }
}