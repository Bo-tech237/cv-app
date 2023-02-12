function PersonalInfo(props) {
    const { onChangePersonal, id, ...inputProps } = props;
    return (
        <div className="input-div">
            <input {...inputProps} />
        </div>
    );
}

export default PersonalInfo;
