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
    "name": "Hanna"
  }
```
        
    ### Response


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

-   **POST - /login**

    -   Deve ser capaz de gerar um token jwt válido.

        | Dados de Envio:    |
        | ------------------ |
        | Body: Formato Json |

        ```json
        {
            "email": "fabio@kenzie.com.br",
            "password": "naomaisjunior"
        }
        ```

        | Resposta do servidor: |
        | --------------------- |
        | Body: Formato Json    |
        | Status code: _200 OK_ |

        ```json
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }
        ```

### **Rotas autenticadas**

_Todas as rotas a seguir devem ser autenticas._

No **_header_**(cabeçalho) da requisição deve ser enviado um **_Bearer &lt;token_**&gt;.

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

    -   Rota de listagem de usuários;
    -   Deve retornar todos os usuários da aplicação.

        | Resposta do servidor: |
        | --------------------- |
        | Body: Formato Json    |
        | Status code: _200 OK_ |

        ```json
        [
            {
                "id": 1,
                "name": "Fabio",
                "email": "fabio@kenzie.com.br",
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

    -   Rota de perfil. Deve retornar todos os dados dos usuário logado.

        | Resposta do servidor: |
        | --------------------- |
        | Body: Formato Json    |
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

    -   Rota de atualização de usuário. Deve ser capaz de atualizar tanto um quanto todos os dados de um usuário.
    -   O exemplo abaixo foi feito na rota **_/users/1_**.

        | Dados de Envio:    |
        | ------------------ |
        | Body: Formato Json |

        ```json
        {
            "name": "Fabio Junior"
        }
        ```

        | Resposta do servidor: |
        | --------------------- |
        | Body: Formato Json    |
        | Status code: _200 OK_ |

        ```json
        {
            "id": 1,
            "name": "Fabio Junior",
            "email": "fabio@kenzie.com.br",
            "admin": true,
            "active": true
        }
        ```

-   **DELETE - /users/:id**

    -   Deve ser capaz de fazer **soft delete** em um usuário;

            O soft delete é a ação de modificar alguma propriedade de uma tabela que indica que o dado está ativo ou não, nesse caso é a propriedade active da tabela de users, na qual é possível identificar que o mesmo foi "marcado" como deletado, mas suas informações ainda irão permanecer no banco. Sendo uma modificação em vez deleção.

    -   O exemplo abaixo foi feito na rota /users/2
        | Resposta do servidor: |
        | --------------------- |
        | Body: Nenhum |
        | Status code: _204 NO CONTENT_ |

        ```json
          // nenhum dado deve ser retorando
        ```

-   **PUT - /users/:id/recover**

    -   Deve ser capaz de **_recuperar_** o usuário que foi **_desativado_**.
    -   O **_active_** deve ser alterado para **_true_**.
    -   O exemplo abaixo foi feito na rota **_/users/2/recover_**.

        | Resposta do servidor: |
        | --------------------- |
        | Body: Formato Json    |
        | Status code: _200 OK_ |

        ```json
        {
            "id": 2,
            "name": "Cauan",
            "email": "cauan@kenzie.com.br",
            "admin": false,
            "active": true
        }
        ```
