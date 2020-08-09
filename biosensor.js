// Class to create a biosensor for patients
class Biosensor_for_patients{
    constructor(name,id) {
        // Initialize a patient's name, id and track their heart beat
      this.patient = name;
      this.heartrate = 0;
      this.patient_num = id;
      //Calling live function
      this.Track_heartrate();
    }

    //Generating random numbers between 2 numbers
    Generate_Random_num(min,max){
        return parseInt(Math.random() * (max - min) + min);
    }

    //heart beat of the patient using random number generator 
    beat(){
        this.heartrate = this.Generate_Random_num(60,100);
        //Display the patient details and their respective heartrate.
        console.log('Biosensor Details of patient number '+ this.patient_num);
        console.log('The hearbeat of patient '+ this.patient + ' is ' + this.heartrate);
    }
    
    //Record the heart beat of patients every 1 second.
    Track_heartrate(){
        setInterval(() => {this.beat()},1000);
    }
  }

// Creating objects for class Biosensor_for_patients.
let patient1 = new Biosensor_for_patients('Adam',1);
let patient2 = new Biosensor_for_patients('Eve',2);