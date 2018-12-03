<template>
    <div>

        <div class="content">
            <!-- <div class="sidebar">
                <img style="width:150px; height: 150px;" src="/src/assets/img/profile-picture.jpeg" alt="my-picture">
            </div> -->
            <h3><fa icon="info-circle"></fa>{{title}}</h3>
            <div class="profile">
                <img src="/src/assets/img/profile-picture.jpeg" style="width: 150px; height: 150px;" alt=""><br>
                <span class="label">Name</span> : {{profile.name}} <br>
                <span class="label">Hometown </span> : {{profile.hometown}} <br>
                <span class="label">Hobbies</span> : 
                <span v-for="hobbies in profile.hobbies" :key="hobbies">
                    {{hobbies}}<span v-if="hobbies != profile.hobbies[profile.hobbies.length - 1]">, </span> 
                </span>
                <ol>
                    <li v-for="hobbies in profile.hobbies" :key="hobbies">{{hobbies}}</li>
                </ol>
                
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"About Me",
            profile:{
                name: "Ameer Izwan",

                hometown: "Kajang, Selangor",

                hobbies: [
                    "Gaming",
                    "Playing Musics",
                    "Programming",
                    "Origami"
                ]
            }
        }
    }
}
</script>

<style scoped>
/* @import './assets/css/content.css'; */
div{
    height:100vh;
    background-color: #002804;
}
.content{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.content h3{
    width: 90%;
    margin-top:20px;
    margin-bottom:10px;
    font-family: "GeoSans";
    font-size:50px;
    color: white;
}
ol{
    display:none;
}
.profile .label{
    color:dimgray;
}

img{
    border-radius: 50%;
    float:right;
    margin-top: 10px;
    margin-right: 10px;
}

.profile{
    font-family: "KenyanCoffee";
    font-size:60px;
    background-color:rgb(0, 0, 0,0.5);
    width:80%;
    height:530px;
    padding-left: 20px;
    color: white;
    
}

@media screen and (max-width: 768px){
    div{
        height: auto;
    }
}

@media screen and (max-width:767px){
        div{
            height: auto;
        }
        img{
            position: relative;
            left:30px;
            float: none;
        }
        .content{
            padding-left:10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        ol{
            display:block;
        }
        span:not(.label){
            display:none;
        }
        .profile{
            background-color:transparent;
            padding: 5px;
            font-size:30px;
        }
        .content h3{
            font-size: 40px;
            width: 200px;
        }
}
</style>


