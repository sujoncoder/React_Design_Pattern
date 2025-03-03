import Title from '../Title'
import Wrapper from '../Wrapper'

const Step2 = ({ inputs, onChange = () => { }, stepKey }) => {
    const { phone, city } = inputs || {};

    function handleChange(inputKey) {
        return (event) => {
            onChange({ value: event.target.value, stepKey, inputKey });
        }
    };

    return (
        <section>
            <Title>
                Contact Information
            </Title>

            <Wrapper>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="tel">Phone</label><br />
                        <input
                            id="tel"
                            type="tel"
                            value={phone}
                            onChange={handleChange("phone")}
                            placeholder="Write your phone number"
                            className="border rounded px-2 h-10 w-full" />
                    </div>


                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="text">City</label><br />
                        <input
                            id="text"
                            type="text"
                            value={city}
                            placeholder="City name"
                            onChange={handleChange("city")}
                            className="border rounded px-2 h-10 w-full" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Step2