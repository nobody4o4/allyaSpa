import FormBookAppointment from "../features/BookAppointment/Form.BookAppointment";
import SelectService from "../features/BookAppointment/SelectService";

function BookAppointment() {
  return (
    <div className="relative mx-auto w-full bg-white p-8 pt-28">
      <div className="grid min-h-screen grid-cols-10">
        <FormBookAppointment />
        <SelectService />
      </div>
    </div>
  );
}
export default BookAppointment;
