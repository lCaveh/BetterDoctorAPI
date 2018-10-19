import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function () {
    

    $('#symptomForm').submit(function(event) {
        event.preventDefault();
        let symptom = $('#symptom').val();
        let allEvents = new Doctor();
        let promise = allEvents.getDoctorsBySymptom(symptom);
    
        promise.then(function (response) {
            let body = JSON.parse(response);
            console.log(body);
            
            $('.eventList').text(`Events in ${symptom}:`);
            for (let i = 0; i < body._embedded.events.length; i++) {
                $('.eventList').append(`<br>${body._embedded.events[i].name}`);
                $('.eventList').append(`--- Date: ${body._embedded.events[i].dates.start.localDate}`);
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    
        });
    });

    $('#getAll').click(function() {
        let symptom = $('#symptom').val();
        let allEvents = new Doctor();
        let promise = allEvents.getDoctorsInSeattle();
    
        promise.then(function (response) {
            let data = JSON.parse(response.data);
            console.log(data);
            
            $('.doctorList').text(`Doctors in Seattle`);
            for (let i = 0; i < data.length; i++) {
                $('.doctorList').append(`<br>${data[i].pratices[0].profile.first_name} ${data[i].pratices[0].profile.last_name}  ${data[i].pratices[0].phones.number}  ${data[i].pratices[0].visit_address.street}  ${data[i].pratices[0].website}  ${data[i].pratices[0].accepts_new_patients} `);
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    
        });
    });    

  
});