// JavaScript Document

//global variables, constants, and arrays
var questionCounter = 0;  //how many questions are we up to in the round?
const MAX_QUESTIONS = 10;  //max questions in a round
const IMG_ARRAY_LENGTH = 267;  //length of img array

//parallel arrays
var imgArray = new Array(IMG_ARRAY_LENGTH);  //to hold a list of ALL possible images
var nameArray 	= new Array(IMG_ARRAY_LENGTH);  //names for all images in imgArray

//to hold numbers, to be used as index when choosing img from imgArray (the img/questions for a game)
var questionsArray;  //length will be MAX_QUESTIONS

//array holding 5 inner arrays that each are of length 4 (amount of buttons)
var fiveArraysInsideArray = new Array(MAX_QUESTIONS);

const BUTTON_AMOUNT = 4;

//to hold green tick or red x symbol
var symbolArray = new Array(MAX_QUESTIONS);

//keep track of correct guesses
var counterCorrectAnswers = 0;


//call function on load
window.onload = function(){ 
	populateImgArray();
	populateNameArray();
};

/*populates global array of images*/
function populateImgArray() 
{
	//insert img object in every element
	for (var i = 0; i < IMG_ARRAY_LENGTH; i++)
	{
		imgArray[i] = new Image();
	}
	
	var index = 0;	
	
	imgArray[index++].src = "images/Adrien_Brody.jpg";
	imgArray[index++].src = "images/Ajay_Naidu.jpg";
	imgArray[index++].src = "images/Alan_Rickman.jpg";
	imgArray[index++].src = "images/Alec_Baldwin.jpg";
	imgArray[index++].src = "images/Al_Pacino.jpg";
	imgArray[index++].src = "images/Andrew_Scott.jpg";
	imgArray[index++].src = "images/Andy_Garcia.jpg";
	imgArray[index++].src = "images/Anthony_Hopkins.jpg";
	imgArray[index++].src = "images/Anthony_Mackie.jpg";
	imgArray[index++].src = "images/Antonio_Banderas.jpg";
	imgArray[index++].src = "images/Arnold_Schwarzenegger.jpg";
	imgArray[index++].src = "images/Ashton_Kutcher.jpg";
	imgArray[index++].src = "images/Barry_Otto.jpg";
	imgArray[index++].src = "images/Benedict_Cumberbatch.jpg";
	imgArray[index++].src = "images/Benicio_Del_Toro.jpg";
	imgArray[index++].src = "images/Ben_Affleck.jpg";
	imgArray[index++].src = "images/Ben_Stiller.jpg";
	imgArray[index++].src = "images/Billy_Bob_Thornton.jpg";
	imgArray[index++].src = "images/Billy_Zane.jpg";
	imgArray[index++].src = "images/Bill_Murray.jpg";
	imgArray[index++].src = "images/Bill_Nighy.jpg";
	imgArray[index++].src = "images/Boris_Karloff.jpg";
	imgArray[index++].src = "images/Bradley_Cooper.jpg";
	imgArray[index++].src = "images/Brad_Pitt.jpg";
	imgArray[index++].src = "images/Bruce_Greenwood.jpg";
	imgArray[index++].src = "images/Bruce_Lee.jpg";
	imgArray[index++].src = "images/Bruce_Willis.jpg";
	imgArray[index++].src = "images/Bruno_Ganz.jpg";
	imgArray[index++].src = "images/Bryan_Brown.jpg";
	imgArray[index++].src = "images/Callum_Keith_Rennie.jpg";
	imgArray[index++].src = "images/Casey_Affleck.jpg";
	imgArray[index++].src = "images/Channing_Tatum.jpg";
	imgArray[index++].src = "images/Charlie_Sheen.jpg";
	imgArray[index++].src = "images/Chevy_Chase.jpg";
	imgArray[index++].src = "images/Chiwetel_Ejiofor.jpg";
	imgArray[index++].src = "images/Christian_Bale.jpg";
	imgArray[index++].src = "images/Christian_Slater.jpg";
	imgArray[index++].src = "images/Christopher_Lee.jpg";
	imgArray[index++].src = "images/Christopher_Plummer.jpg";
	imgArray[index++].src = "images/Christopher_Reeve.jpg";
	imgArray[index++].src = "images/Christopher_Walken.jpg";
	imgArray[index++].src = "images/Christoph_Waltz.jpg";
	imgArray[index++].src = "images/Chris_Cooper.jpg";
	imgArray[index++].src = "images/Chris_Elliott.jpg";
	imgArray[index++].src = "images/Chris_Hemsworth.jpg";
	imgArray[index++].src = "images/Chris_Noth.jpg";
	imgArray[index++].src = "images/Chris_Pratt.jpg";
	imgArray[index++].src = "images/Chris_Rock.jpg";
	imgArray[index++].src = "images/Chris_Tucker.jpg";
	imgArray[index++].src = "images/Clark_Gable.jpg";
	imgArray[index++].src = "images/Clint_Eastwood.jpg";
	imgArray[index++].src = "images/Colin_Farrell.jpg";
	imgArray[index++].src = "images/Colin_Firth.jpg";
	imgArray[index++].src = "images/Daniel_Bruhl.jpg";
	imgArray[index++].src = "images/Daniel_Craig.jpg";
	imgArray[index++].src = "images/Daniel_Radcliffe.jpg";
	imgArray[index++].src = "images/Danny_DeVito.jpg";
	imgArray[index++].src = "images/Danny_Glover.jpg";
	imgArray[index++].src = "images/Dan_Aykroyd.jpg";
	imgArray[index++].src = "images/David_Bradley.jpg";
	imgArray[index++].src = "images/David_Gyasi.jpg";
	imgArray[index++].src = "images/David_Morse.jpg";
	imgArray[index++].src = "images/Delroy_Lindo.jpg";
	imgArray[index++].src = "images/Dennis_Franz.jpg";
	imgArray[index++].src = "images/Denzel_Washington.jpg";
	imgArray[index++].src = "images/Dermot_Mulroney.jpg";
	imgArray[index++].src = "images/Djimon_Hounsou.jpg";
	imgArray[index++].src = "images/Donald_Sutherland.jpg";
	imgArray[index++].src = "images/Don_Cheadle.jpg";
	imgArray[index++].src = "images/Dustin_Hoffman.jpg";
	imgArray[index++].src = "images/Dwayne_Johnson.jpg";
	imgArray[index++].src = "images/Eddie_Murphy.jpg";
	imgArray[index++].src = "images/Edward_Norton.jpg";
	imgArray[index++].src = "images/Ed_Harris.jpg";
	imgArray[index++].src = "images/Ed_Helms.jpg";
	imgArray[index++].src = "images/Elijah_Wood.jpg";
	imgArray[index++].src = "images/Emilio_Estevez.jpg";
	imgArray[index++].src = "images/Eric_Idle.jpg";
	imgArray[index++].src = "images/Ethan_Hawke.jpg";
	imgArray[index++].src = "images/Ewan_McGregor.jpg";
	imgArray[index++].src = "images/Forest_Whitaker.jpg";
	imgArray[index++].src = "images/Francois_Cluzet.jpg";
	imgArray[index++].src = "images/F_Murray_Abraham.jpg";
	imgArray[index++].src = "images/Gabriel_Byrne.jpg";
	imgArray[index++].src = "images/Gailard_Sartain.jpg";
	imgArray[index++].src = "images/Gary_Cole.jpg";
	imgArray[index++].src = "images/Gary_Oldman.jpg";
	imgArray[index++].src = "images/Gary_Sinise.jpg";
	imgArray[index++].src = "images/Gene_Hackman.jpg";
	imgArray[index++].src = "images/Geoffrey_Rush.jpg";
	imgArray[index++].src = "images/George_Clooney.jpg";
	imgArray[index++].src = "images/Gerard_Butler.jpg";
	imgArray[index++].src = "images/Gerard_Depardieu.jpg";
	imgArray[index++].src = "images/Guy_Pearce.jpg";
	imgArray[index++].src = "images/Harrison_Ford.jpg";
	imgArray[index++].src = "images/Harvey_Keitel.jpg";
	imgArray[index++].src = "images/Heath_Ledger.jpg";
	imgArray[index++].src = "images/Hugh_Grant.jpg";
	imgArray[index++].src = "images/Hugh_Jackman.jpg";
	imgArray[index++].src = "images/Iain_Glen.jpg";
	imgArray[index++].src = "images/Ian_Holm.jpg";
	imgArray[index++].src = "images/Ian_McKellen.jpg";
	imgArray[index++].src = "images/Ice_Cube.jpg";
	imgArray[index++].src = "images/Jackie_Chan.jpg";
	imgArray[index++].src = "images/Jack_Black.jpg";
	imgArray[index++].src = "images/Jack_Nicholson.jpg";
	imgArray[index++].src = "images/Jake_Gyllenhaal.jpg";
	imgArray[index++].src = "images/James_Dean.jpg";
	imgArray[index++].src = "images/James_Dreyfus.jpg";
	imgArray[index++].src = "images/Jamie_Foxx.jpg";
	imgArray[index++].src = "images/Jason_Alexander.jpg";
	imgArray[index++].src = "images/Jason_Statham.jpg";
	imgArray[index++].src = "images/Javier_Bardem.jpg";
	imgArray[index++].src = "images/Jean_Reno.jpg";
	imgArray[index++].src = "images/Jeffrey_Jones.jpg";
	imgArray[index++].src = "images/Jeffrey_Wright.jpg";
	imgArray[index++].src = "images/Jeff_Bridges.jpg";
	imgArray[index++].src = "images/Jeff_Daniels.jpg";
	imgArray[index++].src = "images/Jeff_Goldblum.jpg";
	imgArray[index++].src = "images/Jeremy_Irons.jpg";
	imgArray[index++].src = "images/Jeremy_Renner.jpg";
	imgArray[index++].src = "images/Jerry_Orbach.jpg";
	imgArray[index++].src = "images/Jerry_Seinfeld.jpg";
	imgArray[index++].src = "images/Jet_Li.jpg";
	imgArray[index++].src = "images/Jim_Carrey.jpg";
	imgArray[index++].src = "images/Jim_Caviezel.jpg";
	imgArray[index++].src = "images/Joaquin_Phoenix.jpg";
	imgArray[index++].src = "images/Joel_Kinnaman.jpg";
	imgArray[index++].src = "images/Joe_Pantoliano.jpg";
	imgArray[index++].src = "images/Joe_Pesci.jpg";
	imgArray[index++].src = "images/Johnny_Depp.jpg";
	imgArray[index++].src = "images/John_Belushi.jpg";
	imgArray[index++].src = "images/John_Cazale.jpg";
	imgArray[index++].src = "images/John_Cleese.jpg";
	imgArray[index++].src = "images/John_Cusack.jpg";
	imgArray[index++].src = "images/John_Goodman.jpg";
	imgArray[index++].src = "images/John_Hannah.jpg";
	imgArray[index++].src = "images/John_Hurt.jpg";
	imgArray[index++].src = "images/John_Lithgow.jpg";
	imgArray[index++].src = "images/John_Malkovich.jpg";
	imgArray[index++].src = "images/John_Savage.jpg";
	imgArray[index++].src = "images/John_Travolta.jpg";
	imgArray[index++].src = "images/Jonah_Hill.jpg";
	imgArray[index++].src = "images/Jon_Voight.jpg";
	imgArray[index++].src = "images/Joseph_Fiennes.jpg";
	imgArray[index++].src = "images/Joseph_Gordon-Levitt.jpg";
	imgArray[index++].src = "images/Josh_Hartnett.jpg";
	imgArray[index++].src = "images/Jude_Law.jpg";
	imgArray[index++].src = "images/Justin_Theroux.jpg";
	imgArray[index++].src = "images/Karl_Urban.jpg";
	imgArray[index++].src = "images/Keanu_Reeves.jpg";
	imgArray[index++].src = "images/Ken_Watanabe.jpg";
	imgArray[index++].src = "images/Kevin_Costner.jpg";
	imgArray[index++].src = "images/Kevin_Hart.jpg";
	imgArray[index++].src = "images/Kevin_Kline.jpg";
	imgArray[index++].src = "images/Kevin_Spacey.jpg";
	imgArray[index++].src = "images/Kiefer_Sutherland.jpg";
	imgArray[index++].src = "images/Kirk_Douglas.jpg";
	imgArray[index++].src = "images/Laurence_Fishburne.jpg";
	imgArray[index++].src = "images/Leonardo_DiCaprio.jpg";
	imgArray[index++].src = "images/Liam_Hemsworth.jpg";
	imgArray[index++].src = "images/Liam_Neeson.jpg";
	imgArray[index++].src = "images/Luke_Wilson.jpg";
	imgArray[index++].src = "images/Mark_Ruffalo.jpg";
	imgArray[index++].src = "images/Mark_Rylance.jpg";
	imgArray[index++].src = "images/Mark_Wahlberg.jpg";
	imgArray[index++].src = "images/Marlon_Brando.jpg";
	imgArray[index++].src = "images/Martin _Freeman.jpg";
	imgArray[index++].src = "images/Martin_Sheen.jpg";
	imgArray[index++].src = "images/Matthew_Broderick.jpg";
	imgArray[index++].src = "images/Matthew_McConaughey.jpg";
	imgArray[index++].src = "images/Matt_Damon.jpg";
	imgArray[index++].src = "images/Matt_Dillon.jpg";
	imgArray[index++].src = "images/Max_von_Sydow.jpg";
	imgArray[index++].src = "images/Mel_Gibson.jpg";
	imgArray[index++].src = "images/Michael_Caine.jpg";
	imgArray[index++].src = "images/Michael_Clarke_Duncan.jpg";
	imgArray[index++].src = "images/Michael_Douglas.jpg";
	imgArray[index++].src = "images/Michael_Ealy.jpg";
	imgArray[index++].src = "images/Michael_Madsen.jpg";
	imgArray[index++].src = "images/Michael_Palin.jpg";
	imgArray[index++].src = "images/Michael_Pitt.jpg";
	imgArray[index++].src = "images/Michael_Richards.jpg";
	imgArray[index++].src = "images/Mickey_Rourke.jpg";
	imgArray[index++].src = "images/Mikael_Persbrandt.jpg";
	imgArray[index++].src = "images/Mike_Myers.jpg";
	imgArray[index++].src = "images/Morgan_Freeman.jpg";
	imgArray[index++].src = "images/Morris_Chestnut.jpg";
	imgArray[index++].src = "images/Nathan_Fillion.jpg";
	imgArray[index++].src = "images/Nick_Nolte.jpg";
	imgArray[index++].src = "images/Nicolas_Cage.jpg";
	imgArray[index++].src = "images/Nikolaj_Coster-Waldau.jpg";
	imgArray[index++].src = "images/Nonso_Anozie.jpg";
	imgArray[index++].src = "images/Norman_Reedus.jpg";
	imgArray[index++].src = "images/Omar_Sy.jpg";
	imgArray[index++].src = "images/Orlando_Bloom.jpg";
	imgArray[index++].src = "images/Orson_Welles.jpg";
	imgArray[index++].src = "images/Owen_Teale.jpg";
	imgArray[index++].src = "images/Owen_Wilson.jpg";
	imgArray[index++].src = "images/Patrick_Swayze.jpg";
	imgArray[index++].src = "images/Pat_Morita.jpg";
	imgArray[index++].src = "images/Paul_Newman.jpg";
	imgArray[index++].src = "images/Peter_OToole.jpg";
	imgArray[index++].src = "images/Peter_Stormare.jpg";
	imgArray[index++].src = "images/Peter_Ustinov.jpg";
	imgArray[index++].src = "images/Philip_Seymour_Hoffman.jpg";
	imgArray[index++].src = "images/Pierce_Brosnan.jpg";
	imgArray[index++].src = "images/Ralph_Fiennes.jpg";
	imgArray[index++].src = "images/Rhys_Ifans.jpg";
	imgArray[index++].src = "images/Richard_Gere.jpg";
	imgArray[index++].src = "images/Richard_Harris.jpg";
	imgArray[index++].src = "images/Robbie_Coltrane.jpg";
	imgArray[index++].src = "images/Roberto_Benigni.jpg";
	imgArray[index++].src = "images/Robert_De_Niro.jpg";
	imgArray[index++].src = "images/Robert_Downey_Jr.jpg";
	imgArray[index++].src = "images/Robert_Duvall.jpg";
	imgArray[index++].src = "images/Robert_Redford.jpg";
	imgArray[index++].src = "images/Robin_Williams.jpg";
	imgArray[index++].src = "images/Roger_Moore.jpg";
	imgArray[index++].src = "images/Ron_Livingston.jpg";
	imgArray[index++].src = "images/Russell_Crowe.jpg";
	imgArray[index++].src = "images/Rutger_Hauer.jpg";
	imgArray[index++].src = "images/Ryan_Gosling.jpg";
	imgArray[index++].src = "images/Ryan_Reynolds.jpg";
	imgArray[index++].src = "images/Samuel_L_Jackson.jpg";
	imgArray[index++].src = "images/Samy_Naceri.jpg";
	imgArray[index++].src = "images/Sam_Neill.jpg";
	imgArray[index++].src = "images/Sam_Shepard.jpg";
	imgArray[index++].src = "images/Scott_Foley.jpg";
	imgArray[index++].src = "images/Scott_Speedman.jpg";
	imgArray[index++].src = "images/Sean_Bean.jpg";
	imgArray[index++].src = "images/Sean_Connery.jpg";
	imgArray[index++].src = "images/Sean_Penn.jpg";
	imgArray[index++].src = "images/Stanley_Tucci.jpg";
	imgArray[index++].src = "images/Stan_Shaw.jpg";
	imgArray[index++].src = "images/Stephen_Baldwin.jpg";
	imgArray[index++].src = "images/Stephen_Root.jpg";
	imgArray[index++].src = "images/Stephen_Tobolowsky.jpg";
	imgArray[index++].src = "images/Steven_Seagal.jpg";
	imgArray[index++].src = "images/Steve_Buscemi.jpg";
	imgArray[index++].src = "images/Steve_Martin.jpg";
	imgArray[index++].src = "images/Steve_McQueen.jpg";
	imgArray[index++].src = "images/Sylvester_Stallone.jpg";
	imgArray[index++].src = "images/Ted_Danson.jpg";
	imgArray[index++].src = "images/Terence_Stamp.jpg";
	imgArray[index++].src = "images/Terrence_Howard.jpg";
	imgArray[index++].src = "images/Tim_Robbins.jpg";
	imgArray[index++].src = "images/Tobey_Maguire.jpg";
	imgArray[index++].src = "images/Tommy_Lee_Jones.jpg";
	imgArray[index++].src = "images/Tom_Cruise.jpg";
	imgArray[index++].src = "images/Tom_Hanks.jpg";
	imgArray[index++].src = "images/Tom_Hulce.jpg";
	imgArray[index++].src = "images/Tom_Skerritt.jpg";
	imgArray[index++].src = "images/Tom_Wilkinson.jpg";
	imgArray[index++].src = "images/Val_Kilmer.jpg";
	imgArray[index++].src = "images/Victor_Garber.jpg";
	imgArray[index++].src = "images/Viggo_Mortensen.jpg";
	imgArray[index++].src = "images/Wesley_Snipes.jpg";
	imgArray[index++].src = "images/Wes_Bentley.jpg";
	imgArray[index++].src = "images/Willem_Dafoe.jpg";
	imgArray[index++].src = "images/William_Baldwin.jpg";
	imgArray[index++].src = "images/William_Fichtner.jpg";
	imgArray[index++].src = "images/Will_Ferrell.jpg";
	imgArray[index++].src = "images/Will_Smith.jpg";
	imgArray[index++].src = "images/Woody_Harrelson.jpg";
	imgArray[index++].src = "images/Yun-Fat_Chow.jpg";
	imgArray[index++].src = "images/Zach_Galifianakis.jpg";
}


/*populates global array of correct answers*/
function populateNameArray()
{
	var index = 0;
	
	//insert answer in every element
	nameArray[index++] = "Adrien Brody";
	nameArray[index++] = "Ajay Naidu";
	nameArray[index++] = "Alan Rickman";
	nameArray[index++] = "Alec Baldwin";
	nameArray[index++] = "Al Pacino";
	nameArray[index++] = "Andrew Scott";
	nameArray[index++] = "Andy Garcia";
	nameArray[index++] = "Anthony Hopkins";
	nameArray[index++] = "Anthony Mackie";
	nameArray[index++] = "Antonio Banderas";
	nameArray[index++] = "Arnold Schwarzenegger";
	nameArray[index++] = "Ashton Kutcher";
	nameArray[index++] = "Barry Otto";
	nameArray[index++] = "Benedict Cumberbatch";
	nameArray[index++] = "Benicio Del Toro";
	nameArray[index++] = "Ben Affleck";
	nameArray[index++] = "Ben Stiller";
	nameArray[index++] = "Billy Bob Thornton";
	nameArray[index++] = "Billy Zane";
	nameArray[index++] = "Bill Murray";
	nameArray[index++] = "Bill Nighy";
	nameArray[index++] = "Boris Karloff";
	nameArray[index++] = "Bradley Cooper";
	nameArray[index++] = "Brad Pitt";
	nameArray[index++] = "Bruce Greenwood";
	nameArray[index++] = "Bruce Lee";
	nameArray[index++] = "Bruce Willis";
	nameArray[index++] = "Bruno Ganz";
	nameArray[index++] = "Bryan Brown";
	nameArray[index++] = "Callum Keith Rennie";
	nameArray[index++] = "Casey Affleck";
	nameArray[index++] = "Channing Tatum";
	nameArray[index++] = "Charlie Sheen";
	nameArray[index++] = "Chevy Chase";
	nameArray[index++] = "Chiwetel Ejiofor";
	nameArray[index++] = "Christian Bale";
	nameArray[index++] = "Christian Slater";
	nameArray[index++] = "Christopher Lee";
	nameArray[index++] = "Christopher Plummer";
	nameArray[index++] = "Christopher Reeve";
	nameArray[index++] = "Christopher Walken";
	nameArray[index++] = "Christoph Waltz";
	nameArray[index++] = "Chris Cooper";
	nameArray[index++] = "Chris Elliott";
	nameArray[index++] = "Chris Hemsworth";
	nameArray[index++] = "Chris Noth";
	nameArray[index++] = "Chris Pratt";
	nameArray[index++] = "Chris Rock";
	nameArray[index++] = "Chris Tucker";
	nameArray[index++] = "Clark Gable";
	nameArray[index++] = "Clint Eastwood";
	nameArray[index++] = "Colin Farrell";
	nameArray[index++] = "Colin Firth";
	nameArray[index++] = "Daniel Brühl";
	nameArray[index++] = "Daniel Craig";
	nameArray[index++] = "Daniel Radcliffe";
	nameArray[index++] = "Danny DeVito";
	nameArray[index++] = "Danny Glover";
	nameArray[index++] = "Dan Aykroyd";
	nameArray[index++] = "David Bradley";
	nameArray[index++] = "David Gyasi";
	nameArray[index++] = "David Morse";
	nameArray[index++] = "Delroy Lindo";
	nameArray[index++] = "Dennis Franz";
	nameArray[index++] = "Denzel Washington";
	nameArray[index++] = "Dermot Mulroney";
	nameArray[index++] = "Djimon Hounsou";
	nameArray[index++] = "Donald Sutherland";
	nameArray[index++] = "Don Cheadle";
	nameArray[index++] = "Dustin Hoffman";
	nameArray[index++] = "Dwayne Johnson";
	nameArray[index++] = "Eddie Murphy";
	nameArray[index++] = "Edward Norton";
	nameArray[index++] = "Ed Harris";
	nameArray[index++] = "Ed Helms";
	nameArray[index++] = "Elijah Wood";
	nameArray[index++] = "Emilio Estevez";
	nameArray[index++] = "Eric Idle";
	nameArray[index++] = "Ethan Hawke";
	nameArray[index++] = "Ewan McGregor";
	nameArray[index++] = "Forest Whitaker";
	nameArray[index++] = "François Cluzet";
	nameArray[index++] = "F Murray Abraham";
	nameArray[index++] = "Gabriel Byrne";
	nameArray[index++] = "Gailard Sartain";
	nameArray[index++] = "Gary Cole";
	nameArray[index++] = "Gary Oldman";
	nameArray[index++] = "Gary Sinise";
	nameArray[index++] = "Gene Hackman";
	nameArray[index++] = "Geoffrey Rush";
	nameArray[index++] = "George Clooney";
	nameArray[index++] = "Gerard Butler";
	nameArray[index++] = "Gerard Depardieu";
	nameArray[index++] = "Guy Pearce";
	nameArray[index++] = "Harrison Ford";
	nameArray[index++] = "Harvey Keitel";
	nameArray[index++] = "Heath Ledger";
	nameArray[index++] = "Hugh Grant";
	nameArray[index++] = "Hugh Jackman";
	nameArray[index++] = "Iain Glen";
	nameArray[index++] = "Ian Holm";
	nameArray[index++] = "Ian McKellen";
	nameArray[index++] = "Ice Cube";
	nameArray[index++] = "Jackie Chan";
	nameArray[index++] = "Jack Black";
	nameArray[index++] = "Jack Nicholson";
	nameArray[index++] = "Jake Gyllenhaal";
	nameArray[index++] = "James Dean";
	nameArray[index++] = "James Dreyfus";
	nameArray[index++] = "Jamie Foxx";
	nameArray[index++] = "Jason Alexander";
	nameArray[index++] = "Jason Statham";
	nameArray[index++] = "Javier Bardem";
	nameArray[index++] = "Jean Reno";
	nameArray[index++] = "Jeffrey Jones";
	nameArray[index++] = "Jeffrey Wright";
	nameArray[index++] = "Jeff Bridges";
	nameArray[index++] = "Jeff Daniels";
	nameArray[index++] = "Jeff Goldblum";
	nameArray[index++] = "Jeremy Irons";
	nameArray[index++] = "Jeremy Renner";
	nameArray[index++] = "Jerry Orbach";
	nameArray[index++] = "Jerry Seinfeld";
	nameArray[index++] = "Jet Li";
	nameArray[index++] = "Jim Carrey";
	nameArray[index++] = "Jim Caviezel";
	nameArray[index++] = "Joaquin Phoenix";
	nameArray[index++] = "Joel Kinnaman";
	nameArray[index++] = "Joe Pantoliano";
	nameArray[index++] = "Joe Pesci";
	nameArray[index++] = "Johnny Depp";
	nameArray[index++] = "John Belushi";
	nameArray[index++] = "John Cazale";
	nameArray[index++] = "John Cleese";
	nameArray[index++] = "John Cusack";
	nameArray[index++] = "John Goodman";
	nameArray[index++] = "John Hannah";
	nameArray[index++] = "John Hurt";
	nameArray[index++] = "John Lithgow";
	nameArray[index++] = "John Malkovich";
	nameArray[index++] = "John Savage";
	nameArray[index++] = "John Travolta";
	nameArray[index++] = "Jonah Hill";
	nameArray[index++] = "Jon Voight";
	nameArray[index++] = "Joseph Fiennes";
	nameArray[index++] = "Joseph Gordon-Levitt";
	nameArray[index++] = "Josh Hartnett";
	nameArray[index++] = "Jude Law";
	nameArray[index++] = "Justin Theroux";
	nameArray[index++] = "Karl Urban";
	nameArray[index++] = "Keanu Reeves";
	nameArray[index++] = "Ken Watanabe";
	nameArray[index++] = "Kevin Costner";
	nameArray[index++] = "Kevin Hart";
	nameArray[index++] = "Kevin Kline";
	nameArray[index++] = "Kevin Spacey";
	nameArray[index++] = "Kiefer Sutherland";
	nameArray[index++] = "Kirk Douglas";
	nameArray[index++] = "Laurence Fishburne";
	nameArray[index++] = "Leonardo DiCaprio";
	nameArray[index++] = "Liam Hemsworth";
	nameArray[index++] = "Liam Neeson";
	nameArray[index++] = "Luke Wilson";
	nameArray[index++] = "Mark Ruffalo";
	nameArray[index++] = "Mark Rylance";
	nameArray[index++] = "Mark Wahlberg";
	nameArray[index++] = "Marlon Brando";
	nameArray[index++] = "Martin  Freeman";
	nameArray[index++] = "Martin Sheen";
	nameArray[index++] = "Matthew Broderick";
	nameArray[index++] = "Matthew McConaughey";
	nameArray[index++] = "Matt Damon";
	nameArray[index++] = "Matt Dillon";
	nameArray[index++] = "Max von Sydow";
	nameArray[index++] = "Mel Gibson";
	nameArray[index++] = "Michael Caine";
	nameArray[index++] = "Michael Clarke Duncan";
	nameArray[index++] = "Michael Douglas";
	nameArray[index++] = "Michael Ealy";
	nameArray[index++] = "Michael Madsen";
	nameArray[index++] = "Michael Palin";
	nameArray[index++] = "Michael Pitt";
	nameArray[index++] = "Michael Richards";
	nameArray[index++] = "Mickey Rourke";
	nameArray[index++] = "Mikael Persbrandt";
	nameArray[index++] = "Mike Myers";
	nameArray[index++] = "Morgan Freeman";
	nameArray[index++] = "Morris Chestnut";
	nameArray[index++] = "Nathan Fillion";
	nameArray[index++] = "Nick Nolte";
	nameArray[index++] = "Nicolas Cage";
	nameArray[index++] = "Nikolaj Coster-Waldau";
	nameArray[index++] = "Nonso Anozie";
	nameArray[index++] = "Norman Reedus";
	nameArray[index++] = "Omar Sy";
	nameArray[index++] = "Orlando Bloom";
	nameArray[index++] = "Orson Welles";
	nameArray[index++] = "Owen Teale";
	nameArray[index++] = "Owen Wilson";
	nameArray[index++] = "Patrick Swayze";
	nameArray[index++] = "Pat Morita";
	nameArray[index++] = "Paul Newman";
	nameArray[index++] = "Peter O\'Toole";
	nameArray[index++] = "Peter Stormare";
	nameArray[index++] = "Peter Ustinov";
	nameArray[index++] = "Philip Seymour Hoffman";
	nameArray[index++] = "Pierce Brosnan";
	nameArray[index++] = "Ralph Fiennes";
	nameArray[index++] = "Rhys Ifans";
	nameArray[index++] = "Richard Gere";
	nameArray[index++] = "Richard Harris";
	nameArray[index++] = "Robbie Coltrane";
	nameArray[index++] = "Roberto Benigni";
	nameArray[index++] = "Robert De Niro";
	nameArray[index++] = "Robert Downey Jr";
	nameArray[index++] = "Robert Duvall";
	nameArray[index++] = "Robert Redford";
	nameArray[index++] = "Robin Williams";
	nameArray[index++] = "Roger Moore";
	nameArray[index++] = "Ron Livingston";
	nameArray[index++] = "Russell Crowe";
	nameArray[index++] = "Rutger Hauer";
	nameArray[index++] = "Ryan Gosling";
	nameArray[index++] = "Ryan Reynolds";
	nameArray[index++] = "Samuel L Jackson";
	nameArray[index++] = "Samy Naceri";
	nameArray[index++] = "Sam Neill";
	nameArray[index++] = "Sam Shepard";
	nameArray[index++] = "Scott Foley";
	nameArray[index++] = "Scott Speedman";
	nameArray[index++] = "Sean Bean";
	nameArray[index++] = "Sean Connery";
	nameArray[index++] = "Sean Penn";
	nameArray[index++] = "Stanley Tucci";
	nameArray[index++] = "Stan Shaw";
	nameArray[index++] = "Stephen Baldwin";
	nameArray[index++] = "Stephen Root";
	nameArray[index++] = "Stephen Tobolowsky";
	nameArray[index++] = "Steven Seagal";
	nameArray[index++] = "Steve Buscemi";
	nameArray[index++] = "Steve Martin";
	nameArray[index++] = "Steve McQueen";
	nameArray[index++] = "Sylvester Stallone";
	nameArray[index++] = "Ted Danson";
	nameArray[index++] = "Terence Stamp";
	nameArray[index++] = "Terrence Howard";
	nameArray[index++] = "Tim Robbins";
	nameArray[index++] = "Tobey Maguire";
	nameArray[index++] = "Tommy Lee Jones";
	nameArray[index++] = "Tom Cruise";
	nameArray[index++] = "Tom Hanks";
	nameArray[index++] = "Tom Hulce";
	nameArray[index++] = "Tom Skerritt";
	nameArray[index++] = "Tom Wilkinson";
	nameArray[index++] = "Val Kilmer";
	nameArray[index++] = "Victor Garber";
	nameArray[index++] = "Viggo Mortensen";
	nameArray[index++] = "Wesley Snipes";
	nameArray[index++] = "Wes Bentley";
	nameArray[index++] = "Willem Dafoe";
	nameArray[index++] = "William Baldwin";
	nameArray[index++] = "William Fichtner";
	nameArray[index++] = "Will Ferrell";
	nameArray[index++] = "Will Smith";
	nameArray[index++] = "Woody Harrelson";
	nameArray[index++] = "Yun-Fat Chow";
	nameArray[index++] = "Zach Galifianakis";
}


/*starts a fresh game*/
function startGame()
{
	//go to #page2
	$(location).attr('href', '#page2');  //jquery --> jumps to #page2
	
	//reset questionCounter and counterCorrectAnswers
	resetCounters();
	
	//generate array with the random selected images/questions. here MAX_QUESTIONS numbers
	generateQuestionArray();
	
	//create array with inner arrays 
	createFourButtonAnswers(questionsArray);
	
	//display the images/questions that are randomly selected in generateQuestionArray
	displayQuestion();
}


/*resets counters:
1. that keeps track of which question we are up to in the game
2. that keep track of how many correct answers user has in the game*/
function resetCounters()
{
	//reset questionCounter and counterCorrectAnswers
	questionCounter = 0;
	counterCorrectAnswers = 0;
}


/*will generate an array of unique random numbers.
(The numbers will be the indexes used when picking images from the array that holds ALL images etc.)*/
function generateQuestionArray()
{	
	//create array to hold questions.
	questionsArray = new Array(MAX_QUESTIONS);
	
	//questionsArray[0] = 81;
	
	//generate MAX_QUESTIONS numbers (each number can range from 0 to (IMG_ARRAY_LENGTH - 1) both included).
	for (var i = 0; i < MAX_QUESTIONS; i++)
	{
		//generate a random number. MAX_QUESTIONS numbers from 0 to (IMG_ARRAY_LENGTH - 1) both included.
		var aNumber = Math.floor( (Math.random() * IMG_ARRAY_LENGTH) );  //0 - (IMG_ARRAY_LENGTH - 1) both included
		
		//check if we are at index zero in the array; no numbers yet in array, questionsArray
		if (i == 0)
		{
			//put in the number, don't have to test if it is already there
			questionsArray[i] = aNumber;			
		}
		else  //there are already numbers in array, questionsArray
		{
			//check if number is not there yet
			if (questionsArray.indexOf(aNumber) == -1)
			{
				//number is not in array yet, we can put in the number in array
				questionsArray[i] = aNumber;
			}
			else  //number already in array, questionsArray
			{
				//keep generate number until number not found in array, questionsArray
				do
				{
					aNumber = Math.floor( (Math.random() * IMG_ARRAY_LENGTH) );  //0 - (IMG_ARRAY_LENGTH - 1) both included
				} while(questionsArray.indexOf(aNumber) != -1);	
				
				//add number to array, questionsArray
				questionsArray[i] = aNumber;			
			}
		}
	}
}


/*get the 4 answer possibilities for each image question*/
function createFourButtonAnswers(someQuestionArray)
{	
	//create and populate an inner array
	for (var i = 0; i < MAX_QUESTIONS; i++)
	{		
		//create inner array
		var innerArray = new Array(BUTTON_AMOUNT);
		
		//put correct answer at index zero
		innerArray[0] = someQuestionArray[i];
		
		for (var j = 1; j < BUTTON_AMOUNT; j++)
		{
			//keep generate number until number not found in array, innerArray
			do
			{
				aNumber = Math.floor( (Math.random() * IMG_ARRAY_LENGTH) );  //0 - (IMG_ARRAY_LENGTH - 1) both included
			} while(innerArray.indexOf(aNumber) != -1);	
			
			//add number to array, innerArray
			innerArray[j] = aNumber;	
		}
		//add inner array to fiveArraysInsideArray global array
		fiveArraysInsideArray[i] = innerArray;
	}	
}



/*displays a question with images and answer possibilities.*/
function displayQuestion()
{	
	//enable buttons
	enableAnswerButtons();

	//display correct "Question x of 5"
	var str = "";
	str += "<strong>Question " + (questionCounter + 1) + " of " + MAX_QUESTIONS + "</strong>";
	document.getElementById("questionNumberOfTotal").innerHTML = str;
	
	//insert img for a question
	insertQuestionImg();
	
	//update buttons to match img question
	updateButtons();
}


	
/*enable all 4 answer buttons*/
function enableAnswerButtons()
{
	document.getElementById("buttonA").disabled = false;
	document.getElementById("buttonB").disabled = false;
	document.getElementById("buttonC").disabled = false;
	document.getElementById("buttonD").disabled = false;	
}


	
/*disable all 4 answer buttons*/
function disableAnswerButtons()
{
	document.getElementById("buttonA").disabled = true;
	document.getElementById("buttonB").disabled = true;
	document.getElementById("buttonC").disabled = true;
	document.getElementById("buttonD").disabled = true;	
}


/*insert img in html file from array with index equal questionCounter*/
function insertQuestionImg() 
{
	var str = "";
	
	//create img tag. choose image from imgArray, use number from questionsArray as index
	var index = questionsArray[questionCounter];  //number
	str += "<img src=" + imgArray[index].src + " height='280' width='280'/>";
	
	document.getElementById("questionImg").innerHTML = str;
}


/*insert 4 possible answers in button tags*/
function updateButtons()
{	
	//fetch an inner array from fiveArraysInsideArray ex [22, 3, 7, 14]
	var arrayWithFourAnswers = fiveArraysInsideArray[questionCounter];
	
	//shuffle this array
	arrayWithFourAnswers = shuffleIndexInArray(arrayWithFourAnswers);
	
	//set buttons inner html	
	document.getElementById("buttonA").innerHTML = nameArray[arrayWithFourAnswers[0]];
	document.getElementById("buttonB").innerHTML = nameArray[arrayWithFourAnswers[1]];
	document.getElementById("buttonC").innerHTML = nameArray[arrayWithFourAnswers[2]];
	document.getElementById("buttonD").innerHTML = nameArray[arrayWithFourAnswers[3]];
}


/*shuffle elements in array*/
function shuffleIndexInArray(anArray)
{	
	//array to hold 0,1,2,3 in random order
	var someArray = new Array(BUTTON_AMOUNT);
	
	//array to hold same element as the array passed as argument (anArray)
	//but in the order prescribed by someArray
	var arrayToReturn = new Array(BUTTON_AMOUNT);
	
	//fill the array with 0-3 numbers
	for (var i = 0; i < BUTTON_AMOUNT; i++)
	{
		//keep generate number until number not found in array, someArray
		do
		{
			aNumber = Math.floor( (Math.random() * BUTTON_AMOUNT) );  //0 - (BUTTON_AMOUNT - 1) both included			
		} while(someArray.indexOf(aNumber) != -1);	
		
		//add number to array, someArray
		someArray[i] = aNumber;	
		
		//add to arrayToReturn
		arrayToReturn[i] = anArray[someArray[i]];
	}
	return arrayToReturn;
}


/*keeps track of number of questions asked, and keeps track
of correct answers. Takes an id of button element as param, which is used
to identify which button has been clicked.*/
function submitAnswer(buttonID)
{	
	//disable buttons
	disableAnswerButtons();
	
	var str = "";
	const SLEEP_AMOUNT = 500;
	var makeGreen = true;
	
	//compare users answer with the correct answer, use number from questionsArray as index
	var index = questionsArray[questionCounter];  //number
		
	//check if answer is correct
	if (document.getElementById(buttonID).innerHTML == nameArray[index])
	{
		//insert green tick symbol
		symbolArray[questionCounter] = "style='color:green;'>&#10003";
		
		//increment counterCorrectAnswers
		counterCorrectAnswers++;
		
		//make button green
		buttonChangeColor(buttonID, makeGreen);		
	}
	else  //wrong answer
	{
		//update boolean
		makeGreen = false;
		
		//insert red x symbol
		symbolArray[questionCounter] = "style='color:red;'>X";
		
		//make button red
		buttonChangeColor(buttonID, makeGreen);
	}
		
	//check if it was the last question to be asked
	if (questionCounter == (MAX_QUESTIONS - 1))
	{		
		//delay 0.5 sec
		setTimeout(
		function() 
		{
			//reset button colors
			$("#buttonA").css("background-color", "");
			$("#buttonB").css("background-color", "");
			$("#buttonC").css("background-color", "");
			$("#buttonD").css("background-color", "");
			
			//all questions are answered --> go to result page, #page4
			$(location).attr('href', '#page4');  //jquery --> jumps to #page4
			displayResult();
		}, SLEEP_AMOUNT);		
	}
	else
	{		
		//update questionCounter
		questionCounter++;
		
		//delay 0.5 sec
		setTimeout(
		function() 
		{
			//reset button colors
			$("#buttonA").css("background-color", "");
			$("#buttonB").css("background-color", "");
			$("#buttonC").css("background-color", "");
			$("#buttonD").css("background-color", "");
			
			//display next question
			displayQuestion();
		}, SLEEP_AMOUNT);
	}
}



/*change button background color*/
function buttonChangeColor(anID, makeGreen)
{
	var color;
	var anID = "#" + anID;
	
	//use of jquery to change button color 
	if (makeGreen == true)
	{
		color = "#00FF00";
	}
	else
	{
		color = "#FF0000";
	}
	
	$(anID).css("background-color", color);
}



/*show results*/
function displayResult()
{
	var str = "";
	
	if (counterCorrectAnswers == MAX_QUESTIONS)
	{
		str += "<strong>Brilliant!<br/>You get your own star on Walk of Fame<br/><br/><img src='images/background_images/walkOfFameStar.jpg' height='200' width='250'/><br/><br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 90)
	{
		str += "<strong>Extremely well done!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 80)
	{
		str += "<strong>Very good!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 70)
	{
		str += "<strong>Good!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 60)
	{
		str += "<strong>Pretty good!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 50)
	{
		str += "<strong>Ok Performance!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 40)
	{
		str += "<strong>Not the best performance!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 30)
	{
		str += "<strong>You can do better!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 20)
	{
		str += "<strong>Better luck next time!<br/><br/>";
	}
	else if ((counterCorrectAnswers * 100 / MAX_QUESTIONS) >= 10)
	{
		str += "<strong>Pretty poor!<br/><br/>";
	}
	else
	{
		str += "<strong>You need to go to the cinema more often!<br/><br/>";
	}
	
	str += "You got " + counterCorrectAnswers + " out of " + MAX_QUESTIONS + "!</strong><br/><br/>";
		
	//create table
	str += "<table><tr><th><center>Actor</center></th><th><center>Correct answer</center></th><th><center>Result</center></th></tr>";
	
	//loop through all 5 questions and add img, correct answer, and symbol
	for (var i = 0; i < MAX_QUESTIONS; i++)
	{
		str += "<tr><th><center><img src=" + imgArray[questionsArray[i]].src + " height='75' width='75'/></center></th>";
		str += "<th><center>" + nameArray[questionsArray[i]] + "</center></th>";
		str += "<th><center " + symbolArray[i] + "</center></th></tr>";
	}
	  
	str += "</table><br/>";		
		
	document.getElementById("resultMsg").innerHTML = str;
}


/*quit current game and go to Menu*/
function quitCurrentGame()
{
	//display confirm box and only take action if user confirms
	if (confirm("Are you sure you want to quit the Quiz?"))
	{				
		//go to main page with menu, #page
		$(location).attr('href', '#page');  //jquery --> jumps to #page
	}
}


/*go to Menu*/
function goToMenu()
{
	//go to #page
	$(location).attr('href', '#page');  //jquery --> jumps to #page
}


/*go to About*/
function goToAbout()
{
	//go to #page3
	$(location).attr('href', '#page3');  //jquery --> jumps to #page3
}



