
const Wrapper = ({ children }) => {
    return (
        <section className="flex justify-center items-center">
            <div className="w-[500px] rounded shadow bg-white p-5">
                {children}
            </div>
        </section >
    )
}

export default Wrapper;