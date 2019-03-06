<template>
    <div class="testCss">
        <h4 class="title">test</h4>
        
        <ul>
            <li class="list-parent">
                <input id="ckBox" type="checkbox">
                <a href="javascript:">one</a>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </li>
            <li class="list_test">
                two
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name:'TestPage',
}
</script>

<!-- 
    - 설치
    npm install sass-loader node-sass
    - 적용
    아래와 같다
-->
<style scoped lang="scss" src="./style.scss"/>
