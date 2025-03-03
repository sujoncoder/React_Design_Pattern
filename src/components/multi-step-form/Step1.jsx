import Title from "../Title"
import Wrapper from "../Wrapper"

const Step1 = ({ inputs, onChange = () => { }, stepKey }) => {
    const { name, email } = inputs || {};

    // HANDLE CHANGE FUNCTION
    function handleChange(inputKey) {
        return (event) => {
            onChange({ value: event.target.value, stepKey, inputKey });
        }
    };

    return (
        <section>
            <Title>
                Personal Information
            </Title>

            <Wrapper>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="name">Name</label><br />
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleChange("name")}
                            placeholder="Write your name"
                            className="border rounded px-2 h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange("email")}
                            placeholder="example@gmail.com"
                            className="border rounded px-2 h-10 w-full" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Step1