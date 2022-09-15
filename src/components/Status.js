function Status(props) {
    function getStatus() {
        switch (props.type) {
            case "Enable":
                return "bg-success";
            case "Disable":
                return "bg-danger";
        }
    }
    return ( 
        <>
        <span className={`badge ${getStatus()}`}>{props.type}</span>
        </>
     );
}

export default Status;