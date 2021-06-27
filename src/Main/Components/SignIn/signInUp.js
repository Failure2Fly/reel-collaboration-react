import React from 'react';

export default function SignInUp() {
    function sign_up(){
        var inputs = document.querySelectorAll('.input_form_sign');
        document.querySelectorAll('.ul_tabs > li')[0].className=""; 
        document.querySelectorAll('.ul_tabs > li')[1].className="active"; 
        
        for(var i = 0; i < inputs.length ; i++  ) {
          if(i == 2  ){
          }else{  
            document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
          }
        } 
      
      setTimeout( function(){
        for(var d = 0; d < inputs.length ; d++  ) {
          document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block active_inp";  
        }
      },100 );
        
      document.querySelector('.link_forgot_pass').style.opacity = "0";
      document.querySelector('.link_forgot_pass').style.top = "-5px";
      document.querySelector('#btn_sign').innerHTML = "SIGN UP";
      //   setTimeout(function(){
      
      //  document.querySelector('.terms_and_cons').style.opacity = "1";
      //   document.querySelector('.terms_and_cons').style.top = "5px";
       
      //   },500);
        setTimeout(function(){
          document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_none";
      //  document.querySelector('.terms_and_cons').className = "terms_and_cons d_block";
        },450);
      }
      
      function sign_in(){
        var inputs = document.querySelectorAll('.input_form_sign');
        document.querySelectorAll('.ul_tabs > li')[0].className = "active"; 
        document.querySelectorAll('.ul_tabs > li')[1].className = ""; 
        
        for(var i = 0; i < inputs.length ; i++  ) {
          switch(i) {
            case 1:
              console.log(inputs[i].name);
              break;
            case 2:
              console.log(inputs[i].name);
            default: 
              document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
          }
        } 
      
      setTimeout( function(){
        for(var d = 0; d < inputs.length ; d++  ) {
          switch(d) {
            case 1:
              console.log(inputs[d].name);
              break;
            case 2:
              console.log(inputs[d].name);
            default:
              document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block";  
              document.querySelectorAll('.input_form_sign')[2].className = "input_form_sign d_block active_inp";  
         }
        }
       },100 );
      
      // document.querySelector('.terms_and_cons').style.opacity = "0";
      // document.querySelector('.terms_and_cons').style.top = "-5px";
      
      setTimeout(function(){
        document.querySelector('.terms_and_cons').className = "terms_and_cons d_none"; 
        document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_block";
      
       },500);
      
      setTimeout(function(){
        document.querySelector('.link_forgot_pass').style.opacity = "1";
        document.querySelector('.link_forgot_pass').style.top = "5px";
        for(var d = 0; d < inputs.length ; d++  ) {
          switch(d) {
            case 1:
              console.log(inputs[d].name);
              break;
            case 2:
              console.log(inputs[d].name);
              break;
            default:
              document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign";  
          }
        }
      },1500);
         document.querySelector('#btn_sign').innerHTML = "SIGN IN";    
      }
      
      
      window.onload =function(){
        document.querySelector('.cont_centrar').className = "cont_centrar cent_active";
      }
      
      //The JavaScript that control the logic
      var oData = (localStorage.getItem('usersList')) ? JSON.parse(localStorage.getItem('usersList')):{
        users: [],
        password: [],
        email:[]
      };
      
      function oDataObjectUpdated() {
        localStorage.setItem('usersList', JSON.stringify(oData));
      }
      
      function checkName(input) {
          var input_wrong = document.querySelector('.name_right');
          if(input.value && /[\S+]$/.test(input.value)){
            var usersName = input.value;
            input_wrong.classList.remove('input_wrong');
          }else{
            input_wrong.classList.add('input_wrong');
          }
          return usersName;
      }
      
      function checkEmail(input) {
        var input_wrong = document.querySelector('.email_right');
          if(document.querySelector('#btn_sign').innerHTML == "SIGN UP" ){
              if(input.value && /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(input.value)){
                input_wrong.innerHTML = '';
                input_wrong.classList.remove('input_wrong');
              }else{
                input_wrong.classList.add('input_wrong');
                input_wrong.innerHTML = 'Please type the Email adress like xxx@xxx.com.';
              }
        }else{
          
        }
      }
      
      function checkPass(input) {
          var input_wrong = document.querySelector('.pass_right');
          if(document.querySelector('#btn_sign').innerHTML == "SIGN UP" ){
             //6-20个字母、数字、下划线
              if(input.value && /^(\w){6,20}$/.test(input.value)){
                var password = input.value;
                input_wrong.classList.remove('input_wrong');
                return password;
              }else{
                input_wrong.classList.add('input_wrong');
                return false;
              }
        } else {
          
        }
      }
      
      
    //   function checkConfPass(input) {
    //     var input_wrong = document.querySelector('.confpass_right');
    //     if (sign_form.conf_pass_us.value === sign_form.pass_us.value){
    //       input_wrong.classList.remove('input_wrong');
    //     }else{
    //         input_wrong.classList.add('input_wrong');
    //       } 
    //   }
      
      document.getElementById('btn_sign').addEventListener('click', function(){
          
      });
}