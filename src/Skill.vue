<template>
    <div>
        <div class="content">
            <h3><fa icon="code"></fa>&nbsp;Skillset</h3>
            <span v-for="language in language" :key="language">
                <br>
                <h4>{{language.name}}</h4>
                <div class="row">
                    <div class="col-md-3" v-for="frameworks in language.frameworks" :key="frameworks">
                        {{frameworks.name}} <img style="width: 40px; height: 40px;" :src="'/src/assets/img/'+frameworks.icon+'.png'">
                        <div class="progress">
                            <div class="progress-bar bg-success"
                                :style="'width:'+frameworks.score+'%'"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            language:[
                {
                    name: "PHP Frameworks",
                    frameworks:[
                        {
                            name: "Laravel",
                            score: 75,
                            icon:"laravel"
                        },
                        {
                            name: "Codeigniter",
                            score: 90,
                            icon:"codeigniter"
                        },
                        {
                            name: "Pure PHP",
                            score: 50,
                            icon:"php"
                        }
                    ]
                },
                {
                    name: "Javascript",
                    frameworks:[
                        {
                            name: "Vue JS",
                            score: 95,
                            icon:"vue"
                        },
                        {
                            name: "Angular JS",
                            score: 70,
                            icon:"angular"
                        },
                        {
                            name: "Vanilla & JQuery",
                            score: 90,
                            icon:"js"
                        }
                    ]
                },
                {
                    name: "HTML & CSS",
                    frameworks:[
                        {
                            name: "Bootstrap",
                            score: 95,
                            icon:"bootstrap"
                        },
                        {
                            name: "Vanilla",
                            score: 90,
                            icon:"css_html"
                        },
                    ]
                },
                

            ]
        }
    }
}
</script>

<style scoped>
.content{
    display:flex;
    flex-direction: column;
}
h3{
    color:white;
    font-family: "GeoSans";
    font-size: 50px;
    padding-top:20px;
    padding-bottom: 20px;
}
div:not(.progress){
    background-color: #f4a442;
    padding-left:50px;
    /* display:flex;
    align-items: center;
    justify-content: center; */
}

.progress{
    width:100%;
}
.row{
    height:100px;
    width:100%;
}
.row .col-md-3{
    height:50px;
}
@media screen and (max-width: 480px){
    div:not(.progress){
        background-color: #f4a442;
        padding-left:30px;
        /* display:flex;
        align-items: center;
        justify-content: center; */
    }
    h3{
        font-size:40px;
        width: 90%;
        text-align: center;
        padding-right:50px;
    }
    .row{
        height:25vh;
    }
}

</style>


