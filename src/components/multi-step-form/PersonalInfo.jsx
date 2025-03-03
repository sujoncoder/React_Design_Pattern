import Title from "../Title"
import Wrapper from "../Wrapper"

const PersonalInfo = () => {
    return (
        <section>
            <Title>
                Personal Information
            </Title>

            <Wrapper>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="name">Name</label><br />
                        <input id="name" type="text" placeholder="Write your name" className="border rounded px-2 h-10 w-full" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xl text-slate-600" htmlFor="email">Email</label><br />
                        <input id="email" type="email" placeholder="example@gmail.com" className="border rounded px-2 h-10 w-full" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default PersonalInfo