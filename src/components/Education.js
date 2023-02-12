function Education(props) {
    const { onChangeEducation, id, ...inputProps } = props;
    return (
        <div className="input-div">
            <input {...inputProps} />
        </div>
    );
}

export default Education;
