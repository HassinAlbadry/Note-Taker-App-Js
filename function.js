
	function addNote(){
		
		
		let inputNote=document.getElementById('note').value; //get note title field
		let desc=document.getElementById('noteDesc').value; //get note desctiption field
		let displayDiv=document.getElementById('displayNotes'); //get display notes div to print results to it
		let modal=document.getElementById('modal'); 			//get modal div to add click event to show/hide modal
		let modalContent=document.getElementById('modal-content');  // get modal content to append notes description to it

	if(inputNote.length!=0 && desc.length!=0){
     
		let title=[inputNote]; // set note title to an array to be able to add multiple notes at the same time
		let html=''; // define a variable to hold the result of for loop ( looping through notes )
			              
		//loop thru title array and save result to html variable	                 
		for(let i=0;i<title.length;i++){
            html=title[i];
            
		}

		//create a span element with close id and add html 'x' entity
		let close=document.createElement('span');
      	close.id='close';
      	close.innerHTML="&times;";
      
			
		// created a button element to use o click event and add description to it
		let  btn = document.createElement("BUTTON");  
		btn.innerHTML = "View Note"; 
		btn.id="butt";	

		
        btn.addEventListener ("click", function() {
        modal.style.display='block';
        modalContent.innerHTML=desc;
        modalContent.appendChild(close);

      
	});
        close.addEventListener ("click", function() {
       	modal.style.display='none';


	});
       
		//create a dynamic div to assign both html variable to button to that div
        let div = document.createElement('div');
  		div.id = 'notes';//assigned id to that div
 		div.innerHTML += '<h2>'+html+'</h2>'; // html added for that div(which is added notes from user)
 		displayDiv.appendChild(div); // appended the div to an existing div in our DOM 
		div.appendChild(btn);// appended our button obj to the div we created

		let deleteNote=document.createElement('span');
      	deleteNote.id='delete';
     	deleteNote.innerHTML="&times;";
		div.appendChild(deleteNote);

	 

        deleteNote.addEventListener ("click", function() {
       	div.style.display='none';
	});

    }else{
    	alert('Your Note Fields Are Empty. Please Fill in The Fields!')
    }
  	}


