export const header = `
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;

    background: #FFFFFF;
    box-shadow: 0px 3px 4px rgba(92, 92, 92, 0.25);
`;

export const wrapper = `
    width: 1140px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const subWrapper = `
    display: flex;
    align-items: center;
`;

export const linkStyles = `
    font-size: 20px;
    line-height: 23px;
    text-decoration: none;
    color: #566885;

    &:not(:last-child) {
        margin-right: 27px;
    }
`;

export const logoLink = `
    font-weight: bold;
    display: flex;
    align-items: center;
`;