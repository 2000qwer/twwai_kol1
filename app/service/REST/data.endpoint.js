const users = [
    {
        id: 1,
        name: 'Michal',
        email:  'test@gmail.com',
        password: 'passwordtest'
    },
    {
        id: 2,
        name: 'Arek',
        email: 'test2@gmail.com',
        password: 'passwordtest2'
    }
  
];




const usersDataBase = (router) => {

    const users_len = users.length

    /* All users */
    router.get('/api/users', async (request, response, next) => {
        console.log(users_len)
        response.status(200).send({users: users});

    });


    /* find user by his id*/
    router.get('/api/user/:id', async (request, response, next) => {
        console.log()
        /*
        posts.push(request.body.newPost);
        */

        var id = request.params.id;

        response.status(200).send({users: users[id]});
    });

    /* add next user */
    router.put('/api/user_add', async (request, response, next) => {
        
        const body = request.body;

        users[users_len] = body

        response.status(200).send({users: users[users_len]});
    });

    /*
    router.get('/api/user_add', async (request, response, next) => {
        posts.push(request.body.newUser);

        const id = request.params.id;

        response.status(200).send({users: users[id]});
    });
    */


    
    
   /* add user on chosen id */
    router.post('/api/user/:id', async (request, response, next) => {

        const id = request.params.id - 1;
        const body = request.body;

        users[id] = body
        response.status(200).send({users: users[id]});
    });

    
};


export default usersDataBase;

