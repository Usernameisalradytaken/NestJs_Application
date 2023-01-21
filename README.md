# Nest JS Task

- Ability to create multiple tasks with properties(id, description, due_date, assignee, status, etc.)
- Ability to add a team with multiple team members
- Ability to assign a task to a team member
- Ability to load all tasks with the assignee
- Ability to change the status/properties of task

### Structure

How to run application

> Please add mongoDB url in app.module.ts file and add jwt_secret in auth.controller.ts and jwt.middleware.ts. As i was having trouble working with working with ConfigModule and ConfigService

```
npm install
npm run start:dev

```

API documents - https://documenter.getpostman.com/view/23688165/2s8ZDYYNGL

- Data is added in MongoDB. using nestjs Mongoose client.

3 tables

status -
InActive
Active
Completed
Cancelled

tasks - (id, description, task_name, created_by(team_member.id), due_date, assignee(team_member.id)(by default assignee will be himself), status(by default - InActive), etc.)
team_member - (id, username, email, password, team_id(team.id))
team - ( id, team_name, team_member[])

Routes

- `auth/signup` - for create new user, this returns token
- `auth/login` - for login existing user and return new token

#### Protected Routes

- `task/createTask` - for creating new task
- `task/assignTask` - for assign task to assignee
- `task/allTask` - for getting all task by assignee
- `task/changeStatus` - for changing existing task status

#### Protected Routes

- `team/addTeam` - for creating new Team. Team_name is primary key
- `team/getTeam` - for getting Team and its team members
- `team/addMember` - for creating add team member to existing team.
