function hideToggle(button, elem) {
 
    $(button).toggle(
      function () {
        $(elem).hide();
      },
      function () {
        $(elem).show();
      }
    );
        
    }
    
    hideToggle(".button1", ".iframe1");
    hideToggle(".button2", ".iframe2");
     