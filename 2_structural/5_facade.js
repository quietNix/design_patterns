// The Facade Pattern is a structural design pattern that provides a simplified interface 
// to a complex subsystem of classes, hiding the complexities from the client.
// Facade: A single class that provides easy-to-use methods for clients.
// Subsystem classes: Multiple classes with complex logic that the client normally would have to interact with.



// Subsystem Classes
class FlightService {
    bookFlight(from, to) {
        console.log(`Booking flight from ${from} to ${to}`);
        return { flightId: 123, from, to };
    }
    cancelFlight(flightId) {
        console.log(`Cancelling flight with id ${flightId}`);
    }
}

class HotelService {
    bookHotel(city, nights) {
        console.log(`Booking hotel in ${city} for ${nights} nights`);
        return { hotelId: 456, city, nights };
    }
    cancelHotel(hotelId) {
        console.log(`Cancelling hotel with id ${hotelId}`);
    }
}

class CarRentalService {
    bookCar(city, days) {
        console.log(`Booking car in ${city} for ${days} days`);
        return { carId: 789, city, days };
    }
    cancelCar(carId) {
        console.log(`Cancelling car with id ${carId}`);
    }
}

// Facade
class TravelFacade {
    constructor(flightService, hotelService, carRentalService) {
        this.flightService = flightService;
        this.hotelService = hotelService;
        this.carRentalService = carRentalService;
        this.booking = null;
    }

    bookTrip(from, to, nights, days) {
        const flight = this.flightService.bookFlight(from, to);
        const hotel = this.hotelService.bookHotel(to, nights);
        const car = this.carRentalService.bookCar(to, days);
        this.booking = { flight, hotel, car };
        return this.booking;
    }

    cancelTrip() {
        if (!this.booking) {
            console.log("No booking to cancel");
            return;
        }
        this.flightService.cancelFlight(this.booking.flight.flightId);
        this.hotelService.cancelHotel(this.booking.hotel.hotelId);
        this.carRentalService.cancelCar(this.booking.car.carId);
        console.log("Trip cancelled successfully");
        this.booking = null;
    }
}

// Usage
const flightService = new FlightService();
const hotelService = new HotelService();
const carService = new CarRentalService();

const travelFacade = new TravelFacade(flightService, hotelService, carService);

const booking = travelFacade.bookTrip("New York", "Paris", 5, 3);
console.log(booking);

travelFacade.cancelTrip();
/* Output:
Booking flight from New York to Paris
Booking hotel in Paris for 5 nights
Booking car in Paris for 3 days
{ flight: { flightId: 123, from: 'New York', to: 'Paris' },
  hotel: { hotelId: 456, city: 'Paris', nights: 5 },
  car: { carId: 789, city: 'Paris', days: 3 } }
Cancelling flight with id 123
Cancelling hotel with id 456
Cancelling car with id 789
Trip cancelled successfully
*/




// S (Single Responsibility): Each subsystem class (Flight, Hotel, Car) handles one responsibility.

// O (Open/Closed): You can add new operations (like modifyTrip) without changing existing classes.

// L (Liskov Substitution): Facade can be used wherever the subsystem objects are expected without breaking behavior.

// I (Interface Segregation): Client only uses the facade’s methods (bookTrip, cancelTrip), not all subsystem methods.

// D (Dependency Inversion): Facade depends on abstractions (services), not concrete client logic.


// You want to simplify a complex subsystem for clients by providing a single, unified interface.
// You want to reduce coupling between client code and multiple classes.
// You want to hide internal complexities of a system while exposing only what’s necessary.
// You want to group related operations (like booking, cancelling, or modifying a trip) under one easy-to-use class.

// Like a universal remote: instead of operating TV, DVD, and sound system separately, you just press buttons on the remote.