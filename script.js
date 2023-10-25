const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// loop over the fruit Array and add the matching fruit to the results Array 
	return fruit.reduce((accum, nextVal) => {
		if (nextVal.toLowerCase().includes(str.toLowerCase())) {
			accum.push(nextVal);
		}
		return results;
	}, results);
}

function searchHandler(e) {
	// handle the user input and the Array of suggestions
	showSuggestions(search(e.target.value.trim()), input.value);
	
}

function showSuggestions(results, inputVal) {
	// empty/update the suggestions list after every input from the user
	suggestions.innerHTML = "";
	// check the user input and update the suggestions list
	if (inputVal.trim()) {
		for (let ele of results) {
			const li = document.createElement("li");
			li.innerText = ele;
			suggestions.append(li);
		}
	}
}


function useSuggestion(e) {
	// check if the user click on an LI in the suggestions list. if so, update the input value
	if (e.target.tagName === "LI") {
		input.value = e.target.innerText;
	}
	// after that, empty the list of suggestions
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);