<template>
    <div>
        <div class="content">
            <div class="name">
                <h3>Ameer Izwan</h3>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* @import './assets/css/content.css'; */
    
    div{
       background-color: #000;
    }
    div.content div.name{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content h3{
        position: relative;
        right:50px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 100px;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
    }
    div{
        height:100vh;
    }
    .content{
        margin-left:150px;
    }
    .content h3{
        color:white;
    }
    /* @media screen and (min-width: 769px) {
        .content h3{
            padding-top:100px;
            padding-bottom: 50px;
        }
    } */
    @media screen and (max-width: 768px) {
        .content h3{
            font-size: 5em;
            right:70px;
            text-align: center;
        }
    }
</style>

