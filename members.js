const members = [
    { name: "Natalya" },
    { name: "Andre" },
    { name: "Gladstone" },
    { name: "Jeaneth" },
    { name: "Nadia" },
    { name: "Alaina" }
];

const membersList = document.getElementById('members-list');

members.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = member.name;
    membersList.appendChild(listItem);
});