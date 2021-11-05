import {renderWithSessionContext} from "../../../common/services/context/SessionContext";
import SettingsModal from "../components/SettingsModal";
import userEvent from "@testing-library/user-event";



const userMock = {
    firstName: 'Test',
    secondName: 'Test',
    avatar: 'test.jpg',
    email: 'test@test.com',
    diskSpace: 120,
    usedSpace: 0,
};

const file = new File(['hello'], 'hello.png', {type: 'image/png'});

describe('Settings modal', () => {
    it('Renders settings modal', () => {
        const handleClose = jest.fn();
        const { getByTestId } = renderWithSessionContext(
            <SettingsModal handleClose={handleClose} />, {user: {
                user: userMock
            }}
        );
        expect(getByTestId('settings-modal')).toBeInTheDocument();
    });

    it('upload avatar', () => {
        const handleClose = jest.fn();
        const uploadAvatar = jest.fn();
        const { getByTestId } = renderWithSessionContext(
            <SettingsModal handleClose={handleClose} />, {user: {
                    user: userMock
                },
                uploadAvatar
            }
        );
        const input = getByTestId('settings-modal-input') as HTMLInputElement;
        userEvent.upload(input, file);
        expect(input.files[0]).toStrictEqual(file);
        expect(uploadAvatar).toHaveBeenCalledTimes(1);
    });

    it('Renders user avatar', () => {
        const handleClose = jest.fn();
        const { getByAltText } = renderWithSessionContext(
            <SettingsModal handleClose={handleClose} />, {user: {
                    user: userMock
                },
            }
        );
        expect(getByAltText('user-avatar')).toBeInTheDocument();
    });


    it('Renders default avatar', () => {
        const handleClose = jest.fn();
        const { getByAltText } = renderWithSessionContext(
            <SettingsModal handleClose={handleClose} />, {user: {
                    user: {
                        firstName: userMock.firstName,
                        secondName: userMock.secondName,
                        usedSpace: userMock.usedSpace,
                        diskSpace: userMock.diskSpace,
                        email: userMock.email,
                        avatar: ''
                    }
                },
            }
        );
        expect(getByAltText('no-avatar')).toBeInTheDocument();
    });
})