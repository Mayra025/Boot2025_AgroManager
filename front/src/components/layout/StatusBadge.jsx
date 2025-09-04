const StatusBadge = ({ text, color }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
        {text}
    </span>
);

export default StatusBadge;
