    BUG #1 -- /login route was missing await keyword in User.authenticate

    BUG #2 -- GET /users returned all fields of a user

    BUG #3 -- DELETE /users/:username missing await keyword in User.delete

    BUG #4 -- PATCH /users/:username had requireAdmin, should not need admin to edit user profile

    BUG #5 -- PATCH /users/:username lets you change username & admin

    BUG #6 -- middleware authUser used jwt.decode() rather than jwt.verify()