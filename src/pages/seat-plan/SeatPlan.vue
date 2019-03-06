<template>
    <div class="container" @mousedown="dragOn" @mouseup="dragEnd">
        <h3 class="title">Seat-Plan Page</h3>
        <div class="select">
            <ColorBox @sendColor="changeColor"></ColorBox>
            <ColorBox @sendColor="changeColor" :color="`blue`"></ColorBox>
            <div class="center-box">
                <Button @click="testClick">click</Button>
            </div>
        </div>
        <div class="box">
            <LittleBox v-for="(box, index) in tBox" :passIndex="index" :choiceColor="color" @_click="findNum(index)" :key="`littleBox-${index}`" />
        </div>
    </div>
</template>

<!-- 
    길이 760px 중에서 px 느낌의 상자 76개 세로는 시험삼아서 5줄정도만 
    component 로 작은 px 박스 만들기
    object : {
        // 넘겨줄 값
        attr-css : {
            color, 
            length:760px/n-box,
        }
        reset,

    }
-->
<script>
import LittleBox from '@/components/littlebox/LittleBox';
import ColorBox from '@/components/colorbox/ColorBox';
export default {
    components:{
        LittleBox,
        ColorBox,
    },
    props:{
        boxNum:{
            type:Number,
            default: 1575,
        }
    },
    data: function(){
        //console.log(this.$store.state.dragMouse);
        let tempArray = new Array(this.boxNum).fill(0);
        return {
            //boxNum:1575,
            tBox:tempArray,
            testBtn:false,
            num:1,
            color:'red',
            dragMouse:false,
        }
    },
    computed:{
        //tBox:new Array(1575).fill(0),
    },
    methods:{
        findNum:function(n){
            if(this.tBox[n]==0){
                this.tBox[n]=1;
            } else {
                this.tBox[n]=0;
            }
        },
        testClick: function(){
            if(this.testBtn==false){
                this.testBtn=true;
            } else{
                this.testBtn=false;
            }
        },
        changeColor: function(color){
            this.color=color;
            console.log('color='+color);
        },
        dragOn:function(e){
            console.log(e);
            this.$store.commit('dragOnMouse');
            console.log(this.$store.state.dragMouse);
            if(!this.dragMouse){
                console.log('dragOn');
            }
            this.dragMouse=true;
        },
        dragEnd:function(){
            this.$store.commit('dragEndMouse');
            console.log(this.$store.state.dragMouse);
            if(this.dragMouse){
                console.log('dragOut');
            }
            this.dragMouse=false;
        },
        checkMouse:function(e){
            console.log(e);
        }
    }
}
</script>

<style scoped lang="scss" src="./style.scss"/>