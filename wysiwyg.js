// Create an array of objects that represents famous people (see structure below).

let famousPeople = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "President",
	  name: "John Adams",
	  bio: "Adams was an American patriot who served as the second President of the United States (1797–1801) and the first Vice President (1789–97). He was a lawyer, diplomat, statesman, political theorist, and a founding father.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Official_Presidential_portrait_of_John_Adams_%28by_John_Trumbull%2C_circa_1792%29.jpg",
	  lifespan: {
	    birth: 1735,
	    death: 1826
	  }
	},
	{
	  title: "Emperor",
	  name: "Julius Caesar",
	  bio: "Julius Caesar was a Roman politician, general, and notable author of Latin prose. He played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/C%C3%A9sar_%2813667960455%29.jpg",
	  lifespan: {
	    birth: "100 BC",
	    death: "44 BC"
	  }
	},
	{
	  title: "Queen",
	  name: "Cleopatra Philopator",
	  bio: "Cleopatra was the last active ruler of Ptolemaic Egypt, briefly survived as pharaoh by her son Caesarion. After her reign, Egypt became a province of the recently established Roman Empire.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
	  lifespan: {
	    birth: "69 BC",
	    death: "30 BC"
	  }
	}
]
const container = document.getElementById("container"),
	textInput = document.getElementById("text-input");


function addDOMElements(personObj) {
	let personBox = document.createElement('div');
	personBox.setAttribute("id", `${personObj.name}`)
	personBox.className = "person-box";
	personBox.innerHTML = `<header>${personObj.name} : ${personObj.title}</header>
						   <section><p>${personObj.bio}</p> <img src="${personObj.image}" height="300"> </section>
						   <footer>Lived from <date>${personObj.lifespan.birth} to ${personObj.lifespan.death}</date?></footer>`
	container.appendChild(personBox);
	personBox.addEventListener("click", function() {
		let highlighted = document.querySelectorAll(".highlight");
		for(let i = 0; i < highlighted.length; i++) {
			highlighted[i].classList.remove("highlight");
		}
		personBox.classList.add("highlight");
		textInput.focus();
	})
}


famousPeople.forEach(addDOMElements);

textInput.addEventListener("keyup", function() {
	let changeBioFor = document.getElementsByClassName("highlight");
	console.log(changeBioFor);
	if (changeBioFor.length !== 0) {
		console.log("here we go")
		let elementToAlter = changeBioFor[0].getElementsByTagName("p")[0];
		if (event.key === 'Enter') {
			textInput.value = "";
		} else {
		elementToAlter.innerHTML += event.key;
		}
	}

})

// Create a DOM element for each of the objects inside the container.
// Style your person elements however you like.


// For every even numbered element, have a light yellow background.


// For every odd numbered element, have a light blue background.


// Each element's DOM structure should be as in the requirements


// When you click on one of the person elements, a dotted border should appear around it.


// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.


// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.


// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.