function Status(props) {

    function getBadgeCSS() {
        switch (props.type) {
            case 'active':
                return 'bg-success';
            case 'expired':
                return 'bg-warning';
            case 'banned':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

    return (
        <span className={`badge ${getBadgeCSS()}`}>
            {props.type}
        </span>
    );
}

export default Status;