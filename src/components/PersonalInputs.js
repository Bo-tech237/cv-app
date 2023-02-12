function personalInput() {
    const personalInputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: 'First Name',
            required: true,
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            required: true,
        },
        {
            id: 3,
            name: 'currentRole',
            type: 'text',
            placeholder: 'Current Role',
            required: true,
        },
        {
            id: 4,
            name: 'address',
            type: 'text',
            placeholder: 'Address',
            required: true,
        },
        {
            id: 5,
            name: 'phoneNumber',
            type: 'number',
            placeholder: 'Phone Number',
            required: true,
        },
        {
            id: 6,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            required: true,
        },
        {
            id: 7,
            name: 'description',
            type: 'text',
            placeholder: 'Description',
            required: true,
        },
    ];

    return personalInputs;
}

export default personalInput;
