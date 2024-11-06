
const workshops = [
    {
        title: "AI & Machine Learning",
        description: "An introductory workshop on AI and machine learning applications.",
        date: "2024-12-15",
        time: "10:00 AM - 4:00 PM",
        duration: "6 hours",
        location: "Room 204, Engineering Building",
        organizer: "Dr. John Doe",
        contact: "johndoe@example.com",
        deadline: "2024-12-10"
    },
    {
        title: "Web Development Bootcamp",
        description: "A hands-on workshop to build modern web applications.",
        date: "2024-11-20",
        time: "9:00 AM - 5:00 PM",
        duration: "8 hours",
        location: "Main Auditorium",
        organizer: "Ms. Jane Smith",
        contact: "janesmith@example.com",
        deadline: "2024-11-15"
    },
    {
        title: "Cybersecurity Essentials",
        description: "Learn about cybersecurity principles and best practices.",
        date: "2024-11-25",
        time: "11:00 AM - 3:00 PM",
        duration: "4 hours",
        location: "Room 101, Tech Building",
        organizer: "Mr. Alan Turing",
        contact: "at@example.com",
        deadline: "2024-11-20"
    },
    {
        title: "Data Science Crash Course",
        description: "Understand data science fundamentals and basic Python for data analysis.",
        date: "2024-12-05",
        time: "10:00 AM - 5:00 PM",
        duration: "7 hours",
        location: "Lab 3, Data Science Center",
        organizer: "Dr. Sarah Lee",
        contact: "sarahlee@example.com",
        deadline: "2024-11-30"
    },
    {
        title: "Internet of Things (IoT) Workshop",
        description: "Build and deploy IoT devices and learn about their applications.",
        date: "2024-12-10",
        time: "1:00 PM - 6:00 PM",
        duration: "5 hours",
        location: "Room 210, Innovation Lab",
        organizer: "Mr. Robert Lang",
        contact: "rlang@example.com",
        deadline: "2024-12-05"
    },
    {
        title: "Blockchain and Cryptocurrency Basics",
        description: "A beginner’s guide to blockchain technology and cryptocurrency concepts.",
        date: "2024-11-18",
        time: "2:00 PM - 6:00 PM",
        duration: "4 hours",
        location: "Lecture Hall B",
        organizer: "Ms. Clara Coin",
        contact: "ccoin@example.com",
        deadline: "2024-11-12"
    }
];


document.addEventListener('DOMContentLoaded', () => {
    loadWorkshops();
});


function loadWorkshops() {
    const workshopList = document.getElementById('workshop-list');
    workshops.forEach(workshop => {
        const workshopElement = document.createElement('div');
        workshopElement.classList.add('workshop');

       
        const titleElement = document.createElement('h2');
        titleElement.textContent = workshop.title;
        workshopElement.appendChild(titleElement);

        
        const descElement = document.createElement('p');
        descElement.textContent = workshop.description;
        workshopElement.appendChild(descElement);

       
        const detailsElement = document.createElement('div');
        detailsElement.classList.add('details');
        detailsElement.innerHTML = `
            <p><strong>Date:</strong> ${workshop.date}</p>
            <p><strong>Time:</strong> ${workshop.time}</p>
            <p><strong>Duration:</strong> ${workshop.duration}</p>
        `;
        workshopElement.appendChild(detailsElement);

       
        const moreDetailsElement = document.createElement('div');
        moreDetailsElement.classList.add('more-details');
        moreDetailsElement.style.display = 'none';
        moreDetailsElement.innerHTML = `
            <p><strong>Location:</strong> ${workshop.location}</p>
            <p><strong>Organizer:</strong> ${workshop.organizer}</p>
            <p><strong>Contact:</strong> <a href="mailto:${workshop.contact}">${workshop.contact}</a></p>
            <p><strong>Registration Deadline:</strong> ${workshop.deadline}</p>
        `;
        workshopElement.appendChild(moreDetailsElement);

      
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Show More';
        toggleButton.classList.add('toggle-button');
        toggleButton.onclick = () => {
            if (moreDetailsElement.style.display === 'none') {
                moreDetailsElement.style.display = 'block';
                toggleButton.textContent = 'Show Less';
            } else {
                moreDetailsElement.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
        };
        workshopElement.appendChild(toggleButton);

      
        workshopList.appendChild(workshopElement);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadWorkshops();
});


function toggleDetails(button, details) {
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show More';
    }
}


function loadWorkshops() {
    const workshopList = document.getElementById('workshop-list');

    workshops.forEach(workshop => {
       
        const workshopElement = document.createElement('div');
        workshopElement.classList.add('workshop');

        
        const titleElement = document.createElement('h2');
        titleElement.textContent = workshop.title;
        workshopElement.appendChild(titleElement);

        const descElement = document.createElement('p');
        descElement.textContent = workshop.description;
        workshopElement.appendChild(descElement);

        const primaryDetailsElement = document.createElement('div');
        primaryDetailsElement.innerHTML = `
            <p><strong>Date:</strong> ${workshop.date}</p>
            <p><strong>Time:</strong> ${workshop.time}</p>
            <p><strong>Duration:</strong> ${workshop.duration}</p>
        `;
        workshopElement.appendChild(primaryDetailsElement);

        
        const extraDetailsElement = document.createElement('div');
        extraDetailsElement.classList.add('extra-details');
        extraDetailsElement.innerHTML = `
            <p><strong>Location:</strong> ${workshop.location}</p>
            <p><strong>Organizer:</strong> ${workshop.organizer}</p>
            <p><strong>Contact:</strong> <a href="mailto:${workshop.contact}">${workshop.contact}</a></p>
            <p><strong>Registration Deadline:</strong> ${workshop.deadline}</p>
        `;
        workshopElement.appendChild(extraDetailsElement);

      
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-details-btn');
        toggleButton.textContent = 'Show More';
        toggleButton.addEventListener('click', () => toggleDetails(toggleButton, extraDetailsElement));
        workshopElement.appendChild(toggleButton);

        
        workshopList.appendChild(workshopElement);
    });
}
