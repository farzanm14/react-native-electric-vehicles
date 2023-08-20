import showFlashMessage from "./FlashMessage";

const mockedShowMessage = jest.fn();

jest.mock("react-native-flash-message", () => ({
  showMessage: mockedShowMessage,
}));

describe("showFlashMessage", () => {
  afterEach(() => {
    mockedShowMessage.mockClear();
  });

  it("should call showMessage with the correct options", () => {
    const message = "Test message";
    const type = "success";
    const duration = 5000;
    const description = "Test description";

    showFlashMessage(message, type, duration, description);

    expect(mockedShowMessage).toHaveBeenCalledWith({
      message,
      description,
      type,
      autoHide: true,
      duration,
    });
  });

  it("should call showMessage with default duration if duration is not provided", () => {
    const message = "Test message";
    const type = "warning";

    showFlashMessage(message, type);

    expect(mockedShowMessage).toHaveBeenCalledWith({
      message,
      description: undefined,
      type,
      autoHide: true,
      duration: 3000,
    });
  });
});
