<template>
  <div>
  {{name}}   
  {{imgsrc}}
  {{price}}
    <input type="number" class="quantity" name="quantity" v-model="quantity">
     <div/>
    <div>
    <button @click="pay">just pay</button>
</div>


</template>


<script>
  import axios from 'axios'
 export default{
    name: 'Checkout',
   
   props:{
     imgsrc:Image,
     name:String,
     price:Number 
      },
 data(){
   this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  
  },
   methods:{
 pay(){
   axios.post("/pay", {
          title: this.name,
          image: this.imgsrc,
          price:this.price * quantity
        }).then(()=>{
  axios.get('/pay')
  .then(()=>{
  }).catch((error)=>{
    console.log(error)
  })})
},
mounted(){
  this.pay() }
},
}
 
</script> 