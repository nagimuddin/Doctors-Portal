import { format } from "date-fns";
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect (() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className=" text-center">
            <h4 className="text-xl text-escondary font-bold my-5">Available Appointments on: {format(date, 'PP')}</h4>
            <p className="mb-6">Please select a service</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
             date={date}
             treatment={treatment}
             setTreatment={setTreatment}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;