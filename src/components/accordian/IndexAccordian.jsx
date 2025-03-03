import Title from "../Title"
import Wrapper from "../Wrapper"
import Accordian from "./Accordian"


const IndexAccordian = () => {
    return (
        <section>
            <Title>
                Accordian
            </Title>

            <Wrapper>
                <Accordian heading="Learn React">
                    <div className='space-y-1 font-semibold pt-2'>
                        <p>Hello guys, I am learning React.</p>
                        <p>Hello guys, I am learning React Pro.</p>
                        <p>Hello guys, I am learning React Pro Level.</p>
                    </div>
                </Accordian>
            </Wrapper> <br />


            <div>
                <Title>
                    Native Accordian
                </Title>
                <Wrapper>
                    <details>
                        <summary className="text-2xl cursor-pointer">Learn React</summary>
                        <div className='space-y-1 font-semibold pt-2'>
                            <p>Hello guys, I am learning React.</p>
                            <p>Hello guys, I am learning React Pro.</p>
                            <p>Hello guys, I am learning React Pro Level.</p>
                        </div>
                    </details>
                </Wrapper>
            </div>
        </section>
    )
}

export default IndexAccordian