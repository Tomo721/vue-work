<template>
  <div style="margin-top:100px; display:flex;">
    <div class="wrapper"
        @mouseover="(e)=>onMouseOverMethod()"
        @mouseleave="(e)=>onMouseLeaveMethod()"
    >
        <div class="counter" ref="countWrap">
            <div class="counter__text" ref="countText">{{counter}}</div>
        </div>

        <svg class="progress-ring" width="60px" height="60px">
            <circle class="progress-ring__circle" stroke="#fff" stroke-width="2" cx="30" cy="30" r="26" fill="transparent"></circle>

        </svg> 
    </div>

    <div class="wrapper"
        @mouseover="(e)=>onMouseOverMethod()"
        @mouseleave="(e)=>onMouseLeaveMethod()"
    >
        <div class="counter" ref="countWrap">
            <div class="counter__text" ref="countText">{{counter}}</div>
        </div>

        <svg class="progress-ring" width="60px" height="60px">
            <circle class="progress-ring__circle" stroke="#fff" stroke-width="2" cx="30" cy="30" r="26" fill="transparent"></circle>

        </svg> 
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            counter: 3,
            intervalId:''
        }
    },
    methods: {
        
        onMouseOverMethod() {
            const wrapper = this.$refs.countWrap
            wrapper.classList.add('counter-active')
            
            let counterNumb = 0;
            this.intervalId = setInterval(() => {
                    counterNumb += 1;
                    this.counter = 3 - counterNumb
                if (counterNumb === 3) {
                    clearInterval(this.intervalId)
                    counterNumb = 0
                    wrapper.classList.remove('counter-active')
                } 
            }, 1000);
        },
        
        onMouseLeaveMethod() {
            const wrapper = this.$refs.countWrap
            wrapper.classList.remove('counter-active')
     
            clearInterval(this.intervalId)
            this.counter = 3
        },
    }
}
</script>

<style lang="scss">
.wrapper {
    margin: 0 auto;
    width: 100%;
    height: 300px;
    max-width: 300px;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.counter {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.2s;

    &.counter-active {
        opacity: 1;
    }

    &__text {
        color: #fff;
    }
}

</style>
