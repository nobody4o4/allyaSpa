function CheckOutAppointment() {
  return (
    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <div className="relative">
        <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div className="space-y-2">
          <p className="flex justify-between text-lg font-bold text-white">
            <span>Total price:</span>
            <span>$510.00</span>
          </p>
          <p className="flex justify-between text-sm font-medium text-white">
            <span>Vat: 10%</span>
            <span>$55.00</span>
          </p>
        </div>
      </div>
      <div className="relative mt-10 text-white">
        <h3 className="mb-5 text-lg font-bold">Support</h3>
        <p className="text-sm font-semibold">
          +01 653 235 211 <span className="font-light">(International)</span>
        </p>
        <p className="mt-1 text-sm font-semibold">
          support@nanohair.com <span className="font-light">(Email)</span>
        </p>
        <p className="mt-2 text-xs font-medium">
          Call us now for payment related issues
        </p>
      </div>
      <div className="relative mt-10 flex">
        <p className="flex flex-col">
          <span className="text-sm font-bold text-white">
            Money Back Guarantee
          </span>
          <span className="text-xs font-medium text-white">
            within 30 days of purchase
          </span>
        </p>
      </div>
    </div>
  );
}
export default CheckOutAppointment;
