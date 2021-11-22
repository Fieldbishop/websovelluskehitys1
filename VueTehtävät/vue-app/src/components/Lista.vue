<template>
  <h1>Todo:</h1>
  <div id="tasks">
    <input type="text" id="input" placeholder="What needs doing?" v-model="newTodo">
    <button id="nappi" @click="addToDo">Add task</button>
    <table>
      <thead>
      <tr>
        <th>
          TASKS:
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <td>
          {{todo.title}}
        </td>
        <td class="remove-item">
          <button class="nappi2" @click="removeToDo(index)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Lista",
  data() {
    return {
      newTodo:"",
      idForTodo: 3,
      todos: [
        {
          'id':1,
          'title': 'item 1',
        },
        {
          'id':1,
          'title': 'item 2',
        }
      ]
    }
  },

  methods:{
    addToDo(){
      if(this.newTodo.trim().length === 0){
        return
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo
      })
      this.newTodo = ""
      this.idForTodo++
    },

    removeToDo(i){
      this.todos.splice(i,1)
    }

  }
}
</script>

<style scoped>
#tasks{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.nappi2{
  margin-left: 100px;
}
.todo-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>