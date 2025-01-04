
const employees = [
    {
        "id": "e001",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Complete the project report",
                "date": "2025-01-05",
                "category": "Work",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 2",
                "description": "Prepare presentation slides",
                "date": "2025-01-07",
                "category": "Work",
                "active": false,
                "completed": false,
                "failed": true,
                "new": true
            },
            {
                "title": "Task 3",
                "description": "Client meeting",
                "date": "2025-01-09",
                "category": "Meeting",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            }
        ]
    },
    {
        "id": "e002",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Organize team-building activity",
                "date": "2025-01-05",
                "category": "Event",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 2",
                "description": "Update website content",
                "date": "2025-01-07",
                "category": "Work",
                "active": false,
                "completed": true,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 3",
                "description": "Prepare financial report",
                "date": "2025-01-10",
                "category": "Finance",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            }
        ]
    },
    {
        "id": "e003",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Conduct market research",
                "date": "2025-01-05",
                "category": "Research",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 2",
                "description": "Review legal documents",
                "date": "2025-01-08",
                "category": "Legal",
                "active": false,
                "completed": true,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 3",
                "description": "Write blog post",
                "date": "2025-01-10",
                "category": "Content",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            }
        ]
    },
    {
        "id": "e004",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Design new logo",
                "date": "2025-01-06",
                "category": "Design",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 2",
                "description": "Create social media strategy",
                "date": "2025-01-08",
                "category": "Marketing",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 3",
                "description": "Update product catalog",
                "date": "2025-01-11",
                "category": "Product",
                "active": false,
                "completed": true,
                "failed": false,
                "new": true
            }
        ]
    },
    {
        "id": "e005",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Improve customer service process",
                "date": "2025-01-06",
                "category": "Service",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 2",
                "description": "Train new employees",
                "date": "2025-01-09",
                "category": "Training",
                "active": true,
                "completed": false,
                "failed": false,
                "new": true
            },
            {
                "title": "Task 3",
                "description": "Perform code review",
                "date": "2025-01-11",
                "category": "Development",
                "active": false,
                "completed": true,
                "failed": false,
                "new": true
            }
        ]
    }
];

const admin = [
    {
        "id": "a001",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
   const employees =  JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   console.log(employees)
   console.log(admin)
}


