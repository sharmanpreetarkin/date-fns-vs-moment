import { addMinutes, subMinutes } from "date-fns";

export function toUTC(date) {
    const offset = date.getTimezoneOffset();

    return Math.sign(offset) !== -1 ? addMinutes(date, offset) : subMinutes(date, Math.abs(offset));
}