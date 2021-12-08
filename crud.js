const list = document.querySelector('ul');
const name = document.querySelector('input.name_books');
const author = document.querySelector('input.author');
const genre = document.querySelector('input.genre');
const date = document.querySelector('input.date');
const button = document.querySelector('button.save');

button.onclick = function(){
	let bookName = name.value;
	let bookAuthor = author.value;
	let bookGenre = genre.value;
	let bookDate = date.value;

	const listItem = document.createElement('li');
	const listItems = document.createElement('li');
	const listName = document.createElement('span');
	const listAuthor = document.createElement('span');
	const listGenre = document.createElement('span');
	const listDate = document.createElement('span');
	const listDelete = document.createElement('button');
	const listUpdate = document.createElement('button');

	listItem.appendChild(listName);
	listName.textContent = bookName;

	listItem.appendChild(listAuthor);
	listAuthor.textContent = bookAuthor;

	listItem.appendChild(listGenre);
	listGenre.textContent = bookGenre;

	listItem.appendChild(listDate);
	listDate.textContent = bookDate;

	listItem.appendChild(listUpdate);
	listUpdate.textContent = 'Update';

	listItem.appendChild(listDelete);
	listDelete.textContent = 'Delete';
	list.appendChild(listItem);

	name.value = '';
	author.value = '';
	genre.value = '';
	date.value = '';

	listDelete.onclick = function(e){
		list.removeChild(listItem);
	}

	listUpdate.onclick = function(a){
		list.removeChild(listItem);

		const newnames = document.createElement('input');
		const newauthor = document.createElement('input');
		const newgenre = document.createElement('input');
		const newdate = document.createElement('input');
		const save = document.createElement('button');

		newnames.className = "newname";
		newauthor.className = "newauthor";
		newgenre.className = "newgenre";
		newdate.className = "newdate";

		listItems.appendChild(newnames);
		listItems.appendChild(newauthor);
		listItems.appendChild(newgenre);
		listItems.appendChild(newdate);
		listItems.appendChild(save);

		list.appendChild(listItems);
		save.textContent = 'Save';


		newnames.value = bookName;
		newauthor.value = bookAuthor;
		newgenre.value = bookGenre;
		newdate.value = bookDate;


		save.onclick = function(g){
			const newnames = document.querySelector('input.newname');
			const newauthors = document.querySelector('input.newauthor');
			const newgenres = document.querySelector('input.newgenre');
			const newdates = document.querySelector('input.newdate');

			let bookName = newnames.value;
			let bookAuthor = newauthors.value;
			let bookGenre = newgenres.value;
			let bookDate = newdates.value;

			list.removeChild(listItems);


			listItem.appendChild(listName);
			listName.textContent = bookName;

			listItem.appendChild(listAuthor);
			listAuthor.textContent = bookAuthor;

			listItem.appendChild(listGenre);
			listGenre.textContent = bookGenre;

			listItem.appendChild(listDate);
			listDate.textContent = bookDate;

			listItem.appendChild(listUpdate);
			listUpdate.textContent = 'Update';

			listItem.appendChild(listDelete);
			listDelete.textContent = 'Delete';
			list.appendChild(listItem);
	}
	}
}
