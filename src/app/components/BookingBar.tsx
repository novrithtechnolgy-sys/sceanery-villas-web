import Button from "./Button";

// components/BookingBar.tsx
export default function BookingBar() {
  return (
    <div className="relative md:-mt-18 w-full mx-auto  md:px-8 lg:px-12 xl:px-28">
    <div>
      <div className="bg-white font-[helvetica] rounded-[22px] shadow-lg border border-gray-100 p-5 md:p-6">
        <div className="text-[16px] md:text-[18px]  font-regular text-gray-900">
          Find Your Perfect Stay
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-17 gap-4 items-end">
          {/* Check in */}
          <div className="flex flex-row md:col-span-9 gap-4 ">
          <div className="md:col-span-3 w-full ">
            <label className="block text-[16px] text-gray-600 mb-4">
              Check in Date
            </label>
            <input
              type="date"
              value={new Date().toISOString().split("T")[0]}
              className="w-full rounded-full bg-gray-100 text-gray-600 border border-gray-200 px-4 py-2 md:py-3 text-[14px]
                         outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Check out */}
          <div className="md:col-span-3 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Check out Date
            </label>
            <input
              type="date"
              value={new Date().toISOString().split("T")[0]}
              className="w-full rounded-full bg-gray-100 border border-gray-200 text-gray-600 px-4 py-2 md:py-3 text-[14px]
                         outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          </div>

          {/* Guests */}
          <div className="md:col-span-4 w-full">
            <label className="block text-[16px] text-gray-600 mb-4">
              Guests
            </label>
            <select
              className="w-full rounded-full bg-gray-100 text-gray-600 border border-gray-200 px-4 py-2 md:py-3 text-[14px]
                         outline-none focus:ring-2 focus:ring-gray-900/10"
              defaultValue="0"
            >
              <option value="0">0 Adults • 0 Children</option>
              <option value="1">1 Adult • 0 Children</option>
              <option value="2">2 Adults • 0 Children</option>
              <option value="3">2 Adults • 1 Child</option>
              <option value="4">2 Adults • 2 Children</option>
            </select>
          </div>

          {/* Button */}
          <div className="md:col-span-4 flex justify-center md:justify-end mt-4">
            <Button variant="primary">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}