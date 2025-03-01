import './globals.css';



export default function Faq() {
    return (
        <div className="bg-black mb-25 mt-25 w-full">
            <h3 className="text-4xl justify-center flex">FAQs</h3>
            <Question question="How is my data stored?" />
            <Question question="Do you train on my data?" response="camelAI's infrastructure is hosed on AWS." />
            <Question question="Are my app connections secure?" />
            <Question question="How do you pull my data?" />

        </div>
    );
}

function Question({ question, response }) {
    return (


        <div className="p-2 h-15 border-b border-gray-600">

            <div >
                <h5 className="text-white font-semibold text-lg ">{question}</h5>
                <button>

                </button>


            </div>
            <p className="hidden">{response}</p>
        </div>
    );
}