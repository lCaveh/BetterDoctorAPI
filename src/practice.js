export class Practice {
    constructor(fn, ln, ph, astr, acit, azip, aste, np, web) {
        this.first_name = fn;
        this.last_name = ln;
        this.phone = ph;
        this.address_street = astr;
        this.address_city = acit;
        this.address_zipcode = azip;
        this.address_state = aste;
        (np) ? this.newPaitents = "Yes" : this.newPaitents = "No";
        (web === undefined) ? this.web = "N/A" : this.web = web;
    }

    displayData() {
        return `
        <tr>
            <td>${this.last_name}</td>
            <td>${this.first_name}</td>
            <td>${this.phone}</td>
            <td>${this.address_street} ${this.address_city}, ${this.address_state} ${this.address_zipcode}</td>
            <td>${this.newPaitents}</td>                                               
            <td>${this.web}</td>
        </tr>`;
    }

    displayName() {
        return `
        <tr>
            <td>${this.last_name}</td>
            <td>${this.first_name}</td>
            <td>${this.phone}</td>
        </tr>`;
    }

    isDuplicate(doctorListArr) {
        for (let i = 0; i < doctorListArr.length; i++) {
            let target = doctorListArr[i];
            if (this.first_name === target.first_name &&
                this.last_name === target.last_name &&
                this.phone === target.phone &&
                this.address_street === target.address_street &&
                this.address_city === target.address_city &&
                this.address_zipcode === target.address_zipcode &&
                this.address_state === target.address_state &&
                this.newPaitents === target.newPaitents
            ) {
                return true;
            }
        }
        return false;
    }
}