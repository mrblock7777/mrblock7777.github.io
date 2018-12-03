<template>
    <div id="app">
        <div class="content">
            <h3><fa icon="graduation-cap"></fa>&nbsp;Education</h3>
            <!-- Timeline -->
            <div class="container timeline">
                <span v-for="school in schools" :key="school['name']">
                    <div v-if="schools.indexOf(school) % 2 == 0" class="row align-items-center">
                        <div :class="'col-2 text-center ' + path(school)">
                            <div class="textbox"></div>
                        </div>
                        <div class="col-6 text-left">
                            <h5>{{school.name}}</h5>
                            <img :src="'/src/assets/img/'+school.logo+'.png'" style="width:150px; height:150px" :alt="school.logo">
                            <p>({{school.from}} - {{school.to}})</p>
                        </div>
                    </div>
                    <!-- Path -->
                    <div v-if="schools.indexOf(school) % 2 == 0 && schools[schools.length - 1] != school" class="row path">
                        <div class="col-2">
                            <div class="vertex bottom-left"  :style="schools.indexOf(school) == 0? 'left:50%':'left:calc(50% - 3px)'"></div>
                        </div>
                        <div class="col-8">
                            <hr>
                        </div>
                        <div class="col-2">
                            <div class="vertex top-right"></div>
                        </div>
                    </div>
                    <!-- End Path -->
                    <div v-if="schools.indexOf(school) % 2 == 1" class="row align-items-center justify-content-end">
                        <div class="col-6 text-right">
                            <h5>{{school.name}}</h5>
                            <img :src="'/src/assets/img/'+school.logo+'.png'" style="width:150px; height:150px" :alt="school.logo">
                            <p>({{school.from}} - {{school.to}})</p>
                        </div>
                        <div :class="'col-2 text-center '+ pathTimeline(school) ">
                            <div class="textbox"></div>
                        </div>
                    </div>
                <!-- Path -->
                    <div v-if="schools.indexOf(school) % 2 == 1 && schools[schools.length - 1] != school" class="row path">
                        <div class="col-2">
                            <div class="vertex top-left"></div>
                        </div>
                        <div class="col-8">
                            <hr>
                        </div>
                        <div class="col-2">
                            <div class="vertex bottom-right"></div>
                        </div>
                    </div>
                <!-- End Path -->
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            schools:[
                {
                    name:"SRK Bandar Baru Bangi",
                    logo:"skbbb",
                    from:"2003",
                    to:"2009"
                },
                {
                    name:"SMK Jalan Empat",
                    logo:"jess",
                    from:"2010",
                    to:"2014"
                },
                {
                    name:"Negeri Sembilan Matriculation College",
                    logo:"kmns",
                    from:"2015",
                    to:"2016"
                },
                {
                    name:"Universiti Putra Malaysia",
                    logo:"upm",
                    from:"2016",
                    to:"Present"
                }
            ]
        }
    },
    methods:{
        justifyRow(school){
            console.log(school);
            return this.schools.indexOf(school) % 2 === 1 ? 'justify-content-end':'';
        },
        path(school){
            return (this.schools[0] === school || this.schools[this.schools.length - 1] === school) ? 'bottom':'full';
        },
        pathTimeline(school){
            return (this.schools[this.schools.length - 1] ==  school ? 'top' : 'full')
        },
        textAlign(school){
            return this.schools.indexOf(school) % 2 === 1 ? 'text-right':'';
        }
    }
}
</script>

<style scoped>
 
    /* @import './assets/css/content.css'; */

    .content{
        background-color: darkred; 
        height: auto;
    }
    /* Timeline */
    .timeline h5, .timeline p{
        color:#fff;
    }
    .timeline .row{
        display:flex;
    }
    .timeline .row .col-2{
        display: inline-flex;
        align-self: stretch;
        align-items: center;
        justify-content: center;
    }
    .textbox{
        background-color: #fff;
        padding: 30px 30px;
        color: #000;
        border-radius: 50%;
    }

    .timeline .row .col-2.bottom::after{
        height:50%;
        left:50%;
        top:50%;
    }
    .timeline .row .col-2.full::after{
        height:100%;
        left: calc(50% - 3px);
    }
    .timeline .row .col-2.top::after{
        height: 50%;
        left: calc(50% - 3px);
        top: 0;
    }
    .timeline .row .col-2::after{
        content: "";
        position:absolute;
        border-left: 3px solid #fff;
        z-index: 1;

    }

    .path div{
        padding: 0;
        height: 100px;
    }
    .path .col-2{
        display: flex;
        overflow: hidden;
    }
    

    .path .vertex{
        border: 3px solid #fff;
        width: 100%;
        position: relative;
        border-radius: 15px;
    }
    .path .bottom-left{
        left: calc(50% - 3px);
        top: -50%;
    }
    .path .top-right{
        left: -50%;
        top: calc(50% - 3px);
    }
    .path .bottom-right{
        left: -50%;
        top: -50%;
    }
    .path .top-left{
        left: calc(50% - 3px)   ;
        top: calc(50% - 3px);
    }
    .path hr{
        border-top: 3px solid #fff;
        margin: 0;
        position: relative;
        top: 47px;
    }
    .path .col-6{
        padding: 0;
    }

    

    
    .content{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .content h3{
        font-family: "GeoSans";
        font-size: 40px;
        color:white;
        width: 90%;
        margin-top:30px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        .content h3{
            text-align: center;
            /* padding-top:100px; */
            margin-bottom: 50px;
        }
        .textbox{
            padding: 20px 20px;
        }
        .text-left{
            left: 15vw;
        }
        .text-right{
            right: 3vw;
        }
        
    }
 </style>
 