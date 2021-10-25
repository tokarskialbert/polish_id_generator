const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letters_as_numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]; 
const before_check_nr_weights = [7, 3, 1, 7, 3, 1, 7, 3];
const check_number_weight = 9;
var polish_id_arr = [];
		
var id_versions = {};
    id_versions.id_version_1 = false;
    id_versions.id_version_2 = false;
    id_versions.id_version_3 = false;
    	
    		
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
    	
function setIdVersion(id_version) {
    for (id in id_versions) {
    	id_versions[id] = false;
    }
    		
    id_versions[id_version] = true;
}
	
function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateID(polish_id_arr, id_versions) {
    var checksum = 0;
   	var elements_value = [];
    
    var i = 0;
    while(i < 3) {
      	var random_int = getRandomInt(0, 25);
      	var letter = letters[random_int];
     	var letter_as_number = letters_as_numbers[random_int];
      
     	if(id_versions.id_version_1 == true && i == 0) {
        	var letter = letters[0];
        	var letter_as_number = letters_as_numbers[0];
     	 }
      
      	if(id_versions.id_version_2 == true && i == 0) {
        	var letter = letters[2];
        	var letter_as_number = letters_as_numbers[2];
      	}
      
      	if(id_versions.id_version_3 == true && i == 0) {
        	var letter = letters[3];
        	var letter_as_number = letters_as_numbers[3];
     	 }
      		
      	polish_id_arr.push(letter);
      	elements_value.push(letter_as_number);
      	i += 1;
    }
    
    var i = 0;
    while(i < 5) {
      	var random_int = getRandomInt(0, 9);
      	polish_id_arr.push(random_int);
      	elements_value.push(random_int);
      	i += 1;
    }
    
    var i = 0;
    while(i < 8) {
        checksum += (elements_value[i] * before_check_nr_weights[i]);
        i += 1;
   	}
    
    check_number = checksum % 10;
    polish_id_arr.splice(3, 0, check_number);
  	checksum += (check_number * check_number_weight);
    
    if(polish_id_arr.join('') == 'AAA000000') {
        checksum = 1;
    }

    return checksum;
}
	
function onclickGenerateId() {
	while (checksum % 10 != 0) {
 	   	var checksum = generateID(polish_id_arr, id_versions);
 	}
 	       	
 	let polish_id = polish_id_arr.join('').bold();
 	       	
 	document.getElementById("wynik").innerHTML = polish_id;
	polish_id_arr.length = 0;
}