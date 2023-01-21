export interface Task {
  id?: String;
  description: String;
  task_name: String;
  created_by: String;
  due_date: String;
  assignee: String;
  status: String;
  created_date: String;
}

//id, description, task_name, created_by(team_member.id),
//  due_date, assignee(team_member.id)(by default assignee will be himself), status(by default - InActive)
