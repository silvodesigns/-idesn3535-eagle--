//const binId = "j5sdv";
//this is to get ratings
const binId ="9d3bbb8e-e0d6-11e7-8b56-87e3c5d17339";
function getComments(){
	let comments;
	$.ajax({
		url:"https://jsonblob.com/api/jsonBlob/" +binId,
		async:false,
		success: function(data){
			comments = data;
		}

	});
	return comments;
}
function addComment(comment){
	const newComment = this.getComments();
	newComment.comments.push(comment);



		$.ajax({
	    url:"https://jsonblob.com/api/jsonBlob/" + binId,
	    type:"PUT",
	    data:JSON.stringify(newComment),
	    contentType:"application/json; charset=utf-8",
	    dataType:"json",
	    async: false,
	    success: function(data, textStatus, jqXHR){

	    	}
		});     

}
//https://api.myjson.com/bins/j5sdv