# User Management System - CRUD

This project is a user management system that provides CRUD (Create, Read, Update, Delete) functionality for managing users and their access levels. Certain resources are accessible exclusively to admins or logged-in users, ensuring a secure environment.

To enhance security, user passwords are encrypted using the Bcryptjs library, and tokens are generated using jsonwebtoken for user authentication and authorization.

The following technologies were utilized to build this API:

- Node.js
- Express
- TypeScript
- jsonwebtoken
- bcryptjs
- zod
- PostgreSQL

# Endpoints

| Methd | Endpoint | Description |
| - | - | - |
| POST | /users | Register a new user |
| POST | /login | Log in a user and generate a token |
| GET  | /users | List all users in the application |
| GET  | /users/profile | List the logged-in user | 
| PATCH | /users/:id | Update a user's information | 
| DELETE | /users/:id | Perform a soft delete on a user | 
| PUT | users/:id/recover | Reactivate a user | 


## **Examples of Request**

### **Not authenticated routes **

The following routes don't need a token to be accessed.

-   **POST /users**

    - Route to register a user. The admin key is optional, if not sent it will be set to false.

- **Request**
    
  ```json
  {
    "name": "Hanna",
    "email": "hanna@email.com",
    "password": "P@ssword123",
    "admin": true
  }
  ```
        
- **Response**

  | Status code: _201 CREATED_ |

  ```json
  {
      "id": 1,
      "name": "Hanna",
      "email": "hanna@email.com.br",
      "admin": true,
      "active": true
  }
  ```

-**POST - /login**

   - It generates a jwt valid token
    
- **Request**

  ```json
  {
      "email": "hanna@email.com.br",
      "password": "P@ssword123"
  }
  ```
 - **Response**

 | Status code: _200 OK_ |

    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### **Authenticated routes**

In the **_header_**(header) of the request, a **_Bearer &lt;token_**&gt; must be sent.

| Header                |
| --------------------- |
| Option: Authorization |
| Type: Bearer          |
| Value: JWT token      |

  ```json
  {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI..."
  }
  ```

-   **GET - /users**

    -   List all users. Just admins have access to it;

        | Server response: |
        | --------------------- |
        | Body: Json Format    |
        | Status code: _200 OK_ |

    ```json
    [
        {
            "id": 1,
            "name": "hanna",
            "email": "hanna@email.com.br",
            "admin": true,
            "active": true
        },
        {
            "id": 2,
            "name": "Cauan",
            "email": "cauan@kenzie.com.br",
            "admin": false,
            "active": false
        }
    ]
    ```

-   **GET - /users/profile**

    -   Profile route. It should return all logged user data.

        | Server response: |
        | --------------------- |
        | Body: Json Format    |
        | Status code: _200 OK_ |

    ```json
    {
        "id": 1,
        "name": "Fabio",
        "email": "fabio@kenzie.com.br",
        "admin": true,
        "active": true
    }
    ```

-   **PATCH - /users/:id**

    -   Route to update users. Admins should be able to update other user's information.

    ```json
    {
        "name": "Hanna Boppe"
    }
    ```

      | Server response: |
      | --------------------- |
      | Body: Formato Json    |
      | Status code: _200 OK_ |

    ```json
    {
        "id": 1,
        "name": "Hanna Boppe",
        "email": "hanna@email.com.br",
        "admin": true,
        "active": true
    }
        ```

-   **DELETE - /users/:id**

    -   Route to **soft delete** an user;

        | Server response: |
        | --------------------- |
        | Body: None |
        | Status code: _204 NO CONTENT_ |


-   **PUT - /users/:id/recover**

    -   Route to recover a deactivated user

        | Server response: |
        | --------------------- |
        | Body: Json Format    |
        | Status code: _200 OK_ |

        ```json
        {
            "id": 2,
            "name": "Cauan",
            "email": "cauan@email.com.br",
            "admin": false,
            "active": true
        }
        ```
