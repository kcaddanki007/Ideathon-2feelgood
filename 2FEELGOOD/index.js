$(function(){ 
  swal("Important!","This site isn't for people with mental illnesses like depression, GAD or OCD. Please seek a proffesional for help if you want help with these.","info");
    window.onbeforeunload = function () {
        return 'Are you really sure you want to perform the action?';
       }

      var inputs = []; 
      
      $(".rb-tab").click(function(){
        
        $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
        $(this).addClass("rb-tab-active");
      });
      
      
      
      $(".trigger").click(function(){
        
        inputs = [];
        
        for (i=1; i<=$(".rb").length; i++) {
          var flag = 0;
          var rb = "rb" + i;
          var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
         if(!isNaN(rbValue)){
          inputs.push(rbValue); 
          flag = 1; 
         }
         else{
          swal("Error","Please answer all the questions.","error");
          break;
         }
          
        };
      
        if(flag==1){
          swal("Done!","Deciding your activities...","success");
          setTimeout(function(){ input(); }, 2000);
          
        }
        
      });
      
      
      function input(){
        var sum=0;
        for(var o=0;o<8;o++){
          sum += inputs[o];
        }

        var avg = sum/8;
      
        if(avg<=2.5){
          swal("Hey there, Your average mental well-being score is low.","We feel like you should take the day off. Once you're done with the recommended  solutions, check back in so that we can suggest other solutions which we think you might need","warning");
        }
        else if(avg>=7.5){
          swal("You have a relatively higher well-being score!","We are super glad to see that you are doing great! Once you are done with the recommended actions, go something artistic for today.","success");
        }
      
       
          $("#mobile-container").remove(),
          $("#questionnaire").remove();
          $("body").css("background-attachment","fixed");
          $("body").css("background","rgba(255, 203, 203, 0.74)");
          
          algo();
         
      };
    
      
      function algo(){
      
        //Default Solution Set
        const apiResult = [{
          title: "20 minute nap",
          description: "Take a nap for 20 minutes and set 2 alarms before napping.",
          image: "images/nap.png",
          colour: "white"
        }, {
          title: "Words of Affirmation",
          description: "Write a few affirmations to yourself and read it out aloud infront of a mirror or click on the link below for words of affirmation to read.",
          image: "images/affirmation.png",
          link: "https://theblissfulmind.com/positive-affirmations-list/",
          blank: "_blank"
        },{
          title: "Get Some Sunlight",
          description: "Go to your balcony or terrace and get some sunlight.",
          image: "images/sun.png",
          colour: "white"
        },{
          title: "Hydrate your body",
          description: "Drink a glass or two of water.",
          image: "images/hydrate.png",
          colour: "white"
        },{
          title: "Meditate",
          description: "Play calming music and meditate. Click on the link below for a playlist.",
          image: "images/meditate.png",
          link: "https://www.youtube.com/playlist?playnext=1&list=PLuJmk4716D5cC1VMSU8lGTLuqiNOIxKZr&feature=gws_kp_artist",
          blank: "_blank"
        }, {
          title: "Take a Shower",
          description: "Take a nice warm shower.",
          image:"images/shower.png",
          colour: "white"
        },{
          title: "Minimize Screen Time",
          description: "Minimizing screen time and spend more time on activities that don't involve your phone.",
          image: "images/reduceScreenTime.png",
          colour: "white"
        },{
          title: "Listen to your fav song",
          description: "Listen to your favourite song and hum/dance along.",
          image: "images/music.png",
          colour: "white"
        },{
          title: "Spend time with plants",
          description: "Water your plants and spend time on them/sit beside them.",
          image: "images/plants.png",
          colour: "white"
        }, {
          title: "Grounding",
          description: "Look for 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste.",
          image: "images/grounding.png",
          colour: "white"
        },{
          title: "Express Gratitude",
          description: "Write down 10 things you are grateful for.",
          image: "images/gratitude.png",
          colour: "white"
        },{
          title: "Brisk Exercise",
          description: "Take a walk or walk around your house.",
          image: "images/brisk.png",
          colour: "white"
        },{
          title: "Text/Call your loved ones",
          description: "Have a nice chat with a friend or relative you've been missing lately.",
          image: "images/text.png",
          colour: "white"
        }, {
          title: "Clean out surroundings",
          description: "Cleaning your surroundings will clear your head.",
          image: "images/clean.png",
          colour: "white"
        },{
          title: "Make a meal plan",
          description: "Try to make a balanced meal plan for the week, starting today. Click on the link for ideas.",
          image: "images/mealPlan.png",
          link: "https://www.thekitchn.com/the-beginners-guide-to-meal-planning-what-to-know-how-to-succeed-and-what-to-skip-242413",
          blank: "_blank"
        },{
          title: "Light Exercise",
          description: "Choose a favourite workout for yourself and workout. Click on the link to find a workout playlist.",
          image: "images/lightExercise.png",
          link: "https://www.youtube.com/watch?v=PG2f3GF5RlI&t=238s",
          blank: "_blank"
        }, {
          title: "Do some stretches",
          description: "Do some light stretches on a mat.",
          image: "images/exercise.png",
          colour: "white"
        },{
          title: "Uninstall the app for a while",
          description: "Catch a break from social media and uninstall your social media for a day or two.",
          image: "images/uninstall.png",
          colour: "white"
        },{
          title: "Hug your loved ones",
          description: "Hug your loved ones and tell them how much they mean to you.",
          image: "images/hug.png",
          colour: "white"
        },{
          title: "Take a trip down the memory lane",
          description: "Open your photo albums and reminisce your old days.",
          image: "images/memoryLane.png",
          colour: "white"
        }, {
          title: "Reduce Screentime Before bed",
          description: "Put your phone away half an hour prior to bed time.",
          image: "images/reduceScreenTime.png",
          colour: "white"
        },{
          title: "Eat a small healthy snack",
          description: "Have a small healthy snack like yogurt or fruits. Click on the link for ideas.",
          image: "images/snack.png",
          link: "https://snacknation.com/blog/guide/healthy-snacks/",
          blank: "_blank"
        }];
      
      
      
      
        //Default Problems and solutions list with priority 
        const apiProblemSolns = [{
          title: "E",
          priority: 0,
          psoln: apiResult[14],
          ssoln: apiResult[3],
          tsoln: apiResult[21]
        }, {
          title: "S",
          priority: 1,
          psoln: apiResult[0],
          ssoln: apiResult[4],
          tsoln: apiResult[20]
        },{
          title: "A",
          priority: 2,
          psoln: apiResult[9],
          ssoln: apiResult[1],
          tsoln: apiResult[3]
        },{
          title: "C",
          priority: 3,
          psoln: apiResult[5],
          ssoln: apiResult[13],
          tsoln: apiResult[2]
        },{
          title: "L",
          priority: 4,
          psoln: apiResult[18],
          ssoln: apiResult[12],
          tsoln: apiResult[19]
        },{
          title: "M",
          priority: 4,
          psoln: apiResult[17],
          ssoln: apiResult[8],
          tsoln: apiResult[7]
        },{
          title: "N",
          priority: 6,
          psoln: apiResult[6],
          ssoln: apiResult[10],
          tsoln: apiResult[1]
        },{
          title: "P",
          priority: 7,
          psoln: apiResult[11],
          ssoln: apiResult[15],
          tsoln: apiResult[16]
        }];
      
      
    
      
      
      
      
      
      //inputs and their values
      let userInputCollection = [{
          keyword: "E",
          value: inputs[0]
      },{
          keyword: "S",
          value: inputs[1]
      },{
          keyword: "A",
          value: inputs[2]
      },{
          keyword: "C",
          value: inputs[3]
      },{
          keyword: "L",
          value: inputs[4]
      },{
          keyword: "M",
          value: inputs[5]
      },{
          keyword: "N",
          value: inputs[6]
      },{
          keyword: "P",
          value: inputs[7]
      }];
      
      
      
      
      //sorting the userInputCollection
      function bblSort(arr){
           
          for(var i = 0; i < arr.length; i++){
              
            // Last i elements are already in place  
            for(var j = 0; j < ( arr.length - i -1 ); j++){
                
              // Checking if the item at present iteration 
              // is greater than the next iteration
              if(arr[j].value > arr[j+1].value){
                  
                // If the condition is true then swap them
                var temp1 = arr[j].value
                arr[j].value = arr[j + 1].value
                arr[j+1].value = temp1
      
                var temp2 = arr[j].keyword
                arr[j].keyword = arr[j + 1].keyword
                arr[j+1].keyword = temp2
              }
            }
          }
          // Print the sorted array
          //console.log(arr);
         }
      bblSort(userInputCollection);
      
      
      /*
      //sort the final user Input collection according to priority
      function prioritycomparision(arr1,arr2){ 
            for(var i = 0; i < arr1.length; i++){
      
              // Last i elements are already in place  
            for(var j = 0; j < ( arr1.length - i -1 ); j++){
                
              // Checking if the item at present iteration 
              // is equal to next iteration
              if(arr1[j].value == arr1[j+1].value){
                
                  for(var t=0; t<arr2.length; t++){
      
                    if(arr1[j].keyword == arr2[t].title){
                      var ind1=0;
                      ind1 = arr2[t].priority;
                    }
                  
                    if(arr1[j+1].keyword == arr2[t].title){
                      var ind2=0;
                      ind2 = arr2[t].priority;  
                    }
                      
                    if(ind1>ind2){
                      var temp3 = arr1[j].keyword;
                      arr1[j].keyword = arr1[j + 1].keyword;
                      arr1[j+1].keyword = temp3;
                      ind1= undefined;
                      ind2= undefined;
                    }    
                  }
              }
             } 
            }
          
          // Print the sorted array
          //console.log(arr1);
         }
      prioritycomparision(userInputCollection,apiProblemSolns);
      */
      
      var final = [];
      //outputting the solutions
      function printsoln(arr3,arr4){
       final = [];
        
        for(var e=0; e<4 ; e++){
      
          for(var f=0;f<arr4.length;f++){
      
            if(arr3[e].keyword==arr4[f].title){
              
                      if(arr3[e].value<4){
                        final.push(arr4[f].psoln);
                      }
                      else if(arr3[e].value>=4 && arr3[e].value<8){
                        final.push(arr4[f].ssoln);
                      }
                      else{
                        final.push(arr4[f].tsoln);
                      }
      
      
            }
          }
        }
      
        const container = document.getElementById('cards');
        
        final.forEach((result, idx) => {

          const card = document.createElement('div');
          card.classList = 'card-body';
        

          const content = `
            <div class="cards">
            <div class="content">
              <a class="card" href="${result.link}" target="${result.blank}">
                <div class="front">
                  <img src="${result.image}">
                </div>
                <div class="back">
                  <div class = "overflow">
                    <h5>${result.title}</h5>
                    <br>
                    <p class="description">${result.description}</p>
                    <button class="button" style="background:${result.colour};color:${result.color}">Click Here</button>
                  </div>
                </div></a>
            </div>
          </div>
          `;
        
          container.innerHTML += content;
        })
      };
      
      printsoln(userInputCollection,apiProblemSolns);
      }
})
