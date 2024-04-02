
// write a component that displays a green line at about 100 width and 5 height
export const GreenLine = (width?: string | null) => (
    <div
        className={`${width && width.length > 1 ? width : 'w-52'} h-1`}
        style={{backgroundColor: '#6BB394'}}
    />
);