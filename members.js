const password = "bookclub2024"; // Set your password here
const members = [
    { name: "Natalya Scarlett" },
    { name: "Andre Scarlett" },
    { name: "Gladstone Rose" },
    { name: "Jeaneth Rose" },
    { name: "Nadia Rose" },
    { name: "Alaina Rose" }
];


const membersList = document.getElementById('members-list');
const loginSection = document.getElementById('login-section');
const membersSection = document.getElementById('members-section');
const loginError = document.getElementById('login-error');

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
        listItem.textContent = member.name;
        membersList.appendChild(listItem);
    });
}

function addMember() {
    const newMemberName = document.getElementById('new-member').value;
    if (newMemberName) {
        members.push({ name: newMemberName });
        displayMembers();
        document.getElementById('new-member').value = ''; // Clear the input field
    }
}