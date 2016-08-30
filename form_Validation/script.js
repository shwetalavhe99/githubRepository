$(function()
	{
		$("#form").validate(
		{
			rules :
			{
				f_name : "required",
			
			},
			
			massage :
			{
				f_name : "Please Enter First Name..",
				
			}

			
		});
	})