export const sideModalTransition = {
    entering: {
        opacity: 0,
        marginRight: -402,
    },
    entered: {
        opacity: 1,
        transition: 'opacity 300ms, margin 300ms',
        marginRight: 0,
    },
    exiting: {
        opacity: 1,
        marginRight: 0,
    },
    exited: {
        opacity: 0,
        marginRight: -402,
        transition: 'opacity 300ms, margin 300ms'
    }
}
