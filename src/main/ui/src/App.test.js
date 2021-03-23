import getNotification from "./components/Utils";

test('getNotification: takes error === -1 (what!?)', () => {
    // expect(getNotification(-1)).toStrictEqual();
    expect(getNotification(-1)).toStrictEqual(<div></div>);
});

test('getNotification: takes 0 errors', () => {
    expect(getNotification(0))
        .toStrictEqual(
            <div className="alert alert-success" role="alert">
                Everything is right.
            </div>);
});

test('getNotification: takes 1 error', () => {
    expect(getNotification(3))
        .toStrictEqual(
            <div className="alert alert-warning" role="alert">
                There are some warnings! Please, pay attention for it.
            </div>);
});

test('getNotification: takes 5 errors', () => {
    expect(getNotification(5)).toStrictEqual(
        <div className="alert alert-danger" role="alert">
            Too many errors!!! You need to replace it.
        </div>);
});

test('getNotification: takes 100 errors', () => {
    expect(getNotification(100)).toStrictEqual(
        <div className="alert alert-danger" role="alert">
            Too many errors!!! You need to replace it.
        </div>);
});

