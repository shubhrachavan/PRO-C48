class Homepage{
    consructor(){
        this.startButton = createButton("Start");
        this.titleImg = createImg("Images/Title.png", "game title");
        this.title2Img = createImg("Images/MarioTitle.png", "game title 2");
    }

    setElementsPosition(){
        this.titleImg.position(120,50);
        this.title2Img.position(100,50);
        this.startButton.position(width/2, height/2);
    }

    setElementsStyle(){
        this.titleImg.class("gameTitle")
        this.title2Img.class("gameTitle2")
        this.startButton.class("customButton")
    }

    hide(){
        this.titleImg.hide();
        this.title2Img.hide();
        this.startButton.hide();
    }
    
    handleMousePressed(){
        this.startButton.MousePressed(()=>{
            this.titleImg.hide()
            this.title2Img.hide()
            this.startButton.hide()
        })
    }

    display(){
        this.setElementsPosition.display()
        this.setElementsStyle.display()
        this.handleMousePressed.display()
    }
}
