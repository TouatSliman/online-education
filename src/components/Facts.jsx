import { document } from "postcss";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import points from "../assets/img/points.svg";

const Facts = () => {
  const embedId = "6Bzqnxt_718?si=0yM4_R_h8AGGBOeP";

  const [countOn, setCountOn] = useState(false);

  return (
    <>
      <section className="pt-28 flex justify-center">
        {/* Outer container */}
        <div className="flex justify-center flex-wrap space-x-5 w-11/12 sm:w-10/12">
          {/* Text container */}
          <div className="w-full sm:w-5/12 mb-36">
            {/* Content */}
            <div className="flex flex-col items-end">
              <hr className="w-36 border-rose-500 border-2 border-solid" />
              <h2 className="sm:text-3xl text-xl w-full font-bold text-center mt-4 mb-12">
                أرضية التعليم الإلكتروني
              </h2>
              <p className="text-gray-400 text-center text-sm leading-7">
                أرضية التعليم الالكترونية معرفة بلا حدود للتعليم و التكوين عن
                بعد عبارة عن فضاء تعليمي يتوفر على موارد جد متنوعة كما يسمح
                بتفاعل المتعلمين مع أساتذتهم المرافقين من جهة و مع بعضهم البعض
                من جهة أخرى . لمزيد من التفاصيل يمكنكم مشاهدة هذا الفيديو السمعي
                البصري الذي يوضح لكم الطريقة التي يمكن من خلالها استغلال الخدمات
                التعليمية:<span className="opacity-0">نقطتين</span>
              </p>
            </div>
            {/* Numbers container*/}
            <ScrollTrigger
              onEnter={() => setCountOn(true)}
              onExit={() => setCountOn(false)}
            >
              <div className="flex justify-center pt-12 text-white">
                {/*content*/}
                <div className="flex justify-center items-center w-32 h-32 sm:h-36  mr-6 bg-gradient-to-br from-teal-700 to-teal-400 rounded-full rotate-[45deg]">
                  <div className="text-center rotate-[-45deg]">
                    <h3 className=" text-2xl font-bold">
                      {countOn && (
                        <CountUp start={0} end={6} duration={3} delay={0} />
                      )}
                    </h3>
                    <p className=" text-sm">أرضيات تعليمية</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-32 h-32 sm:h-36  mr-6 bg-gradient-to-br from-orange-500 to-rose-400 rounded-full rotate-[45deg]">
                  <div className="text-center rotate-[-45deg]">
                    <h3 className=" text-2xl font-bold">
                      {countOn && (
                        <CountUp start={0} end={12000} duration={3} delay={0} />
                      )}
                    </h3>
                    <p className=" text-sm">فيديو تعليمي</p>
                  </div>
                </div>
                <div className="flex justify-center items-center w-32 h-32 sm:h-36 bg-gradient-to-br from-sky-700 to-sky-400  rounded-full rotate-[45deg]">
                  <div className="text-center rotate-[-45deg]">
                    <h3 className=" text-2xl font-bold">
                      {countOn && (
                        <CountUp
                          start={0}
                          end={500000}
                          duration={3}
                          delay={0}
                        />
                      )}
                    </h3>
                    <p className="text-sm">متعلمين سنويا</p>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
          <div className="w-full flex justify-start items-center relative sm:w-5/12">
            <div className="">
              <img src={points} alt="points" className="w-3/4 mt-14" />
            </div>
            <div className="absolute h-full w-full flex justify-start items-center">
              <div className=".video">
                <iframe
                  id="youtubeVid"
                  src={`https://www.youtube.com/embed/${embedId}`}
                  className="h-[11rem] w-[19rem] mb-8 ml-3 sm:w-full sm:h-[12rem] sm:mb-12 sm:ml-10 rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;
