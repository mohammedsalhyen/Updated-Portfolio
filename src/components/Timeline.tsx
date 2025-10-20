
import Heading from './ui/Heading';
import { experience } from '../constant';
const Timeline = () => {

    const pargraph = "Here you can see my experience history, each step is supply me with a big amount of knowledge "
    return (
        <div>
            <div className='main-prop overflow-hidden bg-gray-800 ' id='Experience'>
                <div className='flex-center flex-col'>
                    <Heading title="My" span='Experience' p={pargraph} />
                </div>
                <div className='padding-container main-prop'>
                    {experience?.map((item: any, index: number) => (
                        <div
                            className={`flex justify-center w-full  relative ${index % 2 === 0 ? "felx-row" : "flex-row-reverse"}`} key={index}
                        >
                            <div className={`mb-10 flex flex-col px-5  flex-1 ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                                <p className='text-xl  '>{item.jobTitle}</p>
                                <p className='text-primary '>{item.workedFor}</p>
                                <p className='pt-2 text-gray-400 text-sm'>{item.responsibleFor}</p>
                            </div>
                            <div className="w-[2px] min-h-full bg-gray-400 flex flex-col relative  top-1 ">
                                <div className="w-[25px] h-[25px] rounded-full bg-gray-800 absolute top-0 left-1/2 translate-x-[-50%] border-8 border-gray-700"></div>
                            </div>
                            <div className={`flex-1 flex flex-col px-5 pt-1  ${index % 2 === 0 ? "items-start" : "items-end"}`}>
                                <p className=' text-gray-100  font-bold'>{item.start}/{item.end}  </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline
