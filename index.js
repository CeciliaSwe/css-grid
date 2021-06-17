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

    if (randomCategory === 0) {
        alert("Picked 1");
            lightCat1();
    } else if (randomCategory === 1) {
            alert("Picked 2");
            lightCat2();
    } else alert(` It randomised ${randomCategory}! It is not defined yet!`) 
}
  
  let questionButton = document.getElementById('question');
  questionButton.addEventListener('click', clickQuestion); // left clicks

function lightCat1() {
    document.getElementById("c-1").style.backgroundColor = "orange";
}
  