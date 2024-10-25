const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", file: "to_kill_a_mockingbird.pdf" },
    { title: "1984", author: "George Orwell", file: "1984.pdf" },
    { title: "Pride and Prejudice", author: "Jane Austen", file: "pride_and_prejudice.pdf" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", file: "the_great_gatsby.pdf" },
    { title: "The Little Black Fish", author: "Samad Behrangi", file: "The-little-black-fish.pdf" },
    { title: "Great Expectations", author: "Charles Dickens", file: "great-expectations.pdf" },
    { title: "Animal Farm", author: "George Orwell", file: "orwellanimalfarm.pdf" },
    { title: "the Pelican Brief", author: "John Grisham", file: "The-Pelican-Brief.pdf" },
    { title: "The Catcher in the Rye", author: "JD Salinger", file: "The_Catcher_in_the_Rye.pdf" }

];

const libraryList = document.getElementById('library-list');

books.forEach(book => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = `${book.title} by ${book.author}`;
    link.href = `pdfs/${book.file}`;
    link.download = book.file;
    listItem.appendChild(link);
    libraryList.appendChild(listItem);
});
