$('#movie_name').keypress( function(event) {
	console.log('event',event.originalEvent.charCode )
  // If the user presses the "Enter" key on the keyboard
  if (event.originalEvent.charCode === 13) {
    // Cancel the default action, if needed
 searchMovie()
  }
});
function searchMovie(){
	const movie_name=$('#movie_name').val();
	if( !movie_name){
		alert("please enter a valid movie name !");
		return;
	}
	  $.ajax({url: `https://www.omdbapi.com/?t=${movie_name}&apikey=e2449e7b`, success: function(result){
	  if(result.Response==='False'){
	  	if(result.Error){
	  		alert(result.Error);
	  		return;
	  	}
	  		alert('Sorry, an error occurred!');
	  		return;
	  }
	  let html_details='';

	for (const [key, value] of Object.entries(result)) {
    if(['Title','Poster','Released','Ratings',"Type",'Response'].includes(key)){
    	continue;
    }
    html_details+=`<h4><span class="movie-info-label" >${key}:</span>&nbsp;${value}</h4>`;
}
console.log(html_details);
	$('#movie-details-container').html(html_details)

	  $('#movie_title').text(result.Title)
	  $('#movie_poster').attr("src",result.Poster)
	  $('#year_released').html(`<span class="movie-info-label" >Released:</span> ${result.Released}`)

	  $('#movie_name').val(null);
	
	  let html='';
	  if(result.Ratings){
	  	result.Ratings.forEach(rating=>{
html+=`<li>${rating.Source}:&nbsp;${rating.Value}</li>`;
	  
	});
	  }
$('#ratings').html(html)
  },
error:function(error){
	alert('Sorry, an error occurred!');
	  		return;
}
});

}