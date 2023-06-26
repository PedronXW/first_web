import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

class Day {
    date: Date;
    clicavel: boolean;
    constructor(date: Date, clicavel: boolean) {
        this.date = date;
        this.clicavel = clicavel;
    }
}

const DatePicker = () => {

    const days = new Array<Day>();
    var now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());
    const [startSelected, setStartSelected] = useState<Date | null>(null);
    const [endSelected, setEndSelected] = useState<Date | null>(null);

    var lastDateThisMonth = new Date(year, month + 1, 0);

    function setSelected(day: Day) {
        if (startSelected == null) {
            setStartSelected(day.date);
            return;
        }
        if(day.date.getTime() == startSelected?.getTime()!){
            setEndSelected(day.date);
            return;
        }
        if (endSelected == null) {
            if (day.date.getTime() < startSelected?.getTime()!) {
                console.log(day.date);
                setEndSelected(startSelected);
                setStartSelected(day.date);
                return;
            }
            setEndSelected(day.date);
            return;
        }
        setStartSelected(day.date);
        setEndSelected(null);
    }

    function setStyle(day: Date) {
        if (endSelected !==null && startSelected!==null && endSelected?.getTime() === startSelected?.getTime()) {
            return "text-primary_color flex items-center justify-center text-center text-md font-normal bg-red-500 p-[6px] my-[2px] py-[8px] rounded-full cursor-pointer drop-shadow-3xl";
        }
        if (day.getTime() == startSelected?.getTime()) {
            return endSelected == null ?
            "text-primary_color flex items-center justify-center text-center text-md font-normal bg-red-500 p-[6px] my-[2px] py-[8px] rounded-full cursor-pointer drop-shadow-3xl":
            "text-primary_color flex items-center justify-center text-center text-md font-normal bg-red-500 p-[6px] my-[2px] py-[8px] rounded-l-full cursor-pointer drop-shadow-3xl";
        }
        if (day.getTime() == endSelected?.getTime()) {
            return "text-primary_color flex items-center justify-center text-center text-md font-normal bg-red-500 p-[6px] my-[2px] py-[8px] rounded-r-full cursor-pointer  drop-shadow-3xl";
        }
        if (day.getTime() > startSelected?.getTime()! && day.getTime() < endSelected?.getTime()!) {
            return "text-primary_color text-center flex items-center justify-center text-md font-normal bg-red-500 p-[6px] my-[2px] py-[8px] cursor-pointer drop-shadow-3xl";
        }
        if (day.getTime() <= lastDateThisMonth?.getTime()! && day.getTime() > new Date(year, month, 0)?.getTime()!) {
            return "text-primary_color text-center flex items-center justify-center text-md font-normal p-[6px] m-[4px] cursor-pointer"
        }
        return "text-gray-300 text-center flex items-center justify-center text-md font-normal p-[6px] m-[4px] cursor-pointer"
    }

    for (let i = 0; new Date(year, month, i).getDay() !== 0; i--) {
        days.push(new Day(new Date(year, month, i), false));
        if (new Date(year, month, i - 1).getDay() === 0) {
            days.push(new Day(new Date(year, month, i - 1), false));
        }
    }

    days.reverse();

    for (let i = 1; i <= lastDateThisMonth.getDate(); i++) {
        days.push(new Day(new Date(year, month, i), true));
    }

    for (let j = lastDateThisMonth.getDate()+1; new Date(year, month, j).getDay() !== 0; j++) {
        days.push(new Day(new Date(year, month, j), false));
    }

    function clear(array: any) {
        for (var o = 0; o < array.length; o++) {
            array.pop();
        }
    }

    function voltarMes() {
        var newMonth = month - 1;
        clear(days);
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(newMonth);
        }
    }


    function passarMes() {
        var newMonth = month + 1;
        clear(days);
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(newMonth);
        }
    }



    return (
        <div className="min-h-[270px] w-full flex flex-col gap-4">
            <div className="flex justify-between">
                <button onClick={voltarMes} className="text-primary_color text-2xl font-bold"><CaretLeft size={20} /></button>
                <p className="text-primary_color text-md font-bold">{month + 1}/{year}</p>
                <button onClick={passarMes} className="text-primary_color text-2xl font-bold"><CaretRight size={20} /></button>
            </div>
            <div className="flex justify-between">
                <p className="text-primary_color text-md font-medium">Dom</p>
                <p className="text-primary_color text-md font-medium">Seg</p>
                <p className="text-primary_color text-md font-medium">Ter</p>
                <p className="text-primary_color text-md font-medium">Qua</p>
                <p className="text-primary_color text-md font-medium">Qui</p>
                <p className="text-primary_color text-md font-medium">Sex</p>
                <p className="text-primary_color text-md font-medium">Sab</p>
            </div>
            <div className="grid grid-cols-7">
                {days.map((day: Day, index: number) => <p onClick={() => { setSelected(day) }} key={index} className={setStyle(day.date)}>{day.date.getDate()}</p>)}
            </div>
        </div>
    )
}

export default DatePicker;