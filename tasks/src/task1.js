const tasks = [
  {
    id: 234,
    title: 'Create user registration API',
    timeSpent: 4,
    category: 'Backend',
    type: 'task',
  },

  {
    id: 235,
    title: 'Create user registration UI',
    timeSpent: 8,
    category: 'Frontend',
    type: 'task',
  },

  {
    id: 237,
    title: 'User sign-in via Google UI',
    timeSpent: 3.5,
    category: 'Frontend',
    type: 'task',
  },

  {
    id: 238,
    title: 'User sign-in via Google API',
    timeSpent: 5,
    category: 'Backend',
    type: 'task',
  },

  {
    id: 241,
    title: 'Fix account linking',
    timeSpent: 5,
    category: 'Backend',
    type: 'bug',
  },

  {
    id: 250,
    title: 'Fix wrong time created on new record',
    timeSpent: 1,
    category: 'Backend',
    type: 'bug',
  },

  {
    id: 262,
    title: 'Fix sign-in failed messages',
    timeSpent: 2,
    category: 'Frontend',
    type: 'bug',
  },
];

const totalTimeOnFrontend = tasks.reduce((acc, task) => {
  if (task.category === 'Frontend') {
    return acc + task.timeSpent;
  }
  return acc;
}, 0);

const totalTimeOnBugs = tasks.reduce((acc, task) => {
  if (task.type === 'bug') {
    return acc + task.timeSpent;
  }
  return acc;
}, 0);

const UITasksCount = tasks.filter((task) => task.title.includes('UI')).length;

const tasksCategories = tasks.reduce((acc, task) => {
  if (acc[task.category]) {
    acc[task.category]++;
  } else {
    acc[task.category] = 1;
  }
  return acc;
}, {});

const longTasks = tasks
  .filter((task) => task.timeSpent > 4)
  .map((task) => {
    return {
      title: task.title,
      category: task.category,
    };
  });

console.log('Time spent on FrontEnd:', totalTimeOnFrontend);
console.log('Time spent on Bugs:', totalTimeOnBugs);
console.log('UI tasks number:', UITasksCount);
console.log('Tasks Categories:', tasksCategories);
console.log('Long tasks:', longTasks);
