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

    questionValue();
    lightCategory(randomCategory);   
}
  
  let questionButton = document.getElementById('question');
  questionButton.addEventListener('click', clickQuestion); // left clicks

function questionValue() {
    let values = [10, 20, 50, 100];
    let randomValue = Math.floor(Math.random() * values.length);
    console.log(values[randomValue]);
    alert(`The value of the question is ${values[randomValue]}.`);
    document.getElementById("value").innerHTML = values[randomValue];
}

function lightCategory(randomCategory) {
    if (randomCategory === 0) {
        alert("Picked 1");
        document.getElementById("c-1").style.backgroundColor = "orange";
    } else if (randomCategory === 1) {
        alert("Picked 2");
        document.getElementById("c-2").style.backgroundColor = "orange";
    } else if (randomCategory === 2) {
        alert("Picked 3");
        document.getElementById("c-3").style.backgroundColor = "orange";
    } else if (randomCategory === 3) {
        alert("Picked 4");
        document.getElementById("c-4").style.backgroundColor = "orange";
    };
    
}
  