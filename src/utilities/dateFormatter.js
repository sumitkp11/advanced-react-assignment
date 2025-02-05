import { parseISO, format } from 'date-fns';

export const DateFormatForMonth = (rawDate) => {
    let dateMonth = "";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let formatDate = rawDate.split('-');
    if (formatDate.length === 3) {
        dateMonth = months[formatDate[1] - 1];
        formatDate = `${formatDate[2]}${dateMonth}${formatDate[0]}`;
        return formatDate;

    }
    return rawDate;

}

export const FormatIsoDate = (isoDate) => {
    if (isoDate.includes("T")) {
        const date = parseISO(isoDate);
        const formattedDate = format(date, 'yyyy-MM-dd');
        return DateFormatForMonth(formattedDate);
    }
    return isoDate;

}