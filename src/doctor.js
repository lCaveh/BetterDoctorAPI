export class Ticket {
    constructor() {
        this.urlbase = "https://app.ticketmaster.com/discovery/v2/";
    }

    getDoctorsBySymptom(symptom) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=5&user_key=${process.env.API_KEY}`;
            let url = `https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${symptom}&apikey=${process.env.exports.apikey}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }

    getDoctorsInSeattle() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=5&user_key=${process.env.exports.apikey}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }
}