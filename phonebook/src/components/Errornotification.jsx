const Errornotification = ({ message }) => {
    if(message === null){
        return null;
    }
    return (
        <div >
            <p className="error">{message}</p>
        </div>
    )

}

export default Errornotification