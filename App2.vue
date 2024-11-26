<script setup>
import {ref, onMounted} from 'vue'
    const name=ref('Lili Joon');
    const status=ref('pending');
    const tasks=ref(['task1', 'task2', 'task3']);
    const newTask= ref('');

    const toggleStatus=()=>{
      if(status.value==='active'){
          status.value='pending'
        }else if (status.value==='pending'){
          status.value='inactive'
        }else{
          status.value='active'
        }

    }
    const addTask=()=>{
    if(newTask.value.trim() !== ''){
      tasks.value.push(newTask.value);
      newTask.value='';
    }
  };

  const deleteTask=(index)=>{
    tasks.value.splice(index, 1);

  };
  onMounted(async()=>{
    try {
      const response= await fetch ('https://jsonplaceholder.typicode.com/todos');
      const data= await response.json();
      tasks.value=data.map((task)=>task.title);
    } catch (error) {
      console.log('error is fetching tasks');
      
    }
  })

</script>




<template>
  <h1>{{ name }}</h1>
  <p v-if="status==='active'">user is active</p>
  <p v-else-if="status==='pending'">user is pendning</p>
  <p v-else>user is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>

  </form>


  <h2>Tasks:</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  <!--   <a v-bind:href="link">click on mail</a> -->
    <a :href="link">click on mail</a>
    <br>
<!--     <button v-on:click="toggleStatus">Change Statud</button> -->
    <button @:click="toggleStatus">Change Statud</button>
 
</template>

 <style scoped>

</style>