    function Solve(array, criteria){
        class Ticket {
            constructor(destination, price, status){
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
        let tickets = [];
        for(let element of array){
            let params = String(element).split('|');
            tickets.push(new Ticket(params[0], Number(params[1]), params[2]))
        }
        switch(criteria){
            case 'destination':{
                tickets = tickets.sort(function(a,b){
                    return a.destination.localeCompare(b.destination)
                } )
                break;
            }
            case 'price':{
                tickets = tickets.sort((a,b) => a.price - b.price)
                break;
            }  
            case 'status':{
                tickets = tickets.sort(function(a,b){
                    return a.status.localeCompare(b.status)
                })
                break;
            }
        }

        return tickets;
    }

console.log(Solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'))