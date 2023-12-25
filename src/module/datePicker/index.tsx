import { FC, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";

const DatePickers: FC = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div>
      <DatePicker
        value={value}
        render={(value: any, openCalendar: any) => {
          return <button onClick={openCalendar}>{value}</button>;
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-left"
      />
    </div>
  );
};

export default DatePickers;
