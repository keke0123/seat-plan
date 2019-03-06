<template>
    <div class="littleBox" :class="[choicedColor]" @click="sendData" @mouseover="changeColorMouseOver" >

    </div>
</template>

<script>
export default {
    name: 'LittleBox',
    props:{
        passIndex:Number,
        choiceColor:{
            type:String,
            default:'red',
        }
    },
    data:function(){
        return {
            //isActive:false,
            choicedColor:'white',
            // drag mouse 는 전역변수로 관리하지 않으면 소용없다.
            dragMouse:false, 
        }
    },
    methods:{
        sendData:function(){
            console.log(this.passIndex);
            this.$emit('_click', this.passIndex);
            this.changeColor();
        },
        changeColor:function(){     
            if(this.choiceColor==='red' && this.choicedColor!=='colorRed') {
                this.choicedColor='colorRed';               
            } else if(this.choiceColor==='blue' && this.choicedColor!=='colorBlue') {
                this.choicedColor='colorBlue';
            } else {
                this.choicedColor='white';
            }
            
        },
        changeColorMouseOver:function(){
            if(this.$store.state.dragMouse===true && this.choiceColor==='red'){
                this.choicedColor='colorRed';
            } else if(this.$store.state.dragMouse===true && this.choiceColor==='blue'){
                this.choicedColor='colorBlue';
            }
        }
        
    }
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
