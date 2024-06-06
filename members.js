const members = [
    { name: "Natalya scarlett", booksRead: 1 },
    { name: "Gladstone Rose", booksRead: 2 },
    { name: "Daisy Rose", booksRead: 2 },
    { name: "Nadia Rose", booksRead: 0 },
    { name: "Jeaneth Rose", booksRead: 0 },
    { name: "Alaina Rose", booksRead: 0 },
    { name: "Imani Rainford", booksRead: 0 },
    { name: "Arielle Johnson", booksRead: 0 },
    { name: "Ramon Rose", booksRead: 1 }
];

const membersList = document.getElementById('members-list');
const loginSection = document.getElementById('login-section');
const membersSection = document.getElementById('members-section');
const loginError = document.getElementById('login-error');
const password = "bookclub2024"; // Set your password here

function login() {
    const inputPassword = document.getElementById('password').value;
    if (inputPassword === password) {
        loginSection.style.display = 'none';
        membersSection.style.display = 'block';
        displayMembers();
    } else {
        loginError.style.display = 'block';
    }
}

function displayMembers() {
    membersList.innerHTML = ''; // Clear the current list
    members.forEach(member => {
        const listItem = document.createElement('li');
        listItem.textContent = `${member.name} - Books Read: ${member.booksRead}`;
        membersList.appendChild(listItem);
    });
}

function addMember() {
    const newMemberName = document.getElementById('new-member').value;
    if (newMemberName) {
        members.push({ name: newMemberName, booksRead: 0 }); // New members start with 0 books read
        displayMembers();
        document.getElementById('new-member').value = ''; // Clear the input field
    }
}