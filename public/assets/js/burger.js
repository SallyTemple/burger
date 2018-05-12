
$(document).ready(function(){
    
      
      $(".startBurger").on("submit", function(event) {
        
        event.preventDefault();
        
        $('#errMess').text("");
    
        var whatIsOnTheMenu = $("#burger_name").val().trim();
        if(whatIsOnTheMenu === "" ){
            $('#errMess').text("Enter burger name");
            return;
        }
    
        var startBurger = {
         burger_name: whatIsOnTheMenu,
          devoured: $("[name=devoured]:checked").val().trim()
        };
     
        $.ajax("/api/burgers", {
          type: "POST",
          data: startBurger
          }).then(
            function() {
            location.reload();
          }
          );
        });
    
      // $(".biteBurger").on("click", function(event) {
      //   var item_id = $(this).data("id");
      
      //   var startBurgerState = {
      //     devoured: true
      //   };
        

      //   $.ajax("/api/burgers/" + item_id, {
      //      type: "PUT",
      //      data: startBurgerState
      //   }).then(function() {
      //       console.log("changed devoured to", startBurgerState.devoured);
           
      //       location.reload();
      //   });
      });
//     });
    
    