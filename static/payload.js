 $(window).load(function() {
		$(".se-pre-con").delay(500).fadeOut("slow");
	});
        
        $(document).ready(function() {
          $('#example').DataTable();
         } );
        
        $('#form_datetime').datetimepicker({
            //language:  'fr',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
            }).on('changeDate', function (selected) {
                        var minDate = new Date(selected.date.valueOf());
			$('#form_datetime2').datetimepicker('setStartDate', minDate);
			minDate.setDate(minDate.getDate() + 1)
			$('#form_datetime2').datetimepicker('setEndDate', minDate);
                        $('#form_datetime2').datetimepicker('setDate', minDate);
		});
                
            
                    
         function fix(s)
            {
               $('#form_datetime2').datetimepicker({
                    //language:  'fr',
                    weekStart: 1,
                    autoclose: 1,
                    todayHighlight: 1,
                    startView: 2,
                    forceParse: 0,
                    showMeridian: 1
                    });    
            }       
                
        
        function getdata(ins)
        {
        document.getElementById("instanceId").value=ins;
        document.getElementById("submit_btn").click();
        }
        
        function Data_fill()
        {
        var instanceId1 = "<%= instanceId1 %>" ;
        var domain1 = "<%= domain1 %>" ;
        var env1 = "<%= env1 %>" ;
        var instance_name1 = "<%= instance_name1 %>" ;
        var start_date1 = "<%= start_date1 %>" ;
        var end_date1 = "<%= end_date1 %>" ;
        
            if(domain1=="Corporate")
            {
             document.getElementById("domain").selectedIndex = "1";
            }
            if(domain1=="Industrial")
            {
             document.getElementById("domain").selectedIndex = "2";
            }
            if(domain1=="Electrical")
            {
             document.getElementById("domain").selectedIndex = "3";
            }
            if(domain1=="Enterprise")
            {
             document.getElementById("domain").selectedIndex = "4";
            }
            if(domain1=="PIP")
            {
             document.getElementById("domain").selectedIndex = "5";
            }
            
            if(env1=="PROD")
            {
             document.getElementById("env").selectedIndex = "1";
            }
            if(env1=="QA")
            {
             document.getElementById("env").selectedIndex = "2";
            }
            if(env1=="Dev")
            {
             document.getElementById("env").selectedIndex = "3";
            }
            if(env1=="SIT")
            {
             document.getElementById("env").selectedIndex = "4";
            }
            if(domain1 !="")
            {
              $("#rem_ele").css({
                    opacity: 0,
                    display: 'block'     
                }).animate({opacity:1},600);
            }
            document.getElementById("instanceId").value=instanceId1;
            document.getElementById("instance_name").value=instance_name1;
            if(start_date1 !="")
            {
            start_date1 = new Date(start_date1);
            $('#form_datetime').datetimepicker('setDate', start_date1);	
            }
            if(end_date1 !="")
            {
            end_date1 = new Date(end_date1);
            //$('#form_datetime2').datetimepicker('setDate', end_date1);	
            }
            
        }
        
function rem_data(env)
        {
         if(env != "")
         {
              dom=document.getElementById("domain").value;
              if(dom !="")
              {
              $("#rem_ele").css({
                    opacity: 0,
                    display: 'block'     
                }).animate({opacity:1},600);
              }
         }
         else
         {
         $("#rem_ele").css({
                    opacity: 0,
                    display: 'none'     
                }).animate({opacity:1},600);
         }
        }
        
    function refresh_field()
        {
         $("#rem_ele").css({
                        opacity: 0,
                        display: 'none'     
                    }).animate({opacity:1},600);
        }
    function reset_field(x)
    {
     if(x !="")
     {
       $("#rem_ele2").css({
                        opacity: 0,
                        display: 'none'     
                    }).animate({opacity:1},600);
        $("#instance_name").css({
                        opacity: 0,
                        display: 'none'     
                    }).animate({opacity:1},600);
     }
     else
        {
             $("#rem_ele2").css({
                    opacity: 0,
                    display: 'block'     
                }).animate({opacity:1},600);
                 $("#instance_name").css({
                    opacity: 0,
                    display: 'block'     
                }).animate({opacity:1},600);
        }
    }