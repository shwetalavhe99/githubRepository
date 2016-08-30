$(document).ready(function()
	{
		$("#registr_btn").click(function()
			{
				/*var pattern = /^[a-zA-Z]$/;
				var fname = #("#f_name").val();*/
				
				 if($("#f_name").val() == "" )
				 {
					   $("#name").focus();
					   $("#errorBox").html("enter the First Name");
					   
				}else
				{
					$("#errorBox").html("enter the First Name");
				}
		})
	
	}