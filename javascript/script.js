var counter = 0;
var correct = 0;
var questions =[
	{
		question:'WWW stands for',
		options:['World Worm Web','World Wide Web','World Word Web','None of the above'],
		answer:2
	},
	{
		question:'A________________ is a group of independent computers attached to one another through communication media.',
		options:['Internet','E-mail','Network','None of the above'],
		answer:3
	},
	{
		question:'Which of the following performs arithmetic and logical operations?',
		options:['control unit','AlU','i/o','register'],
		answer:2
	},{
		question:'ISP stands for:',
		options:['International Service Provider','Internet Service Provider','Internet Service Presenter','None of the above'],
		answer:2
	},
	{
		question:'Which of the following is a storage device',
		options:['hard disk','usb drive','floppy drive','all of the above'],
		answer:4
	}
];

function displayQuestion(){
	$('.qnumber').html(counter+1);	
	console.log('value of ciunter'+counter);
	$('.question').html(questions[counter].question);
	for(var itr in questions[counter].options ){
		console.log(questions[counter].options[itr]);
		var x = parseInt(itr)+1;

 		$('form ul').append('<li><input type="radio" name="option" value="'+x+'" required >'+questions[counter].options[itr]+'</li>');
	}
	$('form ul').append('<li><button class="submitbutton" type="button">submit answer</button></li>');
}

function validateAnswer(input){
 	var userSelectedOption = $("input[name='option']:checked").val();

 	if(userSelectedOption==questions[counter].answer){
 		DisplayMessage("<h1 class='correctAnswer'>thats correct answer</h1><br>click next quetion");
 		correct++;
 		increamentCounter();
 	}
 	else{
		DisplayMessage("<h2 class='wrongAnswer'>wrong answer</h2>correc answer is :"+questions[counter].options[questions[counter].answer] );
		increamentCounter(); 		
 	}
}
function DisplayMessage(msg){
	$('form ul').html("");
	$('.messageBlock').show();
	$('.content').hide();
	$('.message').html(msg);
	$('.messageButton').html("Next Quetion");

}
function increamentCounter(){
	counter++;
	if(counter>4){
		DisplayMessage("<h1> Well Done</h1> <h2>your score is:</h2><span class='result correctAnswer'>  correct:"
		+correct+"</span><br><span class='result wrongAnswer'>wrong:"+(counter-correct)+"</span>")
			$('.messageButton').hide();
	}
}

$(document).ready(function() {
	$('.content').hide();
	$('div .messageButton').click(function(event) {
		$('.messageBlock').hide();
		displayQuestion();
		$('.content').show();
		
	});

	$('ul').on('click', 'button', function(event) {
		event.preventDefault();
		validateAnswer();
	});

});