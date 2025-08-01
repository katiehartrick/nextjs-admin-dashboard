"use client";

import { ChevronUpIcon } from "@/assets/icons";
import flatpickr from "flatpickr";
import { useEffect } from "react";

const DatePickerTwo = () => {
  useEffect(() => {
    // Init flatpickr
    flatpickr(".form-datepicker", {
      mode: "single",
      static: true,
      monthSelectorType: "static",
      dateFormat: "M j, Y",
    });
  }, []);

  return (
    <div>
      <label className="mb-3 block text-body-sm font-medium text-black dark:text-white">
        Select date
      </label>
      <div className="relative">
        <input
          className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-black-300 dark:bg-black-800 dark:focus:border-primary"
          placeholder="mm/dd/yyyy"
          data-class="flatpickr-right"
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center text-black-400 dark:text-black-600">
          <ChevronUpIcon className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default DatePickerTwo;
