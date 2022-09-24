console.log("does it work?");

let myObj = [
    {
        Name: "Rohan",
        age: 18,
        city: "bangalore",
        language: "python",
        framework: "django",
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        Name: "Mohan",
        age: 23,
        city: "UP",
        language: "Html",
        framework: "https",
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
    },
    {
        Name: "Lofer",
        age: 43,
        city: "gurgaon",
        language: "python",
        framework: "Flask",
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        Name: "Abdul",
        age: 21,
        city: "kolkotta",
        language: "css",
        framework: "tailwind",
        image: 'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
        Name: "Ervin",
        age: 19,
        city: "Bangalore",
        language: "Javascript",
        framework: "React",
        image: 'https://randomuser.me/api/portraits/men/42.jpg'
    }
];

function cvIterator(profiles) {
    let nextIdx = 0;
    return {
        next: function () {
            return nextIdx < profiles.length ?
                { value: profiles[nextIdx++], done: false } :
                { done: true };
            }
        }
    }
    let candidate = cvIterator(myObj);
    
    
    
nextCV();
let next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    let currentCandidate = candidate.next().value; 
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (!currentCandidate) {
        alert("End Of Applications!!!");
        window.location.reload();
    }
    else {
        
        image.innerHTML= `<img src="${currentCandidate.image}" alt="" />`
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentCandidate.Name}</li>
        <li class="list-group-item">Age: ${currentCandidate.age}</li>
        <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
        <li class="list-group-item">Primarily works on : ${currentCandidate.language}</li>
        <li class="list-group-item">Skills: ${currentCandidate.framework}</li>
        
        </ul>`;
    }
}