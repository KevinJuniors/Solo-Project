<template>
    <div>
        <div id="screen">{{}}</div>
        
        <div>
            <div>평균 시간 : {{}}</div>
            <button v-on:click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '시작 영역을 클릭하여 반응 속도 테스트를 시작하세요.'
            }
        },

        methods: {
            onReset() {
                
            }
        }
    };
</script>

<style>

</style>