
const Button = ({ label, onClick, children, disabled, loading }) => {
    if (children) {
        return <div className="flex justify-center items-center">
            <button onClick={onClick}
                disabled={disabled}
                className='bg-blue-400 active:bg-blue-500 px-4 py-2 rounded text-white font-semibold'>{loading ? "Loading" : children}</button>
        </div>
    };
    return <div className="flex justify-center items-center">
        <button onClick={onClick}
            disabled={disabled}
            className='bg-blue-400 active:bg-blue-500 px-4 py-2 rounded text-white font-semibold'
        >{label}</button>
    </div>
}

export default Button