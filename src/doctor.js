export class Doctor {

    getDoctorsByName(name) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=wa-seattle&user_key=${process.env.exports.apikey}`;
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

    getDoctorsBySymptom(symptom) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&user_key=${process.env.exports.apikey}`;
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