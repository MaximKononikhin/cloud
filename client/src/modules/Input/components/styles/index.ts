export const inputStyles = `
    display: flex;
    flex-direction: column;
    position: relative;

    margin: 0;
    padding-bottom: 27px;


    input {
        padding: 10px 19px;

        border: 1px solid rgba(255, 255, 255, 0.1);
        outline: none;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;

        :focus {
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
    }
    
    p {
        margin: 0;
        margin-bottom: 6px;
        padding-left: 10px;

        font-size: 13px;
        line-height: 17px;
        color: #FFFFFF;
    
        opacity: 0.5;
    }
`;

export const errorStyle = `
    margin: 0;
    position: absolute;
    bottom: 5px;
    left: 12px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    color: #E13A3A;
`