let bandNames = ['The Beatles', 'Led Zeppelin', 'Radiohead', 'Pink Floyd', 'The Who'];

// Remove articles from band names
for (let i = 0; i < bandNames.length; i++) {
  bandNames[i] = bandNames[i].replace(/^(the|an|a)\s+/i, '');
}

// Sort the band names in lexicographic order
bandNames.sort();

// Create an unordered list and add each band name as a list item
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');
for (let i = 0; i < bandNames.length; i++) {
  const li = document.createElement('li');
  li.textContent = bandNames[i];
  ul.appendChild(li);
}

// Add the unordered list to the document body
document.body.appendChild(ul);
