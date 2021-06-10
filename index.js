function clickQuestion (event) {
    
    let selectDiv = document.getElementsByClassName('category');
    let classLength = selectDiv.length;
    alert("There are "+classLength+" category classes in the html code");
    let randomCategory = Math.floor(Math.random() * selectDiv.length);
    console.log(randomCategory, selectDiv[randomCategory]);
    console.log(randomCategory);
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
  }
  
  let questionButton = document.getElementById('question');
  questionButton.addEventListener('click', clickQuestion); // left clicks
  
  