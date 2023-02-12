function DisplayInputs(props) {
    const { title, message } = props;
    return (
        <div className="personal-info">
            <h2>{title}</h2>
            {message}
        </div>
    );
}

export default DisplayInputs;
