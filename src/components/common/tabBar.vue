<template>
<footer>
 <slot></slot>
</footer>
</template>

<script>

export default {
name:'tabBar',
}
</script>

<style lang="scss" scoped>
 footer {
        width: 100%;
        height: 5rem;
        display: flex;
        flex-flow: row wrap;
        align-content: center;
        position: fixed;
        bottom: 0;
        box-shadow: 0 -1px 1px 1px #f0efef;
        text-align: center;
        background: #f3f3f3;
    }
    
</style>