import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

const DatePicker = () => {

    class Day {
        color: string;
        date: Date;
        clicavel: boolean;
        constructor(color: string, date: Date, clicavel: boolean) {
            this.color = color;
            this.date = date;
            this.clicavel = clicavel;
        }
    }

    const days=new Array<Day>();

    var now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());


    var lastDateThisMonth = new Date(year, month + 1, 0);

    for (let i = 0; new Date(year, month, i).getDay() !== 0; i--) {
        days.push(new Day("gray-300", new Date(year, month, i), false));
        if (new Date(year, month, i - 1).getDay() === 0) {
            days.push(new Day("gray-300", new Date(year, month, i - 1), false));
        }
    }

    days.reverse();

    for (let i = 1; i < lastDateThisMonth.getDate(); i++) {
        days.push(new Day("primary_color", new Date(year, month, i), true));
    }

    for (let j = lastDateThisMonth.getDate(); new Date(year, month, j).getDay() !== 0; j++) {
        days.push(new Day("gray-300", new Date(year, month, j + 1), false));
    }

    console.log(days);

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
        <div className="min-h-[270px] w-full flex flex-col gap-4 px-3">
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
            <div className="grid grid-cols-7 gap-3">
                {days.map((dia: Day, index: number) => <p key={index} className={`text-center text-md font-medium text-${dia.color}`}>{dia.date.getDate()}</p>)}
            </div>
        </div>
    )
}

export default DatePicker;