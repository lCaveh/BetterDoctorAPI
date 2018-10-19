import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function () {


    $('#symptomForm').submit(function (event) {
        event.preventDefault();
        let symptom = $('#symptom').val();
        let allEvents = new Doctor();
        let promise = allEvents.getDoctorsBySymptom(symptom);

        promise.then(function (response) {
            let body = JSON.parse(response);
            let data = body.data;
            console.log(data);

            $('.doctorTitle').text(`Doctors in ${symptom}:`);
            if (data.length === 0) {
                $('.doctorList').text(`No doctors matching the symptom ${symptom} were found.`);
            } else {
                $('.doctorList').empty();
                for (let i = 0; i < data.length; i++) {
                    $('.doctorList').append(`<br>${data[i].profile.first_name} ${data[i].profile.last_name}  ${data[i].practices[0].phones[0].number}  ${data[i].practices[0].visit_address.street}  ${data[i].practices[0].website}  ${data[i].practices[0].accepts_new_patients} `);
                }
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);

        });
    });

    $('#getAll').click(function () {
        let allEvents = new Doctor();
        let promise = allEvents.getDoctorsInSeattle();

        promise.then(function (response) {
            let body = JSON.parse(response);
            let data = body.data;
            console.log(data);

            $('.doctorTitle').text(`Doctors in Seattle`);
            if (data.length === 0) {
                $('.doctorList').text(`No doctors were found.`);
            } else {
                $('.doctorList').empty();
                for (let i = 0; i < data.length; i++) {
                    $('.doctorList').append(`<br>${data[i].profile.first_name} ${data[i].profile.last_name}  ${data[i].practices[0].phones[0].number}  ${data[i].practices[0].visit_address.street}  ${data[i].practices[0].website}  ${data[i].practices[0].accepts_new_patients} `);
                }
            }
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);

        });
    });


});