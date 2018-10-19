export class Practice {
    constructor(fn, ln, ph, astr, acit, azip, aste, np, web) {
        this.first_name = fn;
        this.last_name = ln;
        this.phone = ph;
        this.address_street = astr;
        this.address_city = acit;
        this.address_zipcode = azip;
        this.address_state = aste;
        this.newPaitents = np;
        (web === undefined) ? this.web = "N/A" : this.web = web;
    }

    displayData() {

        return `
        <tr>
            <td>${this.last_name}</td>
            <td>${this.first_name}</td>
            <td>${this.phone}</td>
            <td>${this.address_street} ${this.address_city}, ${this.address_state} ${this.address_zipcode}</td>
            <td>${this.web}</td>
            <td>${this.newPaitents}</td>                                               
        </tr>`;
    }
}