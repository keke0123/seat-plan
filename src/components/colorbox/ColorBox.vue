<template>
    <div class="color-box" 
        :class="[{colorRed:color==='red'}, {colorBlue:color==='blue'}]"
        @click="sendData"
    ></div>
</template>

<script>
export default {
    name:'ColorBox',
    props:{
        color:{
            type:String,
            default:'red'
        }
    },
    data:function(){
        return {

        }
    },
    methods:{
        sendData:function(){
            console.log(this.color);
            this.$emit('sendColor', this.color);
        }
    }
}
</script>

<style scoped lang="scss" src="./style.scss" />
