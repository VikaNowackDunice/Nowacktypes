class Queue {
    tasks: (number | string)[]=[];
    delay: number = 10;
    constructor(delay:number, tasks:(number | string)[]){
        this.delay=delay;
        this.tasks=tasks;
    }
    runQueue():void {
        setTimeout(() => this.doJob(), this.delay);
    }
   
    doJob():void {
        const task: string | number | undefined = this.tasks.shift();
        if (task != undefined) {
            console.log(task);
        }
        this.runQueue();
    }
 
    addJob(task: string | number ):void {
        this.tasks.push(task);
    }

    run():void {
        this.runQueue();
    }

    set jobDelay(time:number) {
        this.delay = time;
    }
 }
 
 class Task{
   value:unknown;
 
   constructor(value:unknown){
        this.value = value;
   }
 }
 
 const queue = new Queue(1, []);
 const task1 = new Task('task#1');
 const task2 = new Task(1);
 
 queue.jobDelay = 1000;
 
 queue.addJob("task1");
 queue.addJob("task2");
 
 queue.run();