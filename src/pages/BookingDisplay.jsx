/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";
const BookingDisplay = ({ bookings, handleDelete }) => {
  const { name, email, courseFee, title, _id, phonePumber } = bookings;
  return (
    <div>
      <tr className="gap-x-5 flex justify-around">
        <th className="text-red-950 font-bold">{name}</th>
        <td>{email}</td>
        <td>{title}</td>
        <td>{courseFee}</td>
        <td>{phonePumber}</td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs text-red-500"
          >
            <FaDeleteLeft></FaDeleteLeft>
          </button>
        </td>
      </tr>
    </div>
  );
};

export default BookingDisplay;
