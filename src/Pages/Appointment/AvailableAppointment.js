import { format } from "date-fns";
import { useEffect, useState } from "react";
import Service from "./Service";

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect (() => {
        fetch('services.json')
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
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;