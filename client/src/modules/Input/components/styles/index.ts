export const inputStyles = `
    display: flex;
    flex-direction: column;
    position: relative;

    margin: 0;
    padding-bottom: 30px;

    input {
        padding: 12px 22px;

        border: none;
        outline: none;
        background: #FFFFFF;
        box-shadow: inset 0px 1px 10px #C4C4C4;
        border-radius: 50px;

        :focus {
            box-shadow: 0px 3px 9px rgba(117, 221, 164, 0.4);
        }
    }
    
    p {
        margin: 0;
        margin-bottom: 9px;
        padding-left: 12px;
    }
`;

export const errorStyle = `
    color: red;
    margin: 0;
    position: absolute;
    bottom: 5px;
    left: 12px;
    font-size: 12px;
`