<template>
    <v-app>
        <v-main>
            <router-view>
                <HelloWorld />
            </router-view>
        </v-main>
    </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'App',
    components: {
        HelloWorld,
    }
};
</script>

<style>
/* Добавляем линейный градиент из черного в красный */
body {
    background: linear-gradient(to right, black, red);
}
</style>