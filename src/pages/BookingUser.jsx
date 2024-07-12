import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import BookingDisplay from "./BookingDisplay";
import Swal from "sweetalert2";
import axios from "axios";

const BookingUser = () => {
  const { user } = useContext(authContext);
  const [bookings, setBooking] = useState([]);
  const url = `https://y-phi-beryl.vercel.app/orders/?.email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setBooking(res.data);
    });
  }, [url]);

  const handleDelete = (id) => {
    fetch(`https://y-phi-beryl.vercel.app/orders/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center p-3 text-2xl font-sans font-bold">
        Total Bookings:{bookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table>
          <thead className="table table-zebra">
            <tr className="flex justify-around gap-x-6">
              <th>Name</th>
              <th>Email</th>
              <th>Course-Title</th>
              <th>Course-Fee</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookings) => (
              <BookingDisplay
                key={bookings._id}
                bookings={bookings}
                handleDelete={handleDelete}
              ></BookingDisplay>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingUser;
