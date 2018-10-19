import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function () {

    $('#queryForm').submit(function (event) {
        event.preventDefault();  
        let allDoctors = new Doctor();
        let inputQuery = $('#query').val();
        let queryType = $('input[name=queryType]:checked').val();
        console.log(`QueryType ${queryType}`);
        let promise;
        if (queryType === "Name") {            
            promise = allDoctors.getDoctorsByName(inputQuery);          
            $('#doctorTitle').text(`Doctors by ${queryType}:`);
        } else if (queryType === "Symptom") {        
            promise = allDoctors.getDoctorsBySymptom(inputQuery);
            $('#doctorTitle').text(`Doctors by ${queryType}:`);            
        } else {
            promise = allDoctors.getDoctorsInSeattle();
            $('#doctorTitle').text(`Doctors in Seattle`);            
        }

        promise.then(function (response) {
            let body = JSON.parse(response);
            let data = body.data;
            console.log(data);

            if (data.length === 0) {
                $('#doctorList').text(`No doctors matching the symptom ${queryType} were found.`);
            } else {
                $('#doctorList').empty();
                for (let i = 0; i < data.length; i++) {
                    $('#doctorList').append(`<br>${data[i].profile.first_name} ${data[i].profile.last_name}  ${data[i].practices[0].phones[0].number}  ${data[i].practices[0].visit_address.street}  ${data[i].practices[0].website}  ${data[i].practices[0].accepts_new_patients} `);
                }
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);

        });
    });
});