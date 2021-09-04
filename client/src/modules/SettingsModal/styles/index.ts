export const modal = `
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 3333;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(214, 214, 214, 0.25);
    box-shadow: 0px 18px 60px 4px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(22px);
    border-radius: 30px;
`;

export const wrapper = `
    position: relative;
    padding: 45px 60px 45px 36px;
`;

export const buttonClose = `    
    position: absolute;
    top: 26px;
    right: 30px;
    background: unset;
    outline: unset;
    border: unset;
    padding: 0;
    cursor: pointer;
`;

export const avatarWrapper = `
    position: relative;
    width: 110px;
    height: 110px;
    margin-right: 25px;
`;

export const avatar = `
    border-radius: 50%;
    object-fit: cover;
`;

export const uploadAvatarWrapper = `
    position: absolute;
    bottom: 0;
    right: -6px;
    cursor: pointer;
    input {
        display: none;
    }
`;

export const subwrapper = `
    display: flex;
`

export const row = `
    margin: 0;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const categoryHeading = `
    font-size: 13px;
    line-height: 17px;
    color: #FFFFFF;

    opacity: 0.5;
`;

export const name = `
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
`;

export const email = `
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
`;