import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newTodo: '',
        todos: [],
    },
    mutations: {
        SET_NEW_TODO(state, todo) {
            state.newTodo = todo;
        },
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        },
        DELETE_TODO(state, index) {
            state.todos.splice(index, 1);
        },
        TOGGLE_TODO(state, index) {
            state.todos[index].completed = !state.todos[index].completed;
        },
        SET_TODOS(state, todos) {
            state.todos = todos;
        },
    },
    actions: {
        saveTaskLS({ state }) {
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        loadTasksLS({commit}) {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                commit('SET_TODOS', JSON.parse(storedTodos));
            }
        },
        addToDo({ commit, dispatch, state }) {
            if (state.newTodo.trim() === '') {
                alert('Заполните поле');
            } else {
                const newTodo = {
                    text: state.newTodo.trim(),
                    completed: false,
                };
                commit('ADD_TODO', newTodo);
                commit('SET_NEW_TODO', '');
                dispatch('saveTaskLS');
            }
        },
        delTodo({ commit, dispatch }, index) {
            commit('DELETE_TODO', index);
            dispatch('saveTaskLS');
        },
        compl({ commit, dispatch }, index) {
            commit('TOGGLE_TODO', index);
            dispatch('saveTaskLS');
        },
    },
    getters: {
        count(state) {
            return state.todos.length;
        },
        todoCompl(state) {
            return state.todos.filter(todo => todo.completed).length;
        },
    },
});