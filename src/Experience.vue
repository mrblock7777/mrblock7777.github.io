<template>
    <div>
        <div class="content">
            <h3> <fa icon="desktop"></fa>&nbsp;Experience</h3>
            <div class="container">
                <div class="row">
                    <div v-for="experience in experiences" :key="experience['company']" class="col-lg-3">
                        <h2><a :href="experience.href" target="_blank">{{experience.company}}</a></h2>
                        <p>{{experience.description}}</p>
                        <h4>Skills Learned</h4>
                        <ul>
                            <li v-for="skill in experience.skill" :key="skill">
                                {{skill}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            experiences:[
                {
                    company:"Simetri Teras Niaga",
                    description:"Begin to learn PHP, not involved in any big projects but learned how to build them",
                    skill:["PHP","Phphyppo(Modified framework based on codeigniter)","JQuery","Bootstrap"],
                    href:"http://simetri.com.my/",
                },
                {
                    company:"MyAestic",
                    description:"Developed a medical e-commerce website. Never finished due to budget constraint",
                    skill:["Laravel","Vue js","JQuery","Bootstrap"],
                    href:"http://www.myaestic.com/"
                },
                {
                    company:"IDB solutions, Healthtics",
                    description:"Mostly work on debugging existing system and deploying to server.",
                    skill:["Pure PHP","JQuery","Bootstrap"],
                    href:"http://www.idb-solutions.com.my/"
                },
                
            ]
        }
    }
}
</script>
<style scoped>
    /* @import './assets/css/content.css'; */

    .content{
        background-color: black;
        height:auto;
    }
    .row, .row .col-lg-3{
        height:auto;
        padding: 0 5px;
        
    }
    .row{
        justify-content: center;
    } 
    .col-lg-3{
        background-color: #012f7a;
        margin: 10px 5px;
        padding: 0 10px;

    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content h3, h2, h4{
        font-family: "GeoSans";
        font-size: 30px;
        color:white;
        width: 90%;
        margin-top:40px;
        margin-bottom: 20px;
    }
    p, ul li{
        color: white;
    }
    @media screen and (max-width: 768px) {
        div.content{
            height:auto;
        }
        .content h3{
            text-align: center;
            /* padding-top:100px;
            padding-bottom: 50px; */
        }
    }
    
   
</style>


