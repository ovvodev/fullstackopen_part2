const Notification = ({ message }) => {
    if(message === null){
        return null;
    }
    return (
        <div >
            <p className="success">{message}</p>
        </div>
    )

}

export default Notification