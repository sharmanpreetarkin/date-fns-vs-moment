import { format, differenceInDays, formatDistance } from 'date-fns';
import { timestamp, diffTimestamp, dateFnsFormatStr } from '../constants';
import { toUTC } from '../utils';

const dateFnsExample = ($el) => {
    $el.html(
        `<div>
            <p>Regular: ${format(timestamp, dateFnsFormatStr)}</p>
            <p>UTC: ${format(+(toUTC(new Date(timestamp))), dateFnsFormatStr)}</p>
            <p>Duration in days: ${differenceInDays(diffTimestamp, 0)} (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: ${formatDistance(diffTimestamp, 0)}</p>
            <p>Timestamp: ${format(timestamp, 'x')}</p>
        </div>`
    );
};

export default dateFnsExample;