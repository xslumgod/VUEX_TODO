<!-- src/components/List.vue -->
<template>
    <div id="mDiv" class="wrapper">
        <div class="todolist__content">
            <div class="input-button-container">
                <input type="text" placeholder="Ваша новая задача" v-model="newTodo" @keyup.enter="addToDo">
                <v-btn color="primary"
                       elevation="2"
                       rounded
                       @click="addToDo" class="addBtn"><i class="fas fa-plus"></i></v-btn>
            </div>

            <div class="todo__list">
                <ul id="mUl">
                    <draggable v-model="todos" :element="'ul'">
                        <li  v-for="(todo, index) of todos" :key="index" @click="compl(index)" :class="{ 'checked': todo.completed }">
                            {{ todo.text }} <span @click="delTodo(index)" class="delBtn"><i class="fas fa-trash"></i></span>
                        </li>
                    </draggable>
                </ul>
            </div>

            <div class="v-data-footer">
                <span id="count">Выполнено: {{ todoCompl }} из {{ count }}</span>
                <!--                <button @click="" >Clear all</button>-->
            </div>

        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',

    created() {
        this.$store.dispatch('loadTasksLS');
    },

    computed: {
        ...mapState(['newTodo', 'todos']),
        ...mapGetters(['count', 'todoCompl']),
        newTodo: {
            get() {
                return this.$store.state.newTodo;
            },
            set(value) {
                this.$store.commit('SET_NEW_TODO', value);
            },
        },
    },
    methods: {
        ...mapActions(['addToDo', 'delTodo', 'compl']),
        addToDo() {
            this.$store.dispatch('addToDo');
        },

    },
    components: {
        draggable,
    },
};
</script>

<style>

.wrapper{
    margin: 120px auto;
    max-width: 400px;
    width: 100%;
    background: white;
    border-radius: 5px;
    padding: 25px;
}

.todolist__content {

}

/* Добавляем стили для контейнера с инпутом и кнопкой */
.input-button-container {
    display: flex;
    height: 40px;
    width: 100%;
    margin: 20px 0;
}

.input-button-container input {
    outline: none;
    width: 85%;
    height: 100%;
    border: 2px solid #7e7d7d;
    font-size: 17px;
    border-radius: 10px;
    padding-left: 15px;

}

.input-button-container button{
    width: 70px;
    height: 100%;
    border: none;
    outline: none;
    background: black;
    color: white;
    font-size: 22px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 5px;
}


.todo__list {
    color: black;
}

.todo__list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo__list li {
    list-style: none;
    height: 45px;
    line-height: 45px;
    position: relative;
    background: #f2f2f2;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 0 15px;
}

.todo__list li span{
    position: absolute;
    right: 0px;
    color: white;
    width: 45px;
    text-align: center;
    background: darkred;
    border-radius: 0 3px 3px 0;
}

.todo__list li.checked {
    background: #0bb67b;
    color: #ffffff;
    text-decoration: line-through;
}

.todo__list li.checked::before {
}

</style>


<!--newElement(){-->
<!--const li = document.createElement('li');-->
<!--const iptVal = document.getElementById('mInput').value;-->


<!--if (iptVal === "") {-->
<!--alert('Заполните данное поле');-->
<!--}-->
<!--else {-->

<!--const span = document.createElement('span');-->
<!--const i = document.createElement('i');-->
<!--i.classList.add('fas', 'fa-trash');-->
<!--span.appendChild(i);-->


<!--const t = document.createTextNode(iptVal);-->
<!--li.appendChild(t);-->
<!--li.appendChild(span);-->

<!--span.addEventListener('click', ()=> {-->
<!--li.remove();-->
<!--});-->

<!--li.addEventListener('click', (ev) => {-->
<!--if (ev.target.tagName === 'LI') {-->
<!--ev.target.classList.toggle('checked');-->
<!--}-->
<!--});-->

<!--document.getElementById('mUl').appendChild(li);-->

<!--}-->
<!--document.getElementById('mInput').value='';-->
<!--},-->