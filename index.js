function clickQuestion (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
  }
  
  let questionButton = document.getElementById('question');
  questionButton.addEventListener('click', clickQuestion); // left clicks
  
  