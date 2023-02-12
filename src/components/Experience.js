function Experience(props) {
    const { onChangeExperience, id, ...inputProps } = props;
    return (
        <div className="input-div">
            <input {...inputProps} />
        </div>
    );
}

export default Experience;
