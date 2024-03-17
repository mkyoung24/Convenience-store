<template>
        <header>
            <div class="navbar navbar-default">
                <div class="navbar-header">
                    <h1><router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'my-header',
    data() {
        return {
            sitename: "편의점 쇼핑"
        }
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.router-link-exact-active {
  color: black;
}

h1 {
    text-align: center;
}
</style>