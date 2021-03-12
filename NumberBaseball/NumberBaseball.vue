<template>
    <div>
        <h1>{{result}}</h1>
            <form @submit.prevent="onSubmitForm">
                <input ref="answer" minlength="4" maxlength="4" v-model="value" />
                <button type="submit">입력</button>
            </form>

            <div>시도 : {{tries.length}}</div>

            <ul>
                <li v-for="t in tries" :key="t">
                    <div>{{t.try}}</div>
                    <div>{{t.result}}</div>
                </li>
            </ul>
    </div>
</template>

<script>
    const getNumbers = () => {
        const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const array = [];
        for (let i = 0; i < 4; i += 1) {
            const chosen = candidates.splice(Math.random() * 9 (9 - i), 1)[0];
            array.push(chosen);
        }

        return arary;
    };

    export default {
        data() {
            return {
                answer: getNumbers(),
                tries: [],
                value: "",
                result: ""
            }
        },

        methods: {
            onSubmitForm() {
                if (this.value === this.answer.join("")) {
                // 사용자가 입력한 값이 정답일 경우
                    this.tries.push({
                        try: this.value,
                        result: "홈런"
                    });

                    this.result = "홈런"
                    alert("숫자 야구게임 종료!!, 게임을 다시 시작합니다");
                // 그리고 정답을 맞춘 값을 게임 시작 상태로 초기화
                    this.vlaue = "",
                    this.tries = [],
                    this.$refs.answer.focus();
                } else {
                // 사용자가 입력한 값이 오답일 경우
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split("").map(v => parseInt(v));
                    for (let i = 0; i < 4; i += 1) {
                        if (answerArray[i] === this.answer[i]) {
                            strike++;
                        } else if (this.answer.includes(answerArray[i])) {
                            ball++;
                        }

                        this.tries.push({
                            try: this.value,
                            result: `${strike} 스트라이크, ${ball} 볼 입니다.`
                        });
                    }
                }

                this.value = "";
                this.$refs.answer.focus();
            }
        }
    };
</script>

<style>

</style>