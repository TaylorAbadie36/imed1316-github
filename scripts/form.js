// A $( document ).ready() block.
$( document ).ready(function() {
   //console.log( "ready!" );
  //alert('test');
  
  $(document).on('change', '#t-shirt', chkTshirt);
  
  <!-- fuction -->
  function chkTshirt() {
    
    var tshirt = $('#t-shirt').val();
    //alert(tshirt);
    
    //begin of tshirt
    if (tshirt == 'CUSTOM') {
      //alert('works');
      
      $('#custom').removeAttr('disabled'); //remove disabled
      $('#custom').attr('required', true); //required
      
    }//end of tshirt
    else {
      $('#custom').attr('disabled', true); //disabled
      $('#custom').val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove required
    }
  } <!-- end of fuction -->
  
  
  
});