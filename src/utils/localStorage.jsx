
const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare Monthly Report",
          "description": "Compile data for the monthly financial report.",
          "taskDate": "2024-11-05",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Client Meeting",
          "description": "Meet with client to discuss new requirements.",
          "taskDate": "2024-10-20",
          "category": "Client Relations"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update Website",
          "description": "Implement updates on the website for improved UX.",
          "taskDate": "2024-10-15",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Draft Newsletter",
          "description": "Create draft for the November newsletter.",
          "taskDate": "2024-11-07",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Schedule Training Session",
          "description": "Organize a training session on new software.",
          "taskDate": "2024-11-09",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Prepare Presentation",
          "description": "Prepare slides for upcoming project meeting.",
          "taskDate": "2024-10-30",
          "category": "Management"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Test Application",
          "description": "Run end-to-end tests on the application.",
          "taskDate": "2024-11-08",
          "category": "QA"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Resolve Bug #321",
          "description": "Fix reported bug in user login module.",
          "taskDate": "2024-10-25",
          "category": "Development"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Database Backup",
          "description": "Create a secure backup of the database.",
          "taskDate": "2024-10-10",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Implement Feature X",
          "description": "Add requested feature to the client dashboard.",
          "taskDate": "2024-11-10",
          "category": "Development"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];


  export const  setLocalStorage= () =>{

    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const  getLocalStorage= () =>{

const employees =JSON.parse( localStorage.getItem('employees'))


const admin  =JSON.parse( localStorage.getItem('admin'))



return {employees,admin}


  }


  
  
