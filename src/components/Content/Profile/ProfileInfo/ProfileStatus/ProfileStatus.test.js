// import React from 'react';
// import { act, create } from 'react-test-renderer';
// import ProfileStatus from './ProfileStatus';

// describe ("ProfileStatus component", () => {
//     test('component should be matches the snapshot', () => {
//         const component = create(<ProfileStatus />);
//         expect(component.toJSON()).toMatchSnapshot();
//     });

//     test("input should be displayed in editMode instead of span", () => {
//         let component;
//         act(() => {
//             component = create(<ProfileStatus status='testing status' />);
//         });
//         const instance = component.root;
//         const span = instance.findByType('span');
//         act(() => span.props.onDoubleClick());
//         expect(span).toBeNull();
//     });
// });

    // test('status from props should be in the state', () => {
    //     let component;
    //     act(() => {
    //         component = create(<ProfileStatus  status='testing status' />);
    //     });
    //     const instance = component.getInstance();
    //     expect(instance.props.status).toBe('testing status');
    // });
// }
//     test('after creation <span> should be displayed', () => {
//         const component = create(<ProfileStatus status='testing status' />);
//         const root = component.root;
//         let span = root.findByType('span');
//         expect(span).not.toBeNull();
//     });
//     test('after creation span should be displayed with correct status', () => {
//         const component = create(<ProfileStatus status = 'testing status' />);
//         const root = component.root;
//         let span = root.findByType('span');
//         expect(span.children[0]).toBe('testing status');
//     });
//     test("after creation <input> shouldn't be displayed", () => {
//         const component = create(<ProfileStatus status='testing status' />);
//         const root = component.root;
//         expect(() => {
//             let input = root.findByType('input');
//         }).toThrow();
//     });
//     test("input should be displayed in editMode instead of span", () => {
//         const component = create(<ProfileStatus status='testing status' />);
//         const root = component.root;
//         span = root.findByType('span');
//         span.props.onDoubleClick();
//         const input = root.findByType('input');
//         expect(input.props.value).toBe('testing status');
//     });
//     test("callback should be called", () => {
//         const mockCallback = jest.fn();
//         const component = create(<ProfileStatus
//             status='testing status'
//             setStatus={mockCallback} />);
//         const instance = component.getInstance();
//         instance.deactivateEditMode();
//         expect(mockCallback.mock.calls.length).toBe(1);
//     });
// });