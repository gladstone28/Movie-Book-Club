const password = "completed"; // Set your password here
const qaList = [
    { question: "Who is the narrator of the story?", answer: "Scout Finch (Jean Louise Finch) is the narrator of the story." },
    { question: "What is the setting of the novel?", answer: "The novel is set in the fictional town of Maycomb, Alabama, during the 1930s." },
    { question: "Who are Scout's closest family members?", answer: "Scout's closest family members are her father, Atticus Finch, and her brother, Jem Finch." },
    { question: "Who is Dill, and how does he fit into the story?", answer: "Dill (Charles Baker Harris) is a friend of Scout and Jem who visits Maycomb every summer to stay with his aunt, Miss Rachel." },
    { question: "What do Scout and Jem find in the knothole of the Radley tree?", answer: "Scout and Jem find various items in the knothole, including chewing gum, pennies, and small carved soap figures." },
    { question: "Why does Atticus Finch decide to defend Tom Robinson?", answer: "Atticus Finch believes in justice and equality and feels it is his moral duty to defend Tom Robinson, an innocent black man accused of raping a white woman." },
    { question: "What is the significance of the rabid dog, Tim Johnson, in the story?", answer: "The rabid dog represents the madness and racism in Maycomb. Atticus shooting the dog symbolizes his role in confronting these issues in the community." },
    { question: "How does Jem react to Mrs. Dubose's comments about Atticus?", answer: "Jem is furious and destroys Mrs. Dubose's camellia bushes in a fit of rage." },
    { question: "What does Atticus reveal about Mrs. Dubose after her death?", answer: "Atticus reveals that Mrs. Dubose was battling a morphine addiction and wanted to overcome it before she died. He uses her struggle to teach Jem and Scout about true courage." },
    { question: "How does Scout's perspective on Boo Radley begin to change?", answer: "Scout begins to see Boo Radley as a kind and protective figure rather than a frightening recluse, especially after he leaves gifts for them and mends Jem's pants." },
    { question: "What is Calpurnia's role in the Finch household?", answer: "Calpurnia is the Finch family's cook and caretaker. She also serves as a mother figure to Scout and Jem, teaching them important life lessons." },
    { question: "How does the black community react to Atticus defending Tom Robinson?", answer: "The black community respects and appreciates Atticus for his efforts to defend Tom Robinson, despite the racial prejudices of the time." },
    { question: "What is significant about Atticus' cross-examination of Mayella Ewell?", answer: "Atticus' cross-examination reveals inconsistencies in Mayella's testimony and suggests that her father, Bob Ewell, may have been the one who harmed her." },
    { question: "Why is it important that Tom Robinson's left arm is crippled?", answer: "Tom Robinson's crippled left arm makes it highly unlikely that he could have inflicted the injuries on Mayella, casting doubt on her accusation." },
    { question: "How does the trial of Tom Robinson expose the racial tensions in Maycomb?", answer: "The trial exposes deep-seated racism in Maycomb, as many white townspeople are willing to convict an innocent black man based solely on the color of his skin." },
    { question: "What is the outcome of Tom Robinson's trial?", answer: "Despite compelling evidence of his innocence, Tom Robinson is found guilty of raping Mayella Ewell." },
    { question: "How does the verdict affect Jem and Scout?", answer: "The verdict deeply disillusions Jem and Scout, shaking their faith in justice and exposing them to the harsh realities of racism." },
    { question: "What happens to Tom Robinson after the trial?", answer: "Tom Robinson is shot and killed while trying to escape from prison." },
    { question: "How does Bob Ewell react to the outcome of the trial?", answer: "Bob Ewell feels humiliated by the trial and seeks revenge against Atticus and others involved in the case." },
    { question: "What lesson does Scout learn from her conversation with Atticus about the trial?", answer: "Scout learns about the importance of empathy and understanding, realizing the complexity of human behavior and prejudice." },
    { question: "What happens to Scout and Jem on their way home from the Halloween pageant?", answer: "Scout and Jem are attacked by Bob Ewell, but Boo Radley intervenes and saves them." },
    { question: "How does Scout finally meet Boo Radley?", answer: "Scout meets Boo Radley when he rescues her and Jem from Bob Ewell's attack." },
    { question: "What is the sheriff's decision regarding Bob Ewell's death?", answer: "The sheriff, Heck Tate, decides to report that Bob Ewell fell on his own knife to protect Boo Radley from public scrutiny and legal consequences." },
    { question: "How does Scout's understanding of Boo Radley change by the end of the novel?", answer: "Scout understands Boo Radley as a kind and protective person, recognizing his humanity and seeing the world from his perspective." },
    { question: "What does Atticus mean when he says, 'Most people are nice, Scout, when you finally see them'?", answer: "Atticus means that people often have goodness in them, and understanding their circumstances and perspectives can reveal their true nature." }
];

const qaContainer = document.getElementById('qa-container');
const loginSection = document.getElementById('login-section');
const qaSection = document.getElementById('qa-section');
const loginError = document.getElementById('login-error');

function login() {
    const inputPassword = document.getElementById('password').value;
    if (inputPassword === password) {
        loginSection.style.display = 'none';
        qaSection.style.display = 'block';
        displayQA();
    } else {
        loginError.style.display = 'block';
    }
}

function displayQA() {
    qaList.forEach(item => {
        const questionElement = document.createElement('h3');
        questionElement.textContent = item.question;

        const answerElement = document.createElement('p');
        answerElement.textContent = item.answer;

        qaContainer.appendChild(questionElement);
        qaContainer.appendChild(answerElement);
    });
}