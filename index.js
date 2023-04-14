// Create a new task by putting its info in an object
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    // Marks task as completed
    markCompleted: function() {
      this.complete = true;
    },
    // Displays the status of the task
    logState: function() {
      console.log(`${this.title} has${this.complete ? "": " not"} been completed`);
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
