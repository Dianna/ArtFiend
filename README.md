#ArtFiend  

##Developer instructions:  
- Clone repo to machine
- npm install
- bower install
- run nodemon index.js or node index.js
- navigate to localhost:3020  

##Summary  
On completion, a user will be able to play a Memory style game.   

####How to Play  
- Presented with a gallery of images, the user clicks an image
  - The image turns to reveal the artist's name
  - The user clicks a second image
    - If the images have the same artist, the user gets points and the images stay flipped
    - If the images have different artists, the images flip back over
  - Once a user matches every image on the screen, the game is over and the user is presented with a high score  

####Future Feature Possibilities  
- Many different eras and styles of art
- User created gallery games
- High score tracker  

##Current Tech Stack    
Front-End:
  - AngularJS  
  - Bootstrap  
  
Back-End:  
  - Node.js with Express.js  
  - MongoDB with Mongoose ORM  

Once deployed, ArtFiend will utilize AWS
